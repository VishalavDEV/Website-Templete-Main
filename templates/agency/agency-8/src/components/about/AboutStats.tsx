import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatConfig {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  subtext: string;
}

const STATS_DATA: StatConfig[] = [
  {
    value: 120,
    suffix: '+',
    label: 'PROJECTS',
    subtext: 'Delivered across web, spatial UI & brand platforms',
  },
  {
    value: 42,
    suffix: '',
    label: 'GLOBAL CLIENTS',
    subtext: 'Partnering across London, New York, Tokyo & Zurich',
  },
  {
    value: 8,
    prefix: '0',
    suffix: '',
    label: 'YEARS OF EXPERIENCE',
    subtext: 'Committed exclusively to bespoke digital craft',
  },
  {
    value: 18,
    suffix: '',
    label: 'CREATIVE SPECIALISTS',
    subtext: 'Strategists, art directors & creative engineers',
  },
];

const StatCounter: React.FC<{ value: number; suffix: string; prefix?: string }> = ({
  value,
  suffix,
  prefix = '',
}) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayCount = prefix && count < 10 ? `${prefix}${count}` : count;

  return (
    <span ref={ref} className="font-display">
      {displayCount}
      {suffix}
    </span>
  );
};

export const AboutStats: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 border-t border-[#ffffff10] bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="space-y-3 group border-l border-[#ffffff10] pl-6"
            >
              <div className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#FAF9F6] group-hover:text-[#0066FF] transition-colors duration-300">
                <StatCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-[#FAF9F6]">
                {stat.label}
              </h3>
              <p className="text-xs text-[#888888] leading-relaxed font-mono">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
