import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSET_CLASSES, INVESTMENT_PRINCIPLES } from '../data/investments';
import { SERVICES } from '../data/services';

export const InvestmentPage: React.FC = () => {
  const service = SERVICES.find(s => s.id === 'investment-management') || SERVICES[0];
  const [selectedAssetId, setSelectedAssetId] = useState(ASSET_CLASSES[0].id);
  const selectedAsset = ASSET_CLASSES.find(a => a.id === selectedAssetId) || ASSET_CLASSES[0];

  return (
    <div className="pt-28 pb-24 bg-white px-6 sm:px-10 md:px-14 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* EDITORIAL HERO */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#191919]/50">
            <Link to="/" className="hover:text-[#191919]">Northbridge</Link>
            <span>/</span>
            <span>Investment Management</span>
          </div>

          <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block">
            CORE PRACTICE MANDATE
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#191919] font-normal leading-[1.1] tracking-tight">
            Investment Management
          </h1>

          <p className="text-base sm:text-lg text-[#191919]/70 leading-relaxed font-light">
            {service.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#191919] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors inline-flex items-center gap-2"
            >
              <span>Discuss Investment Mandate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <div className="text-xs font-mono text-[#191919]/50">
              Institutional SMAs • Discretionary & Advisory
            </div>
          </div>
        </div>

        {/* PRACTICE SCOPE & CAPABILITIES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-[#E5E5E5]">
          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
              MANDATE CAPABILITIES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
              Structured portfolio management
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

        {/* ALLOCATION MATRIX */}
        <div className="p-8 sm:p-12 bg-[#F4F3F3] rounded-2xl border border-[#E5E5E5] space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-mono block">
              MULTI-ASSET ALLOCATION FRAMEWORK
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
              Asset class factor underwriting
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {ASSET_CLASSES.map((asset) => (
              <button
                key={asset.id}
                onClick={() => setSelectedAssetId(asset.id)}
                className={`p-3 rounded-lg text-left transition-colors cursor-pointer ${
                  selectedAssetId === asset.id ? 'bg-[#191919] text-white' : 'bg-white text-[#191919] hover:bg-gray-100'
                }`}
              >
                <span className="text-[10px] font-mono block opacity-60">{asset.allocationPercent}% Weight</span>
                <span className="text-xs font-medium block mt-1">{asset.name}</span>
              </button>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E5E5E5] grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-[#191919]/40 font-mono block">INVESTMENT ROLE</span>
              <p className="font-medium text-sm text-[#191919]">{selectedAsset.investmentRole}</p>
              <p className="text-[#191919]/70 leading-relaxed font-light">{selectedAsset.researchApproach}</p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#191919]/40 font-mono block">CORE CHARACTERISTICS</span>
              {selectedAsset.characteristics.map((c, i) => (
                <div key={i} className="flex items-start gap-2 text-[#191919]/80">
                  <span className="text-xs text-[#191919]/40">•</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DELIVERABLES & GOVERNANCE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-[#E5E5E5]">
          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
              INSTITUTIONAL GOVERNANCE
            </span>
            <h2 className="font-serif text-2xl text-[#191919] font-normal">
              Fiduciary deliverables
            </h2>
          </div>

          <div className="md:col-span-8 space-y-2">
            {service.deliverables.map((del, idx) => (
              <div key={idx} className="p-4 bg-white border border-[#E5E5E5] rounded-xl flex items-center justify-between text-xs sm:text-sm">
                <span className="font-medium text-[#191919]">{del}</span>
                <span className="text-[10px] font-mono text-[#191919]/40">Active Mandate Standard</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
