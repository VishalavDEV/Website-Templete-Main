import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

export default function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Parse value to extract numeric content, prefix, and suffix (e.g. $85M+ -> prefix: $, number: 85, suffix: M+)
  const match = value.match(/([\d.]+)/);
  const numberVal = match ? parseFloat(match[1]) : 0;
  const isFloat = match ? match[1].includes('.') : false;
  const prefix = match ? value.substring(0, match.index) : '';
  const suffix = match ? value.substring(match.index + match[1].length) : value;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (isFloat) {
      return latest.toFixed(1);
    }
    return Math.floor(latest).toString();
  });

  const [displayValue, setDisplayValue] = useState(prefix + '0' + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numberVal, {
        duration: 2,
        ease: 'easeOut',
      });
      return () => controls.stop();
    }
  }, [isInView, count, numberVal]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      setDisplayValue(prefix + latest + suffix);
    });
  }, [rounded, prefix, suffix]);

  return (
    <span ref={ref} className="font-mono text-3xl md:text-5xl font-extrabold text-purple-600 block">
      {displayValue}
    </span>
  );
}
