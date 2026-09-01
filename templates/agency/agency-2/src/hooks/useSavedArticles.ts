import { useState, useEffect } from 'react';
import { getSavedArticleIds, toggleSaveArticle } from '../services/storage';

export function useSavedArticles() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    setSavedIds(getSavedArticleIds());

    const handleUpdate = (e: Event) => {
      const custom = e as CustomEvent<string[]>;
      if (custom.detail) {
        setSavedIds(custom.detail);
      } else {
        setSavedIds(getSavedArticleIds());
      }
    };

    window.addEventListener('valence-saved-articles-updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('valence-saved-articles-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const isArticleSaved = (id: string) => savedIds.includes(id);

  const toggle = (id: string) => {
    const res = toggleSaveArticle(id);
    return res;
  };

  return { savedIds, isArticleSaved, toggleSave: toggle };
}
