import React from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Bookmark,
  BookmarkCheck,
  Share2,
  Printer,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import articlesData from '../data/articles.json';
import { Article } from '../types';

export const ArticleModal: React.FC = () => {
  const {
    selectedArticle,
    closeArticle,
    openArticle,
    savedArticleIds,
    toggleSaveArticle,
    showToast,
  } = useApp();

  if (!selectedArticle) return null;

  const art = selectedArticle;
  const isSaved = savedArticleIds.includes(art.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `https://auramedical.internal/library/${art.id}`
      );
      showToast('Article link copied to clipboard', 'info');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const relatedArticles = (articlesData as Article[]).filter((a) =>
    art.relatedArticleIds?.includes(a.id)
  );

  return (
    <div
      id="article-reader-overlay"
      className="fixed inset-0 z-50 bg-[#3E3445]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={closeArticle}
    >
      <div
        className="w-full max-w-3xl bg-[#FFFDFC] rounded-3xl shadow-[0_30px_70px_rgba(90,70,110,0.22)] border border-[#3E3445]/10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-[#3E3445]/8 bg-[#F9F7FB] flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{art.category}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id="article-save-toggle-btn"
              onClick={() => toggleSaveArticle(art.id)}
              className={`p-2 rounded-full transition-colors ${
                isSaved
                  ? 'bg-[#E8DDF2] text-[#665080]'
                  : 'text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/40'
              }`}
              title={isSaved ? 'Saved to reading list' : 'Save article'}
            >
              {isSaved ? (
                <BookmarkCheck className="w-4 h-4 text-[#8B6FAE]" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            <button
              id="article-share-btn"
              onClick={handleShare}
              className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/40 rounded-full transition-colors"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              id="article-print-btn"
              onClick={handlePrint}
              className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/40 rounded-full transition-colors"
              title="Print article"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              id="close-article-modal-btn"
              onClick={closeArticle}
              className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/40 rounded-full transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reading Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7">
          {/* Article Header */}
          <div className="space-y-3">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3E3445] leading-tight">
              {art.title}
            </h1>
            <p className="text-base sm:text-lg text-[#756B7C] font-normal leading-relaxed">
              {art.subtitle}
            </p>

            {/* Author Meta Row */}
            <div className="flex items-center gap-3 pt-3 pb-2 border-t border-b border-[#3E3445]/8">
              <img
                src={art.author.avatar}
                alt={art.author.name}
                className="w-11 h-11 rounded-full object-cover border border-[#8B6FAE]/30"
              />
              <div className="flex-1 text-xs">
                <div className="font-bold text-[#3E3445]">{art.author.name}</div>
                <div className="text-[#756B7C]">{art.author.role}</div>
              </div>
              <div className="text-right text-xs text-[#756B7C]">
                <div>{art.date}</div>
                <div className="font-medium text-[#8B6FAE]">{art.readingTime}</div>
              </div>
            </div>
          </div>

          {/* Hero Photography */}
          <div className="rounded-3xl overflow-hidden shadow-md max-h-80">
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Clinical Takeaways Card */}
          <div className="p-6 rounded-3xl bg-[#E8DDF2]/40 border border-[#8B6FAE]/20 space-y-2.5">
            <h4 className="font-serif text-sm font-bold text-[#665080] uppercase tracking-wider">
              Key Clinical Takeaways
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#3E3445]">
              {art.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#739B82] mt-0.5 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Article Body Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-[#3E3445] leading-relaxed font-normal">
            {art.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Educational Disclaimer */}
          <div className="p-4 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/8 text-xs text-[#756B7C] italic">
            Disclaimer: This publication is provided for educational and preventive wellness purposes
            only and does not constitute medical advice or a doctor-patient diagnosis. Always consult
            a licensed physician for tailored medical guidance.
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="pt-6 border-t border-[#3E3445]/8">
              <h4 className="font-serif text-lg font-bold text-[#3E3445] mb-4">
                Recommended Related Reading
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    id={`related-article-${rel.id}`}
                    onClick={() => openArticle(rel)}
                    className="p-4 rounded-2xl bg-[#F9F7FB] hover:bg-white border border-[#3E3445]/8 hover:border-[#8B6FAE]/30 transition-all cursor-pointer group flex items-center gap-3.5"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="text-[10px] font-bold uppercase text-[#8B6FAE]">
                        {rel.category}
                      </div>
                      <div className="text-xs font-bold text-[#3E3445] group-hover:text-[#665080] line-clamp-2">
                        {rel.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
