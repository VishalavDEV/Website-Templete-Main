import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return 'opacity-0 translate-y-12';
        case 'slide-left':
          return 'opacity-0 -translate-x-12';
        case 'slide-right':
          return 'opacity-0 translate-x-12';
        case 'scale-up':
          return 'opacity-0 scale-90';
        case 'fade-in':
        default:
          return 'opacity-0';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationStyles()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
