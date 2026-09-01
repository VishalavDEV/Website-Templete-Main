import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import { AuraBackground } from './components/AuraBackground/AuraBackground';
import { PillNav } from './components/PillNav/PillNav';
import { Footer } from './components/Footer/Footer';
import { SearchModal } from './components/Search/SearchModal';
import { SubscribeModal } from './components/SubscribeModal/SubscribeModal';
import { ToastContainer } from './components/Toast/ToastContainer';

// Pages
import { Home } from './pages/Home/Home';
import { ArticlePage } from './pages/Article/ArticlePage';
import { CategoryPage } from './pages/Category/CategoryPage';
import { MagazinePage } from './pages/Magazine/MagazinePage';
import { PhotoEssayPage } from './pages/Photo/PhotoEssayPage';
import { FieldNotesPage } from './pages/FieldNotes/FieldNotesPage';
import { SavedPage } from './pages/Saved/SavedPage';
import { AboutPage } from './pages/About/AboutPage';
import { ExplorePage } from './pages/Explore/ExplorePage';

export function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/templates/block-magazine/blog-10">
        <div className="relative min-h-screen text-white flex flex-col font-sans selection:bg-[#F27D26] selection:text-black">
          {/* Sunset Boulevard Aura Gradient Layers (Fixed, blends against body #faf8f2) */}
          <AuraBackground />

          {/* Page Content sits above gradient layers */}
          <div className="relative z-10 flex-1 flex flex-col w-full">
            {/* Top Floating Pill Navigation */}
            <PillNav />

            {/* Main Application Views */}
            <main className="flex-1 w-full">
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Home />} />

              {/* Direct Category Routes */}
              <Route path="/wildlife" element={<CategoryPage forcedSlug="wildlife" />} />
              <Route path="/planet" element={<CategoryPage forcedSlug="planet" />} />
              <Route path="/science" element={<CategoryPage forcedSlug="science" />} />
              <Route path="/space" element={<CategoryPage forcedSlug="space" />} />
              <Route path="/history" element={<CategoryPage forcedSlug="history" />} />
              <Route path="/culture" element={<CategoryPage forcedSlug="culture" />} />
              <Route path="/exploration" element={<CategoryPage forcedSlug="exploration" />} />
              <Route path="/photography" element={<CategoryPage forcedSlug="photography" />} />
              <Route path="/category/:categorySlug" element={<CategoryPage />} />

              {/* Search & Explore Repository */}
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/search" element={<ExplorePage />} />

              {/* Long-form Editorial Story */}
              <Route path="/story/:slug" element={<ArticlePage />} />

              {/* Magazine Issue & Archive */}
              <Route path="/magazine" element={<MagazinePage />} />
              <Route path="/magazine/:issueSlug" element={<MagazinePage />} />

              {/* Photo Essay Gallery */}
              <Route path="/photo/:slug" element={<PhotoEssayPage />} />

              {/* Field Notes & Dispatches */}
              <Route path="/field-notes" element={<FieldNotesPage />} />
              <Route path="/field-note/:slug" element={<FieldNotesPage />} />

              {/* Personal Saved Reading List */}
              <Route path="/saved" element={<SavedPage />} />

              {/* About & Manifesto */}
              <Route path="/about" element={<AboutPage />} />

              {/* Catch-all Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Universal Footer */}
          <Footer />
          </div>

          {/* Modals & Global Overlays */}
          <SearchModal />
          <SubscribeModal />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
