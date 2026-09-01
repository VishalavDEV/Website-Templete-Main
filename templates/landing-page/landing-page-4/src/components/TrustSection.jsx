import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TRUSTED_COMPANIES, TRUST_STATS } from '../data/stats';
import { useCounter } from '../hooks/useCounter';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

function StatItem({ value, suffix, label, desc, inView }) {
  const count = useCounter(value, 1600, inView);

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.07] backdrop-blur-md relative overflow-hidden group hover:border-amber-500/30 transition-all">
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>
      
      <div className="text-3xl md:text-5xl font-extrabold text-white font-heading tracking-tight mb-2 flex items-baseline">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-amber-300">
          {count}
        </span>
        <span className="text-amber-400 font-bold ml-1">{suffix}</span>
      </div>

      <div className="text-base font-bold text-zinc-100 mb-1">{label}</div>
      <div className="text-xs md:text-sm text-zinc-400 leading-relaxed">{desc}</div>
    </div>
  );
}

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="trust" ref={ref} className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#070709]">
      
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-amber-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            Trusted Infrastructure
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Built for teams that refuse to slow down.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Powering mission-critical development workflows for fast-growing scaleups and distributed global technology organizations.
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-16">
          {TRUSTED_COMPANIES.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-amber-500/30 transition-all cursor-default group"
            >
              <span className="text-sm md:text-base font-bold text-zinc-300 group-hover:text-white transition-colors">
                {company.name}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono mt-0.5 group-hover:text-amber-400/80 transition-colors">
                {company.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Animated Counter Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {TRUST_STATS.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              desc={stat.desc}
              inView={inView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
