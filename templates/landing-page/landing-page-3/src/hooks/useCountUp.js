import { useState, useEffect } from 'react';

export function useCountUp(target, duration = 2000, startNow = true, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startNow) return;

    let start = 0;
    const end = parseFloat(target);
    if (isNaN(end)) return;

    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easeOutExpo curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (end - start) * easeProgress;
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    const animId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animId);
  }, [target, duration, startNow]);

  return count.toFixed(decimals);
}
