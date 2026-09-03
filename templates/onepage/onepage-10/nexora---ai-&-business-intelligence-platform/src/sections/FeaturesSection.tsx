import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { FEATURES_DATA } from '../data/features';
import {
  ShieldCheck,
  Cpu,
  Layers,
  Zap,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const CATEGORIES = ['All Capabilities', 'Core Architecture', 'AI & ML', 'Security', 'Scalability'];

export const FeaturesSection: React.FC = () => {
  const { setActiveFeatureModal } = useApp();
  const [selectedCat, setSelectedCat] = useState('All Capabilities');

  const filteredFeatures = useMemo(() => {
    if (selectedCat === 'All Capabilities') return FEATURES_DATA;
    return FEATURES_DATA.filter(f => f.category === selectedCat);
  }, [selectedCat]);

  return (
    <section id="features" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise-Grade Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Architected for Zero Failure.
          </h2>
          <p className="text-base text-slate-400">
            Engineered from silicon to decision layer with sovereign isolation, causal inference, and real-time cryptographic verification.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCat === cat
                  ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredFeatures.map(feat => (
            <div
              key={feat.id}
              onClick={() => setActiveFeatureModal(feat)}
              className="p-5 rounded-2xl bg-[#0C0C12] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/20"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    {feat.category}
                  </span>
                  {feat.badge && (
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {feat.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold font-display text-white group-hover:text-indigo-400 transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {feat.shortDescription}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-mono">Click to inspect</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
