import React from 'react';
import { motion } from 'framer-motion';
import { Network, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/features';

const stepIcons = {
  Network: Network,
  Sparkles: Sparkles,
  Zap: Zap,
};

export default function HowItWorks() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-amber-500/5 blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            3-Step Workflow
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            How Flowzen Drives{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Unstoppable Momentum.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Get up and running in under five minutes without changing how your engineers already write code or organize sprints.
          </p>
        </div>

        {/* 3-Step Horizontal / Vertical Process */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          
          {/* Animated Connecting Line on Desktop */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-400/60 to-amber-500/20 -z-0"></div>

          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = stepIcons[step.icon] || Sparkles;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative z-10 flex flex-col p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-amber-500/40 hover:bg-white/[0.04] transition-all duration-300 group shadow-xl shadow-black/40"
              >
                {/* Step Top Row: Step Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#0d0d12] border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-400 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300">
                    <Icon size={26} />
                  </div>

                  <span className="text-4xl font-extrabold font-heading text-zinc-700 group-hover:text-amber-400/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Step Content */}
                <div className="text-xs font-mono font-semibold uppercase text-amber-400 tracking-wider mb-1">
                  {step.subtitle}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.name}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  {step.actionText}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
