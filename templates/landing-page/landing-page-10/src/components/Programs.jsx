import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROGRAMS } from '../data/programs';
import { ArrowRight, Check, Clock, UserCheck, Layers, Sparkles } from 'lucide-react';

export default function Programs({ onOpenPathModal }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section id="programs" className="py-24 md:py-36 bg-[#F3F0E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B56F4D] font-mono font-bold block mb-3">
              COACHING PATHWAYS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#171816] tracking-tight">
              Choose where <span className="editorial-italic font-normal text-[#3E5142]">you begin.</span>
            </h2>
          </div>
          <p className="text-base text-[#171816]/70 max-w-md font-light leading-relaxed">
            Every path at AURELIS is tailored around your physiological baseline and schedule requirements. No cookie-cutter templates.
          </p>
        </div>

        {/* Asymmetrical Editorial Programs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Program 01: Foundation - Asymmetrical 7 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#D8D4C8]/40 rounded-3xl p-8 sm:p-12 border border-[#171816]/10 flex flex-col justify-between relative overflow-hidden group hover:border-[#171816]/30 transition-all duration-500 shadow-sm"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#3E5142]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3E5142] px-3 py-1 rounded-full bg-[#3E5142]/10">
                  {PROGRAMS[0].number} — {PROGRAMS[0].duration}
                </span>
                <span className="text-xs font-semibold text-[#B56F4D] font-mono">
                  {PROGRAMS[0].badge}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#171816] mb-3">
                {PROGRAMS[0].title}
              </h3>
              <p className="text-base font-medium text-[#171816]/80 mb-8 italic">
                "{PROGRAMS[0].tagline}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-sm">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#171816]/60 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#3E5142]" /> Program Focus
                  </span>
                  <p className="font-light text-[#171816]">{PROGRAMS[0].focus}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#171816]/60 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#B56F4D]" /> Coaching Style
                  </span>
                  <p className="font-light text-[#171816]">{PROGRAMS[0].coachingStyle}</p>
                </div>
              </div>

              <div className="border-t border-[#171816]/10 pt-6 mb-8">
                <p className="text-xs font-mono uppercase tracking-wider text-[#171816]/60 mb-3">
                  Suitable For:
                </p>
                <p className="text-sm font-light text-[#171816]/90 leading-relaxed">
                  {PROGRAMS[0].suitableFor}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenPathModal}
              className="w-full py-4 bg-[#171816] text-[#F3F0E8] rounded-full font-medium tracking-wide uppercase text-xs hover:bg-[#3E5142] transition-colors flex items-center justify-center gap-2 group/btn shadow-md"
            >
              <span>Begin Foundation Path</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </motion.div>

          {/* Program 02: Momentum - Asymmetrical 5 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-[#3E5142] text-[#F3F0E8] rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group shadow-xl"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#B56F4D]/30 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F3F0E8] px-3 py-1 rounded-full bg-white/10">
                  {PROGRAMS[1].number} — {PROGRAMS[1].duration}
                </span>
                <span className="text-xs font-semibold text-[#D8D4C8] font-mono">
                  {PROGRAMS[1].badge}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F3F0E8] mb-3">
                {PROGRAMS[1].title}
              </h3>
              <p className="text-base font-medium text-[#D8D4C8] mb-8 italic">
                "{PROGRAMS[1].tagline}"
              </p>

              <div className="space-y-4 text-sm mb-8">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/60">Program Focus</span>
                  <p className="font-light text-white/90">{PROGRAMS[1].focus}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/60">Suitable For</span>
                  <p className="font-light text-white/90">{PROGRAMS[1].suitableFor}</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenPathModal}
              className="w-full py-4 bg-[#B56F4D] text-[#F3F0E8] rounded-full font-medium tracking-wide uppercase text-xs hover:bg-[#171816] transition-colors flex items-center justify-center gap-2 group/btn shadow-lg"
            >
              <span>Begin Momentum Path</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </motion.div>

          {/* Program 03: Evolve - Full Width 12 Columns Feature Chapter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-12 bg-[#171816] text-[#F3F0E8] rounded-3xl p-8 sm:p-14 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B56F4D] px-3 py-1 rounded-full bg-white/5">
                  {PROGRAMS[2].number} — {PROGRAMS[2].duration}
                </span>
                <span className="text-xs font-mono text-[#D8D4C8]/70 uppercase tracking-widest">
                  Concierge Partnership
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#F3F0E8]">
                {PROGRAMS[2].title}
              </h3>
              <p className="text-lg font-light text-[#D8D4C8] italic">
                "{PROGRAMS[2].tagline}"
              </p>
              <p className="text-sm font-light text-white/80 leading-relaxed max-w-xl">
                {PROGRAMS[2].focus}. Built for clients who require seamless ongoing recalibration across seasonal demand shifts, international travel, and long-term vitality.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                {PROGRAMS[2].highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                    <Sparkles className="w-3.5 h-3.5 text-[#B56F4D] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end gap-6 bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="text-center lg:text-right space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B56F4D]">Coaching Tier</span>
                <p className="text-2xl font-heading font-bold text-[#F3F0E8]">Ongoing Executive Coaching</p>
                <p className="text-xs text-white/60">Fully bespoke protocol & concierge support</p>
              </div>
              <button
                onClick={onOpenPathModal}
                className="w-full sm:w-auto px-8 py-4 bg-[#F3F0E8] text-[#171816] rounded-full font-medium tracking-wide uppercase text-xs hover:bg-[#B56F4D] hover:text-[#F3F0E8] transition-colors flex items-center justify-center gap-2 group/btn"
              >
                <span>Apply For Evolve</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
