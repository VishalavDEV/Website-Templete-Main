import React from 'react';
import { motion } from 'motion/react';
import { BENEFITS_DATA } from '../../data/careersData';

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 md:py-44 border-b border-white/10 relative overflow-hidden bg-[#060608]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
                06 / WHAT WE OFFER
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#FAF9F6] uppercase tracking-tight">
              WHAT YOU GET
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#888888] font-light max-w-md">
            We design an ecosystem where ambitious creative minds can do their life's defining work without burnout or bureaucratic interference.
          </p>
        </div>

        {/* Editorial Typography List (Anti-slop: No repetitive icon boxes or cards) */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {BENEFITS_DATA.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group hover:bg-white/[0.01] transition-colors"
            >
              {/* Number Index */}
              <div className="md:col-span-2">
                <span className="font-mono text-xs sm:text-sm text-[#0066FF] font-bold tracking-widest">
                  [ {benefit.number} ]
                </span>
              </div>

              {/* Benefit Title */}
              <div className="md:col-span-4">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FAF9F6] uppercase tracking-tight group-hover:text-[#0066FF] transition-colors">
                  {benefit.title}
                </h3>
              </div>

              {/* Benefit Description */}
              <div className="md:col-span-6">
                <p className="font-body text-sm sm:text-base text-[#A0A0A0] font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
