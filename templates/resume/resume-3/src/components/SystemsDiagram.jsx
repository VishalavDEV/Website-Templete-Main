import React, { useState } from 'react';
import { SYSTEM_CATEGORIES } from '../data/resumeData';
import { Cpu, Network, ShieldCheck, Zap, Sliders, CheckCircle2 } from 'lucide-react';

export default function SystemsDiagram() {
  const [activeBranch, setActiveBranch] = useState(SYSTEM_CATEGORIES[0].id);

  return (
    <section id="systems" className="py-24 bg-white relative border-b border-slate-200">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-700 uppercase tracking-widest bg-sky-100/70 border border-sky-200 px-3 py-1 rounded">
            <span>04 / SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-3 tracking-tight">
            Technical <span className="text-sky-800">Capabilities</span>
          </h2>
          <p className="text-slate-500 font-mono-tech text-xs mt-2 uppercase tracking-wider">
            INTERACTIVE ARCHITECTURE BRANCH DIAGRAM SHOWCASING CORE ENGINEERING COMPETENCIES.
          </p>
        </div>

        {/* Systems Architecture Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Category Selection Navigation Nodes */}
          <div className="lg:col-span-5 space-y-3">
            {SYSTEM_CATEGORIES.map((cat, idx) => {
              const isSelected = activeBranch === cat.id;
              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveBranch(cat.id)}
                  onClick={() => setActiveBranch(cat.id)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group tech-corner-box ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02]"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-400 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`w-7 h-7 rounded font-mono-tech text-xs font-bold flex items-center justify-center ${
                      isSelected ? "bg-sky-500 text-slate-950" : "bg-slate-200 text-slate-700 group-hover:bg-sky-100 group-hover:text-sky-700"
                    }`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className={`font-heading font-bold text-sm uppercase tracking-tight ${
                        isSelected ? "text-white" : "text-slate-900"
                      }`}>
                        {cat.title}
                      </h3>
                      <p className={`text-xs mt-0.5 line-clamp-1 ${
                        isSelected ? "text-slate-300" : "text-slate-500"
                      }`}>
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className={`w-2.5 h-2.5 rounded-full transition-all ${
                    isSelected ? "bg-sky-400 shadow-[0_0_8px_#38bdf8] scale-125" : "bg-slate-300 group-hover:bg-sky-400"
                  }`} />
                </div>
              );
            })}
          </div>

          {/* RIGHT: Detailed Competency Branch View Panel */}
          <div className="lg:col-span-7 bg-slate-900 text-white p-8 rounded-xl border border-slate-800 shadow-2xl relative overflow-hidden tech-corner-box min-h-[440px] flex flex-col justify-between">
            
            {/* Background SVG vector lines decoration */}
            <svg viewBox="0 0 500 400" className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
              <path d="M50 50 L450 350 M50 350 L450 50 M250 0 V400 M0 200 H500" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="250" cy="200" r="120" stroke="#38bdf8" strokeWidth="1" fill="none" />
            </svg>

            {/* Active Category Header */}
            {(() => {
              const current = SYSTEM_CATEGORIES.find(c => c.id === activeBranch) || SYSTEM_CATEGORIES[0];
              return (
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-5 h-5 text-sky-400" />
                      <span className="text-xs font-mono-tech text-sky-400 uppercase tracking-widest font-bold">
                        SYSTEM BRANCH // {current.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono-tech text-slate-500 uppercase">
                      CENTER ARCHITECTURE INTEGRATED
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {current.description}
                  </p>

                  {/* Competencies List */}
                  <div className="space-y-4 pt-2">
                    {current.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/80 p-4 rounded-lg border border-slate-800 hover:border-sky-500/50 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                          <h4 className="font-heading font-bold text-slate-100 text-sm uppercase">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-slate-400 text-xs font-mono-tech mt-1.5 pl-6 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Footer note */}
                  <div className="pt-4 text-right text-[10px] font-mono-tech text-slate-500">
                    STATUS: ALL BRANCH CAPABILITIES VERIFIED &amp; FLIGHT QUALIFIED
                  </div>
                </div>
              );
            })()}

          </div>

        </div>

      </div>
    </section>
  );
}
