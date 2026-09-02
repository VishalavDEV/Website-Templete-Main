import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { CursorType } from '../../types';

interface ContactHeroProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onScrollToInquiry: () => void;
}

export const ContactHero: React.FC<ContactHeroProps> = ({
  setCursorType,
  onScrollToInquiry,
}) => {
  const headingLines = ["LET'S MAKE", 'SOMETHING', 'MATTER.'];

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-[#080808]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[200px] pointer-events-none opacity-20 bg-[#0066FF]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 space-y-12">
        {/* Eyebrow / Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ffffff15] pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
              START A PROJECT
            </span>
          </div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>CURRENTLY ACCEPTING SELECTED PROJECTS</span>
          </motion.div>
        </motion.div>

        {/* Large Heading line-by-line reveal */}
        <div className="space-y-2">
          {headingLines.map((line, idx) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                initial={{ y: 90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.1 + idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-[-0.03em] leading-[0.88] ${
                  idx === 2 ? 'text-[#0066FF]' : 'text-[#FAF9F6]'
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Supporting text & Context */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#ffffff15]"
        >
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-2xl text-[#A1A1AA] leading-relaxed font-normal max-w-2xl">
              Have an ambitious idea, a difficult problem or simply a project worth exploring? <span className="text-[#FAF9F6] font-medium">Let's talk.</span>
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end space-y-2 font-mono text-xs text-[#888888] tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>DIRECT ACCESS TO STUDIO PARTNERS</span>
            </div>
            <p className="text-[11px] text-[#888888] lowercase font-sans">
              Response time within 24 hours &bull; London &bull; New York &bull; Tokyo
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to inquiry prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full mt-12 flex items-center justify-between text-xs font-mono text-[#888888] tracking-widest uppercase"
      >
        <button
          onClick={onScrollToInquiry}
          onMouseEnter={() => setCursorType('pointer')}
          onMouseLeave={() => setCursorType('default')}
          className="inline-flex items-center gap-2 text-[#FAF9F6] hover:text-[#0066FF] transition-colors cursor-pointer"
        >
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#0066FF]" />
          <span>BEGIN INQUIRY EXPERIENCE</span>
        </button>
        <span className="hidden sm:inline">01 // PROJECT INTAKE</span>
      </motion.div>
    </section>
  );
};
