import React from 'react';
import Statistics from '../components/Statistics';
import { GraduationCap, ShieldCheck, Globe, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Banner */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>ABOUT AETHERIA INSTITUTE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
            The Next Evolution of Higher Education.
          </h1>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Founded in 2026, Aetheria was built to dissolve the boundaries between university academic rigor, digital magazine learning, quantum research laboratories, and technological venture creation.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4 bg-slate-950/60">
            <div className="w-12 h-12 rounded-2xl bg-electric-600/20 text-electric-400 flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Global Governance</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Governed by an international board of distinguished scientists, tech founders, and interdisciplinary ethicists ensuring academic autonomy.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4 bg-slate-950/60">
            <div className="w-12 h-12 rounded-2xl bg-violetAccent-600/20 text-violetAccent-400 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Synthetic Infrastructure</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Every scholar commands an AI research pod and direct access to supercomputing clusters, spatial VR rigs, and physical bio-laboratories.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4 bg-slate-950/60">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Open Research Standards</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              We publish major research findings in open-access repositories, advocating for transparent human-AI symbiosis and clean tech innovation.
            </p>
          </div>
        </div>

        {/* Embedded Statistics */}
        <Statistics />

      </div>
    </div>
  );
}
