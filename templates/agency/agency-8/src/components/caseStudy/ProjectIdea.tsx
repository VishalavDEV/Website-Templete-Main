import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface ProjectIdeaProps {
  study: CaseStudy;
  setCursorType: (type: CursorType) => void;
}

export const ProjectIdea: React.FC<ProjectIdeaProps> = ({ study, setCursorType }) => {
  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-b border-[#ffffff10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
            {study.idea.label}
          </span>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Statement & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#FAF9F6] tracking-tight uppercase leading-[0.95]"
            >
              {study.idea.statement}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-xl text-[#A1A1AA] leading-relaxed font-normal"
            >
              {study.idea.description}
            </motion.p>

            {/* Strategic Pillars */}
            <div className="pt-6 space-y-4 border-t border-[#ffffff10]">
              {study.idea.pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-xl bg-white/[0.02] border border-[#ffffff0e] hover:border-white/20 transition-all duration-300 space-y-1 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#888888] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#FAF9F6] uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#888888] pl-7 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Artifact with Subtle Parallax (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/12 bg-[#111115] shadow-2xl group">
              <img
                src={study.idea.image}
                alt={study.idea.statement}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Accent Corner Tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] block mb-1">
                  STRATEGIC EMBODIMENT
                </span>
                <span className="font-display text-sm font-bold text-[#FAF9F6] uppercase">
                  {study.title} // CONCEPT BLUEPRINT
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
