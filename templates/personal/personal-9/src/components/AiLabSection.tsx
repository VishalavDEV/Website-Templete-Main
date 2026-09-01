import React from 'react';
import { ArrowRight, MessageSquare, Image, FileText, HeartHandshake, Settings2 } from 'lucide-react';
import { AiExperiment } from '../types';
import { AI_LAB_EXPERIMENTS } from '../data/portfolioData';

interface AiLabSectionProps {
  darkMode: boolean;
  onSelectExperiment: (exp: AiExperiment) => void;
}

export const AiLabSection: React.FC<AiLabSectionProps> = ({ darkMode, onSelectExperiment }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Image':
        return <Image className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-pink-600 dark:text-pink-400" />;
      case 'Settings2':
        return <Settings2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default:
        return <MessageSquare className="w-5 h-5 text-indigo-600" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return 'bg-purple-100 dark:bg-purple-950/70';
      case 'Image':
        return 'bg-blue-100 dark:bg-blue-950/70';
      case 'FileText':
        return 'bg-amber-100 dark:bg-amber-950/70';
      case 'HeartHandshake':
        return 'bg-pink-100 dark:bg-pink-950/70';
      case 'Settings2':
        return 'bg-teal-100 dark:bg-teal-950/70';
      default:
        return 'bg-purple-100 dark:bg-purple-950/70';
    }
  };

  const getBadgeStyle = (badge: 'LIVE' | 'EXPERIMENT' | 'PROTOTYPE') => {
    switch (badge) {
      case 'LIVE':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-900';
      case 'EXPERIMENT':
        return 'bg-amber-50 text-amber-600 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900';
      case 'PROTOTYPE':
        return 'bg-purple-50 text-purple-600 border-purple-200/80 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-900';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <section
      id="ai-lab"
      className={`py-16 scroll-mt-24 transition-colors ${
        darkMode ? 'bg-[#0B0F17] text-white' : 'bg-[#FAFCFF] text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Hero Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span
              id="ai-lab-eyebrow-tag"
              className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50"
            >
              AI LAB
            </span>

            <h2
              id="ai-lab-main-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3 text-gray-900 dark:text-white"
            >
              Where Experiments <br />
              Become Products
            </h2>

            <p
              className={`text-sm leading-relaxed mb-6 font-normal ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Explore interactive AI experiments and see intelligence in action.
            </p>

            <button
              id="ai-lab-explore-btn"
              onClick={() => onSelectExperiment(AI_LAB_EXPERIMENTS[0])}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md shadow-indigo-600/20 active:scale-95"
            >
              <span>Explore AI Lab</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right 5 Experiment Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {AI_LAB_EXPERIMENTS.map((exp) => (
              <div
                key={exp.id}
                id={`ai-lab-card-${exp.id}`}
                onClick={() => onSelectExperiment(exp)}
                className={`p-5 rounded-2xl border flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-md ${
                  darkMode
                    ? 'bg-[#111827] border-gray-800 hover:border-gray-700'
                    : 'bg-white border-gray-100 shadow-xs hover:border-gray-200'
                }`}
              >
                {/* Round Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${getIconBg(
                    exp.icon
                  )}`}
                >
                  {getIcon(exp.icon)}
                </div>

                {/* Title */}
                <h3 className="font-bold text-xs sm:text-sm tracking-tight mb-4 text-gray-900 dark:text-white leading-snug">
                  {exp.title}
                </h3>

                {/* Status Badge at bottom */}
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${getBadgeStyle(
                    exp.badge
                  )}`}
                >
                  {exp.badge}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
