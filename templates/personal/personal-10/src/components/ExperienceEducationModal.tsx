import React from 'react';
import { X, Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

interface ExperienceEducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'experience' | 'education';
}

export const ExperienceEducationModal: React.FC<ExperienceEducationModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'experience'
}) => {
  const [tab, setTab] = React.useState<'experience' | 'education'>(defaultTab);

  React.useEffect(() => {
    setTab(defaultTab);
  }, [defaultTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-800 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => setTab('experience')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium text-xs sm:text-sm transition-all cursor-pointer ${
              tab === 'experience'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Work Experience</span>
          </button>

          <button
            onClick={() => setTab('education')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium text-xs sm:text-sm transition-all cursor-pointer ${
              tab === 'education'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </button>
        </div>

        {/* Experience Tab Content */}
        {tab === 'experience' && (
          <div className="space-y-6">
            {experienceData.map((item) => (
              <div
                key={item.id}
                className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 dark:border-gray-800 last:border-l-0 pb-6"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black dark:bg-white ring-4 ring-gray-100 dark:ring-gray-800"></div>

                <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.role}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full w-fit">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-3">
                    <span>{item.company}</span>
                    <span>•</span>
                    <span className="text-gray-400 font-normal flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-full border border-gray-200/60 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab Content */}
        {tab === 'education' && (
          <div className="space-y-6">
            {educationData.map((item) => (
              <div
                key={item.id}
                className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 dark:border-gray-800 last:border-l-0 pb-6"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black dark:bg-white ring-4 ring-gray-100 dark:ring-gray-800"></div>

                <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.degree}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full w-fit">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {item.institution}
                  </div>

                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    {item.grade}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
