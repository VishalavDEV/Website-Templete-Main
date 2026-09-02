import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowUpRight, Clock, Calendar, ArrowRight } from 'lucide-react';
import { insightArticles } from '../data/insights';
import { audioService } from '../utils/audio';

interface InsightsSectionProps {
  onSelectArticle: (slug: string) => void;
  onViewAllInsights?: () => void;
  showAll?: boolean;
}

export function InsightsSection({ onSelectArticle, onViewAllInsights, showAll = false }: InsightsSectionProps) {
  const articlesToDisplay = showAll ? insightArticles : insightArticles.slice(0, 3);

  return (
    <section id="insights-section" className="py-24 md:py-32 relative bg-[#0A0B0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest mb-3 font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Studio Dispatch & Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-xl">
              Perspectives on design, code, and culture.
            </h2>
          </div>

          {!showAll && (
            <button
              onClick={() => {
                audioService.playClick();
                if (onViewAllInsights) onViewAllInsights();
              }}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 text-violet-400" />
            </button>
          )}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesToDisplay.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => {
                audioService.playClick();
                onSelectArticle(article.slug);
              }}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#151821]/70 backdrop-blur-md border border-white/10 hover:border-violet-500/40 transition-all duration-300 cursor-pointer shadow-xl"
              data-cursor="view"
              data-cursor-text="READ"
            >
              <div>
                {/* Hero Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11131E] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-violet-300 border border-white/10">
                    {article.category}
                  </div>
                </div>

                {/* Article Header & Excerpt */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-violet-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="px-6 pb-6 pt-4 border-t border-white/6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-mono text-gray-300">{article.author.name}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-violet-600 text-gray-400 group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
