import React from 'react';
import { Layers, Shield, Cpu, Network, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function Profile() {
  return (
    <section id="profile" className="py-24 bg-slate-50 relative border-b border-slate-200">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-700 uppercase tracking-widest bg-sky-100/70 border border-sky-200 px-3 py-1 rounded">
            <span>01 / PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-3 tracking-tight">
            Engineering Beyond <br className="hidden sm:inline" />
            <span className="text-sky-800">the Individual System</span>
          </h2>
        </div>

        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Large Pull Quote / Engineering Philosophy Highlight */}
          <div className="lg:col-span-5 bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative tech-corner-box">
            <div className="text-sky-600 font-mono-tech text-4xl mb-4 font-bold">“</div>
            <blockquote className="text-xl sm:text-2xl font-heading font-semibold text-slate-900 leading-snug tracking-tight">
              Every successful mission begins with systems designed to work together.
            </blockquote>
            <p className="mt-4 text-xs font-mono-tech text-slate-500 uppercase tracking-widest">
              — DR. ARIN SOLBERG // ARCHITECTURAL PRINCIPLE
            </p>

            {/* Sub-card Disciplines Grid */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="text-xs font-mono-tech text-slate-400 uppercase tracking-widest mb-4">
                PRIMARY DISCIPLINES
              </h4>
              <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs">
                {PERSONAL_INFO.disciplines.map((discipline, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-800"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span className="font-medium text-[11px] truncate">{discipline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Professional Biography & Career Metrics Panel */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
              {PERSONAL_INFO.bioParagraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed text-sm sm:text-base font-sans">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Career Metrics Data Panel */}
            <div className="bg-slate-900 text-white p-8 rounded-xl border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-mono-tech text-6xl text-sky-400 font-bold select-none">
                METRICS
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono-tech text-sky-400 uppercase tracking-widest mb-6">
                <Network className="w-4 h-4" />
                <span>CAREER METRICS SUMMARY (FICTIONAL DEMO DATA)</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {PERSONAL_INFO.metrics.map((metric, idx) => (
                  <div key={idx} className="border-l-2 border-sky-500 pl-4 py-1">
                    <div className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                      {metric.value}
                      <span className="text-sky-400 font-mono-tech text-2xl">{metric.suffix}</span>
                    </div>
                    <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
