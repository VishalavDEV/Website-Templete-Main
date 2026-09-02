import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Check, Sparkles, BookOpen } from 'lucide-react';
import { InsightArticle } from '../types';
import { insightArticles } from '../data/insights';
import { audioService } from '../utils/audio';

interface ArticleDetailPageProps {
  article: InsightArticle;
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
  onStartProject: () => void;
}

export function ArticleDetailPage({
  article,
  onNavigate,
  onSelectArticle,
  onStartProject
}: ArticleDetailPageProps) {
  const [copiedShare, setCopiedShare] = useState(false);

  const relatedArticles = insightArticles.filter(a => a.id !== article.id).slice(0, 2);

  const handleShare = () => {
    audioService.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="pt-32 pb-24 w-full">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => {
            audioService.playClick();
            onNavigate('/insights');
          }}
          className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 space-y-6">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-gray-400">
          <span className="px-3 py-1 rounded-full bg-violet-950/60 text-violet-300 border border-violet-800/40 font-bold uppercase">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gray-500" />
            {article.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-violet-400" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-serif">
          {article.excerpt}
        </p>

        {/* Author Byline & Share */}
        <div className="pt-6 border-t border-white/8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div>
              <h4 className="text-sm font-bold text-white">{article.author.name}</h4>
              <p className="text-xs font-mono text-gray-400">{article.author.role}</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 font-mono text-xs flex items-center gap-1.5 transition-all"
          >
            {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedShare ? 'Link Copied' : 'Share Essay'}</span>
          </button>
        </div>
      </header>

      {/* Main Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Key Takeaways Box */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#12141F] border border-violet-500/30 space-y-3 shadow-xl">
            <div className="flex items-center gap-2 font-mono text-xs text-violet-400 font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Core Takeaways & Rules of Thumb</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-mono text-gray-300">
              {article.takeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-violet-400 font-bold">›</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Structured Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed font-serif">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Article Tags */}
        <div className="pt-8 border-t border-white/8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-gray-500 mr-2">TAGS:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Essays */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-12 border-t border-white/8">
        <div className="mb-8">
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block mb-1">
            Further Reading
          </span>
          <h3 className="text-2xl font-bold text-white">More from the Dispatch</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedArticles.map((rel) => (
            <div
              key={rel.id}
              onClick={() => {
                audioService.playClick();
                onSelectArticle(rel.slug);
              }}
              className="p-6 rounded-2xl bg-[#11131E] border border-white/8 hover:border-violet-500/40 transition-all cursor-pointer group space-y-3"
            >
              <span className="text-[10px] font-mono text-violet-400 font-bold uppercase block">{rel.category}</span>
              <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-2">
                {rel.title}
              </h4>
              <p className="text-xs text-gray-400 line-clamp-2">{rel.excerpt}</p>
              <div className="inline-flex items-center gap-1 text-xs font-mono text-violet-400 font-semibold pt-1">
                <span>Read Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
