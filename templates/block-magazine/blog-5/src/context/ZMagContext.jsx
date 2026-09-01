import React, { createContext, useContext, useState, useEffect } from 'react';

const ZMagContext = createContext();

export function ZMagProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [isReducedMotionActive, setIsReducedMotionActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('zmag_bookmarks');
      return saved ? JSON.parse(saved) : ['spatial-neuro-architecture', 'photonic-computing'];
    } catch {
      return ['spatial-neuro-architecture', 'photonic-computing'];
    }
  });
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('zmag_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  const toggleBookmark = (id) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    showToast(
      bookmarks.includes(id) ? 'Removed from collection' : 'Saved to Z-Archive'
    );
  };

  const clearBookmarks = () => {
    setBookmarks([]);
    showToast('Collection cleared');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <ZMagContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isSearchOpen,
        setIsSearchOpen,
        isSavedOpen,
        setIsSavedOpen,
        isReducedMotionActive,
        setIsReducedMotionActive,
        activeCategory,
        setActiveCategory,
        bookmarks,
        toggleBookmark,
        clearBookmarks,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </ZMagContext.Provider>
  );
}

export function useZMag() {
  const context = useContext(ZMagContext);
  if (!context) {
    throw new Error('useZMag must be used within a ZMagProvider');
  }
  return context;
}
