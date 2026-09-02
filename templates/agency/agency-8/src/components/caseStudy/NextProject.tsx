import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface NextProjectProps {
  study: CaseStudy;
  onNavigate: (path: string) => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const NextProject: React.FC<NextProjectProps> = ({ study, onNavigate, setCursorType }) => {
  const next = study.nextProject;

  return (
    <section className="py-24 sm:py-36 bg-[#060608] border-b border-[#ffffff10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Next Project Interactive Box */}
        <div
          id={`next-project-${next.slug}`}
          onClick={() => onNavigate(`/work/${next.slug}`)}
          onMouseEnter={() => setCursorType('project', 'EXPLORE ↗')}
          onMouseLeave={() => setCursorType('default')}
          className="group relative rounded-3xl overflow-hidden border border-white/15 bg-[#0B0D13] p-8 sm:p-14 lg:p-20 cursor-pointer shadow-2xl transition-all duration-500 hover:border-white/30"
        >
          {/* Subtle Ambient Background Light */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-20 transition-opacity group-hover:opacity-40"
            style={{ backgroundColor: next.accent }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: next.accent }} />
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
                  NEXT PROJECT // 0{next.number}
                </span>
              </div>

              <h3 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#FAF9F6] tracking-[-0.03em] uppercase group-hover:translate-x-3 transition-transform duration-500">
                {next.title}
              </h3>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs sm:text-sm text-[#888888] tracking-widest uppercase">
                  {next.category}
                </span>
                <span className="text-[#888888] font-mono text-xs">// 2026</span>
              </div>

              <div className="pt-4 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest text-[#FAF9F6] group-hover:text-white">
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" style={{ color: next.accent }} />
              </div>
            </div>

            {/* Right Preview Image Frame */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-[#111115] shadow-2xl">
                <img
                  src={next.image}
                  alt={next.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:rotate-45 group-hover:bg-[#0066FF] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
