import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from 'framer-motion';

function AnimatedCounter({ value, duration = 1.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();
  
  const count = useMotionValue(0);
  // Round to at most 2 decimal places to accommodate percentages like 99.99% or multiplier ratios like 3.2x
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest * 100) / 100;
  });

  const [displayVal, setDisplayVal] = useState('0');

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayVal(value.toString());
      return;
    }

    if (inView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [inView, value, count, duration, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    return rounded.on('change', (v) => {
      // Check if it's an integer or float
      if (v % 1 === 0) {
        setDisplayVal(v.toString());
      } else {
        setDisplayVal(v.toFixed(v.toString().split('.')[1]?.length > 1 ? 2 : 1));
      }
    });
  }, [rounded, prefersReducedMotion]);

  return <span ref={ref}>{displayVal}</span>;
}

export default function Stats({ template }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 border border-brand-border bg-white divide-y lg:divide-y-0 lg:divide-x divide-brand-border"
        >
          {template.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="p-8 md:p-10 flex flex-col items-center justify-center text-center group"
            >
              {/* Stat Number */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-text mb-3 tracking-tight flex items-center justify-center">
                {stat.prefix && <span className="text-brand-accent mr-0.5">{stat.prefix}</span>}
                <AnimatedCounter value={stat.number} />
                {stat.suffix && <span className="text-brand-accent ml-0.5">{stat.suffix}</span>}
              </div>

              {/* Label */}
              <span className="text-xs font-bold tracking-wider text-brand-muted uppercase group-hover:text-brand-text transition-colors duration-300">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
