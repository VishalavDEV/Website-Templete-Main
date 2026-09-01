import React from 'react';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeText?: string;
  icon: LucideIcon;
  iconBgColor?: string;
  iconTextColor?: string;
  trend?: 'up' | 'down';
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeText = 'vs last period',
  icon: Icon,
  iconBgColor = 'bg-brand-50 dark:bg-brand-950/50',
  iconTextColor = 'text-brand-600 dark:text-brand-400',
  trend = 'up',
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {title}
        </span>
        <div className={`p-2.5 rounded-xl ${iconBgColor} ${iconTextColor}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {value}
        </h3>
        {change !== undefined && (
          <div
            className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
              trend === 'up'
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                : 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400'
            }`}
          >
            {trend === 'up' ? (
              <TrendingUp className="w-3.5 h-3.5" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5" />
            )}
            <span>{change > 0 ? `+${change}%` : `${change}%`}</span>
          </div>
        )}
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
        {changeText}
      </p>
    </div>
  );
};
