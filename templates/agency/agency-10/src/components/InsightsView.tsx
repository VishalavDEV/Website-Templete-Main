import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../data/blog';
import { BlogPost } from '../types';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

interface InsightsViewProps {
  onViewArticle: (slug: string) => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({ onViewArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Generative AI & RAG', 'Systems Architecture', 'Distributed Systems', 'Applied ML', 'DevOps & Cloud'];

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    if (selectedCategory !== 'All' && post.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div id="insights-page" className="pt-24 pb-20 bg-white">
      {/* Header */}
      <div className="bg-slate-950 text-white pt-14 pb-16 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs border border-blue-500/30">
            Technical Publications
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white mt-4">
            Engineering Insights &amp; Research RFCs.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Architectural benchmarks, production post-mortems, and applied AI methodology written by our staff engineers and researchers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full sm:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Featured Post Spotlight */}
        {filteredPosts.length > 0 && selectedCategory === 'All' && !searchQuery && (
          <div
            onClick={() => onViewArticle(filteredPosts[0].slug)}
            className="group p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl cursor-pointer hover:border-slate-700 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-blue-400">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30">
                  Featured Publication
                </span>
                <span>&bull;</span>
                <span>{filteredPosts[0].category}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  {filteredPosts[0].readingTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-blue-400 transition-colors">
                {filteredPosts[0].title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {filteredPosts[0].excerpt}
              </p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2.5">
                  <img
                    src={filteredPosts[0].author.avatar}
                    alt={filteredPosts[0].author.name}
                    className="w-7 h-7 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-xs font-bold text-white">{filteredPosts[0].author.name}</p>
                    <p className="text-[10px] text-slate-400">{filteredPosts[0].author.role}</p>
                  </div>
                </div>

                <span className="text-xs font-bold text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Publication</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 rounded-2xl overflow-hidden bg-slate-800">
              <img
                src={filteredPosts[0].coverImage}
                alt={filteredPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onViewArticle(post.slug)}
              className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden bg-slate-100 mb-4">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="text-blue-600 font-semibold">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs text-slate-700 font-medium">{post.author.name}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
