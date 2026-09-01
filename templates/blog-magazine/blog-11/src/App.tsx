import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileMenu } from './components/layout/MobileMenu';
import { CustomCursor } from './components/ui/CustomCursor';
import { SearchModal } from './components/ui/SearchModal';
import { BookmarksDrawer } from './components/ui/BookmarksDrawer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ArticlePage } from './pages/ArticlePage';
import { ArchivePage } from './pages/ArchivePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SearchPage } from './pages/SearchPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <AppProvider>
      <Router basename="/templates/block-magazine/blog-11">
        <ScrollToTop />
        <div className="relative min-h-screen bg-paper-light dark:bg-paper-dark text-paper-dark dark:text-paper-light flex flex-col font-sans transition-colors duration-300">
          <CustomCursor />
          <Navbar />
          <MobileMenu />
          <SearchModal />
          <BookmarksDrawer />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/agriculture" element={<CategoryPage />} />
              <Route path="/technology" element={<CategoryPage />} />
              <Route path="/ai" element={<CategoryPage />} />
              <Route path="/innovation" element={<CategoryPage />} />
              <Route path="/stories" element={<CategoryPage />} />
              <Route path="/category/:catName" element={<CategoryPage />} />
              <Route path="/article/:slug" element={<ArticlePage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
