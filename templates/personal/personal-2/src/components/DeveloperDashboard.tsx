import { useState, useEffect } from 'react';
import { Activity, GitCommit, Clock, Cpu, Server, Terminal, Shield, Zap, RefreshCw } from 'lucide-react';

export default function DeveloperDashboard() {
  const [currentTime, setCurrentTime] = useState('');
  const [activeTab, setActiveTab] = useState<'metrics' | 'languages' | 'heatmap'>('metrics');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate 26 weeks x 7 days pseudo commit heatmap
  const weeks = Array.from({ length: 24 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const rand = Math.random();
      const count = rand > 0.7 ? Math.floor(Math.random() * 8) + 2 : rand > 0.35 ? 1 : 0;
      return { day: d, week: w, count };
    })
  );

  const getHeatmapColor = (count: number) => {
    if (count === 0) return 'bg-slate-900 border-slate-800';
    if (count < 3) return 'bg-cyan-950 border-cyan-900 text-cyan-400';
    if (count < 6) return 'bg-cyan-600 border-cyan-500 text-white';
    return 'bg-cyan-400 border-cyan-300 text-slate-950';
  };

  return (
    <section id="dashboard" className="py-24 relative overflow-hidden bg-[#05070f] border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full cyber-glass border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>REAL-TIME TELEMETRY</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            DEVELOPER <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">DASHBOARD</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Live infrastructure status, system uptime, and open-source contribution telemetry.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. System Health & Core Metrics (Top Left 8-col) */}
          <div className="lg:col-span-8 cyber-glass rounded-3xl p-6 sm:p-8 border border-slate-800/90 space-y-6">
            
            {/* HUD Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-heading font-bold text-base sm:text-lg text-white">
                  Production AI Command Core: OPTIMAL
                </span>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 text-slate-200">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>BLR (IST): {currentTime || '12:00:00'}</span>
                </span>
                <span className="text-emerald-400 font-bold hidden sm:inline">Uptime: 99.98%</span>
              </div>
            </div>

            {/* Metric Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-mono text-[10px] text-slate-500 uppercase block">Model Response P50</span>
                <span className="font-heading font-extrabold text-2xl text-cyan-400">38 ms</span>
                <span className="font-mono text-[10px] text-emerald-400 block">Fast TensorRT Core</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-mono text-[10px] text-slate-500 uppercase block">Annual Commits</span>
                <span className="font-heading font-extrabold text-2xl text-violet-400">1,248+</span>
                <span className="font-mono text-[10px] text-slate-400 block">48 Repositories</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-mono text-[10px] text-slate-500 uppercase block">Daily Inference Tokens</span>
                <span className="font-heading font-extrabold text-2xl text-emerald-400">2.4M</span>
                <span className="font-mono text-[10px] text-slate-400 block">Zero-drop rate</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-mono text-[10px] text-slate-500 uppercase block">Security Patch Level</span>
                <span className="font-heading font-extrabold text-2xl text-amber-400">SOC2 Type II</span>
                <span className="font-mono text-[10px] text-slate-400 block">Zero vulnerabilities</span>
              </div>
            </div>

            {/* GitHub Commits Heatmap */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400 uppercase font-bold flex items-center gap-2">
                  <GitCommit className="w-4 h-4 text-cyan-400" />
                  GitHub Contribution Activity (Last 6 Months)
                </span>
                <span className="font-mono text-[11px] text-slate-500">Continuous Delivery</span>
              </div>

              {/* Heatmap Grid */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 overflow-x-auto">
                <div className="flex gap-1 min-w-[500px]">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1 flex-1">
                      {week.map((cell, dIdx) => (
                        <div
                          key={dIdx}
                          title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${cell.count} commits`}
                          className={`w-full aspect-square rounded-[3px] border transition-all ${getHeatmapColor(
                            cell.count
                          )}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-3">
                  <span>Less Active</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-slate-900 border border-slate-800" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-950 border border-cyan-900" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-600 border border-cyan-500" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400 border border-cyan-300" />
                  </div>
                  <span>High Velocity</span>
                </div>
              </div>
            </div>

          </div>

          {/* 2. Codebase Languages & Tech Breakdown (Right 4-col) */}
          <div className="lg:col-span-4 cyber-glass rounded-3xl p-6 sm:p-8 border border-slate-800/90 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-heading font-bold text-base text-white">
                  Codebase Distribution
                </span>
                <span className="font-mono text-xs text-slate-500">100% Typed</span>
              </div>

              {/* Progress bars for languages */}
              <div className="space-y-3.5">
                {[
                  { name: 'Python (PyTorch / FastAPI / LangChain)', pct: 48, color: '#38bdf8' },
                  { name: 'TypeScript & React / Next.js', pct: 28, color: '#818cf8' },
                  { name: 'SQL (PostgreSQL / pgvector)', pct: 12, color: '#10b981' },
                  { name: 'CUDA / C++ / TensorRT', pct: 8, color: '#f59e0b' },
                  { name: 'Shell / Dockerfile / CI/CD', pct: 4, color: '#ec4899' },
                ].map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300 font-medium">{lang.name}</span>
                      <span className="font-bold" style={{ color: lang.color }}>
                        {lang.pct}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${lang.pct}%`,
                          backgroundColor: lang.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Server Specifications Badge */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block font-bold">
                DEV ENVIRONMENT HARDWARE
              </span>
              <div className="text-xs font-mono text-slate-300 space-y-1">
                <div>• Ubuntu Linux 22.04 LTS (x86_64)</div>
                <div>• NVIDIA RTX 4090 (24GB VRAM) CUDA 12.4</div>
                <div>• Docker Containerized Isolated Microservices</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
