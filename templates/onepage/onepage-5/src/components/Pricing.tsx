import React from 'react';
import { PRICING_PLANS } from '../data/content';
import { PricingPlanItem } from '../types';
import { ArrowUpRight, Check, ShieldCheck, Zap } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: PricingPlanItem) => void;
  onNavigate: (sectionId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, onNavigate }) => {
  return (
    <section id="pricing" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-300">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-slate-900">08 /</span>
              <span>BUSINESS SCALE MODEL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
              STRATEGIC CAPACITY ENGAGEMENTS
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-600 max-w-md">
            Horizontal capacity plans designed for emerging ventures, fast-scaling enterprises, and global organizations.
          </p>
        </div>

        {/* Growth Vector Horizontal Line */}
        <div className="mt-10 relative">
          
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-300 z-0">
            <div className="h-full bg-emerald-500 w-2/3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {PRICING_PLANS.map((plan) => {
              const isHighlighted = plan.highlighted;
              return (
                <div
                  key={plan.id}
                  className={`border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                    isHighlighted
                      ? 'bg-slate-950 text-white border-slate-950 shadow-2xl scale-[1.02]'
                      : 'bg-[#FAF9F6] text-slate-950 border-slate-300 hover:border-slate-900'
                  }`}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="pb-4 border-b border-slate-200/20">
                      <div className="flex items-center justify-between font-mono text-xs mb-1">
                        <span className={`font-bold ${isHighlighted ? 'text-emerald-400' : 'text-slate-500'}`}>
                          {plan.subtitle}
                        </span>
                        <span className={`px-2 py-0.5 text-[10px] font-bold ${
                          isHighlighted ? 'bg-emerald-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {plan.targetScale}
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold font-sans uppercase">{plan.name}</h3>
                      <p className={`text-xs mt-2 font-sans ${isHighlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                        {plan.description}
                      </p>
                    </div>

                    {/* Investment Rate */}
                    <div>
                      <span className={`text-xs font-mono uppercase tracking-widest block mb-1 ${
                        isHighlighted ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        INVESTMENT SCALE
                      </span>
                      <div className="flex items-baseline space-x-2 font-mono">
                        <span className="text-3xl sm:text-4xl font-extrabold">{plan.price}</span>
                        <span className={`text-xs font-bold ${isHighlighted ? 'text-emerald-400' : 'text-slate-600'}`}>
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 pt-4 border-t border-slate-200/20 font-mono text-xs">
                      <span className={`font-bold uppercase tracking-wider block ${
                        isHighlighted ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        CAPACITY &amp; DELIVERABLES:
                      </span>
                      <ul className="space-y-2 font-sans text-xs">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isHighlighted ? 'text-emerald-400' : 'text-emerald-600'
                            }`} />
                            <span className={isHighlighted ? 'text-slate-200' : 'text-slate-700'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Action CTA */}
                  <div className="pt-8 mt-8 border-t border-slate-200/20">
                    <button
                      onClick={() => onSelectPlan(plan)}
                      className={`w-full py-3.5 px-6 font-mono text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2 ${
                        isHighlighted
                          ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300'
                          : 'bg-slate-950 text-white hover:bg-slate-800'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Enterprise Governance Note */}
        <div className="mt-10 p-6 bg-[#FAF9F6] border border-slate-300 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center space-x-3 text-slate-700">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>CUSTOM LEGAL, MSA, SOC2 TYPE II &amp; EU DATA RESIDENCY COMPLIANCE AVAILABLE FOR ENTERPRISE PODS.</span>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="text-slate-950 font-bold uppercase underline underline-offset-4 hover:text-emerald-700 shrink-0"
          >
            DISCUSS ENTERPRISE MSA
          </button>
        </div>

      </div>
    </section>
  );
};
