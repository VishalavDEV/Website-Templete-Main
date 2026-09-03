import React from 'react';
import {
  Footprints,
  Droplets,
  Moon,
  Activity,
  Smile,
  Flame,
  Plus,
} from 'lucide-react';
import { MetricData } from '../types';

interface MetricCardsGridProps {
  metrics: Record<string, MetricData>;
  onCardClick: (metricKey: string) => void;
}

export const MetricCardsGrid: React.FC<MetricCardsGridProps> = ({
  metrics,
  onCardClick,
}) => {
  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'shoe':
        return <Footprints className="w-4 h-4" style={{ color }} />;
      case 'water':
        return <Droplets className="w-4 h-4" style={{ color }} />;
      case 'moon':
        return <Moon className="w-4 h-4" style={{ color }} />;
      case 'activity':
        return <Activity className="w-4 h-4" style={{ color }} />;
      case 'smile':
        return <Smile className="w-4 h-4" style={{ color }} />;
      case 'flame':
        return <Flame className="w-4 h-4" style={{ color }} />;
      default:
        return <Activity className="w-4 h-4" style={{ color }} />;
    }
  };

  const metricOrder = ['steps', 'water', 'sleep', 'exercise', 'mood', 'calories'];

  return (
    <div
      id="metrics-grid"
      className="grid grid-cols-3 gap-3.5"
    >
      {metricOrder.map((key) => {
        const item = metrics[key];
        if (!item) return null;

        const percent = Math.min(100, Math.max(0, item.percentage));

        return (
          <div
            key={item.id}
            id={`metric-card-${item.id}`}
            onClick={() => onCardClick(key)}
            className="group bg-white rounded-2xl p-4 border border-[#EAEFE9] shadow-xs hover:border-[#10B981]/50 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
          >
            {/* Header: Icon & Name */}
            <div className="flex items-center justify-between mb-2 min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1 pr-1">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: item.accentBg }}
                >
                  {getIcon(item.icon, item.color)}
                </div>
                <span className="text-[12px] xl:text-[13px] font-semibold text-[#4B5563] truncate">
                  {item.name}
                </span>
              </div>
              <span className="text-[10px] text-gray-400 group-hover:text-[#10B981] transition-colors opacity-0 group-hover:opacity-100 font-semibold shrink-0">
                + Log
              </span>
            </div>

            {/* Value & Target */}
            <div className="mb-2.5">
              <div className="flex flex-wrap items-baseline gap-x-1">
                <span className="text-[18px] xl:text-[20px] font-bold text-[#111827] tracking-tight leading-snug">
                  {item.displayValue}
                </span>
                {item.targetDisplay && (
                  <span className="text-[10px] xl:text-[11px] font-medium text-[#9CA3AF] whitespace-nowrap">
                    {item.targetDisplay}
                  </span>
                )}
              </div>
              {item.statusText && (
                <div className="text-[11px] font-medium text-[#6B7280] truncate">
                  {item.statusText}
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${percent}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
