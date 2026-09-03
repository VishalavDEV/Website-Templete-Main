import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Cpu,
  Layout,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/landingData';

const iconMap = {
  Database,
  Cpu,
  Layout,
  Globe,
  Sparkles
};

export default function Process({ onOpenContact }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-[#07090e] overflow-hidden">
      {/* Background glow */}
      <div className="aurora-glow-2 top-1/3 left-10 opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono font-semibold text-purple-400 border border-purple-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>DEPLOYMENT LIFECYCLE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-4"
          >
            From Data Ingestion to <br />
            <span className="gradient-text-accent">Global Autonomous Orchestration</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Deploy high-availability cognitive agent networks and spatial interfaces in 5 seamless, mathematically verified steps.
          </motion.p>
        </div>

        {/* 5-Step Animated Timeline */}
        <div className="relative">
          {/* Central Connecting Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Sparkles;
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative p-6 rounded-3xl glass-panel bg-[#0d121f]/95 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'border-purple-500/60 shadow-xl shadow-purple-500/20 -translate-y-2'
                      : 'border-white/10 hover:border-white/20 hover:-translate-y-1'
                  }`}
                >
                  {/* Step Number & Icon Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-extrabold font-mono text-purple-400">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:text-white transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>

                    <div className="text-[11px] font-mono text-purple-300 mb-3 font-medium">
                      {step.subtitle}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Status Indicator at bottom of card */}
                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Automated Protocol</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-14 p-6 rounded-2xl glass-panel-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">
              Ready to deploy your first neural cognitive mesh in under 15 minutes?
            </h4>
            <p className="text-xs text-slate-400">
              Access the developer quickstart with pre-configured SDK templates for React and Python.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-2.5 rounded-xl btn-primary text-xs font-semibold whitespace-nowrap"
          >
            Start Setup Wizard
          </button>
        </div>
      </div>
    </section>
  );
}
