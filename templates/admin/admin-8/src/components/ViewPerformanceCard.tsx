/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { Eye, MousePointer, Target, TrendingUp, BarChart2 } from 'lucide-react';
import { ViewPerformance } from '../types';

interface ViewPerformanceCardProps {
  performanceData: ViewPerformance[];
}

export default function ViewPerformanceCard({ performanceData }: ViewPerformanceCardProps) {
  
  // Compute overall aggregates
  const aggregates = useMemo(() => {
    const totalViews = performanceData.reduce((sum, item) => sum + item.views, 0);
    const totalClicks = performanceData.reduce((sum, item) => sum + item.clicks, 0);
    const totalSales = performanceData.reduce((sum, item) => sum + item.sales, 0);
    const averageCtr = totalViews > 0 ? (totalClicks / totalViews) * 100 : 0;
    const conversionRate = totalClicks > 0 ? (totalSales / totalClicks) * 100 : 0;

    return {
      totalViews,
      totalClicks,
      totalSales,
      averageCtr,
      conversionRate
    };
  }, [performanceData]);

  return (
    <div 
      id="performance-card-panel"
      className="bg-white/68 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] rounded-2xl p-6 shadow-[0_12px_40px_rgba(63,42,27,0.08)] flex flex-col h-full"
    >
      {/* Card Header */}
      <div className="mb-6">
        <span className="text-xs font-bold text-[#706861] uppercase tracking-wider">Acquisition Channels</span>
        <h3 className="text-lg font-extrabold text-[#211d1a] tracking-tight mt-0.5">
          Total View Performance
        </h3>
      </div>

      {/* Aggregate Metrics Grid */}
      <div className="grid grid-cols-3 gap-3 bg-black/[0.02] border border-black/[0.04] rounded-2xl p-4 mb-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[10px] font-bold text-[#706861] uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5 text-[#ff6a3d] shrink-0" />
            <span className="truncate">View Count</span>
          </div>
          <span className="text-sm md:text-base font-extrabold text-[#211d1a] mt-2 block">
            {aggregates.totalViews.toLocaleString()}
          </span>
          <span className="text-[9px] text-[#9b928a] mt-0.5">Total Impressions</span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[10px] font-bold text-[#706861] uppercase tracking-wider">
            <MousePointer className="w-3.5 h-3.5 text-[#ffc94d] shrink-0" />
            <span className="truncate">Average CTR</span>
          </div>
          <span className="text-sm md:text-base font-extrabold text-[#211d1a] mt-2 block">
            {aggregates.averageCtr.toFixed(1)}%
          </span>
          <span className="text-[9px] text-[#9b928a] mt-0.5">Click-Through Rate</span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[10px] font-bold text-[#706861] uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-[#ff3d77] shrink-0" />
            <span className="truncate">Sales / CR</span>
          </div>
          <span className="text-sm md:text-base font-extrabold text-[#ff6a3d] mt-2 block">
            {aggregates.totalSales} <span className="text-[10px] text-[#706861] font-semibold">({aggregates.conversionRate.toFixed(1)}%)</span>
          </span>
          <span className="text-[9px] text-[#9b928a] mt-0.5">Conversion Yield</span>
        </div>
      </div>

      {/* Breakdown bar list */}
      <div className="flex-1 space-y-4">
        <span className="block text-[10px] font-bold text-[#9b928a] uppercase tracking-wider mb-2">Performance by Stream</span>
        {performanceData.map((item, i) => {
          // Find max views to align bars relative to each other
          const maxViews = Math.max(...performanceData.map(p => p.views));
          const percentageOfMax = maxViews > 0 ? (item.views / maxViews) * 100 : 0;

          return (
            <div key={i} className="flex flex-col gap-1.5 pb-3 border-b border-black/[0.03] last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between text-xs font-semibold text-[#211d1a]">
                <span className="font-bold">{item.channel}</span>
                <span className="text-[#706861]">{item.views.toLocaleString()} views <span className="text-[10px] font-medium text-[#9b928a] ml-1">({item.sales} conversions)</span></span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-black/[0.03] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#ffc94d] to-[#ff6a3d] rounded-full"
                    style={{ width: `${percentageOfMax}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-[#ff3d77] w-10 text-right">
                  {item.ctr.toFixed(1)}% CTR
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
