import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Compass, LayoutGrid, List, Sparkles, X, ArrowUpRight } from 'lucide-react';
import { mockApi } from '../../services/mockApi';
import { Article, CategoryInfo } from '../../types';
import { StoryCard } from '../../components/StoryCard/StoryCard';
import { Newsletter } from '../../components/Newsletter/Newsletter';

export const ExplorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCat = searchParams.get('category') || 'all';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'newest' | 'readingTime'>('newest');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let isMounted = true;

    const loadData = async () => {
      const allArts = await mockApi.getArticles();
      const allCats = await mockApi.getCategories();
      if (isMounted) {
        setArticles(allArts);
        setCategories(allCats);
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Update query params when query/cat changes
  useEffect(() => {
    const params: Record<string, string> = {};
    if (query) params.q = query;
    if (selectedCategory !== 'all') params.category = selectedCategory;
    setSearchParams(params, { replace: true });
  }, [query, selectedCategory, setSearchParams]);

  // Filtered and sorted articles
  const filteredArticles = articles.filter((art) => {
    const matchesCat =
      selectedCategory === 'all' || art.category === selectedCategory;
    const matchesQuery =
      !query.trim() ||
      art.title.toLowerCase().includes(query.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      art.author.name.toLowerCase().includes(query.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));

    return matchesCat && matchesQuery;
  }).sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    const timeA = parseInt(a.readingTime) || 0;
    const timeB = parseInt(b.readingTime) || 0;
    return timeB - timeA;
  });

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 select-none space-y-12">
      
      {/* Search & Filter Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center sm:text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>UNIVERSAL ARCHIVE EXPLORER</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95]">
            EXPLORE THE TERRA REPOSITORY
          </h1>
          <p className="text-sm text-zinc-400 font-light">
            Search across our full index of dispatches, investigations, and field logs.
          </p>
        </div>

        {/* Big Search Bar */}
        <div className="relative max-w-3xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F27D26]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search keywords, locations, species, astronomical bodies, authors..."
            className="w-full pl-12 pr-10 py-4 rounded-2xl bg-[#121214] border border-zinc-800 focus:border-[#F27D26] text-white text-sm font-mono placeholder:text-zinc-500 focus:outline-none transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills & Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-widest transition-all uppercase whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#F27D26] text-black font-black shadow-md shadow-[#F27D26]/20'
                  : 'bg-[#121214] text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              ALL
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-widest transition-all uppercase whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.slug
                    ? 'bg-[#F27D26] text-black font-black shadow-md shadow-[#F27D26]/20'
                    : 'bg-[#121214] text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* View & Sort toggles */}
          <div className="flex items-center gap-3 self-end md:self-auto text-xs font-mono uppercase tracking-wider">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#121214] border border-zinc-800 text-white rounded-full px-4 py-2 focus:outline-none focus:border-[#F27D26]"
            >
              <option value="newest">Sort: Newest</option>
              <option value="readingTime">Sort: Longest Read</option>
            </select>

            <div className="flex items-center p-1 rounded-full bg-[#121214] border border-zinc-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#F27D26] text-black' : 'text-zinc-500 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-[#F27D26] text-black' : 'text-zinc-500 hover:text-white'
                }`}
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            SHOWING {filteredArticles.length} MATCHING DISPATCHES
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="py-20 rounded-3xl bg-[#121214] border border-zinc-800 text-center space-y-4 max-w-xl mx-auto p-6">
            <Sparkles className="w-10 h-10 text-[#F27D26] mx-auto opacity-50" />
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              No matching dispatches found
            </h3>
            <p className="text-xs text-zinc-400 font-light">
              Try clearing your search query or switching to another category.
            </p>
            <button
              onClick={() => {
                setQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2.5 rounded-full bg-[#F27D26] text-black font-black text-xs font-mono tracking-widest uppercase cursor-pointer"
            >
              RESET FILTERS
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <StoryCard key={art.id} article={art} variant="secondary" />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredArticles.map((art) => (
              <StoryCard key={art.id} article={art} variant="horizontal" />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
};
