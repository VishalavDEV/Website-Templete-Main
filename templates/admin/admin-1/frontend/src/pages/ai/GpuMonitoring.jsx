import React from 'react';
import Layout from '../../components/layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Cpu, Zap, Thermometer, HardDrive, Radio } from 'lucide-react';

export default function GpuMonitoring() {
  const gpuHardware = [
    { name: 'NVIDIA H100 SXM5 #01', vramUsed: 72, vramTotal: 80, temp: '62°C', power: '420W', status: 'Optimal' },
    { name: 'NVIDIA H100 SXM5 #02', vramUsed: 68, vramTotal: 80, temp: '59°C', power: '390W', status: 'Optimal' },
    { name: 'NVIDIA A100-80GB #01', vramUsed: 54, vramTotal: 80, temp: '54°C', power: '280W', status: 'Optimal' },
    { name: 'NVIDIA L40S #01', vramUsed: 38, vramTotal: 48, temp: '48°C', power: '210W', status: 'Optimal' },
  ];

  const chartData = [
    { node: 'Node H100-01', vramAllocated: 72, vramFree: 8 },
    { node: 'Node H100-02', vramAllocated: 68, vramFree: 12 },
    { node: 'Node A100-01', vramAllocated: 54, vramFree: 26 },
    { node: 'Node L40S-01', vramAllocated: 38, vramFree: 10 },
  ];

  return (
    <Layout title="GPU Hardware Cluster Telemetry" breadcrumb="Home / AI Intelligence / GPU Monitoring">
      <div className="space-y-6">
        {/* Header KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl glass-card border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Active GPU Acceleration Nodes</span>
            <div className="text-xl font-bold text-white font-mono mt-1">16 GPUs</div>
          </div>
          <div className="p-4 rounded-2xl glass-card border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Total High-Bandwidth VRAM</span>
            <div className="text-xl font-bold text-neura-cyan font-mono mt-1">1,280 GB</div>
          </div>
          <div className="p-4 rounded-2xl glass-card border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Average Core Temp</span>
            <div className="text-xl font-bold text-emerald-400 font-mono mt-1">56°C</div>
          </div>
          <div className="p-4 rounded-2xl glass-card border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Total Power Draw</span>
            <div className="text-xl font-bold text-amber-400 font-mono mt-1">3.4 kW</div>
          </div>
        </div>

        {/* Hardware VRAM Allocation Chart */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center">
              <Cpu className="w-5 h-5 text-neura-cyan mr-2" />
              <span>VRAM Allocation (Gigabytes)</span>
            </h3>
            <span className="px-3 py-1 rounded-full bg-neura-cyan/15 text-neura-cyan text-xs font-mono font-bold flex items-center space-x-1">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>NVLink Active</span>
            </span>
          </div>

          <div className="w-full h-48 sm:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} stackOffset="expand">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="node" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="vramAllocated" fill="#00f0ff" maxBarSize={28} name="Allocated VRAM (GB)" stackId="a" />
                <Bar dataKey="vramFree" fill="#7000ff" maxBarSize={28} name="Available Free VRAM (GB)" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hardware Telemetry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gpuHardware.map((gpu) => (
            <div key={gpu.name} className="p-5 rounded-3xl glass-card border border-white/10 space-y-3 hover:border-neura-cyan/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  {gpu.status}
                </span>
                <span className="text-xs font-mono text-amber-400">{gpu.power}</span>
              </div>
              <h4 className="text-xs font-bold text-white">{gpu.name}</h4>
              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-white/10">
                <div>
                  <span className="text-[10px] text-slate-400 block">VRAM Used</span>
                  <span className="font-mono font-bold text-neura-cyan">{gpu.vramUsed} / {gpu.vramTotal} GB</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Core Temp</span>
                  <span className="font-mono font-bold text-emerald-400">{gpu.temp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
