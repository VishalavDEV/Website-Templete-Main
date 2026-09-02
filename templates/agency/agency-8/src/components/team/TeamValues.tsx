import React, { useState } from 'react';
import { motion } from 'motion/react';
import { STUDIO_VALUES } from '../../data/teamData';
import { CursorType } from '../../types';

interface TeamValuesProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const TeamValues: React.FC<TeamValuesProps> = ({ setCursorType }) => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0066FF]/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
              STUDIO PRINCIPLES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            WHAT BRINGS <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              us together.
            </span>
          </motion.h2>
        </div>

        {/* Values Editorial Stack */}
        <div className="space-y-0 border-t border-[#ffffff15]">
          {STUDIO_VALUES.map((val, idx) => {
            const isHovered = hoveredValue === val.id;
            const hasAnyHover = hoveredValue !== null;

            return (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onMouseEnter={() => {
                  setHoveredValue(val.id);
                  setCursorType('pointer');
                }}
                onMouseLeave={() => {
                  setHoveredValue(null);
                  setCursorType('default');
                }}
                className={`py-10 sm:py-14 border-b border-[#ffffff15] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline ${
                  hasAnyHover && !isHovered ? 'opacity-30' : 'opacity-100'
                }`}
              >
                {/* Number & Value Name */}
                <div className="lg:col-span-6 flex items-baseline gap-6 sm:gap-8">
                  <span className="font-mono text-xs sm:text-sm text-[#0066FF] font-bold tracking-widest">
                    {val.number}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#FAF9F6] transition-colors duration-300">
                      {val.title}
                    </h3>
                    <p className="text-sm font-mono text-[#888888] uppercase tracking-wider mt-2">
                      {val.summary}
                    </p>
                  </div>
                </div>

                {/* Description Narrative */}
                <div className="lg:col-span-6">
                  <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
