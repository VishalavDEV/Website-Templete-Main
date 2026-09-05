import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  Eye,
  Layers,
  Bot,
  Zap,
  Activity,
  Maximize2,
  X,
  ArrowRight
} from 'lucide-react';
import { SHOWCASE_DATA } from '../data/landingData';

// Interactive 3D Tilt Card Component
function TiltCard({ project, onSelect }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
      className="group relative rounded-3xl glass-panel bg-[#0d121f]/90 border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Visual Canvas Area */}
      <div className={`relative h-56 bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-between overflow-hidden`}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

        {/* Top Header inside preview */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-cyan-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
            {project.client}
          </span>
        </div>

        {/* Central Graphic Simulation */}
        <div className="relative z-10 flex items-center justify-center my-auto">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
          >
            {project.category === 'Spatial UI' && <Layers className="w-9 h-9 text-cyan-300" />}
            {project.category === 'Autonomous Agents' && <Bot className="w-9 h-9 text-purple-300" />}
            {project.category === 'Neural Workflows' && <Zap className="w-9 h-9 text-rose-300" />}
          </motion.div>
        </div>

        {/* Stats Pill Overlay */}
        <div className="relative z-10 flex items-center gap-2">
          {Object.entries(project.stats).map(([k, v], sIdx) => (
            <span key={sIdx} className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-slate-300 backdrop-blur-sm border border-white/5">
              {k.toUpperCase()}: <span className="text-white font-bold">{v}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card CTA */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" /> Inspect Architecture
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Showcase({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Manage body scroll lock
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const categories = ['All', 'Spatial UI', 'Autonomous Agents', 'Neural Workflows'];

  const filteredProjects =
    activeCategory === 'All'
      ? SHOWCASE_DATA
      : SHOWCASE_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="showcase" className="relative py-28 bg-[#07090e] overflow-hidden">
      {/* Background radial glows */}
      <div className="aurora-glow-1 top-1/2 -left-20 opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono font-semibold text-cyan-400 border border-cyan-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRODUCTION SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Engineered for Autonomous Scale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl text-sm sm:text-base"
          >
            Discover live enterprise topologies powered by the AETHERIA cognitive runtime and neural streaming engine.
          </motion.p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'glass-panel-subtle text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <TiltCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Lightbox Inspection Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay-wrapper">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="modal-dialog-card max-w-2xl"
            >
              <div className="modal-dialog-body">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Client: <strong className="text-white">{selectedProject.client}</strong>
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="modal-close-button"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {selectedProject.description}
                </p>

                {/* Stats Breakdown */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 mb-5">
                  {Object.entries(selectedProject.stats).map(([k, v], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase">{k}</div>
                      <div className="text-sm sm:text-lg font-bold text-cyan-300 font-mono mt-0.5">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                  {selectedProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl btn-secondary text-xs font-semibold"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenContact();
                    }}
                    className="px-5 py-2 rounded-xl btn-primary text-xs font-semibold flex items-center gap-2"
                  >
                    <span>Deploy Similar Cluster</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
