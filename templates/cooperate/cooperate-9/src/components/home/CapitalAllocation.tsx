import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSET_CLASSES, AssetClass } from '../../data/investments';

export const CapitalAllocation: React.FC = () => {
  const [selectedAssetId, setSelectedAssetId] = useState<string>(ASSET_CLASSES[0].id);

  const selectedAsset = ASSET_CLASSES.find((a) => a.id === selectedAssetId) || ASSET_CLASSES[0];

  return (
    <section id="allocation" className="py-24 sm:py-32 bg-[#F4F3F3] border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-14 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              02 / ALLOCATION
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              STRUCTURAL PORTFOLIO MATRIX
            </span>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191919] font-normal leading-tight tracking-tight">
              Capital allocation architecture.
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              We allocate across liquid and private asset classes with disciplined factor diversification, unconstrained global underwriting, and strict liquidity matching.
            </p>
          </div>
        </div>

        {/* VISUAL ALLOCATION STRIP (Grayscale / Restrained) */}
        <div className="pt-10 pb-12">
          <div className="flex flex-col sm:flex-row items-stretch gap-1.5 p-1.5 bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-xs">
            {ASSET_CLASSES.map((asset) => {
              const isSelected = asset.id === selectedAssetId;
              return (
                <button
                  key={asset.id}
                  onClick={() => setSelectedAssetId(asset.id)}
                  style={{ flex: asset.allocationPercent }}
                  className={`py-4 px-3 sm:px-4 text-left transition-all duration-200 cursor-pointer rounded-lg relative ${
                    isSelected
                      ? 'bg-[#191919] text-white shadow-sm'
                      : 'bg-[#F4F3F3] hover:bg-[#EAEAEA] text-[#191919]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium truncate">{asset.name}</span>
                    <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-white' : 'text-[#191919]/60'}`}>
                      {asset.allocationPercent}%
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Compliance Disclaimer Notice */}
          <div className="mt-3 text-right">
            <span className="text-[11px] font-mono text-[#191919]/50 tracking-wider">
              * Illustrative allocation — not investment advice.
            </span>
          </div>
        </div>

        {/* SELECTED ASSET CLASS DEEP DIVE */}
        <div className="bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-10 md:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Col: Key Profile */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/40 font-mono">
                  TARGET ASSET CLASS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
                  {selectedAsset.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-[#F4F3F3] rounded text-xs font-mono text-[#191919]/70">
                  Target Weight: {selectedAsset.allocationPercent}% Portfolio
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm divide-y divide-[#E5E5E5]">
                <div className="pt-2">
                  <span className="text-[#191919]/50 block text-[10px] uppercase tracking-wider mb-1 font-mono">
                    INVESTMENT ROLE
                  </span>
                  <span className="text-[#191919] font-medium leading-relaxed">
                    {selectedAsset.investmentRole}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-[#191919]/50 block text-[10px] uppercase tracking-wider mb-1 font-mono">
                    RISK PROFILE
                  </span>
                  <span className="text-[#191919]/80">
                    {selectedAsset.riskProfile}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-[#191919]/50 block text-[10px] uppercase tracking-wider mb-1 font-mono">
                    TYPICAL HORIZON
                  </span>
                  <span className="text-[#191919]/80 font-mono">
                    {selectedAsset.typicalHorizon}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-[#191919]/50 block text-[10px] uppercase tracking-wider mb-1 font-mono">
                    BENCHMARK CONCEPT
                  </span>
                  <span className="text-[#191919]/80 font-mono">
                    {selectedAsset.benchmarkConcept}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Research Approach & Key Underwriting Traits */}
            <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-[#E5E5E5] lg:pl-10">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                  RESEARCH & UNDERWRITING APPROACH
                </span>
                <p className="text-sm sm:text-base text-[#191919]/80 leading-relaxed font-light">
                  {selectedAsset.researchApproach}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-medium block">
                  CORE ASSET CHARACTERISTICS
                </span>
                <div className="space-y-2.5">
                  {selectedAsset.characteristics.map((char, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#F4F3F3] rounded-lg text-xs sm:text-sm text-[#191919]/85 flex items-start gap-3"
                    >
                      <span className="text-xs font-mono text-[#191919]/40 mt-0.5">•</span>
                      <span className="leading-relaxed">{char}</span>
                    </div>
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
