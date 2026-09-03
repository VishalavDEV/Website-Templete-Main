import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    scrollProgress: 0,
    isScrolled: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;

      setScrollPosition({
        scrollY: currentScrollY,
        scrollProgress: Math.min(Math.max(progress, 0), 100),
        isScrolled: currentScrollY > 40,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}
