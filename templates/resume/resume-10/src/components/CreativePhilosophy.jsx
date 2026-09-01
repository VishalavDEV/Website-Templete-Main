import React from 'react';
import { motion } from 'framer-motion';
import { creativePhilosophy } from '../data/directorData';
import { Sparkles, Eye, Sliders, Layout } from 'lucide-react';

const CreativePhilosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono-meta text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-2">
            {creativePhilosophy.sectionLabel}
          </span>
          <h2 className="font-serif-title text-4xl sm:text-5xl font-normal text-neutral-950 uppercase tracking-tight">
            {creativePhilosophy.title}
          </h2>
          <div className="w-16 h-[1.5px] bg-neutral-900 mt-4" />
        </div>

        {/* Large Editorial Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 p-8 md:p-12 bg-white border border-neutral-200 shadow-xs relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          <p className="font-serif-title italic text-2xl sm:text-4xl text-neutral-900 leading-snug max-w-4xl">
            "{creativePhilosophy.quote}"
          </p>
        </motion.div>

        {/* Two-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: AI Abstract Cinematic Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-neutral-300 p-2 bg-white shadow-sm">
              <img
                src={creativePhilosophy.abstractImage}
                alt="Optical Prism Light Refraction - Creative Philosophy"
                className="w-full h-auto object-cover"
              />
              <div className="mt-3 p-3 bg-neutral-900 text-white font-mono-meta text-[11px] tracking-widest flex items-center justify-between">
                <span>STUDY NO. 01 — OPTICS & SHADOW</span>
                <span className="text-neutral-400">ER-PHIL-26</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Philosophy & 3 Principles */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-10 font-light">
              Filmmaking is not merely recording dialogue or capturing scenery. It is an intentional orchestration of light, architectural space, and rhythmic silence. My approach centers on constructing cinematic atmospheres where subtext speaks louder than exposition.
            </p>

            {/* Three Core Principles */}
            <div className="space-y-6">
              {creativePhilosophy.principles.map((principle, index) => {
                const icons = [Layout, Sliders, Eye];
                const IconComponent = icons[index % icons.length];
                return (
                  <motion.div
                    key={principle.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="p-6 bg-white border border-neutral-200 hover:border-neutral-900 transition-colors duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-mono-meta text-xs tracking-[0.25em] font-bold text-neutral-950 uppercase">
                            {principle.title}
                          </h3>
                          <span className="text-neutral-400">•</span>
                          <span className="font-serif-title italic text-sm text-neutral-500">
                            {principle.subtitle}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-600 leading-relaxed font-light">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CreativePhilosophy;
