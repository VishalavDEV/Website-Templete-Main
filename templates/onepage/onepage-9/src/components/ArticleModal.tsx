import React, { useEffect } from 'react';
import { Article } from '../types';
import { X, Clock, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  onShare: (title: string) => void;
  onShowToast: (title: string, description?: string, type?: 'success' | 'info') => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  onShare,
  onShowToast
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-3 sm:p-6 flex items-start justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/90 sticky top-0 z-20">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Insights</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onShare(article.title)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Share Article"
                aria-label="Share Article"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer"
                title="Close modal"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>
          </div>

          {/* Article Header */}
          <div className="p-6 sm:p-10 border-b border-slate-800/80 bg-slate-950/40">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {article.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">• {article.date}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight">
              {article.title}
            </h2>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-200">{article.author.name}</div>
                  <div className="text-[11px] text-slate-500">{article.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-10 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="text-lg text-slate-200 font-serif italic border-l-2 border-indigo-500 pl-4 py-1">
              {article.excerpt}
            </p>

            {article.content.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-6 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Topics &amp; Architecture Tags
              </div>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 text-xs font-mono border border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-6 bg-slate-950 border-t border-slate-800">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Insights</span>
            </button>

            <button
              onClick={() => {
                navigator.clipboard?.writeText?.(window.location.href);
                onShowToast('Article Link Copied', 'Direct link ready to share.', 'success');
              }}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              Copy Link to Share
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
