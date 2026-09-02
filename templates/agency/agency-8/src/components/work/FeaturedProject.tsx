import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Award, Sparkles, Layers } from 'lucide-react';
import { WorkProject } from '../../data/workProjectsData';
import { CursorType } from '../../types';

interface FeaturedProjectProps {
  project: WorkProject;
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  onNavigate,
  setCursorType,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorType('project', 'VIEW ↗');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorType('default');
  };

  const handleClick = () => {
    onNavigate(`/work/${project.slug}`);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#080808] border-b border-[#ffffff10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Lead Marker */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#ffffff10]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] uppercase text-[#888888]">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-[#FAF9F6] font-semibold">FLAGSHIP EXHIBITION</span>
            <span>//</span>
            <span>01 OF ARCHIVE</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#0066FF] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED SHOWCASE</span>
          </div>
        </div>

        {/* Massive Featured Project Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group relative cursor-pointer block rounded-3xl overflow-hidden bg-[#0e0e11] border border-[#ffffff18] hover:border-[#0066FF]/60 transition-all duration-700 shadow-2xl"
        >
          {/* Main Visual Image Viewport */}
          <div className="relative aspect-[16/10] md:aspect-[21/10] w-full overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              animate={{ scale: isHovered ? 1.045 : 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover grayscale-[12%] contrast-[112%] group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Gradient Dark Scrims for text contrast & mood */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-black/30 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-6 sm:top-8 left-6 sm:left-8 right-6 sm:right-8 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest text-[#FAF9F6] uppercase">
                  {project.categoryDisplay}
                </span>
                <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 text-xs font-mono text-[#888888]">
                  {project.year}
                </span>
              </div>

              {project.metrics && (
                <span className="px-4 py-1.5 bg-[#0066FF] text-xs font-mono tracking-widest text-white uppercase font-bold shadow-lg shadow-[#0066FF]/30">
                  {project.metrics}
                </span>
              )}
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono uppercase tracking-[0.3em] font-bold transition-colors duration-300 ${
                    isHovered ? 'text-[#0066FF]' : 'text-white/80'
                  }`}>
                    {project.client}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs font-mono text-[#888888] tracking-widest uppercase">
                    {project.industryDisplay}
                  </span>
                </div>

                <motion.h2
                  animate={{ x: isHovered ? 10 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#FAF9F6] tracking-tight uppercase leading-none"
                >
                  {project.title}
                </motion.h2>

                <p className="text-sm sm:text-base text-[#FAF9F6]/80 line-clamp-2 max-w-2xl font-normal leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>

              {/* Action Button Indicator */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="px-6 py-3.5 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300 shadow-xl">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metabar inside the featured card */}
          <div className="px-6 sm:px-10 py-5 bg-[#0a0a0d] border-t border-[#ffffff10] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#888888]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[#888888] mr-2">DELIVERABLES:</span>
              {project.services.map((svc, sIdx) => (
                <span key={sIdx} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-white/80">
                  {svc}
                </span>
              ))}
            </div>

            {project.award && (
              <div className="flex items-center gap-2 text-[#0066FF] font-medium shrink-0">
                <Award className="w-3.5 h-3.5" />
                <span>{project.award}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
