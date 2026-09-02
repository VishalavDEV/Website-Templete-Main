import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, HeartPulse, Users, Eye, Target, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import PageTransition from "../components/PageTransition";
import StatCounter from "../components/StatCounter";

export default function About() {
  return (
    <PageTransition>
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 border-b border-white/10 bg-slate-950/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            About AICarePlus AI
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Redefining Modern Medical Excellence
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Founded with a commitment to human empathy and state-of-the-art medical innovations, AICarePlus AI Medical Center delivers international-standard clinical care across 20+ specialized disciplines.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl border border-cyan-500/30 glow-cyan space-y-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/20 text-cyan-400 w-fit border border-cyan-500/30">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To stand as a global beacon of predictive healthcare, where artificial intelligence and board-certified clinical mastery converge to eradicate preventable disease and extend healthy lifespan for all.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="p-3.5 rounded-2xl bg-blue-500/20 text-blue-400 w-fit border border-blue-500/30">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To deliver patient-centered, compassionate care with zero waiting times, absolute diagnostic precision, and complete transparency—ensuring every individual receives top-tier treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative bg-slate-950/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Hospital Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Clinical Integrity", desc: "Rigorous adherence to international evidence-based guidelines and ethical protocols." },
              { title: "AI Innovation", desc: "Utilizing deep learning models for early risk detection and surgical precision." },
              { title: "Unmatched Empathy", desc: "Treating every patient like family with warm, dignified personal attention." },
              { title: "Global Accessibility", desc: "24/7 teleconsultation and rapid emergency transport available to all communities." }
            ].map((value, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-white">{value.title}</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Statistics */}
      <section className="py-16 relative border-y border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter value="500+" title="Hospital Beds" icon={Building2} />
            <StatCounter value="99.8%" title="Diagnostic Precision" icon={Award} />
            <StatCounter value="15+" title="International Awards" icon={Sparkles} />
            <StatCounter value="24/7" title="Emergency Readiness" icon={HeartPulse} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
