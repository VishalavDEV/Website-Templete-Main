import React from 'react';
import { motion } from 'motion/react';
import { CursorType } from '../../types';

interface StudioStoryProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const StudioStory: React.FC<StudioStoryProps> = ({ setCursorType }) => {
  return (
    <section className="py-28 sm:py-40 border-t border-[#ffffff10] relative overflow-hidden bg-[#080808]">
      {/* Background Subtle Gradient Aura */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#0066FF]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-12 sm:mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
            OUR ORIGIN & PURPOSE
          </span>
        </motion.div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#FAF9F6] leading-[0.98]"
            >
              A STUDIO BUILT <br />
              <span className="font-editorial italic font-normal text-[#0066FF] tracking-normal lowercase text-[1.1em]">
                around curiosity.
              </span>
            </motion.h2>

            <div className="space-y-6 text-base sm:text-lg text-[#888888] leading-relaxed font-normal">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[#FAF9F6] text-lg sm:text-xl font-medium leading-relaxed"
              >
                We started with a simple belief: the best digital experiences happen when strategy, creativity and technology work as one.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Today, we work across brand, digital and technology to help ambitious organizations turn complex ideas into clear, compelling experiences.
              </motion.p>
            </div>

            {/* Editorial Metadata Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-8 border-t border-[#ffffff10] font-mono text-xs text-[#888888]"
            >
              <div>
                <span className="text-[#0066FF] block font-bold mb-1">DISCIPLINE</span>
                <span>Interdisciplinary Digital Practice</span>
              </div>
              <div>
                <span className="text-[#0066FF] block font-bold mb-1">FOUNDED</span>
                <span>London & New York, 2018</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Supporting Image with Scroll Reveal & Mask */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setCursorType('project', 'EXPLORE ↗')}
              onMouseLeave={() => setCursorType('default')}
              className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[#111111] border border-[#ffffff15] shadow-2xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="Studio Architecture & Design Lab"
                className="w-full h-full object-cover grayscale-[15%] contrast-[110%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0066FF] block font-bold">
                    STUDIO ENVIRONMENT
                  </span>
                  <p className="text-xs sm:text-sm text-[#FAF9F6] font-medium">
                    Where spatial clarity informs digital interaction
                  </p>
                </div>
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#FAF9F6] uppercase rounded-full">
                  FIG. 02
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
