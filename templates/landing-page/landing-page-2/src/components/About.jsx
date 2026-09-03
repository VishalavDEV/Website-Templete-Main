import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  Cpu,
  Terminal,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Globe2
} from 'lucide-react';
import { ABOUT_TABS } from '../data/landingData';
import { useCounter } from '../utils/useCounter';

export default function About({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(0);

  // Animated counters
  const uptime = useCounter(99.99, 1800);
  const throughput = useCounter(185, 1800);
  const latency = useCounter(8.4, 1800);

  const currentTabData = ABOUT_TABS[activeTab];

  return (
    <section id="about" className="relative py-28 bg-[#07090e] overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="aurora-glow-1 -bottom-40 right-10 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono font-semibold text-cyan-400 border border-cyan-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARCHITECTURE & FOUNDATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-4"
          >
            Engineered for Zero-Drift, <br />
            <span className="gradient-text-accent">Deterministic Spatial Cognition</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Traditional AI pipelines suffer from state hallucinations and prohibitive latency. AETHERIA combines formal mathematical guardrails with distributed edge tensor nodes to deliver deterministic autonomy at scale.
          </motion.p>
        </div>

        {/* Split Layout: Left Tabs & Info | Right Interactive Telemetry Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Capability Matrix Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="flex flex-col gap-3">
              {ABOUT_TABS.map((tab, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setActiveTab(idx)}
                    className={`p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 relative border ${
                      isSelected
                        ? 'glass-panel bg-[#0d121f] border-purple-500/50 shadow-xl shadow-purple-500/10'
                        : 'glass-panel-subtle hover:bg-white/5 border-white/5 text-slate-400'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 left-0 w-1.5 inset-y-0 rounded-l-2xl bg-gradient-to-b from-purple-500 to-cyan-400" />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-purple-500/20 text-cyan-300' : 'bg-white/5 text-slate-400'
                          }`}
                        >
                          {idx === 0 && <Cpu className="w-4 h-4" />}
                          {idx === 1 && <Layers className="w-4 h-4" />}
                          {idx === 2 && <Lock className="w-4 h-4" />}
                        </div>
                        <h3 className={`text-lg font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {tab.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-11">
                      {tab.description}
                    </p>

                    {/* Active Metrics Bar */}
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 pl-11"
                      >
                        {tab.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-mono">{m.label}</span>
                            <span className="text-xs font-bold text-cyan-300 font-mono mt-0.5">{m.value}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Micro Stats Banner */}
            <div className="p-4 rounded-2xl glass-panel-subtle grid grid-cols-3 gap-4 text-center border border-white/5">
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-white font-mono">{throughput}K</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">TPS Per Node</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-lg sm:text-xl font-extrabold text-cyan-300 font-mono">{latency}ms</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">Global Latency</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-mono">{uptime}%</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Code & Hologram Architecture Terminal */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full rounded-2xl glass-panel bg-[#090d16]/95 border border-white/10 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    aetheria-enclave://cluster-alpha/telemetry.ts
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="my-6 p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                <pre className="text-purple-300 font-mono">
                  <code>{currentTabData.codeSnippet}</code>
                </pre>
              </div>

              {/* Live Simulated Telemetry Visualizer */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    Neural Mesh Load Balancing
                  </span>
                  <span className="text-cyan-400 font-semibold">94.8% OPTIMAL</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    animate={{ width: ['82%', '96%', '88%', '94%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 rounded-full"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                  <span>320 PoPs Synced</span>
                  <span>ZK-Lattice Active</span>
                </div>
              </div>

              {/* Bottom Trigger */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
                <div className="text-xs text-slate-400">
                  Ready to benchmark against standard cloud inference?
                </div>
                <button
                  onClick={onOpenContact}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Request Whitepaper</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
