import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FIRM_HISTORY, FIRM_PILLARS, LEADERSHIP_TEAM, GLOBAL_PRESENCE_HUBS } from '../data/team';

export const FirmPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-white px-6 sm:px-10 md:px-14 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* HERO */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#191919]/50">
            <Link to="/" className="hover:text-[#191919]">Northbridge</Link>
            <span>/</span>
            <span>Firm</span>
          </div>

          <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block">
            GOVERNANCE & STEWARDSHIP
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#191919] font-normal leading-[1.1] tracking-tight">
            Independent by design.
          </h1>

          <p className="text-base sm:text-lg text-[#191919]/70 leading-relaxed font-light">
            Founded with a singular commitment: provide unconflicted financial intelligence and capital strategy to institutions, corporations, and long-term asset owners worldwide.
          </p>
        </div>

        {/* PILLARS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#E5E5E5]">
          {FIRM_PILLARS.map((pillar) => (
            <div key={pillar.number} className="p-6 bg-[#F4F3F3] rounded-xl space-y-3">
              <span className="text-xs font-mono text-[#191919]/40">{pillar.number}</span>
              <h3 className="font-serif text-xl text-[#191919] font-normal">{pillar.title}</h3>
              <p className="text-xs text-[#191919]/70 leading-relaxed font-light">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* LEADERSHIP TEAM */}
        <div className="space-y-8 pt-12 border-t border-[#E5E5E5]">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
              PARTNERSHIP LEADERSHIP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191919] font-normal">
              Managing partners & committee chairs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP_TEAM.map((leader) => (
              <div key={leader.name} className="p-8 bg-[#F4F3F3] rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#191919]/50 uppercase">{leader.division}</span>
                  <h3 className="font-serif text-2xl text-[#191919] font-normal">{leader.name}</h3>
                  <div className="text-xs font-mono text-[#191919]/60">{leader.role} • {leader.experience}</div>
                  <p className="text-xs sm:text-sm text-[#191919]/80 leading-relaxed font-light pt-2">{leader.bio}</p>
                </div>
                <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap gap-2">
                  {leader.priorAffiliations.map((affil, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white rounded text-[11px] font-mono text-[#191919]/70">
                      {affil}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GLOBAL LOCATIONS */}
        <div className="space-y-6 pt-12 border-t border-[#E5E5E5]">
          <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
            GLOBAL LOCATIONS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GLOBAL_PRESENCE_HUBS.map((hub) => (
              <div key={hub.city} className="p-5 bg-[#F4F3F3] rounded-xl space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#191919]/40">{hub.country}</span>
                <h4 className="font-serif text-xl text-[#191919] font-normal">{hub.city}</h4>
                <p className="text-xs text-[#191919]/70">{hub.focus}</p>
                <span className="text-[11px] text-[#191919]/50 block">{hub.address}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
