import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ value, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Extract number from string like "150+" -> 150
  const numericValue = parseInt(value.toString().replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    const totalSteps = 50;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
