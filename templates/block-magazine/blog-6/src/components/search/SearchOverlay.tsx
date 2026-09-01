import React, { memo, useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpRight, BookOpen, Flame } from 'lucide-react';
import { ARTICLES_DATA, ArticleData } from '../../data/articles';
import { DynamicImage } from '../ui/DynamicImage';

export interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: ArticleData) => void;
}

const TRENDING_TAGS = [
  'Spatial Realism',
  'Typography in 4D',
  'Photosynthetic Timber',
  'Acoustic Topologies',
  'Quantum Glass',
  'Generative Architecture',
];

interface SearchResultItemProps {
  article: ArticleData;
  index: number;
  onSelect: (article: ArticleData) => void;
}

// Memoized Result Item for zero-lag rendering during typing
const SearchResultItem: React.FC<SearchResultItemProps> = memo(({ article, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 24,
        mass: 0.8,
        delay: Math.min(index * 0.03, 0.2),
      }}
      onClick={() => onSelect(article)}
      className="group p-3.5 sm:p-5 rounded-2xl glass-card-airy bg-white/95 border border-slate-200/80 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 gpu-layer"
    >
      <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-xs flex-shrink-0">
          <DynamicImage
            src={article.coverImage}
            alt={article.title}
            fallbackKey={article.id}
            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
            containerClassName="w-full h-full bg-slate-900"
          />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200/60">
              {article.category}
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">
              {article.readTime}
            </span>
          </div>
          <h4 className="font-display font-bold text-sm sm:text-base md:text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
            {article.title}
          </h4>
          <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1">
            By {article.author.name} • {article.issueVol}
          </span>
        </div>
      </div>

      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-200 flex-shrink-0 self-end sm:self-center">
        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>
    </motion.div>
  );
});

SearchResultItem.displayName = 'SearchResultItem';

export const SearchOverlay: React.FC<SearchOverlayProps> = memo(({ isOpen, onClose, onSelectArticle }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input automatically on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 80);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener: Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter articles with memoization for locked 60fps rapid typing
  const allArticles = useMemo(() => Object.values(ARTICLES_DATA), []);

  const searchResults = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return allArticles;
    return allArticles.filter((article) => {
      return (
        article.title.toLowerCase().includes(cleanQuery) ||
        article.category.toLowerCase().includes(cleanQuery) ||
        article.subtitle.toLowerCase().includes(cleanQuery) ||
        article.author.name.toLowerCase().includes(cleanQuery)
      );
    });
  }, [query, allArticles]);

  const handleSelect = (article: ArticleData) => {
    onSelectArticle(article);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[120] flex flex-col bg-white/95 backdrop-blur-3xl overflow-y-auto"
        >
          {/* Top Bar with Escape hint and Close */}
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                Discovery Index
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close search overlay"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider transition-colors border border-slate-200 active:scale-95 cursor-pointer"
            >
              <span>ESC</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Input Stage */}
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex flex-col">
            <div className="relative border-b-2 border-slate-900 pb-3 sm:pb-4 mb-4 sm:mb-6">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to discover..."
                className="w-full bg-transparent font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 placeholder:text-slate-300 outline-none tracking-tight pr-10"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  aria-label="Clear search input"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-300 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Trending Tags Filter Strip */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-rose-500" />
                Topics:
              </span>
              {TRENDING_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-colors border cursor-pointer ${
                    query === tag
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-[11px] sm:text-xs font-mono text-slate-500">
              <span>
                Showing <strong className="text-blue-600 font-bold">{searchResults.length}</strong> Curated Results
              </span>
              <span className="hidden sm:inline">Editorial Match</span>
            </div>

            {/* Staggered Results List */}
            <div className="flex flex-col gap-2.5 sm:gap-3 pb-16">
              {searchResults.length > 0 ? (
                searchResults.map((article, idx) => (
                  <SearchResultItem
                    key={article.id}
                    article={article}
                    index={idx}
                    onSelect={handleSelect}
                  />
                ))
              ) : (
                <div className="py-12 sm:py-16 text-center">
                  <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <h4 className="font-display font-bold text-base sm:text-lg text-slate-800 mb-1">
                    No matching editorial dispatches found
                  </h4>
                  <p className="text-xs text-slate-500">
                    Try searching for "Spatial", "Typography", or "Timber"
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

SearchOverlay.displayName = 'SearchOverlay';
