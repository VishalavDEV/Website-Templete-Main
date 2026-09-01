import React from 'react';
import { ArrowRight, Trophy, Medal, Star } from 'lucide-react';
import { AchievementItem } from '../types';
import { ACHIEVEMENTS } from '../data/portfolioData';

interface AchievementsSectionProps {
  darkMode: boolean;
  onOpenAchievementsModal: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  darkMode,
  onOpenAchievementsModal,
}) => {
  const renderBadgeIcon = (type: AchievementItem['badgeType']) => {
    switch (type) {
      case 'trophy':
        return (
          <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/60 flex items-center justify-center text-amber-500 mb-3">
            <Trophy className="w-6 h-6" />
          </div>
        );
      case 'medal':
        return (
          <div className="w-11 h-11 rounded-2xl bg-rose-50 dark:bg-rose-950/60 flex items-center justify-center text-rose-500 mb-3">
            <Medal className="w-6 h-6" />
          </div>
        );
      case 'star':
        return (
          <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/60 flex items-center justify-center text-amber-500 mb-3">
            <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
          </div>
        );
      case 'google':
        return (
          <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
          </div>
        );
      case 'microsoft':
        return (
          <div className="w-11 h-11 rounded-2xl bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center mb-3">
            <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
              <div className="bg-[#F25022] rounded-[1px]" />
              <div className="bg-[#7FBA00] rounded-[1px]" />
              <div className="bg-[#00A4EF] rounded-[1px]" />
              <div className="bg-[#FFB900] rounded-[1px]" />
            </div>
          </div>
        );
      case 'tensorflow':
        return (
          <div className="w-11 h-11 rounded-2xl bg-orange-50 dark:bg-orange-950/60 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L3 7.5V17L7.5 19.5V10.5L12 8L16.5 10.5V19.5L21 17V7.5L12 2Z"
                fill="#FF6F00"
              />
              <path
                d="M12 10.5L7.5 13V17L12 19.5L16.5 17V13L12 10.5Z"
                fill="#FFA000"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="achievements"
      className={`py-16 scroll-mt-24 transition-colors ${
        darkMode ? 'bg-[#0B0F17] text-white' : 'bg-[#FAFCFF] text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col items-start">
            <span
              id="achievements-eyebrow-tag"
              className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50"
            >
              ACHIEVEMENT VAULT
            </span>
          </div>

          <button
            onClick={onOpenAchievementsModal}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors cursor-pointer group"
          >
            <span>View All Achievements</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className={`p-5 rounded-2xl border flex flex-col items-start text-left transition-all duration-200 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-[#111827] border-gray-800 hover:border-gray-700'
                  : 'bg-white border-gray-100 hover:border-gray-200 shadow-xs'
              }`}
            >
              {renderBadgeIcon(item.badgeType)}

              <div>
                <h4 className="font-bold text-sm tracking-tight mb-1 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p
                  className={`text-xs leading-snug line-clamp-2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
