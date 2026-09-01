import React, { useState } from 'react';
import { FEATURED_CASE_STUDY } from '../../data/caseStudies';

export const CaseStudy: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const study = FEATURED_CASE_STUDY;

  return (
    <section id="case-study" className="py-24 sm:py-32 bg-[#F4F3F3] border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-14 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              08 / OUTCOMES
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              EDITORIAL CASE STUDY
            </span>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191919] font-normal leading-tight tracking-tight">
              Capital efficiency in practice.
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              An institutional examination of how forensic balance sheet restructuring and automated liquidity pooling transformed a global industrial enterprise.
            </p>
          </div>
        </div>

        {/* CASE HERO PANEL */}
        <div className="pt-12 pb-10">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 sm:p-12 shadow-xs space-y-8">
            {/* Meta tags */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E5E5]">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#191919]/40 font-mono block">
                  INSTITUTIONAL CLIENT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
                  {study.client}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 bg-[#F4F3F3] text-[#191919]/70 rounded">
                  {study.sector}
                </span>
                <span className="px-3 py-1 bg-[#F4F3F3] text-[#191919]/70 rounded">
                  {study.geography}
                </span>
              </div>
            </div>

            {/* Headline Result & Executive Summary */}
            <div className="space-y-4">
              <div className="inline-block px-3.5 py-1.5 bg-[#191919] text-white rounded text-xs font-mono font-medium">
                Verified Outcome: {study.headlineResult}
              </div>
              <p className="text-sm sm:text-base text-[#191919]/80 leading-relaxed font-light">
                {study.executiveSummary}
              </p>
            </div>

            {/* 4 Metric Callout Blocks */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4">
              {study.metrics.map((m, idx) => (
                <div key={idx} className="p-4 bg-[#F4F3F3] rounded-xl border border-[#E5E5E5]/60">
                  <span className="text-2xl sm:text-3xl font-serif font-normal text-[#191919] block">
                    {m.value}
                  </span>
                  <span className="text-xs font-medium text-[#191919] mt-1 block">
                    {m.label}
                  </span>
                  <span className="text-[11px] text-[#191919]/60 font-light mt-0.5 block">
                    {m.sublabel}
                  </span>
                </div>
              ))}
            </div>

            {/* 5-PHASE INTERACTIVE DISSECTION */}
            <div className="pt-6 space-y-6">
              <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                PHASE-BY-PHASE EXECUTION ANATOMY
              </span>

              {/* Phase selector tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[#E5E5E5] pb-4">
                {study.phases.map((phase, idx) => {
                  const isActive = activePhaseIndex === idx;
                  return (
                    <button
                      key={phase.phase}
                      onClick={() => setActivePhaseIndex(idx)}
                      className={`p-3 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#191919] text-white shadow-xs'
                          : 'bg-[#F4F3F3] hover:bg-[#EAEAEA] text-[#191919]'
                      }`}
                    >
                      <span className={`text-[10px] font-mono block ${isActive ? 'text-white/60' : 'text-[#191919]/40'}`}>
                        PHASE {phase.phase}
                      </span>
                      <span className="text-xs sm:text-sm font-medium mt-0.5 block">
                        {phase.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Phase Content */}
              {study.phases[activePhaseIndex] && (
                <div className="p-6 bg-[#F4F3F3] rounded-xl border border-[#E5E5E5]/60 space-y-4 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="font-serif text-xl sm:text-2xl text-[#191919] font-normal">
                      Phase {study.phases[activePhaseIndex].phase}: {study.phases[activePhaseIndex].title}
                    </h4>
                    {study.phases[activePhaseIndex].metricImpact && (
                      <span className="text-xs font-mono text-[#191919] font-semibold bg-white px-3 py-1 rounded border border-[#E5E5E5]">
                        {study.phases[activePhaseIndex].metricImpact}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#191919]/80 font-light leading-relaxed">
                    {study.phases[activePhaseIndex].summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    {study.phases[activePhaseIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="p-3 bg-white rounded-lg text-xs text-[#191919]/85 flex items-start gap-2.5">
                        <span className="text-xs font-mono text-[#191919]/40 mt-0.5">•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="text-right pt-2">
              <span className="text-[10px] font-mono text-[#191919]/40">
                * All figures are fictional demonstration data based on institutional engagement paradigms.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
