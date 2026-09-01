import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, Check, Sparkles, ArrowRight, Clock, DollarSign } from 'lucide-react';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyEstimate: (summary: string, estimatedBudget: string) => void;
}

interface ScopeOption {
  id: string;
  name: string;
  basePrice: number;
  weeks: number;
}

interface AddonOption {
  id: string;
  name: string;
  price: number;
  weeks: number;
}

const SCOPE_OPTIONS: ScopeOption[] = [
  { id: 'ai-studio', name: 'Multimodal AI Web App & Canvas', basePrice: 28000, weeks: 6 },
  { id: 'design-system', name: 'Design System & Token Architecture', basePrice: 20000, weeks: 4 },
  { id: '3d-canvas', name: 'WebGPU / Three.js 3D Visual Experience', basePrice: 32000, weeks: 8 },
  { id: 'fullstack-flagship', name: 'End-to-End Flagship SaaS Architecture', basePrice: 45000, weeks: 10 },
  { id: 'advisory', name: 'Executive Technical & Design Advisory Sprint', basePrice: 15000, weeks: 2 },
];

const ADDON_OPTIONS: AddonOption[] = [
  { id: 'realtime', name: 'Real-Time WebSocket & State Synchronization', price: 6000, weeks: 1 },
  { id: 'soc2', name: 'Security Hardening & Enterprise Audit Compliance', price: 8000, weeks: 2 },
  { id: 'wcag', name: 'WCAG AAA Accessibility & Spatial Sound Design', price: 4500, weeks: 1 },
  { id: 'perf', name: 'Sub-50ms Global Edge Optimization & Shaders', price: 7500, weeks: 1 },
];

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyEstimate,
}) => {
  const [selectedScope, setSelectedScope] = useState<string>('ai-studio');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['realtime', 'wcag']);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'expedited'>('standard');

  if (!isOpen) return null;

  const currentScope = SCOPE_OPTIONS.find((s) => s.id === selectedScope) || SCOPE_OPTIONS[0];
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDON_OPTIONS.find((a) => a.id === addonId);
    return sum + (addon?.price || 0);
  }, 0);
  const addonsWeeks = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDON_OPTIONS.find((a) => a.id === addonId);
    return sum + (addon?.weeks || 0);
  }, 0);

  const rawPrice = currentScope.basePrice + addonsTotal;
  const finalPrice = timelineSpeed === 'expedited' ? rawPrice * 1.25 : rawPrice;
  const totalWeeks = Math.max(
    2,
    timelineSpeed === 'expedited'
      ? Math.ceil((currentScope.weeks + addonsWeeks) * 0.75)
      : currentScope.weeks + addonsWeeks
  );

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApply = () => {
    const formattedBudget = `$${finalPrice.toLocaleString()}`;
    const summary = `${currentScope.name} (${timelineSpeed === 'expedited' ? 'Expedited ' : ''}${totalWeeks} weeks) with addons: ${selectedAddons.join(', ')}`;
    onApplyEstimate(summary, formattedBudget);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl text-white p-6 sm:p-10 my-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            id="cost-estimator-close-btn"
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-950/80 hover:bg-amber-400 hover:text-neutral-950 text-neutral-300 border border-neutral-800 transition-colors z-20"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-amber-400 mb-3">
            <Calculator size={14} />
            <span>INTERACTIVE ESTIMATOR</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
            Dynamic Project & Investment Calculator
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans mb-8">
            Configure your technical scope, specialized add-ons, and velocity to generate transparent ballpark pricing and delivery schedules.
          </p>

          {/* Scope Selector */}
          <div className="mb-6">
            <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3 font-semibold">
              1. Select Primary Architectural Scope:
            </label>
            <div className="space-y-2">
              {SCOPE_OPTIONS.map((scope) => (
                <div
                  key={scope.id}
                  onClick={() => setSelectedScope(scope.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedScope === scope.id
                      ? 'bg-neutral-950 border-amber-400 text-white shadow-md'
                      : 'bg-neutral-950/50 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        selectedScope === scope.id
                          ? 'border-amber-400 bg-amber-400 text-neutral-950'
                          : 'border-neutral-700'
                      }`}
                    >
                      {selectedScope === scope.id && <Check size={12} className="stroke-[3]" />}
                    </div>
                    <span className="font-display font-bold text-sm text-white">
                      {scope.name}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-amber-400">
                    from ${scope.basePrice.toLocaleString()} ({scope.weeks} wks)
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons Selector */}
          <div className="mb-6">
            <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3 font-semibold">
              2. Specialized Engineering Add-Ons:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ADDON_OPTIONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-neutral-950 border-amber-400 text-white'
                        : 'bg-neutral-950/50 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-amber-400 bg-amber-400 text-neutral-950'
                          : 'border-neutral-700'
                      }`}
                    >
                      {isSelected && <Check size={10} className="stroke-[3]" />}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-xs text-white">
                        {addon.name}
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                        +${addon.price.toLocaleString()} (+{addon.weeks} wk)
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Velocity Speed Switch */}
          <div className="mb-8">
            <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3 font-semibold">
              3. Delivery Velocity:
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setTimelineSpeed('standard')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  timelineSpeed === 'standard'
                    ? 'bg-neutral-950 border-amber-400'
                    : 'bg-neutral-950/50 border-neutral-800 opacity-60'
                }`}
              >
                <div className="font-display font-bold text-sm text-white">Standard Cadence</div>
                <div className="text-xs text-neutral-400 mt-1">Normal milestone sprints</div>
              </button>
              <button
                type="button"
                onClick={() => setTimelineSpeed('expedited')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  timelineSpeed === 'expedited'
                    ? 'bg-neutral-950 border-amber-400'
                    : 'bg-neutral-950/50 border-neutral-800 opacity-60'
                }`}
              >
                <div className="font-display font-bold text-sm text-amber-400">Expedited Priority (+25%)</div>
                <div className="text-xs text-neutral-400 mt-1">Dedicated priority sprint queue</div>
              </button>
            </div>
          </div>

          {/* Calculated Output Card */}
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Estimated Ballpark Investment
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-amber-400 mt-1">
                ${finalPrice.toLocaleString()} <span className="text-xs font-mono text-neutral-400 font-normal">USD</span>
              </div>
            </div>

            <div className="sm:text-right">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Projected Duration
              </div>
              <div className="font-display font-bold text-2xl text-white mt-1">
                ~{totalWeeks} Weeks
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-neutral-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              id="cost-estimator-apply-btn"
              onClick={handleApply}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs tracking-wide transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <span>Transfer Estimate to Inquiry</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
