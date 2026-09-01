import React from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ArrowRight, Terminal, Cpu, Layers, Activity, CheckSquare, ShieldCheck, Boxes } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const iconMap = {
  Cpu: Cpu,
  Layers: Layers,
  Activity: Activity,
  CheckSquare: CheckSquare,
  ShieldCheck: ShieldCheck,
  Boxes: Boxes,
};

export default function FeatureModal() {
  const { featureModalData, closeFeatureModal, openAuthModal } = useModal();

  if (!featureModalData) return null;

  const Icon = iconMap[featureModalData.icon] || Sparkles;

  const handleTryInPlayground = () => {
    closeFeatureModal();
    openAuthModal('growth');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeFeatureModal}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-xl rounded-3xl bg-[#0c0c10]/95 border border-white/15 shadow-2xl shadow-black/95 backdrop-blur-2xl p-6 md:p-8 z-10 overflow-hidden text-left"
      >
        <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <button
          onClick={closeFeatureModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Feature Details"
        >
          <X size={18} />
        </button>

        {/* Feature Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/10">
            <Icon size={28} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400">
                {featureModalData.badge}
              </span>
              <span className="text-xs text-zinc-500 font-mono">{featureModalData.metrics}</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
              {featureModalData.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          {featureModalData.description}
        </p>

        {/* Technical Architecture Specs */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-zinc-300">
            <div className="flex items-center justify-between text-zinc-500 mb-2 pb-1.5 border-b border-white/[0.06]">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Terminal size={13} />
                runtime_spec.json
              </span>
              <span>v2.4.0 Engine</span>
            </div>
            <p><span className="text-amber-400">"throughput":</span> "50,000 events/sec",</p>
            <p><span className="text-amber-400">"execution_mode":</span> "deterministic_distributed_actor",</p>
            <p><span className="text-amber-400">"security_level":</span> "SOC2_Type_II_E2EE",</p>
            <p><span className="text-amber-400">"auto_retry_backoff":</span> "exponential_jitter_enabled"</p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
              <span className="text-zinc-300">Zero-downtime hot reloading</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
              <span className="text-zinc-300">Sub-15ms multi-region sync</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={closeFeatureModal}
            className="px-5 py-3 rounded-xl text-xs font-semibold bg-white/[0.05] text-zinc-300 hover:text-white border border-white/10"
          >
            Close
          </button>
          <button
            onClick={handleTryInPlayground}
            className="flex-grow py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Launch Live Feature Playground</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </motion.div>
    </div>
  );
}
