import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GLOBAL_REGIONS, RegionalPerspective } from '../../data/regions';

export const GlobalPerspective: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(GLOBAL_REGIONS[0].id);

  const selectedRegion = GLOBAL_REGIONS.find((r) => r.id === selectedRegionId) || GLOBAL_REGIONS[0];

  return (
    <section id="global" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-14 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              07 / GEOGRAPHY
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              CROSS-BORDER PERSPECTIVES
            </span>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191919] font-normal leading-tight tracking-tight">
              Global capital perspectives.
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              We underwrite opportunities and assess sovereign curve dynamics across six distinct economic zones, providing unconstrained cross-border perspective.
            </p>
          </div>
        </div>

        {/* REGIONAL SELECTOR BAR */}
        <div className="pt-10 pb-8 flex flex-wrap gap-2 sm:gap-3">
          {GLOBAL_REGIONS.map((region) => {
            const isSelected = region.id === selectedRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#191919] text-white shadow-xs'
                    : 'bg-[#F4F3F3] hover:bg-[#EAEAEA] text-[#191919]'
                }`}
              >
                <span className={`text-[10px] font-mono ${isSelected ? 'text-white/60' : 'text-[#191919]/40'}`}>
                  {region.shortCode}
                </span>
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>

        {/* REGIONAL INTELLIGENCE CARD */}
        <div className="bg-[#F4F3F3] border border-[#E5E5E5] rounded-2xl p-6 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Col: Macro Outlook & Market Themes */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#191919]/40 font-mono">
                    REGIONAL MACROECONOMIC PROFILE
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#191919] font-medium border border-[#E5E5E5]">
                    Bias: {selectedRegion.capitalBias}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#191919] font-normal">
                  {selectedRegion.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#191919]/80 leading-relaxed font-light mt-2">
                  {selectedRegion.macroOutlook}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                  MACRO MARKET THEMES
                </span>
                <div className="space-y-2">
                  {selectedRegion.marketThemes.map((theme, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white border border-[#E5E5E5] rounded-lg text-xs text-[#191919]/85 flex items-start gap-2.5"
                    >
                      <span className="text-xs font-mono text-[#191919]/40 mt-0.5">•</span>
                      <span className="leading-relaxed">{theme}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Investment Themes, Risks & Research */}
            <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-[#E5E5E5] lg:pl-10">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                  PRIMARY ALLOCATION THEMES
                </span>
                <div className="space-y-2">
                  {selectedRegion.investmentThemes.map((inv, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-[#E5E5E5] rounded-lg text-xs text-[#191919]/90 font-medium flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#191919]/40">0{idx + 1}</span>
                        <span>{inv}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-[#191919]/40" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E5E5E5] space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#191919]/50 font-mono block">
                  IDENTIFIED STRUCTURAL RISKS
                </span>
                <ul className="space-y-1 text-xs text-[#191919]/75 font-light">
                  {selectedRegion.keyRisks.map((risk, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-700 font-mono">•</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-wider text-[#191919]/40 font-mono block mb-1">
                  CORRESPONDING RESEARCH TOPICS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedRegion.researchTopics.map((topic, idx) => (
                    <span key={idx} className="text-[11px] px-2.5 py-1 bg-white rounded-md border border-[#E5E5E5] text-[#191919]/70 font-mono">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
