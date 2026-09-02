import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../data/portfolioData';
import { StatCounter } from './StatCounter';
import { GearChecklist } from './GearChecklist';
import { Quote, ArrowRight, MapPin, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0b0c10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#66fcf1]" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#66fcf1]">
            Visual Philosophy
          </span>
        </div>

        {/* Asymmetrical Split Grid: Artist Portrait & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Editorial Artist Portrait with Framing Accents (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative line frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#66fcf1]/30 -z-0 rounded-sm pointer-events-none" />

              {/* Main Portrait Image */}
              <div className="relative z-10 overflow-hidden rounded-sm bg-[#12161f] border border-white/10 aspect-[4/5] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                  alt="Julian Vane, Creative Director & Photographer"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-1.5 text-[#66fcf1] font-mono text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Based in Berlin & Tokyo</span>
                  </div>
                  <h4 className="text-lg font-bold font-['Syne'] text-white">Julian Vane</h4>
                  <p className="text-xs text-[#c5c6c7]/70 font-mono">Principal Photographer & Creative Director</p>
                </div>
              </div>

              {/* Floating Monogram Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-[#1f2833] border border-[#66fcf1]/40 px-4 py-3 rounded shadow-xl flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#66fcf1]" />
                <span className="text-xs font-mono text-white">Hasselblad Master Finalist</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Statement & Directives (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-5xl font-black font-['Syne'] text-white tracking-tight leading-tight mb-6">
              REDUCING VISUAL NOISE TO ITS PUREST GEOMETRY.
            </h2>

            <div className="relative pl-6 border-l-2 border-[#66fcf1]/60 mb-6 italic text-sm sm:text-base text-white/90 font-light">
              <Quote className="w-4 h-4 text-[#66fcf1] mb-2 not-italic inline mr-2" />
              "Photography is not merely the recording of subjects, but the deliberate subtraction of everything superfluous until only light, form, and psychological truth remain."
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#c5c6c7]/80 font-light leading-relaxed mb-8">
              <p>
                With over fourteen years of editorial and spatial commissions across Europe, Japan, and North America, LuminaFrame operates at the nexus of high-end fashion, brutalist architecture, and cinematic chiaroscuro.
              </p>
              <p>
                Whether executing commercial lookbooks for avant-garde fashion houses or documenting monolithic concrete structures for leading design journals, our approach emphasizes medium format depth, razor precision, and organic tonal roll-off.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase font-mono tracking-wider font-semibold text-[#0b0c10] bg-[#66fcf1] hover:bg-[#86fdf4] rounded-sm transition-all shadow-[0_0_15px_rgba(102,252,241,0.25)] cursor-pointer"
              >
                <span>Initiate Assignment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase font-mono tracking-wider font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-all"
              >
                <span>View Rate Structure</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Animated Stat Counters (whileInView) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8">
          {STATS.map((stat, idx) => (
            <StatCounter
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>

        {/* Hardware & Optics Arsenal Checklist */}
        <GearChecklist />
      </div>
    </section>
  );
};
