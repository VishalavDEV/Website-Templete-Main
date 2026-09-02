import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ARTICLES } from '../data/articles';
import { BookOpen, Clock, ArrowUpRight, Sparkles } from 'lucide-react';

export default function KnowledgeJournal() {
  const navigate = useNavigate();

  const featuredArticle = ARTICLES.find(a => a.featured) || ARTICLES[0];
  const listArticles = ARTICLES.filter(a => a.id !== featuredArticle.id);

  return (
    <section className="py-24 relative bg-[#0B0F19]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-electric-400 text-xs font-mono tracking-widest uppercase mb-2">
              <BookOpen className="w-4 h-4" />
              <span>DIGITAL MAGAZINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Knowledge Journal.
            </h2>
          </div>
          <button
            onClick={() => navigate('/journal')}
            className="text-xs font-mono font-bold text-electric-400 hover:text-electric-300 flex items-center gap-1.5"
          >
            <span>EXPLORE ALL PUBLICATIONS</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Asymmetrical Journal Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Main Featured Editorial Article */}
          <div
            onClick={() => navigate('/journal')}
            data-cursor="VIEW"
            className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border border-white/10 p-8 flex flex-col justify-between group cursor-pointer min-h-[460px] relative"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-electric-600 text-white font-bold tracking-wider">
                FEATURED EDITORIAL
              </span>
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-electric-400" />
                {featuredArticle.readTime}
              </span>
            </div>

            <div className="relative z-10 my-auto pt-16 space-y-3">
              <div className="text-xs font-mono text-cyan-300 font-bold uppercase">
                {featuredArticle.category} • {featuredArticle.date}
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display leading-tight group-hover:text-electric-300 transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed line-clamp-2 max-w-xl">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={featuredArticle.authorAvatar}
                  alt={featuredArticle.author}
                  className="w-8 h-8 rounded-full object-cover border border-electric-400"
                />
                <div>
                  <div className="text-xs font-bold text-white font-display">{featuredArticle.author}</div>
                  <div className="text-[10px] font-mono text-slate-400">{featuredArticle.authorTitle}</div>
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-electric-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                READ ARTICLE →
              </span>
            </div>
          </div>

          {/* Right Asymmetrical Article Stack (02, 03, 04) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {listArticles.map((article, idx) => (
              <div
                key={article.id}
                onClick={() => navigate('/journal')}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-electric-500/40 transition-all duration-300 cursor-pointer group space-y-3 bg-slate-950/40 hover:bg-slate-900/60"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-electric-400">
                    0{idx + 2}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {article.category} • {article.readTime}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white font-display group-hover:text-electric-300 transition-colors">
                  {article.title}
                </h4>

                <p className="text-xs text-slate-300 font-light line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/5">
                  <span>By {article.author}</span>
                  <ArrowUpRight className="w-4 h-4 text-electric-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
