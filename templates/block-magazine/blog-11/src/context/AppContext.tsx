import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  theme: 'dark';
  toggleTheme: () => void;
  bookmarks: string[];
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isBookmarksOpen: boolean;
  setIsBookmarksOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = 'dark';

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('agrotech_bookmarks');
      return saved ? JSON.parse(saved) : ['smart-farming-changing-agriculture'];
    } catch {
      return ['smart-farming-changing-agriculture'];
    }
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Permanently enforce dark mode theme
    document.documentElement.classList.add('dark');
    localStorage.setItem('agrotech_theme', 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('agrotech_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleTheme = () => {
    // Permanent dark theme mode
  };

  const toggleBookmark = (slug: string) => {
    setBookmarks(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const isBookmarked = (slug: string) => bookmarks.includes(slug);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        isSearchOpen,
        setIsSearchOpen,
        isBookmarksOpen,
        setIsBookmarksOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
