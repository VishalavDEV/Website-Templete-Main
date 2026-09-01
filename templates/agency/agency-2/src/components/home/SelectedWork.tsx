import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { Project, ProjectCategory } from '../../types';
import projectsData from '../../data/projects.json';
import { MagneticButton } from '../common/MagneticButton';

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'BRANDING',
  'DIGITAL',
  'WEB',
  'CAMPAIGN',
  'PRODUCT',
  'MOTION',
];

export const SelectedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const navigate = useNavigate();

  const allProjects = projectsData as Project[];
  const filteredProjects =
    activeCategory === 'ALL'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="selected-work" className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Header with Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-ink-border gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 — SELECTED WORK</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink-primary uppercase">
            PORTFOLIO <span className="text-stroke-strong">ARCHIVE</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] font-mono uppercase text-ink-muted flex items-center gap-1 mr-2">
            <Filter className="w-3 h-3" />
            FILTER:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono uppercase px-3 py-1.5 rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-ink-primary text-warm-white font-semibold shadow-sm'
                  : 'bg-warm-white/70 hover:bg-warm-white text-ink-secondary hover:text-ink-primary border border-ink-border'
              }`}
              data-cursor="LINK"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Alternating Editorial Projects Layout */}
      <div className="space-y-24 sm:space-y-32 pt-16">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-2xl">
            <p className="font-display text-xl text-ink-primary">NO PROJECTS FOUND IN THIS CATEGORY</p>
            <button
              onClick={() => setActiveCategory('ALL')}
              className="mt-4 text-xs font-mono uppercase text-accent-coral hover:underline"
            >
              CLEAR FILTERS
            </button>
          </div>
        ) : (
          filteredProjects.map((project, index) => {
            const layoutType = index % 4;

            // Layout 0: Image Left, Metadata Right
            if (layoutType === 0) {
              return (
                <div
                  key={project.id}
                  onClick={() => navigate(`/work/${project.id}`)}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center cursor-pointer"
                  data-cursor="VIEW"
                  data-cursor-text="VIEW"
                >
                  <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-ink-border/80 aspect-[16/10] bg-paper">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                      <span>{project.number} / 08</span>
                      <span className="px-2.5 py-1 rounded-full bg-accent-coral/10 text-accent-coral font-semibold">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-3xl sm:text-5xl font-bold uppercase text-ink-primary group-hover:text-accent-coral transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-ink-secondary">{project.client} — {project.year}</p>
                    </div>

                    <p className="text-sm text-ink-secondary leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.services.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-md bg-warm-white border border-ink-border text-ink-secondary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-coral font-semibold group-hover:translate-x-2 transition-transform">
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            }

            // Layout 1: Image Right, Metadata Left
            if (layoutType === 1) {
              return (
                <div
                  key={project.id}
                  onClick={() => navigate(`/work/${project.id}`)}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center cursor-pointer"
                  data-cursor="VIEW"
                  data-cursor-text="VIEW"
                >
                  <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                    <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                      <span>{project.number} / 08</span>
                      <span className="px-2.5 py-1 rounded-full bg-accent-lavender/30 text-ink-primary font-semibold">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-3xl sm:text-5xl font-bold uppercase text-ink-primary group-hover:text-accent-coral transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-ink-secondary">{project.client} — {project.year}</p>
                    </div>

                    <p className="text-sm text-ink-secondary leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.services.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-md bg-warm-white border border-ink-border text-ink-secondary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-coral font-semibold group-hover:translate-x-2 transition-transform">
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-ink-border/80 aspect-[16/10] bg-paper order-1 lg:order-2">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              );
            }

            // Layout 2: Full-Width Immersive Image
            if (layoutType === 2) {
              return (
                <div
                  key={project.id}
                  onClick={() => navigate(`/work/${project.id}`)}
                  className="group relative overflow-hidden rounded-3xl border border-ink-border/80 aspect-[21/9] sm:aspect-[2.4/1] cursor-pointer bg-ink-primary"
                  data-cursor="VIEW"
                  data-cursor-text="VIEW"
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-primary/90 via-ink-primary/30 to-transparent flex flex-col justify-end p-6 sm:p-12 text-warm-white">
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-accent-lavender mb-2">
                      <span>{project.number}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div>
                        <h3 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-warm-white/80 max-w-xl mt-1">
                          {project.tagline}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-coral font-semibold">
                        <span>VIEW EXPERIENCE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Layout 3: Asymmetric Split
            return (
              <div
                key={project.id}
                onClick={() => navigate(`/work/${project.id}`)}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-6 sm:p-10 rounded-3xl border border-ink-border cursor-pointer hover:border-accent-coral/40 transition-colors"
                data-cursor="VIEW"
                data-cursor-text="VIEW"
              >
                <div className="lg:col-span-8 overflow-hidden rounded-xl aspect-[16/9]">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-xs font-mono uppercase text-accent-coral font-semibold">
                    {project.number} — {project.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-4xl font-bold text-ink-primary uppercase group-hover:text-accent-coral transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="pt-2 text-xs font-mono uppercase text-ink-primary font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    <span>SEE ARCHITECTURE</span>
                    <ArrowUpRight className="w-4 h-4 text-accent-coral" />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <MagneticButton
          variant="outline"
          size="lg"
          onClick={() => navigate('/work')}
        >
          VIEW COMPLETE PORTFOLIO ARCHIVE ({allProjects.length})
          <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </section>
  );
};
