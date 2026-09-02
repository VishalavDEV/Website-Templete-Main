import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Terminal, Zap } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  const simulationSteps = [
    { title: "Analyzing Architecture", detail: "Scanning Dockerfile and microservice topology across multi-cloud regions...", time: "0.4s", status: "completed" },
    { title: "Compiling Edge Bytecode", detail: "Wasm edge worker compilation passed with 0 cold-start overhead.", time: "0.8s", status: "completed" },
    { title: "Broadcasting to 320+ POPs", detail: "Active-Active anycast routing enabled for US, EU, and APAC edge nodes.", time: "1.2s", status: "completed" },
    { title: "AI Canary Verification", detail: "Sending 25,000 synthetic requests: 0 anomalies, p99 latency = 1.4ms.", time: "1.8s", status: "active" },
    { title: "100% Production Live", detail: "Atomic DNS switchover complete. Zero packets dropped.", time: "2.1s", status: "upcoming" }
  ];

  useEffect(() => {
    if (!isOpen) {
      setStepIndex(0);
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setStepIndex((prev) => (prev < simulationSteps.length - 1 ? prev + 1 : 0));
      }, 2200);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(timer);
    };
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
          className="relative w-full max-w-4xl glass-panel rounded-2xl shadow-2xl overflow-hidden z-10 border"
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-panel)' }}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-pill)' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono font-medium" style={{ color: 'var(--text-muted)' }}>
                aether-live-simulator // v2.0-preview
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors"
                style={{ backgroundColor: 'var(--bg-pill)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-500" /> : <Play className="w-3.5 h-3.5 text-emerald-500" />}
                <span>{isPlaying ? 'Pause Sim' : 'Resume Sim'}</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg transition-colors hover:opacity-100 opacity-70"
                style={{ color: 'var(--text-main)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Live Terminal Output */}
            <div
              className="lg:col-span-7 rounded-xl p-4 border font-mono text-xs space-y-3"
              style={{ backgroundColor: '#090D16', borderColor: 'rgba(255,255,255,0.08)', color: '#CBD5E1' }}
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/5 text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" /> $ aether deploy --production --hyperspeed
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">ONLINE</span>
              </div>

              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                <p className="text-slate-400">[INFO] Loaded project configuration from aether.config.ts</p>
                <p className="text-cyan-400">[BUILD] Building optimized multi-target WASM & Node binary...</p>
                <p className="text-emerald-400">[READY] Assets bundle: 184 KB (gzip: 42 KB)</p>
                <p className="text-purple-400">[ANYCAST] Propagating routes to 320 Edge POPs...</p>
                
                {stepIndex >= 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-2.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                    ✓ Global distribution verified: Edge p99 latency = 1.4ms
                  </motion.div>
                )}
                {stepIndex >= 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    ✓ AI Canary Analysis: 0 regressions, 0 latency spikes detected
                  </motion.div>
                )}
                {stepIndex >= 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-2.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                    🚀 Release 2.4.0 is now live globally at https://api.aether.cloud
                  </motion.div>
                )}
              </div>

              <div className="pt-2 flex items-center gap-2 text-slate-400 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Zero downtime rollout active • Real-time telemetry streaming</span>
              </div>
            </div>

            {/* Right Column: Interactive Stage Stepper */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold tracking-wide uppercase flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                  <Zap className="w-4 h-4" style={{ color: 'var(--accent-mid)' }} />
                  Deployment Pipeline
                </h4>

                <div className="space-y-2">
                  {simulationSteps.map((step, idx) => {
                    const isPassed = idx < stepIndex;
                    const isCurrent = idx === stepIndex;
                    return (
                      <div
                        key={step.title}
                        onClick={() => setStepIndex(idx)}
                        className="p-3 rounded-xl border transition-all cursor-pointer"
                        style={{
                          backgroundColor: isCurrent ? 'var(--bg-pill)' : isPassed ? 'var(--bg-card)' : 'transparent',
                          borderColor: isCurrent ? 'var(--accent-start)' : 'var(--border-color)',
                          opacity: isCurrent || isPassed ? 1 : 0.6
                        }}
                      >
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span style={{ color: isCurrent ? 'var(--accent-start)' : isPassed ? '#10B981' : 'var(--text-muted)', fontWeight: isCurrent ? '700' : '500' }}>
                            {step.title}
                          </span>
                          <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>{step.time}</span>
                        </div>
                        <p className="text-[11px] mt-1 leading-relaxed" style={{ color: 'var(--text-sub)' }}>{step.detail}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Banner */}
              <div className="pt-2">
                <a
                  href="#pricing"
                  onClick={onClose}
                  className="w-full py-3 rounded-xl text-white font-semibold text-xs tracking-wider uppercase text-center block shadow-lg hover:opacity-90 transition-all"
                  style={{ background: 'linear-gradient(90deg, var(--accent-start), var(--accent-mid))' }}
                >
                  Start Building on Aether
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
