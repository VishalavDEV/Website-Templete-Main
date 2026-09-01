import { useState, useEffect } from 'react';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('block_magazine_bookmarks');
      return saved ? JSON.parse(saved) : ['sacred-minimalism-kyoto', 'ai-epistemic-frontiers'];
    } catch (e) {
      return ['sacred-minimalism-kyoto'];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('block_magazine_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error('Failed to save bookmarks to localStorage', e);
    }
  }, [bookmarks]);

  const toggleBookmark = (articleId) => {
    setBookmarks((prev) =>
      prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId]
    );
  };

  const isBookmarked = (articleId) => bookmarks.includes(articleId);

  const clearBookmarks = () => setBookmarks([]);

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    clearBookmarks,
    isDrawerOpen,
    setIsDrawerOpen,
  };
}
