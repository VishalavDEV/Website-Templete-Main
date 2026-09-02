import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Clock, Calendar, ArrowLeft, X, Sparkles } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import { blogsData, blogCategories } from '../data/blogs';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredBlogs = useMemo(() => {
    return blogsData.filter((b) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || b.category === selectedCategory;
      const matchesSearch =
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.author.name.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Knowledge Hub"
          title="Educational Resources &"
          highlight="Technical Insights"
          subtitle="Explore deep-dive technical tutorials, career strategy guides, and frontier artificial intelligence research."
        />

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles by title, topic, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary-500 font-medium text-slate-900"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onClick={(b) => setActiveArticle(b)}
            />
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 max-w-md mx-auto my-12">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">No Articles Found</h3>
            <p className="text-xs text-slate-500 mb-4">Try clearing your search query.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Articles'); }}
              className="px-6 py-2 bg-primary-600 text-white font-bold text-xs rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative my-8"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[21/9] overflow-hidden bg-slate-900">
                <img
                  src={activeArticle.thumbnail}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-600 text-white mb-2 inline-block">
                    {activeArticle.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">{activeArticle.title}</h2>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between py-3 border-b border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeArticle.author.avatar}
                      alt={activeArticle.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-primary-500"
                    />
                    <div>
                      <span className="font-bold text-slate-900 block">{activeArticle.author.name}</span>
                      <span className="text-[10px]">Published {activeArticle.publishedAt}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4">
                  <p className="text-base font-semibold text-slate-900 leading-relaxed">
                    {activeArticle.excerpt}
                  </p>
                  <div className="whitespace-pre-line">
                    {activeArticle.content}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
