import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { CursorType } from '../../types';

interface AvailabilityProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const Availability: React.FC<AvailabilityProps> = ({ setCursorType }) => {
  return (
    <section className="py-20 bg-[#080808] border-t border-[#ffffff15]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-[#ffffff15] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0066FF]">
                PROJECT AVAILABILITY
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase text-[#FAF9F6] tracking-tight">
              CURRENTLY BOOKING SELECTED PROJECTS FOR 2026.
            </h3>

            <p className="text-sm sm:text-base text-[#888888] font-normal leading-relaxed">
              We purposefully cap our concurrent studio commissions to ensure partner-level attention and meticulous craft for every single release.
            </p>
          </div>

          {/* Status Capsule */}
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-widest">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-semibold">AVAILABLE FOR SELECTED PROJECTS</span>
            </div>

            <span className="font-mono text-[11px] text-[#888888]">
              Next project kickoff slots available Q3–Q4 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
