import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryArchivePage from './pages/CategoryArchivePage';
import SingleArticlePage from './pages/SingleArticlePage';
import AuthorPage from './pages/AuthorPage';
import SearchResultsPage from './pages/SearchResultsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SavedArticlesPage from './pages/SavedArticlesPage';
import StyleGuidePage from './pages/StyleGuidePage';
import NotFoundPage from './pages/NotFoundPage';
import CookieBanner from './components/CookieBanner';
import AdSlot from './components/AdSlot';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('aura_dark_mode');
      if (stored !== null) return JSON.parse(stored);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('aura_dark_mode', JSON.stringify(darkMode));
    } catch {
      // ignore
    }
  }, [darkMode]);

  return (
    <HelmetProvider>
      <HashRouter>
        <div className={`min-h-screen flex flex-col font-sans selection:bg-amber-200 transition-colors duration-300 ${darkMode ? 'dark bg-neutral-950 text-neutral-100' : 'bg-white text-neutral-900'}`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <main className="flex-grow pb-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:slug" element={<CategoryArchivePage />} />
              <Route path="/article/:slug" element={<SingleArticlePage />} />
              <Route path="/author/:id" element={<AuthorPage />} />
              <Route path="/search" element={<SearchResultsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/saved" element={<SavedArticlesPage />} />
              <Route path="/style-guide" element={<StyleGuidePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
          <CookieBanner />
          <AdSlot variant="sticky-footer" title="Discover Sustainable Architectural Sanctuaries" sponsorName="Aura Atelier" />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
}
