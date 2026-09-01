import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { articles as defaultArticles } from '../data/articles';
import { categories } from '../data/categories';
import { Breadcrumbs } from '../components/utility/Breadcrumbs';
import { StoryCard } from '../components/editorial/StoryCard';
import { Search as SearchIcon, X, Filter, ChevronLeft, ChevronRight, BookOpen, Flame } from 'lucide-react';

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [query, setQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
    setCurrentPage(1);
  }, [searchParams]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ q: query.trim() });
    setCurrentPage(1);
  };

  const hasSearchQuery = queryParam.trim().length > 0;

  // Filter against local static dataset
  const filteredArticles = defaultArticles.filter((art) => {
    if (!hasSearchQuery) return true; // In empty query state, we can show default curated or all

    const q = queryParam.toLowerCase();
    const matchesQuery =
      art.title.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.category.toLowerCase().includes(q) ||
      art.author.name.toLowerCase().includes(q) ||
      art.tags?.some((t) => t.toLowerCase().includes(q));

    const matchesCategory =
      selectedCategory === 'All' || art.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / itemsPerPage));
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const breadcrumbItems = [{ label: 'Search Archive' }];

  return (
    <div className="search-page max-w-7xl mx-auto px-4 md:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* 1. Search Input Bar */}
      <header className="py-10 border-b-2 border-[#141413] bg-white p-6 sm:p-10 mb-8 shadow-xs">
        <h1 className="font-serif-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#141413] mb-4">
          Archive & Monograph Search
        </h1>
        <p className="text-sm text-[#52524E] max-w-2xl mb-6">
          Query our full catalog of investigative reporting, architectural criticism, and philosophical essays.
        </p>

        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-2 max-w-2xl">
          <div className="relative flex-1">
            <SearchIcon className="w-5 h-5 text-[#73736C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by keyword, author, topic or concept..."
              className="w-full pl-10 pr-10 py-3 bg-[#FAF9F5] border border-[#D1CDC4] text-sm text-[#141413] focus:outline-none focus:border-[#141413]"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setSearchParams({});
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#73736C] hover:text-[#141413] p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-[#141413] text-[#FAF9F5] hover:bg-[#D43825] transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Search
          </button>
        </form>
      </header>

      {/* 2. Result Count & Filter Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E8E5DC]">
        {/* Category Desk Chips */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#141413] mr-1">
            Desk:
          </span>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setCurrentPage(1);
            }}
            className={`px-3 py-1 text-xs font-semibold border transition-colors ${
              selectedCategory === 'All'
                ? 'bg-[#141413] text-[#FAF9F5] border-[#141413]'
                : 'bg-[#FAF9F5] text-[#52524E] border-[#D1CDC4] hover:border-[#141413]'
            }`}
          >
            All Desks
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.name);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 text-xs font-semibold border transition-colors ${
                selectedCategory === cat.name
                  ? 'bg-[#141413] text-[#FAF9F5] border-[#141413]'
                  : 'bg-[#FAF9F5] text-[#52524E] border-[#D1CDC4] hover:border-[#141413]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Result Count */}
        <div className="text-xs font-mono text-[#73736C]">
          {hasSearchQuery ? (
            <span>
              Found <strong className="text-[#141413]">{filteredArticles.length}</strong> monographs for "{queryParam}"
            </span>
          ) : (
            <span>
              Browsing all <strong className="text-[#141413]">{filteredArticles.length}</strong> cataloged essays
            </span>
          )}
        </div>
      </div>

      {/* 3. Results / Empty State / No Results State */}
      {!hasSearchQuery && (
        /* Empty State: Trending Search Suggestions */
        <div className="mb-12 p-8 bg-[#F4F1EA] border border-[#E8E5DC]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141413] mb-3">
            <Flame className="w-3.5 h-3.5 text-[#D43825]" />
            <span>Popular Keyword Searches</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Kyoto Architecture',
              'AI Consensus',
              'Flemish Linen',
              'Rare Earths',
              'Slow Cinema',
              'Acoustic Brutalism',
              'Swiss Horology',
              'Polycentric Megacities',
            ].map((keyword) => (
              <button
                key={keyword}
                onClick={() => {
                  setQuery(keyword);
                  setSearchParams({ q: keyword });
                }}
                className="px-3 py-1 bg-white border border-[#D1CDC4] text-xs text-[#52524E] hover:border-[#141413] hover:text-[#141413] transition-colors"
              >
                #{keyword}
              </button>
            ))}
          </div>
        </div>
      )}

      {filteredArticles.length === 0 ? (
        /* No Results State */
        <div className="py-16 text-center bg-white border border-[#E8E5DC] p-8 text-xs text-[#73736C] space-y-4 mb-16">
          <BookOpen className="w-8 h-8 text-[#D1CDC4] mx-auto" />
          <h3 className="font-serif-headline text-lg font-bold text-[#141413]">
            No matching monographs found for "{queryParam}"
          </h3>
          <p className="max-w-md mx-auto">
            Try searching for broader keywords like <strong className="text-[#141413]">Timber</strong>, <strong className="text-[#141413]">Concrete</strong>, or <strong className="text-[#141413]">Cinema</strong>, or clear your desk filter.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedCategory('All');
              setSearchParams({});
            }}
            className="px-4 py-2 bg-[#141413] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D43825] transition-colors cursor-pointer"
          >
            Reset Search & Filters
          </button>
        </div>
      ) : (
        /* Results Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedArticles.map((art) => (
            <StoryCard key={art.id} article={art} variant="standard" showExcerpt={true} />
          ))}
        </div>
      )}

      {/* 4. Pagination UI */}
      {filteredArticles.length > itemsPerPage && (
        <div className="flex items-center justify-center gap-2 py-8 my-8 border-y border-[#E8E5DC]">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 border border-[#D1CDC4] bg-white text-[#141413] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FAF9F5] transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-9 h-9 text-xs font-mono font-bold border transition-colors ${
                currentPage === i + 1
                  ? 'bg-[#141413] text-[#FAF9F5] border-[#141413]'
                  : 'bg-white text-[#52524E] border-[#D1CDC4] hover:border-[#141413]'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 border border-[#D1CDC4] bg-white text-[#141413] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FAF9F5] transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

// Export SearchPage alias
export const SearchPage = Search;
