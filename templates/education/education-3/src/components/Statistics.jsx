import React from 'react';
import { motion } from 'framer-motion';
import { INSTITUTION_STATS, MARQUEE_ITEMS } from '../data/stats';

export default function Statistics() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-950 border-y border-white/10">
      
      {/* Background Moving Horizontal Marquee Ticker */}
      <div className="absolute inset-0 flex items-center pointer-events-none opacity-[0.04] select-none overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span key={idx} className="text-[12rem] sm:text-[16rem] font-extrabold font-display tracking-tighter text-white mx-8">
              {item} •
            </span>
          ))}
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-electric-500/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-electric-400 uppercase">
            INSTITUTIONAL METRICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Learning in Numbers.
          </h2>
        </div>

        {/* Dramatic Asymmetrical Grid Layout for Giant Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {INSTITUTION_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between group hover:border-electric-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top Hairline accent */}
              <div className="w-12 h-1 bg-gradient-to-r from-electric-400 to-violetAccent-500 rounded-full mb-6 group-hover:w-full transition-all duration-500" />

              {/* Giant Animated Number Typography */}
              <div className="space-y-1">
                <div className="text-6xl sm:text-7xl xl:text-8xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 group-hover:from-electric-300 group-hover:to-white transition-all">
                  {stat.value}
                  <span className="text-electric-400 font-mono text-4xl sm:text-5xl ml-1">
                    {stat.unit}
                  </span>
                </div>
                
                <h3 className="text-xs font-mono font-bold tracking-widest text-electric-300 uppercase pt-2">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs text-slate-400 font-light leading-relaxed pt-4 mt-4 border-t border-white/10">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-electric-500/30 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL METRICS INDEPENDENTLY AUDITED & PUBLISHED ANNUALLY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
