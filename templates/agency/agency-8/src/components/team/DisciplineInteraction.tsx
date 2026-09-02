import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Network, RefreshCw } from 'lucide-react';
import { DISCIPLINE_RELATIONS } from '../../data/teamData';
import { CursorType } from '../../types';

interface DisciplineInteractionProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const DisciplineInteraction: React.FC<DisciplineInteractionProps> = ({ setCursorType }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('STRATEGY');

  const disciplineKeys = Object.keys(DISCIPLINE_RELATIONS);
  const currentRelation = DISCIPLINE_RELATIONS[selectedDiscipline];

  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden">
      {/* Radial glow */}
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
              PEOPLE + DISCIPLINES // SYNTHESIS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            INTERCONNECTED <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              by design.
            </span>
          </motion.h2>
          <p className="text-base sm:text-lg text-[#888888] max-w-xl font-normal pt-2">
            No discipline works in isolation. Tap or hover across our capability nodes to discover how collaborative friction drives breakthrough outcomes.
          </p>
        </div>

        {/* Interactive Matrix Display */}
        <div className="bg-white/[0.02] border border-[#ffffff15] rounded-3xl p-6 sm:p-10 lg:p-14 space-y-12">
          {/* Top Formula Strip */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-display text-lg sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
            {disciplineKeys.map((key, index) => {
              const isSelected = selectedDiscipline === key;
              const isConnected = currentRelation.connected.includes(key);

              return (
                <React.Fragment key={key}>
                  <button
                    onClick={() => setSelectedDiscipline(key)}
                    onMouseEnter={() => {
                      setSelectedDiscipline(key);
                      setCursorType('pointer');
                    }}
                    onMouseLeave={() => setCursorType('default')}
                    className={`transition-all duration-300 px-3 py-1.5 rounded-xl cursor-pointer ${
                      isSelected
                        ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/30 scale-105'
                        : isConnected
                        ? 'text-white border border-[#0066FF]/50 bg-[#0066FF]/10'
                        : 'text-[#888888]/60 hover:text-[#FAF9F6]'
                    }`}
                  >
                    {key}
                  </button>
                  {index < disciplineKeys.length - 1 && (
                    <span className="text-white/20 font-sans font-light">&times;</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Dynamic Insight Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#ffffff15] pt-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#0066FF]/20 text-[#0066FF] border border-[#0066FF]/40 text-[10px] font-mono tracking-widest uppercase">
                  ACTIVE CATALYST: {selectedDiscipline}
                </span>
                <span className="text-xs font-mono text-[#888888] tracking-wider uppercase">
                  &rarr; CONNECTS WITH {currentRelation.connected.join(', ')}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedDiscipline}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-[#FAF9F6] leading-snug">
                    {currentRelation.thesis}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
                    {currentRelation.dynamicNote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-4 bg-white/[0.02] border border-[#ffffff10] rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#888888] tracking-widest uppercase">
                <span>COLLABORATIVE MATRIX</span>
                <Network className="w-4 h-4 text-[#0066FF]" />
              </div>

              <div className="space-y-2">
                {currentRelation.connected.map((conn) => (
                  <div
                    key={conn}
                    className="flex items-center justify-between py-2 border-b border-white/5 text-xs font-mono"
                  >
                    <span className="text-[#FAF9F6] font-medium">{selectedDiscipline} + {conn}</span>
                    <span className="text-[#0066FF] text-[10px] uppercase">Active Synergy</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
