import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Zap, RefreshCw, Cpu, Layers } from 'lucide-react';
import { CaseStudy } from '../../data/caseStudyData';
import { CursorType } from '../../types';

interface TechnologySectionProps {
  study: CaseStudy;
  setCursorType: (type: CursorType) => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ study, setCursorType }) => {
  const tech = study.technology;

  return (
    <section className="py-24 sm:py-36 bg-[#080808] border-b border-[#ffffff10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#ffffff10]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#888888]">
                ENGINEERING & ARCHITECTURE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#FAF9F6] tracking-tight uppercase">
              {tech.headline}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#FAF9F6] font-display uppercase font-bold max-w-md leading-snug">
            "{tech.statement}"
          </p>
        </div>

        {/* Stack & System Diagrams (Clean Editorial Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stack Directory (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#888888] block mb-2">
              CORE INFRASTRUCTURE & DEPENDENCIES
            </span>

            <div className="divide-y divide-[#ffffff10] border-y border-[#ffffff10]">
              {tech.stack.map((item, idx) => (
                <div
                  key={item.name}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#888888]">0{idx + 1}</span>
                      <h3 className="font-display text-lg font-bold text-[#FAF9F6] uppercase tracking-wide group-hover:text-white transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-xs text-[#888888] pl-7 font-mono">
                      {item.description}
                    </p>
                  </div>

                  <span
                    className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded bg-white/[0.03] border border-white/10 self-start sm:self-center shrink-0"
                    style={{ color: study.accent }}
                  >
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Principles Diagram (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-[#ffffff0e] space-y-8">
            <div className="flex items-center gap-2 border-b border-[#ffffff10] pb-4">
              <Cpu className="w-4 h-4" style={{ color: study.accent }} />
              <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                ARCHITECTURAL PILLARS
              </span>
            </div>

            <div className="space-y-6">
              {tech.principles.map((pr, idx) => (
                <div key={pr.title} className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
                    <h4 className="font-display text-base font-bold text-[#FAF9F6] uppercase tracking-wide">
                      {pr.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#888888] pl-5 leading-relaxed font-mono">
                    {pr.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Performance Benchmark Bar */}
            <div className="pt-6 border-t border-[#ffffff10] flex items-center justify-between font-mono text-[11px] text-[#888888]">
              <span>LIGHTHOUSE: 99/100</span>
              <span style={{ color: study.accent }}>WCAG AAA COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
