import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | '3d' | '3d-flip';
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  className?: string;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  className = '',
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-10 opacity-0';
      case 'down':
        return '-translate-y-10 opacity-0';
      case 'left':
        return 'translate-x-10 opacity-0';
      case 'right':
        return '-translate-x-10 opacity-0';
      case 'scale':
        return 'scale-95 opacity-0';
      case '3d':
      case '3d-flip':
        return 'translate-y-8 opacity-0';
      default:
        return 'translate-y-10 opacity-0';
    }
  };

  const getVisibleTransform = () => {
    switch (direction) {
      case 'scale':
        return 'scale-100 opacity-100';
      default:
        return 'translate-x-0 translate-y-0 opacity-100';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        perspective: direction === '3d' || direction === '3d-flip' ? '1200px' : undefined,
        transformStyle: direction === '3d' || direction === '3d-flip' ? 'preserve-3d' : undefined
      }}
      className={`transition-all ${isVisible ? getVisibleTransform() : getInitialTransform()} ${className}`}
    >
      {children}
    </div>
  );
};
