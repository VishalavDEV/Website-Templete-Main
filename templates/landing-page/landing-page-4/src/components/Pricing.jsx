import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/pricing';
import { useModal } from '../context/ModalContext';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { openAuthModal, openDemoModal } = useModal();

  const handlePlanClick = (planId) => {
    if (planId === 'scale') {
      openDemoModal();
    } else {
      openAuthModal(planId);
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[180px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap size={14} />
            Transparent Pricing
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Predictable Plans for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              High-Velocity Teams.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8">
            Start with our 14-day free trial. No credit card required. Upgrade, downgrade, or cancel anytime.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                !isAnnual
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isAnnual
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Annual Billing
              <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full ${
                isAnnual ? 'bg-black text-amber-400' : 'bg-amber-500/20 text-amber-300'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isHighlighted = plan.popular;
            const price = typeof plan.monthlyPrice === 'number'
              ? (isAnnual ? plan.annualPrice : plan.monthlyPrice)
              : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'p-8 md:p-9 bg-gradient-to-b from-[#15151c] to-[#0c0c10] border-2 border-amber-500 shadow-2xl shadow-amber-500/20 lg:-translate-y-3'
                    : 'p-7 md:p-8 bg-white/[0.025] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Popular Highlight Ribbon */}
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 flex items-center gap-1.5">
                    <Sparkles size={13} />
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/[0.05] text-zinc-300">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 min-h-[38px] mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-1">
                      {typeof price === 'number' ? (
                        <>
                          <span className="text-2xl font-bold text-zinc-400">$</span>
                          <span className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
                            {price}
                          </span>
                          <span className="text-xs text-zinc-400 font-medium ml-1">/ user / mo</span>
                        </>
                      ) : (
                        <span className="text-4xl font-extrabold text-white font-heading">
                          Custom
                        </span>
                      )}
                    </div>
                    {typeof price === 'number' && (
                      <div className="text-[11px] text-zinc-500 mt-1">
                        {isAnnual ? 'Billed annually ($' + (price * 12) + '/yr)' : 'Billed monthly'}
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Included in this plan:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <div className={`mt-0.5 p-0.5 rounded-full ${
                          isHighlighted ? 'bg-amber-500/20 text-amber-400' : 'bg-white/10 text-white'
                        }`}>
                          <Check size={13} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => handlePlanClick(plan.id)}
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      isHighlighted
                        ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 hover:scale-[1.02]'
                        : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15'
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowRight size={15} />
                  </button>

                  <div className="text-center text-[11px] text-zinc-500 mt-3 font-mono">
                    {plan.highlightFeature}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Callout Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Need tailored security compliance or on-prem VPC hosting?</div>
              <div className="text-xs text-zinc-400">Our enterprise engineering team can build bespoke pipeline adapters for your stack.</div>
            </div>
          </div>
          <button
            onClick={openDemoModal}
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-white/[0.08] hover:bg-white/[0.15] text-white whitespace-nowrap transition-colors cursor-pointer"
          >
            Contact Solutions Team →
          </button>
        </div>

      </div>
    </section>
  );
}
