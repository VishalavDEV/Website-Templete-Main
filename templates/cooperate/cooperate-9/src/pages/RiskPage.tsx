import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { RISK_CATEGORIES } from '../data/risks';

export const RiskPage: React.FC = () => {
  const service = SERVICES.find(s => s.id === 'risk-advisory') || SERVICES[4];

  return (
    <div className="pt-28 pb-24 bg-white px-6 sm:px-10 md:px-14 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* EDITORIAL HERO */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#191919]/50">
            <Link to="/" className="hover:text-[#191919]">Northbridge</Link>
            <span>/</span>
            <span>Risk Advisory</span>
          </div>

          <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block">
            STRESS TESTING & CAPITAL RESILIENCE
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#191919] font-normal leading-[1.1] tracking-tight">
            Risk Advisory
          </h1>

          <p className="text-base sm:text-lg text-[#191919]/70 leading-relaxed font-light">
            {service.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#191919] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors inline-flex items-center gap-2"
            >
              <span>Request Balance Sheet Stress Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="text-xs font-mono text-[#191919]/50">
              Deterministic & Stochastic Modeling • Tail Risk Hedging
            </div>
          </div>
        </div>

        {/* 6 RISK DISCIPLINES */}
        <div className="space-y-6 pt-12 border-t border-[#E5E5E5]">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-mono block">
              ENTERPRISE RISK TAXONOMY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
              Six pillars of fiduciary risk isolation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RISK_CATEGORIES.map((risk, idx) => (
              <div key={risk.id} className="p-6 bg-[#F4F3F3] rounded-xl space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-[#191919]/40">0{idx + 1}</span>
                    <span className="text-[10px] uppercase bg-white px-2 py-0.5 rounded border border-[#E5E5E5] text-[#191919]">
                      {risk.severityLevel}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#191919] font-normal">{risk.category}</h3>
                  <p className="text-xs text-[#191919]/70 leading-relaxed font-light">{risk.definition}</p>
                </div>
                <div className="pt-3 border-t border-[#E5E5E5] text-[11px] font-mono text-[#191919]/60">
                  Impact: {risk.potentialImpact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
