import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockApi } from '../../services/mockApi';
import { SearchResultItem } from '../../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  // Focus on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Debounced search query
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    let isCancelled = false;
    setIsSearching(true);

    const timer = setTimeout(async () => {
      const res = await mockApi.searchAll(query);
      if (!isCancelled) {
        setResults(res);
        setSelectedIndex(0);
        setIsSearching(false);
      }
    }, 150);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [query]);

  // Keyboard navigation inside modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    onClose();
    navigate(item.url);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Global search"
      className="fixed inset-0 z-[9990] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-ink-primary/40 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl glass-panel-strong rounded-2xl shadow-glass-elevated overflow-hidden border border-ink-border animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="relative flex items-center px-5 py-4 border-b border-ink-border">
          <Search className="w-5 h-5 text-ink-muted mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, services, insights, team..."
            className="w-full bg-transparent font-body text-base text-ink-primary placeholder:text-ink-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-ink-muted hover:text-ink-primary rounded-md"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 text-xs font-mono px-2 py-1 bg-paper rounded border border-ink-border text-ink-muted hover:text-ink-primary"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {isSearching && (
            <div className="py-8 text-center text-xs font-mono uppercase text-ink-muted flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 animate-spin text-accent-coral" />
              Searching archive...
            </div>
          )}

          {!isSearching && query.trim() && results.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-ink-primary">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-ink-muted mt-1 font-mono">Try searching &ldquo;Branding&rdquo;, &ldquo;WebGL&rdquo;, &ldquo;Strategy&rdquo;, or &ldquo;Architecture&rdquo;</p>
            </div>
          )}

          {!isSearching && !query.trim() && (
            <div className="p-4 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">Quick Suggestions</span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Monument Architecture', cat: 'Case Study', url: '/work/monument-brand-identity' },
                  { label: 'Brand Strategy & Positioning', cat: 'Service', url: '/services/brand-strategy' },
                  { label: 'Future of Brand Systems', cat: 'Article', url: '/insights/future-of-brand-systems' },
                  { label: 'Leadership & Team', cat: 'Studio', url: '/studio' },
                ].map((sugg, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onClose();
                      navigate(sugg.url);
                    }}
                    className="flex flex-col text-left p-2.5 rounded-lg bg-paper/70 hover:bg-accent-coral/10 hover:border-accent-coral/30 border border-transparent transition-all"
                  >
                    <span className="text-xs font-medium text-ink-primary">{sugg.label}</span>
                    <span className="text-[10px] font-mono text-ink-muted uppercase">{sugg.cat}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {!isSearching &&
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                    isSelected ? 'bg-warm-white border border-accent-coral/40 shadow-sm' : 'hover:bg-warm-white/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border ${
                        item.type === 'project'
                          ? 'bg-accent-coral/10 text-accent-coral border-accent-coral/30'
                          : item.type === 'service'
                          ? 'bg-accent-lavender/30 text-ink-primary border-accent-lavender'
                          : 'bg-paper text-ink-secondary border-ink-border'
                      }`}
                    >
                      {item.type}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-ink-primary leading-snug">{item.title}</h4>
                      <p className="text-xs text-ink-secondary truncate max-w-md">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-ink-muted">
                    {isSelected && <CornerDownLeft className="w-3.5 h-3.5 text-accent-coral" />}
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </div>
                </button>
              );
            })}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-paper/60 border-t border-ink-border flex items-center justify-between text-[11px] font-mono text-ink-muted">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>VALENCE ARCHIVE</span>
        </div>
      </div>
    </div>
  );
};
