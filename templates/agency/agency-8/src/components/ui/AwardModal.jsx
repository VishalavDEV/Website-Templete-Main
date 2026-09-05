import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, ExternalLink, Award, Calendar, CheckCircle2, Star } from 'lucide-react';

export default function AwardModal({ award, isOpen, onClose }) {
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

  if (!award) return null;

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
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#090d1a] border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.25)] z-10 text-white p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:text-cyan-300 hover:border-cyan-400 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Award Details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Trophy Hero Header */}
            <div className="flex flex-col items-center text-center space-y-4 pt-4 pb-6 border-b border-white/10">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 via-cyan-400 to-blue-600 p-0.5 shadow-xl shadow-cyan-500/20">
                <div className="w-full h-full bg-[#090d1a] rounded-3xl flex items-center justify-center text-amber-400">
                  <Trophy className="w-10 h-10" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                  OFFICIAL INDUSTRY CITATION // {award.year}
                </span>
                <h3 className="text-3xl font-syne font-black text-white">
                  {award.platform}
                </h3>
                <p className="text-sm text-cyan-200 font-mono">
                  {award.title}
                </p>
              </div>
            </div>

            {/* Award Description & Citation Details */}
            <div className="py-6 space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>WINNING WORK:</span>
                  <span className="text-cyan-300 font-bold">{award.project}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>AWARD YEAR:</span>
                  <span>{award.year}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>VERIFICATION:</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Awarded by the global jury of {award.platform} in recognition of breakthrough digital craftsmanship, responsive performance optimization, and typographic innovation.
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-full bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
              >
                Close Award Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
