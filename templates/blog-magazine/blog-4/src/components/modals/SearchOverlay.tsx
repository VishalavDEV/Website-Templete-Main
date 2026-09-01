import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Clock, BookOpen, Compass } from 'lucide-react';
import { Article, Category } from '../../types';
import { articleService } from '../../services/articleService';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const cats = await articleService.getCategories();
      setCategories(cats);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const delay = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await articleService.getArticles({
          searchQuery: query,
          pageSize: 6
        });
        setResults(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(delay);
  }, [query]);

  if (!isOpen) return null;

  const handleSelectArticle = (slug: string) => {
    navigate(`/story/${slug}`);
    onClose();
  };

  const handleSelectCategory = (slug: string) => {
    navigate(`/category/${slug}`);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#151311]/70 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-3xl bg-[#F9F6F0] dark:bg-[#1E1B18] rounded-3xl border border-[#E8E2D5] dark:border-[#3A342E] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 sm:p-6 border-b border-[#E8E2D5] dark:border-[#3A342E] flex items-center space-x-3">
          <Search className="w-5 h-5 text-[#C85A32] dark:text-[#E27453] shrink-0" />
          <h2 id="search-modal-title" className="sr-only">Search STORIVA Dispatches</h2>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search investigative stories, essays, technical topics..."
            className="flex-1 bg-transparent text-base sm:text-lg text-[#1C1917] dark:text-[#F7F4EE] placeholder-[#78716C] dark:placeholder-[#A39C90] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#78716C] hover:text-[#1C1917] dark:text-[#A39C90] dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search overlay"
            className="px-2.5 py-1 rounded-lg border border-[#E8E2D5] dark:border-[#3A342E] text-xs font-semibold text-[#78716C] dark:text-[#A39C90] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420]"
          >
            ESC
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Active Search Results */}
          {query.trim() ? (
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#78716C] dark:text-[#A39C90] mb-3">
                <span>Matching Articles</span>
                {loading && <span className="animate-pulse text-[#C85A32]">Searching archives...</span>}
              </div>

              {results.length === 0 && !loading ? (
                <div className="text-center py-10 space-y-2">
                  <p className="text-sm text-[#44403C] dark:text-[#D7D1C6]">
                    No dispatches found matching "{query}".
                  </p>
                  <p className="text-xs text-[#78716C] dark:text-[#A39C90]">
                    Try searching for broader keywords like "silicon", "neural", "chips", or "robotics".
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {results.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => handleSelectArticle(art.slug)}
                      className="group p-3 sm:p-4 rounded-2xl bg-white dark:bg-[#151311] border border-[#E8E2D5] dark:border-[#3A342E] hover:border-[#C85A32] dark:hover:border-[#E27453] transition-all cursor-pointer flex items-center justify-between gap-4"
                    >
                      <div className="space-y-1 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E27453]">
                          {art.category}
                        </span>
                        <h4 className="font-display font-bold text-sm sm:text-base text-[#1C1917] dark:text-[#F7F4EE] group-hover:text-[#C85A32] transition-colors">
                          {art.title}
                        </h4>
                        <div className="flex items-center space-x-3 text-xs text-[#78716C] dark:text-[#A39C90]">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {art.readingTime}
                          </span>
                          <span>{art.date}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#78716C] group-hover:text-[#C85A32] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Desks quick jump */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#78716C] dark:text-[#A39C90] block mb-3">
                  Browse by Department
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.slug)}
                      className="flex items-center space-x-2 p-3 rounded-xl bg-white dark:bg-[#151311] border border-[#E8E2D5] dark:border-[#3A342E] hover:border-[#C85A32] dark:hover:border-[#E27453] text-left transition-colors cursor-pointer group"
                    >
                      <Compass className="w-4 h-4 text-[#C85A32] dark:text-[#E27453] shrink-0" />
                      <span className="text-xs font-bold text-[#1C1917] dark:text-[#F7F4EE] group-hover:text-[#C85A32] transition-colors truncate">
                        {cat.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Suggested topics */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#78716C] dark:text-[#A39C90] block mb-2.5">
                  Popular Queries
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Autonomous Agents', 'Custom Silicon', 'Quantum Annealing', 'Neuromorphic', 'Sovereign Compute'].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-3 py-1.5 rounded-full bg-white dark:bg-[#151311] border border-[#E8E2D5] dark:border-[#3A342E] text-xs font-semibold text-[#44403C] dark:text-[#D7D1C6] hover:border-[#C85A32] hover:text-[#C85A32] transition-colors cursor-pointer"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 sm:p-4 bg-[#FAF7F2] dark:bg-[#151311] border-t border-[#E8E2D5] dark:border-[#3A342E] flex items-center justify-between text-xs text-[#78716C] dark:text-[#A39C90]">
          <div className="flex items-center space-x-4">
            <span>Press <strong className="text-[#1C1917] dark:text-white">ESC</strong> to exit</span>
            <span className="hidden sm:inline">Press <strong className="text-[#1C1917] dark:text-white">↵</strong> to open</span>
          </div>
          <button
            onClick={() => {
              navigate('/stories');
              onClose();
            }}
            className="font-bold text-[#C85A32] dark:text-[#E27453] hover:underline flex items-center space-x-1"
          >
            <BookOpen className="w-3.5 h-3.5 mr-1" />
            <span>Full Story Archive</span>
          </button>
        </div>
      </div>
    </div>
  );
};
