import React from 'react';
import { motion } from 'motion/react';
import { PullQuote } from './PullQuote';

interface ProblemSectionProps {
  id?: string;
  headline: string;
  paragraphs: string[];
  pullQuote: string;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  id = 'section-problem',
  headline,
  paragraphs,
  pullQuote,
}) => {
  return (
    <section id={id} className="scroll-mt-32 pt-16 sm:pt-24 border-t border-white/10">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
          01 / THE PROBLEM
        </span>
      </div>

      <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] uppercase tracking-tight leading-[1.02] mb-8 sm:mb-12">
        {headline}
      </h2>

      {/* Editorial Paragraphs */}
      <div className="space-y-6 font-body text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Pull Quote */}
      <PullQuote
        quote={pullQuote}
        attribution="STUDIO EDITORIAL MONOGRAPH // NO. 04"
      />
    </section>
  );
};
