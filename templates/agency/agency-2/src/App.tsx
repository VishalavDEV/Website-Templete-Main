import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScrollStoryBackground } from './components/background/ScrollStoryBackground';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';
import { Toast } from './components/common/Toast';

import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { StudioPage } from './pages/StudioPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-paper text-ink-primary selection:bg-accent-coral selection:text-warm-white">
      {/* 1. Cinematic Background Visual Layer */}
      <ScrollStoryBackground />

      {/* 2. Magnetic Custom Cursor (Desktop only) */}
      <CustomCursor />

      {/* 3. Global Toast Notifications */}
      <Toast />

      {/* 4. Global Search Modal (Cmd/Ctrl + K) */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* 5. Fixed Translucent Navigation */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* 6. Page Content Routing */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<ProjectDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<ArticleDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* 7. Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
