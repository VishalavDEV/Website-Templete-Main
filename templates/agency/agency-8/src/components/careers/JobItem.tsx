import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { JobPosition, CursorType } from '../../types';
import { JobDetail } from './JobDetail';

interface JobItemProps {
  job: JobPosition;
  isExpanded: boolean;
  onToggle: (id: string | number) => void;
  onApply: (job: JobPosition) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const JobItem: React.FC<JobItemProps> = ({
  job,
  isExpanded,
  onToggle,
  onApply,
  setCursorType,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(job.id);
    }
  };

  return (
    <div
      id={`job-item-${job.id}`}
      className={`border-b border-white/10 transition-all duration-500 relative ${
        isExpanded ? 'bg-white/[0.015]' : ''
      }`}
    >
      {/* Clickable Header Row */}
      <button
        type="button"
        role="button"
        aria-expanded={isExpanded}
        aria-controls={`job-detail-panel-${job.id}`}
        onClick={() => onToggle(job.id)}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => {
          setIsHovered(true);
          setCursorType('pointer', isExpanded ? 'COLLAPSE' : 'EXPLORE ↗');
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setCursorType('default');
        }}
        className="w-full text-left py-8 sm:py-12 px-4 sm:px-8 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#0066FF] transition-all duration-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
          {/* Number & Department */}
          <div className="md:col-span-2 flex items-center gap-3">
            <span className="font-mono text-xs text-[#888888] group-hover:text-[#0066FF] transition-colors">
              [ {job.number} ]
            </span>
            <span className="px-2.5 py-1 bg-white/[0.04] border border-white/10 font-mono text-[10px] uppercase tracking-widest text-[#888888] group-hover:text-[#FAF9F6] group-hover:border-white/30 transition-all">
              {job.department}
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="md:col-span-6 space-y-1">
            <h3
              className={`font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight transition-colors duration-300 ${
                isExpanded || isHovered
                  ? 'text-[#FAF9F6]'
                  : 'text-[#AAAAAA] group-hover:text-[#FAF9F6]'
              }`}
            >
              {job.title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#888888] font-light line-clamp-1 group-hover:text-[#A0A0A0] transition-colors">
              {job.tagline}
            </p>
          </div>

          {/* Metadata (Type & Location) */}
          <div className="md:col-span-3 font-mono text-xs space-y-1">
            <div className="text-[#888888] group-hover:text-[#FAF9F6] transition-colors">
              {job.type}
            </div>
            <div className="text-[#666666] text-[11px] uppercase tracking-wider">
              {job.location}
            </div>
          </div>

          {/* Expand Arrow / Trigger Icon */}
          <div className="md:col-span-1 flex items-center justify-end">
            <div
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                isExpanded
                  ? 'bg-[#0066FF] border-[#0066FF] text-white rotate-180'
                  : 'bg-white/[0.02] border-white/15 text-[#888888] group-hover:border-[#0066FF] group-hover:text-[#FAF9F6]'
              }`}
            >
              <ChevronDown className="w-4 h-4 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Hover Contextual Floating Preview (Desktop) */}
        <AnimatePresence>
          {isHovered && !isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              transition={{ duration: 0.25 }}
              className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-48 h-28 border border-white/20 overflow-hidden pointer-events-none z-20 shadow-2xl bg-black/80"
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-full object-cover grayscale contrast-125 brightness-95"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-widest text-[#0066FF] font-bold">
                VIEW SPECS ↗
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Accordion Detail Content */}
      <AnimatePresence>
        {isExpanded && (
          <div id={`job-detail-panel-${job.id}`}>
            <JobDetail
              job={job}
              onApply={onApply}
              setCursorType={setCursorType}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
