import React, { useEffect, useRef, useState, ReactNode } from 'react';

export type RevealAnimation = 'pop' | 'fade-up' | 'scale' | 'slide-left' | 'slide-right' | 'fade';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: RevealAnimation;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'pop',
  delay = 0,
  duration,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  once = true,
  as: Component = 'div',
  style = {},
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, reveal immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const currentElem = domRef.current;
    if (!currentElem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold, rootMargin, once]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'pop':
        return 'reveal-pop';
      case 'fade-up':
        return 'reveal-fade-up';
      case 'scale':
        return 'reveal-scale';
      case 'slide-left':
        return 'reveal-slide-left';
      case 'slide-right':
        return 'reveal-slide-right';
      case 'fade':
        return 'reveal-fade';
      default:
        return 'reveal-pop';
    }
  };

  const dynamicStyles: React.CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
    ...(duration ? { transitionDuration: `${duration}ms` } : {}),
  };

  return (
    <Component
      ref={domRef}
      className={`${getAnimationClass()} ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={dynamicStyles}
      {...props}
    >
      {children}
    </Component>
  );
};

// Global hook to initialize auto-reveal for elements using data-reveal or reveal-pop classes
export function useAutoScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll(
      '.reveal-pop:not(.reveal-visible), .reveal-fade-up:not(.reveal-visible), .reveal-scale:not(.reveal-visible), [data-reveal]:not(.reveal-visible)'
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  });
}
