import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 12, suffix: '+', label: 'Years of Strategy' },
  { value: 240, suffix: '+', label: 'Global Launches' },
  { value: 18, suffix: '', label: 'Design Awards' },
  { value: 35, suffix: '+', label: 'Fortune 500 Clients' },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1200; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-40px' });

  return (
    <section
      ref={containerRef}
      className="min-h-32 bg-[#0E1016] border-y border-white/5 py-8 md:py-0 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`flex flex-col justify-center py-4 md:py-8 ${
                idx === 0
                  ? 'md:pr-8'
                  : idx === stats.length - 1
                  ? 'md:pl-8'
                  : 'md:px-8'
              }`}
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight font-sans">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] text-white/40 font-mono">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
