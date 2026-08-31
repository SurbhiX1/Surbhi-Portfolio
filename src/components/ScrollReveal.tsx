import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // base delay in ms
  staggerIndex?: number; // index for staggering items
  staggerMs?: number; // ms per item in stagger
  direction?: 'up' | 'none';
  as?: React.ElementType;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  staggerIndex = 0,
  staggerMs = 80,
  direction = 'up',
  as: Component = 'div',
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user prefers reduced motion, reveal immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // Check if element is already in initial viewport on mount
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger ONCE: unobserve after revealing to prevent repeated trigger
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const totalDelay = delay + staggerIndex * staggerMs;

  return (
    <Component
      ref={elementRef}
      id={id}
      style={{
        transitionDuration: '650ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: isVisible ? `${totalDelay}ms` : '0ms',
      }}
      className={`transition-all ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : direction === 'up'
          ? 'opacity-0 translate-y-6 pointer-events-none'
          : 'opacity-0 pointer-events-none'
      } ${className}`}
    >
      {children}
    </Component>
  );
};

