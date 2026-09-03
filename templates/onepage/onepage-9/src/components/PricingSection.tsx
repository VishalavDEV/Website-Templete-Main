import React, { useState } from 'react';
import { PRICING_TIERS, FAQ_DATA } from '../data/mockData';
import { PricingTier } from '../types';
import { Check, Sparkles, HelpCircle, ChevronDown, ChevronUp, Search, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PricingSectionProps {
  onOpenContact: (tierName?: string) => void;
  onNavigateToEngine: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenContact,
  onNavigateToEngine
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const filteredFaqs = FAQ_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <section id="pricing-section" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 uppercase tracking-wider mb-4">
            Transparent Engagements
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Predictable investment models. Zero hidden overhead.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Choose between focused sprint milestones, dedicated senior pods, or bespoke enterprise modernization. 100% IP ownership from day one.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-900 border border-slate-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Standard Sprint / Monthly
            </button>

            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Quarterly Retainer</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {PRICING_TIERS.map((tier) => {
            const price = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceQuarterly;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-indigo-500/80 shadow-2xl shadow-indigo-950/30'
                    : 'bg-slate-900/40 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-[10px] uppercase font-mono tracking-widest shadow-md">
                    Most Selected by Scale-Ups
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl font-bold text-white">{tier.name}</h3>
                  </div>

                  <p className="text-xs font-mono text-indigo-300 mb-4">{tier.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{tier.description}</p>

                  {/* Price Display */}
                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-bold text-white tracking-tight">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        / {billingCycle === 'monthly' ? 'month' : 'mo (billed quarterly)'}
                      </span>
                    </div>
                    <div className="mt-2 text-[11px] font-mono text-slate-400">
                      SLA: <span className="text-emerald-400 font-semibold">{tier.deliverableSLA}</span>
                    </div>
                  </div>

                  {/* Staff Composition */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 mb-6">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Dedicated Unit Composition</div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5">{tier.teamComposition}</div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Included Architecture Provisions
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onOpenContact(tier.name)}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white hover:scale-[1.02] shadow-indigo-500/25'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{tier.ctaText}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Sizing Banner */}
        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 mb-24">
          <div>
            <h4 className="font-display text-xl font-bold text-white">Need a specialized scope or dynamic modular team?</h4>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Use our real-time interactive configurator to specify exact system modules, delivery speed, and custom SLA requirements.
            </p>
          </div>
          <button
            onClick={onNavigateToEngine}
            className="px-6 py-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold transition-all whitespace-nowrap"
          >
            Launch Interactive Configurator →
          </button>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-300 uppercase">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Clarified</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Frequently Asked Inquiries
              </h3>
            </div>

            {/* Live Search Filter for FAQs */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-400/40"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900/60 border border-slate-800/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-slate-100">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-lg bg-slate-950 text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/40 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
