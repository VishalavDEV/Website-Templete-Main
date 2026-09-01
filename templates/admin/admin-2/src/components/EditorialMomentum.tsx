import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { MetricTab, TimeRange } from '../types';
import { TrendingUp, Eye, Compass, Bookmark, Share2, Sparkles, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const EditorialMomentum: React.FC = () => {
  const { getMomentumData, setIsExportModalOpen } = useEditorial();

  const [activeTab, setActiveTab] = useState<MetricTab>('reads');
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);

  const momentum = getMomentumData(activeTab, timeRange);
  const points = momentum.points;

  // Calculate SVG curve coordinates
  const svgWidth = 700;
  const svgHeight = 220;
  const paddingX = 40;
  const paddingY = 30;

  const maxVal = Math.max(...points.map((p) => p.value), 10);
  const minVal = Math.min(...points.map((p) => p.value), 0);

  const getX = (index: number) => {
    if (points.length <= 1) return paddingX;
    return paddingX + (index / (points.length - 1)) * (svgWidth - paddingX * 2);
  };

  const getY = (val: number) => {
    const range = maxVal - minVal || 1;
    const normalized = (val - minVal) / range;
    return svgHeight - paddingY - normalized * (svgHeight - paddingY * 2);
  };

  // Generate smooth cubic bezier SVG path
  const generatePath = () => {
    if (points.length === 0) return '';
    let d = `M ${getX(0)} ${getY(points[0].value)}`;
    for (let i = 0; i < points.length - 1; i++) {
      const x0 = getX(i);
      const y0 = getY(points[i].value);
      const x1 = getX(i + 1);
      const y1 = getY(points[i + 1].value);
      const xc = (x0 + x1) / 2;
      d += ` C ${xc} ${y0}, ${xc} ${y1}, ${x1} ${y1}`;
    }
    return d;
  };

  const generateAreaPath = () => {
    const linePath = generatePath();
    if (!linePath) return '';
    const lastX = getX(points.length - 1);
    const firstX = getX(0);
    const bottomY = svgHeight - paddingY;
    return `${linePath} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`;
  };

  const tabs: { id: MetricTab; label: string; icon: React.ElementType }[] = [
    { id: 'reads', label: 'READS', icon: Eye },
    { id: 'engagement', label: 'ENGAGEMENT', icon: Compass },
    { id: 'saves', label: 'SAVES', icon: Bookmark },
    { id: 'shares', label: 'SHARES', icon: Share2 }
  ];

  const ranges: { id: TimeRange; label: string }[] = [
    { id: '7d', label: '7D' },
    { id: '30d', label: '30D' },
    { id: '90d', label: '90D' },
    { id: '1y', label: 'YEAR' }
  ];

  return (
    <div 
      id="editorial-momentum-card" 
      className="bg-white rounded-2xl border border-sky-50 shadow-sm flex flex-col p-6 mb-6"
    >
      {/* Header with Title & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="text-lg font-bold tracking-tight text-slate-900">
            EDITORIAL MOMENTUM
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Cross-article velocity and audience engagement across Elemental editions.
          </p>
        </div>

        {/* Artistic Flair Metric Tabs */}
        <div className="flex bg-slate-50 p-1 rounded-lg self-start sm:self-auto border border-slate-100">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`momentum-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white shadow-sm text-sky-600'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Analytics Chart Canvas */}
      <div 
        id="momentum-chart-container" 
        className="relative w-full overflow-hidden bg-slate-50/40 rounded-xl p-2 sm:p-4 border border-slate-100/80"
      >
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-44 sm:h-52 overflow-visible"
        >
          <defs>
            <linearGradient id="artisticFlairAuraGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#bae6fd" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="artisticLineStrokeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* Subtle Grid lines */}
          {[0.25, 0.5, 0.75].map((ratio, i) => {
            const y = paddingY + ratio * (svgHeight - paddingY * 2);
            return (
              <line
                key={i}
                x1={paddingX}
                y1={y}
                x2={svgWidth - paddingX}
                y2={y}
                stroke="#f1f5f9"
                strokeWidth="1"
              />
            );
          })}

          {/* Area Fill */}
          <path
            d={generateAreaPath()}
            fill="url(#artisticFlairAuraGradient)"
          />

          {/* Main Curve Line */}
          <path
            d={generatePath()}
            fill="none"
            stroke="url(#artisticLineStrokeGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Interactive Data Point Markers */}
          {points.map((p, i) => {
            const cx = getX(i);
            const cy = getY(p.value);
            const isHovered = hoveredPointIndex === i;

            return (
              <g key={i} className="cursor-pointer">
                {/* Invisible larger target for smooth hovering */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="16"
                  fill="transparent"
                  onMouseEnter={() => setHoveredPointIndex(i)}
                  onMouseLeave={() => setHoveredPointIndex(null)}
                />

                {/* Outer Ring */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 6 : 4}
                  fill="#ffffff"
                  stroke="#0284c7"
                  strokeWidth={isHovered ? 3 : 2}
                  className="transition-all duration-150"
                />

                {/* Bottom X-Axis Label */}
                <text
                  x={cx}
                  y={svgHeight - 8}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#94a3b8"
                  fontWeight={isHovered ? '600' : '500'}
                >
                  {p.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip Overlay */}
        {hoveredPointIndex !== null && points[hoveredPointIndex] && (
          <div
            id="momentum-hover-tooltip"
            className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs shadow-lg pointer-events-none flex items-center gap-2"
          >
            <span className="font-semibold text-sky-300">
              {points[hoveredPointIndex].label}:
            </span>
            <span className="font-mono font-bold">
              {activeTab === 'engagement'
                ? `${points[hoveredPointIndex].value}% completion`
                : `${points[hoveredPointIndex].value.toLocaleString()} ${activeTab}`}
            </span>
          </div>
        )}
      </div>

      {/* Bottom 3-Column Stats matching Artistic Flair specification */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-50 pt-6">
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Avg. Read Time
          </div>
          <div className="text-lg font-bold text-slate-800">
            4m 32s
          </div>
        </div>

        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Completion Rate
          </div>
          <div className="text-lg font-bold text-slate-800">
            74.2%
          </div>
        </div>

        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Velocity Growth
          </div>
          <div className="text-lg font-bold text-emerald-600 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            +12.8%
          </div>
        </div>
      </div>
    </div>
  );
};
