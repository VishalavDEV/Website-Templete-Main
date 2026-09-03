import React, { useState } from 'react';
import { Sparkles, Calculator, Check, ArrowRight, Download, FileText, Clock, Users, Shield, Cpu, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface StudioEngineProps {
  onOpenContact: (customScope?: string) => void;
  onShowToast: (title: string, description?: string, type?: 'success' | 'info') => void;
}

interface ProjectArchetype {
  id: string;
  title: string;
  tagline: string;
  basePrice: number;
  baseWeeks: number;
  icon: string;
}

interface AddonOption {
  id: string;
  name: string;
  price: number;
  weeks: number;
  category: string;
  description: string;
}

export const StudioEngine: React.FC<StudioEngineProps> = ({ onOpenContact, onShowToast }) => {
  const [selectedArchetype, setSelectedArchetype] = useState<string>('scaleup');
  const [designLevel, setDesignLevel] = useState<'precision' | 'bespoke' | 'luxury'>('bespoke');
  const [velocity, setVelocity] = useState<'standard' | 'accelerated' | 'hyper'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'ai-rag',
    'realtime-ws'
  ]);
  const [isProposalGenerated, setIsProposalGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const archetypes: ProjectArchetype[] = [
    {
      id: 'mvp',
      title: 'Velocity MVP Sprint',
      tagline: 'High-velocity 0-to-1 prototype designed to secure funding and early user validation.',
      basePrice: 14500,
      baseWeeks: 4,
      icon: 'Rocket'
    },
    {
      id: 'scaleup',
      title: 'Scale-Up Product Engine',
      tagline: 'End-to-end full-stack platform with custom design system and scalable cloud core.',
      basePrice: 28500,
      baseWeeks: 8,
      icon: 'Layers'
    },
    {
      id: 'ai-core',
      title: 'Autonomous AI Orchestration',
      tagline: 'Bespoke multi-agent system, vector RAG pipelines, and sub-100ms reasoning inference.',
      basePrice: 34000,
      baseWeeks: 8,
      icon: 'Cpu'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Sovereign Cloud',
      tagline: 'Multi-region distributed infrastructure with SOC2 Type II and on-prem AI compliance.',
      basePrice: 52000,
      baseWeeks: 12,
      icon: 'Shield'
    }
  ];

  const addonsList: AddonOption[] = [
    {
      id: 'ai-rag',
      name: 'Proprietary Multimodal Vector RAG',
      price: 6500,
      weeks: 1,
      category: 'AI Systems',
      description: 'Hybrid sparse-dense retrieval with sub-50ms context ranking and automated guardrails.'
    },
    {
      id: 'realtime-ws',
      name: 'High-Throughput WebSocket / gRPC Core',
      price: 4800,
      weeks: 1,
      category: 'Cloud Engineering',
      description: 'Zero-latency bidirectional event broadcasting with Redis distributed pub/sub.'
    },
    {
      id: 'soc2-shield',
      name: 'SOC2 Type II & Zero-Trust Hardening',
      price: 5200,
      weeks: 1,
      category: 'Security',
      description: 'Audit-ready encryption at rest/transit, granular RBAC, and automated vulnerability scanning.'
    },
    {
      id: 'design-3d',
      name: 'Interactive WebGL / 3D Spatial Canvas',
      price: 4200,
      weeks: 1,
      category: 'Design & Motion',
      description: '60fps GPU-accelerated interactive canvas shaders and responsive 3D asset pipeline.'
    },
    {
      id: 'multilingual-ai',
      name: 'Continuous AI Multilingual Localization',
      price: 3200,
      weeks: 0.5,
      category: 'Global Reach',
      description: 'Dynamic contextual translation across 24 languages with dialect fine-tuning.'
    }
  ];

  const currentArchetype = archetypes.find((a) => a.id === selectedArchetype) || archetypes[1];

  // Design level multipliers
  const designMultiplier = designLevel === 'precision' ? 1 : designLevel === 'bespoke' ? 1.15 : 1.35;
  
  // Velocity calculation
  const velocityMultiplier = velocity === 'standard' ? 1 : velocity === 'accelerated' ? 1.2 : 1.45;
  const velocityWeeksReduction = velocity === 'standard' ? 1 : velocity === 'accelerated' ? 0.85 : 0.7;

  // Addons calculation
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = addonsList.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const addonsWeeksTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = addonsList.find((a) => a.id === addonId);
    return sum + (addon ? addon.weeks : 0);
  }, 0);

  const calculatedCost = Math.round((currentArchetype.basePrice * designMultiplier + addonsTotal) * (velocity === 'hyper' ? 1.25 : 1));
  const calculatedWeeks = Math.max(3, Math.round((currentArchetype.baseWeeks + addonsWeeksTotal) * velocityWeeksReduction * 10) / 10);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleGenerateProposal = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsProposalGenerated(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      onShowToast(
        'Proposal Manifest Generated',
        'Your custom architecture proposal is ready for download or consultation handover.',
        'success'
      );
    }, 1200);
  };

  const handleSimulatedDownload = () => {
    onShowToast(
      'Exporting Architecture PDF...',
      'Your customized proposal manifest has been compiled to PDF.',
      'info'
    );
  };

  const formattedScopeSummary = `Custom Architecture Scope: ${currentArchetype.title} with ${designLevel.toUpperCase()} Design Fidelity, ${velocity.toUpperCase()} velocity (${calculatedWeeks} weeks), including: ${selectedAddons.join(', ')}. Est. Investment: $${calculatedCost.toLocaleString()}`;

  return (
    <section id="studio-engine-section" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Studio Engine</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Configure your technical scope, delivery velocity &amp; investment model.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Real-time project sizing powered by AURA's historical architectural telemetry. Select your system modules to generate an instant proposal manifest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Project Archetype */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                1. Select Core Architectural Archetype
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {archetypes.map((arch) => {
                  const isSelected = selectedArchetype === arch.id;
                  return (
                    <button
                      key={arch.id}
                      onClick={() => setSelectedArchetype(arch.id)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'bg-indigo-500/10 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-bold text-sm text-white">{arch.title}</span>
                        {isSelected && <Check className="w-4 h-4 text-indigo-400" />}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed mb-3">{arch.tagline}</p>
                      <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-slate-800/80">
                        <span className="text-slate-500">Base: {arch.baseWeeks} wks</span>
                        <span className="text-indigo-300 font-bold">${arch.basePrice.toLocaleString()}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Design & Motion Fidelity */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                2. Design System &amp; Motion Fidelity
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'precision', label: 'Precision UI System', desc: 'Mathematical tokens & components' },
                  { id: 'bespoke', label: 'Bespoke Editorial UI', desc: 'Custom interactions & animations' },
                  { id: 'luxury', label: 'Luxury Interactive 3D', desc: 'Spatial WebGL & custom sound design' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDesignLevel(item.id as any)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      designLevel === item.id
                        ? 'bg-indigo-500/10 border-indigo-500 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-100">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Modular Capability Addons */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                3. Specialized Architectural Modules
              </label>
              <div className="space-y-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-slate-900 border-indigo-500/60 text-white'
                          : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked
                              ? 'bg-indigo-600 border-indigo-600 text-white'
                              : 'border-slate-700 bg-slate-950'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-200">{addon.name}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{addon.description}</div>
                        </div>
                      </div>

                      <div className="text-right shrink-0 font-mono text-xs">
                        <div className="text-indigo-300 font-bold">+${addon.price.toLocaleString()}</div>
                        <div className="text-[10px] text-slate-500">+{addon.weeks} wks</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Delivery Velocity */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                4. Delivery Velocity &amp; Sprint Cadence
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Standard Cadence', note: 'Balanced parallel execution' },
                  { id: 'accelerated', label: 'Accelerated Sprint', note: 'Priority staffing & daily review' },
                  { id: 'hyper', label: 'Hyper-Sprint Pod', note: 'Dual-shift engineering unit' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setVelocity(item.id as any)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      velocity === item.id
                        ? 'bg-indigo-500/10 border-indigo-500 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-100">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{item.note}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Live Estimate Cockpit */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Live Scope Estimate
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  REAL-TIME SYNC
                </span>
              </div>

              {/* Big Investment Figure */}
              <div className="py-6">
                <div className="text-xs text-slate-400 font-mono mb-1">Total Estimated Investment</div>
                <div className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  ${calculatedCost.toLocaleString()}
                  <span className="text-xs font-mono text-slate-500 font-normal ml-2">USD</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Delivery Target</span>
                    </div>
                    <div className="font-display text-xl font-bold text-slate-100 font-mono">
                      {calculatedWeeks} <span className="text-xs text-slate-400 font-sans">Weeks</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                      <Users className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Dedicated Unit</span>
                    </div>
                    <div className="font-display text-base font-bold text-slate-100 font-mono">
                      {calculatedCost > 40000 ? '4-6' : '2-3'} Specialists
                    </div>
                  </div>
                </div>
              </div>

              {/* Manifest Itemized Overview */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono mb-6">
                <div className="flex justify-between text-slate-400 pb-1.5 border-b border-slate-900">
                  <span>Archetype:</span>
                  <span className="text-slate-200">{currentArchetype.title}</span>
                </div>
                <div className="flex justify-between text-slate-400 pb-1.5 border-b border-slate-900">
                  <span>Design Fidelity:</span>
                  <span className="text-slate-200 capitalize">{designLevel} UI</span>
                </div>
                <div className="flex justify-between text-slate-400 pb-1.5 border-b border-slate-900">
                  <span>Modules Included:</span>
                  <span className="text-indigo-300 font-bold">{selectedAddons.length} Selected</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Velocity Mode:</span>
                  <span className="text-emerald-400 capitalize">{velocity}</span>
                </div>
              </div>

              {/* Action Handlers */}
              <div className="space-y-3">
                <button
                  onClick={handleGenerateProposal}
                  disabled={isGenerating}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>{isGenerating ? 'Compiling Architectural Manifest...' : 'Generate Official Proposal Manifest'}</span>
                </button>

                <button
                  onClick={() => onOpenContact(formattedScopeSummary)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Consultation With This Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                </button>
              </div>

              {/* Modal Display upon Proposal Generation */}
              <AnimatePresence>
                {isProposalGenerated && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-slate-800 overflow-hidden"
                  >
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-emerald-300 mb-1">
                        <Check className="w-4 h-4" />
                        <span>Manifest Ready: #AURA-SPEC-{Math.floor(1000 + Math.random() * 9000)}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mb-3">
                        Includes full milestone cadence, SLA breakdown, and IP transfer terms.
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={handleSimulatedDownload}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] text-slate-200 font-medium flex items-center gap-1.5"
                        >
                          <Download className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Export PDF</span>
                        </button>
                        <button
                          onClick={() => onOpenContact(formattedScopeSummary)}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold flex items-center gap-1"
                        >
                          <span>Proceed to Booking →</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
