import React from 'react';
import { motion } from 'motion/react';

interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

interface PrinciplesSectionProps {
  id?: string;
  principles: PrincipleItem[];
}

export const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({
  id = 'section-principles',
  principles,
}) => {
  return (
    <section id={id} className="scroll-mt-32 pt-16 sm:pt-24 border-t border-white/10">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
          04 / FIVE PRINCIPLES
        </span>
      </div>

      <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FAF9F6] uppercase tracking-tight leading-[1.02] mb-12 sm:mb-16">
        THE CORE AXIOMS OF INVISIBLE DESIGN
      </h2>

      {/* Principles List without repetitive cards */}
      <div className="divide-y divide-white/10 border-y border-white/10">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
            className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
          >
            <div className="md:col-span-2">
              <span className="font-mono text-sm sm:text-base text-[#0066FF] font-bold tracking-widest">
                [ {principle.number} ]
              </span>
            </div>

            <div className="md:col-span-5">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FAF9F6] uppercase tracking-tight">
                {principle.title}
              </h3>
            </div>

            <div className="md:col-span-5">
              <p className="font-body text-sm sm:text-base text-[#888888] font-light leading-relaxed">
                {principle.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
