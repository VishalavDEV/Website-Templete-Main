import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionProvider } from './context/MotionContext';
import { Header } from './components/navbar/Header';
import { Home } from './pages/Home';
import { GlassSkeleton } from './components/ui/GlassSkeleton';
import { ArticleData, ARTICLES_DATA } from './data/articles';
import './styles/tailwind.css';

// Lazy loading heavy overlay and article view components for maximum initial load performance
const ArticleDetail = lazy(() =>
  import('./pages/ArticleDetail').then((module) => ({ default: module.ArticleDetail }))
);

const SearchOverlay = lazy(() =>
  import('./components/search/SearchOverlay').then((module) => ({ default: module.SearchOverlay }))
);

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Dispatches');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Synchronize URL hash with category filtering or direct navigation
  const syncHashToCategory = useCallback((hash: string) => {
    const cleanHash = hash.replace(/^#/, '').toLowerCase();
    if (!cleanHash) return;

    if (cleanHash.includes('typography')) {
      setSelectedCategory('Typography');
      setSelectedArticle(null);
    } else if (cleanHash.includes('ai') || cleanHash.includes('synthetic')) {
      setSelectedCategory('AI Synthetics');
      setSelectedArticle(null);
    } else if (cleanHash.includes('arch')) {
      setSelectedCategory('Architecture');
      setSelectedArticle(null);
    } else if (cleanHash.includes('spatial')) {
      setSelectedCategory('Spatial Design');
      setSelectedArticle(null);
    } else if (cleanHash.includes('culture')) {
      setSelectedCategory('Culture');
      setSelectedArticle(null);
    } else if (cleanHash.includes('essay')) {
      setSelectedCategory('Essays');
      setSelectedArticle(null);
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      syncHashToCategory(window.location.hash);
    }

    const handleHashChange = () => {
      syncHashToCategory(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [syncHashToCategory]);

  // Global keyboard shortcut for search: Cmd+K or Ctrl+K or '/'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectArticle = (article: ArticleData) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToFeed = () => {
    setSelectedArticle(null);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setSelectedArticle(null);

    // Smoothly scroll to the stories section
    setTimeout(() => {
      const el = document.getElementById('stories');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleHomeClick = () => {
    setSelectedArticle(null);
    setSelectedCategory('All Dispatches');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionProvider>
      <div className="min-h-screen flex flex-col relative text-slate-900 selection:bg-blue-600 selection:text-white">
        {/* Global Scroll-Aware Navigation Bar */}
        <Header
          activeCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onHomeClick={handleHomeClick}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Seamless App-Like Route Transitions with Shared Layout Morphing */}
        <AnimatePresence mode="wait">
          {selectedArticle ? (
            <div key={`article-${selectedArticle.id}`} className="pt-20 sm:pt-24">
              <Suspense fallback={<div className="max-w-4xl mx-auto px-4 pt-10"><GlassSkeleton className="h-96" /></div>}>
                <ArticleDetail
                  article={selectedArticle}
                  onBack={handleBackToFeed}
                  onSelectArticle={handleSelectArticle}
                />
              </Suspense>
            </div>
          ) : (
            <div key="home-view">
              <Home
                activeCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
                onSelectArticle={handleSelectArticle}
              />
            </div>
          )}
        </AnimatePresence>

        {/* Lazy-Loaded Advanced Search & Discovery Overlay */}
        <Suspense fallback={null}>
          <SearchOverlay
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onSelectArticle={handleSelectArticle}
          />
        </Suspense>
      </div>
    </MotionProvider>
  );
}
