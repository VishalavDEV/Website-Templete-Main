import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AI_QNA_PRESETS } from '../data/aiQnA';
import {
  Sparkles,
  Send,
  Bot,
  User,
  ShieldCheck,
  Cpu,
  Terminal,
  RotateCcw,
  Zap,
  CheckCircle2,
  Lock,
  Layers
} from 'lucide-react';

export const AiPlatformSection: React.FC = () => {
  const { setIsConsultationModalOpen } = useApp();

  const [currentPrompt, setCurrentPrompt] = useState(AI_QNA_PRESETS[0].question);
  const [activePresetId, setActivePresetId] = useState(AI_QNA_PRESETS[0].id);
  const [displayedAnswer, setDisplayedAnswer] = useState(AI_QNA_PRESETS[0].answer);
  const [isThinking, setIsThinking] = useState(false);

  const handleSelectPreset = (preset: typeof AI_QNA_PRESETS[0]) => {
    setActivePresetId(preset.id);
    setCurrentPrompt(preset.question);
    setIsThinking(true);
    setDisplayedAnswer('');

    setTimeout(() => {
      setDisplayedAnswer(preset.answer);
      setIsThinking(false);
    }, 450);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPrompt.trim()) return;

    setIsThinking(true);
    setDisplayedAnswer('');

    setTimeout(() => {
      // Find matching preset or generate intelligent synthesis
      const found = AI_QNA_PRESETS.find(p =>
        p.question.toLowerCase().includes(currentPrompt.toLowerCase()) ||
        currentPrompt.toLowerCase().includes(p.category.toLowerCase())
      );

      if (found) {
        setDisplayedAnswer(found.answer);
      } else {
        setDisplayedAnswer(
          `NEXORA Autonomous Synthesis Engine evaluated your query: "${currentPrompt}". \n\nIn high-throughput enterprise environments, NEXORA deploys fine-tuned local models with strict Bayesian causal graphs and zero-retention memory buffers. All inputs are cryptographically isolated on sovereign hardware clusters, ensuring deterministic verification, mathematical auditability, and immediate sub-10ms response velocities.`
        );
      }
      setIsThinking(false);
    }, 600);
  };

  return (
    <section id="platform" className="py-24 bg-[#08080A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence & Reasoning Layer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Ask NEXORA Architecture.
          </h2>
          <p className="text-base text-slate-400">
            Interact with our deterministic causal AI model to evaluate technical feasibility, security guarantees, and deployment strategies.
          </p>
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Preset Inquiries & Causal Pipeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-400">
                Curated Architecture Questions
              </h3>
              <div className="space-y-2.5">
                {AI_QNA_PRESETS.map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      activePresetId === preset.id
                        ? 'bg-indigo-500/15 border-indigo-500/40 text-white shadow-md shadow-indigo-950/20'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="p-1.5 rounded-lg bg-[#08080A] border border-white/10 text-indigo-400 shrink-0 mt-0.5">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block text-slate-200">{preset.question}</span>
                      <span className="text-[10px] text-indigo-400 font-mono mt-0.5 block">{preset.category}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Causal Graph Infographic Card */}
            <div className="p-5 rounded-2xl bg-[#0C0C12] border border-white/5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-300 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>Deterministic Verification Pipeline</span>
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-[10px]">
                    1
                  </span>
                  <div>
                    <span className="font-semibold text-slate-200">Bayesian Causal Inference</span>
                    <p className="text-[11px] text-slate-400">Rejects probabilistic hallucinations via causal DAG verification</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center justify-center font-mono font-bold text-[10px]">
                    2
                  </span>
                  <div>
                    <span className="font-semibold text-slate-200">Confidential Enclave Execution</span>
                    <p className="text-[11px] text-slate-400">Zero-retention cryptographic compute isolates proprietary IP</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-[10px]">
                    3
                  </span>
                  <div>
                    <span className="font-semibold text-slate-200">Immutable Audit Commit</span>
                    <p className="text-[11px] text-slate-400">Every decision vector is permanently logged with zero overhead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Console */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0C0C12] border border-white/5 shadow-2xl overflow-hidden flex flex-col h-full">
              {/* Terminal Window Header */}
              <div className="px-5 py-3.5 bg-[#08080A] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 ml-2">
                    ai-synthesis@nexora.sovereign:~$
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYNTHESIS READY</span>
                </div>
              </div>

              {/* Chat Interaction Body */}
              <div className="p-6 space-y-5 flex-1 min-h-[380px] overflow-y-auto bg-[#08080A]/40">
                {/* User Prompt Bubble */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="max-w-md p-3.5 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-white text-xs sm:text-sm">
                    <p className="font-medium">{currentPrompt}</p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* AI Assistant Response Bubble */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex-1 max-w-xl p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm shadow-lg space-y-3">
                    {isThinking ? (
                      <div className="flex items-center gap-2 py-4 text-indigo-400 font-mono text-xs">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" />
                        <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.15s]" />
                        <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.3s]" />
                        <span className="ml-2 text-slate-400">Evaluating causal dependency graphs...</span>
                      </div>
                    ) : (
                      <>
                        <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                          {displayedAnswer}
                        </div>
                        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                          <span className="flex items-center gap-1 text-emerald-400 font-mono">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Deterministic Proof: 99.98% Confidence
                          </span>
                          <span className="font-mono text-slate-500">Latency: 8.2ms</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Terminal Custom Input Form */}
              <form onSubmit={handleCustomSubmit} className="p-4 bg-[#08080A] border-t border-white/5 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Pose any architecture, latency, or compliance question..."
                  value={currentPrompt}
                  onChange={e => setCurrentPrompt(e.target.value)}
                  className="flex-1 bg-[#0A0A0E] border border-white/10 px-4 py-2.5 rounded-full text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  disabled={isThinking || !currentPrompt.trim()}
                  className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-600/20 active:scale-95 disabled:opacity-50 transition-all"
                  aria-label="Send query"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
