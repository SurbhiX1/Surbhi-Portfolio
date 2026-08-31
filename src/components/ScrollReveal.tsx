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
  staggerMs = 90,
  direction = 'up',
  as: Component = 'div',
  id,
}) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return false;
  });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user prefers reduced motion, reveal immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger ONCE: unobserve after revealing to prevent repeated triggers
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10% 0px',
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
        transitionDelay: isVisible ? `${totalDelay}ms` : '0ms',
        transform: isVisible
          ? 'translateY(0)'
          : direction === 'up'
          ? 'translateY(60px)'
          : 'none',
        opacity: isVisible ? 1 : 0.45,
      }}
      className={`scroll-reveal-item ${className}`}
    >
      {children}
    </Component>
  );
};

