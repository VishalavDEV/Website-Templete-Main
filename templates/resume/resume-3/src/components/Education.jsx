import React from 'react';
import { EDUCATION } from '../data/resumeData';
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white relative border-b border-slate-200">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-700 uppercase tracking-widest bg-sky-100/70 border border-sky-200 px-3 py-1 rounded">
            <span>06 / EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-3 tracking-tight">
            Academic <span className="text-sky-800">Foundation</span>
          </h2>
          <p className="text-slate-500 font-mono-tech text-xs mt-2 uppercase tracking-wider">
            ACADEMIC DEGREE TIMELINE AT FICTIONAL RESEARCH & TECHNICAL INSTITUTIONS.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 relative tech-corner-box group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono-tech text-sky-700 font-bold">
                    <GraduationCap className="w-4 h-4" />
                    <span>0{idx + 1} // DEGREE PROFILE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-mono-tech text-slate-700 font-semibold mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="sm:text-right font-mono-tech text-xs space-y-1">
                  <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded text-slate-900 font-bold shadow-2xs">
                    {edu.period}
                  </span>
                  <div className="text-slate-500 text-[11px] flex items-center sm:justify-end gap-1">
                    <MapPin className="w-3 h-3 text-sky-600" />
                    {edu.location}
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3 font-sans">
                <div className="text-xs font-mono-tech text-slate-600">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">SPECIALIZATION: </span>
                  <span className="font-bold text-slate-800">{edu.focus}</span>
                </div>

                {edu.thesis && (
                  <div className="bg-white p-3 rounded border border-slate-200 text-xs font-mono-tech text-slate-700">
                    <span className="text-sky-700 font-bold block mb-0.5">THESIS DEFENSE:</span>
                    <span className="italic">"{edu.thesis}"</span>
                  </div>
                )}

                <div className="pt-2">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                    ACADEMIC HONORS & HIGHLIGHTS
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-slate-600">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
