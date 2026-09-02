import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, Clock, Layers } from 'lucide-react';
import { services } from '../data/services';
import { audioService } from '../utils/audio';

interface ServicesPageProps {
  onSelectService: (slug: string) => void;
  onStartProject: () => void;
}

export function ServicesPage({ onSelectService, onStartProject }: ServicesPageProps) {
  return (
    <div className="pt-32 pb-24 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Capabilities & Disciplines</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Integrated disciplines. Zero creative friction.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-serif">
            We provide an end-to-end creative and technical partnership from initial narrative positioning to production-grade WebGL engineering and post-launch conversion scaling.
          </p>
        </div>
      </section>

      {/* Services Grid (6 Core Disciplines) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-[#11131E] border border-white/8 hover:border-violet-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-violet-400">
                    DISCIPLINE {service.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-violet-600 text-gray-400 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 border-t border-white/6 pt-4">
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                    Core Capabilities
                  </span>
                  <ul className="space-y-1 text-xs font-mono text-gray-300">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-violet-400">›</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/6 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500">
                  <Clock className="w-3.5 h-3.5 text-violet-400" />
                  <span>{service.timeline}</span>
                </div>

                <button
                  onClick={() => {
                    audioService.playClick();
                    onSelectService(service.slug);
                  }}
                  className="text-xs font-mono text-violet-400 hover:text-violet-300 font-semibold flex items-center gap-1"
                >
                  <span>Explore Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#141726] to-[#0D0F18] border border-white/10 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Need a custom multi-discipline sprint?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Most category-defining projects blend brand strategy, custom engineering, and 3D motion simultaneously. Tell us your goals.
          </p>
          <button
            onClick={() => {
              audioService.playClick();
              onStartProject();
            }}
            className="px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-xl shadow-violet-600/30"
          >
            <span>Configure Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
