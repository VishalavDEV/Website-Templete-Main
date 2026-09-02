import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { audioService } from '../utils/audio';

interface ServicesSectionProps {
  onSelectService: (slug: string) => void;
  onNavigateToProcess?: () => void;
}

export function ServicesSection({ onSelectService, onNavigateToProcess }: ServicesSectionProps) {
  const [activeServiceSlug, setActiveServiceSlug] = useState<string>(services[0].slug);

  const activeService = services.find(s => s.slug === activeServiceSlug) || services[0];

  return (
    <section id="services-section" className="py-24 md:py-32 relative bg-[#0A0B0F] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-xl">
              Engineered for category leadership.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button
              onClick={() => {
                audioService.playClick();
                if (onNavigateToProcess) {
                  onNavigateToProcess();
                } else {
                  const el = document.getElementById('process-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>Discover Our Approach</span>
              <ArrowRight className="w-3.5 h-3.5 text-violet-400" />
            </button>
          </div>
        </div>

        {/* Interactive Vertical Explorer Layout (Split Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Service Accordion Rows (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            {services.map((service) => {
              const isActive = service.slug === activeServiceSlug;
              return (
                <div
                  key={service.id}
                  id={`service-row-${service.slug}`}
                  onClick={() => {
                    audioService.playClick();
                    setActiveServiceSlug(service.slug);
                  }}
                  onMouseEnter={() => {
                    if (!isActive) audioService.playHover();
                  }}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-[#1D202B]/80 border-violet-500/50 shadow-xl shadow-violet-950/30'
                      : 'bg-[#151821]/50 border-white/10 hover:border-white/20 hover:bg-[#1D202B]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-sm font-bold tracking-wider transition-colors ${
                          isActive ? 'text-violet-400' : 'text-gray-500'
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                          isActive ? 'text-white' : 'text-gray-300'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-violet-600 text-white rotate-45'
                          : 'bg-white/5 text-gray-500 hover:text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expanded Content Drawer */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-xl">
                          {service.shortDescription}
                        </p>

                        {/* Capabilities Chips */}
                        <div className="mt-5">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-violet-400 block mb-2">
                            Key Capabilities
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.capabilities.slice(0, 4).map((cap, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/5"
                              >
                                <CheckCircle2 className="w-3 h-3 text-violet-400" />
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Timeline & Action */}
                        <div className="mt-6 pt-5 border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                            <Clock className="w-3.5 h-3.5 text-violet-400" />
                            <span>Typical Sprint: {service.timeline}</span>
                          </div>
                          <button
                            id={`btn-explore-service-${service.slug}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              audioService.playClick();
                              onSelectService(service.slug);
                            }}
                            className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-600/30"
                          >
                            <span>Explore Service</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Live Preview Canvas (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1D202B]/70 backdrop-blur-xl shadow-2xl p-6">
              {/* Dynamic Image Preview */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeService.slug}
                    src={activeService.heroImage}
                    alt={activeService.title}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141F] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 font-mono text-[10px] px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-violet-300 border border-white/10">
                  DISCIPLINE {activeService.number}
                </div>
              </div>

              {/* Service Details Card */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-white">{activeService.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 font-mono">{activeService.idealFor}</p>
                </div>

                <div className="space-y-2 border-t border-white/8 pt-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                    Typical Deliverables
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
                    {activeService.deliverables.slice(0, 3).map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-violet-400 font-bold">›</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    audioService.playClick();
                    onSelectService(activeService.slug);
                  }}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-violet-600/20 border border-white/10 hover:border-violet-500/40 text-gray-200 hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Full Service Specifications</span>
                  <ArrowUpRight className="w-4 h-4 text-violet-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
