import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { RISK_CATEGORIES, RiskCategoryItem } from '../../data/risks';

export const RiskMatrix: React.FC = () => {
  const [selectedRiskId, setSelectedRiskId] = useState<string>(RISK_CATEGORIES[0].id);

  const selectedRisk = RISK_CATEGORIES.find((r) => r.id === selectedRiskId) || RISK_CATEGORIES[0];

  return (
    <section id="risk" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-14 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              05 / GOVERNANCE
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              RISK INTEGRITY MATRIX
            </span>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191919] font-normal leading-tight tracking-tight">
              Deterministic risk framework.
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              Risk cannot be eliminated, but it must be isolated, stress-tested, and governed. We apply institutional underwriting across six core risk disciplines.
            </p>
          </div>
        </div>

        {/* 6-CATEGORY INTERACTIVE GRID */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {RISK_CATEGORIES.map((risk, idx) => {
            const isSelected = risk.id === selectedRiskId;
            return (
              <button
                key={risk.id}
                onClick={() => setSelectedRiskId(risk.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-28 border ${
                  isSelected
                    ? 'bg-[#191919] text-white border-[#191919] shadow-xs'
                    : 'bg-[#F4F3F3] hover:bg-[#EAEAEA] text-[#191919] border-transparent'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-mono ${isSelected ? 'text-white/60' : 'text-[#191919]/40'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-[#191919]/60'
                  }`}>
                    {risk.severityLevel}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium leading-snug">
                  {risk.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* RISK DEEP DIVE PANEL */}
        <div className="mt-8 bg-[#F4F3F3] border border-[#E5E5E5] rounded-2xl p-6 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Col: Definition & Potential Impact */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-mono block mb-1">
                  RISK DEFINITION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
                  {selectedRisk.category}
                </h3>
                <p className="text-xs sm:text-sm text-[#191919]/80 leading-relaxed font-light mt-3">
                  {selectedRisk.definition}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E5E5E5] space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#191919]/50 font-mono block">
                  POTENTIAL BALANCE SHEET IMPACT
                </span>
                <p className="text-xs text-[#191919]/80 leading-relaxed font-light">
                  {selectedRisk.potentialImpact}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E5E5E5] space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#191919]/50 font-mono block">
                  MITIGATION ARCHITECTURE
                </span>
                <p className="text-xs text-[#191919]/80 leading-relaxed font-light">
                  {selectedRisk.mitigation}
                </p>
              </div>
            </div>

            {/* Right Col: Monitoring Indicators & Governance */}
            <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-[#E5E5E5] lg:pl-10">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                  CONTINUOUS MONITORING TELEMETRY
                </span>
                <div className="space-y-2">
                  {selectedRisk.monitoringIndicators.map((ind, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-[#E5E5E5] rounded-lg text-xs text-[#191919]/85 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-mono text-[#191919]/40">0{idx + 1}</span>
                        <span className="font-medium">{ind}</span>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        Active Telemetry
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#191919] text-white rounded-xl space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-white/50 font-mono block">
                  INSTITUTIONAL GOVERNANCE PROTOCOL
                </span>
                <p className="text-xs text-white/90 leading-relaxed font-mono">
                  {selectedRisk.governanceProtocol}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
