import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, FileText, Search, UserCheck, Rocket } from 'lucide-react';

const ADMISSION_STEPS = [
  { num: "01", title: "Choose Program", desc: "Select from 500+ specialized degree & fellowship tracks.", icon: Search },
  { num: "02", title: "Check Eligibility", desc: "Review academic background and prerequisite requirements.", icon: FileText },
  { num: "03", title: "Submit Application", desc: "Complete our client-side instant digital application.", icon: Sparkles },
  { num: "04", title: "Review", desc: "Faculty committee reviews intent and portfolio credentials.", icon: UserCheck },
  { num: "05", title: "Start Learning", desc: "Gain 24/7 access to spatial labs, supercomputers & faculty.", icon: Rocket },
];

export default function AdmissionJourney({ onOpenAdmissions }) {
  return (
    <section className="py-24 relative bg-[#0B0F19] overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-violetAccent-400" />
            <span>ADMISSIONS PROCESS 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Interactive Admission Journey.
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Streamlined 5-step process designed for zero-friction enrollment into next-gen academic programs.
          </p>
        </div>

        {/* 5-Step Connected Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {ADMISSION_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl glass-panel border border-white/10 p-6 flex flex-col justify-between group hover:border-electric-500/50 transition-all bg-slate-950/40 hover:bg-slate-900/60"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-violetAccent-400">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-electric-400 group-hover:bg-electric-600 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white font-display group-hover:text-electric-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-slate-900 border border-white/10 text-slate-500 flex items-center justify-center">
                    →
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Launch Modal Button */}
        <div className="text-center">
          <button
            onClick={onOpenAdmissions}
            data-cursor="APPLY"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-electric-600 via-electric-500 to-violetAccent-600 text-white font-bold text-sm tracking-wider shadow-xl shadow-electric-500/30 hover:shadow-electric-500/50 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>APPLY NOW FOR 2026</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
