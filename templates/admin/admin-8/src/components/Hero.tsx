/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Calendar, TrendingUp } from 'lucide-react';
import { DateRange } from '../types';

interface HeroProps {
  dateRange: DateRange;
  totalSalesCount: number;
  grossRevenue: number;
}

export default function Hero({ dateRange, totalSalesCount, grossRevenue }: HeroProps) {
  return (
    <section 
      id="dashboard-hero-section"
      className="relative overflow-hidden bg-white/68 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_12px_40px_rgba(63,42,27,0.08)]"
    >
      {/* Decorative subtle background aura glow */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-[#ff6a3d]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-[#ffc94d]/5 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-6 z-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ff6a3d]/8 border border-[#ff6a3d]/15 text-[#ff6a3d] rounded-full text-xs font-bold tracking-tight mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse shrink-0" />
            <span className="truncate">Interactive Admin Control Center</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#211d1a] tracking-tight leading-tight">
            An easy way to manage sales with <span className="text-[#ff6a3d]">care and precision</span>.
          </h2>
          
          <p className="text-xs sm:text-sm text-[#706861] mt-2.5 sm:mt-3 leading-relaxed">
            Monitor real-time revenue cycles, compile downloadable ledger audits, oversee stock performance, and cross-reference marketing channel statistics from a unified, high-fidelity operations room.
          </p>
        </div>

        {/* Quick reporting stats right on the hero section */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full md:w-72 lg:w-80 shrink-0">
          <div className="bg-white/68 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] rounded-[10px] p-3.5 sm:p-4 flex flex-col justify-between shadow-xs">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-[#9b928a] uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffc94d] shrink-0" />
              <span className="truncate">Period</span>
            </div>
            <div className="mt-3 sm:mt-4">
              <span className="block text-xs font-bold text-[#211d1a]">Active Range</span>
              <span className="block text-[10px] text-[#706861] mt-0.5 truncate">{dateRange.startDate} - {dateRange.endDate}</span>
            </div>
          </div>

          <div className="bg-white/68 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] rounded-[10px] p-3.5 sm:p-4 flex flex-col justify-between shadow-xs">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-[#9b928a] uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff3d77] shrink-0" />
              <span className="truncate">Volume</span>
            </div>
            <div className="mt-3 sm:mt-4">
              <span className="block text-sm sm:text-[15px] font-extrabold text-[#ff6a3d]">{totalSalesCount} Sales</span>
              <span className="block text-[10px] text-[#706861] mt-0.5 font-medium truncate">
                ${grossRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })} Gross
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
