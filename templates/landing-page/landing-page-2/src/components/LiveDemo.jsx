import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Activity,
  Code2,
  Eye,
  Sliders,
  Maximize2
} from 'lucide-react';
import { PLAYGROUND_PRESETS } from '../data/landingData';
import { useToast } from './Toast';

export default function LiveDemo({ onOpenContact }) {
  const [selectedPreset, setSelectedPreset] = useState(PLAYGROUND_PRESETS[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(100);
  const [activeView, setActiveView] = useState('preview'); // 'preview' | 'code'
  const [customPrompt, setCustomPrompt] = useState(PLAYGROUND_PRESETS[0].prompt);
  const { addToast } = useToast();

  const handleRunSimulation = (preset = selectedPreset) => {
    setIsGenerating(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          addToast('Neural spatial UI generated in 184ms!', 'success');
          return 100;
        }
        return prev + 25;
      });
    }, 60);
  };

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setCustomPrompt(preset.prompt);
    handleRunSimulation(preset);
  };

  return (
    <section id="playground" className="relative py-28 bg-[#07090e] overflow-hidden">
      {/* Aurora Flares */}
      <div className="aurora-glow-1 top-10 right-1/4 opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono font-semibold text-rose-400 border border-rose-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>INTERACTIVE STUDIO PLAYGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-4"
          >
            Experience Instant Neural <br />
            <span className="gradient-text-accent">Prompt-to-Spatial Synthesis</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Select or test a high-order prompt below and watch our distributed cognitive engine generate reactive, physics-driven components in real time.
          </motion.p>
        </div>

        {/* Playground Container Window */}
        <div className="rounded-3xl glass-panel bg-[#0d121f]/95 border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="p-4 sm:p-6 border-b border-white/10 bg-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-purple-400" /> Presets:
              </span>
              {PLAYGROUND_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedPreset.id === preset.id
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-md'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* View Switcher (Preview vs Code) */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-black/40 border border-white/10 self-end sm:self-auto">
              <button
                onClick={() => setActiveView('preview')}
                className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  activeView === 'preview' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" /> Preview
              </button>
              <button
                onClick={() => setActiveView('code')}
                className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  activeView === 'code' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" /> Code
              </button>
            </div>
          </div>

          {/* Prompt Input Section */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-black/20">
            <div className="flex-1 relative">
              <input
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Enter natural language spatial prompt..."
                className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-xs sm:text-sm font-mono focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <button
              onClick={() => handleRunSimulation()}
              disabled={isGenerating}
              className="px-6 py-3 rounded-xl btn-primary flex items-center justify-center gap-2 text-xs font-semibold whitespace-nowrap"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Execute Neural Prompt</span>
                </>
              )}
            </button>
          </div>

          {/* Generation Progress Bar */}
          {isGenerating && (
            <div className="w-full h-1 bg-slate-800">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Workspace Output View */}
          <div className="p-6 sm:p-8 min-h-[380px] flex flex-col justify-center">
            {activeView === 'preview' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Preview Canvas */}
                <div className="lg:col-span-8 p-6 rounded-2xl bg-[#07090e] border border-white/10 relative overflow-hidden shadow-inner">
                  {/* Grid background */}
                  <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-white">
                        {selectedPreset.result.type}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400">
                      LIVE RENDER (120 FPS)
                    </span>
                  </div>

                  {/* Dynamic Interactive Component Preview */}
                  <div className="space-y-4 my-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {selectedPreset.result.components.map((comp, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1 hover:border-purple-500/40 transition-colors"
                        >
                          <span className="text-[10px] font-mono text-slate-400">NODE 0{idx + 1}</span>
                          <span className="text-xs font-bold text-slate-200">{comp}</span>
                          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
                            <CheckCircle2 className="w-3 h-3" /> ACTIVE
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Telemetry Sparkline Visualizer */}
                    <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                        <span>Real-Time Neural Synapse Stream</span>
                        <span className="text-cyan-400">Sub-10ms P99</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-16 pt-2">
                        {[40, 65, 80, 50, 90, 75, 95, 60, 85, 100, 70, 90, 85, 95, 100].map((h, idx) => (
                          <motion.div
                            key={idx}
                            animate={{ height: [`${h}%`, `${(h * 0.7) + 20}%`, `${h}%`] }}
                            transition={{ duration: 1.5 + (idx * 0.1), repeat: Infinity, ease: 'easeInOut' }}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-purple-600 to-cyan-400 opacity-80 hover:opacity-100 transition-opacity"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Specs & Stats Column */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Synthesis Metrics
                    </div>

                    {Object.entries(selectedPreset.result.previewStats).map(([key, val], idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs font-mono py-1 border-b border-white/5 last:border-0">
                        <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-cyan-300 font-bold">{val}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenContact}
                    className="w-full py-3 rounded-xl btn-primary text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Deploy This Architecture</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              /* Code Editor Output View */
              <div className="p-6 rounded-2xl bg-black/80 border border-white/10 font-mono text-xs text-purple-300 leading-relaxed overflow-x-auto">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400">
                  <span>Generated React + AETHERIA SDK Spec</span>
                  <span className="text-emerald-400 text-[11px]">Compiled in 184ms</span>
                </div>
                <pre>
                  <code>{selectedPreset.result.code}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
