import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { BookOpen, Clock, ArrowUpRight, Search } from 'lucide-react';

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'AI & Society', 'Technology', 'Cognitive Science', 'Career Frontiers'];

  const filteredArticles = activeCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Banner */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-electric-500/30 text-electric-400 text-xs font-mono tracking-widest uppercase">
            <BookOpen className="w-4 h-4" />
            <span>AETHERIA DIGITAL JOURNAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
            Academic Magazine & Insights.
          </h1>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Thought leadership essays, empirical studies, and editorial analysis written by Aetheria research chairs and scholar fellows.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 bg-slate-950 p-2 rounded-2xl border border-white/10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-electric-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="rounded-3xl overflow-hidden glass-panel border border-white/10 p-6 flex flex-col justify-between space-y-6 group cursor-pointer bg-slate-950/60 hover:border-electric-500/40 transition-all"
            >
              <div className="space-y-4">
                <div className="h-64 rounded-2xl overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-electric-600 text-white font-bold">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-electric-400" /> {article.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display group-hover:text-electric-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={article.authorAvatar} alt={article.author} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-xs font-bold text-white">{article.author}</span>
                </div>
                <span className="text-xs font-mono font-bold text-electric-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  READ EDITORIAL <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
