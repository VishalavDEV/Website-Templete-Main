import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DayProgress, WEEKLY_PROGRESS_DATA } from '../data/mockData';

interface WeeklyProgressCardProps {
  initialRange?: string;
}

export const WeeklyProgressCard: React.FC<WeeklyProgressCardProps> = ({
  initialRange = 'This Week',
}) => {
  const [selectedRange, setSelectedRange] = useState<string>(initialRange);
  const [activeDayIndex, setActiveDayIndex] = useState<number>(3); // Default Thu (index 3)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const data: DayProgress[] = WEEKLY_PROGRESS_DATA[selectedRange] || WEEKLY_PROGRESS_DATA['This Week'];

  // SVG Chart Dimensions
  const width = 480;
  const height = 180;
  const paddingLeft = 42;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  // Compute X for each day
  const getX = (index: number) => {
    return paddingLeft + (index / (data.length - 1)) * chartWidth;
  };

  // Compute Y from 0-100%
  const getY = (valPercent: number) => {
    return paddingTop + chartHeight - (valPercent / 100) * chartHeight;
  };

  // Generate smooth spline path using cubic bezier curves
  const generateSplinePath = (metricKey: 'steps' | 'exercise' | 'sleep') => {
    const points = data.map((d, i) => ({
      x: getX(i),
      y: getY(d[metricKey]),
    }));

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cx1 = prev.x + (curr.x - prev.x) / 2;
      const cy1 = prev.y;
      const cx2 = prev.x + (curr.x - prev.x) / 2;
      const cy2 = curr.y;
      path += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr.x} ${curr.y}`;
    }
    return path;
  };

  const stepsPath = generateSplinePath('steps');
  const exercisePath = generateSplinePath('exercise');
  const sleepPath = generateSplinePath('sleep');

  const activeDay = data[activeDayIndex] || data[3];

  return (
    <div
      id="weekly-progress-card"
      className="bg-white rounded-2xl p-6 border border-[#EAEFE9] shadow-xs flex flex-col justify-between relative"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[14px] font-bold text-[#111827]">Weekly Progress</h3>

        {/* Dropdown */}
        <div className="relative">
          <button
            type="button"
            id="progress-range-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1.5 text-[12px] font-medium text-[#4B5563] bg-[#F9FBFA] hover:bg-[#F3F4F6] border border-[#E5EAE5] px-2.5 py-1 rounded-lg transition-colors"
          >
            <span>{selectedRange}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF]" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-32 bg-white border border-[#E5EAE5] rounded-xl shadow-lg py-1 z-30">
              {['This Week', 'Last Week'].map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => {
                    setSelectedRange(range);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-[12px] hover:bg-[#F3F4F6] transition-colors ${
                    selectedRange === range
                      ? 'text-[#10B981] font-semibold bg-[#EBF7EE]'
                      : 'text-[#4B5563]'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Legend & Active Day Summary */}
      <div className="flex items-center justify-between text-[11px] font-medium text-[#6B7280] mb-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#10B981] rounded-full" />
            <span>Steps</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#F97316] rounded-full" />
            <span>Exercise</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#8B5CF6] rounded-full" />
            <span>Sleep</span>
          </div>
        </div>

        {/* Active day quick readout (non-overlapping) */}
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#4B5563] bg-[#F8FAF8] px-2 py-0.5 rounded-md border border-[#EAEFE9]">
          <span className="font-semibold text-[#111827]">{activeDay.day}:</span>
          <span className="text-[#10B981] font-medium">{activeDay.stepsRaw.toLocaleString()}</span>
          <span className="text-gray-300">•</span>
          <span className="text-[#F97316] font-medium">{activeDay.exerciseRaw}m</span>
          <span className="text-gray-300">•</span>
          <span className="text-[#8B5CF6] font-medium">{activeDay.sleepRaw}h</span>
        </div>
      </div>

      {/* Interactive SVG Chart */}
      <div className="relative w-full h-[180px]">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible select-none"
        >
          {/* Y-axis gridlines & labels */}
          {[100, 75, 50, 25, 0].map((val) => {
            const y = getY(val);
            return (
              <g key={val}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  stroke="#F3F4F6"
                  strokeWidth="1"
                />
                <text
                  x={paddingLeft - 8}
                  y={y + 3.5}
                  textAnchor="end"
                  className="fill-[#9CA3AF] text-[9px] font-semibold"
                >
                  {val}%
                </text>
              </g>
            );
          })}

          {/* Active Day Vertical Line */}
          {activeDayIndex !== null && (
            <line
              x1={getX(activeDayIndex)}
              y1={paddingTop}
              x2={getX(activeDayIndex)}
              y2={paddingTop + chartHeight}
              stroke="#D1D5DB"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
          )}

          {/* Curves */}
          <path
            d={sleepPath}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d={exercisePath}
            fill="none"
            stroke="#F97316"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d={stepsPath}
            fill="none"
            stroke="#10B981"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Active Day Indicator Dots */}
          {activeDayIndex !== null && (
            <g>
              {/* Steps dot */}
              <circle
                cx={getX(activeDayIndex)}
                cy={getY(activeDay.steps)}
                r="4.5"
                className="fill-[#10B981] stroke-white stroke-2 shadow-xs"
              />
              {/* Exercise dot */}
              <circle
                cx={getX(activeDayIndex)}
                cy={getY(activeDay.exercise)}
                r="4.5"
                className="fill-[#F97316] stroke-white stroke-2 shadow-xs"
              />
              {/* Sleep dot */}
              <circle
                cx={getX(activeDayIndex)}
                cy={getY(activeDay.sleep)}
                r="4.5"
                className="fill-[#8B5CF6] stroke-white stroke-2 shadow-xs"
              />
            </g>
          )}

          {/* X-axis Labels & Hover Interaction targets */}
          {data.map((d, i) => {
            const x = getX(i);
            const isSelected = activeDayIndex === i;
            return (
              <g
                key={d.day}
                className="cursor-pointer"
                onClick={() => setActiveDayIndex(i)}
                onMouseEnter={() => setActiveDayIndex(i)}
              >
                {/* Transparent clickable column area */}
                <rect
                  x={x - 18}
                  y={paddingTop}
                  width={36}
                  height={chartHeight + paddingBottom}
                  fill="transparent"
                />
                <text
                  x={x}
                  y={height - 6}
                  textAnchor="middle"
                  className={`text-[10px] transition-colors ${
                    isSelected
                      ? 'fill-[#111827] font-bold text-[11px]'
                      : 'fill-[#9CA3AF] font-medium'
                  }`}
                >
                  {d.day}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
