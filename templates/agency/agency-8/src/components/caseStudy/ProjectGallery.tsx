import React from 'react';
import { motion } from 'motion/react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface ProjectGalleryProps {
  study: CaseStudy;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ study, setCursorType }) => {
  const { gallery } = study;

  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-b border-[#ffffff10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#ffffff10]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
                VISUAL SEQUENCE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#FAF9F6] tracking-tight uppercase">
              ARTIFACT GALLERY
            </h2>
          </div>

          <span className="font-mono text-xs text-[#888888] tracking-widest uppercase">
            {gallery.length} CURATED SHOTS
          </span>
        </div>

        {/* Varied Editorial Composition Grid */}
        <div className="space-y-12 sm:space-y-20">
          {/* Shot 1: Full-Width Cinematic Anchor */}
          {gallery[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-[#111115] shadow-2xl cursor-default"
              onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
              onMouseLeave={() => setCursorType('default')}
            >
              <img
                src={gallery[0].url}
                alt={gallery[0].caption}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#FAF9F6]">
                <span>01 // {gallery[0].caption}</span>
                <span className="text-[#888888] hidden sm:inline">FULLBLEED</span>
              </div>
            </motion.div>
          )}

          {/* Shot 2 & 3: Asymmetric Split (Portrait Left + Wide Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {gallery[1] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="md:col-span-5 group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#111115] shadow-xl cursor-default"
                onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
                onMouseLeave={() => setCursorType('default')}
              >
                <img
                  src={gallery[1].url}
                  alt={gallery[1].caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-xs font-mono text-[#FAF9F6]">
                  <span>02 // {gallery[1].caption}</span>
                </div>
              </motion.div>
            )}

            {gallery[2] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-7 group relative aspect-[16/10] md:aspect-auto h-full rounded-2xl overflow-hidden border border-white/10 bg-[#111115] shadow-xl cursor-default flex flex-col justify-end"
                onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
                onMouseLeave={() => setCursorType('default')}
              >
                <img
                  src={gallery[2].url}
                  alt={gallery[2].caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-xs font-mono text-[#FAF9F6]">
                  <span>03 // {gallery[2].caption}</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Shot 4 & 5 (If available): Overlapping / Detail showcase */}
          {gallery.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
              {gallery[3] && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="md:col-span-7 group relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#111115] shadow-xl cursor-default"
                  onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <img
                    src={gallery[3].url}
                    alt={gallery[3].caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-xs font-mono text-[#FAF9F6]">
                    <span>04 // {gallery[3].caption}</span>
                  </div>
                </motion.div>
              )}

              {gallery[4] && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="md:col-span-5 group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#111115] shadow-xl cursor-default"
                  onMouseEnter={() => setCursorType('project', 'VIEW ↗')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <img
                    src={gallery[4].url}
                    alt={gallery[4].caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-xs font-mono text-[#FAF9F6]">
                    <span>05 // {gallery[4].caption}</span>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
