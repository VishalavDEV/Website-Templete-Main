import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/resumeData';
import { ShieldCheck, Compass, Lightbulb } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-24 bg-slate-100/80 relative border-b border-slate-200">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Central Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-800 uppercase tracking-widest bg-white border border-slate-300 px-3.5 py-1 rounded shadow-2xs mb-6">
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
            "Complex systems succeed when every small decision understands the larger mission."
          </h2>
          <p className="mt-4 text-xs font-mono-tech text-slate-500 uppercase tracking-widest">
            — DR. ARIN SOLBERG // ARCHITECTURAL GUIDING PRINCIPLES
          </p>
        </div>

        {/* Three Principles — Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY_PRINCIPLES.map((principle, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-300 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between tech-corner-box group"
            >
              <div>
                {/* Large Technical Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-mono-tech font-bold text-sky-600/30 group-hover:text-sky-600 transition-colors">
                    {principle.number}
                  </span>
                  <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-700 font-mono-tech text-xs font-bold">
                    P{idx + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-slate-900 tracking-tight">
                  {principle.title}
                </h3>
                
                <p className="text-sm font-mono-tech text-sky-800 font-semibold mt-1 uppercase tracking-wider">
                  "{principle.subtitle}"
                </p>

                <p className="mt-4 text-slate-600 text-sm leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
                <span>SYSTEM STANDARD</span>
                <span className="text-sky-700 font-bold uppercase">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
