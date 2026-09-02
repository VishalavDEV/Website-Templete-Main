import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Eye } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectModal } from './ProjectModal';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { GithubIcon } from '../common/Icons';
import { soundFx } from '../../utils/audio';
import { cn } from '../../utils/cn';

const CATEGORIES: ProjectCategory[] = ['All', 'Web Apps', 'Branding', 'Mobile', '3D/Motion'];

export const WorkSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const handleSelectCategory = (category: ProjectCategory) => {
    soundFx.playClick();
    setActiveCategory(category);
  };

  const handleOpenProject = (project: Project) => {
    soundFx.playClick();
    setSelectedProject(project);
  };

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Selected Portfolio"
          title="Featured works and interface experiments."
          highlightedWord="Featured works"
          description="A curated gallery of production web applications, spatial experiments, and design systems built for scale."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleSelectCategory(category)}
                className={cn(
                  'relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 outline-none',
                  isActive
                    ? 'text-white shadow-md shadow-blue-600/20'
                    : 'text-slate-600 hover:text-slate-900 glass-card border border-slate-200 hover:border-blue-500/40 bg-white'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryFilter"
                    className="absolute inset-0 rounded-full bg-slate-900 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{category}</span>
                {category !== 'All' && (
                  <span className="ml-2 opacity-70 text-[10px] font-mono">
                    ({PROJECTS.filter((p) => p.category === category).length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl overflow-hidden glass-card border border-slate-200/90 bg-white flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300"
                onClick={() => handleOpenProject(project)}
              >
                {/* Image Container with Zoom & Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={project.coverImage}
                    alt={project.title}
                    fallbackTitle={project.title}
                    category={project.category}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />

                  {/* Category Pill on Image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/95 text-slate-800 backdrop-blur-md shadow-sm border border-slate-200/60">
                      {project.category}
                    </span>
                  </div>

                  {/* Quick Action Overlay Icons on Hover */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View live project"
                        className="p-2 rounded-full bg-white text-slate-900 hover:bg-blue-600 hover:text-white transition-colors shadow-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View source code"
                        className="p-2 rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white transition-colors shadow-md"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Quick View Pill centered on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-slate-200">
                      <Eye className="w-3.5 h-3.5 text-blue-600" />
                      View Project
                    </span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2 font-medium">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl font-display font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed font-sans">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 text-slate-600 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
