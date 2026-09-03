import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Grid, List } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PROJECTS } from '../data/projects';

const CATEGORIES = ['ALL', 'BRANDING', 'DIGITAL', 'CAMPAIGNS', 'MOTION', 'TECH'];

export const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') return PROJECTS;
    return PROJECTS.filter((p) => p.category.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Selected Work — OFFGRID®"
        description="Explore case studies by OFFGRID across brand strategy, digital experiences, motion, campaigns, and creative technology."
      />
      <main className="pt-32 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
        {/* Page Header */}
        <div className="mb-16 pb-8 border-b border-[#CFC7BE]">
          <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase block mb-3">
            // PORTFOLIO DIRECTORY
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tighter uppercase text-[#2B2727] mb-6">
            SELECTED WORK
          </h1>
          <p className="font-serif-editorial italic text-2xl md:text-3xl text-[#332832] max-w-2xl">
            Ideas we've turned into something impossible to ignore.
          </p>
        </div>

        {/* Filter Bar & View Toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-[#CFC7BE]">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'ALL'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category.includes(cat)).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 font-display text-xs tracking-widest uppercase transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#2B2727] text-[#FAF7F1] border-[#2B2727]'
                      : 'bg-[#FAF7F1] text-[#2B2727] border-[#CFC7BE] hover:border-[#D65F3F]'
                  }`}
                  data-cursor="link"
                >
                  {cat} <span className="font-mono text-[10px] opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher (Grid vs List) */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="font-mono text-xs text-[#77716D] uppercase mr-2">VIEW:</span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 border ${
                viewMode === 'grid'
                  ? 'bg-[#2B2727] text-[#FAF7F1] border-[#2B2727]'
                  : 'bg-[#FAF7F1] text-[#2B2727] border-[#CFC7BE]'
              }`}
              title="Grid View"
              data-cursor="link"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 border ${
                viewMode === 'list'
                  ? 'bg-[#2B2727] text-[#FAF7F1] border-[#2B2727]'
                  : 'bg-[#FAF7F1] text-[#2B2727] border-[#CFC7BE]'
              }`}
              title="List View"
              data-cursor="link"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Grid View */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Link
                    to={`/work/${project.slug}`}
                    className="group block space-y-4"
                    data-cursor="project"
                    data-cursor-text="VIEW →"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border border-[#CFC7BE] bg-[#332832]">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-[#2B2727]/90 text-[#FAF7F1] font-mono text-[10px] px-3 py-1 uppercase">
                        {project.client}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-[#D65F3F] text-[#FAF7F1] w-10 h-10 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center font-mono text-xs text-[#77716D]">
                        <span className="uppercase">{project.category.join(' / ')}</span>
                        <span>{project.year}</span>
                      </div>

                      <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#2B2727] group-hover:text-[#D65F3F] transition-colors uppercase tracking-tight">
                        {project.title}
                      </h2>

                      <p className="text-sm text-[#77716D] line-clamp-2 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Editorial List View */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-0 divide-y divide-[#CFC7BE]"
            >
              {filteredProjects.map((project, idx) => (
                <Link
                  key={project.slug}
                  to={`/work/${project.slug}`}
                  className="group block py-8 hover:bg-[#FAF7F1] px-4 transition-colors"
                  data-cursor="project"
                  data-cursor-text="VIEW →"
                >
                  <div className="grid grid-cols-12 items-center gap-4">
                    <div className="col-span-2 md:col-span-1 font-mono text-sm text-[#77716D]">
                      0{idx + 1}
                    </div>
                    <div className="col-span-10 md:col-span-4">
                      <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2B2727] group-hover:text-[#D65F3F] transition-colors uppercase">
                        {project.title}
                      </h2>
                      <p className="text-xs font-mono text-[#77716D] uppercase">{project.client}</p>
                    </div>
                    <div className="col-span-8 md:col-span-5 font-mono text-xs text-[#77716D]">
                      {project.services.join(' • ')}
                    </div>
                    <div className="col-span-4 md:col-span-2 text-right font-mono text-sm text-[#77716D] group-hover:text-[#D65F3F] flex items-center justify-end gap-2">
                      <span>{project.year}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <h3 className="font-display font-bold text-2xl uppercase">NO PROJECTS FOUND</h3>
            <p className="font-mono text-xs text-[#77716D]">Try resetting your active category filter.</p>
            <button
              onClick={() => setActiveCategory('ALL')}
              className="px-6 py-3 bg-[#2B2727] text-[#FAF7F1] font-display text-xs tracking-widest uppercase"
            >
              SHOW ALL PROJECTS
            </button>
          </div>
        )}
      </main>
    </>
  );
};
