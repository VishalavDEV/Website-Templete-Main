import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { pricingTiers } from '../data/landingData';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 sm:py-32 scroll-mt-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ borderColor: 'var(--border-hover)', color: 'var(--accent-start)' }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--accent-mid)' }} />
            Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: 'var(--text-main)' }}
          >
            Predictable Plans.{' '}
            <span className="text-gradient-purple-cyan">Infinite Scale.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg"
            style={{ color: 'var(--text-sub)' }}
          >
            Start free on our global edge mesh. Scale seamlessly to millions of requests with automated canary safeguards.
          </motion.p>

          {/* Billing Cycle Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl glass-panel border"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                !isAnnual
                  ? 'shadow-md font-bold'
                  : 'hover:opacity-100 opacity-70'
              }`}
              style={
                !isAnnual
                  ? { backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }
                  : { color: 'var(--text-sub)' }
              }
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                isAnnual ? 'text-white shadow-lg' : 'hover:opacity-100 opacity-70'
              }`}
              style={
                isAnnual
                  ? { background: 'linear-gradient(90deg, var(--accent-start), var(--accent-mid))' }
                  : { color: 'var(--text-sub)' }
              }
            >
              <span>Annual Billing</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, index) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
            const isPro = tier.popular;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl relative flex flex-col justify-between p-7 sm:p-8 transition-all duration-300 ${
                  isPro
                    ? 'glass-panel shadow-2xl lg:-translate-y-2 border-2'
                    : 'glass-card border'
                }`}
                style={{
                  borderColor: isPro ? 'var(--accent-start)' : 'var(--border-color)'
                }}
              >
                {/* Popular Ribbon for Pro */}
                {isPro && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold tracking-wider uppercase shadow-lg flex items-center gap-1.5"
                    style={{ background: 'linear-gradient(90deg, var(--accent-start), var(--accent-mid))' }}
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>{tier.name}</h3>
                    {!isPro && (
                      <span
                        className="text-xs px-2.5 py-1 rounded-full border font-medium"
                        style={{ backgroundColor: 'var(--bg-pill)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
                      >
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed min-h-[40px]" style={{ color: 'var(--text-sub)' }}>
                    {tier.description}
                  </p>

                  {/* Price display */}
                  <div className="mt-6 mb-6 pb-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-main)' }}>
                        ${price}
                      </span>
                      <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                        / month {isAnnual && price > 0 ? '(billed annually)' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      Included in {tier.name}:
                    </div>
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span style={{ color: tier.highlightFeatures?.includes(feature) ? 'var(--text-main)' : 'var(--text-sub)', fontWeight: tier.highlightFeatures?.includes(feature) ? '600' : '400' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversion Button */}
                <div>
                  <a
                    href="#interactive-demo"
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                      isPro
                        ? 'text-white shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                        : 'glass-pill hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                    style={
                      isPro
                        ? { background: 'linear-gradient(90deg, var(--accent-start), var(--accent-mid))' }
                        : { color: 'var(--text-main)' }
                    }
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-center text-[11px] mt-2.5" style={{ color: 'var(--text-muted)' }}>
                    {tier.id === 'starter' ? 'No credit card required' : '14-day risk-free trial'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
