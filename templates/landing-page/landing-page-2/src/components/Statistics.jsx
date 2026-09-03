import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Sparkles,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
  DollarSign,
  Activity
} from 'lucide-react';
import { STATS_DATA } from '../data/landingData';
import { useCounter } from '../utils/useCounter';

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const animatedValue = useCounter(stat.value, 2200, isInView);

  const formattedDisplay = () => {
    if (typeof stat.value === 'number') {
      if (Number.isInteger(stat.value) && stat.value > 1000) {
        return (animatedValue / 1000).toFixed(0) + 'K';
      }
      return animatedValue;
    }
    return stat.value;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="group relative p-8 rounded-3xl glass-panel bg-[#0d121f]/90 border border-white/10 flex flex-col justify-between overflow-hidden shadow-2xl transition-all"
    >
      {/* Radiant glow on card hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Top Growth Pill */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-mono font-semibold border border-emerald-500/30">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{stat.growth}</span>
          </div>

          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-white transition-all">
            {index === 0 && <Cpu className="w-5 h-5" />}
            {index === 1 && <ShieldCheck className="w-5 h-5" />}
            {index === 2 && <Zap className="w-5 h-5" />}
            {index === 3 && <DollarSign className="w-5 h-5" />}
          </div>
        </div>

        {/* Counter Number */}
        <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mb-2 flex items-baseline gap-0.5">
          {stat.prefix && <span className="text-purple-400">{stat.prefix}</span>}
          <span>{formattedDisplay()}</span>
          {stat.suffix && <span className="text-cyan-400">{stat.suffix}</span>}
        </div>

        {/* Label */}
        <h3 className="text-base font-bold text-slate-200 mb-2">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-400 leading-relaxed font-light">
          {stat.description}
        </p>
      </div>

      {/* Decorative Sparkline Line at bottom */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-400">TELEMETRY AUDIT</span>
        <span className="text-[10px] font-mono text-cyan-300 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /> VERIFIED
        </span>
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section id="stats" className="relative py-28 bg-[#07090e] overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="aurora-glow-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none" />

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
            <span>MEASURABLE IMPACT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-4"
          >
            Global Scale & <br />
            <span className="gradient-text-accent">Uncompromised Reliability</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Real-time live telemetry metrics aggregated across all active enterprise sovereign clusters and edge PoPs.
          </motion.p>
        </div>

        {/* 4 Large Animated Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
