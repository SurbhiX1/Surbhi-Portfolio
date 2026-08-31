import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="scroll-progress-bar-container"
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#DDD5C7]/40 backdrop-blur-sm pointer-events-none"
      aria-hidden="true"
    >
      <div
        id="scroll-progress-indicator"
        className="h-full bg-gradient-to-r from-[#C49A4A] via-[#E2C98A] to-[#C49A4A] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(196,154,74,0.4)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
