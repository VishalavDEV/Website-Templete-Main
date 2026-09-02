import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { MonthActivity, ActivityResolution } from '../types';

interface ActivityChartProps {
  data: MonthActivity[];
  resolution: ActivityResolution;
  onChangeResolution: (res: ActivityResolution) => void;
}

export function ActivityChart({
  data,
  resolution,
  onChangeResolution,
}: ActivityChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const maxValue = 400;
  const yAxisTicks = [400, 300, 200, 100, 0];
  const resolutionOptions: ActivityResolution[] = ['Month', 'Week', 'Quarter', 'Year'];

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold text-gray-500">Activity</h3>

        {/* Resolution Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-xs text-gray-500 hover:text-gray-700 bg-white border border-gray-100 hover:border-gray-200 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
          >
            <span>{resolution}</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-lg shadow-lg z-20 py-1 min-w-[90px] animate-in fade-in zoom-in-95">
              {resolutionOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    onChangeResolution(opt);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-gray-50 ${
                    resolution === opt ? 'font-bold text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <span>{opt}</span>
                  {resolution === opt && <Check className="w-3 h-3 text-blue-600" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart Grid with Y-Axis & Bars */}
      <div className="relative flex-1 flex flex-col justify-between pt-2 pb-1">
        {/* Horizontal grid lines & Y-axis labels */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
          {yAxisTicks.map((tick) => (
            <div key={tick} className="flex items-center w-full">
              <span className="text-[10px] font-medium text-gray-400 w-7 text-right pr-2 select-none">
                {tick}
              </span>
              <div className="flex-1 border-b border-gray-100/70" />
            </div>
          ))}
        </div>

        {/* Bar Columns Container */}
        <div className="relative z-10 flex-1 ml-7 flex items-end justify-between px-1 pb-6 pt-1">
          {data.map((item, idx) => {
            const fillPercentage = Math.min(100, Math.max(0, (item.value / maxValue) * 100));
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={item.month}
                className="flex-1 flex flex-col items-center justify-end h-full px-0.5 group cursor-pointer relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Tooltip on hover */}
                {isHovered && (
                  <div className="absolute bottom-[calc(100%+4px)] left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-medium py-1 px-2 rounded shadow-lg whitespace-nowrap z-30 pointer-events-none animate-in fade-in">
                    <span className="font-bold">{item.month}:</span> {item.value} activities
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                  </div>
                )}

                {/* Pill Track Bar */}
                <div className="w-2 sm:w-2.5 h-full bg-[#EEF2F6] rounded-full flex flex-col justify-end overflow-hidden transition-all duration-300 group-hover:bg-[#E2E8F0]">
                  {/* Active Blue Fill */}
                  <div
                    className="w-full bg-[#3B82F6] group-hover:bg-[#2563EB] rounded-full transition-all duration-500 ease-out"
                    style={{ height: `${fillPercentage}%` }}
                  />
                </div>

                {/* X-axis Label */}
                <span
                  className={`absolute -bottom-5 text-[9px] font-medium tracking-tight uppercase select-none transition-colors ${
                    isHovered ? 'text-blue-600 font-bold' : 'text-gray-400'
                  }`}
                >
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
