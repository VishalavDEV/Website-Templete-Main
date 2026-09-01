import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowUpRight, Filter, Search, Grid, List } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import projectsData from '../data/projects.json';
import { MagneticButton } from '../components/common/MagneticButton';

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'BRANDING',
  'DIGITAL',
  'WEB',
  'CAMPAIGN',
  'PRODUCT',
  'MOTION',
];

export const WorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = projectsData as Project[];
  const filteredProjects = allProjects.filter((p) => {
    const matchesCat = activeCategory === 'ALL' || p.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative z-10 pt-32 sm:pt-40 pb-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-coral font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INDEX / ARCHIVE</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-ink-primary uppercase leading-[0.95]">
          SELECTED <br />
          <span className="text-stroke-strong">PORTFOLIO</span>
        </h1>
        <p className="max-w-2xl text-base text-ink-secondary leading-relaxed">
          Explore our complete archive of brand identities, spatial interfaces, 3D campaigns, and creative engineering for category pioneers.
        </p>
      </div>

      {/* Control Bar: Filters, Search, View Mode */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-ink-border">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] font-mono uppercase text-ink-muted flex items-center gap-1 mr-2">
            <Filter className="w-3 h-3" />
            CATEGORY:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono uppercase px-3.5 py-1.5 rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-ink-primary text-warm-white font-bold shadow-sm'
                  : 'bg-warm-white/80 hover:bg-warm-white text-ink-secondary hover:text-ink-primary border border-ink-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input & View Toggle */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-3 py-2 rounded-full text-xs font-mono bg-warm-white border border-ink-border text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-accent-coral"
            />
          </div>

          <div className="flex items-center rounded-full border border-ink-border bg-warm-white p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-full transition-colors ${
                viewMode === 'grid' ? 'bg-ink-primary text-warm-white' : 'text-ink-muted hover:text-ink-primary'
              }`}
              aria-label="Grid view"
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-full transition-colors ${
                viewMode === 'list' ? 'bg-ink-primary text-warm-white' : 'text-ink-muted hover:text-ink-primary'
              }`}
              aria-label="List view"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Projects List / Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-24 glass-panel rounded-3xl space-y-4">
          <h3 className="font-display text-2xl font-bold uppercase text-ink-primary">NO PROJECTS FOUND</h3>
          <p className="text-xs font-mono text-ink-secondary">
            No projects matched your criteria &ldquo;{searchQuery || activeCategory}&rdquo;
          </p>
          <button
            onClick={() => {
              setActiveCategory('ALL');
              setSearchQuery('');
            }}
            className="text-xs font-mono uppercase text-accent-coral font-semibold hover:underline"
          >
            RESET ALL FILTERS
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/work/${project.id}`)}
              className="group glass-panel p-5 rounded-3xl border border-ink-border cursor-pointer hover:border-accent-coral/40 transition-all duration-300"
              data-cursor="VIEW"
              data-cursor-text="VIEW"
            >
              <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-paper relative">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-[10px] font-mono uppercase font-semibold text-ink-primary">
                  {project.number} / 08
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                  <span className="text-accent-coral font-semibold">{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-display text-3xl font-bold uppercase text-ink-primary group-hover:text-accent-coral transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-accent-coral opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-xs sm:text-sm font-mono text-ink-secondary">{project.client}</p>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-warm-white border border-ink-border text-ink-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Editorial Table List Mode */
        <div className="divide-y divide-ink-border border-y border-ink-border">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/work/${project.id}`)}
              className="py-6 px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer hover:bg-warm-white/70 transition-colors"
              data-cursor="VIEW"
            >
              <div className="flex items-center gap-6 sm:gap-10">
                <span className="font-mono text-xs text-accent-coral font-bold">{project.number}</span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-ink-primary group-hover:text-accent-coral transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-ink-secondary">{project.client}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-ink-muted">
                <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-paper border border-ink-border text-accent-coral font-semibold">
                  {project.category}
                </span>
                <span>{project.year}</span>
                <div className="w-8 h-8 rounded-full border border-ink-border flex items-center justify-center group-hover:border-accent-coral group-hover:bg-accent-coral group-hover:text-warm-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Scoping CTA */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-ink-border text-center space-y-6">
        <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-ink-primary">
          HAVE A BESPOKE VISION?
        </h3>
        <p className="text-sm text-ink-secondary max-w-md mx-auto">
          We engineer brand identities and digital experiences tailored to your category.
        </p>
        <MagneticButton variant="primary" size="md" onClick={() => navigate('/contact')}>
          INITIATE A PROJECT BRIEF
        </MagneticButton>
      </div>
    </div>
  );
};
