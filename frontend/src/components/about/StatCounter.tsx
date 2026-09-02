import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix,
  label,
  description,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const increment = value / (duration / 25);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="p-6 bg-[#12161f] border border-white/5 rounded-sm relative overflow-hidden group hover:border-[#66fcf1]/30 transition-all duration-300">
      <div className="text-4xl sm:text-5xl font-black font-['Syne'] text-white tracking-tight mb-1 flex items-baseline">
        <span className="text-[#66fcf1]">{count}</span>
        <span className="text-[#66fcf1] text-2xl ml-0.5">{suffix}</span>
      </div>

      <div className="text-xs uppercase font-mono tracking-wider text-white font-semibold mb-1">
        {label}
      </div>

      <div className="text-xs text-[#c5c6c7]/60 font-light">
        {description}
      </div>

      {/* Ambient hover accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#66fcf1]/0 to-transparent group-hover:via-[#66fcf1]/60 transition-all duration-500" />
    </div>
  );
};
