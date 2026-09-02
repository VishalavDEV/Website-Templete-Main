import React from 'react';
import { motion } from 'motion/react';
import { STUDIO_MOMENTS_DATA } from '../../data/careersData';
import { CursorType } from '../../types';

interface StudioMomentsProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const StudioMoments: React.FC<StudioMomentsProps> = ({ setCursorType }) => {
  return (
    <section className="py-24 sm:py-36 md:py-44 border-b border-white/10 relative overflow-hidden bg-[#060608]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
                08 / GLIMPSES & PROCESS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#FAF9F6] uppercase tracking-tight">
              STUDIO MOMENTS
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#888888] font-light max-w-md">
            Unscripted impressions from daily critiques, physical prototyping benches, and late-afternoon focus sessions.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition (Varied Sizes) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Item 1: Tall Aspect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setCursorType('image', 'VIEW ↗')}
            onMouseLeave={() => setCursorType('default')}
            className="md:col-span-4 group relative overflow-hidden border border-white/10 bg-[#0E0E12]"
          >
            <div className="h-[420px] sm:h-[500px] overflow-hidden relative">
              <img
                src={STUDIO_MOMENTS_DATA[0].image}
                alt={STUDIO_MOMENTS_DATA[0].title}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#0066FF] block font-semibold">
                  {STUDIO_MOMENTS_DATA[0].category}
                </span>
                <p className="font-display text-sm font-bold text-[#FAF9F6] uppercase">
                  {STUDIO_MOMENTS_DATA[0].title}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Wide Aspect & Item 3: Square Aspect Stacked */}
          <div className="md:col-span-8 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              onMouseEnter={() => setCursorType('image', 'VIEW ↗')}
              onMouseLeave={() => setCursorType('default')}
              className="group relative overflow-hidden border border-white/10 bg-[#0E0E12]"
            >
              <div className="h-[280px] sm:h-[340px] overflow-hidden relative">
                <img
                  src={STUDIO_MOMENTS_DATA[1].image}
                  alt={STUDIO_MOMENTS_DATA[1].title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#0066FF] block font-semibold">
                    {STUDIO_MOMENTS_DATA[1].category}
                  </span>
                  <p className="font-display text-sm font-bold text-[#FAF9F6] uppercase">
                    {STUDIO_MOMENTS_DATA[1].title}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {STUDIO_MOMENTS_DATA.slice(2, 4).map((moment, idx) => (
                <motion.div
                  key={moment.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 + idx * 0.1 }}
                  onMouseEnter={() => setCursorType('image', 'VIEW ↗')}
                  onMouseLeave={() => setCursorType('default')}
                  className="group relative overflow-hidden border border-white/10 bg-[#0E0E12]"
                >
                  <div className="h-[240px] sm:h-[280px] overflow-hidden relative">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#0066FF] block font-semibold">
                        {moment.category}
                      </span>
                      <p className="font-display text-sm font-bold text-[#FAF9F6] uppercase">
                        {moment.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
