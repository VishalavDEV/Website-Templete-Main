import React, { createContext, useContext, useState, useEffect } from 'react';
import { articles as initialArticles } from '../data/articles';

const MagazineContext = createContext();

export function MagazineProvider({ children }) {
  // Bookmarks
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('block_magazine_bookmarks');
      return saved ? JSON.parse(saved) : ['sacred-minimalism-kyoto', 'ai-epistemic-frontiers'];
    } catch {
      return ['sacred-minimalism-kyoto'];
    }
  });
  const [isBookmarkDrawerOpen, setIsBookmarkDrawerOpen] = useState(false);

  // Search Modal
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Newsletter Modal
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Edition Selection
  const [currentEdition, setCurrentEdition] = useState('Global Edition');

  // Font Size for Article Reader ('sm', 'md', 'lg')
  const [fontSize, setFontSize] = useState('md');

  // Audio Player State
  const [currentAudioArticle, setCurrentAudioArticle] = useState(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState(null);

  // Keyboard shortcut Cmd/Ctrl + K for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Save Bookmarks to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('block_magazine_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  // Audio Player Simulation Tick
  useEffect(() => {
    let interval;
    if (isPlayingAudio && currentAudioArticle) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, currentAudioArticle]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((cur) => (cur === message ? null : cur));
    }, 3500);
  };

  const toggleBookmark = (articleId) => {
    const isCurrentlySaved = bookmarks.includes(articleId);
    if (isCurrentlySaved) {
      setBookmarks((prev) => prev.filter((id) => id !== articleId));
      showToast('Removed from your Reading List');
    } else {
      setBookmarks((prev) => [...prev, articleId]);
      showToast('Article saved to your Reading List');
    }
  };

  const playAudio = (article) => {
    if (currentAudioArticle?.id === article.id) {
      setIsPlayingAudio((prev) => !prev);
    } else {
      setCurrentAudioArticle(article);
      setIsPlayingAudio(true);
      setAudioProgress(0);
      showToast(`Now playing audio: "${article.title.slice(0, 35)}..."`);
    }
  };

  const pauseAudio = () => {
    setIsPlayingAudio(false);
  };

  const closeAudio = () => {
    setIsPlayingAudio(false);
    setCurrentAudioArticle(null);
    setAudioProgress(0);
  };

  const isBookmarked = (articleId) => bookmarks.includes(articleId);

  return (
    <MagazineContext.Provider
      value={{
        bookmarks,
        toggleBookmark,
        isBookmarked,
        isBookmarkDrawerOpen,
        setIsBookmarkDrawerOpen,
        isSearchOpen,
        setIsSearchOpen,
        isNewsletterOpen,
        setIsNewsletterOpen,
        currentEdition,
        setCurrentEdition,
        fontSize,
        setFontSize,
        currentAudioArticle,
        isPlayingAudio,
        audioProgress,
        playAudio,
        pauseAudio,
        closeAudio,
        toastMessage,
        showToast,
      }}
    >
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
