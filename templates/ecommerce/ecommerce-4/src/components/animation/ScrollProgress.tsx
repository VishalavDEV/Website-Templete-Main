import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        backgroundColor: 'transparent',
        zIndex: 1000,
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          backgroundColor: 'var(--accent-cobalt)',
          boxShadow: '0 0 8px rgba(30, 64, 175, 0.6)',
          transition: 'width 100ms ease-out'
        }}
      />
    </div>
  );
};
