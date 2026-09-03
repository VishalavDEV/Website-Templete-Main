import React, { useEffect } from 'react';
import { X, Clock, Calendar, User, Bookmark, Share2, CheckCircle2 } from 'lucide-react';
import { ResourceArticle } from '../types';

interface ResourceModalProps {
  article: ResourceArticle | null;
  onClose: () => void;
  onBookmark: (title: string) => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ article, onClose, onBookmark }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252326]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="relative bg-[#FAF8F5] rounded-2xl max-w-3xl w-full shadow-2xl border border-[#E5DDD8] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-8"
        role="dialog"
        aria-labelledby="resource-modal-title"
        aria-modal="true"
      >
        {/* Article Banner Image */}
        <div className="relative h-56 sm:h-72 w-full bg-[#542F3B]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#542F3B] via-[#542F3B]/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/40 text-white hover:bg-black/60 transition-colors z-10 focus-visible:ring-2 focus-visible:ring-[#C97873]"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="inline-block px-3 py-1 rounded-md bg-[#C97873] text-white text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <h2 id="resource-modal-title" className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#FAF8F5]">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Article Meta Header */}
        <div className="px-6 py-4 bg-[#F2ECE9] border-b border-[#E5DDD8] flex flex-wrap items-center justify-between gap-4 text-xs text-[#70696C] font-sans">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold text-[#542F3B]">
              <User className="w-3.5 h-3.5 text-[#C97873]" /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#C97873]" /> {article.readTime}
            </span>
          </div>

          <button
            onClick={() => onBookmark(article.title)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C97873] hover:underline"
          >
            <Bookmark className="w-4 h-4" /> Save Article
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto font-sans text-sm text-[#252326]">
          
          <div className="p-4 rounded-xl bg-[#FAF0EE] border border-[#C97873]/20 font-medium italic text-[#542F3B]">
            "{article.summary}"
          </div>

          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Key Takeaways Box */}
          <div className="p-5 rounded-xl bg-white border border-[#E5DDD8] space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#C97873] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Key Patient Takeaways
            </h4>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#252326]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C97873] mt-1.5 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-[#F2ECE9] rounded-xl text-[11px] text-[#70696C] text-center font-normal border border-[#E5DDD8]">
            Educational resource published by Gluvia Diabetes Institute.
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#F2ECE9]/70 border-t border-[#E5DDD8] flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary min-h-[44px] px-6 py-2.5 text-xs font-semibold"
          >
            Close Article
          </button>
        </div>

      </div>
    </div>
  );
};
