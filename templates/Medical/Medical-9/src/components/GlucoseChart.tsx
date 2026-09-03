import React, { useState } from 'react';
import { MOCK_GLUCOSE_DATA } from '../data/mockData';
import { Info, TrendingDown, CheckCircle, Clock } from 'lucide-react';

export const GlucoseChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month'>('today');
  const [activePointIndex, setActivePointIndex] = useState<number>(0);

  const currentData = MOCK_GLUCOSE_DATA[timeRange];
  const activePoint = currentData[activePointIndex] || currentData[0];

  // Calculate average for current view
  const averageGlucose = Math.round(
    currentData.reduce((acc, curr) => acc + curr.value, 0) / currentData.length
  );

  // SVG dimensions
  const svgWidth = 600;
  const svgHeight = 220;
  const paddingX = 50;
  const paddingY = 40;

  // Min/Max range for scaling
  const minVal = 60;
  const maxVal = 180;

  // Calculate points
  const points = currentData.map((d, idx) => {
    const x = paddingX + (idx / (currentData.length - 1)) * (svgWidth - paddingX * 2);
    const y = svgHeight - paddingY - ((d.value - minVal) / (maxVal - minVal)) * (svgHeight - paddingY * 2);
    return { x, y, ...d };
  });

  // SVG Path string generator
  const pathD = points.reduce((acc, p, idx) => {
    return idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, '');

  // Fill area path string
  const areaD = `${pathD} L ${points[points.length - 1].x} ${svgHeight - paddingY} L ${points[0].x} ${svgHeight - paddingY} Z`;

  // Target green range box y coordinates (70 - 140 mg/dL)
  const targetTopY = svgHeight - paddingY - ((140 - minVal) / (maxVal - minVal)) * (svgHeight - paddingY * 2);
  const targetBottomY = svgHeight - paddingY - ((70 - minVal) / (maxVal - minVal)) * (svgHeight - paddingY * 2);
  const targetHeight = targetBottomY - targetTopY;

  return (
    <section className="py-16 lg:py-24 bg-[#F2ECE9] border-y border-[#E5DDD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C97873] font-sans block mb-2">
            Continuous Glycemic Insights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#542F3B]">
            Your numbers tell a story.
          </h2>
          <p className="text-sm sm:text-base text-[#70696C] font-sans font-normal mt-3 leading-relaxed">
            Continuous monitoring captures hidden physiological trends that static blood samples miss. See how continuous data empowers personalized care.
          </p>
        </div>

        {/* Main Interactive Graph Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md border border-[#E5DDD8] max-w-5xl mx-auto">
          
          {/* Top Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#E5DDD8]">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#542F3B] text-white flex items-center justify-center font-serif font-bold text-lg">
                G
              </div>
              <div>
                <h3 className="text-base font-bold text-[#542F3B] font-sans">CGM Sensor Trend Analysis</h3>
                <p className="text-xs text-[#70696C]">Intermittent & continuous glycemic telemetry</p>
              </div>
            </div>

            {/* Time Period Filter Pills */}
            <div className="flex items-center p-1 bg-[#F2ECE9] rounded-xl border border-[#E5DDD8]">
              {(['today', 'week', 'month'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => {
                    setTimeRange(range);
                    setActivePointIndex(0);
                  }}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#C97873] ${
                    timeRange === range
                      ? 'bg-[#542F3B] text-white shadow-xs'
                      : 'text-[#252326] hover:text-[#C97873]'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

          </div>

          {/* Metric Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-[#E5DDD8] text-center sm:text-left">
            
            <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E5DDD8]">
              <div className="text-[11px] font-bold text-[#70696C] uppercase">Average Glucose</div>
              <div className="text-2xl font-serif font-bold text-[#542F3B] mt-0.5">
                {averageGlucose} <span className="text-xs font-sans text-[#C97873] font-normal">mg/dL</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E5DDD8]">
              <div className="text-[11px] font-bold text-[#70696C] uppercase">Time in Target Range</div>
              <div className="text-2xl font-serif font-bold text-[#C97873] mt-0.5">
                94% <span className="text-xs font-sans text-[#70696C] font-normal">(70-140)</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E5DDD8]">
              <div className="text-[11px] font-bold text-[#70696C] uppercase">Selected Point</div>
              <div className="text-xl font-bold text-[#542F3B] mt-0.5 font-sans">
                {activePoint.value} <span className="text-xs text-[#70696C] font-normal">mg/dL</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#FAF0EE] rounded-xl border border-[#C97873]/25 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-[#C97873] uppercase">Glycemic Status</div>
                <div className="text-sm font-bold text-[#542F3B] flex items-center gap-1 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#C97873]" /> {activePoint.status}
                </div>
              </div>
            </div>

          </div>

          {/* Interactive SVG Chart Canvas */}
          <div className="relative pt-6 pb-2 overflow-x-auto">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto min-w-[500px]"
              aria-label="Glucose trend chart"
            >
              {/* Target Range Band (70 - 140 mg/dL) */}
              <rect
                x={paddingX}
                y={targetTopY}
                width={svgWidth - paddingX * 2}
                height={targetHeight}
                fill="#FAF0EE"
                opacity="0.8"
                rx="6"
              />
              <text
                x={svgWidth - paddingX + 8}
                y={targetTopY + 12}
                fill="#C97873"
                fontSize="10"
                fontWeight="700"
              >
                140 mg/dL
              </text>
              <text
                x={svgWidth - paddingX + 8}
                y={targetBottomY + 4}
                fill="#C97873"
                fontSize="10"
                fontWeight="700"
              >
                70 mg/dL
              </text>

              {/* Grid Lines */}
              <line
                x1={paddingX}
                y1={targetTopY}
                x2={svgWidth - paddingX}
                y2={targetTopY}
                stroke="#C97873"
                strokeDasharray="4 4"
                strokeWidth="1"
                opacity="0.4"
              />
              <line
                x1={paddingX}
                y1={targetBottomY}
                x2={svgWidth - paddingX}
                y2={targetBottomY}
                stroke="#C97873"
                strokeDasharray="4 4"
                strokeWidth="1"
                opacity="0.4"
              />

              {/* Area Fill under path */}
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C97873" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#C97873" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path d={areaD} fill="url(#chartGradient)" />

              {/* Smooth Trend Line */}
              <path
                d={pathD}
                fill="none"
                stroke="#C97873"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Interactive Data Points */}
              {points.map((p, idx) => {
                const isSelected = activePointIndex === idx;
                return (
                  <g key={idx} className="cursor-pointer" onClick={() => setActivePointIndex(idx)}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isSelected ? "9" : "6"}
                      fill={isSelected ? "#542F3B" : "#C97873"}
                      stroke="#white"
                      strokeWidth="2.5"
                      className="transition-all duration-200 hover:r-8"
                    />
                    
                    {/* X-axis Labels */}
                    <text
                      x={p.x}
                      y={svgHeight - 10}
                      textAnchor="middle"
                      fill="#70696C"
                      fontSize="11"
                      fontWeight={isSelected ? "bold" : "normal"}
                    >
                      {p.time}
                    </text>

                    {/* Value Badge above point */}
                    {isSelected && (
                      <g>
                        <rect
                          x={p.x - 30}
                          y={p.y - 32}
                          width="60"
                          height="22"
                          rx="6"
                          fill="#542F3B"
                        />
                        <text
                          x={p.x}
                          y={p.y - 17}
                          textAnchor="middle"
                          fill="#FAF8F5"
                          fontSize="11"
                          fontWeight="bold"
                        >
                          {p.value} mg/dL
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Mandatory Educational Disclaimer */}
          <div className="mt-6 p-4 rounded-xl bg-[#F2ECE9] border border-[#E5DDD8] flex items-center gap-3 text-xs text-[#70696C] font-sans">
            <Info className="w-5 h-5 text-[#C97873] shrink-0" />
            <span>
              <strong>Educational Disclaimer:</strong> Example educational visualization — not medical advice. Actual continuous glucose monitor data varies by individual biology and care plan.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
