import React from 'react';
import { motion } from 'motion/react';

interface AttentionItem {
  number: string;
  title: string;
  explanation: string;
}

interface AttentionSectionProps {
  id?: string;
  headline: string;
  items: AttentionItem[];
}

export const AttentionSection: React.FC<AttentionSectionProps> = ({
  id = 'section-attention',
  headline,
  items,
}) => {
  return (
    <section id={id} className="scroll-mt-32 pt-16 sm:pt-24 border-t border-white/10">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
          02 / DESIGNING FOR ATTENTION
        </span>
      </div>

      <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] uppercase tracking-tight leading-[1.02] mb-8 sm:mb-12">
        {headline}
      </h2>

      <div className="space-y-6 font-body text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed mb-16">
        <p>
          Every digital interface makes an ethical claim on the user's consciousness. When we treat attention as an extractive resource to be mined rather than a human gift to be respected, we cultivate visual exhaustion.
        </p>
        <p>
          Designing for calm attention requires setting rigorous constraints. It demands that every typographic weight, spacing increment, and micro-transition serves a distinct communicative function rather than mere stylistic vanity.
        </p>
      </div>

      {/* Numbered Editorial List */}
      <div className="space-y-12 sm:space-y-16 border-t border-white/10 pt-12">
        {items.map((item, idx) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-10 border-b border-white/5"
          >
            <div className="md:col-span-2">
              <span className="font-mono text-sm sm:text-base text-[#0066FF] font-bold tracking-widest">
                {item.number}
              </span>
            </div>

            <div className="md:col-span-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#FAF9F6] uppercase tracking-tight">
                {item.title}
              </h3>
            </div>

            <div className="md:col-span-6">
              <p className="font-body text-sm sm:text-base text-[#888888] font-light leading-relaxed">
                {item.explanation}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
