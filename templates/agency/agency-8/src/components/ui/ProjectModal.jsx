import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Tag, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#090d1a] border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.25)] z-10 text-white scrollbar-thin scrollbar-thumb-cyan-500/30"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:text-cyan-300 hover:border-cyan-400 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Image with Gradient */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d1a] via-[#090d1a]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block text-xs font-mono tracking-widest text-cyan-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 mb-2">
                  CASE STUDY // {project.num || project.id || '01'}
                </span>
                <h2 className="text-3xl sm:text-5xl font-syne font-black text-white leading-tight">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Body Info */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Tag className="w-4 h-4" />
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    YEAR {project.year}
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  STATUS: LAUNCHED & ACTIVE
                </span>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
                  PROJECT BRIEF & ARCHITECTURAL EXECUTION
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {project.desc || `We partnered with the visionary team at ${project.title} to architect an end-to-end spatial digital ecosystem. Combining 60fps WebGL visualizers with modular design systems, the project resulted in a transformative leap in user engagement and brand capital.`}
                </p>
              </div>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-2xl font-syne font-bold text-cyan-400">+142%</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase mt-1">Conversion Velocity</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-2xl font-syne font-bold text-cyan-400">&lt; 0.8s</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase mt-1">Average Page Load</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-syne font-bold text-cyan-400">99.9%</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase mt-1">System Uptime</div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">Key Delivered Capabilities</h4>
                <div className="space-y-1.5">
                  {[
                    'Custom Interactive WebGL 3D Canvas Engine',
                    'Mobile-Optimized Responsive Touch Architecture',
                    'Dynamic Headless CMS & Enterprise API Integration',
                    'Full WCAG AAA Accessibility Compliance',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-white/20 text-slate-300 hover:text-white hover:border-white font-mono text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
