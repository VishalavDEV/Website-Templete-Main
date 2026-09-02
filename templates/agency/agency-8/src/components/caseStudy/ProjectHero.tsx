import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface ProjectHeroProps {
  study: CaseStudy;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ study, setCursorType }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#080808]">
      {/* Ambient Radial Accent Glow behind title */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: study.accent }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 space-y-12">
        {/* Top Eyebrow & Number */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between border-b border-[#ffffff15] pb-6"
        >
          <div className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full transition-colors duration-500"
              style={{ backgroundColor: study.accent }}
            />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
              {study.number} // SELECTED WORK
            </span>
          </div>

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888] hidden sm:inline">
            CASE STUDY ARCHIVE
          </span>
        </motion.div>

        {/* Hero Title & Subheading */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black text-[#FAF9F6] tracking-[-0.04em] uppercase leading-[0.85]"
          >
            {study.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <span
              className="font-mono text-sm sm:text-base font-bold uppercase tracking-[0.3em]"
              style={{ color: study.accent }}
            >
              {study.categoryDisplay}
            </span>
            <span className="text-[#888888] font-mono text-xs">// {study.year}</span>
          </motion.div>
        </div>

        {/* Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-[#ffffff15]"
        >
          <div>
            <span className="block font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-[0.25em] mb-1">
              CLIENT
            </span>
            <span className="font-display text-sm sm:text-base text-[#FAF9F6] font-bold uppercase tracking-wider">
              {study.client}
            </span>
          </div>

          <div>
            <span className="block font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-[0.25em] mb-1">
              INDUSTRY
            </span>
            <span className="font-display text-sm sm:text-base text-[#FAF9F6] font-bold uppercase tracking-wider">
              {study.industry}
            </span>
          </div>

          <div>
            <span className="block font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-[0.25em] mb-1">
              YEAR
            </span>
            <span className="font-display text-sm sm:text-base text-[#FAF9F6] font-bold uppercase tracking-wider">
              {study.year}
            </span>
          </div>

          <div>
            <span className="block font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-[0.25em] mb-1">
              SERVICES
            </span>
            <span className="font-mono text-xs sm:text-sm text-[#888888] font-medium block truncate">
              {study.services.slice(0, 2).join(' / ')}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Massive Project Visual Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full mt-12 relative z-10"
      >
        <div
          className="group relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ffffff18] bg-[#111115] shadow-2xl cursor-default"
          onMouseEnter={() => setCursorType('project', 'EXPLORE ↗')}
          onMouseLeave={() => setCursorType('default')}
        >
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Bottom badge */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex items-center gap-3">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-white border border-white/20 backdrop-blur-md bg-black/40"
            >
              PROJECT ARTIFACT {study.number}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full mt-10 flex items-center justify-between text-xs font-mono text-[#888888] tracking-widest uppercase"
      >
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" style={{ color: study.accent }} />
          <span>SCROLL TO READ CASE STUDY</span>
        </div>
        <span className="hidden sm:inline">01 // INTRODUCTION</span>
      </motion.div>
    </section>
  );
};
