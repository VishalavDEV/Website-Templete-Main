import React from 'react';
import { motion } from 'motion/react';

export const FinalStatement: React.FC = () => {
  return (
    <section className="py-28 sm:py-44 border-b border-white/10 relative overflow-hidden bg-[#060608] text-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-8 relative z-10">
        <div className="flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
            STUDIO CREDO
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 sm:space-y-6"
        >
          <p className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#666666] uppercase tracking-tight leading-[0.92]">
            COME CURIOUS.
          </p>

          <p className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#FAF9F6] uppercase tracking-tight leading-[0.92]">
            LEAVE SOMETHING <br />
            <span className="text-[#0066FF]">BETTER.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
