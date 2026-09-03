import React, { useState } from 'react';
import { ARTICLES_DATA } from '../data/mockData';
import { Article } from '../types';
import { ArticleModal } from './ArticleModal';
import { BookOpen, Clock, ArrowRight, Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { motion } from 'motion/react';

interface InsightsSectionProps {
  onShowToast: (title: string, description?: string, type?: 'success' | 'info') => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onShowToast }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalArticle, setActiveModalArticle] = useState<Article | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = ['All', 'AI Architecture', 'Product Design', 'Engineering', 'Executive Strategy'];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((a) => a.category === selectedCategory);

  const handleShare = (title: string) => {
    navigator.clipboard?.writeText?.(window.location.href);
    onShowToast('Link Copied to Clipboard', `Direct link to "${title}" copied.`, 'success');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      onShowToast('Invalid Email Address', 'Please provide a valid corporate email.', 'info');
      return;
    }

    setIsSubmittingNewsletter(true);
    setTimeout(() => {
      setIsSubmittingNewsletter(false);
      setNewsletterSubscribed(true);
      onShowToast(
        'Subscription Confirmed',
        'You will receive our bi-weekly architecture dispatches and whitepapers.',
        'success'
      );
    }, 900);
  };

  return (
    <section id="insights-section" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Studio Insights &amp; Whitepapers</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Frontier research in AI orchestration, design systems &amp; edge cloud.
            </h2>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setActiveModalArticle(article)}
              className="group rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-indigo-200 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-slate-700"
                  />
                  <div className="text-xs font-medium text-slate-300">
                    {article.author.name}
                  </div>
                </div>

                <span className="text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dispatch Newsletter Subscription Card */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 uppercase mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>AURA Technical Dispatch</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Engineering paradigms delivered bi-weekly.
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              No promotional fluff. Pure architectural blueprints, latency benchmarks, and design engineering tear-downs read by 14,000+ technology leaders.
            </p>

            {newsletterSubscribed ? (
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>You are subscribed to the AURA Architecture Dispatch. Check your inbox for the welcome issue.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-400/60"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmittingNewsletter}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md disabled:opacity-50 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmittingNewsletter ? 'Subscribing...' : 'Subscribe to Dispatch'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      <ArticleModal
        article={activeModalArticle}
        isOpen={!!activeModalArticle}
        onClose={() => setActiveModalArticle(null)}
        onShare={handleShare}
        onShowToast={onShowToast}
      />
    </section>
  );
};
