import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Bot,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { SERVICES_DATA } from '../data/landingData';

export default function Services({ onOpenContact }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="relative py-28 bg-[#07090e] overflow-hidden">
      {/* Dynamic Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono font-semibold text-emerald-400 border border-emerald-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>ENTERPRISE SOLUTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-4"
          >
            Turn High-Value Workflows Into <br />
            <span className="gradient-text-accent">Autonomous Cognitive Engines</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Tailored deployment patterns designed for high-scale organizations looking to achieve sub-second autonomous action and spatial computing excellence.
          </motion.p>
        </div>

        {/* 3 Large Detailed Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-3xl glass-panel bg-[#0d121f]/95 border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 hover:border-purple-500/40"
            >
              {/* Gradient Aura on Hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    {service.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Metric Highlight Badge */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5 mb-6">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-300 font-mono">
                    {service.highlightMetric}
                  </span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                    Core Capabilities:
                  </div>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action Button */}
              <button
                onClick={onOpenContact}
                className="w-full py-3.5 rounded-xl btn-secondary flex items-center justify-center gap-2 text-xs font-semibold group-hover:btn-primary transition-all cursor-pointer shadow-lg"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
