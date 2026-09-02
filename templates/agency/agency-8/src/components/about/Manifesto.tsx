import React from 'react';
import { motion } from 'motion/react';

const STATEMENTS = [
  'Technology should disappear into the experience.',
  'Design should create emotion.',
  'Strategy should create direction.',
  'Every interaction should have a reason.',
];

export const Manifesto: React.FC = () => {
  return (
    <section className="py-36 sm:py-56 border-t border-[#ffffff10] bg-[#080808] relative overflow-hidden">
      {/* Subtle Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0066FF]/[0.035] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-12 sm:mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
            STUDIO MANIFESTO
          </span>
        </motion.div>

        {/* Centerpiece Monumental Headline */}
        <div className="max-w-5xl mx-auto space-y-4 mb-20 sm:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            WE BELIEVE <br />
            DIGITAL SHOULD <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.08em]">
              feel human.
            </span>
          </motion.h2>
        </div>

        {/* Sequentially Animated Supporting Statements */}
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {STATEMENTS.map((stmt, idx) => (
            <motion.div
              key={stmt}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-4 sm:gap-6"
            >
              <span className="w-1 h-1 rounded-full bg-[#0066FF]" />
              <p className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#888888] hover:text-[#FAF9F6] transition-colors duration-300">
                {stmt}
              </p>
              <span className="w-1 h-1 rounded-full bg-[#0066FF]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
