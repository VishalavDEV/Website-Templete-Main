import { useState, useEffect, useRef } from 'react';

/**
 * Reusable hook to handle editorial sticky header behavior.
 * Tracks scroll distance, direction, and triggers shrink/backdrop transitions.
 */
export function useStickyHeader(threshold = 40) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = lastScrollYRef.current;

      // Threshold check for shrinking & backdrop transition
      setIsScrolled(currentScrollY > threshold);

      // Scroll direction check
      if (currentScrollY <= threshold) {
        setIsScrollingUp(true);
      } else if (currentScrollY < prevScrollY) {
        setIsScrollingUp(true);
      } else if (currentScrollY > prevScrollY && currentScrollY > threshold + 20) {
        setIsScrollingUp(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return {
    isScrolled,
    isScrollingUp,
    isSticky: isScrolled,
  };
}
