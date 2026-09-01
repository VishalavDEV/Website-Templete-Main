import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, Grid, List, X, Sparkles, Rotate3d } from 'lucide-react';
import { Article, Category, SortOption } from '../types';
import { articleService } from '../services/articleService';
import { ArticleCard } from '../components/articles/ArticleCard';
import { StoryCoverflowDeck } from '../components/stories/StoryCoverflowDeck';
import { Pagination } from '../components/common/Pagination';
import { CardSkeleton } from '../components/common/Skeleton';
import { EmptyState } from '../components/common/EmptyState';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const Stories: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'all';
  const initialTag = searchParams.get('tag') || 'all';
  const initialPage = parseInt(searchParams.get('page') || '1', 10);
  const initialSort = (searchParams.get('sort') as SortOption) || 'latest';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [sortBy, setSortBy] = useState<SortOption>(initialSort);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | '3d'>('grid');

  const [articles, setArticles] = useState<Article[]>([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState<(Category & { articleCount: number })[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Sync state from URL query parameters if they change externally
  useEffect(() => {
    const q = searchParams.get('q') || '';
    const cat = searchParams.get('category') || 'all';
    const tag = searchParams.get('tag') || 'all';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const sort = (searchParams.get('sort') as SortOption) || 'latest';

    setSearchQuery(q);
    setSelectedCategory(cat);
    setSelectedTag(tag);
    setCurrentPage(page);
    setSortBy(sort);
  }, [searchParams]);

  // Load static category and tag metadata once
  useEffect(() => {
    async function loadMeta() {
      const [cats, allTags] = await Promise.all([
        articleService.getCategories(),
        articleService.getAllTags()
      ]);
      setCategories(cats);
      setTags(allTags);
    }
    loadMeta();
  }, []);

  // Fetch articles based on active criteria
  useEffect(() => {
    let isCancelled = false;

    async function fetchFilteredArticles() {
      setLoading(true);
      try {
        const res = await articleService.getArticles({
          searchQuery: searchQuery.trim(),
          category: selectedCategory,
          tag: selectedTag,
          sortBy,
          page: currentPage,
          pageSize: 9
        });

        if (!isCancelled) {
          setArticles(res.data);
          setTotalArticles(res.total);
          setTotalPages(res.totalPages);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchFilteredArticles();

    return () => {
      isCancelled = true;
    };
  }, [searchQuery, selectedCategory, selectedTag, sortBy, currentPage]);

  const updateURLParams = (params: Record<string, string | number>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, val]) => {
      if (val === '' || val === 'all' || (key === 'page' && val === 1)) {
        newParams.delete(key);
      } else {
        newParams.set(key, String(val));
      }
    });
    setSearchParams(newParams);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    updateURLParams({ q: searchQuery, page: 1 });
  };

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setCurrentPage(1);
    updateURLParams({ category: categorySlug, page: 1 });
  };

  const handleTagChange = (tag: string) => {
    const nextTag = selectedTag === tag ? 'all' : tag;
    setSelectedTag(nextTag);
    setCurrentPage(1);
    updateURLParams({ tag: nextTag, page: 1 });
  };

  const handleSortChange = (newSort: SortOption) => {
    setSortBy(newSort);
    setCurrentPage(1);
    updateURLParams({ sort: newSort, page: 1 });
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    updateURLParams({ page: newPage });
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTag('all');
    setSortBy('latest');
    setCurrentPage(1);
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      <Breadcrumbs items={[{ label: 'Stories' }]} />

      {/* Page Header */}
      <div className="py-6 sm:py-8 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E27453] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Editorial Archive</span>
        </div>
        <h1 className="font-display font-black text-4xl sm:text-5xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
          Dispatches & Analysis
        </h1>
        <p className="text-base text-[#44403C] dark:text-[#D7D1C6] mt-2 max-w-2xl leading-relaxed font-normal">
          Independent reporting on computational intelligence, specialized silicon, economic frontiers, and planetary science.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="py-6 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <form onSubmit={handleSearchSubmit} className="relative w-full lg:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78716C] dark:text-[#A39C90]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, topic, keyword..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-sm text-[#1C1917] dark:text-[#F7F4EE] placeholder-[#78716C] dark:placeholder-[#A39C90] focus:outline-none focus:border-[#C85A32] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  updateURLParams({ q: '' });
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#1C1917] dark:text-[#A39C90] dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>

          {/* Sort & View Controls */}
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto gap-3">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4 text-[#78716C] dark:text-[#A39C90]" />
              <label htmlFor="story-sort" className="sr-only">
                Sort stories
              </label>
              <select
                id="story-sort"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as SortOption)}
                className="px-3 py-2 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-xs sm:text-sm font-semibold text-[#1C1917] dark:text-[#F7F4EE] focus:outline-none focus:border-[#C85A32] cursor-pointer"
              >
                <option value="latest">Latest Published</option>
                <option value="oldest">Oldest First</option>
                <option value="most-read">Most Read</option>
                <option value="reading-time">Shortest Read</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-1 p-1 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18]">
              <button
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer flex items-center space-x-1 text-xs font-bold ${
                  viewMode === 'grid'
                    ? 'bg-[#1C1917] text-white dark:bg-[#C85A32] shadow-xs'
                    : 'text-[#78716C] dark:text-[#A39C90] hover:text-[#1C1917] dark:hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                aria-label="List view"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer flex items-center space-x-1 text-xs font-bold ${
                  viewMode === 'list'
                    ? 'bg-[#1C1917] text-white dark:bg-[#C85A32] shadow-xs'
                    : 'text-[#78716C] dark:text-[#A39C90] hover:text-[#1C1917] dark:hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">List</span>
              </button>
              <button
                onClick={() => setViewMode('3d')}
                aria-label="Perspective deck view"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer flex items-center space-x-1 text-xs font-bold ${
                  viewMode === '3d'
                    ? 'bg-[#1C1917] text-white dark:bg-[#C85A32] shadow-xs'
                    : 'text-[#78716C] dark:text-[#A39C90] hover:text-[#1C1917] dark:hover:text-white'
                }`}
              >
                <Rotate3d className="w-4 h-4" />
                <span className="hidden sm:inline">Perspective</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#1C1917] text-white dark:bg-[#C85A32] shadow-xs'
                : 'bg-white dark:bg-[#1E1B18] text-[#44403C] dark:text-[#D7D1C6] border border-[#E8E2D5] dark:border-[#3A342E] hover:text-[#1C1917] dark:hover:text-white hover:bg-[#E8E2D5]/40'
            }`}
          >
            All Desks ({totalArticles})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.slug
                  ? 'bg-[#1C1917] text-white dark:bg-[#C85A32] shadow-xs'
                  : 'bg-white dark:bg-[#1E1B18] text-[#44403C] dark:text-[#D7D1C6] border border-[#E8E2D5] dark:border-[#3A342E] hover:text-[#1C1917] dark:hover:text-white hover:bg-[#E8E2D5]/40'
              }`}
            >
              {cat.name} ({cat.articleCount})
            </button>
          ))}
        </div>

        {/* Tags Row */}
        {tags.length > 0 && (
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pt-1 pb-2">
            <span className="text-xs font-bold text-[#78716C] dark:text-[#A39C90] mr-1">Tags:</span>
            {Array.from(new Set<string>(tags)).map((tag, i) => {
              const active = selectedTag.toLowerCase() === tag.toLowerCase();
              return (
                <button
                  key={`${tag}-${i}`}
                  onClick={() => handleTagChange(tag)}
                  className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#C85A32]/20 text-[#C85A32] dark:text-[#E27453] border border-[#C85A32]'
                      : 'bg-[#E8E2D5]/50 dark:bg-[#282420] text-[#44403C] dark:text-[#D7D1C6] hover:text-[#1C1917] dark:hover:text-white'
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Results Content */}
      <div className="min-h-[400px] mt-4">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : articles.length === 0 ? (
          <EmptyState
            title="No matching stories found"
            description={`We found no stories matching "${searchQuery || selectedCategory}". Try adjusting your filters or search terms.`}
            onReset={handleResetFilters}
          />
        ) : viewMode === '3d' ? (
          <div className="animate-in fade-in zoom-in-95 duration-400">
            <StoryCoverflowDeck
              articles={articles}
              title={`Selected Perspectives (${articles.length} Stories)`}
              subtitle="Curated coverage across selected subjects"
            />
            <div className="mt-12 pt-8 border-t border-[#E8E2D5] dark:border-[#3A342E]">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#78716C] dark:text-[#A39C90] mb-4">
                All Stories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.slice(0, 6).map((article) => (
                  <ArticleCard key={article.id} article={article} variant="grid" />
                ))}
              </div>
            </div>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="grid" />
            ))}
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="horizontal" />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
