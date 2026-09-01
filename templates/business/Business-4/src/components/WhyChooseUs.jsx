import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function WhyChooseUs({ template }) {
  const prefersReducedMotion = useReducedMotion();

  const animationProps = (delay = 0) =>
    prefersReducedMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: '-60px' } }
      : {
          initial: { opacity: 0, x: 25 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.6, ease: 'easeOut', delay },
        };

  return (
    <section className="py-24 px-6 md:px-12 bg-brand-light/30 border-y border-brand-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Section Title (Sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-accent mb-3 block uppercase">
              WHY CHOOSE US
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text mb-6 leading-tight ${template.themeClass}`}>
              Engineered for Real-World Scalability
            </h2>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed max-w-md">
              We design and implement custom systems that eliminate operational bottlenecks and set up your business for long-term growth.
            </p>
          </div>

          {/* RIGHT: Advantages List */}
          <div className="lg:col-span-7 divide-y divide-brand-border/60">
            {template.whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                {...animationProps(index * 0.1)}
                className="py-10 first:pt-0 last:pb-0 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 group"
              >
                {/* Number Accent */}
                <span className="text-sm font-mono font-bold text-brand-accent tracking-widest md:w-[12%] pt-1">
                  {item.number}
                </span>

                {/* Content */}
                <div className="md:w-[88%]">
                  <h3 className={`text-xl font-bold text-brand-text mb-3 transition-colors duration-300 group-hover:text-brand-accent ${template.themeClass}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
