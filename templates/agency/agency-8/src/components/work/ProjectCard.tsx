import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Award, Sparkles } from 'lucide-react';
import { WorkProject } from '../../data/workProjectsData';
import { CursorType } from '../../types';

interface ProjectCardProps {
  project: WorkProject;
  index: number;
  layoutVariant: 'large-hero' | 'split-left' | 'split-right' | 'cinematic-full' | 'compact-card' | 'tall-editorial';
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  layoutVariant,
  onNavigate,
  setCursorType,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorType('project', project.cursorText || 'VIEW ↗');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorType('default');
  };

  const handleClick = () => {
    onNavigate(`/work/${project.slug}`);
  };

  // Determine aspect ratio and grid classes based on layoutVariant
  const getAspectClass = () => {
    switch (layoutVariant) {
      case 'cinematic-full':
        return 'aspect-[21/9] sm:aspect-[2.4/1]';
      case 'tall-editorial':
        return 'aspect-[4/5] sm:aspect-[3/4]';
      case 'large-hero':
        return 'aspect-[16/10] sm:aspect-[16/9]';
      case 'split-left':
      case 'split-right':
        return 'aspect-[16/11] sm:aspect-[16/10]';
      case 'compact-card':
      default:
        return 'aspect-[4/3] sm:aspect-[16/10]';
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.3 } }}
      transition={{ duration: 0.7, delay: (index % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      id={`project-card-${project.slug}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer block h-full select-none"
    >
      <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-[#0d0d10] border border-[#ffffff14] hover:border-[#0066FF]/50 transition-all duration-500 shadow-xl">
        {/* Visual Media Container */}
        <div className={`relative w-full overflow-hidden ${getAspectClass()} bg-[#111114]`}>
          <motion.img
            src={project.image}
            alt={project.title}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover grayscale-[10%] contrast-[110%] group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />

          {/* Dark gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

          {/* Top Overlays */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-[#FAF9F6] uppercase font-semibold">
                {project.categoryDisplay}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#888888]">
                {project.year}
              </span>
            </div>

            {project.metrics && (
              <span className="px-3 py-1 bg-[#0066FF] text-[10px] font-mono tracking-widest text-white uppercase font-bold shadow-md shadow-[#0066FF]/20">
                {project.metrics}
              </span>
            )}
          </div>
        </div>

        {/* Card Editorial Info Area */}
        <div className="p-6 sm:p-8 flex flex-col justify-between grow space-y-4">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#888888] tracking-widest uppercase group-hover:text-[#0066FF] transition-colors duration-300 font-semibold">
                {project.client}
              </span>
              <span className="text-[#888888] uppercase tracking-wider text-[11px]">
                {project.industryDisplay}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <motion.h3
                animate={{ x: isHovered ? 6 : 0 }}
                transition={{ duration: 0.3 }}
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAF9F6] group-hover:text-white uppercase tracking-tight"
              >
                {project.title}
              </motion.h3>

              <div className="w-10 h-10 rounded-full border border-[#ffffff18] flex items-center justify-center group-hover:border-[#0066FF] group-hover:bg-[#0066FF]/10 transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#0066FF] group-hover:rotate-45 transition-all duration-300" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#888888] group-hover:text-[#FAF9F6]/90 line-clamp-2 leading-relaxed transition-colors duration-300">
              {project.description}
            </p>
          </div>

          {/* Tags & Deliverables */}
          <div className="pt-3 border-t border-[#ffffff0e] flex items-center justify-between gap-2 flex-wrap text-xs font-mono text-[#888888]">
            <div className="flex flex-wrap gap-1.5">
              {project.services.slice(0, 3).map((svc, sIdx) => (
                <span key={sIdx} className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] text-[#888888] border border-white/[0.04]">
                  {svc}
                </span>
              ))}
            </div>

            {project.award && (
              <div className="flex items-center gap-1 text-[10px] text-[#0066FF] shrink-0 font-medium">
                <Award className="w-3 h-3" />
                <span className="truncate max-w-[150px]">{project.award}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
