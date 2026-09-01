import React, { useState } from 'react';
import { FIRM_HISTORY, FIRM_PILLARS, LEADERSHIP_TEAM, GLOBAL_PRESENCE_HUBS } from '../../data/team';

export const FirmSection: React.FC = () => {
  const [selectedLeaderIndex, setSelectedLeaderIndex] = useState<number>(0);

  return (
    <section id="firm" className="py-24 sm:py-32 bg-white border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-14 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              09 / THE FIRM
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              INSTITUTIONAL FIDUCIARY
            </span>
          </div>

          <div className="md:col-span-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#191919] font-normal leading-tight tracking-tight">
              Independent by design.
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              Northbridge Capital operates as an independent fiduciary. We maintain no proprietary trading books, underwrite no retail product inventory, and align 100% with our clients' balance sheets.
            </p>
          </div>
        </div>

        {/* FIRM PILLARS */}
        <div className="py-14 border-b border-[#E5E5E5]">
          <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block mb-8">
            FOUNDATIONAL GOVERNANCE PILLARS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FIRM_PILLARS.map((pillar) => (
              <div key={pillar.number} className="p-6 bg-[#F4F3F3] rounded-xl space-y-3">
                <span className="text-xs font-mono text-[#191919]/40">{pillar.number}</span>
                <h3 className="font-serif text-xl text-[#191919] font-normal">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#191919]/70 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LEADERSHIP & GOVERNANCE */}
        <div className="py-14 border-b border-[#E5E5E5] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                PARTNERSHIP LEADERSHIP
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal mt-1">
                Executive committee & practice leaders
              </h3>
            </div>
            <span className="text-xs font-mono text-[#191919]/50">
              Average 21+ Years Institutional Experience
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Leaders list selector */}
            <div className="lg:col-span-5 space-y-2">
              {LEADERSHIP_TEAM.map((leader, idx) => {
                const isSelected = selectedLeaderIndex === idx;
                return (
                  <button
                    key={leader.name}
                    onClick={() => setSelectedLeaderIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#191919] text-white shadow-xs'
                        : 'bg-[#F4F3F3] hover:bg-[#EAEAEA] text-[#191919]'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-medium">{leader.name}</div>
                      <div className={`text-xs ${isSelected ? 'text-white/70' : 'text-[#191919]/60'}`}>
                        {leader.role}
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono ${isSelected ? 'text-white/50' : 'text-[#191919]/40'}`}>
                      {leader.experience}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Leader Detailed Biography */}
            <div className="lg:col-span-7 bg-[#F4F3F3] border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/40 font-mono">
                  {LEADERSHIP_TEAM[selectedLeaderIndex].division}
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
                  {LEADERSHIP_TEAM[selectedLeaderIndex].name}
                </h4>
                <div className="text-xs text-[#191919]/70 font-mono">
                  {LEADERSHIP_TEAM[selectedLeaderIndex].role} • {LEADERSHIP_TEAM[selectedLeaderIndex].experience} in Capital Markets
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#191919]/80 leading-relaxed font-light">
                {LEADERSHIP_TEAM[selectedLeaderIndex].bio}
              </p>

              <div className="pt-4 border-t border-[#E5E5E5]">
                <span className="text-[10px] uppercase tracking-wider text-[#191919]/50 font-mono block mb-2">
                  PRIOR INSTITUTIONAL AFFILIATIONS
                </span>
                <div className="flex flex-wrap gap-2">
                  {LEADERSHIP_TEAM[selectedLeaderIndex].priorAffiliations.map((affil, aIdx) => (
                    <span key={aIdx} className="px-3 py-1 bg-white rounded-md text-xs font-mono text-[#191919]/80 border border-[#E5E5E5]">
                      {affil}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GLOBAL PRESENCE HUBS */}
        <div className="pt-14 space-y-6">
          <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
            GLOBAL INSTITUTIONAL REACH
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GLOBAL_PRESENCE_HUBS.map((hub) => (
              <div key={hub.city} className="p-5 bg-[#F4F3F3] rounded-xl space-y-2">
                <span className="text-xs font-mono text-[#191919]/40 uppercase tracking-wider block">
                  {hub.country}
                </span>
                <h4 className="font-serif text-xl text-[#191919] font-normal">
                  {hub.city}
                </h4>
                <p className="text-xs text-[#191919]/70 font-medium">
                  {hub.focus}
                </p>
                <span className="text-[11px] text-[#191919]/50 block font-light">
                  {hub.address}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
