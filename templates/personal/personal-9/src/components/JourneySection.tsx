import React from 'react';
import { Sparkles, Hammer, Eye, BookOpen, Target } from 'lucide-react';
import { EXPERIENCES, EDUCATION_DATA, CURRENTLY_ITEMS } from '../data/portfolioData';

interface JourneySectionProps {
  darkMode: boolean;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ darkMode }) => {
  const getCurrentlyIcon = (label: string) => {
    switch (label) {
      case 'Learning':
        return <Sparkles className="w-4 h-4 text-indigo-500" />;
      case 'Building':
        return <Hammer className="w-4 h-4 text-emerald-500" />;
      case 'Exploring':
        return <Eye className="w-4 h-4 text-purple-500" />;
      case 'Reading':
        return <BookOpen className="w-4 h-4 text-blue-500" />;
      case 'Goal':
        return <Target className="w-4 h-4 text-teal-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <section
      id="experience"
      className={`py-16 scroll-mt-24 transition-colors ${
        darkMode ? 'bg-[#0B0F17] text-white' : 'bg-[#FAFCFF] text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Column 1: Experience / Journey Timeline (4 cols) */}
          <div
            id="experience-column-card"
            className={`lg:col-span-4 p-6 sm:p-7 rounded-2xl border flex flex-col justify-between text-left shadow-xs transition-all ${
              darkMode ? 'bg-[#111827] border-gray-800 text-white' : 'bg-white border-gray-100 text-gray-900'
            }`}
          >
            <div>
              <span
                className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50"
              >
                EXPERIENCE
              </span>

              <h3 className="text-2xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white">
                My Journey
              </h3>

              {/* Timeline */}
              <div className="relative pl-5 space-y-6 before:absolute before:left-1.5 before:top-2.5 before:bottom-2.5 before:w-0.5 before:bg-indigo-100 dark:before:bg-gray-800">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-600 bg-white dark:bg-gray-900" />

                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold text-gray-900 dark:text-white font-mono">
                        {exp.year}
                      </span>
                      <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        {exp.role}
                      </h4>
                    </div>

                    <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-1">
                      {exp.company}
                    </p>

                    <p
                      className={`text-xs leading-relaxed ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Education & Academic Architecture (4 cols) */}
          <div
            id="education-column-card"
            className={`lg:col-span-4 p-6 sm:p-7 rounded-2xl border flex flex-col justify-between text-left relative overflow-hidden shadow-xs transition-all ${
              darkMode ? 'bg-[#111827] border-gray-800 text-white' : 'bg-white border-gray-100 text-gray-900'
            }`}
          >
            <div>
              <span
                className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50"
              >
                EDUCATION
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1 text-gray-900 dark:text-white">
                {EDUCATION_DATA.degree}
              </h3>

              <div className="flex items-center gap-2 mb-1 text-xs font-mono text-gray-400">
                <span>{EDUCATION_DATA.period}</span>
              </div>

              <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-3">
                {EDUCATION_DATA.institution}
              </p>

              {/* CGPA Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-4">
                <span>{EDUCATION_DATA.cgpa}</span>
              </div>

              {/* Coursework */}
              <div className="mb-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION_DATA.coursework.map((course) => (
                    <span
                      key={course}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border ${
                        darkMode
                          ? 'bg-gray-800/60 border-gray-700 text-gray-300'
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* University Architectural Illustration */}
            <div className="relative pt-4 flex justify-center opacity-70">
              <svg
                width="220"
                height="60"
                viewBox="0 0 240 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-indigo-400/80 dark:stroke-indigo-400/40"
              >
                <path d="M70 30 L120 10 L170 30 Z" strokeWidth="1.5" />
                <line x1="70" y1="30" x2="170" y2="30" strokeWidth="1.5" />
                <line x1="80" y1="30" x2="80" y2="65" strokeWidth="1.5" />
                <line x1="100" y1="30" x2="100" y2="65" strokeWidth="1.5" />
                <line x1="120" y1="30" x2="120" y2="65" strokeWidth="1.5" />
                <line x1="140" y1="30" x2="140" y2="65" strokeWidth="1.5" />
                <line x1="160" y1="30" x2="160" y2="65" strokeWidth="1.5" />
                <line x1="50" y1="65" x2="190" y2="65" strokeWidth="2" />
                <rect x="25" y="38" width="45" height="27" strokeWidth="1.5" />
                <rect x="170" y="38" width="45" height="27" strokeWidth="1.5" />
                <circle cx="120" cy="22" r="4" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Column 3: Currently & Lab Feed with Photo (4 cols) */}
          <div
            id="currently-column-card"
            className={`lg:col-span-4 p-6 sm:p-7 rounded-2xl border flex flex-col justify-between text-left relative overflow-hidden shadow-xs transition-all ${
              darkMode ? 'bg-[#111827] border-gray-800 text-white' : 'bg-white border-gray-100 text-gray-900'
            }`}
          >
            <div>
              <span
                className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50"
              >
                CURRENTLY
              </span>

              {/* Items List */}
              <div className="space-y-3.5 mb-5 mt-3">
                {CURRENTLY_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg shrink-0 bg-indigo-50 dark:bg-indigo-950/60 mt-0.5">
                      {getCurrentlyIcon(item.label)}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-gray-900 dark:text-gray-200">
                        {item.label}
                      </span>
                      <span
                        className={`text-xs leading-snug ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] mt-2 border border-gray-100 dark:border-gray-800 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                alt="Arjun Mehta Coding"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-white text-[11px] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Coding in Bengaluru, IN</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
