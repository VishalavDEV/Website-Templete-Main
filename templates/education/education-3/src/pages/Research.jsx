import React from 'react';
import ResearchNetwork from '../components/ResearchNetwork';
import { RESEARCH_PROJECTS } from '../data/research';
import { Compass, ShieldCheck, Download, ExternalLink } from 'lucide-react';

export default function Research() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Banner */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>INSTITUTE RESEARCH HUB</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
            Pioneering Global Frontiers.
          </h1>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Aetheria funds over $120M in active research grants across quantum mechanics, autonomous neural networks, biomimetic climate catalysts, and spatial computing.
          </p>
        </div>

        {/* Embedded Interactive Node Network Component */}
        <div className="mb-16">
          <ResearchNetwork />
        </div>

        {/* Detailed Projects Repository */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-display">
            Active Research Projects & Whitepapers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESEARCH_PROJECTS.map((proj) => (
              <div key={proj.id} className="rounded-3xl glass-panel border border-white/10 p-6 flex flex-col justify-between space-y-4 bg-slate-950/60">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-electric-500/20 text-electric-300 text-[10px] font-mono font-bold">
                      {proj.code}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {proj.status}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white font-display">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {proj.abstract}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="text-xs font-mono text-slate-400">
                    Lead Chair: <span className="text-white font-bold">{proj.lead}</span>
                  </div>
                  <div className="text-xs font-mono text-violetAccent-400">
                    Grant: {proj.grant}
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-200 hover:text-white flex items-center justify-center gap-2">
                    <Download className="w-3.5 h-3.5 text-electric-400" />
                    <span>Download Whitepaper PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
