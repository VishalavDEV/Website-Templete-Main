import React from 'react';
import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  isIncrease: boolean;
  comparison: string;
  icon: LucideIcon;
  colorClass?: string; // 'primary', 'secondary', 'accent', 'success', etc.
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isIncrease,
  comparison,
  icon: Icon,
  colorClass = 'primary',
}) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return { bg: 'bg-indigo-50', text: 'text-indigo-600' };
      case 'secondary':
        return { bg: 'bg-purple-50', text: 'text-purple-600' };
      case 'accent':
        return { bg: 'bg-cyan-50', text: 'text-cyan-600' };
      case 'success':
        return { bg: 'bg-green-50', text: 'text-green-600' };
      case 'warning':
        return { bg: 'bg-amber-50', text: 'text-amber-600' };
      case 'danger':
        return { bg: 'bg-red-50', text: 'text-red-600' };
      default:
        return { bg: 'bg-indigo-50', text: 'text-indigo-600' };
    }
  };

  const colors = getColorClasses(colorClass);

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-500">{title}</span>
        <div className={`p-2.5 rounded-xl ${colors.bg} ${colors.text} transition-colors`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">{value}</h3>
        <div className="flex items-center gap-1.5 mt-2 text-xs">
          <span
            className={`inline-flex items-center font-semibold rounded ${
              isIncrease ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {isIncrease ? (
              <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" />
            ) : (
              <ArrowDownRight className="h-3.5 w-3.5 mr-0.5" />
            )}
            {change}%
          </span>
          <span className="text-slate-400">{comparison}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
