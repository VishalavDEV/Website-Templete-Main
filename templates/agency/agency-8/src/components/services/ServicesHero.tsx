import React from 'react';
import { motion } from 'motion/react';
import { CursorType } from '../../types';

interface ServicesHeroProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ServicesHero: React.FC<ServicesHeroProps> = ({ setCursorType }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 px-6 sm:px-8 lg:px-12 bg-[#080808] overflow-hidden border-b border-[#ffffff10]">
      {/* Ambient background subtle lighting */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#0066FF]/[0.035] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#0066FF]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      {/* Top section: Eyebrow + Breadcrumb */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between border-b border-[#ffffff12] pb-6 mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
              WHAT WE DO
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#666666] hidden sm:inline-block">
            CAPABILITIES & EXPERTISE
          </span>
        </motion.div>

        {/* Cinematic masked headline reveal */}
        <div className="space-y-2 sm:space-y-3 mb-12 sm:mb-16">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[116px] font-black uppercase text-[#FAF9F6] tracking-tight leading-[0.92]"
            >
              IDEAS,
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[116px] font-black uppercase text-[#FAF9F6] tracking-tight leading-[0.92] flex flex-wrap items-baseline gap-x-4 sm:gap-x-6"
            >
              <span>DESIGN</span>
              <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[0.92em]">
                &amp;
              </span>
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[116px] font-black uppercase text-[#FAF9F6]/90 tracking-tight leading-[0.92]"
            >
              TECHNOLOGY.
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Bottom section: Supporting copy + Metadata */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-8 border-t border-[#ffffff10]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 lg:col-span-7"
          >
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#FAF9F6]/80 font-normal leading-relaxed">
              We bring strategy, creativity and technology together to create experiences that move businesses forward.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 lg:col-span-5 flex flex-col md:items-end justify-end space-y-2"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
              CORE PILLARS
            </span>
            <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#888888] uppercase">
              STRATEGY / DESIGN / TECHNOLOGY
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
