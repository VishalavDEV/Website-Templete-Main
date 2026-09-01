import React, { useState } from 'react';
import { Project, Category } from '../types';
import { ProjectCard } from './ProjectCard';
import { FilterBar } from './FilterBar';

interface ProjectGridProps {
  projects: Project[];
  showFilter?: boolean;
  limit?: number;
}

const CATEGORIES: Category[] = ['All', 'UI/UX', 'Product', 'Branding', 'Digital', 'Experimental'];

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, showFilter = true, limit }) => {
  const [activeCat, setActiveCat] = useState<Category>('All');

  const filteredProjects = projects.filter((p) => {
    if (activeCat === 'All') return true;
    return p.category === activeCat;
  });

  const displayList = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className="space-y-10">
      {showFilter && (
        <FilterBar
          categories={CATEGORIES}
          activeCategory={activeCat}
          onSelectCategory={(cat) => setActiveCat(cat)}
        />
      )}

      {displayList.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl">
          <p className="font-mono text-sm text-neutral-500">NO PROJECTS FOUND IN THIS CATEGORY.</p>
        </div>
      ) : (
        /* Asymmetric Editorial Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {displayList.map((project, idx) => {
            // Asymmetric layout logic: alternate aspect ratios and column spans
            const isWide = idx % 3 === 0;
            return (
              <div
                key={project.id}
                className={isWide ? 'md:col-span-2' : 'md:col-span-1'}
              >
                <ProjectCard
                  project={project}
                  aspectOverride={isWide ? 'aspect-[16/9]' : 'aspect-[4/5]'}
                  isFeatured={isWide}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
