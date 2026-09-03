import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Terminal, Layers, Cpu, Globe, CheckCircle2, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { PageView } from '../types';

interface HeroProps {
  onOpenContact: () => void;
  onNavigate: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'ai' | 'design' | 'cloud'>('ai');
  const [interactiveInferenceRunning, setInteractiveInferenceRunning] = useState(false);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    'Initializing Qdrant semantic cluster...',
    'gRPC channel connected: node-us-east4-a [6.4ms]',
    'Speculative multi-branch token stream ready.'
  ]);

  const handleRunInference = () => {
    if (interactiveInferenceRunning) return;
    setInteractiveInferenceRunning(true);
    setSimulatedLogs((prev) => [...prev, '› Processing dynamic reasoning batch...']);
    
    setTimeout(() => {
      setSimulatedLogs((prev) => [
        ...prev,
        '› Context vector match: 99.4% confidence',
        '› Latency: 48ms | Tokens: 1,480/sec | Guardrails: Passed (0 violations)'
      ]);
      setInteractiveInferenceRunning(false);
    }, 900);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-500/15 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-gradient-to-bl from-indigo-600/10 via-purple-600/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415512_1px,transparent_1px),linear-gradient(to_bottom,#33415512_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Status Capsule */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-xl backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-slate-400">STUDIO CADENCE:</span>
            <span className="font-medium text-slate-200">2 Dedicated Pod Slots Available for Q3/Q4</span>
            <button
              onClick={() => onNavigate('pricing')}
              className="text-indigo-400 hover:text-indigo-300 font-semibold text-[11px] ml-1 transition-colors underline decoration-indigo-400/40 underline-offset-4"
            >
              View SLA →
            </button>
          </motion.div>
        </div>

        {/* Editorial Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            We engineer software that feels like{' '}
            <span className="bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-400 bg-clip-text text-transparent italic font-serif">
              the future.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            A bespoke product engineering atelier uniting autonomous AI orchestration, mathematically precise design systems, and resilient cloud architecture for category-defining leaders.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onOpenContact}
              className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
              <span>Initiate Discovery Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('studio-engine')}
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-sm font-semibold text-slate-200 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Interactive Scope &amp; Cost Engine</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                LIVE
              </span>
            </button>
          </motion.div>
        </div>

        {/* Interactive Systems Cockpit Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* Cockpit Window Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3.5 border-b border-slate-800/80 bg-slate-950/70">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="font-mono text-xs text-slate-400 ml-3 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                aura.engine // telemetry-console.live
              </span>
            </div>

            {/* Interactive Capability Switcher Tabs */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === 'ai'
                    ? 'bg-slate-800 text-indigo-300 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Autonomous AI</span>
              </button>

              <button
                onClick={() => setActiveTab('design')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === 'design'
                    ? 'bg-slate-800 text-indigo-300 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Design System</span>
              </button>

              <button
                onClick={() => setActiveTab('cloud')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === 'cloud'
                    ? 'bg-slate-800 text-indigo-300 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Edge Cloud</span>
              </button>
            </div>
          </div>

          {/* Cockpit Dynamic Stage */}
          <div className="p-6 sm:p-8">
            {activeTab === 'ai' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      STATUS: HEALTHY
                    </span>
                    <span className="text-xs text-slate-400 font-mono">MODEL: GEMINI-2.5-PRO-ORCHESTRATOR</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    Sub-100ms Multimodal Agent Orchestration
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    Zero-lag tool calling and vector retrieval pipelines deployed directly into your production infrastructure. Real-time streaming with mathematical context verification.
                  </p>

                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-slate-300 flex flex-col gap-1.5 max-h-36 overflow-y-auto">
                    {simulatedLogs.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-slate-600 select-none">›</span>
                        <span className={log.includes('48ms') ? 'text-emerald-400' : 'text-slate-300'}>
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={handleRunInference}
                      disabled={interactiveInferenceRunning}
                      className="px-4 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold flex items-center gap-2 transition-all disabled:opacity-50"
                    >
                      <Play className="w-3.5 h-3.5 fill-indigo-300" />
                      <span>{interactiveInferenceRunning ? 'Executing Pipeline...' : 'Test Live Inference Batch'}</span>
                    </button>
                    <span className="text-xs text-slate-500 font-mono">Live latency benchmark: 48ms</span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-950/80 rounded-xl p-5 border border-slate-800 flex flex-col gap-4">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                    Live Telemetry Benchmarks
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">Tool Execution Precision</span>
                        <span className="text-emerald-400 font-mono font-bold">99.4%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full w-[99.4%] transition-all duration-500"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">Context Vector Recall</span>
                        <span className="text-indigo-400 font-mono font-bold">98.8%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-400 rounded-full w-[98.8%] transition-all duration-500"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">Safety Guardrail Intercept Rate</span>
                        <span className="text-purple-400 font-mono font-bold">100.0%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-400 rounded-full w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>REGISTRY: QDRANT DISTRIBUTED</span>
                    <span className="text-emerald-400">SYNCED</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'design' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      DESIGN TOKENS: V3.8
                    </span>
                    <span className="text-xs text-slate-400 font-mono">WCAG 2.1 AAA COMPLIANT</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    Mathematical Proportions &amp; Optical Harmony
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    Every elevation, corner radius, and typographic interval is generated via mathematical ratios—eliminating visual fatigue and elevating brand prestige.
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                      <div className="text-lg font-bold text-indigo-300 font-mono">1.333</div>
                      <div className="text-[11px] text-slate-400 mt-1">Perfect Fourth Scale</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                      <div className="text-lg font-bold text-emerald-400 font-mono">60 FPS</div>
                      <div className="text-[11px] text-slate-400 mt-1">Motion Spring Rate</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                      <div className="text-lg font-bold text-cyan-400 font-mono">AAA</div>
                      <div className="text-[11px] text-slate-400 mt-1">Contrast Standard</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col gap-3">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                    Live Token Inspector
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-indigo-500 shadow-md"></div>
                    <div className="text-xs font-mono text-slate-300">
                      <div>--color-indigo-500: #6366F1</div>
                      <div className="text-slate-500 text-[10px]">Sleek Indigo Primary</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-slate-900 border border-slate-700"></div>
                    <div className="text-xs font-mono text-slate-300">
                      <div>--surface-slate-900: #0F172A</div>
                      <div className="text-slate-500 text-[10px]">Low-fatigue Dark Neutral</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-emerald-500"></div>
                    <div className="text-xs font-mono text-slate-300">
                      <div>--feedback-success: #10B981</div>
                      <div className="text-slate-500 text-[10px]">Emerald Verification</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      EDGE REGIONS: 28 GLOBAL
                    </span>
                    <span className="text-xs text-slate-400 font-mono">ZERO DOWNTIME CANARY</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    Distributed Cloud Core &amp; High-Throughput APIs
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    Edge computing meshes, distributed Postgres with read replicas, and real-time state synchronization engineered for zero single-points-of-failure.
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Multi-Region Read Caching</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>SOC2 Type II Hardening</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col gap-3">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800 flex justify-between">
                    <span>Edge TTFB Matrix</span>
                    <span className="text-emerald-400 font-mono">GLOBAL AVG: 18ms</span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">US East (N. Virginia)</span>
                      <span className="text-emerald-400">9ms</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">EU West (Frankfurt)</span>
                      <span className="text-emerald-400">14ms</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">AP South (Tokyo)</span>
                      <span className="text-emerald-400">22ms</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Global Proof Metric Ticker */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-800/80">
          <div className="flex flex-col">
            <span className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              $180M+
            </span>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
              Client Venture Value Created
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-display text-3xl sm:text-4xl font-bold text-indigo-300 tracking-tight">
              &lt; 95ms
            </span>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
              Inference Latency Standard
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              42
            </span>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
              International Design Honors
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight">
              99.99%
            </span>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
              Production SLA Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
