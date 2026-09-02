import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SUBJECT_PANELS } from '../data/programs';

export default function KnowledgeExplorer() {
  const navigate = useNavigate();
  const [activePanelId, setActivePanelId] = useState(SUBJECT_PANELS[0].id);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/60 border-y border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>INTERACTIVE DOMAINS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Explore Knowledge.
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Hover over panels to inspect domain specializations, research budgets, and faculty expertise.
          </p>
        </div>
      </div>

      {/* Desktop Horizontal Scroll & Interactive Expandable Grid */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="hidden lg:flex gap-4 h-[540px]">
          {SUBJECT_PANELS.map((panel) => {
            const isActive = activePanelId === panel.id;
            return (
              <motion.div
                key={panel.id}
                onMouseEnter={() => setActivePanelId(panel.id)}
                onClick={() => navigate('/programs')}
                data-cursor="EXPLORE"
                animate={{
                  flex: isActive ? 3.5 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 cursor-pointer group flex flex-col justify-between p-8"
              >
                {/* Background Image Overlay with Zoom */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isActive ? 'scale-110 opacity-40 brightness-110' : 'scale-100 opacity-20 filter grayscale'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${panel.gradient}`} />
                </div>

                {/* Top Panel Bar */}
                <div className="relative z-10 flex items-start justify-between">
                  <motion.span
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl xl:text-6xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500"
                  >
                    {panel.num}
                  </motion.span>

                  <div className={`p-3 rounded-full border transition-all duration-300 ${
                    isActive
                      ? 'bg-electric-500 text-white border-electric-400 rotate-45 shadow-lg shadow-electric-500/40'
                      : 'bg-slate-900/60 text-slate-400 border-white/10 group-hover:text-white'
                  }`}>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Middle Content (Visible primarily when expanded) */}
                <div className="relative z-10 my-auto">
                  <h3 className="text-2xl xl:text-3xl font-extrabold text-white tracking-wider font-display mb-2">
                    {panel.title}
                  </h3>
                  <p className="text-xs uppercase font-mono tracking-widest text-electric-400 mb-3">
                    {panel.tagline}
                  </p>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      <p className="text-slate-300 text-sm font-light leading-relaxed max-w-lg">
                        {panel.description}
                      </p>
                      <div className="inline-block px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-mono text-cyan-300">
                        {panel.stats}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Callout */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">
                    {isActive ? 'CLICK TO EXPLORE DOMAIN' : panel.title}
                  </span>
                  {isActive && (
                    <span className="text-electric-400 font-bold tracking-wider">
                      VIEW SYLLABUS →
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Stacked Experience */}
        <div className="flex flex-col gap-6 lg:hidden">
          {SUBJECT_PANELS.map((panel) => (
            <div
              key={panel.id}
              onClick={() => navigate('/programs')}
              className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 p-6 flex flex-col justify-between min-h-[260px]"
            >
              <div className="absolute inset-0 z-0">
                <img src={panel.image} alt={panel.title} className="w-full h-full object-cover opacity-25" />
                <div className={`absolute inset-0 bg-gradient-to-t ${panel.gradient}`} />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-white">{panel.num}</span>
                <span className="px-3 py-1 rounded-full bg-electric-600/80 text-white text-[10px] font-mono">
                  {panel.stats}
                </span>
              </div>

              <div className="relative z-10 my-4">
                <h3 className="text-2xl font-bold text-white font-display mb-1">{panel.title}</h3>
                <p className="text-xs text-slate-300 font-light mb-3">{panel.description}</p>
              </div>

              <div className="relative z-10 flex items-center justify-between text-xs font-bold text-electric-400 border-t border-white/10 pt-3">
                <span>EXPLORE SPECIALIZATIONS</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
