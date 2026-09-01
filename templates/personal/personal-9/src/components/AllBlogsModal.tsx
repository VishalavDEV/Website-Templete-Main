import React, { useState } from 'react';
import { X, Search, Clock, Calendar, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/portfolioData';

interface AllBlogsModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onSelectBlog: (post: BlogPost) => void;
}

export const AllBlogsModal: React.FC<AllBlogsModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onSelectBlog,
}) => {
  if (!isOpen) return null;

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Generative AI', 'Computer Vision', 'AI Agents', 'Machine Learning', 'Product Design'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase()) ||
      (post.tags && post.tags.some(t => t.toLowerCase().includes(search.toLowerCase())));
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      id="all-blogs-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="all-blogs-modal-content"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-5xl rounded-3xl border shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col ${
          darkMode ? 'bg-[#111827] border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-xs">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg tracking-tight">
                All Articles & Engineering Writings
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Insights, architectures, and lessons from building production AI systems
              </p>
            </div>
          </div>

          <button
            id="close-all-blogs-modal-btn"
            onClick={onClose}
            aria-label="Close Modal"
            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Search & Filter Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="blog-search-input"
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                  darkMode
                    ? 'bg-gray-800/80 border-gray-700 text-white placeholder-gray-500'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>

            {/* Categories */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : darkMode
                        ? 'bg-gray-800/60 border border-gray-700 text-gray-400 hover:text-white'
                        : 'bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="py-16 text-center text-gray-400">
              <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-40 text-indigo-500" />
              <p className="text-sm font-medium">No articles matched "{search}"</p>
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory('All');
                }}
                className="mt-3 text-xs text-indigo-500 font-semibold hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  id={`all-blogs-card-${post.id}`}
                  onClick={() => onSelectBlog(post)}
                  className={`group rounded-2xl border flex flex-col overflow-hidden text-left transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg ${
                    darkMode
                      ? 'bg-gray-800/40 border-gray-800 hover:border-gray-700'
                      : 'bg-white border-gray-100 shadow-xs hover:border-gray-200'
                  }`}
                >
                  {/* Article Thumbnail */}
                  <div className="relative h-40 w-full overflow-hidden bg-gray-950">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-xs">
                      {post.category}
                    </span>
                    <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/75 text-white backdrop-blur-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                        {post.author && (
                          <>
                            <span>•</span>
                            <span>{post.author}</span>
                          </>
                        )}
                      </div>

                      <h3 className="font-bold text-sm sm:text-base leading-snug tracking-tight mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                        {post.summary}
                      </p>
                    </div>

                    {/* Tags & Action */}
                    <div>
                      {post.tags && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium border ${
                                darkMode
                                  ? 'bg-gray-800 border-gray-700 text-gray-300'
                                  : 'bg-gray-50 border-gray-200 text-gray-600'
                              }`}
                            >
                              <Tag className="w-2.5 h-2.5 opacity-60" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                          <span>Read Full Article</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
