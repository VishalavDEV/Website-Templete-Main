import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Search, BookOpen, Clock, Calendar, ArrowUpRight, X } from 'lucide-react';
import { insightArticles } from '../data/insights';
import { audioService } from '../utils/audio';

interface InsightsPageProps {
  onSelectArticle: (slug: string) => void;
}

export function InsightsPage({ onSelectArticle }: InsightsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'STRATEGY', 'DESIGN', 'ENGINEERING', 'CULTURE'];

  const filteredArticles = insightArticles.filter(a => {
    const matchesCat = selectedCategory === 'ALL' || a.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q));

    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/40">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Horizon Editorial & Dispatch</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Perspectives on design systems, code & craft.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-serif">
            Essays, technical teardowns, and strategic manifestos authored by our senior partners and creative engineers.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 bg-[#12141F] rounded-2xl border border-white/8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    audioService.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                    isActive
                      ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] px-2 py-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays & tags..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-xs font-mono focus:outline-none focus:border-violet-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => {
                audioService.playClick();
                onSelectArticle(article.slug);
              }}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-[#11131E] border border-white/8 hover:border-violet-500/40 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <div>
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
      </section>
    </div>
  );
}
