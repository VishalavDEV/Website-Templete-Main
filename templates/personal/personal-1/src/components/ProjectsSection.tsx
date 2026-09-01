import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ExternalLink,
  Github,
  ArrowUpRight,
  TrendingUp,
  Search,
  Award,
  Layers,
  Zap,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = [
  'All',
  'AI & Generative',
  'FinTech & Web3',
  'Design Systems',
  'Immersive 3D',
  'Enterprise',
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="relative py-28 bg-[#050505] text-[#E5E5E5] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] mb-4 font-mono">
              <Layers size={13} />
              <span>05 / SELECTED REPERTOIRE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-2xl leading-[1.05]">
              Architectural <span className="font-serif italic font-normal text-[#D4AF37]">Masterpieces</span> & Case Studies.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-xl font-light">
              Asymmetric editorial portfolio exploring real-time AI diffusion canvases, institutional trading terminals, and WebGPU graphics.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="text"
                placeholder="Search tech or project..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="projects-search-input"
                className="pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] w-full sm:w-60 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 w-fit backdrop-blur-md">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`projects-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-extrabold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`${
                  project.gridSpan || 'col-span-12 lg:col-span-6'
                } group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-xl`}
              >
                {/* 4K Image Container with Hover Zoom & Badges */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden cursor-pointer bg-neutral-950"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 text-[#D4AF37] border border-white/10 shadow-md">
                      {project.category}
                    </span>
                    {project.awards && project.awards.length > 0 && (
                      <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-md">
                        <Award size={12} />
                        <span>{project.awards[0]}</span>
                      </span>
                    )}
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
                    <div className="px-6 py-3 rounded-none bg-[#D4AF37] text-black font-extrabold text-xs tracking-widest uppercase flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-7 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    {/* Client & Year */}
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                      <span className="uppercase tracking-widest">{project.client}</span>
                      <span className="text-[#D4AF37] font-bold">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-display font-extrabold text-2xl md:text-3xl text-white group-hover:text-[#D4AF37] transition-colors cursor-pointer mb-2 tracking-tight"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm font-mono text-[#D4AF37] mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>

                    {/* KPI Metric Pills */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="flex flex-col text-center">
                          <span className="font-serif font-bold text-base md:text-lg text-[#D4AF37]">
                            {m.value}
                          </span>
                          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Case Study, Demo, GitHub */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      id={`project-view-case-btn-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          id={`project-github-btn-${project.id}`}
                          className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors"
                          title="View Repository"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          id={`project-live-btn-${project.id}`}
                          className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
                          title="Live Demo Preview"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
