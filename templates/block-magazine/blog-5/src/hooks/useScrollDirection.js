import { useState, useEffect } from 'react';

/**
 * Detects scroll direction with threshold to hide header on scroll down
 * and reveal it with spring animation on scroll up
 */
export function useScrollDirection({ threshold = 15 } = {}) {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      setIsAtTop(scrollY < 30);

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        return;
      }

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [threshold]);

  return { scrollDirection, isAtTop };
}
