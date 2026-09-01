import React from 'react';
import { Cpu, Zap, HardDrive, Activity, Server, Radio } from 'lucide-react';

export default function AiSystemMonitor({ metrics }) {
  const data = metrics || {
    gpuUsage: 78,
    cpuUsage: 42,
    memoryUsage: 64,
    modelRequests: '18.4K',
    inferenceLatencyMs: 82,
    apiHealth: 99.98,
  };

  const progressBars = [
    { label: 'GPU Usage (NVIDIA H100)', value: data.gpuUsage, color: 'from-neura-cyan to-blue-500', icon: Cpu },
    { label: 'CPU Cluster Load', value: data.cpuUsage, color: 'from-neura-purple to-indigo-500', icon: Server },
    { label: 'High-Speed Memory (VRAM)', value: data.memoryUsage, color: 'from-emerald-400 to-teal-500', icon: HardDrive },
  ];

  return (
    <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center">
            <span>AI Infrastructure</span>
            <span className="ml-2.5 flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neura-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neura-cyan"></span>
            </span>
          </h3>
          <p className="text-xs text-slate-400">Live compute metrics across neural inference nodes.</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-neura-cyan/10 border border-neura-cyan/30 text-neura-cyan text-xs font-mono font-semibold flex items-center space-x-1.5">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>NODE US-EAST-1</span>
        </div>
      </div>

      {/* Primary Gauge Bar Indicators */}
      <div className="space-y-4">
        {progressBars.map((bar, i) => {
          const Icon = bar.icon;
          return (
            <div key={i} className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center">
                  <Icon className="w-3.5 h-3.5 mr-1.5 text-neura-cyan" />
                  {bar.label}
                </span>
                <span className="font-mono font-bold text-white">{bar.value}%</span>
              </div>
              <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${bar.color} transition-all duration-1000 shadow-glow-cyan`}
                  style={{ width: `${bar.value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid Metrics Footer */}
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Model Requests</div>
          <div className="text-lg font-extrabold text-white font-mono mt-0.5">{data.modelRequests}</div>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Avg Latency</div>
          <div className="text-lg font-extrabold text-neura-cyan font-mono mt-0.5">{data.inferenceLatencyMs}ms</div>
        </div>

        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
          <div className="text-[10px] text-slate-400 font-semibold uppercase">API Uptime</div>
          <div className="text-lg font-extrabold text-emerald-400 font-mono mt-0.5">{data.apiHealth}%</div>
        </div>
      </div>
    </div>
  );
}
