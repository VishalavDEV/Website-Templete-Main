import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowUpRight, BookOpen, Camera, FileText, Sparkles, Filter } from 'lucide-react';
import { useAppContext } from '../../store/AppContext';
import { mockApi } from '../../services/mockApi';
import { SearchResult } from '../../types';

const categories = [
  { label: 'ALL DISCIPLINES', value: 'all' },
  { label: 'WILDLIFE', value: 'wildlife' },
  { label: 'PLANET', value: 'planet' },
  { label: 'SCIENCE', value: 'science' },
  { label: 'SPACE', value: 'space' },
  { label: 'HISTORY', value: 'history' },
  { label: 'PHOTOGRAPHY', value: 'photography' }
];

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useAppContext();
  const [query, setQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input when opened
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isSearchOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  // Search logic
  useEffect(() => {
    let isMounted = true;
    const performSearch = async () => {
      if (!query.trim() && selectedCat === 'all') {
        // Show featured starter results
        const featured = await mockApi.searchContent('', 'all');
        if (isMounted) setResults(featured.slice(0, 5));
        return;
      }

      setIsSearching(true);
      const res = await mockApi.searchContent(query, selectedCat === 'all' ? undefined : selectedCat);
      if (isMounted) {
        setResults(res);
        setIsSearching(false);
      }
    };

    const timer = setTimeout(performSearch, 150);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [query, selectedCat]);

  if (!isSearchOpen) return null;

  const handleSelectResult = (url: string) => {
    setIsSearchOpen(false);
    navigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl flex flex-col items-center justify-start p-4 sm:p-6 md:p-12 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="w-full max-w-3xl bg-[#121214] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-auto">
        
        {/* Search Header Input */}
        <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#F27D26] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, expeditions, authors, celestial objects, topics..."
            aria-label="Search inquiry"
            className="w-full bg-transparent text-white placeholder:text-zinc-500 text-sm sm:text-base font-mono focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-zinc-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            aria-label="Close search"
            className="p-2 rounded-full bg-[#18181b] hover:bg-zinc-800 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Badges */}
        <div className="px-4 sm:px-6 py-3 bg-[#0a0a0a] border-b border-zinc-800 flex items-center gap-2 overflow-x-auto">
          <Filter className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCat(cat.value)}
              className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase whitespace-nowrap transition-all cursor-pointer ${
                selectedCat === cat.value
                  ? 'bg-[#F27D26] text-black font-black shadow-md shadow-[#F27D26]/20'
                  : 'bg-[#18181b] text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[55vh] overflow-y-auto space-y-3">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pb-2 border-b border-zinc-800 uppercase tracking-widest">
            <span>{results.length} DISCOVERIES FOUND</span>
            <span>PRESS ESC TO CLOSE</span>
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <Sparkles className="w-8 h-8 text-[#F27D26] mx-auto opacity-50" />
              <p className="text-lg font-bold text-white uppercase tracking-tight">No dispatches match your search.</p>
              <p className="text-xs text-zinc-400 font-light">
                Try searching for "Antarctica", "Whales", "Stars", "Lidar", or "Desert".
              </p>
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectResult(item.url)}
                className="group flex items-center gap-4 p-3.5 rounded-2xl hover:bg-[#18181b] cursor-pointer border border-transparent hover:border-zinc-800 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-zinc-800 group-hover:scale-105 transition-transform brightness-85"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[9px] tracking-widest text-[#F27D26] uppercase font-bold">
                      {item.meta}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#F27D26] transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 truncate font-light">
                    {item.subtitle}
                  </p>
                </div>

                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#F27D26] shrink-0" />
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#0a0a0a] border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-500">
          <span>TERRA UNIVERSAL SEARCH ENGINE</span>
          <button
            onClick={() => {
              setIsSearchOpen(false);
              navigate(`/search?q=${encodeURIComponent(query)}`);
            }}
            className="text-[#F27D26] hover:underline font-bold"
          >
            VIEW FULL SEARCH RESULTS PAGE →
          </button>
        </div>
      </div>
    </div>
  );
};
