import React, { useState } from 'react';
import { Info, Heart } from 'lucide-react';

interface WellnessScoreCardProps {
  score: number;
  maxScore?: number;
  changeText?: string;
  trendScores?: number[];
  onInfoClick?: () => void;
}

export const WellnessScoreCard: React.FC<WellnessScoreCardProps> = ({
  score = 82,
  maxScore = 100,
  changeText = "Great job! You're doing better than yesterday.",
  trendScores = [74, 76, 75, 78, 80, 79, 82],
  onInfoClick,
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<{ index: number; val: number } | null>(null);

  // Circular gauge math
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const progressPercent = Math.min(100, Math.max(0, (score / maxScore) * 100));
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  // Mini Sparkline SVG path math
  const width = 260;
  const height = 45;
  const paddingX = 10;
  const paddingY = 8;

  const minVal = 70;
  const maxVal = 90;
  const range = maxVal - minVal;

  const points = trendScores.map((val, i) => {
    const x = paddingX + (i / (trendScores.length - 1)) * (width - paddingX * 2);
    const y = height - paddingY - ((val - minVal) / range) * (height - paddingY * 2);
    return { x, y, val };
  });

  // Generate SVG path command
  let linePath = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cp1x = prev.x + (curr.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (curr.x - prev.x) / 2;
    const cp2y = curr.y;
    linePath += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }

  return (
    <div
      id="wellness-score-card"
      className="bg-white rounded-2xl p-6 border border-[#EAEFE9] shadow-xs flex flex-col justify-between"
    >
      <div>
        {/* Header Title */}
        <div className="flex items-center gap-1 text-[13px] font-semibold text-[#4B5563] mb-4">
          <span>Wellness Score</span>
          <button
            type="button"
            onClick={onInfoClick}
            className="text-[#9CA3AF] hover:text-[#10B981] transition-colors"
            title="Score Breakdown: 40% Sleep & Recovery, 30% Activity & Steps, 20% Nutrition & Hydration, 10% Mindfulness."
          >
            <Info className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Content: Big Score + Donut Ring */}
        <div className="flex items-center justify-between gap-3 mb-3 min-w-0">
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline">
              <span className="text-[40px] xl:text-[44px] font-extrabold text-[#111827] tracking-tight leading-none">
                {score}
              </span>
              <span className="text-[15px] xl:text-[16px] text-[#9CA3AF] font-semibold ml-1">
                /{maxScore}
              </span>
            </div>
            <p className="text-[11px] xl:text-[12px] text-[#6B7280] mt-2.5 leading-snug">
              {changeText}
            </p>
          </div>

          {/* Donut Chart with Heart Icon */}
          <div className="relative w-20 h-20 xl:w-24 xl:h-24 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              {/* Background Ring */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="stroke-[#EBF7EE]"
                strokeWidth="7"
                fill="none"
              />
              {/* Progress Ring */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="stroke-[#10B981] transition-all duration-700 ease-out"
                strokeWidth="7"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Heart className="w-4 h-4 xl:w-5 xl:h-5 text-[#10B981] fill-[#10B981]/20 stroke-[#10B981]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sparkline Trend */}
      <div className="relative pt-2">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-10 xl:h-12 overflow-visible"
        >
          {/* Subtle area gradient */}
          <defs>
            <linearGradient id="scoreTrendGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`${linePath} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`}
            fill="url(#scoreTrendGrad)"
          />

          {/* Trend line */}
          <path
            d={linePath}
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Data Points */}
          {points.map((p, idx) => (
            <g key={idx}>
              <circle
                cx={p.x}
                cy={p.y}
                r={hoveredPoint?.index === idx ? 4 : 2.5}
                className={`cursor-pointer transition-all ${
                  idx === points.length - 1 || hoveredPoint?.index === idx
                    ? 'fill-[#10B981] stroke-white stroke-2'
                    : 'fill-[#10B981]'
                }`}
                onMouseEnter={() => setHoveredPoint({ index: idx, val: p.val })}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            </g>
          ))}
        </svg>

        {/* Hover Tooltip (Clamped to avoid edge clipping) */}
        {hoveredPoint && (
          <div
            className="absolute -top-3 text-[10px] font-bold bg-[#111827] text-white px-2 py-0.5 rounded shadow-sm pointer-events-none -translate-x-1/2"
            style={{
              left: `${Math.max(12, Math.min(88, (hoveredPoint.index / (trendScores.length - 1)) * 100))}%`,
            }}
          >
            {hoveredPoint.val} pts
          </div>
        )}
      </div>
    </div>
  );
};
