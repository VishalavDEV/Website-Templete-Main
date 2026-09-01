import React, { memo } from 'react';
import { motion } from 'framer-motion';

export interface CategoryPillProps {
  label: string;
  count?: string | number;
  isActive?: boolean;
  onClick?: () => void;
  color?: 'blue' | 'violet' | 'coral' | 'lime' | 'amber';
}

const colorThemes = {
  blue: {
    active: 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20',
    inactive: 'bg-slate-100/90 text-slate-700 hover:bg-blue-50 hover:text-blue-600 border-slate-200/80',
    underline: 'bg-blue-600',
  },
  violet: {
    active: 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20',
    inactive: 'bg-slate-100/90 text-slate-700 hover:bg-purple-50 hover:text-purple-600 border-slate-200/80',
    underline: 'bg-purple-600',
  },
  coral: {
    active: 'bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-500/20',
    inactive: 'bg-slate-100/90 text-slate-700 hover:bg-rose-50 hover:text-rose-600 border-slate-200/80',
    underline: 'bg-rose-600',
  },
  lime: {
    active: 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20',
    inactive: 'bg-slate-100/90 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 border-slate-200/80',
    underline: 'bg-emerald-600',
  },
  amber: {
    active: 'bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-500/20',
    inactive: 'bg-slate-100/90 text-slate-700 hover:bg-amber-50 hover:text-amber-700 border-slate-200/80',
    underline: 'bg-amber-600',
  },
};

export const CategoryPill: React.FC<CategoryPillProps> = memo(({
  label,
  count,
  isActive = false,
  onClick,
  color = 'blue',
}) => {
  const theme = colorThemes[color];

  return (
    <motion.button
      whileTap={{ scale: 0.94 }}
      whileHover={{ y: -1 }}
      onClick={onClick}
      className={`group relative px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 border cursor-pointer select-none flex items-center gap-1.5 ${
        isActive ? theme.active : theme.inactive
      }`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
          isActive ? 'bg-white/20 text-white' : 'bg-white text-slate-500'
        }`}>
          {count}
        </span>
      )}

      {/* Subtle Bottom Accent Indicator on Hover */}
      {!isActive && (
        <span
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full group-hover:w-3/5 transition-all duration-300 ${theme.underline}`}
        />
      )}
    </motion.button>
  );
});

CategoryPill.displayName = 'CategoryPill';
