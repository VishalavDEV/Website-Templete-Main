import React from 'react';
import { motion } from 'motion/react';
import { CULTURE_DATA } from '../../data/careersData';

export const CultureSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 md:py-44 border-b border-white/10 relative overflow-hidden bg-[#080808]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066FF]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12 sm:space-y-16">
        {/* Label */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
            {CULTURE_DATA.label}
          </span>
        </div>

        {/* Massive Editorial Culture Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FAF9F6] uppercase tracking-tight leading-[0.94]">
            WE BELIEVE <br />
            <span className="text-[#666666]">GREAT WORK</span> <br />
            COMES FROM <br />
            <span className="text-[#0066FF]">GREAT CURIOSITY.</span>
          </h2>
        </motion.div>

        {/* Supporting Statement in Generous Whitespace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/10"
        >
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">
              STUDIO PHILOSOPHY // 01
            </span>
          </div>

          <div className="md:col-span-8 space-y-6">
            <p className="font-body text-xl sm:text-2xl text-[#FAF9F6] font-normal leading-relaxed">
              {CULTURE_DATA.supportingText}
            </p>
            <p className="font-body text-base sm:text-lg text-[#888888] font-light leading-relaxed max-w-3xl">
              We reject rigid hierarchies and transactional output. Every member of our team is encouraged to experiment, challenge assumptions, and shape the studio’s evolving creative direction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
