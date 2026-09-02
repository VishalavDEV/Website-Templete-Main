import React from 'react';
import { motion } from 'motion/react';
import { CAPABILITY_TOOLKIT } from '../../data/servicesData';
import { CursorType } from '../../types';

interface CapabilityMatrixProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const CapabilityMatrix: React.FC<CapabilityMatrixProps> = ({ setCursorType }) => {
  return (
    <section className="py-32 sm:py-44 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-16 sm:mb-20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              TECHNICAL MASTERY
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] hidden sm:inline-block">
            FULL-SPECTRUM COMPETENCE
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            OUR TOOLKIT <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              &amp; stack.
            </span>
          </motion.h2>
        </div>

        {/* Pure Editorial Typography Matrix (No Generic Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {CAPABILITY_TOOLKIT.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              className={`space-y-6 pt-8 md:pt-0 ${groupIdx !== 0 ? 'md:pl-8 lg:pl-10' : ''}`}
            >
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#0066FF] uppercase tracking-widest block font-bold">
                  0{groupIdx + 1} //
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-[#FAF9F6] tracking-tight">
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-3 font-sans">
                {group.items.map((item) => (
                  <li
                    key={item}
                    onMouseEnter={() => setCursorType('text')}
                    onMouseLeave={() => setCursorType('default')}
                    className="text-base text-[#888888] hover:text-[#FAF9F6] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0066FF]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
