import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const target = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const end = target;
    const totalMiliseconds = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / 20)); // Accelerate counting
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const suffix = value.replace(/[0-9]/g, '');

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export default Counter;
