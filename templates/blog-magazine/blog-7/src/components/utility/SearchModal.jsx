import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMagazine } from '../../context/MagazineContext';
import { articles } from '../../data/articles';
import { categories } from '../../data/categories';
import { Search, X, ArrowRight, Tag, Clock, Flame } from 'lucide-react';

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useMagazine();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredArticles = query.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase()) ||
          a.author.name.toLowerCase().includes(query.toLowerCase()) ||
          a.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSelectArticle = (slug) => {
    setIsSearchOpen(false);
    navigate(`/article/${slug}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsSearchOpen(false);
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Search Dialog */}
      <div className="relative bg-white border-2 border-[#141413] shadow-2xl max-w-2xl w-full z-10 overflow-hidden animate-scale-in">
        {/* Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="p-4 border-b-2 border-[#141413] flex items-center gap-3 bg-[#FAF9F5]">
          <Search className="w-5 h-5 text-[#D43825] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all essays, authors, issues, or topics..."
            className="flex-1 bg-transparent text-sm sm:text-base font-serif-headline font-bold text-[#141413] focus:outline-none placeholder-[#888]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-[#73736C] hover:text-[#141413] p-1 text-xs font-mono"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-[#73736C] hover:text-[#141413]"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {query.trim() ? (
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#73736C] pb-2 mb-3 border-b border-[#E8E5DC]">
                <span>Matching Results ({filteredArticles.length})</span>
                {filteredArticles.length > 0 && (
                  <button
                    onClick={handleSearchSubmit}
                    className="text-[#D43825] hover:underline"
                  >
                    View All Results &rarr;
                  </button>
                )}
              </div>

              {filteredArticles.length === 0 ? (
                <div className="text-center py-10 text-xs text-[#73736C]">
                  No essays found for "<span className="font-bold text-[#141413]">{query}</span>".
                  Try searching for keywords like <span className="underline">Timber</span>, <span className="underline">AI</span>, or <span className="underline">Brutalism</span>.
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredArticles.slice(0, 5).map((art) => (
                    <div
                      key={art.id}
                      onClick={() => handleSelectArticle(art.slug)}
                      className="p-3 hover:bg-[#FAF9F5] border border-transparent hover:border-[#E8E5DC] cursor-pointer transition-all flex items-start gap-3 group"
                    >
                      <img
                        src={art.coverImage}
                        alt={art.title}
                        className="w-14 h-12 object-cover border border-[#E8E5DC] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-[0.625rem] font-mono uppercase tracking-wider text-[#73736C]">
                          <span className="text-[#D43825] font-semibold">{art.category}</span>
                          <span>&bull;</span>
                          <span>{art.readTime}</span>
                        </div>
                        <h4 className="font-serif-headline text-sm font-bold text-[#141413] group-hover:text-[#D43825] transition-colors leading-snug line-clamp-1">
                          {art.title}
                        </h4>
                        <span className="text-[0.6875rem] text-[#73736C] block mt-0.5">
                          By {art.author.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Default Search State: Quick Topics & Popular Desks */
            <div className="space-y-6 py-2">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#141413] mb-3">
                  <Flame className="w-3.5 h-3.5 text-[#D43825]" />
                  <span>Trending Topics</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Kyoto Monasticism',
                    'Generative AI Consensus',
                    'Flemish Linen',
                    'Clarion-Clipperton Zone',
                    'Acoustic Brutalism',
                    'Swiss Independent Horology',
                    'Polycentric Cities',
                  ].map((topic) => (
                    <button
                      key={topic}
                      onClick={() => {
                        setQuery(topic);
                      }}
                      className="px-3 py-1 bg-[#FAF9F5] border border-[#D1CDC4] text-xs text-[#52524E] hover:border-[#141413] hover:text-[#141413] transition-colors"
                    >
                      #{topic}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#73736C] mb-3">
                  Browse by Editorial Desk
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigate(`/category/${cat.slug}`);
                      }}
                      className="p-2.5 text-left bg-[#FAF9F5] border border-[#E8E5DC] hover:border-[#141413] transition-colors flex items-center justify-between group"
                    >
                      <span className="text-xs font-serif-headline font-bold text-[#141413] group-hover:text-[#D43825]">
                        {cat.name}
                      </span>
                      <ArrowRight className="w-3 h-3 text-[#A1A19A] group-hover:text-[#141413] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F4F1EA] border-t border-[#E8E5DC] text-[0.6875rem] text-[#73736C] flex items-center justify-between">
          <span>Press ESC to close</span>
          <span>Instant indexing across 15+ long-form essays</span>
        </div>
      </div>
    </div>
  );
}
