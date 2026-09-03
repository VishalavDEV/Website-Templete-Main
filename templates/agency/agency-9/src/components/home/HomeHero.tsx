import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ParticleTextCanvas } from '../effects/ParticleTextCanvas';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-[#CFC7BE] overflow-hidden">
      {/* Top Meta Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#77716D] mb-8 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D65F3F] animate-pulse" />
          <span>OFFGRID // INDEPENDENT CREATIVE STUDIO</span>
        </div>
        <div>
          <span>EST. 2024 // GLOBAL PRACTICE</span>
        </div>
      </div>

      {/* Interactive Canvas Visual Banner */}
      <div className="mb-12 border border-[#CFC7BE] p-4 bg-[#FAF7F1] relative">
        <div className="absolute top-3 left-4 font-mono text-[9px] text-[#77716D] uppercase tracking-widest z-10 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#D65F3F]" />
          INTERACTIVE CANVAS ENGINE // MOVE CURSOR
        </div>
        <ParticleTextCanvas text="OFFGRID®" />
      </div>

      {/* Main Editorial Headline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] leading-[0.88] tracking-tighter uppercase text-[#2B2727]"
          >
            WE MAKE <br />
            <span className="text-[#D65F3F]">BRANDS</span> <br />
            IMPOSSIBLE <br />
            <span className="font-serif-editorial italic font-normal text-[#332832] lowercase text-6xl sm:text-8xl lg:text-[8vw] pr-4">
              to ignore.
            </span>
          </motion.h1>
        </div>

        {/* Supporting Copy & CTAs */}
        <div className="lg:col-span-4 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-[#2B2727] font-normal leading-relaxed border-l-2 border-[#D65F3F] pl-6"
          >
            OFFGRID is an independent creative agency building brands, digital experiences, and ideas that move culture forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-3 bg-[#2B2727] text-[#FAF7F1] hover:bg-[#D65F3F] px-7 py-4 font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-md group"
              data-cursor="link"
            >
              <span>VIEW OUR WORK</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-[#2B2727] text-[#2B2727] hover:bg-[#2B2727] hover:text-[#FAF7F1] px-7 py-4 font-display font-bold text-xs tracking-widest uppercase transition-all duration-300"
              data-cursor="link"
            >
              <span>START A PROJECT</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
