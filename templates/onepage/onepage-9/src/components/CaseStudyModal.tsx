import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { X, ExternalLink, Bookmark, Share2, CheckCircle, Sparkles, ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onShare: (title: string) => void;
  onOpenContact: (subject?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  isOpen,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onShare,
  onOpenContact
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'metrics'>('overview');

  if (!isOpen || !caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-400/10 text-amber-300 border border-amber-400/20">
                {caseStudy.category}
              </span>
              <span className="text-xs text-neutral-500 font-mono">CASE STUDY // {caseStudy.year}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleBookmark(caseStudy.id)}
                className={`p-2 rounded-lg border text-xs transition-colors ${
                  isBookmarked
                    ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
                title="Bookmark Case Study"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-300' : ''}`} />
              </button>

              <button
                onClick={() => onShare(caseStudy.title)}
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                title="Share Case Study"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Banner with Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-950">
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-1">
                {caseStudy.client}
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight">
                {caseStudy.title}
              </h2>
              <p className="text-sm text-neutral-300 mt-2 max-w-2xl">
                {caseStudy.tagline}
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-neutral-800 bg-neutral-950/40 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-3 text-xs font-semibold border-b-2 transition-all ${
                activeTab === 'overview'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-3 text-xs font-semibold border-b-2 transition-all ${
                activeTab === 'architecture'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Architecture &amp; Stack
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-4 py-3 text-xs font-semibold border-b-2 transition-all ${
                activeTab === 'metrics'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Verified Impact
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950/60 p-4 rounded-xl border border-neutral-800">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Our Engineered Solution
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950/60 p-4 rounded-xl border border-neutral-800">
                    {caseStudy.solution}
                  </p>
                </div>

                {caseStudy.testimonial && (
                  <div className="p-5 rounded-xl bg-amber-400/5 border border-amber-400/20 flex gap-4 items-start">
                    <img
                      src={caseStudy.testimonial.avatar}
                      alt={caseStudy.testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border border-amber-400/40 shrink-0"
                    />
                    <div>
                      <p className="text-sm text-neutral-200 italic font-serif">
                        "{caseStudy.testimonial.quote}"
                      </p>
                      <div className="mt-2 text-xs font-semibold text-amber-300">
                        {caseStudy.testimonial.author}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        {caseStudy.testimonial.role}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                    Technology Manifest
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-neutral-950 text-neutral-200 border border-neutral-800 font-mono text-xs flex items-center gap-1.5"
                      >
                        <Layers className="w-3.5 h-3.5 text-amber-400" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Security &amp; Performance Audit Verified</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Zero-trust authorization layer, distributed edge caching, sub-50ms TTFB, automated integration testing suite with 98.6% branch coverage.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caseStudy.impactMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center flex flex-col justify-between"
                    >
                      <div className="text-xs font-mono text-neutral-400 uppercase mb-1">
                        {metric.label}
                      </div>
                      <div className="font-display text-2xl font-bold text-amber-300 my-2">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        {metric.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-neutral-950 border-t border-neutral-800">
            <div className="text-xs text-neutral-400 font-mono">
              CLIENT ENGAGEMENT // FULL IP TRANSFERRED
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact(`Case Study: ${caseStudy.title}`);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-400/20 hover:scale-[1.02] transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                <span>Build Similar Architecture</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
