import React from 'react';
import { motion } from 'motion/react';
import { ServiceDetailConfig } from '../../data/serviceDetailData';

interface ImpactStatsProps {
  service: ServiceDetailConfig;
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({ service }) => {
  return (
    <section className="py-32 sm:py-48 bg-[#0a0a0a] border-t border-[#ffffff10] px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              PROVEN PERFORMANCE
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666]">
            MEASURABLE COMMERCIAL OUTCOMES
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            {service.impactHeading.line1} <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              {service.impactHeading.line2}
            </span> <br />
            {service.impactHeading.line3}
          </motion.h2>

          <p className="mt-6 text-base sm:text-lg text-[#888888] font-sans">
            {service.impactSubtext}
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {service.impactStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden group hover:border-[#0066FF]/40 transition-colors"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs text-[#0066FF] block font-bold">
                  METRIC // 0{idx + 1}
                </span>

                <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#FAF9F6]">
                  {stat.value}
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-[#FAF9F6]">
                    {stat.label}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#888888] leading-relaxed">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="pt-12 text-center">
          <p className="font-mono text-xs text-[#666666] tracking-wider uppercase">
            {service.impactDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
