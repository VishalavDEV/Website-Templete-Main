import React from 'react';
import { motion } from 'motion/react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface ProjectVisualProps {
  study: CaseStudy;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ study, setCursorType }) => {
  return (
    <section className="py-12 sm:py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-[94vw] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fullscreen Immersive Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#111115] shadow-2xl group cursor-default"
          onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
          onMouseLeave={() => setCursorType('default')}
        >
          <img
            src={study.fullscreenVisual.image}
            alt={study.fullscreenVisual.caption}
            className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Floating Caption inside frame */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
            <div className="space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] block" style={{ color: study.accent }}>
                FULLSCREEN PROJECTION
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#FAF9F6] uppercase tracking-wider font-semibold max-w-xl">
                {study.fullscreenVisual.caption}
              </p>
            </div>

            <span className="font-mono text-[10px] sm:text-xs text-[#888888] uppercase tracking-widest">
              ASPECT // 21:9 CINEMATIC
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
