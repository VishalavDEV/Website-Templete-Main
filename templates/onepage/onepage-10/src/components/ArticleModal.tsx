import React from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Bookmark,
  BookmarkCheck,
  Share2,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  BookOpen
} from 'lucide-react';

export const ArticleModal: React.FC = () => {
  const {
    activeArticleModal,
    setActiveArticleModal,
    bookmarkedArticles,
    toggleBookmarkArticle,
    addToast,
    setIsConsultationModalOpen
  } = useApp();

  if (!activeArticleModal) return null;

  const article = activeArticleModal;
  const isBookmarked = bookmarkedArticles.includes(article.id);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast({
      type: 'success',
      title: 'Article Link Copied',
      message: 'Direct citation link copied to clipboard.'
    });
  };

  const handleConsult = () => {
    setActiveArticleModal(null);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="w-full max-w-3xl bg-[#0C0C12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-gradient-to-r from-[#08080A] via-[#0C0C12] to-[#141422] flex items-start justify-between">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {article.category} Research
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {article.date}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {article.title}
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => toggleBookmarkArticle(article.id)}
              className={`p-2 rounded-lg border transition-all ${
                isBookmarked
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                  : 'text-slate-400 hover:text-white border-white/10 hover:bg-white/5'
              }`}
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Article'}
              aria-label="Bookmark article"
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>
            <button
              onClick={handleShare}
              className="p-2 text-slate-400 hover:text-white rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
              title="Copy share link"
              aria-label="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveArticleModal(null)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
          {/* Author Card */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#08080A] border border-white/5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <h5 className="text-sm font-semibold text-white">{article.author.name}</h5>
              <p className="text-xs text-slate-400">{article.author.role}</p>
            </div>
          </div>

          {/* Key Takeaways Callout */}
          <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
              <BookOpen className="w-4 h-4" />
              <span>Executive Key Takeaways</span>
            </div>
            <ul className="space-y-1.5">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {article.tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 rounded-md text-xs bg-[#08080A] text-slate-400 border border-white/5">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-[#08080A] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">Published by NEXORA Research & Intelligence Labs</span>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveArticleModal(null)}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={handleConsult}
              className="flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-bold text-black bg-white hover:bg-slate-200 rounded-full shadow-md shadow-white/5 transition-all w-full sm:w-auto"
            >
              <span>Discuss Implementation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
