import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RESEARCH_TAGS, RESEARCH_PROJECTS } from '../data/research';
import { Compass, Sparkles, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function ResearchNetwork() {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState(RESEARCH_TAGS[0].id);

  const activeTagObj = RESEARCH_TAGS.find(t => t.id === selectedTag) || RESEARCH_TAGS[0];

  return (
    <section className="py-24 relative bg-[#0B0F19] overflow-hidden border-y border-white/5">
      {/* Glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>DISCOVERY ENGINE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display">
            Ideas Become <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-cyan-300 to-violetAccent-400">
              Innovation.
            </span>
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Interactive research node network. Select a research frontier to inspect active laboratory projects, grants, and papers.
          </p>
        </div>

        {/* Floating Research Interactive Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {RESEARCH_TAGS.map((tag) => {
            const isSelected = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-electric-600 text-white shadow-lg shadow-electric-500/30 border border-electric-400 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white border-white/10 hover:border-white/30'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tag.color }} />
                <span>{tag.label}</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-slate-900/80 text-slate-400">
                  {tag.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Central Innovation Network Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Animated Connecting Node Network Canvas Visualizer */}
          <div className="lg:col-span-7 relative h-[420px] rounded-3xl glass-panel border border-white/10 p-6 flex items-center justify-center overflow-hidden bg-slate-950/60">
            {/* SVG Connecting Lines Mesh */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="50%" cy="50%" r="140" stroke="rgba(59,130,246,0.15)" strokeWidth="1" fill="none" />
            </svg>

            {/* Central Node */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-tr from-electric-600 to-violetAccent-600 border-4 border-slate-950 flex flex-col items-center justify-center text-center p-2 shadow-2xl shadow-electric-500/50"
            >
              <Cpu className="w-8 h-8 text-white mb-1 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-200">
                {activeTagObj.label}
              </span>
            </motion.div>

            {/* Satellite Connected Nodes */}
            <div className="absolute top-10 left-10 p-3 rounded-2xl glass-panel border border-electric-500/30 text-xs font-mono text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-ping" />
              <span>LAB 01 • AUTONOMOUS MESH</span>
            </div>

            <div className="absolute top-10 right-10 p-3 rounded-2xl glass-panel border border-violetAccent-500/30 text-xs font-mono text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violetAccent-400" />
              <span>LAB 02 • QUANTUM OPTICS</span>
            </div>

            <div className="absolute bottom-10 left-10 p-3 rounded-2xl glass-panel border border-cyan-500/30 text-xs font-mono text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>LAB 03 • SYNTHETIC BIOLOGY</span>
            </div>

            <div className="absolute bottom-10 right-10 p-3 rounded-2xl glass-panel border border-emerald-500/30 text-xs font-mono text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>LAB 04 • CLIMATE CATALYSTS</span>
            </div>
          </div>

          {/* Active Research Projects Display */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                ACTIVE LAB PROJECTS ({activeTagObj.activeLabs})
              </span>
              <button
                onClick={() => navigate('/research')}
                className="text-xs font-bold text-electric-400 hover:text-electric-300 flex items-center gap-1"
              >
                <span>All Research</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTag}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {RESEARCH_PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => navigate('/research')}
                    className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-electric-500/40 transition-all duration-300 cursor-pointer space-y-3 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-electric-500/20 text-electric-300 text-[10px] font-mono font-bold">
                        {proj.code}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {proj.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white font-display group-hover:text-electric-300 transition-colors">
                      {proj.title}
                    </h4>

                    <p className="text-xs text-slate-300 line-clamp-2 font-light">
                      {proj.abstract}
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Lead: {proj.lead}</span>
                      <span className="text-violetAccent-400">{proj.grant}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
