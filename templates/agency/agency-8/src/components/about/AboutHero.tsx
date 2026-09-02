import React from 'react';
import { motion } from 'motion/react';
import { CursorType } from '../../types';

interface AboutHeroProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ setCursorType }) => {
  const headlineWords = [
    { text: 'WE', italic: false },
    { text: 'MAKE', italic: false },
    { text: 'IDEAS', italic: true },
    { text: 'MATTER.', italic: false },
  ];

  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#0066FF]/[0.035] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Metadata Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#ffffff10] mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              ABOUT THE STUDIO
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]"
          >
            EST. 2018 — DIGITAL STUDIO
          </motion.div>
        </div>

        {/* Hero Title & Supporting Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 sm:mb-24">
          {/* Main Large Editorial Headline */}
          <div className="lg:col-span-8">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.92] select-none">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  WE MAKE
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-editorial italic font-normal text-[#FAF9F6] tracking-normal lowercase text-[1.05em]"
                >
                  ideas
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#0066FF]"
                >
                  MATTER.
                </motion.span>
              </div>
            </h1>
          </div>

          {/* Supporting Text & Quick Spec */}
          <div className="lg:col-span-4 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-base sm:text-lg text-[#888888] leading-relaxed font-normal"
            >
              We combine strategy, design and technology to create digital experiences that move people, build brands and make businesses impossible to ignore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="pt-4 border-t border-[#ffffff10] flex items-center justify-between text-xs font-mono text-[#888888]"
            >
              <span>INDEPENDENT // HYBRID</span>
              <span>LONDON • NYC • TOKYO</span>
            </motion.div>
          </div>
        </div>

        {/* Hero Cinematic Masked Image Showcase */}
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setCursorType('project', 'STUDIO ↗')}
          onMouseLeave={() => setCursorType('default')}
          className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden rounded-2xl bg-[#111111] border border-[#ffffff15] shadow-2xl group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85"
            alt="Studio Team Creative Session"
            className="w-full h-full object-cover grayscale-[20%] contrast-[110%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] block font-bold">
                CRAFT OVER CONFORMITY
              </span>
              <p className="text-xs sm:text-sm text-[#FAF9F6] font-medium">
                The collective in creative discovery alignment — Studio HQ
              </p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#FAF9F6] uppercase rounded-full">
              FIG. 01 — IDENTITY
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
