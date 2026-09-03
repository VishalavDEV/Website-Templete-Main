import React from 'react';
import { Check, Circle } from 'lucide-react';
import { PlanItem } from '../types';

interface TodaysPlanCardProps {
  plans: PlanItem[];
  onTogglePlan: (id: string) => void;
  onSelectPlan: (plan: PlanItem) => void;
  onSeeAll: () => void;
}

export const TodaysPlanCard: React.FC<TodaysPlanCardProps> = ({
  plans,
  onTogglePlan,
  onSelectPlan,
  onSeeAll,
}) => {
  return (
    <div
      id="todays-plan-card"
      className="bg-white rounded-2xl p-6 border border-[#EAEFE9] shadow-xs flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[14px] font-bold text-[#111827]">Today's Plan</h3>
          <button
            id="see-all-plan-btn"
            type="button"
            onClick={onSeeAll}
            className="text-[12px] font-semibold text-[#10B981] hover:text-[#059669] transition-colors"
          >
            See All
          </button>
        </div>

        {/* Schedule list */}
        <div className="space-y-3.5">
          {plans.map((item) => (
            <div
              key={item.id}
              id={`plan-item-${item.id}`}
              className="flex items-center justify-between py-1 group"
            >
              {/* Left: Time Badge + Title & Subtitle */}
              <div
                className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 cursor-pointer flex-1 min-w-0 pr-2"
                onClick={() => onSelectPlan(item)}
              >
                {/* Time pill badge */}
                <div
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-semibold tracking-tight shrink-0 border"
                  style={{
                    color: item.badgeColor,
                    backgroundColor: item.badgeBg,
                    borderColor: `${item.badgeColor}25`,
                  }}
                >
                  {item.time}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-[12px] sm:text-[13px] font-semibold text-[#111827] group-hover:text-[#10B981] transition-colors truncate">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#6B7280] truncate">
                    {item.subtitle}
                  </div>
                </div>
              </div>

              {/* Right: Thumbnail + Completion Check */}
              <div className="flex items-center gap-2.5 shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover ring-1 ring-black/5 cursor-pointer shrink-0"
                  onClick={() => onSelectPlan(item)}
                />

                <button
                  type="button"
                  id={`toggle-plan-${item.id}`}
                  onClick={() => onTogglePlan(item.id)}
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-all shrink-0 ${
                    item.completed
                      ? 'bg-[#10B981] text-white'
                      : 'border-2 border-[#D1D5DB] hover:border-[#10B981]'
                  }`}
                  title={item.completed ? 'Mark as incomplete' : 'Mark as completed'}
                >
                  {item.completed && <Check className="w-3.5 h-3.5 stroke-[2.8]" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
