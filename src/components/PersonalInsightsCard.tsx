import React from 'react';
import { Moon, Sun, Droplets, Sparkles } from 'lucide-react';
import { PersonalInsight } from '../types';

interface PersonalInsightsCardProps {
  insights: PersonalInsight[];
  onSeeAll: () => void;
}

export const PersonalInsightsCard: React.FC<PersonalInsightsCardProps> = ({
  insights,
  onSeeAll,
}) => {
  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'moon':
        return <Moon className="w-4 h-4" style={{ color }} />;
      case 'sun':
        return <Sun className="w-4 h-4" style={{ color }} />;
      case 'droplets':
        return <Droplets className="w-4 h-4" style={{ color }} />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4" style={{ color }} />;
      default:
        return <Sparkles className="w-4 h-4" style={{ color }} />;
    }
  };

  return (
    <div
      id="personal-insights-card"
      className="bg-white rounded-2xl p-6 border border-[#EAEFE9] shadow-xs flex flex-col justify-between"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-bold text-[#111827]">Personal Insights</h3>
        <button
          id="see-all-insights-btn"
          type="button"
          onClick={onSeeAll}
          className="text-[12px] font-semibold text-[#10B981] hover:text-[#059669] transition-colors"
        >
          See All
        </button>
      </div>

      {/* Insight Items */}
      <div className="space-y-3.5">
        {insights.map((insight) => (
          <div
            key={insight.id}
            id={`insight-item-${insight.id}`}
            className="flex items-center gap-3.5 group cursor-default"
          >
            {/* Icon */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: insight.iconBg }}
            >
              {getIcon(insight.icon, insight.iconColor)}
            </div>

            {/* Text */}
            <p className="text-[12px] text-[#374151] font-medium leading-snug group-hover:text-[#111827] transition-colors">
              {insight.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
