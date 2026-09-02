import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { WorkProject } from '../../data/workProjectsData';
import { ProjectCard } from './ProjectCard';
import { CursorType } from '../../types';

interface ProjectArchiveProps {
  projects: WorkProject[];
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ProjectArchive: React.FC<ProjectArchiveProps> = ({
  projects,
  onNavigate,
  setCursorType,
}) => {
  // Initially show 8 projects, load more in increments of 4
  const INITIAL_COUNT = 8;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, projects.length));
  };

  // Assign asymmetric layout rhythm variants dynamically based on index pattern
  const getLayoutVariant = (idx: number): 'large-hero' | 'split-left' | 'split-right' | 'cinematic-full' | 'compact-card' | 'tall-editorial' => {
    const cycle = idx % 6;
    switch (cycle) {
      case 0:
        return 'large-hero';
      case 1:
        return 'tall-editorial';
      case 2:
        return 'split-left';
      case 3:
        return 'cinematic-full';
      case 4:
        return 'compact-card';
      case 5:
      default:
        return 'split-right';
    }
  };

  // Determine container column span based on cycle
  const getGridSpanClass = (idx: number): string => {
    const cycle = idx % 6;
    switch (cycle) {
      case 0:
        // Large project taking 8 or 12 cols
        return 'col-span-1 md:col-span-12';
      case 1:
        // Medium / tall taking 5 cols
        return 'col-span-1 md:col-span-5';
      case 2:
        // Medium taking 7 cols
        return 'col-span-1 md:col-span-7';
      case 3:
        // Full width cinematic taking 12 cols
        return 'col-span-1 md:col-span-12';
      case 4:
        // Two column left 6 cols
        return 'col-span-1 md:col-span-6';
      case 5:
      default:
        // Two column right 6 cols
        return 'col-span-1 md:col-span-6';
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* Empty state fallback */}
        {projects.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <p className="font-mono text-sm uppercase tracking-widest text-[#888888]">
              No matching projects found for selected filters.
            </p>
          </div>
        ) : (
          /* Editorial Asymmetric Grid */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`${getGridSpanClass(idx)} transition-all duration-500`}
                >
                  <ProjectCard
                    project={project}
                    index={idx}
                    layoutVariant={getLayoutVariant(idx)}
                    onNavigate={onNavigate}
                    setCursorType={setCursorType}
                  />
                </div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Load More / Progress Status Bar */}
        {projects.length > 0 && (
          <div className="pt-12 sm:pt-16 border-t border-[#ffffff10] flex flex-col items-center justify-center gap-6 text-center">
            {/* Progress Count Indicator */}
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#888888]">
              <span>SHOWING</span>
              <span className="text-[#FAF9F6] font-bold">{visibleProjects.length}</span>
              <span>/</span>
              <span>{projects.length} PROJECTS</span>
            </div>

            {/* Load More Button */}
            {hasMore ? (
              <button
                id="work-load-more-btn"
                onClick={handleLoadMore}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="group px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-[#ffffff18] hover:border-white/40 text-[#FAF9F6] font-mono text-xs uppercase tracking-widest flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-lg"
              >
                <span>LOAD MORE PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#0066FF] group-hover:translate-y-1 transition-transform" />
              </button>
            ) : (
              <div className="px-6 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-[#888888] tracking-widest uppercase">
                COMPLETE ARCHIVE DISPLAYED
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
