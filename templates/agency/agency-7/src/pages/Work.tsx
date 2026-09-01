import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { FilterBar } from '../components/FilterBar';
import { Category } from '../types';
import { Search, LayoutGrid, List } from 'lucide-react';

const CATEGORIES: Category[] = ['All', 'UI/UX', 'Product', 'Branding', 'Digital', 'Experimental'];

export const Work: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat') as Category | null;

  const [activeCat, setActiveCat] = useState<Category>(catParam || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleSelectCat = (cat: Category) => {
    setActiveCat(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ cat });
    }
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesCat = activeCat === 'All' || p.category === activeCat;
      const matchesSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [activeCat, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
          ARCHIVE // 2025–2026
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          SELECTED CASE STUDIES
        </h1>
        <p className="max-w-xl text-base text-neutral-600 dark:text-neutral-400 font-light">
          Exploration of UI/UX architectures, spatial 3D WebGL experiences, and brand ecosystems designed for forward-thinking clients.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
        <FilterBar
          categories={CATEGORIES}
          activeCategory={activeCat}
          onSelectCategory={handleSelectCat}
        />

        <div className="flex items-center space-x-3">
          {/* Search Input */}
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 pl-9 pr-4 py-2 font-mono text-xs text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none focus:border-blue-600"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 p-1 bg-neutral-100 dark:bg-neutral-800">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-full ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-full ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
              title="List View"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Display */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-2xl">
          <p className="font-mono text-sm text-neutral-500">NO PROJECTS MATCH YOUR QUERY.</p>
          <button
            onClick={() => {
              setActiveCat('All');
              setSearchQuery('');
              setSearchParams({});
            }}
            className="mt-4 font-mono text-xs uppercase font-bold text-blue-600 dark:text-blue-400 underline"
          >
            Clear Search & Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className={idx % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'}>
              <ProjectCard
                project={project}
                aspectOverride={idx % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'}
              />
            </div>
          ))}
        </div>
      ) : (
        /* List View Representation */
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-blue-500 transition-all shadow-sm"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="h-16 w-24 object-cover rounded-lg border border-neutral-200 dark:border-neutral-800"
                />
                <div>
                  <div className="font-mono text-[10px] uppercase text-blue-600 dark:text-blue-400 font-bold">
                    {project.client} // {project.year}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex items-center space-x-6">
                <span className="font-mono text-xs uppercase bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">
                  {project.category}
                </span>
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  VIEW CASE STUDY →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
