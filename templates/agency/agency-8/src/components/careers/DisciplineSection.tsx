import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CursorType } from '../../types';
import { DISCIPLINES_DATA } from '../../data/careersData';

interface DisciplineSectionProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const DisciplineSection: React.FC<DisciplineSectionProps> = ({ setCursorType }) => {
  const [activeId, setActiveId] = useState<string>(DISCIPLINES_DATA[0].id);

  const activeDiscipline =
    DISCIPLINES_DATA.find((d) => d.id === activeId) || DISCIPLINES_DATA[0];

  return (
    <section className="py-24 sm:py-36 md:py-44 border-b border-white/10 relative overflow-hidden bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
              07 / DISCIPLINES
            </span>
          </div>

          <span className="font-mono text-xs text-[#888888] uppercase tracking-widest">
            HOVER TO EXPLORE PERSPECTIVES
          </span>
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F6] uppercase tracking-tight leading-[0.92]">
          BRING YOUR <br />
          <span className="text-[#0066FF]">PERSPECTIVE.</span>
        </h2>

        {/* Large Typographic Interactive Composition */}
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Massive Stacked Words */}
          <div className="lg:col-span-7 space-y-3">
            {DISCIPLINES_DATA.map((disc, idx) => {
              const isHovered = disc.id === activeId;
              return (
                <div
                  key={disc.id}
                  onMouseEnter={() => {
                    setActiveId(disc.id);
                    setCursorType('pointer', 'FOCUS');
                  }}
                  onMouseLeave={() => setCursorType('default')}
                  className="cursor-pointer group flex items-baseline gap-4 select-none"
                >
                  <span className="font-mono text-xs sm:text-sm text-[#666666] group-hover:text-[#0066FF] transition-colors">
                    0{idx + 1}
                  </span>
                  <span
                    className={`font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight transition-all duration-300 ${
                      isHovered
                        ? 'text-[#FAF9F6] translate-x-3'
                        : 'text-[#444444] hover:text-[#888888]'
                    }`}
                  >
                    {disc.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Statement Card with Ambient Transition */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-white/[0.02] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold block">
                DISCIPLINE PROFILE // {activeDiscipline.name}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDiscipline.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#FAF9F6] uppercase tracking-tight">
                    {activeDiscipline.name}
                  </h3>

                  <p className="font-body text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed">
                    {activeDiscipline.statement}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="pt-4 border-t border-white/10 font-mono text-[10px] text-[#888888] uppercase tracking-widest">
                INTEGRATED ACROSS ALL ACTIVE BRIEFINGS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
