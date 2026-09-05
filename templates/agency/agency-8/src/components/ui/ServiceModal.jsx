import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

export default function ServiceModal({ service, isOpen, onClose }) {
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

  if (!service) return null;

  const IconComponent = service.icon || Sparkles;

  const serviceDeliverables = service.deliverables || [
    'Comprehensive Strategic Discovery & Architecture Mapping',
    'Interactive High-Fidelity Prototypes & User Journey Testing',
    'Production-Grade Engineering with Modern Frameworks (React, Next.js, WebGL)',
    'Performance Optimization, SEO Auditing & Core Web Vitals 99+',
    'Design System Tokenization & Modular Component Library Handover',
  ];

  const serviceTech = service.techStack || [
    'React / Next.js',
    'WebGL & Three.js',
    'Tailwind CSS',
    'Framer Motion',
    'TypeScript',
    'Figma Tokenization',
  ];

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
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#090d1a] border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.25)] z-10 text-white scrollbar-thin scrollbar-thumb-cyan-500/30 p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:text-cyan-300 hover:border-cyan-400 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Service Details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with Icon & Number */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-black font-extrabold shadow-lg shadow-cyan-500/30">
                <IconComponent className="w-7 h-7 text-black" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                  SERVICE // {service.num}
                </span>
                <h3 className="text-2xl sm:text-3xl font-syne font-black text-white">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              {service.desc} Our approach pairs rapid design iterations with battle-tested engineering frameworks to ensure your brand commands authority and delivers uncompromising performance.
            </p>

            {/* Key Deliverables */}
            <div className="mb-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Scope & Key Deliverables</span>
              </h4>
              <div className="space-y-2">
                {serviceDeliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-8 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Technologies & Workflows</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {serviceTech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                TIMELINE: 2 – 6 WEEKS TYPICAL
              </span>
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-bold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
