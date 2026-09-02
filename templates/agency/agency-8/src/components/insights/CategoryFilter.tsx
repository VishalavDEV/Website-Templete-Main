import React from 'react';
import { motion } from 'motion/react';
import { InsightCategory, INSIGHTS_CATEGORIES } from '../../data/insightsData';
import { CursorType } from '../../types';

interface CategoryFilterProps {
  activeCategory: InsightCategory;
  onSelectCategory: (category: InsightCategory) => void;
  counts: Record<InsightCategory, number>;
  setCursorType: (type: CursorType) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
  counts,
  setCursorType,
}) => {
  return (
    <div className="sticky top-20 z-30 bg-[#080808]/90 backdrop-blur-xl border-y border-[#ffffff10] py-4 px-6 sm:px-8 lg:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
        {/* Category Pill / Tab Items */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {INSIGHTS_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const count = counts[category] || 0;

            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className={`relative px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer flex items-center gap-2 select-none ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-[#888888] hover:text-[#FAF9F6]'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] ${
                    isActive ? 'text-[#0066FF]' : 'text-[#555555]'
                  }`}
                >
                  [{count < 10 ? `0${count}` : count}]
                </span>

                {/* Animated active underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066FF]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Label (Editorial Stamp) */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#666666] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
          <span>FILTERED ARCHIVE</span>
        </div>
      </div>
    </div>
  );
};
