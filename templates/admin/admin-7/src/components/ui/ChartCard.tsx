import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

interface ChartDataPoint {
  label: string;
  value: number;
  value2?: number;
}

interface ChartCardProps {
  title: string;
  subtitle?: string;
  type: 'line' | 'area' | 'bar' | 'donut';
  data: ChartDataPoint[];
  color?: string; // e.g. '#2563EB'
  color2?: string;
  height?: number;
  labels?: string[];
  unit?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  type,
  data,
  color = '#2563EB',
  color2 = '#0284C7',
  height = 200,
  labels = ['Value 1', 'Value 2'],
  unit = '',
}) => {
  const { settings } = useApp();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // SVG dimensions
  const paddingX = 40;
  const paddingY = 25;
  const svgWidth = 500;
  const svgHeight = height;

  const activeWidth = svgWidth - paddingX * 2;
  const activeHeight = svgHeight - paddingY * 2;

  // Max calculations
  const vals = data.flatMap((d) => [d.value, d.value2 ?? 0]);
  const maxVal = Math.max(...vals, 10);
  const minVal = 0;
  const range = maxVal - minVal;

  const getX = (index: number) => {
    if (data.length <= 1) return paddingX + activeWidth / 2;
    return paddingX + (index / (data.length - 1)) * activeWidth;
  };

  const getY = (val: number) => {
    return paddingY + activeHeight - (val / maxVal) * activeHeight;
  };

  // Render Helpers
  const renderGridLines = () => {
    const lines = 4;
    return Array.from({ length: lines + 1 }).map((_, i) => {
      const y = paddingY + (i / lines) * activeHeight;
      const val = Math.round(maxVal - (i / lines) * range);
      return (
        <g key={i} className="opacity-60">
          <line
            x1={paddingX}
            y1={y}
            x2={svgWidth - paddingX}
            y2={y}
            stroke="currentColor"
            className="text-blue-100"
            strokeDasharray="4 4"
            strokeWidth={1}
          />
          <text
            x={paddingX - 8}
            y={y + 4}
            textAnchor="end"
            className="text-[10px] fill-slate-400 font-medium tabular-nums font-mono"
          >
            {val}
            {unit}
          </text>
        </g>
      );
    });
  };

  const renderXLabels = () => {
    const interval = Math.max(1, Math.floor(data.length / 5));
    return data.map((d, i) => {
      if (i % interval !== 0 && i !== data.length - 1) return null;
      const x = getX(i);
      return (
        <text
          key={i}
          x={x}
          y={svgHeight - 6}
          textAnchor="middle"
          className="text-[9px] fill-slate-400 font-semibold font-mono uppercase tracking-wider"
        >
          {d.label}
        </text>
      );
    });
  };

  // Area Path
  const getAreaPath = (key: 'value' | 'value2') => {
    if (data.length === 0) return '';
    let path = `M ${getX(0)} ${getY(0)}`;
    
    // Draw line
    data.forEach((d, i) => {
      const val = key === 'value' ? d.value : (d.value2 ?? 0);
      if (i === 0) {
        path = `M ${getX(0)} ${getY(val)}`;
      } else {
        path += ` L ${getX(i)} ${getY(val)}`;
      }
    });

    // Close area
    path += ` L ${getX(data.length - 1)} ${getY(0) + activeHeight}`;
    path += ` L ${getX(0)} ${getY(0) + activeHeight} Z`;
    return path;
  };

  // Line Path
  const getLinePath = (key: 'value' | 'value2') => {
    if (data.length === 0) return '';
    let path = '';
    data.forEach((d, i) => {
      const val = key === 'value' ? d.value : (d.value2 ?? 0);
      if (i === 0) {
        path = `M ${getX(0)} ${getY(val)}`;
      } else {
        path += ` L ${getX(i)} ${getY(val)}`;
      }
    });
    return path;
  };

  const isMotionEnabled = settings.motion === 'full';

  return (
    <div className="rounded-xl border border-blue-100 bg-white p-5 relative flex flex-col justify-between shadow-xs premium-card-hover transition-all duration-300">
      <div>
        <div className="flex justify-between items-start mb-1 gap-2">
          <h4 className="text-xs font-mono font-bold tracking-wider text-slate-900 uppercase flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-3 bg-blue-600 rounded-2xs" />
            {title}
          </h4>
          {data.some((d) => d.value2 !== undefined) && (
            <div className="flex gap-2.5 text-[9px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                {labels[0]}
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full inline-block" style={{ backgroundColor: color2 }} />
                {labels[1]}
              </span>
            </div>
          )}
        </div>
        {subtitle && (
          <p className="text-[10px] text-slate-500 mb-3.5 font-mono leading-relaxed uppercase tracking-wide">{subtitle}</p>
        )}
      </div>

      <div className="relative w-full overflow-hidden">
        {type === 'donut' ? (
          // Donut Chart Implementation
          <div className="flex items-center justify-center py-4 gap-8 flex-col sm:flex-row">
            <svg width={150} height={150} viewBox="0 0 100 100" className="shrink-0">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" className="text-blue-100" strokeWidth="12" />
              {(() => {
                const total = data.reduce((sum, d) => sum + d.value, 0);
                let accumulatedPercent = 0;
                const colors = [color, color2, '#0EA5E9', '#10B981', '#F59E0B', '#6366F1'];

                return data.map((d, i) => {
                  const percent = total > 0 ? (d.value / total) * 100 : 0;
                  const strokeDasharray = `${percent} ${100 - percent}`;
                  const strokeDashoffset = 100 - accumulatedPercent + 25; // start from top
                  accumulatedPercent += percent;

                  return (
                    <circle
                      key={i}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke={colors[i % colors.length]}
                      strokeWidth="12"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      pathLength="100"
                      className="transition-all duration-1000 ease-out cursor-pointer"
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    />
                  );
                });
              })()}
              <g className="text-center">
                <text x="50" y="47" textAnchor="middle" className="text-[10px] fill-slate-400 font-bold uppercase tracking-wider">
                  TOTAL
                </text>
                <text x="50" y="62" textAnchor="middle" className="text-base font-semibold fill-slate-900 tabular-nums">
                  {data.reduce((sum, d) => sum + d.value, 0)}
                </text>
              </g>
            </svg>
            <div className="flex flex-col gap-1.5 self-center">
              {data.map((d, i) => {
                const total = data.reduce((sum, d) => sum + d.value, 0);
                const pct = total > 0 ? ((d.value / total) * 100).toFixed(0) : '0';
                const colors = [color, color2, '#0EA5E9', '#10B981', '#F59E0B', '#6366F1'];
                const isHovered = hoveredIdx === i;

                return (
                  <div 
                    key={i} 
                    className={`flex items-center gap-2.5 px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      isHovered ? 'bg-blue-50' : 'hover:bg-blue-50/50'
                    }`}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: colors[i % colors.length] }} />
                    <span className="text-xs font-medium text-slate-700">{d.label}</span>
                    <span className="text-xs font-bold text-slate-900 ml-auto tabular-nums">{d.value}{unit} ({pct}%)</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          // Grid-based charts (Line, Area, Bar)
          <div className="relative">
            <svg 
              viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
              width="100%" 
              height="100%" 
              className="overflow-visible"
            >
              {/* Grids */}
              {renderGridLines()}

              {/* Area Paths */}
              {type === 'area' && (
                <>
                  <path
                    d={getAreaPath('value')}
                    fill={`url(#areaGrad-${title.replace(/\s+/g, '')})`}
                    className={`transition-all duration-1000 chart-element-transition ${
                      isMotionEnabled ? 'animate-in fade-in duration-1000' : ''
                    }`}
                  />
                  {data.some((d) => d.value2 !== undefined) && (
                    <path
                      d={getAreaPath('value2')}
                      fill={`url(#areaGrad2-${title.replace(/\s+/g, '')})`}
                      className={`transition-all duration-1000 chart-element-transition opacity-60 ${
                        isMotionEnabled ? 'animate-in fade-in duration-1000' : ''
                      }`}
                    />
                  )}
                </>
              )}

              {/* Line Paths */}
              {(type === 'line' || type === 'area') && (
                <>
                  <path
                    d={getLinePath('value')}
                    fill="none"
                    stroke={color}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-all duration-1000 chart-element-transition ${
                      isMotionEnabled ? 'animate-draw-line' : ''
                    }`}
                  />
                  {data.some((d) => d.value2 !== undefined) && (
                    <path
                      d={getLinePath('value2')}
                      fill="none"
                      stroke={color2}
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-all duration-1000 chart-element-transition ${
                        isMotionEnabled ? 'animate-draw-line' : ''
                      }`}
                    />
                  )}
                </>
              )}

              {/* Bar Chart Bars with Sequential Delay Growth */}
              {type === 'bar' && (
                <g>
                  {data.map((d, i) => {
                    const x = getX(i);
                    const barWidth = Math.max(8, activeWidth / data.length - 12);
                    const hasSecondVal = d.value2 !== undefined;
                    
                    const y1 = getY(d.value);
                    const h1 = activeHeight + paddingY - y1;
                    const delay = isMotionEnabled ? `${i * 35}ms` : '0ms';

                    if (hasSecondVal) {
                      // Multi bar
                      const bW2 = barWidth / 2;
                      const y2 = getY(d.value2 ?? 0);
                      const h2 = activeHeight + paddingY - y2;

                      return (
                        <g key={i}>
                          {/* First Bar */}
                          <rect
                            x={x - barWidth}
                            y={y1}
                            width={bW2 - 1}
                            height={h1}
                            fill={color}
                            rx={2}
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            style={{ animationDelay: delay }}
                            className={`transition-all duration-300 chart-element-transition hover:opacity-80 cursor-pointer ${
                              isMotionEnabled ? 'animate-grow-bar' : ''
                            }`}
                          />
                          {/* Second Bar */}
                          <rect
                            x={x - barWidth + bW2 + 1}
                            y={y2}
                            width={bW2 - 1}
                            height={h2}
                            fill={color2}
                            rx={2}
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            style={{ animationDelay: delay }}
                            className={`transition-all duration-300 chart-element-transition hover:opacity-80 cursor-pointer ${
                              isMotionEnabled ? 'animate-grow-bar' : ''
                            }`}
                          />
                        </g>
                      );
                    } else {
                      // Single bar
                      return (
                        <rect
                          key={i}
                          x={x - barWidth / 2}
                          y={y1}
                          width={barWidth}
                          height={h1}
                          fill={color}
                          rx={2}
                          onMouseEnter={() => setHoveredIdx(i)}
                          onMouseLeave={() => setHoveredIdx(null)}
                          style={{ animationDelay: delay }}
                          className={`transition-all duration-300 chart-element-transition hover:opacity-80 cursor-pointer ${
                            isMotionEnabled ? 'animate-grow-bar' : ''
                          }`}
                        />
                      );
                    }
                  })}
                </g>
              )}

              {/* Interactive Tooltip Markers */}
              {(type === 'line' || type === 'area') &&
                data.map((d, i) => {
                  const x = getX(i);
                  const isHovered = hoveredIdx === i;
                  return (
                    <g key={i} className="cursor-pointer">
                      {/* invisible interactive click targets */}
                      <rect
                        x={x - activeWidth / data.length / 2}
                        y={paddingY}
                        width={activeWidth / data.length}
                        height={activeHeight}
                        fill="transparent"
                        onMouseEnter={() => setHoveredIdx(i)}
                        onMouseLeave={() => setHoveredIdx(null)}
                      />
                      {isHovered && (
                        <g>
                          <line
                            x1={x}
                            y1={paddingY}
                            x2={x}
                            y2={paddingY + activeHeight}
                            stroke="#2563EB"
                            strokeWidth={1}
                            strokeDasharray="2 2"
                          />
                          <circle cx={x} cy={getY(d.value)} r={5} fill={color} stroke="white" strokeWidth={2} />
                          {d.value2 !== undefined && (
                            <circle cx={x} cy={getY(d.value2)} r={5} fill={color2} stroke="white" strokeWidth={2} />
                          )}
                        </g>
                      )}
                    </g>
                  );
                })}

              {/* X Labels */}
              {renderXLabels()}

              {/* Gradients */}
              <defs>
                <linearGradient id={`areaGrad-${title.replace(/\s+/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={color} stopOpacity="0.01" />
                </linearGradient>
                <linearGradient id={`areaGrad2-${title.replace(/\s+/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color2} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={color2} stopOpacity="0.01" />
                </linearGradient>
              </defs>
            </svg>

            {/* Float Tooltip Box */}
            {hoveredIdx !== null && data[hoveredIdx] && (
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-[10px] text-white flex flex-col gap-0.5 z-10 font-medium tracking-wide shadow-xl">
                <span className="font-bold text-blue-400">{data[hoveredIdx].label}</span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                  {labels[0]}: <strong className="tabular-nums font-mono">{data[hoveredIdx].value}{unit}</strong>
                </span>
                {data[hoveredIdx].value2 !== undefined && (
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full inline-block" style={{ backgroundColor: color2 }} />
                    {labels[1]}: <strong className="tabular-nums font-mono">{data[hoveredIdx].value2}{unit}</strong>
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
