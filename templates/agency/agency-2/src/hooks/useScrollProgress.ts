import { useState, useEffect, useRef } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const targetProgress = useRef(0);
  const smoothedProgress = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const calculated = totalScroll > 0 ? Math.min(Math.max(currentY / totalScroll, 0), 1) : 0;

      targetProgress.current = calculated;
      setScrollY(currentY);
      setIsScrolled(currentY > 40);
    };

    const updateSmoothLoop = () => {
      // Lerp smoothing: smoothed += (target - smoothed) * 0.12
      const diff = targetProgress.current - smoothedProgress.current;
      if (Math.abs(diff) > 0.0001) {
        smoothedProgress.current += diff * 0.12;
        setProgress(smoothedProgress.current);
      }
      rafId.current = requestAnimationFrame(updateSmoothLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    rafId.current = requestAnimationFrame(updateSmoothLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return { progress, scrollY, isScrolled };
}
