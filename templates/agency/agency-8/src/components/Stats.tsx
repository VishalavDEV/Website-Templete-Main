import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data/agencyData';

interface CounterProps {
  value: number;
  suffix: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const stepIncrement = value / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  // Pad single digits if necessary (e.g. 08)
  const displayCount = value < 10 && count < 10 ? `0${count}` : `${count}`;

  return (
    <span ref={ref} className="tabular-nums">
      {displayCount}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 sm:py-32 border-t border-[#ffffff10] bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="space-y-2 group"
            >
              <div className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#FAF9F6] group-hover:text-[#0066FF] transition-colors duration-300">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#FAF9F6] uppercase">
                {stat.label}
              </h3>
              <p className="text-xs text-[#888888] leading-relaxed font-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
