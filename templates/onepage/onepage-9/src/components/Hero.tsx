import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, BarChart2, Shield, Activity, ArrowUp, Zap, ChevronRight, Layers } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenConsultationModal }) => {
  const [activeQuarter, setActiveQuarter] = useState<'Q1' | 'Q2' | 'Q3' | 'Q4' | 'YTD'>('Q4');

  // Chart dataset for quarters
  const chartData = {
    Q1: { revenue: '+14.2%', efficiency: '+22.0%', retention: '91.8%', roi: '3.2x', trend: '+12.4%', points: [30, 45, 40, 55, 60, 68] },
    Q2: { revenue: '+19.8%', efficiency: '+29.4%', retention: '92.5%', roi: '3.9x', trend: '+15.1%', points: [45, 52, 58, 64, 72, 78] },
    Q3: { revenue: '+24.1%', efficiency: '+36.2%', retention: '93.6%', roi: '4.4x', trend: '+16.8%', points: [52, 60, 68, 75, 82, 88] },
    Q4: { revenue: '+28.4%', efficiency: '+41.8%', retention: '94.2%', roi: '4.8x', trend: '+18.6%', points: [60, 72, 78, 88, 92, 98] },
    YTD: { revenue: '+32.6%', efficiency: '+46.5%', retention: '96.1%', roi: '5.2x', trend: '+22.4%', points: [25, 42, 60, 78, 88, 98] }
  };

  const currentMetrics = chartData[activeQuarter];

  return (
    <section id="home" className="relative pt-6 pb-20 md:pt-12 md:pb-28 bg-[#FAF9F6] text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Editorial Grid Lines Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Signature Business Signal line background accent */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Label & Date Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200 font-mono text-xs">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-slate-900 text-white font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>BUSINESS INTELLIGENCE / 2026</span>
          </div>

          <div className="hidden sm:flex items-center space-x-6 text-slate-500 uppercase tracking-widest text-[11px]">
            <span>SYSTEM STATUS: <strong className="text-slate-900 font-bold">OPTIMAL</strong></span>
            <span>•</span>
            <span>DATA LATENCY: <strong className="text-slate-900 font-bold">&lt; 12ms</strong></span>
            <span>•</span>
            <span>RELIABILITY: <strong className="text-slate-900 font-bold">99.999%</strong></span>
          </div>
        </div>

        {/* Hero Main Editorial Header */}
        <div className="max-w-4xl space-y-6">
          
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 block">
              01 — EXECUTIVE DECISION ARCHITECTURE
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 uppercase leading-[1.05]">
              TURN COMPLEX BUSINESS PROBLEMS INTO <span className="bg-slate-900 text-white px-2.5 py-0.5 font-extrabold inline-block mt-1">CLEAR DECISIONS.</span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal max-w-3xl">
            We partner with executive boards and technology leaders to engineer high-throughput cloud architectures, deploy domain-specific AI models, and optimize enterprise capital allocation.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 border border-slate-900 shadow-md group"
            >
              <span>01 — START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 ml-2 text-emerald-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-2xs"
            >
              <span>EXPLORE CAPABILITY MATRIX</span>
            </button>
          </div>
        </div>

        {/* ================= EXECUTIVE BUSINESS PERFORMANCE DASHBOARD ================= */}
        <div className="mt-16 bg-white border border-slate-300 rounded-none shadow-xl p-6 sm:p-8 space-y-8 relative">
          
          {/* Section Header inside Dashboard */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>EXECUTIVE COMMAND CENTER — BUSINESS PERFORMANCE</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1 font-sans">
                Real-Time Operational Telemetry &amp; Growth Benchmarks
              </h3>
            </div>

            {/* Quarter Selector Tabs */}
            <div className="flex items-center space-x-1 bg-slate-100 p-1 border border-slate-200 font-mono text-xs">
              {(['Q1', 'Q2', 'Q3', 'Q4', 'YTD'] as const).map((q) => (
                <button
                  key={q}
                  onClick={() => setActiveQuarter(q)}
                  className={`px-3 py-1.5 font-bold transition-all ${
                    activeQuarter === q
                      ? 'bg-slate-900 text-emerald-400 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Metric Counter Displays */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 bg-[#F8F9FA] border border-slate-200/80 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                REVENUE GROWTH
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-950">
                  {currentMetrics.revenue}
                </span>
                <span className="inline-flex items-center text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                  <ArrowUp className="w-3 h-3 mr-0.5" />
                  Q/Q
                </span>
              </div>
              <p className="text-xs text-slate-500 font-sans">Compounded expansion velocity</p>
            </div>

            <div className="p-5 bg-[#F8F9FA] border border-slate-200/80 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                EFFICIENCY BOOST
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-950">
                  {currentMetrics.efficiency}
                </span>
                <span className="inline-flex items-center text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                  <ArrowUp className="w-3 h-3 mr-0.5" />
                  OpEx
                </span>
              </div>
              <p className="text-xs text-slate-500 font-sans">Automated workflow savings</p>
            </div>

            <div className="p-5 bg-[#F8F9FA] border border-slate-200/80 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                CLIENT RETENTION
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-950">
                  {currentMetrics.retention}
                </span>
                <span className="inline-flex items-center text-[10px] font-mono font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                  SLA 99.9%
                </span>
              </div>
              <p className="text-xs text-slate-500 font-sans">Post-implementation audit score</p>
            </div>

            <div className="p-5 bg-[#F8F9FA] border border-slate-200/80 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                AVERAGE ROI
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-600">
                  {currentMetrics.roi}
                </span>
                <span className="inline-flex items-center text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                  3-Yr Benchmark
                </span>
              </div>
              <p className="text-xs text-slate-500 font-sans">Return on capital invested</p>
            </div>

          </div>

          {/* Interactive SVG Chart Panel */}
          <div className="bg-slate-950 text-white p-6 border border-slate-800 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <div>
                  <h4 className="text-sm font-mono font-bold text-white tracking-wider uppercase">
                    PERFORMANCE TRAJECTORY ({activeQuarter})
                  </h4>
                  <p className="text-xs text-slate-400">Quarterly growth velocity vs baseline target</p>
                </div>
              </div>

              <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 border border-emerald-800">
                <ArrowUp className="w-3.5 h-3.5" />
                <span>↑ {currentMetrics.trend} vs previous quarter</span>
              </div>
            </div>

            {/* SVG Animated Growth Chart Line */}
            <div className="relative pt-4 pb-2">
              <svg className="w-full h-36 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                {/* Horizontal Gridlines */}
                <line x1="0" y1="20" x2="500" y2="20" stroke="#334155" strokeDasharray="4 4" strokeWidth="0.8" />
                <line x1="0" y1="60" x2="500" y2="60" stroke="#334155" strokeDasharray="4 4" strokeWidth="0.8" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#334155" strokeDasharray="4 4" strokeWidth="0.8" />

                {/* Gradient Fill under line */}
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Path Area */}
                <path
                  d={`M 0,${120 - currentMetrics.points[0]} 
                     L 100,${120 - currentMetrics.points[1]} 
                     L 200,${120 - currentMetrics.points[2]} 
                     L 300,${120 - currentMetrics.points[3]} 
                     L 400,${120 - currentMetrics.points[4]} 
                     L 500,${120 - currentMetrics.points[5]} 
                     L 500,120 L 0,120 Z`}
                  fill="url(#chartGradient)"
                />

                {/* Main Curve Line */}
                <path
                  d={`M 0,${120 - currentMetrics.points[0]} 
                     L 100,${120 - currentMetrics.points[1]} 
                     L 200,${120 - currentMetrics.points[2]} 
                     L 300,${120 - currentMetrics.points[3]} 
                     L 400,${120 - currentMetrics.points[4]} 
                     L 500,${120 - currentMetrics.points[5]}`}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />

                {/* Chart Data Points */}
                {currentMetrics.points.map((pt, idx) => (
                  <circle
                    key={idx}
                    cx={idx * 100}
                    cy={120 - pt}
                    r="4"
                    fill="#10b981"
                    stroke="#020617"
                    strokeWidth="2"
                    className="hover:r-6 transition-all cursor-pointer"
                  />
                ))}
              </svg>

              {/* X Axis Labels */}
              <div className="flex justify-between font-mono text-[10px] text-slate-400 mt-2">
                <span>MONTH 01</span>
                <span>MONTH 02</span>
                <span>MONTH 03</span>
                <span>MONTH 04</span>
                <span>MONTH 05</span>
                <span className="text-emerald-400 font-bold">CURRENT</span>
              </div>
            </div>

            {/* Bottom Telemetry Ticker */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>LIVE FEED: Cloud FinOps optimization engine running</span>
              </div>
              <button
                onClick={onOpenConsultationModal}
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 underline underline-offset-4 uppercase font-bold text-[10px] tracking-wider"
              >
                <span>Request Custom Architecture Review</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
