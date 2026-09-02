import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Award, Sparkles, X, CheckCircle, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/agencyData';
import { Project, CursorType } from '../types';

interface SelectedWorkProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate?: (path: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onOpenProjectModal,
  setCursorType,
  onNavigate,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', 'Brand Experience', 'Digital Platform', 'Creative Commerce', 'Digital Identity'];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  const handleProjectHoverStart = () => {
    setCursorType('project', 'VIEW ↗');
  };

  const handleProjectHoverEnd = () => {
    setCursorType('default');
  };

  return (
    <section id="work" className="py-28 sm:py-36 bg-[#080808] relative overflow-hidden">
      {/* Background Subtle Gradient Aura */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#0066FF]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#0066FF]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
                SELECTED WORK
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl font-bold text-[#FAF9F6] tracking-tight uppercase"
            >
              Recent Milestones
            </motion.h2>
          </div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/[0.03] text-[#888888] hover:text-[#FAF9F6] border border-[#ffffff15] hover:bg-white/[0.08]'
                }`}
              >
                {cat === 'all' ? 'All Works' : cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Asymmetric Editorial Project Showcase */}
        <div className="space-y-24 sm:space-y-36">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={handleProjectHoverStart}
                onMouseLeave={handleProjectHoverEnd}
                className="group cursor-pointer block"
              >
                {/* Project Layout - Asymmetric 12-col grid */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Project Image Showcase Container */}
                  <div className={`lg:col-span-8 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative overflow-hidden rounded-2xl bg-[#111111] border border-[#ffffff15] group-hover:border-[#0066FF]/40 transition-all duration-500 shadow-2xl">
                      {/* Image with zoom on hover */}
                      <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale-[10%] contrast-[110%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>

                      {/* Image Top Overlay Tags */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-[#FAF9F6] uppercase">
                          {project.number} // {project.year}
                        </span>
                        {project.metrics && (
                          <span className="px-3 py-1 bg-[#0066FF] text-[10px] font-mono tracking-widest text-white uppercase font-bold shadow-lg">
                            {project.metrics}
                          </span>
                        )}
                      </div>

                      {/* Subtle hover dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Editorial Metadata */}
                  <div className={`lg:col-span-4 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono tracking-[0.2em] text-[#0066FF] uppercase font-bold">
                          {project.category}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="text-xs font-mono tracking-widest text-[#888888]">
                          {project.client}
                        </span>
                      </div>

                      <div className="flex items-center justify-between group/title">
                        <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAF9F6] group-hover:text-white transition-all duration-300 group-hover:translate-x-2 uppercase">
                          {project.title}
                        </h3>
                        <div className="w-12 h-12 rounded-full border border-[#ffffff15] flex items-center justify-center group-hover:border-[#0066FF] group-hover:bg-[#0066FF]/10 transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5 text-[#888888] group-hover:text-[#0066FF] group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#888888] leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-md bg-white/[0.03] border border-[#ffffff10] text-xs text-[#888888] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Awards badges if any */}
                    {project.awards && (
                      <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#888888]">
                        <Award className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                        <span className="truncate">{project.awards.join(' • ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View Full Archive Bar */}
        {onNavigate && (
          <div className="mt-20 pt-12 border-t border-[#ffffff12] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-mono text-xs text-[#0066FF] uppercase tracking-[0.25em] font-semibold block">
                FULL 2026 ARCHIVE
              </span>
              <p className="text-sm text-[#888888]">
                Discover our complete body of brand systems, WebGPU shaders, and digital platforms.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/work')}
              onMouseEnter={() => setCursorType('pointer')}
              onMouseLeave={() => setCursorType('default')}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-widest hover:bg-[#0066FF] hover:text-white transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>EXPLORE ALL PROJECTS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Project Deep Dive / Quick View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-[#ffffff20] rounded-2xl p-6 sm:p-10 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/[0.06] border border-white/10 text-[#FAF9F6] hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-8">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#0066FF] uppercase tracking-widest mb-2 font-bold">
                    <span>{selectedProject.number}</span>
                    <span>//</span>
                    <span>{selectedProject.category}</span>
                    <span>//</span>
                    <span>{selectedProject.year}</span>
                  </div>
                  <h3 className="font-display text-4xl sm:text-5xl font-bold text-[#FAF9F6] uppercase">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-mono text-[#888888] mt-1">Client: {selectedProject.client}</p>
                </div>

                {/* Hero Showcase Image */}
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Narrative & Impact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#ffffff15]">
                  <div className="md:col-span-2 space-y-4">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#888888]">
                      The Challenge & Execution
                    </h4>
                    <p className="text-[#FAF9F6] text-sm sm:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedProject.tags.map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-md bg-white/[0.04] border border-[#ffffff10] text-xs text-[#FAF9F6] font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 bg-white/[0.02] p-5 rounded-xl border border-[#ffffff10]">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#0066FF] font-bold">
                      Commercial Impact
                    </h4>
                    {selectedProject.metrics && (
                      <div className="text-2xl font-bold font-display text-white">
                        {selectedProject.metrics}
                      </div>
                    )}
                    {selectedProject.awards && (
                      <div className="space-y-1.5 pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888]">Accolades:</span>
                        {selectedProject.awards.map((award, aIdx) => (
                          <div key={aIdx} className="text-xs text-[#FAF9F6] flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-[#0066FF]" />
                            <span>{award}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA inside modal */}
                <div className="pt-6 border-t border-[#ffffff15] flex items-center justify-between flex-wrap gap-4">
                  {onNavigate && (
                    <button
                      onClick={() => {
                        const slug = selectedProject.slug || selectedProject.id;
                        setSelectedProject(null);
                        onNavigate(`/work/${slug}`);
                      }}
                      className="px-6 py-3.5 bg-white text-black font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#0066FF] hover:text-white transition-all cursor-pointer rounded-full"
                    >
                      <span>Read Full Case Study &nearr;</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenProjectModal();
                    }}
                    className="px-6 py-3.5 bg-[#0066FF] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:brightness-110 transition-all cursor-pointer rounded-full"
                  >
                    <span>Start Your Project &nearr;</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
