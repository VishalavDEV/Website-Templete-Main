import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Filter, Eye, ArrowRight } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { projects } from '../data/projects';
import { audioService } from '../utils/audio';

interface PortfolioSectionProps {
  onSelectProject: (slug: string) => void;
  onOpenLightbox: (imageUrl: string, caption?: string) => void;
  onViewAllWork?: () => void;
  showAll?: boolean;
}

const categories: ProjectCategory[] = ['ALL', 'BRANDING', 'DIGITAL', 'MOTION', 'PRODUCT'];

export function PortfolioSection({
  onSelectProject,
  onOpenLightbox,
  onViewAllWork,
  showAll = false
}: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');

  const filteredProjects = projects.filter(p => {
    if (selectedCategory === 'ALL') return true;
    return p.category === selectedCategory;
  });

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="work-section" className="py-24 md:py-32 relative bg-[#0A0B0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header & Filters Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Work that transforms categories.
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#151821] p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-btn-${cat.toLowerCase()}`}
                  onClick={() => {
                    audioService.playClick();
                    setSelectedCategory(cat);
                  }}
                  onMouseEnter={() => {
                    if (!isActive) audioService.playHover();
                  }}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-violet-600 rounded-xl shadow-lg shadow-violet-600/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Grid / Masonry Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {displayProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-2 py-16 text-center bg-[#11131E] rounded-3xl border border-white/8 p-8"
              >
                <p className="text-base text-gray-300 font-medium">No projects in this category yet.</p>
                <button
                  onClick={() => {
                    audioService.playClick();
                    setSelectedCategory('ALL');
                  }}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-violet-500 transition-all"
                >
                  View All Work
                </button>
              </motion.div>
            ) : (
              displayProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden bg-[#151821]/70 border border-white/10 hover:border-violet-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between backdrop-blur-md"
                  data-cursor="view"
                  data-cursor-text="EXPLORE"
                >
                  {/* Image Container with Hover Zoom */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden bg-black/50 cursor-pointer"
                    onClick={() => {
                      audioService.playClick();
                      onSelectProject(project.slug);
                    }}
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151821] via-transparent to-transparent opacity-80" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="font-mono text-[11px] font-semibold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-violet-300 border border-white/10">
                        {project.category}
                      </span>
                      <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-gray-300 border border-white/10">
                        {project.year}
                      </span>
                    </div>

                    {/* Quick Lightbox Action Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        audioService.playClick();
                        onOpenLightbox(project.heroImage, `${project.title} — ${project.summary}`);
                      }}
                      className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-gray-300 hover:text-white hover:bg-violet-600 transition-all flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100"
                      title="Quick View Lightbox"
                      aria-label="View Fullscreen"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Project Info Card Details */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-gray-400">{project.client}</span>
                        <div className="flex items-center gap-1 text-xs font-mono text-violet-400 group-hover:text-violet-300">
                          <span>Case Study</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                      <h3
                        onClick={() => {
                          audioService.playClick();
                          onSelectProject(project.slug);
                        }}
                        className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Services Tags and Metrics */}
                    <div className="mt-6 pt-5 border-t border-white/6 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.servicesProvided.slice(0, 2).map((s, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      {project.results[0] && (
                        <div className="text-right">
                          <span className="font-mono text-xs font-bold text-emerald-400">
                            {project.results[0].value}
                          </span>
                          <span className="text-[10px] text-gray-500 font-mono block">
                            {project.results[0].label}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* View All Work CTA if rendered on Home */}
        {!showAll && (
          <div className="mt-14 text-center">
            <button
              id="view-all-work-btn"
              onClick={() => {
                audioService.playClick();
                if (onViewAllWork) onViewAllWork();
              }}
              className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-violet-600 text-white border border-white/10 hover:border-violet-500 font-mono text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg"
            >
              <span>Explore All 240+ Delivered Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
