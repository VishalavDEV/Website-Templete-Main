import React, { useState } from 'react';
import { EXPERIENCE } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Cpu, CheckCircle } from 'lucide-react';

export default function ExperienceModules() {
  const [expandedId, setExpandedId] = useState(EXPERIENCE[0].id);

  return (
    <section id="experience" className="py-24 bg-slate-50 relative border-b border-slate-200">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-700 uppercase tracking-widest bg-sky-100/70 border border-sky-200 px-3 py-1 rounded">
            <span>03 / EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-3 tracking-tight">
            Engineering <span className="text-sky-800">Career</span>
          </h2>
          <p className="text-slate-500 font-mono-tech text-xs mt-2 uppercase tracking-wider">
            CHRONOLOGICAL CAREER PROGRESSION ACROSS FICTIONAL AEROSPACE ORGANIZATIONS.
          </p>
        </div>

        {/* Vertical Connected System Block Architecture */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-sky-600 via-sky-400 to-slate-300 pointer-events-none" />

          <div className="space-y-8">
            {EXPERIENCE.map((item, index) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="relative pl-12 sm:pl-20 group transition-all"
                >
                  {/* Connected Node Dot */}
                  <div
                    className={`absolute left-4 sm:left-8 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      isExpanded
                        ? "bg-sky-600 border-white shadow-[0_0_12px_rgba(2,132,199,0.6)] scale-125 z-10"
                        : "bg-white border-slate-400 group-hover:border-sky-500"
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${isExpanded ? "bg-white" : "bg-sky-600"}`} />
                  </div>

                  {/* System Block Module */}
                  <div
                    className={`bg-white border rounded-xl p-6 sm:p-8 transition-all duration-300 tech-corner-box shadow-xs hover:shadow-md cursor-pointer ${
                      isExpanded ? "border-sky-500 shadow-md ring-1 ring-sky-200" : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  >
                    {/* Header bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono-tech font-bold text-sky-700 uppercase tracking-widest bg-sky-50 px-2.5 py-0.5 rounded border border-sky-100">
                            {item.period}
                          </span>
                          <span className="text-xs font-mono-tech text-slate-400 uppercase">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mt-2">
                          {item.role}
                        </h3>
                        <div className="text-sm font-mono-tech text-slate-600 font-semibold mt-0.5 flex items-center gap-2">
                          <span>{item.company}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-500 font-normal flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-sky-600" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <button
                        className="self-end sm:self-center p-2 text-slate-400 hover:text-sky-600 transition-colors"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-slate-600 text-sm leading-relaxed font-sans">
                      {item.summary}
                    </p>

                    {/* Expanded Content Section */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-slate-200 space-y-5 animate-fadeIn">
                        <div>
                          <h4 className="text-xs font-mono-tech text-sky-700 uppercase tracking-widest mb-3 flex items-center gap-1.5 font-bold">
                            <Cpu className="w-4 h-4" />
                            RESPONSIBILITIES & ENGINEERING DELIVERABLES
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-sans">
                            {item.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start space-x-2.5">
                                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skill Badges */}
                        <div>
                          <h4 className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest mb-2">
                            SYSTEM FOCUS AREAS
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2.5 py-1 bg-slate-100 text-slate-700 font-mono-tech text-xs rounded border border-slate-200 font-medium"
                              >
                                #{skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
