import React from 'react';
import { TrendingUp, TrendingDown, Clock, Activity } from 'lucide-react';
import { MARKET_INDICES } from '../data/mockData';
import { Currency } from '../types';

interface TickerRibbonProps {
  currency?: Currency;
}

export const TickerRibbon: React.FC<TickerRibbonProps> = () => {
  return (
    <div className="bg-[#001B3A] border-b border-[#003366] text-white text-xs py-2 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5 pr-4 border-r border-[#003366] shrink-0 text-slate-300 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A021]">
            Market Live
          </span>
        </div>

        <div className="flex-1 overflow-x-auto no-scrollbar flex items-center space-x-6 pl-4">
          {MARKET_INDICES.map((idx) => {
            const isPos = idx.change >= 0;
            return (
              <div
                key={idx.symbol}
                className="flex items-center gap-2 whitespace-nowrap shrink-0 hover:bg-[#002147] px-2 py-0.5 rounded-lg transition-colors border border-transparent hover:border-[#003366]"
              >
                <span className="font-bold text-slate-200 text-xs">{idx.symbol}</span>
                <span className="text-slate-300 font-mono text-xs">
                  {idx.value.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <span
                  className={`flex items-center text-[10px] font-bold ${
                    isPos ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {isPos ? (
                    <TrendingUp className="w-3 h-3 mr-0.5 inline" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-0.5 inline" />
                  )}
                  {isPos ? '+' : ''}
                  {idx.changePercent}%
                </span>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-[#003366] text-[10px] uppercase tracking-wider text-slate-400 shrink-0">
          <Activity className="w-3.5 h-3.5 text-[#C5A021]" />
          <span>Real-time Institutional Feeds</span>
        </div>
      </div>
    </div>
  );
};

