import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  label,
  description,
}) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  // Format single digit with leading zero if needed
  const formattedCount = count < 10 && to < 10 ? `0${count}` : count;

  return (
    <div ref={ref} className="space-y-2 p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]">
      <div className="text-4xl md:text-6xl font-extrabold font-display text-[var(--text-color)] tracking-tight">
        <span className="text-[var(--accent-color)]">{prefix}</span>
        {formattedCount}
        <span className="text-[var(--accent-color)]">{suffix}</span>
      </div>
      <div className="text-sm font-bold uppercase tracking-wider text-[var(--text-color)]">{label}</div>
      {description && <p className="text-xs text-[var(--secondary-color)] leading-relaxed font-light">{description}</p>}
    </div>
  );
};
