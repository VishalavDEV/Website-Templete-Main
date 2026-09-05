import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Play,
  Bot,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  Terminal,
  Copy,
  Check
} from 'lucide-react';
import { BRAND, HERO_PRESETS } from '../data/landingData';
import { useToast } from './Toast';

export default function Hero({ onOpenContact, onOpenVideo }) {
  const [selectedPrompt, setSelectedPrompt] = useState(HERO_PRESETS[0]);
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(selectedPrompt);
    setCopied(true);
    addToast('Prompt copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden bg-cyber-grid"
    >
      {/* Aurora Ambient Background Flares */}
      <div className="aurora-glow-1 top-10 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="aurora-glow-2 top-1/3 right-10 animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Staggered Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Holographic Announcement Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-medium text-purple-300 border border-purple-500/30 mb-6 group cursor-pointer hover:border-purple-500/60 transition-colors"
              onClick={onOpenContact}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-semibold text-slate-200">{BRAND.announcement}</span>
              <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
            </motion.div>

            {/* Massive Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
            >
              Architect Next-Gen <br className="hidden sm:inline" />
              <span className="gradient-text-accent">Spatial Intelligence</span> <br className="hidden sm:inline" />
              & Autonomous Mesh
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-light"
            >
              Deploy distributed cognitive agent swarms, sub-millisecond vector synchronization, and photorealistic 3D spatial interfaces—built natively for mission-critical enterprise autonomy.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto"
            >
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-7 py-4 rounded-xl btn-primary flex items-center justify-center gap-3 text-sm font-semibold shadow-xl hover:shadow-purple-500/30 transition-all cursor-pointer"
              >
                <span>Deploy Neural Cluster</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVideo}
                className="w-full sm:w-auto px-6 py-4 rounded-xl btn-secondary flex items-center justify-center gap-2.5 text-sm font-semibold hover:border-purple-400/40 transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Play className="w-3 h-3 text-cyan-300 fill-cyan-300 ml-0.5" />
                </div>
                <span>Watch 2-Min Demo</span>
              </button>
            </motion.div>

            {/* Interactive Live Prompt Simulator Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full max-w-xl rounded-2xl glass-panel bg-[#0d121f]/90 border border-white/10 p-3.5 shadow-2xl"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2 px-1">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>NEURAL PROMPT SYNTHESIZER</span>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-1 hover:text-white transition-colors text-slate-400"
                  title="Copy Prompt"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-200 font-mono flex items-center justify-between gap-3">
                <span className="truncate">{selectedPrompt}</span>
                <span className="w-2 h-4 bg-cyan-400 animate-pulse shrink-0" />
              </div>

              {/* Preset Chips */}
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {HERO_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPrompt(preset)}
                    className={`text-[10px] px-2.5 py-1 rounded-lg transition-colors truncate max-w-[200px] ${
                      selectedPrompt === preset
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-medium'
                        : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    Preset {idx + 1}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Holographic Visual & Floating Glass Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center overflow-visible">
            {/* Central Hologram Orb & Gyroscope */}
            <div className="relative w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] max-w-full flex items-center justify-center">
              {/* Outer Orbit 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-purple-500/30"
              />

              {/* Outer Orbit 2 - Counter Rotating */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6 rounded-full border border-cyan-500/40 border-t-transparent border-b-transparent"
              />

              {/* Tilted Elliptical Ring */}
              <motion.div
                animate={{ rotate: 360, rotateX: 65 }}
                transition={{ rotate: { duration: 12, repeat: Infinity, ease: 'linear' } }}
                className="absolute inset-10 rounded-full border-2 border-emerald-400/40 border-r-transparent border-l-transparent shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              />

              {/* Glowing Core Sphere */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    '0 0 40px rgba(139,92,246,0.6)',
                    '0 0 70px rgba(6,182,212,0.9)',
                    '0 0 40px rgba(139,92,246,0.6)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 flex flex-col items-center justify-center text-white relative z-10 p-4 text-center shadow-2xl"
              >
                <div className="absolute inset-1 rounded-full bg-[#0d121f]/40 backdrop-blur-sm flex flex-col items-center justify-center">
                  <Cpu className="w-10 h-10 text-cyan-300 animate-pulse mb-1" />
                  <span className="text-[11px] font-mono font-bold tracking-wider text-white">
                    AETHER CORE
                  </span>
                  <span className="text-[9px] font-mono text-cyan-300 font-semibold">
                    185K TPS
                  </span>
                </div>
              </motion.div>

              {/* Floating Glass Badge 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 left-0 sm:top-2 sm:left-0 p-2.5 sm:p-3 rounded-2xl glass-panel bg-[#0d121f]/90 border border-white/15 shadow-xl flex items-center gap-2.5 sm:gap-3 animate-float z-20"
              >
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">1,000+ Agents</div>
                  <div className="text-[10px] text-slate-400 font-mono">Consensus: Optimal</div>
                </div>
              </motion.div>

              {/* Floating Glass Badge 2 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-0 right-0 sm:bottom-4 sm:right-0 p-2.5 sm:p-3 rounded-2xl glass-panel bg-[#0d121f]/90 border border-white/15 shadow-xl flex items-center gap-2.5 sm:gap-3 animate-float-slow z-20"
              >
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">8.4ms Global Sync</div>
                  <div className="text-[10px] text-emerald-400 font-mono">320 Edge PoPs Active</div>
                </div>
              </motion.div>

              {/* Floating Glass Badge 3 - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-12 left-0 sm:bottom-16 sm:-left-4 p-2.5 rounded-xl glass-panel bg-[#0d121f]/90 border border-white/15 shadow-xl hidden md:flex items-center gap-2.5 animate-float z-20"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                <span className="text-[11px] font-mono text-slate-200 font-medium">
                  Kyber-1024 Post-Quantum
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
