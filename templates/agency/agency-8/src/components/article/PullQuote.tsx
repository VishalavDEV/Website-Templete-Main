import React from 'react';
import { motion } from 'motion/react';

interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

export const PullQuote: React.FC<PullQuoteProps> = ({ quote, attribution }) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="my-16 sm:my-24 py-8 sm:py-12 border-y border-white/15 relative"
    >
      {/* Decorative accent mark */}
      <span className="font-serif italic text-6xl sm:text-7xl text-[#0066FF] absolute -top-5 left-0 leading-none select-none">
        “
      </span>

      <blockquote className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#FAF9F6] uppercase tracking-tight leading-[1.08] pt-4">
        {quote}
      </blockquote>

      {attribution && (
        <figcaption className="mt-6 font-mono text-xs text-[#0066FF] uppercase tracking-widest font-semibold flex items-center gap-2">
          <span className="w-4 h-[1px] bg-[#0066FF]" />
          {attribution}
        </figcaption>
      )}
    </motion.figure>
  );
};
