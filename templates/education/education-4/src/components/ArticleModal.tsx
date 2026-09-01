import React from 'react';
import { X, Clock, User, Calendar, Share2, ArrowLeft } from 'lucide-react';
import { NewsItem } from '../types';

interface ArticleModalProps {
  article: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header Photo */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 shrink-0">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-[#ec1c4e] text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-md bg-[#ec1c4e] text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              {article.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold leading-tight">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm">
          <div className="flex items-center justify-between py-3 border-b border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#ec1c4e]" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#ec1c4e]" />
                {article.readTime}
              </span>
            </div>
            <span className="flex items-center gap-1 text-slate-800 font-semibold">
              <User className="w-3.5 h-3.5" />
              {article.author}
            </span>
          </div>

          <p className="font-bold text-slate-900 text-sm sm:text-base leading-relaxed">
            {article.summary}
          </p>

          <p className="text-slate-600 leading-relaxed">
            The educational initiatives and research developments at StudyPress continue to cultivate global recognition and substantial multi-year scholarship grants. With dedicated faculty mentorship and international student fellows actively engaging in cutting-edge projects, these achievements represent key milestones in our academic mission.
          </p>

          <div className="p-4 bg-rose-50 rounded-xl border-l-4 border-[#ec1c4e] my-4 italic text-slate-900 text-xs sm:text-sm">
            "Our mission remains steadfast: empower aspiring learners worldwide with uninhibited access to premium education, research tools, and accredited career pathways."
          </div>

          <p className="text-slate-600 leading-relaxed">
            Prospective students and researchers interested in exploring related modules or getting in touch with the lead department are encouraged to submit an inquiry through our student portal.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Stories</span>
          </button>

          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('Article link copied to clipboard!');
              }
            }}
            className="px-4 py-2 bg-slate-200 hover:bg-[#ec1c4e] hover:text-white text-slate-800 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Story</span>
          </button>
        </div>
      </div>
    </div>
  );
};
