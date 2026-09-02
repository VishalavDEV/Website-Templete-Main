import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Users } from 'lucide-react';
import { CursorType } from '../../types';

interface TeamHeroProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const TeamHero: React.FC<TeamHeroProps> = ({ setCursorType }) => {
  const headingLines = ['GOOD WORK', 'STARTS WITH', 'GOOD PEOPLE.'];

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#080808]">
      {/* Ambient Radial Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full blur-[200px] pointer-events-none opacity-20 bg-[#0066FF]"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 space-y-12">
        {/* Eyebrow & Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ffffff15] pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
              THE PEOPLE BEHIND THE WORK
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#888888] tracking-widest uppercase">
            <span>18 PEOPLE</span>
            <span className="text-[#ffffff25]">//</span>
            <span>06 DISCIPLINES</span>
            <span className="text-[#ffffff25]">//</span>
            <span className="text-[#FAF9F6]">01 STUDIO</span>
          </div>
        </motion.div>

        {/* Large Heading Animated Line-by-Line */}
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
                  idx === 2 ? 'text-[#FAF9F6]' : 'text-[#FAF9F6]'
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Supporting Narrative & Context */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#ffffff15]"
        >
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-2xl text-[#A1A1AA] leading-relaxed font-normal max-w-2xl">
              Strategists, designers, developers and creative thinkers brought together by curiosity and a shared obsession with making better things.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end space-y-2 font-mono text-xs text-[#888888] tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>COLLECTIVE TALENT // ZERO BUREAUCRACY</span>
            </div>
            <p className="text-[11px] text-[#888888] lowercase font-sans">
              London &bull; New York &bull; Tokyo &bull; Remote Hybrid
            </p>
          </div>
        </motion.div>
      </div>

      {/* Large Cinematic Team Visual Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full mt-12 relative z-10"
      >
        <div
          className="group relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ffffff18] bg-[#111115] shadow-2xl cursor-default"
          onMouseEnter={() => setCursorType('project', 'EXPLORE ↗')}
          onMouseLeave={() => setCursorType('default')}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=85"
            alt="Studio Team Collective"
            className="w-full h-full object-cover object-center grayscale-[15%] contrast-[110%] group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom Telemetry Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-end justify-between pointer-events-none">
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-white border border-white/20 backdrop-blur-md bg-black/40 inline-block">
                STUDIO ENSEMBLE // FIG. 01
              </span>
              <p className="text-xs sm:text-sm text-[#FAF9F6] font-mono tracking-wider uppercase font-semibold hidden sm:block">
                Multidisciplinary practitioners across 3 design bureaus
              </p>
            </div>

            <span className="font-mono text-xs text-[#888888] tracking-widest hidden md:inline">
              AUTUMN 2026 ARCHIVE
            </span>
          </div>
        </div>
      </motion.div>

      {/* Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full mt-10 flex items-center justify-between text-xs font-mono text-[#888888] tracking-widest uppercase"
      >
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#0066FF]" />
          <span>SCROLL TO MEET THE COLLECTIVE</span>
        </div>
        <span className="hidden sm:inline">01 // INTRODUCTION</span>
      </motion.div>
    </section>
  );
};
