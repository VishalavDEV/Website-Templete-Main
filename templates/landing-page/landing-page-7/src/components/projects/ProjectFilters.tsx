import React from 'react';

export interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="project-filters-bar" role="tablist" aria-label="Project Categories">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={activeCategory === cat}
          className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
