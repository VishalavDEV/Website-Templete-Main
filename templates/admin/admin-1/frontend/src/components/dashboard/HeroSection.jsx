import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Cpu, Users, ShieldCheck, Activity, Sparkles, ArrowUpRight, Radio, Server, CheckCircle2,
  HardDrive, X, Play, FileText, Download, Check
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function HeroSection() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [showInferenceModal, setShowInferenceModal] = useState(false);
  const [showLogsModal, setShowLogsModal] = useState(false);
  const [inferenceRunning, setInferenceRunning] = useState(false);
  const [inferenceResult, setInferenceResult] = useState(null);

  const [selectedModel, setSelectedModel] = useState('Neura-LLM-v4.2');
  const [batchSize, setBatchSize] = useState(32);
  const [gpuNode, setGpuNode] = useState('NVIDIA-H100-US-EAST');

  const floatStats = [
    { label: 'System Health', value: '98.7%', icon: ShieldCheck, color: 'text-neura-cyan border-neura-cyan/30' },
    { label: 'AI Models Active', value: '42 Models', icon: Cpu, color: 'text-neura-purple border-neura-purple/30' },
    { label: 'Active Users', value: '12.4K', icon: Users, color: 'text-emerald-400 border-emerald-500/30' },
    { label: 'Guaranteed Uptime', value: '99.99%', icon: Activity, color: 'text-amber-400 border-amber-500/30' },
  ];

  const handleRunInference = (e) => {
    e.preventDefault();
    setInferenceRunning(true);
    setInferenceResult(null);

    setTimeout(() => {
      setInferenceRunning(false);
      setInferenceResult({
        status: 'SUCCESS',
        latency: '14.2 ms',
        throughput: '1,420 tokens/sec',
        gpuUtilization: '78.4%',
        outputSummary: 'Inference completed. 100% tokens processed without errors.'
      });
    }, 1800);
  };

  return (
    <div className="relative rounded-3xl glass-panel p-6 lg:p-8 overflow-hidden border border-white/10 shadow-2xl">
      {/* Background Cyber Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-neura-cyan/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-neura-purple/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Greeting & Action Buttons */}
        <div className="lg:col-span-7 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neura-cyan/10 border border-neura-cyan/30 text-neura-cyan text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>NEURA AI ENGINE v4.2 ONLINE</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Good morning, <span className="gradient-text-cyan">{user?.name || 'Admin'}</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
              Here's what's happening across your technology ecosystem today. All systems operating at optimal performance.
            </p>
          </motion.div>

          {/* Quick Floating Stat Pills */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
          >
            {floatStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`p-3 rounded-2xl bg-white/[0.03] backdrop-blur-md border ${stat.color} hover:bg-white/10 transition-all duration-300 group`}
                >
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                    <Icon className="w-3.5 h-3.5 text-slate-300 group-hover:scale-110 transition-transform" />
                    <span className="truncate text-[11px] font-medium">{stat.label}</span>
                  </div>
                  <div className="text-base font-extrabold text-white mt-1 font-mono">{stat.value}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <button
              onClick={() => setShowInferenceModal(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan hover:opacity-90 transition-all flex items-center space-x-2"
            >
              <span>Launch AI Inference</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowLogsModal(true)}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-neura-purple/50 text-white font-semibold text-xs transition-all flex items-center space-x-2"
            >
              <FileText className="w-4 h-4 text-neura-purple" />
              <span>View System Logs</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Primary Node Operational Card */}
        <div className="lg:col-span-5 relative">
          <div className="p-6 rounded-3xl bg-neura-panel/80 backdrop-blur-xl border border-neura-cyan/30 shadow-glow-cyan/20 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-neura-cyan" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Primary Node US-East</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold flex items-center space-x-1 border border-emerald-500/40">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>ONLINE</span>
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Node Latency</span>
                <span className="text-neura-cyan font-bold">14 ms (Ultra-Low)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Cluster Memory</span>
                <span className="text-emerald-400 font-bold">18.4 GB / 64 GB</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neura-cyan to-emerald-400 rounded-full" style={{ width: '28.75%' }} />
              </div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-400">Neural Network Pods</span>
                <span className="text-neura-purple font-bold">24 Active Pods</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">SOC2 Security Check</span>
                <span className="text-emerald-400 font-bold flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  100% Passed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Launch AI Inference Modal */}
      {showInferenceModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Cpu className="w-5 h-5 text-neura-cyan mr-2" />
                <span>Launch AI Model Inference Engine</span>
              </h3>
              <button onClick={() => setShowInferenceModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRunInference} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Target AI Model</label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono focus:outline-none focus:border-neura-cyan"
                >
                  <option value="Neura-LLM-v4.2">Neura-LLM v4.2 (70B Parameters)</option>
                  <option value="Neura-Vision-v2.1">Neura-Vision v2.1 (Multi-Modal)</option>
                  <option value="DeepGraph-v1.8">DeepGraph v1.8 (Embeddings)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">GPU Compute Cluster</label>
                  <select
                    value={gpuNode}
                    onChange={(e) => setGpuNode(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono focus:outline-none focus:border-neura-cyan"
                  >
                    <option value="NVIDIA-H100-US-EAST">8x NVIDIA H100 (US-East)</option>
                    <option value="NVIDIA-A100-EU-WEST">4x NVIDIA A100 (EU-West)</option>
                    <option value="TPU-v5p-US-CENTRAL">Google TPU v5p (US-Central)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Batch Size</label>
                  <input
                    type="number"
                    value={batchSize}
                    onChange={(e) => setBatchSize(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono focus:outline-none focus:border-neura-cyan"
                  />
                </div>
              </div>

              {inferenceResult && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono space-y-1.5">
                  <div className="font-bold flex items-center">
                    <Check className="w-4 h-4 mr-1.5" />
                    <span>Inference Execution Completed</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Latency: <span className="text-neura-cyan font-bold">{inferenceResult.latency}</span> | Throughput: <span className="text-white font-bold">{inferenceResult.throughput}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">{inferenceResult.outputSummary}</div>
                </div>
              )}

              <div className="pt-2 flex justify-between items-center border-t border-white/10">
                <button
                  type="button"
                  onClick={() => navigate('/ai-models')}
                  className="text-neura-cyan font-semibold hover:underline"
                >
                  View All Models →
                </button>

                <button
                  type="submit"
                  disabled={inferenceRunning}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2 disabled:opacity-50"
                >
                  <Play className={`w-4 h-4 ${inferenceRunning ? 'animate-spin' : ''}`} />
                  <span>{inferenceRunning ? 'Processing Inference...' : 'Execute Inference Run'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View System Logs Modal */}
      {showLogsModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <FileText className="w-5 h-5 text-neura-purple mr-2" />
                <span>System Operational Audit & Diagnostics Logs</span>
              </h3>
              <button onClick={() => setShowLogsModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 font-mono text-xs max-h-72 overflow-y-auto pr-1">
              {[
                { time: '10:42:15', type: 'INFO', msg: 'Neura-LLM v4.2 inference pipeline completed 1,420 tokens/sec.', color: 'text-neura-cyan' },
                { time: '10:40:02', type: 'SECURITY', msg: 'Admin session authenticated via 2FA from 192.168.1.102.', color: 'text-emerald-400' },
                { time: '10:35:48', type: 'WARN', msg: 'GPU cluster memory utilization exceeded 75% threshold.', color: 'text-amber-400' },
                { time: '10:28:11', type: 'INFO', msg: 'Database backup snapshot created successfully on S3 bucket.', color: 'text-slate-300' },
                { time: '10:15:30', type: 'INFO', msg: 'V8/Redis Cache layer flushed and synchronized.', color: 'text-neura-purple' },
              ].map((log, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
                  <span className="text-slate-500 shrink-0">{log.time}</span>
                  <span className={`font-bold shrink-0 ${log.color}`}>[{log.type}]</span>
                  <span className="text-slate-200">{log.msg}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-white/10">
              <button
                onClick={() => navigate('/activity')}
                className="text-neura-cyan font-semibold text-xs hover:underline"
              >
                Go to Audit Activity Page →
              </button>

              <button
                onClick={() => setShowLogsModal(false)}
                className="px-4 py-2 rounded-xl bg-neura-cyan text-black font-bold text-xs shadow-glow-cyan"
              >
                Close Logs View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
