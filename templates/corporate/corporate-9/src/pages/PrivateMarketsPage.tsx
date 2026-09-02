import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';

export const PrivateMarketsPage: React.FC = () => {
  const service = SERVICES.find(s => s.id === 'private-markets') || SERVICES[2];

  return (
    <div className="pt-28 pb-24 bg-white px-6 sm:px-10 md:px-14 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* EDITORIAL HERO */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#191919]/50">
            <Link to="/" className="hover:text-[#191919]">Northbridge</Link>
            <span>/</span>
            <span>Private Markets</span>
          </div>

          <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block">
            DIRECT CAPITAL & CO-INVESTMENT
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#191919] font-normal leading-[1.1] tracking-tight">
            Private Markets
          </h1>

          <p className="text-base sm:text-lg text-[#191919]/70 leading-relaxed font-light">
            {service.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#191919] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Direct Co-Investments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="text-xs font-mono text-[#191919]/50">
              Direct Equity • Senior Private Debt • Core Infrastructure
            </div>
          </div>
        </div>

        {/* CORE CAPABILITIES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-[#E5E5E5]">
          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
              PRIVATE CAPITAL PILLARS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
              Direct origination & underwriting
            </h2>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="p-5 bg-[#F4F3F3] rounded-xl space-y-2">
                <span className="text-[10px] font-mono text-[#191919]/40">0{idx + 1}</span>
                <h3 className="font-medium text-sm text-[#191919]">{cap}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* DELIVERABLES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-[#E5E5E5]">
          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
              SPONSOR & LP GOVERNANCE
            </span>
            <h2 className="font-serif text-2xl text-[#191919] font-normal">
              Direct monitoring reports
            </h2>
          </div>

          <div className="md:col-span-8 space-y-3">
            {service.deliverables.map((del, idx) => (
              <div key={idx} className="p-4 bg-white border border-[#E5E5E5] rounded-xl flex items-center justify-between text-xs sm:text-sm">
                <span className="font-medium text-[#191919]">{del}</span>
                <span className="text-[10px] font-mono text-[#191919]/40">SPV Architecture</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
