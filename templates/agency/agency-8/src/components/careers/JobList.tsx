import React, { useState } from 'react';
import { motion } from 'motion/react';
import { JobPosition, CursorType } from '../../types';
import { OPEN_POSITIONS } from '../../data/careersData';
import { JobItem } from './JobItem';

interface JobListProps {
  onApply: (job: JobPosition) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const JobList: React.FC<JobListProps> = ({ onApply, setCursorType }) => {
  const [expandedJobId, setExpandedJobId] = useState<string | number | null>('senior-product-designer');
  const [selectedDept, setSelectedDept] = useState<string>('ALL');

  const departments = ['ALL', 'DESIGN', 'TECHNOLOGY', 'STRATEGY', 'MOTION', 'PRODUCTION'];

  const filteredPositions = OPEN_POSITIONS.filter((job) => {
    if (selectedDept === 'ALL') return true;
    return job.department.toUpperCase() === selectedDept;
  });

  const handleToggle = (id: string | number) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="open-positions"
      className="py-24 sm:py-36 md:py-44 border-b border-white/10 relative overflow-hidden bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0066FF] font-semibold">
                05 / OPPORTUNITIES
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#FAF9F6] uppercase tracking-tight leading-[0.92]">
              COME BUILD <br />
              WITH US.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 font-mono text-xs text-[#888888]">
            <span className="text-[#0066FF] font-bold">
              {OPEN_POSITIONS.length} ACTIVE RESIDENCIES
            </span>
            <span>AUTUMN / WINTER 2026</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {departments.map((dept) => {
            const isSelected = selectedDept === dept;
            const count =
              dept === 'ALL'
                ? OPEN_POSITIONS.length
                : OPEN_POSITIONS.filter((j) => j.department.toUpperCase() === dept).length;

            return (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                onMouseEnter={() => setCursorType('button')}
                onMouseLeave={() => setCursorType('default')}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#0066FF] border-[#0066FF] text-white'
                    : 'bg-white/[0.02] border-white/10 text-[#888888] hover:border-white/30 hover:text-[#FAF9F6]'
                }`}
              >
                <span>{dept}</span>
                <span className="ml-1.5 opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* The Central Job Listing (No cards, large typography rows) */}
        <div className="border-t border-white/10">
          {filteredPositions.map((job) => (
            <JobItem
              key={job.id}
              job={job}
              isExpanded={expandedJobId === job.id}
              onToggle={handleToggle}
              onApply={onApply}
              setCursorType={setCursorType}
            />
          ))}

          {filteredPositions.length === 0 && (
            <div className="py-16 text-center text-[#888888] font-mono text-xs uppercase tracking-widest">
              NO ROLES CURRENTLY OPEN IN THIS DISCIPLINE. CHECK GENERAL APPLICATION BELOW.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
