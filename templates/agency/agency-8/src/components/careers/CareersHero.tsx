import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CursorType } from '../../types';
import { CAREERS_HERO_DATA } from '../../data/careersData';

interface CareersHeroProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const CareersHero: React.FC<CareersHeroProps> = ({ setCursorType }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 overflow-hidden border-b border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0066FF]/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24 relative z-10">
        {/* Top Header Grid */}
        <div className="space-y-8 max-w-5xl">
          {/* Label Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF9F6]">
              {CAREERS_HERO_DATA.label}
            </span>
          </motion.div>

          {/* Headline Line-by-Line Reveal */}
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#FAF9F6] uppercase tracking-tight leading-[0.88] select-none">
            {CAREERS_HERO_DATA.headline.map((line, idx) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: '105%', rotate: 1.5 }}
                  animate={{ y: '0%', rotate: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15 + idx * 0.12,
                  }}
                  className={`block ${idx === 2 ? 'text-[#0066FF]' : ''}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Supporting Text & Metadata Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-white/10 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="md:col-span-7 font-body text-lg sm:text-xl text-[#A0A0A0] font-light leading-relaxed max-w-2xl"
            >
              {CAREERS_HERO_DATA.supportingText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              className="md:col-span-5 grid grid-cols-3 gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 font-mono"
            >
              {CAREERS_HERO_DATA.metadata.map((item) => (
                <div key={item.label} className="space-y-1">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#FAF9F6]">
                    {item.value}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-[#888888] uppercase tracking-wider leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 2. HERO VISUAL - Cinematic Creative Studio Environment with subtle Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
          style={{ opacity }}
          className="w-full relative overflow-hidden border border-white/10 group bg-[#0A0A0E]"
          onMouseEnter={() => setCursorType('image', 'STUDIO ↗')}
          onMouseLeave={() => setCursorType('default')}
        >
          <div className="w-full h-[360px] sm:h-[480px] md:h-[620px] overflow-hidden relative">
            <motion.img
              style={{ y: imageY, scale: imageScale }}
              src={CAREERS_HERO_DATA.heroImage}
              alt="Studio collective creative environment"
              className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out"
            />
            {/* Cinematic Overlay Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/20 to-transparent pointer-events-none" />

            {/* Inset Metadata Badge */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto flex items-center justify-between sm:justify-start gap-4 p-3 bg-black/70 backdrop-blur-md border border-white/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#FAF9F6] font-semibold">
                  STUDIO ARCHIVE // AUTUMN 2026
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#888888] hidden sm:inline">
                COLLABORATIVE RESIDENCY
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
