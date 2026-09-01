import React from 'react';
import { RECOGNITION } from '../data/resumeData';
import { Award, ShieldCheck, Star } from 'lucide-react';

export default function Recognition() {
  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-700 uppercase tracking-widest bg-sky-100/70 border border-sky-200 px-3 py-1 rounded">
            <span>07 / RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-3 tracking-tight">
            Professional <span className="text-sky-800">Recognition</span>
          </h2>
          <p className="text-slate-500 font-mono-tech text-xs mt-2 uppercase tracking-wider">
            HONORS &amp; TECHNICAL EXCELLENCE AWARDS FROM FICTIONAL AEROSPACE ASSEMBLIES.
          </p>
        </div>

        {/* Clean Data-Driven List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {RECOGNITION.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 tech-corner-box group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 font-mono-tech font-bold flex items-center justify-center border border-sky-100 shrink-0 mt-1">
                  <Award className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono-tech font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs font-mono-tech text-slate-600 font-semibold">
                    {item.organization}
                  </p>
                  <p className="text-xs text-slate-600 font-sans mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="sm:text-right font-mono-tech text-[10px] text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200 shrink-0 self-start sm:self-center">
                VERIFIED HONORS
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Fictional Disclaimer Note */}
        <div className="mt-12 text-center text-xs font-mono-tech text-slate-500 italic">
          "All awards and organizations shown are fictional demonstration content."
        </div>

      </div>
    </section>
  );
}
