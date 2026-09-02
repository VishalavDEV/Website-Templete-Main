import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Link2, BarChart3, Compass, Zap, TrendingUp } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Connect',
      subtitle: 'Build lasting relationships',
      icon: Link2,
      detail: 'Instantly link accounts, portfolio repositories, and business ledgers. Pair with a licensed dedicated Finora relationship advisor matching your goals.',
      deliverable: 'Unified financial graph & dedicated advisor match',
    },
    {
      number: '02',
      title: 'Understand',
      subtitle: 'Get real-time financial insights',
      icon: BarChart3,
      detail: 'Our AI engine scans cash flow anomalies, tax optimization opportunities, and asset allocation gaps in real-time across all balances.',
      deliverable: '360° Financial Health Index & continuous audit',
    },
    {
      number: '03',
      title: 'Plan',
      subtitle: 'Create goals and strategies',
      icon: Compass,
      detail: 'Co-create dynamic, stress-tested strategies for home purchases, enterprise scaling, equity liquidation, and retirement independence.',
      deliverable: 'Dynamic multi-scenario roadmap with Monte Carlo simulation',
    },
    {
      number: '04',
      title: 'Act',
      subtitle: 'Take smarter financial action',
      icon: Zap,
      detail: 'Execute automated rebalancing, high-yield sweeps, tax loss harvesting, and advisor-verified decisions with one-tap authorizations.',
      deliverable: 'Frictionless execution & automated yield optimization',
    },
    {
      number: '05',
      title: 'Grow',
      subtitle: 'Achieve long-term financial well-being',
      icon: TrendingUp,
      detail: 'Track compounding returns, celebrate milestone achievements, and scale your financial resilience with ongoing proactive reviews.',
      deliverable: 'Long-term wealth compounding and generational security',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      {/* SECTION TITLE WITH ORNAMENTAL DASHES */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-12 sm:w-16 h-[1px] bg-gray-300" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#191919] tracking-tight">
            How it works
          </h2>
          <div className="w-12 sm:w-16 h-[1px] bg-gray-300" />
        </div>
        <p className="text-sm sm:text-base text-[#191919]/70 font-normal leading-relaxed">
          A seamless journey from connection to confidence.
        </p>
      </div>

      {/* 5-STEP HORIZONTAL PROGRESSION */}
      <div className="relative">
        {/* Connecting Horizontal Line across desktop */}
        <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-gray-200 z-0" />

        {/* 5 Step Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 relative z-10">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`group flex flex-col items-center text-center cursor-pointer transition-all duration-200 p-4 rounded-2xl ${
                  isActive ? 'bg-[#FAF9F6] lg:bg-transparent' : 'hover:bg-gray-50/80 lg:hover:bg-transparent'
                }`}
              >
                {/* Circular Step Badge */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 mb-4 border ${
                    isActive
                      ? 'bg-[#191919] text-white border-black shadow-md scale-110'
                      : 'bg-[#F7F5F0] text-[#191919] border-gray-200/80 group-hover:border-gray-400'
                  }`}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-[#191919] mb-1">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-gray-500 max-w-[170px] leading-relaxed">
                  {step.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* EXPANDED INTERACTIVE STEP DETAILS CARD */}
      <div className="mt-12 bg-[#F7F5F0] rounded-3xl p-6 sm:p-10 border border-[#EBE8E1] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-gray-500">
            <span>STEP {steps[activeStep].number}</span>
            <span>•</span>
            <span className="font-semibold text-[#191919]">{steps[activeStep].title}</span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-serif text-[#191919] font-normal">
            {steps[activeStep].subtitle}
          </h4>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
            {steps[activeStep].detail}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-medium text-emerald-800 bg-white inline-flex px-3.5 py-2 rounded-xl border border-gray-200">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Key Outcome: {steps[activeStep].deliverable}</span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3">
          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  i === activeStep ? 'w-8 bg-[#191919]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="px-4 py-2 bg-white hover:bg-gray-100 text-xs font-medium rounded-xl border border-gray-200 text-gray-700 transition cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2 bg-[#191919] hover:bg-black text-xs font-medium rounded-xl text-white transition cursor-pointer"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
