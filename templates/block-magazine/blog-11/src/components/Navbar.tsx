import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Bookmark, Sparkles, ChevronDown, Moon, Sun, BookOpen } from 'lucide-react';
import { MOCK_CATEGORIES, MOCK_POSTS } from '../data/mockPosts';
import { Post } from '../types';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // update saved count from localStorage
    try {
      const stored = localStorage.getItem('bookmarked_posts');
      if (stored) {
        const ids: string[] = JSON.parse(stored);
        setSavedCount(ids.length);
      }
    } catch {
      setSavedCount(0);
    }
  }, [location]);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      const filtered = MOCK_POSTS.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      ).slice(0, 5);
      setSearchResults(filtered);
      setSearchDropdownOpen(true);
    } else {
      setSearchResults([]);
      setSearchDropdownOpen(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchDropdownOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled
        ? darkMode
          ? 'bg-neutral-900/90 border-b border-neutral-800 backdrop-blur-md shadow-lg'
          : 'bg-white/90 border-b border-neutral-200/80 backdrop-blur-md shadow-sm'
        : darkMode
          ? 'bg-neutral-950 border-b border-neutral-900'
          : 'bg-white border-b border-neutral-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="group flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center font-serif text-xl font-bold shadow-md group-hover:scale-105 transition-transform">
                A
              </div>
              <div>
                <span className={`font-serif text-xl font-bold tracking-tight block leading-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  AURA
                </span>
                <span className="text-[10px] uppercase font-semibold text-amber-700 tracking-[0.2em] block">
                  Magazine
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              <Link to="/" className={`text-sm font-medium transition-colors hover:text-amber-700 ${location.pathname === '/' ? 'text-amber-700 font-semibold' : darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                Home
              </Link>
              
              {/* Categories Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setCategoriesOpen(true)}
                  onMouseLeave={() => setCategoriesOpen(false)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-amber-700 py-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}
                >
                  <span>Categories</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {categoriesOpen && (
                  <div
                    onMouseEnter={() => setCategoriesOpen(true)}
                    onMouseLeave={() => setCategoriesOpen(false)}
                    className="absolute top-full left-0 w-64 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2"
                  >
                    {MOCK_CATEGORIES.map(cat => (
                      <Link
                        key={cat.id}
                        to={`/category/${cat.slug}`}
                        onClick={() => setCategoriesOpen(false)}
                        className="block px-4 py-2.5 rounded-xl text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                      >
                        <div className="font-semibold">{cat.name}</div>
                        <div className="text-[10px] text-neutral-400 truncate mt-0.5">{cat.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about" className={`text-sm font-medium transition-colors hover:text-amber-700 ${location.pathname === '/about' ? 'text-amber-700 font-semibold' : darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                Manifesto
              </Link>
              <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-amber-700 ${location.pathname === '/contact' ? 'text-amber-700 font-semibold' : darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                Contact
              </Link>
              <Link to="/style-guide" className={`text-sm font-medium transition-colors hover:text-amber-700 ${location.pathname === '/style-guide' ? 'text-amber-700 font-semibold' : darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                Style Guide
              </Link>
            </nav>
          </div>

          {/* Right Actions: Search, Saved, Dark Mode */}
          <div className="flex items-center space-x-3">
            
            {/* Live Instant Search Bar */}
            <div className="relative hidden sm:block" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search articles, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => { if (searchQuery.trim()) setSearchDropdownOpen(true); }}
                  className="w-48 lg:w-64 pl-9 pr-4 py-2 text-xs bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600 focus:w-72 transition-all text-neutral-900 dark:text-white"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
              </form>

              {/* Instant Search Dropdown */}
              {searchDropdownOpen && searchResults.length > 0 && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl py-3 px-2 z-50">
                  <div className="px-3 py-1 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Instant Search Results
                  </div>
                  <div className="divide-y divide-neutral-100 dark:divide-neutral-800 mt-1">
                    {searchResults.map(post => (
                      <Link
                        key={post.id}
                        to={`/article/${post.slug}`}
                        onClick={() => { setSearchDropdownOpen(false); setSearchQuery(''); }}
                        className="block p-3 hover:bg-amber-50 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                      >
                        <span className="text-[10px] font-semibold text-amber-700 uppercase tracking-wider block mb-0.5">
                          {post.category.name} • {post.readTime}
                        </span>
                        <h4 className="font-serif text-xs font-bold text-neutral-900 dark:text-white line-clamp-1">
                          {post.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 px-3 border-t border-neutral-100 dark:border-neutral-800 text-center">
                    <button
                      onClick={handleSearchSubmit}
                      className="text-xs font-medium text-amber-700 hover:text-amber-800 dark:text-amber-400 py-1"
                    >
                      View all results for &ldquo;{searchQuery}&rdquo; &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Saved Articles */}
            <Link
              to="/saved"
              className="relative p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
              title="Saved Articles"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </Link>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4 shadow-xl">
          <div className="sm:hidden mb-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white"
              />
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
            </form>
          </div>
          <div className="space-y-3 font-serif text-lg">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-neutral-900 dark:text-white">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-neutral-900 dark:text-white">Manifesto</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-neutral-900 dark:text-white">Contact</Link>
            <Link to="/style-guide" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-neutral-900 dark:text-white">Style Guide</Link>
          </div>
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">Categories</span>
            <div className="grid grid-cols-2 gap-2">
              {MOCK_CATEGORIES.map(cat => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-amber-700 py-1"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
