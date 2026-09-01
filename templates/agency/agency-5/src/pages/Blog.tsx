import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Search, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCustomCursor } from '../hooks/useCustomCursor';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

const categories = ['All', 'Design', 'Technology', 'Strategy', 'AI', 'Business', 'Culture'];
const POSTS_PER_PAGE = 6;

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { setCursorHover, resetCursor } = useCustomCursor();

  // Filter & Search Logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  return (
    <div className="space-y-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <Breadcrumb items={[{ label: 'Studio Journal' }]} />

        <div className="space-y-6">
          <Badge variant="accent">INSIGHTS & ARCHITECTURE</Badge>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display max-w-5xl leading-none">
            BYTEORA JOURNAL & RESEARCH DISPATCHES.
          </h1>
          <p className="text-lg md:text-2xl text-[var(--secondary-color)] leading-relaxed font-light max-w-3xl">
            In-depth perspectives from our engineering and design partners on WebGL, non-deterministic AI interfaces, and brand tokenization.
          </p>
        </div>

        {/* Featured Main Article Card */}
        {!searchQuery && activeCategory === 'All' && currentPage === 1 && (
          <Link
            to={`/blog/${featuredPost.slug}`}
            onMouseEnter={() => setCursorHover('READ FEATURED', featuredPost.coverImage)}
            onMouseLeave={resetCursor}
            className="group block p-8 md:p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="accent">{featuredPost.category}</Badge>
                <span className="text-xs font-mono text-[var(--secondary-color)]">FEATURED DISPATCH</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors font-display leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-base text-[var(--secondary-color)] line-clamp-3 font-light leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] text-xs font-mono text-[var(--secondary-color)]">
                <div className="flex items-center gap-3">
                  <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-8 h-8 rounded-full object-cover" />
                  <span>By {featuredPost.author.name} · {featuredPost.publishDate}</span>
                </div>
                <span className="font-bold text-[var(--accent-color)]">{featuredPost.readTime} →</span>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[16/10] rounded-2xl overflow-hidden bg-black">
              <ImageWithFallback
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fallbackTitle={featuredPost.title}
                fallbackCategory={featuredPost.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
        )}

        {/* Filter Controls & Live Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[var(--border-color)]">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[var(--accent-color)] text-[#0A0A0A] font-bold shadow-md'
                    : 'bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--text-color)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--secondary-color)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search articles & tags..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] focus:border-[var(--accent-color)] text-xs text-[var(--text-color)] placeholder-[var(--secondary-color)] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                onMouseEnter={() => setCursorHover('READ ARTICLE', post.coverImage)}
                onMouseLeave={resetCursor}
                className="group flex flex-col justify-between space-y-4 rounded-2xl p-6 bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all duration-300 h-full"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-black">
                    <ImageWithFallback
                      src={post.coverImage}
                      alt={post.title}
                      fallbackTitle={post.title}
                      fallbackCategory={post.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="accent">{post.category}</Badge>
                    <span className="text-xs font-mono text-[var(--secondary-color)]">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors font-display line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[var(--secondary-color)] line-clamp-3 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono text-[var(--secondary-color)]">
                  <span>By {post.author.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--accent-color)] group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] text-center space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-color)]">No articles found matching "{searchQuery}"</h3>
            <p className="text-xs text-[var(--secondary-color)]">Try searching for keywords like "WebGL", "Typography", "AI", or "Performance".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="px-4 py-2 rounded-full bg-[var(--accent-color)] text-[#0A0A0A] font-mono text-xs font-bold uppercase"
            >
              Reset Search Filters
            </button>
          </div>
        )}

        {/* Working Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 pt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] disabled:opacity-30 disabled:pointer-events-none hover:border-[var(--accent-color)] cursor-pointer text-[var(--text-color)]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs font-bold text-[var(--text-color)]">
              PAGE {currentPage} OF {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] disabled:opacity-30 disabled:pointer-events-none hover:border-[var(--accent-color)] cursor-pointer text-[var(--text-color)]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <FinalCTA />
    </div>
  );
};
