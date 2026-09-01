import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Cpu, Terminal, RefreshCw, Layers, CheckCircle2, AlertTriangle, ArrowUpRight, Play } from 'lucide-react';

export default function AiDeployments() {
  const [scaling, setScaling] = useState(false);

  const trafficData = [
    { time: '10:00', reqSec: 12400 },
    { time: '10:05', reqSec: 14800 },
    { time: '10:10', reqSec: 18200 },
    { time: '10:15', reqSec: 16500 },
    { time: '10:20', reqSec: 21000 },
    { time: '10:25', reqSec: 24500 },
  ];

  const deployments = [
    { id: 'DEP-US-101', name: 'Neura-LLM v4.2 Production Cluster', region: 'us-east-1 (N. Virginia)', replicas: '8 Pods', traffic: '12.4K req/s', status: 'Healthy', version: 'v4.2.1' },
    { id: 'DEP-EU-204', name: 'VisionCore-Pro Inference Pod', region: 'eu-central-1 (Frankfurt)', replicas: '4 Pods', traffic: '5.8K req/s', status: 'Healthy', version: 'v2.1.0' },
    { id: 'DEP-AP-309', name: 'CodeGen-X Synthesis Engine', region: 'ap-south-1 (Mumbai)', replicas: '6 Pods', traffic: '4.2K req/s', status: 'Scaling', version: 'v3.0.4' },
    { id: 'DEP-US-108', name: 'NeuralEmbed Vector Database Pod', region: 'us-west-2 (Oregon)', replicas: '6 Pods', traffic: '8.1K req/s', status: 'Healthy', version: 'v1.8.2' },
  ];

  const logs = [
    '[10:25:01 AM] [INFO] [Kube-Cluster] Scaling pod DEP-AP-309 from 4 to 6 replicas.',
    '[10:24:45 AM] [SUCCESS] [Neura-LLM] Health check passed on node us-east-1a (0.2ms latency).',
    '[10:24:10 AM] [INFO] [Ingress-Proxy] 24,500 req/sec routed to active GPU clusters.',
    '[10:23:30 AM] [SUCCESS] [TLS Gateway] Certificate re-validated for *.neura.tech.',
  ];

  const handleScale = () => {
    setScaling(true);
    setTimeout(() => setScaling(false), 1500);
  };

  return (
    <Layout title="AI Neural Deployments" breadcrumb="Home / AI Intelligence / Deployments">
      <div className="space-y-6">
        {/* Header Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl glass-card border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Active Clusters</span>
            <div className="text-xl font-bold text-white font-mono mt-1">4 Regions</div>
          </div>
          <div className="p-4 rounded-2xl glass-card border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Container Replicas</span>
            <div className="text-xl font-bold text-neura-cyan font-mono mt-1">24 Pods</div>
          </div>
          <div className="p-4 rounded-2xl glass-card border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Traffic Throughput</span>
            <div className="text-xl font-bold text-emerald-400 font-mono mt-1">30.5K req/s</div>
          </div>
          <div className="p-4 rounded-2xl glass-card border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Auto-Scaling</span>
            <div className="text-xl font-bold text-neura-purple font-mono mt-1">ENABLED</div>
          </div>
        </div>

        {/* Traffic Throughput Graph */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Live Inference Requests / Second</h3>
            <button
              onClick={handleScale}
              className="px-3 py-1.5 rounded-xl bg-neura-cyan text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-1"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${scaling ? 'animate-spin' : ''}`} />
              <span>{scaling ? 'Scaling Replicas...' : 'Scale Up Replicas'}</span>
            </button>
          </div>

          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorReq" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00f0ff" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="time" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
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
                <Area type="monotone" dataKey="reqSec" stroke="#00f0ff" strokeWidth={3} fill="url(#colorReq)" name="Req / Sec" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active Deployments Table */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white">Active Regional Deployments</h3>
          <div className="overflow-x-auto border border-white/10 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.03] text-slate-400 font-semibold border-b border-white/10 uppercase tracking-wider">
                <tr>
                  <th className="p-4">Deployment ID</th>
                  <th className="p-4">Deployment Name</th>
                  <th className="p-4">Region</th>
                  <th className="p-4">Replicas</th>
                  <th className="p-4">Throughput</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {deployments.map((d) => (
                  <tr key={d.id} className="hover:bg-white/[0.04]">
                    <td className="p-4 font-mono text-neura-cyan font-bold">{d.id}</td>
                    <td className="p-4 font-bold text-white">{d.name}</td>
                    <td className="p-4 text-slate-400">{d.region}</td>
                    <td className="p-4 font-mono text-emerald-400">{d.replicas}</td>
                    <td className="p-4 font-mono">{d.traffic}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        d.status === 'Healthy' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border-amber-500/40 animate-pulse'
                      }`}>
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Logs Terminal */}
        <div className="rounded-3xl bg-black/80 border border-white/10 p-6 space-y-3 font-mono text-xs">
          <div className="flex items-center space-x-2 text-neura-cyan font-bold border-b border-white/10 pb-2">
            <Terminal className="w-4 h-4" />
            <span>Kubernetes Cluster Deployment Logs Stream</span>
          </div>
          <div className="space-y-1 text-slate-300">
            {logs.map((log, idx) => (
              <p key={idx} className="leading-relaxed">{log}</p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
