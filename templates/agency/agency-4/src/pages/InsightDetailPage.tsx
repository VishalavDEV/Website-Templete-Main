import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Globe, MessageCircle } from 'lucide-react';
import { INSIGHTS } from '../data/insights';
import { ArticleCard } from '../components/ui/ArticleCard';

export const InsightDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const article = INSIGHTS.find((item) => item.slug === id || item.id === id) || INSIGHTS[0];
  const relatedArticles = INSIGHTS.filter((i) => i.id !== article.id).slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <article className="pt-32 pb-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/insights"
          className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#6B6863] hover:text-[#D96B43] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Insights Journal</span>
        </Link>

        {/* Article Title & Metadata */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center space-x-3 text-xs text-[#D96B43] font-bold uppercase tracking-widest">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center text-gray-500">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-[#1A1918] tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Author Bar */}
          <div className="pt-4 flex items-center justify-between border-t border-b border-[#EAE6DF] py-4">
            <div className="flex items-center space-x-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#EAE6DF]"
              />
              <div>
                <p className="text-sm font-bold text-[#1A1918]">{article.author.name}</p>
                <p className="text-xs text-[#6B6863]">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-xs text-[#6B6863] font-semibold mr-2 hidden sm:inline">Share Article:</span>
              <button className="p-2 rounded-full hover:bg-white hover:text-[#D96B43] transition-colors" aria-label="Share on Web">
                <Globe className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-white hover:text-[#D96B43] transition-colors" aria-label="Discuss Article">
                <MessageCircle className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-white hover:text-[#D96B43] transition-colors" aria-label="Share Link">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl aspect-[16/9] mb-12 bg-[#EAE6DF]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-lg max-w-none text-[#1A1918] leading-relaxed space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE6DF] shadow-sm mb-16">
          <p className="text-xl font-serif italic text-[#D96B43] leading-relaxed border-l-4 border-[#D96B43] pl-6 py-2">
            "{article.summary}"
          </p>

          {article.content.map((paragraph, idx) => (
            <p key={idx} className="text-base text-[#2A2826] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Related Articles Section */}
        <div className="pt-12 border-t border-[#EAE6DF] space-y-8">
          <h3 className="text-2xl font-bold font-display text-[#1A1918]">
            Related Essays & Perspectives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel, idx) => (
              <ArticleCard key={rel.id} article={rel} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </article>
  );
};
