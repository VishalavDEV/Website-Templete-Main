import React from 'react';
import { Category } from '../types';

interface FilterBarProps {
  categories: Category[];
  activeCategory: Category;
  onSelectCategory: (cat: Category) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 py-4">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
              isActive
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                : 'bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
