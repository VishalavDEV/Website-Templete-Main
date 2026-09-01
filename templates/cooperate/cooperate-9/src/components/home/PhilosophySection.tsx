import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { INVESTMENT_PRINCIPLES } from '../../data/investments';

export const PhilosophySection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleRow = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section id="perspective" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-16 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              01 / PERSPECTIVE
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              PHILOSOPHY OF CAPITAL
            </span>
          </div>

          <div className="md:col-span-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191919] font-normal leading-[1.15] tracking-tight">
              Perspective before allocation.
            </h2>
            <p className="text-base sm:text-lg text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              Markets reward discipline and penalize reaction. Before deploying capital or restructuring balance sheets, we establish structural clarity on long-term cash flow resilience, downside risks, and enduring competitive advantage.
            </p>
          </div>
        </div>

        {/* EXPANDABLE PRINCIPLES ROWS */}
        <div className="divide-y divide-[#E5E5E5]">
          {INVESTMENT_PRINCIPLES.map((principle, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={principle.number}
                className="py-8 sm:py-10 transition-colors duration-200"
              >
                {/* CLICKABLE ROW HEADER */}
                <div
                  onClick={() => toggleRow(index)}
                  className="flex items-baseline justify-between cursor-pointer group select-none"
                >
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className="text-xs sm:text-sm font-mono text-[#191919]/40">
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#191919] group-hover:text-[#191919]/70 transition-colors font-normal">
                        {principle.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#191919]/60 font-sans mt-1">
                        {principle.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-[#191919]/50 hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'Examine'}
                    </span>
                    <div className={`w-7 h-7 rounded-full border border-[#E5E5E5] flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? 'rotate-90 bg-[#191919] text-white border-[#191919]' : 'bg-[#F4F3F3] text-[#191919] group-hover:border-[#191919]/30'
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* EXPANDED CONTENT BODY */}
                {isExpanded && (
                  <div className="mt-8 pt-6 border-t border-[#E5E5E5]/60 grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in duration-300">
                    <div className="md:col-span-5 space-y-4">
                      <p className="text-sm sm:text-base text-[#191919]/80 leading-relaxed font-light">
                        {principle.summary}
                      </p>
                      <div className="p-4 bg-[#F4F3F3] rounded-lg">
                        <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block mb-1">
                          INSTITUTIONAL RATIONALE
                        </span>
                        <p className="text-xs text-[#191919]/70 leading-relaxed font-mono">
                          {principle.rationale}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-7 space-y-3">
                      <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                        PRACTICAL EXECUTION PILLARS
                      </span>
                      <div className="space-y-2.5">
                        {principle.details.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 bg-[#F4F3F3] hover:bg-[#EAEAEA] transition-colors rounded-lg flex items-start gap-3 text-xs sm:text-sm text-[#191919]/85"
                          >
                            <span className="text-[10px] font-mono text-[#191919]/40 mt-0.5">0{idx + 1}</span>
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
