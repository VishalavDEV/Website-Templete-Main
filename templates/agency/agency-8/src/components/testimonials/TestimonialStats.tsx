import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({
  end,
  suffix = '',
  prefix = '',
  duration = 1.8,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, end, duration]);

  const formatted = count < 10 && end >= 10 ? `0${count}` : count < 10 && suffix === '' ? `0${count}` : `${count}`;

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export const TestimonialStats: React.FC = () => {
  const stats = [
    { value: 42, suffix: '+', label: 'CLIENTS', desc: 'From seed-stage disruptors to public enterprises' },
    { value: 120, suffix: '+', label: 'PROJECTS', desc: 'Identities, spatial platforms, and interactive systems' },
    { value: 18, suffix: '', label: 'DISCIPLINES', desc: 'Strategists, 3D artists, creative coders & designers' },
    { value: 8, suffix: '', label: 'YEARS', desc: 'Committed to technological rigor and high design' },
  ];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#060608] border-b border-[#ffffff10]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12 sm:mb-16">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
            07 / MEASURED IMPACT
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-3">
              <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#FAF9F6] tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-xs text-[#0066FF] uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
              <p className="text-xs text-[#888888] font-light leading-relaxed max-w-xs">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
