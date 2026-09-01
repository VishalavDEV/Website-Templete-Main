import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const BOOKMARKS_STORAGE_KEY = 'nexora_bookmarked_ids';

export interface BookmarkContextType {
  bookmarkedIds: string[];
  toggleBookmark: (articleId: string) => void;
  clearBookmarks: () => void;
  isBookmarked: (articleId: string) => boolean;
  bookmarkCount: number;
}

const defaultContext: BookmarkContextType = {
  bookmarkedIds: ['art-01', 'art-03'],
  toggleBookmark: () => {},
  clearBookmarks: () => {},
  isBookmarked: () => false,
  bookmarkCount: 2
};

const BookmarkContext = createContext<BookmarkContextType>(defaultContext);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
        return saved ? JSON.parse(saved) : ['art-01', 'art-03'];
      } catch {
        return ['art-01', 'art-03'];
      }
    }
    return ['art-01', 'art-03'];
  });

  // Sync from other browser tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === BOOKMARKS_STORAGE_KEY && e.newValue) {
        try {
          setBookmarkedIds(JSON.parse(e.newValue));
        } catch (err) {
          console.error(err);
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleBookmark = useCallback((articleId: string) => {
    setBookmarkedIds((prev) => {
      const isSaved = prev.includes(articleId);
      const updated = isSaved ? prev.filter((id) => id !== articleId) : [...prev, articleId];
      try {
        localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  }, []);

  const clearBookmarks = useCallback(() => {
    setBookmarkedIds([]);
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify([]));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const isBookmarked = useCallback(
    (articleId: string) => bookmarkedIds.includes(articleId),
    [bookmarkedIds]
  );

  const value = useMemo(
    () => ({
      bookmarkedIds,
      toggleBookmark,
      clearBookmarks,
      isBookmarked,
      bookmarkCount: bookmarkedIds.length
    }),
    [bookmarkedIds, toggleBookmark, clearBookmarks, isBookmarked]
  );

  return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>;
};

export function useBookmarks(): BookmarkContextType {
  return useContext(BookmarkContext);
}
