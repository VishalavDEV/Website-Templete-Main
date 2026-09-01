import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ARTICLES } from '../../data/articles';

const SUGGESTED_SEARCHES = [
  'Smart agriculture',
  'AI crop disease',
  'Autonomous robotics',
  'Water technology',
  'Satellite imaging',
  'Climate resilience',
  'Vertical farming'
];

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useApp();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredArticles = query.trim()
    ? ARTICLES.filter(
        art =>
          art.title.toLowerCase().includes(query.toLowerCase()) ||
          art.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          art.category.toLowerCase().includes(query.toLowerCase()) ||
          art.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSelectArticle = (slug: string) => {
    setIsSearchOpen(false);
    navigate(`/article/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-theme-primary/95 backdrop-blur-xl animate-fade-in overflow-y-auto">
      {/* Header Bar */}
      <div className="max-w-5xl w-full mx-auto px-6 py-6 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center space-x-3">
          <Search className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
          <span className="font-mono-tech text-xs tracking-widest text-theme-muted uppercase font-bold">SEARCH AGROTECH ARCHIVES</span>
        </div>
        <button
          onClick={() => setIsSearchOpen(false)}
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-theme-primary"
          aria-label="Close search"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Search Body */}
      <div className="max-w-4xl w-full mx-auto px-6 py-12 flex-1">
        {/* Input Field */}
        <div className="relative mb-8">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search stories, technologies, AI models..."
            autoFocus
            className="w-full text-2xl md:text-4xl font-serif-editorial bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-emerald-700 dark:focus:border-emerald-400 outline-none pb-4 text-theme-primary placeholder-neutral-400 font-bold transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-0 top-2 text-theme-muted hover:text-emerald-600 font-mono-tech text-xs font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Suggested Queries */}
        {!query && (
          <div className="mb-12">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-theme-muted mb-4 flex items-center gap-2 font-bold">
              <Tag className="w-3.5 h-3.5" /> SUGGESTED TOPICS
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {SUGGESTED_SEARCHES.map(term => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 text-sm bg-theme-muted hover:bg-emerald-700 hover:text-white dark:hover:bg-emerald-600 rounded-full border border-neutral-200 dark:border-neutral-700 transition-all font-sans text-theme-primary font-medium"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {query && (
          <div>
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-theme-muted mb-6 font-bold">
              FOUND {filteredArticles.length} MATCHING STORIES
            </h4>

            {filteredArticles.length === 0 ? (
              <div className="py-12 text-center text-theme-muted">
                <p className="text-lg font-serif-editorial mb-2 text-theme-primary">No matching articles found.</p>
                <p className="text-sm">Try searching for terms like "drones", "water", "AI", or "robotics".</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredArticles.map(article => (
                  <div
                    key={article.id}
                    onClick={() => handleSelectArticle(article.slug)}
                    className="group cursor-pointer p-5 rounded-2xl bg-theme-surface border border-neutral-200 dark:border-neutral-800 hover:border-emerald-700 dark:hover:border-emerald-500 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-20 h-20 object-cover rounded-xl shrink-0 block"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono-tech uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold">
                            {article.category}
                          </span>
                          <span className="text-neutral-400">•</span>
                          <span className="text-xs text-theme-muted font-mono-tech">{article.readingTime}</span>
                        </div>
                        <h3 className="text-lg font-serif-editorial font-bold text-theme-primary group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                          {article.title}
                        </h3>
                        <p className="text-xs text-theme-secondary line-clamp-1 mt-1 font-sans">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all shrink-0 hidden md:block" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
