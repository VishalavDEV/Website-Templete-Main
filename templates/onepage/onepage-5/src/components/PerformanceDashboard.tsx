import React, { useState } from 'react';
import { Activity, ArrowUp, ArrowDown, TrendingUp, ShieldCheck, Zap, BarChart2, CheckCircle2 } from 'lucide-react';

export const PerformanceDashboard: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'latency' | 'opex' | 'revenue' | 'uptime'>('latency');

  const metricConfigs = {
    latency: {
      title: 'SYSTEM LATENCY REDUCTION',
      value: '-72.4%',
      baseline: '480ms',
      achieved: '132ms',
      badge: 'SPEED BOOST',
      isGoodPositive: false,
      description: 'Distributed Kubernetes event-mesh architecture eliminating API queue bottlenecks.',
      points: [480, 410, 320, 240, 180, 132]
    },
    opex: {
      title: 'ANNUAL OPEX OPTIMIZATION',
      value: '-34.2%',
      baseline: '$12.4M',
      achieved: '$8.15M',
      badge: 'FINOPS SAVINGS',
      isGoodPositive: false,
      description: 'Automated server auto-scaling, spot instance allocation, and database right-sizing.',
      points: [12.4, 11.5, 10.2, 9.4, 8.8, 8.15]
    },
    revenue: {
      title: 'COMPOUNDED REVENUE ACCELERATION',
      value: '+28.4%',
      baseline: '$42M ARR',
      achieved: '$53.9M ARR',
      badge: 'VALUATION EXPANSION',
      isGoodPositive: true,
      description: 'Accelerated release cadence from quarterly to 15 deployments per week.',
      points: [42, 44, 46.5, 49, 51.2, 53.9]
    },
    uptime: {
      title: 'ENTERPRISE SLA AVAILABILITY',
      value: '99.999%',
      baseline: '99.1%',
      achieved: '99.999%',
      badge: 'ZERO DOWNTIME',
      isGoodPositive: true,
      description: 'Multi-region edge failover protocols with real-time state synchronization.',
      points: [99.1, 99.4, 99.7, 99.9, 99.98, 99.999]
    }
  };

  const current = metricConfigs[activeMetric];

  return (
    <section id="performance" className="py-24 bg-[#FAF9F6] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-300">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-slate-900">04 /</span>
              <span>EXECUTIVE KPI TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
              PERFORMANCE, MEASURED.
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-600 max-w-md">
            Audited financial and operational impact metrics across global enterprise deployments.
          </p>
        </div>

        {/* ================= INTERACTIVE PERFORMANCE CONSOLE ================= */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Metric Selector */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-slate-400 font-bold uppercase tracking-widest block mb-2 text-[10px]">SELECT TELEMETRY VECTOR:</span>
            
            {(['latency', 'opex', 'revenue', 'uptime'] as const).map((key) => {
              const item = metricConfigs[key];
              const isSelected = activeMetric === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveMetric(key)}
                  className={`w-full text-left p-4 border transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400">{item.badge}</span>
                    <span className={`text-xs font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-900'}`}>
                      {item.value}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold mt-1 font-sans uppercase">{item.title}</h4>
                </button>
              );
            })}
          </div>

          {/* Right Visual Interactive KPI Display Card */}
          <div className="lg:col-span-8 bg-white border border-slate-300 p-6 sm:p-8 space-y-6 shadow-lg">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest">
                  AUDITED BENCHMARK — {current.badge}
                </span>
                <h3 className="text-2xl font-bold font-sans text-slate-950 mt-1 uppercase">
                  {current.title}
                </h3>
              </div>

              <div className="flex items-center space-x-4 font-mono text-xs">
                <div className="p-2 bg-slate-100 border border-slate-200">
                  <span className="text-slate-400 text-[10px] block">BASELINE</span>
                  <span className="font-bold text-slate-700">{current.baseline}</span>
                </div>
                <div className="p-2 bg-slate-900 text-white border border-slate-900">
                  <span className="text-emerald-400 text-[10px] block">ACHIEVED</span>
                  <span className="font-bold">{current.achieved}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 font-sans leading-relaxed">
              {current.description}
            </p>

            {/* SVG Interactive Chart Panel */}
            <div className="bg-slate-950 text-white p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
                <span className="text-emerald-400 font-bold uppercase">TRAJECTORY ANALYSIS</span>
                <span className="text-slate-400 text-[10px]">6-MONTH AUDIT CYCLE</span>
              </div>

              <div className="relative pt-4 pb-2">
                <svg className="w-full h-36 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                  <line x1="0" y1="30" x2="500" y2="30" stroke="#334155" strokeDasharray="4 4" strokeWidth="0.8" />
                  <line x1="0" y1="70" x2="500" y2="70" stroke="#334155" strokeDasharray="4 4" strokeWidth="0.8" />

                  <path
                    d={`M 0,${100 - (current.points[0] / (current.points[0] * 1.5)) * 80} 
                       L 100,${100 - (current.points[1] / (current.points[0] * 1.5)) * 80} 
                       L 200,${100 - (current.points[2] / (current.points[0] * 1.5)) * 80} 
                       L 300,${100 - (current.points[3] / (current.points[0] * 1.5)) * 80} 
                       L 400,${100 - (current.points[4] / (current.points[0] * 1.5)) * 80} 
                       L 500,${100 - (current.points[5] / (current.points[0] * 1.5)) * 80}`}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                  />

                  {current.points.map((pt, idx) => (
                    <circle
                      key={idx}
                      cx={idx * 100}
                      cy={100 - (pt / (current.points[0] * 1.5)) * 80}
                      r="4"
                      fill="#10b981"
                    />
                  ))}
                </svg>

                <div className="flex justify-between font-mono text-[10px] text-slate-400 mt-2">
                  <span>MONTH 01</span>
                  <span>MONTH 02</span>
                  <span>MONTH 03</span>
                  <span>MONTH 04</span>
                  <span>MONTH 05</span>
                  <span className="text-emerald-400 font-bold">MONTH 06</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
