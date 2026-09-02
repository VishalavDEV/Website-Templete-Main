import React from 'react';
import { motion } from 'motion/react';
import { CursorType } from '../../types';
import { Sparkles, ArrowDown } from 'lucide-react';

interface TestimonialsHeroProps {
  setCursorType: (type: CursorType) => void;
  onExploreClick?: () => void;
}

export const TestimonialsHero: React.FC<TestimonialsHeroProps> = ({
  setCursorType,
  onExploreClick,
}) => {
  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.15 + i * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between pt-36 sm:pt-44 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-[#ffffff10]">
      {/* Ambient background glow & atmospheric texture */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[500px] bg-[#0066FF]/[0.035] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-12 right-12 w-64 h-64 bg-blue-500/[0.015] rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Tag & Availability */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#FAF9F6]">
              CLIENT STORIES
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#888888]">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>AUTHENTIC PARTNERSHIPS & IMPACT</span>
          </div>
        </motion.div>

        {/* Large Line-by-Line Typography Reveal */}
        <div className="space-y-1 sm:space-y-2 mb-10 sm:mb-14">
          <div className="overflow-hidden">
            <motion.h1
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FAF9F6] tracking-tighter leading-[0.92] uppercase"
            >
              THE WORK
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FAF9F6] tracking-tighter leading-[0.92] uppercase"
            >
              SPEAKS
            </motion.h1>
          </div>

          <div className="overflow-hidden flex flex-wrap items-baseline gap-x-6">
            <motion.h1
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6] to-[#888888] tracking-tighter leading-[0.92] uppercase"
            >
              FOR ITSELF.
            </motion.h1>
          </div>
        </div>

        {/* Supporting Narrative & Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-[#ffffff15] items-end"
        >
          <div className="md:col-span-6 lg:col-span-7">
            <p className="text-lg sm:text-xl md:text-2xl text-[#FAF9F6] font-light leading-relaxed max-w-2xl font-body">
              What happens when ambitious ideas meet the right people, process and perspective.
            </p>
          </div>

          <div className="md:col-span-6 lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center justify-start md:justify-end gap-6 sm:gap-8 font-mono text-xs tracking-widest text-[#888888]">
            <div className="space-y-1">
              <span className="block text-white font-bold text-sm">42+</span>
              <span className="text-[10px] text-[#888888] uppercase">CLIENTS</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="space-y-1">
              <span className="block text-white font-bold text-sm">120+</span>
              <span className="text-[10px] text-[#888888] uppercase">PROJECTS</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="space-y-1">
              <span className="block text-white font-bold text-sm">GLOBAL</span>
              <span className="text-[10px] text-[#888888] uppercase">PARTNERS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll / Explore cue */}
      <div className="max-w-7xl mx-auto w-full pt-10 flex justify-between items-center text-xs font-mono text-[#888888]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span>INDEX 01–08</span>
        </div>

        {onExploreClick && (
          <button
            onClick={onExploreClick}
            onMouseEnter={() => setCursorType('pointer')}
            onMouseLeave={() => setCursorType('default')}
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#888888] hover:text-white transition-colors cursor-pointer"
          >
            <span>EXPLORE STORIES</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#0066FF]" />
          </button>
        )}
      </div>
    </section>
  );
};
