/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign, RefreshCw } from 'lucide-react';
import { KPI } from '../types';

interface StatCardsProps {
  kpis: KPI[];
}

export default function StatCards({ kpis }: StatCardsProps) {
  
  // Helper to render high-performance, lightweight inline SVG sparkline
  const renderSparkline = (data: number[], color: string) => {
    if (!data || data.length < 2) return null;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    
    const width = 120;
    const height = 40;
    const padding = 2;
    
    const points = data.map((val, idx) => {
      const x = (idx / (data.length - 1)) * (width - padding * 2) + padding;
      const y = height - ((val - min) / range) * (height - padding * 2) - padding;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        {/* Stroke Line */}
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
        {/* Under-glow Gradient */}
        <path
          d={`M ${padding},${height} L ${points} L ${width - padding},${height} Z`}
          fill={`url(#glow-${color.replace('#', '')})`}
          opacity="0.12"
        />
        <defs>
          <linearGradient id={`glow-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  const getThemeColors = (id: string) => {
    switch(id) {
      case 'net-income':
        return {
          bg: 'hover:border-[#ff6a3d]/20',
          accent: '#ff6a3d',
          badgeBg: 'bg-[#ff6a3d]/10 text-[#ff6a3d]',
        };
      case 'total-return':
        return {
          bg: 'hover:border-[#ffc94d]/20',
          accent: '#ffc94d',
          badgeBg: 'bg-[#ffc94d]/15 text-[#b58514]',
        };
      case 'revenue':
        return {
          bg: 'hover:border-[#ff3d77]/20',
          accent: '#ff3d77',
          badgeBg: 'bg-[#ff3d77]/10 text-[#ff3d77]',
        };
      default:
        return {
          bg: 'hover:border-black/[0.1]',
          accent: '#706861',
          badgeBg: 'bg-black/[0.04] text-[#706861]',
        };
    }
  };

  return (
    <div id="kpi-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {kpis.map((kpi, idx) => {
        const theme = getThemeColors(kpi.id);
        // On 2-col tablet layout, make the 3rd card span full width for nice symmetry
        const isThirdOnTablet = idx === 2;
        return (
          <div
            key={kpi.id}
            id={`kpi-card-${kpi.id}`}
            className={`relative overflow-hidden bg-white/68 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_12px_40px_rgba(63,42,27,0.08)] hover:shadow-md transition-all duration-300 ${theme.bg} ${isThirdOnTablet ? 'sm:col-span-2 lg:col-span-1' : ''} group`}
          >
            {/* Soft background active hover bubble */}
            <div 
              className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
              style={{ backgroundColor: theme.accent }}
            />

            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-bold text-[#706861] uppercase tracking-wider">{kpi.title}</span>
              <span className={`inline-flex items-center gap-0.5 px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold ${theme.badgeBg}`}>
                {kpi.isPositive ? (
                  <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
                ) : (
                  <ArrowDownRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
                )}
                <span>{kpi.change}</span>
              </span>
            </div>

            <div className="mt-3 sm:mt-4 flex items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#211d1a] tracking-tight">
                  {kpi.value}
                </h3>
                <span className="text-[10px] text-[#9b928a] font-medium block mt-0.5 sm:mt-1">{kpi.timeframe}</span>
              </div>

              {/* Sparkline Visualizer */}
              <div className="w-24 sm:w-28 shrink-0 pb-1" aria-hidden="true">
                {renderSparkline(kpi.trendData, theme.accent)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
