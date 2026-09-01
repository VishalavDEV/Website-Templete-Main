import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowRight, ChevronRight, X } from 'lucide-react';
import { searchAll } from '../../services/api';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (initialQuery) {
      searchAll(initialQuery).then(setResults);
    }
  }, [initialQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchParams({ q: query });
    searchAll(query).then(setResults);
  };

  const filteredResults = activeCategory === 'all'
    ? results
    : results.filter((r) => r.type.toLowerCase() === activeCategory.toLowerCase());

  const categories = ['all', 'Service', 'Case Study', 'Solution', 'Job', 'Insight'];

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link to="/" className="hover:text-slate-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">Search Directory</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
          Search Straventa Directory
        </h1>

        {/* Big Search Input */}
        <form onSubmit={handleSearchSubmit} className="relative mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, case studies, technologies, open jobs..."
            className="w-full bg-white border border-slate-300 rounded-2xl pl-12 pr-28 py-4 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 shadow-sm"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4.5" />
          <button
            type="submit"
            className="absolute right-3 top-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-xl transition"
          >
            Search
          </button>
        </form>

        {/* Category Filters */}
        {results.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat === 'all' ? `All Results (${results.length})` : cat}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div className="space-y-4">
          {filteredResults.length === 0 && initialQuery && (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-1">No results found for "{initialQuery}"</h3>
              <p className="text-xs text-slate-600">Try searching for keywords like "AI", "Cloud", "React", or "Cybersecurity".</p>
            </div>
          )}

          {filteredResults.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="block bg-slate-50 border border-slate-200 hover:border-slate-400 rounded-2xl p-5 sm:p-6 transition group shadow-sm"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                  {item.type}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transform group-hover:translate-x-1 transition" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-zinc-800 transition mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
