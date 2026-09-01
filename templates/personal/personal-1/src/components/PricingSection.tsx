import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CreditCard,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  Calculator,
} from 'lucide-react';
import { PRICING_TIERS } from '../data/portfolioData';
import { PricingTier } from '../types';

interface PricingSectionProps {
  onSelectTier: (tier: PricingTier) => void;
  onOpenEstimator: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectTier,
  onOpenEstimator,
}) => {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project');

  return (
    <section
      id="pricing"
      className="relative py-28 bg-[#050505] text-[#E5E5E5] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] mb-4 font-mono">
              <CreditCard size={13} />
              <span>11 / INVESTMENT & SCOPE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-2xl leading-[1.05]">
              Transparent <span className="font-serif italic font-normal text-[#D4AF37]">Engagement</span> Models.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-xl font-light">
              Predictable investments backed by ironclad timelines, high-velocity milestones, and zero technical debt guarantees.
            </p>
          </div>

          {/* Pricing Controls: Monthly/Project toggle + Interactive Cost Estimator Trigger */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center p-1.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <button
                type="button"
                id="pricing-billing-project-btn"
                onClick={() => setBillingCycle('project')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  billingCycle === 'project'
                    ? 'bg-[#D4AF37] text-black font-extrabold shadow-md shadow-[#D4AF37]/20'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Fixed Project
              </button>
              <button
                type="button"
                id="pricing-billing-monthly-btn"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[#D4AF37] text-black font-extrabold shadow-md shadow-[#D4AF37]/20'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Monthly Retainer
              </button>
            </div>

            <button
              type="button"
              id="pricing-open-cost-estimator-btn"
              onClick={onOpenEstimator}
              className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-xs font-mono text-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all flex items-center gap-2 shadow-lg"
            >
              <Calculator size={14} />
              <span>Project Calculator</span>
            </button>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier, index) => {
            const price =
              billingCycle === 'monthly' ? tier.priceMonthly : tier.priceProject;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all shadow-2xl backdrop-blur-xl ${
                  tier.popular
                    ? 'bg-white/[0.06] border-2 border-[#D4AF37] gold-glow lg:-translate-y-2'
                    : 'bg-white/[0.03] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Ribbon */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-500 to-amber-600 text-black font-extrabold text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles size={12} />
                    <span>Most Requested Tier</span>
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <div className="font-display font-bold text-2xl text-white mb-1 tracking-tight">
                    {tier.name}
                  </div>
                  <div className="text-xs text-neutral-400 mb-6 font-sans">
                    {tier.tagline}
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {billingCycle === 'monthly' ? '/ month' : '/ milestone'}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#D4AF37] mb-6 flex items-center gap-1.5">
                    <span>Turnaround:</span>
                    <span className="text-white font-semibold">{tier.turnaround}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      Included Capabilities:
                    </div>
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                    {tier.notIncluded?.map((notFeat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-500 line-through">
                        <XCircle size={15} className="text-neutral-600 shrink-0 mt-0.5" />
                        <span>{notFeat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <button
                  type="button"
                  id={`pricing-select-btn-${tier.id}`}
                  onClick={() => onSelectTier(tier)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg ${
                    tier.popular
                      ? 'bg-gradient-to-r from-[#D4AF37] via-amber-500 to-amber-600 text-black font-extrabold hover:scale-[1.02] shadow-[#D4AF37]/25'
                      : 'bg-white/[0.04] hover:bg-white/10 text-white border border-white/15 hover:border-white/30'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
