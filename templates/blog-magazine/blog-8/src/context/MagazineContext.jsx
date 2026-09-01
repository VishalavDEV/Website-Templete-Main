import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const MagazineContext = createContext();

export function MagazineProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [savedArticles, setSavedArticles] = useState(() => {
    try {
      const stored = localStorage.getItem('xtra_saved_articles');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [isDopamineMode, setIsDopamineMode] = useState(true);

  // Sync bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('xtra_saved_articles', JSON.stringify(savedArticles));
    } catch (e) {
      console.warn("Storage sync failed", e);
    }
  }, [savedArticles]);

  // Toggle article bookmarking
  const toggleSaveArticle = (articleId) => {
    setSavedArticles((prev) => {
      const exists = prev.includes(articleId);
      if (!exists) {
        triggerDopamineConfetti();
        return [...prev, articleId];
      }
      return prev.filter((id) => id !== articleId);
    });
  };

  // Dopamine burst effect
  const triggerDopamineConfetti = (originX = 0.5, originY = 0.6) => {
    if (!isDopamineMode) return;
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x: originX, y: originY },
      colors: ['#FF007A', '#0047FF', '#10FF70', '#FFE600', '#9D00FF'],
      ticks: 200,
      gravity: 1.2,
      scalar: 1.1,
      shapes: ['square', 'circle']
    });
  };

  const value = {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    isSearchOpen,
    setIsSearchOpen,
    savedArticles,
    toggleSaveArticle,
    isSaved: (id) => savedArticles.includes(id),
    isDopamineMode,
    setIsDopamineMode,
    triggerDopamineConfetti
  };

  return (
    <MagazineContext.Provider value={value}>
      {children}
    </MagazineContext.Provider>
  );
}

export function useMagazine() {
  const context = useContext(MagazineContext);
  if (!context) {
    throw new Error('useMagazine must be used within a MagazineProvider');
  }
  return context;
}

export default MagazineContext;
