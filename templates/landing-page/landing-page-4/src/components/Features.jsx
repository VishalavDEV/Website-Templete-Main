import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Activity, 
  CheckSquare, 
  ShieldCheck, 
  Boxes, 
  ArrowRight, 
  Sparkles,
  Zap
} from 'lucide-react';
import { FEATURES } from '../data/features';
import { useModal } from '../context/ModalContext';

const iconMap = {
  Cpu: Cpu,
  Layers: Layers,
  Activity: Activity,
  CheckSquare: CheckSquare,
  ShieldCheck: ShieldCheck,
  Boxes: Boxes,
};

export default function Features() {
  const { openFeatureModal } = useModal();

  return (
    <section id="features" className="py-24 md:py-32 relative">
      
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap size={14} />
            Capabilities & Architecture
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Everything Your Team Needs to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Move Forward.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Engineered to replace fragmented toolchains with a cohesive, ultra-fast system designed for maximum developer velocity.
          </p>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Sparkles;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => openFeatureModal(feature)}
                className="group relative p-7 md:p-8 rounded-3xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/40 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Ambient Top Light Flare */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 group-hover:scale-150 transition-all duration-500"></div>

                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-amber-500/10">
                      <Icon size={24} />
                    </div>

                    <span className="text-[11px] font-semibold font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 group-hover:border-amber-500/30 group-hover:text-amber-300 transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Metric & Action Arrow */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400/90 font-medium">
                    {feature.metrics}
                  </span>

                  <div className="flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-amber-400 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
