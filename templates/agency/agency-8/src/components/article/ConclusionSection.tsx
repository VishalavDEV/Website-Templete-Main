import React from 'react';
import { motion } from 'motion/react';

interface ConclusionSectionProps {
  id?: string;
  headline: string;
  paragraphs: string[];
  finalQuote: string;
}

export const ConclusionSection: React.FC<ConclusionSectionProps> = ({
  id = 'section-conclusion',
  headline,
  paragraphs,
  finalQuote,
}) => {
  return (
    <section id={id} className="scroll-mt-32 pt-16 sm:pt-24 border-t border-white/10">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
          05 / WHAT COMES NEXT
        </span>
      </div>

      <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] uppercase tracking-tight leading-[1.02] mb-8 sm:mb-12">
        {headline}
      </h2>

      <div className="space-y-6 font-body text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed mb-16">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Strong Final Sentence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="p-8 sm:p-12 bg-white/[0.02] border border-white/10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#888888] block mb-3">
          FINAL AXIOM
        </span>
        <div className="font-display font-extrabold text-2xl sm:text-4xl text-[#0066FF] uppercase tracking-tight">
          {finalQuote}
        </div>
      </motion.div>
    </section>
  );
};
