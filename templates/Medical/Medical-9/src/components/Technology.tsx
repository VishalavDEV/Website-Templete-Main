import React, { useState } from 'react';
import { TECH_DIAGNOSTICS } from '../data/mockData';
import { Cpu, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const Technology: React.FC = () => {
  const [selectedTechId, setSelectedTechId] = useState<string>(TECH_DIAGNOSTICS[0].id);

  const activeTech = TECH_DIAGNOSTICS.find((t) => t.id === selectedTechId) || TECH_DIAGNOSTICS[0];

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#252326] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#E8B6A5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans block mb-2">
            Advanced Clinical Technology
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#542F3B]">
            Precision where <br />
            <span className="italic font-normal text-[#C97873]">it matters.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#70696C] font-sans font-normal mt-3 leading-relaxed">
            We integrate high-definition micro-diagnostic sensors, non-mydriatic retinal OCT cameras, and point-of-care analyzers to detect organ stress before symptoms emerge.
          </p>
        </div>

        {/* Diagnostic Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#E5DDD8] overflow-x-auto">
          {TECH_DIAGNOSTICS.map((tech) => {
            const isSelected = tech.id === selectedTechId;
            return (
              <button
                key={tech.id}
                onClick={() => setSelectedTechId(tech.id)}
                className={`px-5 py-3 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 shrink-0 focus-visible:ring-2 focus-visible:ring-[#C97873] ${
                  isSelected
                    ? 'bg-[#542F3B] text-white shadow-sm'
                    : 'bg-white text-[#542F3B] border border-[#E5DDD8] hover:bg-[#F2ECE9]'
                }`}
              >
                <Cpu className="w-3.5 h-3.5 text-[#C97873]" />
                <span>{tech.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Tech Detail Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E5DDD8] shadow-sm">
          
          {/* Left Detail Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-[#FAF0EE] text-[#C97873] text-xs font-bold border border-[#C97873]/20">
              {activeTech.category}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#542F3B]">
              {activeTech.title}
            </h3>

            <p className="text-sm sm:text-base text-[#70696C] font-sans font-normal leading-relaxed">
              {activeTech.fullDesc}
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {activeTech.benefits.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#252326] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C97873] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Accuracy Metric Badge */}
            <div className="p-4 rounded-xl bg-[#F2ECE9] border border-[#E5DDD8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C97873]" />
                <span className="text-xs font-bold text-[#542F3B]">Diagnostic Calibration</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#C97873]">{activeTech.accuracy}</span>
            </div>

          </div>

          {/* Right Image Showcase with floating badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E5DDD8] shadow-sm">
              <img
                src={activeTech.image}
                alt={activeTech.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252326]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-lg text-[#542F3B] text-xs font-bold flex items-center justify-between border border-[#E5DDD8]">
                <span>Gluvia Diagnostic Suite</span>
                <span className="text-[#C97873] font-mono text-[11px]">ACTIVE LAB</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
