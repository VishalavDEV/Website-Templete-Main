import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { INSIGHTS_DATA } from '../data/insights';
import {
  FileText,
  Clock,
  Calendar,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  Search,
  BookOpen
} from 'lucide-react';

const CATEGORIES = ['All Research', 'Strategic AI', 'Architecture', 'Operations', 'Cyber Defense'];

export const InsightsSection: React.FC = () => {
  const { setActiveArticleModal, bookmarkedArticles, toggleBookmarkArticle } = useApp();

  const [selectedCategory, setSelectedCategory] = useState('All Research');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return INSIGHTS_DATA.filter(art => {
      const matchesCat =
        selectedCategory === 'All Research' || art.category === selectedCategory;
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="insights" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>NEXORA Research & Intelligence Labs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Thought Leadership & Architecture Briefs.
          </h2>
          <p className="text-base text-slate-400">
            Rigorous technical publications, architectural blueprints, and quantitative market insights written by our senior engineering fellows.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search research, tags..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#0A0A0E] border border-white/10 rounded-full focus:outline-none focus:border-indigo-500 text-slate-200 placeholder-slate-500"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(art => {
            const isBookmarked = bookmarkedArticles.includes(art.id);

            return (
              <div
                key={art.id}
                className="rounded-2xl bg-[#0C0C12] border border-white/5 p-6 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-950/20"
              >
                <div className="space-y-4">
                  {/* Category, Date & Read Time */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {art.category}
                    </span>
                    <button
                      onClick={() => toggleBookmarkArticle(art.id)}
                      className={`p-1.5 rounded-lg border transition-all ${
                        isBookmarked
                          ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                          : 'text-slate-500 hover:text-slate-300 border-transparent hover:bg-white/5'
                      }`}
                      title={isBookmarked ? 'Bookmarked' : 'Bookmark for later'}
                    >
                      {isBookmarked ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setActiveArticleModal(art)}
                    className="text-lg font-bold font-display text-white group-hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {art.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {art.summary}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {art.date}
                    </span>
                  </div>
                </div>

                {/* Author & Read Action */}
                <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={art.author.avatar}
                      alt={art.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs font-semibold text-slate-300">{art.author.name}</span>
                  </div>

                  <button
                    onClick={() => setActiveArticleModal(art)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Paper</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
