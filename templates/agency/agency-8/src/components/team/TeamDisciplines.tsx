import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { DISCIPLINES, DisciplineItem } from '../../data/teamData';
import { CursorType } from '../../types';

interface TeamDisciplinesProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const TeamDisciplines: React.FC<TeamDisciplinesProps> = ({ setCursorType }) => {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineItem>(DISCIPLINES[0]);

  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-t border-[#ffffff10] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
              CORE CAPABILITIES & DISCIPLINES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92]"
          >
            ONE STUDIO. <br />
            <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.05em]">
              many perspectives.
            </span>
          </motion.h2>
        </div>

        {/* Interactive Discipline Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6">
          {/* Left Column: Discipline Selection List (Large Typography) */}
          <div className="lg:col-span-7 space-y-0 border-t border-[#ffffff15]">
            {DISCIPLINES.map((disc, idx) => {
              const isSelected = activeDiscipline.id === disc.id;

              return (
                <div
                  key={disc.id}
                  onClick={() => setActiveDiscipline(disc)}
                  onMouseEnter={() => {
                    setActiveDiscipline(disc);
                    setCursorType('pointer');
                  }}
                  onMouseLeave={() => setCursorType('default')}
                  className={`group py-6 sm:py-8 border-b border-[#ffffff15] transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected ? 'opacity-100 pl-4 border-[#0066FF]/40' : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  <div className="flex items-baseline gap-6 sm:gap-8">
                    <span className="font-mono text-xs sm:text-sm text-[#0066FF] font-bold tracking-widest">
                      {disc.number}
                    </span>
                    <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#FAF9F6]">
                      {disc.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-[#888888] font-medium">
                      {disc.statement}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#0066FF] border-[#0066FF] text-white rotate-45'
                          : 'border-white/10 text-[#888888] group-hover:border-white group-hover:text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Discipline Inspector Canvas */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiscipline.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 bg-white/[0.02] border border-[#ffffff15] p-6 sm:p-8 rounded-2xl sm:rounded-3xl"
              >
                {/* Visual Imagery */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#111115]">
                  <img
                    src={activeDiscipline.image}
                    alt={activeDiscipline.name}
                    className="w-full h-full object-cover grayscale-[10%] contrast-[110%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-[#0066FF] uppercase">
                    DISCIPLINE // {activeDiscipline.number}
                  </div>
                </div>

                {/* Statement & Description */}
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#0066FF] tracking-widest uppercase font-bold block">
                    {activeDiscipline.statement}
                  </span>
                  <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                    {activeDiscipline.description}
                  </p>
                </div>

                {/* Focus Areas Chips */}
                <div className="space-y-2 pt-2 border-t border-[#ffffff10]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block">
                    Core Focus Verticals
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeDiscipline.focus.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full text-xs font-mono tracking-wider text-white bg-white/5 border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
