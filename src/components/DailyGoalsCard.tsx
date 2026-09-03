import React from 'react';
import { Check, Circle } from 'lucide-react';
import { DailyGoal } from '../types';

interface DailyGoalsCardProps {
  goals: DailyGoal[];
  onToggleGoal: (id: string) => void;
  onEditGoals: () => void;
}

export const DailyGoalsCard: React.FC<DailyGoalsCardProps> = ({
  goals,
  onToggleGoal,
  onEditGoals,
}) => {
  const completedCount = goals.filter((g) => g.completed).length;
  const totalCount = goals.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div
      id="daily-goals-card"
      className="bg-white rounded-2xl p-6 border border-[#EAEFE9] shadow-xs flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[14px] font-bold text-[#111827]">Daily Goals</h3>
          <button
            id="edit-daily-goals-btn"
            type="button"
            onClick={onEditGoals}
            className="text-[12px] font-semibold text-[#10B981] hover:text-[#059669] transition-colors"
          >
            Edit
          </button>
        </div>

        {/* Goals Checklist */}
        <div className="space-y-3">
          {goals.map((goal) => (
            <div
              key={goal.id}
              id={`goal-item-${goal.id}`}
              onClick={() => onToggleGoal(goal.id)}
              className="flex items-center justify-between py-1 group cursor-pointer select-none"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                {/* Checkbox circle */}
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-all shrink-0 ${
                    goal.completed
                      ? 'bg-[#10B981] text-white'
                      : 'border-2 border-[#D1D5DB] group-hover:border-[#10B981]'
                  }`}
                >
                  {goal.completed && <Check className="w-3.5 h-3.5 stroke-[2.8]" />}
                </div>

                {/* Title */}
                <span
                  className={`text-[13px] font-medium transition-colors truncate ${
                    goal.completed
                      ? 'text-[#111827]'
                      : 'text-[#4B5563]'
                  }`}
                >
                  {goal.title}
                </span>
              </div>

              {/* Emoji / Icon Badge */}
              <div className="w-7 h-7 rounded-lg bg-[#F8FAF8] flex items-center justify-center text-sm shadow-2xs shrink-0">
                <span>{goal.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Progress & Summary */}
      <div className="mt-5 pt-3 border-t border-[#F3F4F6]">
        <div className="flex items-center justify-between text-[11px] font-semibold text-[#6B7280] mb-2">
          <span>{`${completedCount} of ${totalCount} goals completed`}</span>
          <span className="text-[#10B981]">{Math.round(progressPercent)}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#10B981] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
