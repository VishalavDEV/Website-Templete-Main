import { useState, useEffect } from 'react';

export function useCounter(endValue, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOnView) return;

    let start = 0;
    const isFloat = !Number.isInteger(endValue);
    const totalFrames = Math.round((duration / 1000) * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = endValue * easeOut;

      if (frame >= totalFrames) {
        setCount(endValue);
        clearInterval(counter);
      } else {
        setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.round(current));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [endValue, duration, startOnView]);

  return count;
}
