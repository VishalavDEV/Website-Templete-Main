import React from 'react';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ScrollReveal } from '../common/ScrollReveal';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: '12+', label: 'Years Active', sublabel: 'Guiding global digital transformations' },
    { value: '180+', label: 'Projects Completed', sublabel: 'Cross-industry enterprise platforms' },
    { value: '32', label: 'Markets & Sectors', sublabel: 'FinTech, Tech, Luxury, Biotech, Mobility' },
    { value: '94%', label: 'Executive Retention', sublabel: 'Multi-year strategic partnerships' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#f8f7f4] relative overflow-hidden select-none border-b-2 border-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#090909] font-black block mb-2">
              AGENCY TELEMETRY // DATA RECON
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black uppercase text-[#090909] tracking-tighter">
              ENTERPRISE IMPACT
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
              <AnimatedCounter value={s.value} label={s.label} sublabel={s.sublabel} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
