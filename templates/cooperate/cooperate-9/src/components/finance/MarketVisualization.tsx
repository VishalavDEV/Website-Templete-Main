import React, { useState, useEffect } from 'react';
import { TrendingUp, Activity, Globe, DollarSign, Percent, Shield, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const MarketVisualization: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trends' | 'indicators' | 'sectors'>('trends');
  const [tick, setTick] = useState(0);

  // Subtle continuous gentle wave animation tick
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => (prev + 1) % 1000);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const illustrativeSectors = [
    { name: 'Core Infrastructure & Real Assets', change: '+8.4%', trend: 'up', yieldRate: '7.8% yield', riskTier: 'Tier 1 Prime' },
    { name: 'Senior Secured Private Credit', change: '+11.2%', trend: 'up', yieldRate: '9.4% yield', riskTier: 'Asset-Backed' },
    { name: 'Cross-Border Corporate Debt', change: '+4.9%', trend: 'up', yieldRate: '6.5% yield', riskTier: 'Investment Grade' },
    { name: 'Technology Growth ARR Facilities', change: '+14.6%', trend: 'up', yieldRate: '11.8% yield', riskTier: 'Senior Tranche' },
    { name: 'Renewable Transition Project Bonds', change: '+6.8%', trend: 'up', yieldRate: '7.2% yield', riskTier: 'Green Certified' },
  ];

  const macroIndicators = [
    { label: 'Global 10Y Benchmark', value: '3.85%', delta: '-12 bps', note: 'Stabilizing terminal rate pricing' },
    { label: 'Core CPI Momentum', value: '2.40%', delta: '-0.3%', note: 'Disinflationary glide path' },
    { label: 'EUR / USD Mid-Market', value: '1.0920', delta: '+0.4%', note: 'Balanced transatlantic trade channel' },
    { label: 'Private Credit Spread', value: '480 bps', delta: '-25 bps', note: 'Tightening risk premium on tier-1 credit' },
  ];

  return (
    <div id="market-intelligence-visualizer" className="financial-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/10 shadow-2xl">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
      
      {/* Header with Illustrative Tag */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              VANTAGE MACRO INTELLIGENCE RADAR
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Global market cross-currents, interest rate trajectories & multi-asset telemetry
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[10px] uppercase tracking-wider">
            Illustrative Data
          </span>
          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400 font-mono text-[10px]">
            Model V-9.4
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 py-4 border-b border-white/5 relative z-10 text-xs font-mono">
        <button
          onClick={() => setActiveTab('trends')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            activeTab === 'trends'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          Yield Curve & Capital Flows
        </button>
        <button
          onClick={() => setActiveTab('indicators')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            activeTab === 'indicators'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          Macro Indicators
        </button>
        <button
          onClick={() => setActiveTab('sectors')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            activeTab === 'sectors'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          Sector Asset Performance
        </button>
      </div>

      {/* Dynamic Content Views */}
      <div className="pt-6 relative z-10 min-h-[300px]">
        {activeTab === 'trends' && (
          <div className="space-y-6">
            {/* SVG Abstract Financial Wave & Curve */}
            <div className="h-44 sm:h-52 w-full bg-[#06080E] rounded-xl border border-white/5 p-4 relative overflow-hidden flex items-end">
              {/* Coordinates Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none text-[9px] font-mono text-slate-400">
                <div className="border-b border-white/5 pb-1 flex justify-between">
                  <span>Target Yield: 12.0%</span>
                  <span>95% Confidence Band</span>
                </div>
                <div className="border-b border-white/5 pb-1 flex justify-between">
                  <span>Neutral Spread: 6.0%</span>
                  <span>Macro Risk Free Baseline</span>
                </div>
                <div className="flex justify-between">
                  <span>Drawdown Floor: 0.0%</span>
                  <span>Model Time Horizon: 10Y</span>
                </div>
              </div>

              {/* Dynamic SVG Curves */}
              <svg className="w-full h-full absolute inset-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 150">
                <defs>
                  <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Primary Asset Curve (Emerald) */}
                <path
                  d={`M 0,110 Q 75,${80 + Math.sin(tick * 0.1) * 6} 150,${65 + Math.cos(tick * 0.1) * 8} T 300,${45 + Math.sin(tick * 0.08) * 5} T 420,${25 + Math.cos(tick * 0.08) * 4} L 500,${15 + Math.sin(tick * 0.05) * 3} L 500,150 L 0,150 Z`}
                  fill="url(#curveGradient)"
                />
                <path
                  d={`M 0,110 Q 75,${80 + Math.sin(tick * 0.1) * 6} 150,${65 + Math.cos(tick * 0.1) * 8} T 300,${45 + Math.sin(tick * 0.08) * 5} T 420,${25 + Math.cos(tick * 0.08) * 4} L 500,${15 + Math.sin(tick * 0.05) * 3}`}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.5"
                />

                {/* Secondary Defensive Curve (Gold) */}
                <path
                  d={`M 0,130 Q 100,${115 + Math.cos(tick * 0.06) * 5} 220,${95 + Math.sin(tick * 0.07) * 6} T 380,${70 + Math.cos(tick * 0.05) * 5} L 500,${55 + Math.sin(tick * 0.05) * 4}`}
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                />

                {/* Animated Pulsing Data Nodes */}
                <circle cx="150" cy={65 + Math.cos(tick * 0.1) * 8} r="4" fill="#10B981" className="animate-ping opacity-75" />
                <circle cx="150" cy={65 + Math.cos(tick * 0.1) * 8} r="3" fill="#FFFFFF" />

                <circle cx="300" cy={45 + Math.sin(tick * 0.08) * 5} r="4" fill="#10B981" className="animate-ping opacity-75" />
                <circle cx="300" cy={45 + Math.sin(tick * 0.08) * 5} r="3" fill="#FFFFFF" />

                <circle cx="420" cy={25 + Math.cos(tick * 0.08) * 4} r="5" fill="#34D399" />
                <circle cx="420" cy={25 + Math.cos(tick * 0.08) * 4} r="2.5" fill="#06080E" />
              </svg>
            </div>

            {/* Micro Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-slate-400 font-mono text-[10px] block">VANTAGE ALPHA</span>
                <span className="text-emerald-400 font-semibold font-mono text-sm">+340 bps</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-slate-400 font-mono text-[10px] block">VOLATILITY (10Y)</span>
                <span className="text-slate-200 font-semibold font-mono text-sm">6.2% Low</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-slate-400 font-mono text-[10px] block">MAX DRAWDOWN HEDGE</span>
                <span className="text-emerald-400 font-semibold font-mono text-sm">-4.1% Floor</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-slate-400 font-mono text-[10px] block">MONTE CARLO RUNS</span>
                <span className="text-slate-200 font-semibold font-mono text-sm">50,000 / Day</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'indicators' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {macroIndicators.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#06080E] border border-white/5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-slate-400 font-sans block">{item.label}</span>
                    <span className="text-2xl font-serif font-normal text-white mt-1 block">{item.value}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs font-medium">
                    {item.delta}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-white/5 font-mono">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'sectors' && (
          <div className="space-y-2">
            {illustrativeSectors.map((sector, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#06080E] border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-medium text-slate-200">{sector.name}</span>
                  <span className="hidden sm:inline px-2 py-0.5 rounded bg-white/5 text-slate-400 text-[10px] font-mono">
                    {sector.riskTier}
                  </span>
                </div>
                <div className="flex items-center gap-4 font-mono">
                  <span className="text-slate-400">{sector.yieldRate}</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    {sector.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>Source: Vantage Quantitative Strategy Desk</span>
        <span>Simulated illustrative indices for model demonstration</span>
      </div>
    </div>
  );
};
