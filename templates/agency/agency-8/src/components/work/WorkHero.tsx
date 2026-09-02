import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { CursorType } from '../../types';

interface WorkHeroProps {
  totalProjects: number;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const WorkHero: React.FC<WorkHeroProps> = ({ totalProjects, setCursorType }) => {
  const headingWords = [
    { line: 'WORK', color: 'text-[#FAF9F6]' },
    { line: 'THAT', color: 'text-[#FAF9F6]' },
    { line: 'MOVES.', color: 'text-[#0066FF]' },
  ];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between pt-36 sm:pt-44 pb-16 bg-[#080808] overflow-hidden border-b border-[#ffffff10]">
      {/* Cinematic Ambient Atmosphere */}
      <div className="absolute top-1/3 -left-48 w-[650px] h-[650px] bg-[#0066FF]/[0.035] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-[550px] h-[550px] bg-[#0066FF]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern with subtle opacity */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto">
        {/* Step 1: Small Label Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8 sm:mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888] flex items-center gap-2 font-medium">
            <span>SELECTED WORK</span>
            <span className="text-[#0066FF]">/</span>
            <span className="text-[#FAF9F6]">2026 ARCHIVE</span>
          </span>
        </motion.div>

        {/* Step 2: Line-by-Line Monumental Heading */}
        <div className="space-y-1 sm:space-y-2 mb-12 sm:mb-16 select-none">
          {headingWords.map((item, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black tracking-[-0.04em] uppercase leading-[0.88] ${item.color}`}
              >
                {item.line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Step 3: Supporting Text & Project Count Bottom Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8 sm:pt-12 border-t border-[#ffffff12]">
          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 lg:col-span-7"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-[#888888] font-normal leading-relaxed max-w-2xl">
              A selection of identities, digital experiences and technologies created for ambitious brands across the globe.
            </p>
          </motion.div>

          {/* Project Count Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 lg:col-span-5 flex md:justify-end items-center gap-6"
          >
            <div className="px-5 py-3 rounded-full bg-white/[0.03] border border-[#ffffff15] backdrop-blur-md flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF9F6] font-semibold">
                {totalProjects} CURATED PROJECTS
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 flex items-center justify-between text-[11px] font-mono text-[#888888] uppercase tracking-widest pointer-events-none"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
          <span>Interactive Exhibition</span>
        </span>
        <div className="flex items-center gap-2">
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#0066FF] animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};
