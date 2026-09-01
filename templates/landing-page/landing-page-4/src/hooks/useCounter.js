import { useState, useEffect } from 'react';

export function useCounter(endValue, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * endValue);
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration, shouldStart]);

  return count;
}
