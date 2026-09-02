import React from 'react';
import { motion } from 'motion/react';
import { Filter, RotateCcw, Check } from 'lucide-react';
import { CursorType } from '../../types';

export type CategoryFilter = 'ALL' | 'BRANDING' | 'DIGITAL' | 'DEVELOPMENT' | 'CREATIVE TECHNOLOGY' | 'CONTENT';
export type IndustryFilter = 'ALL' | 'TECHNOLOGY' | 'FINANCE' | 'RETAIL' | 'CULTURE' | 'HEALTH' | 'LIFESTYLE';

interface WorkFiltersProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (cat: CategoryFilter) => void;
  activeIndustry: IndustryFilter;
  onSelectIndustry: (ind: IndustryFilter) => void;
  onClearFilters: () => void;
  filteredCount: number;
  totalCount: number;
  categoryCounts: Record<CategoryFilter, number>;
  setCursorType: (type: CursorType) => void;
}

export const WorkFilters: React.FC<WorkFiltersProps> = ({
  activeCategory,
  onSelectCategory,
  activeIndustry,
  onSelectIndustry,
  onClearFilters,
  filteredCount,
  totalCount,
  categoryCounts,
  setCursorType,
}) => {
  const categories: CategoryFilter[] = [
    'ALL',
    'BRANDING',
    'DIGITAL',
    'DEVELOPMENT',
    'CREATIVE TECHNOLOGY',
    'CONTENT',
  ];

  const industries: IndustryFilter[] = [
    'ALL',
    'TECHNOLOGY',
    'FINANCE',
    'RETAIL',
    'CULTURE',
    'HEALTH',
    'LIFESTYLE',
  ];

  const isFiltered = activeCategory !== 'ALL' || activeIndustry !== 'ALL';

  return (
    <div className="sticky top-20 sm:top-24 z-30 py-4 bg-[#080808]/90 backdrop-blur-xl border-b border-[#ffffff15] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4">
        {/* Main Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center overflow-x-auto no-scrollbar py-1 gap-1 sm:gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = categoryCounts[cat] || 0;

              return (
                <button
                  key={cat}
                  id={`work-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => onSelectCategory(cat)}
                  onMouseEnter={() => setCursorType('pointer')}
                  onMouseLeave={() => setCursorType('default')}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'text-[#FAF9F6] font-bold'
                      : 'text-[#888888] hover:text-[#FAF9F6] hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryHighlight"
                      className="absolute inset-0 bg-[#0066FF] rounded-full -z-10 shadow-lg shadow-[#0066FF]/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-white/[0.06] text-[#888888]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Status / Filter Controls */}
          <div className="flex items-center gap-4 justify-between lg:justify-end text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-2">
              <span className="text-[#FAF9F6] font-semibold">{filteredCount}</span>
              <span>of</span>
              <span>{totalCount}</span>
              <span className="hidden sm:inline uppercase">projects</span>
            </div>

            {isFiltered && (
              <button
                onClick={onClearFilters}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-[#FAF9F6] text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer border border-white/10"
              >
                <RotateCcw className="w-3 h-3 text-[#0066FF]" />
                <span>CLEAR FILTERS</span>
              </button>
            )}
          </div>
        </div>

        {/* Secondary Industry Sub-filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 text-[11px] font-mono border-t border-[#ffffff08]">
          <span className="text-[#888888] uppercase tracking-widest text-[10px] shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#0066FF]" />
            <span>INDUSTRY:</span>
          </span>

          {industries.map((ind) => {
            const isIndActive = activeIndustry === ind;
            return (
              <button
                key={ind}
                onClick={() => onSelectIndustry(ind)}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className={`px-3 py-1 rounded-md transition-all duration-200 whitespace-nowrap cursor-pointer uppercase ${
                  isIndActive
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'bg-white/[0.02] text-[#888888] hover:text-[#FAF9F6] hover:bg-white/[0.06] border border-white/[0.06]'
                }`}
              >
                {ind === 'ALL' ? 'ALL SECTORS' : ind}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
