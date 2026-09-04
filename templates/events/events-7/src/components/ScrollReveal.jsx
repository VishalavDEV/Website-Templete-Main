import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, direction = 'up', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // If IntersectionObserver is not supported or for rapid initial rendering
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    // Safety fallback: ensure content reveals within 1 second even if observer fails
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => {
      clearTimeout(fallbackTimer);
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0) scale(1)';
    switch (direction) {
      case 'up': return 'translateY(30px)';
      case 'down': return 'translateY(-30px)';
      case 'left': return 'translateX(30px)';
      case 'right': return 'translateX(-30px)';
      case 'scale': return 'scale(0.95)';
      default: return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) ${delay}ms, transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
