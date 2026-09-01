import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ARTICLES } from '../data/mockData';
import { ArrowLeft, ArrowUpRight, Clock, Share2, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { CTASection } from '../components/sections/CTASection';

export const ArticleDetail: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  const article = ARTICLES.find((a) => a.id === articleId) || ARTICLES[0];
  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="pt-32 pb-20 bg-[#f8f7f4] min-h-screen">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/insights')}
          className="inline-flex items-center gap-2 font-mono text-xs text-[#626670] hover:text-[#121316] uppercase tracking-wider transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO INSIGHTS</span>
        </button>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-black/10 space-y-6">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-[#121316] text-lime-400 font-mono text-xs font-bold rounded-full uppercase">
            {article.category}
          </span>
          <div className="flex items-center gap-4 text-xs font-mono text-[#626670]">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-lime-700" />
              {article.readTime}
            </span>
            <span>{article.date}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black uppercase text-[#121316] leading-tight">
          {article.title}
        </h1>

        {/* Author Metadata Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-black/10">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border border-black/20"
            />
            <div>
              <div className="text-xs font-mono font-bold text-[#121316] uppercase">{article.author.name}</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase">{article.author.role}</div>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-black/15 rounded-full text-xs font-mono uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>SHARE</span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-black/10 shadow-xl">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-base sm:text-lg font-sans text-[#333] leading-relaxed">
        {article.content.map((paragraph, idx) => (
          <p key={idx} className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#121316]">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Related Briefings */}
      {relatedArticles.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-black/10 mt-16">
          <h2 className="text-2xl font-serif font-bold text-[#121316] uppercase mb-8">
            MORE EXECUTIVE BRIEFINGS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/insights/${rel.id}`)}
                className="p-6 bg-white border border-black/10 rounded-2xl hover:border-black transition-colors cursor-pointer space-y-3"
              >
                <span className="text-[10px] font-mono text-lime-700 uppercase font-bold">{rel.category}</span>
                <h3 className="text-xl font-serif font-bold text-[#121316]">{rel.title}</h3>
                <p className="text-xs font-sans text-gray-600 line-clamp-2">{rel.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <CTASection />
    </div>
  );
};
