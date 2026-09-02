import React from 'react';
import { motion } from 'motion/react';

interface StatementQuoteProps {
  line1?: string;
  line2?: string;
}

export const StatementQuote: React.FC<StatementQuoteProps> = ({
  line1 = "THE GOAL ISN'T TO MAKE THE USER NOTICE THE DESIGN.",
  line2 = 'THE GOAL IS TO MAKE THE EXPERIENCE WORTH NOTICING.',
}) => {
  return (
    <section className="my-28 sm:my-40 py-16 sm:py-24 border-y border-white/15 relative overflow-hidden bg-[#060608]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0066FF]/[0.035] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <p className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#666666] uppercase tracking-tight leading-[0.98]">
            {line1}
          </p>

          <p className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAF9F6] uppercase tracking-tight leading-[0.98]">
            {line2}
          </p>
        </motion.div>

        <div className="pt-4 flex items-center justify-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
            STUDIO EDITORIAL MONOGRAPH // 2026
          </span>
        </div>
      </div>
    </section>
  );
};
