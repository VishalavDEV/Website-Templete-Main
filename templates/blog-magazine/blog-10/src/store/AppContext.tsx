import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Article } from '../types';
import { mockApi } from '../services/mockApi';

interface Toast {
  id: string;
  message: string;
  type?: 'info' | 'success' | 'warning';
}

interface AppContextType {
  bookmarks: string[];
  savedArticles: Article[];
  isBookmarked: (slug: string) => boolean;
  toggleBookmark: (slug: string, title?: string) => void;
  toasts: Toast[];
  showToast: (message: string, type?: 'info' | 'success' | 'warning') => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isSubscribeModalOpen: boolean;
  setIsSubscribeModalOpen: (open: boolean) => void;
  activeReadingProgress: number;
  setActiveReadingProgress: (progress: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('terra_bookmarks');
      return saved ? JSON.parse(saved) : ['beneath-a-world-of-ice', 'the-last-dark-skies'];
    } catch {
      return ['beneath-a-world-of-ice', 'the-last-dark-skies'];
    }
  });

  const [savedArticles, setSavedArticles] = useState<Article[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [activeReadingProgress, setActiveReadingProgress] = useState(0);

  // Load full articles for bookmarks
  useEffect(() => {
    let isMounted = true;
    const fetchBookmarkedArticles = async () => {
      const all = await mockApi.getArticles();
      if (isMounted) {
        setSavedArticles(all.filter((a) => bookmarks.includes(a.slug)));
      }
    };
    fetchBookmarkedArticles();
    return () => {
      isMounted = false;
    };
  }, [bookmarks]);

  const showToast = useCallback((message: string, type: 'info' | 'success' | 'warning' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const toggleBookmark = useCallback((slug: string, articleTitle?: string) => {
    setBookmarks((prev) => {
      let updated: string[];
      if (prev.includes(slug)) {
        updated = prev.filter((s) => s !== slug);
        showToast('Story removed from saved collection', 'info');
      } else {
        updated = [...prev, slug];
        showToast(`Saved "${articleTitle || 'Story'}" to reading list`, 'success');
      }
      try {
        localStorage.setItem('terra_bookmarks', JSON.stringify(updated));
      } catch (e) {
        console.error('Storage error', e);
      }
      return updated;
    });
  }, [showToast]);

  const isBookmarked = useCallback((slug: string) => {
    return bookmarks.includes(slug);
  }, [bookmarks]);

  return (
    <AppContext.Provider
      value={{
        bookmarks,
        savedArticles,
        isBookmarked,
        toggleBookmark,
        toasts,
        showToast,
        isSearchOpen,
        setIsSearchOpen,
        isSubscribeModalOpen,
        setIsSubscribeModalOpen,
        activeReadingProgress,
        setActiveReadingProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
