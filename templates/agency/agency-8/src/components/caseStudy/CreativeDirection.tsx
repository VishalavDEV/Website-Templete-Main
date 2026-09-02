import React from 'react';
import { motion } from 'motion/react';
import { Palette, Type, Layers, Activity } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface CreativeDirectionProps {
  study: CaseStudy;
  setCursorType: (type: CursorType) => void;
}

export const CreativeDirection: React.FC<CreativeDirectionProps> = ({ study, setCursorType }) => {
  const cd = study.creativeDirection;

  return (
    <section className="py-24 sm:py-36 bg-[#060608] border-b border-[#ffffff10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#ffffff10]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
                DESIGN SYSTEM & DNA
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#FAF9F6] tracking-tight uppercase">
              {cd.headline}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#888888] max-w-md font-normal leading-relaxed">
            {cd.description}
          </p>
        </div>

        {/* Large Editorial Design Composition (Bento Monograph) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Box 1: Giant Typography Showcase (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-[#ffffff0e] flex flex-col justify-between space-y-8"
          >
            <div className="flex items-center justify-between border-b border-[#ffffff10] pb-4">
              <div className="flex items-center gap-2">
                <Type className="w-4 h-4" style={{ color: study.accent }} />
                <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                  TYPOGRAPHY SPECIMEN
                </span>
              </div>
              <span className="font-mono text-xs text-[#888888]">{cd.typography.display}</span>
            </div>

            {/* Giant Glyphs Sample */}
            <div className="py-4 select-none">
              <div className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#FAF9F6] tracking-tight uppercase leading-none">
                Aa Bb Gg
              </div>
              <div className="font-mono text-2xl sm:text-4xl text-[#888888] tracking-widest mt-2">
                0123456789
              </div>
            </div>

            {/* Typography Hierarchy Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#ffffff10]">
              <div>
                <span className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1">
                  DISPLAY PRIMARY
                </span>
                <span className="font-display text-sm font-bold text-[#FAF9F6]">
                  {cd.typography.display}
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1">
                  BODY TEXT
                </span>
                <span className="font-mono text-sm text-[#FAF9F6]">
                  {cd.typography.body}
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1">
                  DATA & METADATA
                </span>
                <span className="font-mono text-sm text-[#FAF9F6]">
                  {cd.typography.mono}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Visual Artifact Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 relative group bg-[#111115] min-h-[340px]"
          >
            <img
              src={cd.sampleImage}
              alt="Design System Specimen"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white">
              <span className="tracking-widest uppercase">BRAND SYSTEM SPECIMEN</span>
              <span className="text-[#888888]">{study.year}</span>
            </div>
          </motion.div>

          {/* Box 3: Palette & Chromatic Swatches (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 p-8 rounded-2xl bg-white/[0.02] border border-[#ffffff0e] space-y-6"
          >
            <div className="flex items-center gap-2 border-b border-[#ffffff10] pb-4">
              <Palette className="w-4 h-4" style={{ color: study.accent }} />
              <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                CHROMATIC PALETTE
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cd.colors.map((c) => (
                <div
                  key={c.hex}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-[#ffffff0e] space-y-3 group hover:border-white/20 transition-colors"
                >
                  <div
                    className="w-full h-12 rounded-lg border border-white/15 shadow-inner"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs font-bold text-[#FAF9F6] block">
                      {c.hex}
                    </span>
                    <span className="font-mono text-[10px] text-[#888888] block truncate">
                      {c.name}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#0066FF] block">
                      {c.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Box 4: Composition & Motion Physics (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 p-8 rounded-2xl bg-white/[0.02] border border-[#ffffff0e] flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-[#ffffff10] pb-4">
                <Layers className="w-4 h-4" style={{ color: study.accent }} />
                <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                  COMPOSITION & SPATIAL RULES
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#FAF9F6] font-mono leading-relaxed">
                {cd.composition}
              </p>
            </div>

            <div className="pt-6 border-t border-[#ffffff10] space-y-2">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" style={{ color: study.accent }} />
                <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                  MOTION PHYSICS
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#888888] font-mono leading-relaxed">
                {cd.motionNote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
