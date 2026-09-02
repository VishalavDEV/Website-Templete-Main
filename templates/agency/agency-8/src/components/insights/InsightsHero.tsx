import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, BookOpen } from 'lucide-react';
import { CursorType } from '../../types';

interface InsightsHeroProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onExploreClick?: () => void;
}

export const InsightsHero: React.FC<InsightsHeroProps> = ({
  setCursorType,
  onExploreClick,
}) => {
  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 + i * 0.14,
      },
    }),
  };

  const lines = ['THOUGHTS', 'WORTH', 'SHARING.'];

  return (
    <section className="relative pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 px-6 sm:px-8 lg:px-12 bg-[#080808] border-b border-[#ffffff10] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0066FF]/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-[#ffffff10]"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
              INSIGHTS / IDEAS / PERSPECTIVES
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[11px] uppercase tracking-widest text-[#FAF9F6]">
              <BookOpen className="w-3 h-3 text-[#0066FF]" />
              24 ARTICLES
            </span>
            <span className="font-mono text-xs text-[#666666] hidden sm:inline">
              VOL. IV / 2026
            </span>
          </div>
        </motion.div>

        {/* Big Editorial Heading (Line by Line Reveal) */}
        <div className="overflow-hidden mb-10 sm:mb-14">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-[#FAF9F6] uppercase leading-[0.92] select-none">
            {lines.map((line, index) => (
              <div key={line} className="overflow-hidden">
                <motion.div
                  custom={index}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className={index === 2 ? 'text-[#FAF9F6]/90 flex items-center gap-4 flex-wrap' : ''}
                >
                  <span>{line}</span>
                  {index === 2 && (
                    <span className="inline-block w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-[#0066FF] translate-y-1 sm:translate-y-2" />
                  )}
                </motion.div>
              </div>
            ))}
          </h1>
        </div>

        {/* Subtitle & Jump Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-4"
        >
          <p className="md:col-span-8 font-body text-base sm:text-xl lg:text-2xl text-[#888888] font-light leading-relaxed max-w-3xl">
            Ideas, observations and perspectives on design, technology, brands and the future of digital experiences.
          </p>

          <div className="md:col-span-4 flex md:justify-end">
            <button
              onClick={onExploreClick}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#FAF9F6] hover:text-[#0066FF] transition-colors cursor-pointer py-2"
            >
              <span>EXPLORE ARTICLES</span>
              <span className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#0066FF] flex items-center justify-center transition-colors">
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
