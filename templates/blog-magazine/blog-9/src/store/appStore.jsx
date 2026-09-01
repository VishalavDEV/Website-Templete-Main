import React, { createContext, useContext, useState, useEffect } from 'react';
import { getBookmarks, toggleBookmark as toggleBookmarkApi, subscribeToNewsletter as subscribeApi } from '../services/mockApi';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => getBookmarks());
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      const isSub = localStorage.getItem('atlas_newsletter_status') === 'subscribed';
      setIsNewsletterSubscribed(isSub);
    } catch {
      // ignore
    }
  }, []);

  const showToast = (msg, duration = 3000) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, duration);
  };

  const toggleSaveArticle = (articleId, articleTitle) => {
    const updated = toggleBookmarkApi(articleId);
    setBookmarks(updated);
    const isNowSaved = updated.includes(articleId);
    showToast(isNowSaved ? `Saved "${articleTitle || 'Article'}" to reading list` : `Removed from reading list`);
    return isNowSaved;
  };

  const isArticleSaved = (articleId) => {
    return bookmarks.includes(articleId);
  };

  const handleSubscribe = async (email) => {
    const res = await subscribeApi(email);
    setIsNewsletterSubscribed(true);
    try {
      localStorage.setItem('atlas_newsletter_status', 'subscribed');
    } catch {
      // ignore
    }
    showToast("You're on the list. Welcome to ATLAS.");
    return res;
  };

  return (
    <AppContext.Provider
      value={{
        bookmarks,
        toggleSaveArticle,
        isArticleSaved,
        isNewsletterSubscribed,
        handleSubscribe,
        showToast,
        toastMessage
      }}
    >
      {children}
      {toastMessage && (
        <div className="atlas-toast-container" role="status" aria-live="polite">
          <div className="atlas-toast-pill">
            <span className="atlas-toast-dot" />
            <span className="atlas-toast-text">{toastMessage}</span>
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
}

export function useAppStore() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppStore must be used within an AppProvider');
  }
  return ctx;
}
