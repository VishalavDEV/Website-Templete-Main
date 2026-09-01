import { useState } from 'react';
import { EXPERIENCES, EDUCATION_LIST } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Building } from 'lucide-react';

export default function JourneySection() {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  return (
    <section id="journey" className="py-20 relative overflow-hidden bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>EXPERIENCE &amp; FOUNDATION</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            MY JOURNEY
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
            The path that shaped my engineering background, from leading AI internships to academic computer science achievements.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All Milestones' },
              { id: 'experience', label: 'Work Experience' },
              { id: 'education', label: 'Education' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600 border-blue-300 shadow-2xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column or Timeline Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Work Experience */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className={`${activeTab === 'experience' ? 'lg:col-span-12 max-w-4xl mx-auto' : 'lg:col-span-7'} space-y-5`}>
              <div className="flex items-center gap-2.5 pb-1">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Industry Experience
                </h3>
              </div>

              <div className="space-y-4 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-200">
                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.id}
                    id={`experience-item-${exp.id}`}
                    className="relative pl-8 group"
                  >
                    {/* Node Dot */}
                    <div className="absolute left-1.5 top-5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600 group-hover:scale-125 transition-transform shadow-2xs" />

                    {/* Card Body */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-200 transition-all duration-200 shadow-2xs space-y-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                            {exp.type}
                          </span>
                          <h4 className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                            {exp.role}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5">
                            <Building className="w-3.5 h-3.5 text-slate-400" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-end text-right">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] text-slate-600 font-medium">
                            <Calendar className="w-3 h-3 text-blue-600" />
                            {exp.duration}
                          </span>
                          <span className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 text-xs text-slate-600 font-sans">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {exp.technologies.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Column: Education */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className={`${activeTab === 'education' ? 'lg:col-span-12 max-w-4xl mx-auto' : 'lg:col-span-5'} space-y-5`}>
              <div className="flex items-center gap-2.5 pb-1">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-2xs">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Academic Foundation
                </h3>
              </div>

              <div className="space-y-4">
                {EDUCATION_LIST.map((edu) => (
                  <div
                    key={edu.id}
                    id={`education-item-${edu.id}`}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-200 transition-all duration-200 shadow-2xs space-y-3"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block">
                          Undergraduate Degree
                        </span>
                        <h4 className="font-heading font-bold text-base text-slate-900">
                          {edu.degree}
                        </h4>
                        <div className="text-xs text-slate-600 mt-0.5 font-medium">
                          {edu.institution}
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] text-slate-600 font-medium">
                        <Calendar className="w-3 h-3 text-indigo-600" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Specialization:</span>
                      {edu.focus}
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] uppercase text-slate-500 font-bold block">
                        Core Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
