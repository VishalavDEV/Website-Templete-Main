import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Layers,
  Zap,
  Cpu,
  ShieldCheck,
  Share2,
  Sparkles,
  ArrowRight,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { FEATURES_DATA } from '../data/landingData';

const iconMap = {
  Bot,
  Layers,
  Zap,
  Cpu,
  ShieldCheck,
  Share2
};

export default function Features({ onOpenContact }) {
  const getInitialDirection = (dir) => {
    switch (dir) {
      case 'left':
        return { opacity: 0, x: -40 };
      case 'right':
        return { opacity: 0, x: 40 };
      case 'up':
      default:
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <section id="features" className="relative py-28 bg-[#07090e] overflow-hidden">
      {/* Ambient background orbs */}
      <div className="aurora-glow-1 top-20 left-10 opacity-20 pointer-events-none" />
      <div className="aurora-glow-2 bottom-10 right-10 opacity-20 pointer-events-none" />

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
            <span>POWERHOUSE CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-4"
          >
            Unprecedented Speed. <br />
            <span className="gradient-text-accent">Zero Hallucination Autonomy</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Explore the core architectural breakthroughs powering our next-generation spatial computing & autonomous cognitive agent engine.
          </motion.p>
        </div>

        {/* 6 Bento-Style Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES_DATA.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Sparkles;
            const initDir = getInitialDirection(card.animationDir);

            return (
              <motion.div
                key={card.id}
                initial={initDir}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-7 rounded-3xl glass-panel bg-[#0d121f]/90 border border-white/10 flex flex-col justify-between overflow-hidden cursor-pointer"
                onClick={onOpenContact}
              >
                {/* Glowing radial gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Row: Tag & Animated Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-colors">
                      {card.tag}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-light">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Row: Stat Pill & Action Arrow */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-slate-300 group-hover:text-white transition-colors">
                      {card.stat}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
