import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowUpRight,
  Search,
  Sparkles,
  Tag,
} from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSelectArticle: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Systems', 'Design Architecture', 'Performance', 'Leadership'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <section
      id="blog"
      className="relative py-28 bg-neutral-950 text-white border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-400 mb-3">
              <BookOpen size={14} />
              <span>09 / WRITING & ESSAYS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white max-w-2xl">
              Architectural <span className="text-amber-400">Perspectives</span> & Research.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-xl">
              Deep dives into WebGPU memory management, the anti-slop design philosophy, zero-runtime tokens, and spatial acoustics.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search essays & tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="blog-search-input"
              className="pl-9 pr-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 w-full sm:w-56"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`blog-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-neutral-950 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Hero Article */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-amber-400/40 transition-all overflow-hidden shadow-2xl mb-12 group cursor-pointer"
            onClick={() => onSelectArticle(featuredPost)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden relative">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-950/90 via-neutral-950/30 to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-400 text-neutral-950 shadow-lg">
                  Featured Research
                </span>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3">
                    <span className="text-amber-400">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.publishedDate}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-amber-300 transition-colors mb-3 leading-snug">
                    {featuredPost.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-amber-400/40"
                    />
                    <span className="text-xs font-mono text-neutral-300">
                      {featuredPost.author.name}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Read Deep Dive</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => onSelectArticle(post)}
              className="group rounded-3xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-400/40 transition-all p-6 flex flex-col justify-between shadow-xl cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 relative bg-neutral-950">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-950/90 text-amber-400 border border-neutral-800">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.publishedDate}</span>
                </div>

                <h4 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h4>

                <p className="text-xs text-neutral-400 line-clamp-2 font-sans mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex gap-1">
                  {post.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800">
                      {t}
                    </span>
                  ))}
                </div>

                <ArrowUpRight size={15} className="text-neutral-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
