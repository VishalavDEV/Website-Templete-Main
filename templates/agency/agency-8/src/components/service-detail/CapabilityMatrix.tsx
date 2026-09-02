import React from 'react';
import { motion } from 'motion/react';
import { ServiceDetailConfig } from '../../data/serviceDetailData';
import { CursorType } from '../../types';
import { Sparkles } from 'lucide-react';

interface CapabilityMatrixProps {
  service: ServiceDetailConfig;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const CapabilityMatrix: React.FC<CapabilityMatrixProps> = ({
  service,
  setCursorType,
}) => {
  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              {service.capabilityGridHeading}
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666]">
            INTEGRATED CAPABILITY MATRIX
          </span>
        </div>

        {/* 8-Item High-Craft Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {service.capabilityGrid.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="group p-6 sm:p-8 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#0066FF]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between min-h-[160px] cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#666666] group-hover:text-[#0066FF] transition-colors">
                  0{index + 1}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-white/20 group-hover:text-[#0066FF] transition-colors" />
              </div>

              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-[#FAF9F6] tracking-tight group-hover:text-[#0066FF] transition-colors">
                  {item}
                </h3>
                <span className="font-mono text-[10px] text-[#888888] uppercase tracking-wider block mt-1">
                  TACTICAL DISCIPLINE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
