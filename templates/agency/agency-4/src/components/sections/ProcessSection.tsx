import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { PROCESS_STEPS } from '../../data/studio';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 md:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Methodology"
          title="A disciplined framework for creative breakthrough."
          subtitle="Our 5-stage strategic pipeline guarantees velocity, precision, and alignment from kickoff to launch."
        />

        {/* 5-Stage Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6 relative">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EAE6DF] shadow-xs hover:shadow-xl hover:border-[#D96B43]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Stage Header Image */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#EAE6DF] relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#D96B43] font-bold text-xs px-2.5 py-1 rounded-full">
                    Stage {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-[#1A1918] group-hover:text-[#D96B43] transition-colors mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#6B6863] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Duration Badge */}
              <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Timeframe</span>
                <span className="text-xs font-bold text-[#D96B43] bg-[#F9EFEA] px-2.5 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
