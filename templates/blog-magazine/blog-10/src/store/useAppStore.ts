import { useState, useEffect, useCallback } from 'react';
import { Article } from '../types';
import { mockApi } from '../services/mockApi';

interface Toast {
  id: string;
  message: string;
  type?: 'info' | 'success' | 'warning';
}

export function useAppStore() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('terra_bookmarks');
      return saved ? JSON.parse(saved) : ['beneath-a-world-of-ice', 'the-last-dark-skies'];
    } catch {
      return ['beneath-a-world-of-ice', 'the-last-dark-skies'];
    }
  });

  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFieldPassModalOpen, setIsFieldPassModalOpen] = useState(false);

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
        showToast(`Removed from saved stories`, 'info');
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

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    toasts,
    showToast,
    isSearchOpen,
    setIsSearchOpen,
    isFieldPassModalOpen,
    setIsFieldPassModalOpen
  };
}
