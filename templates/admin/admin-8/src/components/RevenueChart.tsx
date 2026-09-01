/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  BarChart,
  Bar
} from 'recharts';
import { DAILY_REVENUE_DATA } from '../data';
import { TrendingUp, Wallet, ArrowUpRight } from 'lucide-react';

interface RevenueChartProps {
  isRefreshing: boolean;
}

export default function RevenueChart({ isRefreshing }: RevenueChartProps) {
  const [chartMode, setChartMode] = useState<'revenue' | 'cashflow'>('revenue');

  // Custom tooltips with frosted-glass look and perfect typographic hierarchy
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/84 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] p-3 rounded-xl shadow-md">
          <p className="text-xs font-bold text-[#211d1a] mb-1.5">{label}</p>
          <div className="space-y-1">
            {payload.map((item: any, i: number) => (
              <div key={i} className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[10px] font-semibold text-[#706861]">{item.name}</span>
                </div>
                <span className="text-xs font-extrabold text-[#211d1a]">
                  ${item.value.toLocaleString('en-US', { minimumFractionDigits: 0 })}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div 
      id="revenue-chart-section"
      className="bg-white/68 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_12px_40px_rgba(63,42,27,0.08)] flex flex-col h-full"
    >
      {/* Chart Headers and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] sm:text-xs font-bold text-[#706861] uppercase tracking-wider">Financial Streams</span>
            <div className="px-1.5 py-0.5 bg-[#ff6a3d]/10 text-[#ff6a3d] text-[9px] font-extrabold rounded">Live</div>
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-[#211d1a] tracking-tight">
            Revenue & Capital Distribution
          </h3>
        </div>

        {/* Custom Tab Toggles */}
        <div className="grid grid-cols-2 sm:inline-flex bg-black/[0.03] p-1 rounded-xl w-full sm:w-auto">
          <button
            id="chart-toggle-revenue"
            onClick={() => setChartMode('revenue')}
            className={`flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] cursor-pointer ${
              chartMode === 'revenue'
                ? 'bg-white text-[#ff6a3d] shadow-sm'
                : 'text-[#706861] hover:text-[#211d1a]'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Revenue</span>
          </button>
          <button
            id="chart-toggle-cashflow"
            onClick={() => setChartMode('cashflow')}
            className={`flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] cursor-pointer ${
              chartMode === 'cashflow'
                ? 'bg-white text-[#ff3d77] shadow-sm'
                : 'text-[#706861] hover:text-[#211d1a]'
            }`}
          >
            <Wallet className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Cashflow</span>
          </button>
        </div>
      </div>

      {/* Embedded Chart Stage */}
      <div className={`relative flex-1 w-full min-h-[260px] h-[280px] sm:h-[310px] md:h-[340px] transition-opacity duration-300 ${isRefreshing ? 'opacity-40' : 'opacity-100'}`}>
        <ResponsiveContainer width="100%" height="100%">
          {chartMode === 'revenue' ? (
            <AreaChart data={DAILY_REVENUE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff6a3d" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#ff6a3d" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(33,29,26,0.04)" vertical={false} />
              <XAxis 
                dataKey="date" 
                stroke="#9b928a" 
                fontSize={10} 
                fontWeight={600} 
                tickLine={false} 
                axisLine={false} 
                dy={10}
              />
              <YAxis 
                stroke="#9b928a" 
                fontSize={10} 
                fontWeight={600} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(val) => `$${val}`}
                dx={-5}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                name="Gross Revenue"
                stroke="#ff6a3d" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
              />
            </AreaChart>
          ) : (
            <AreaChart data={DAILY_REVENUE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffc94d" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#ffc94d" stopOpacity={0.01} />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff3d77" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#ff3d77" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(33,29,26,0.04)" vertical={false} />
              <XAxis 
                dataKey="date" 
                stroke="#9b928a" 
                fontSize={10} 
                fontWeight={600} 
                tickLine={false} 
                axisLine={false}
                dy={10}
              />
              <YAxis 
                stroke="#9b928a" 
                fontSize={10} 
                fontWeight={600} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(val) => `$${val}`}
                dx={-5}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top" 
                height={36} 
                iconType="circle"
                iconSize={8}
                content={({ payload }) => (
                  <div className="flex gap-3 justify-end text-[10px] font-bold text-[#706861] uppercase tracking-wider">
                    {payload?.map((entry: any, index: number) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
                        <span className="truncate">{entry.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              />
              <Area 
                type="monotone" 
                dataKey="income" 
                name="Net Income"
                stroke="#ffc94d" 
                strokeWidth={2.5} 
                fillOpacity={1} 
                fill="url(#colorIncome)" 
              />
              <Area 
                type="monotone" 
                dataKey="expenses" 
                name="Expenses"
                stroke="#ff3d77" 
                strokeWidth={2.5} 
                fillOpacity={1} 
                fill="url(#colorExpenses)" 
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Helpful context banner below chart */}
      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-black/[0.04] flex items-center justify-between text-[11px] sm:text-xs">
        <div className="flex items-center gap-1.5 sm:gap-2 text-[#706861] truncate">
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff6a3d] shrink-0" />
          <span className="truncate">Average daily revenue: <strong className="text-[#211d1a]">$5,240.00</strong></span>
        </div>
        <span className="text-[#9b928a] font-medium shrink-0 ml-2">Live sync</span>
      </div>
    </div>
  );
}
