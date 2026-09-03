const getDynamicBasename = () => {
  let p = window.location.pathname;
  if (p.endsWith('/index.html')) p = p.slice(0, -11);
  if (p.endsWith('/')) p = p.slice(0, -1);
  return p;
};

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageTransition } from './components/layout/PageTransition';
import { CustomCursor } from './components/ui/CustomCursor';

// Pages
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { ProjectDetail } from './pages/ProjectDetail';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Insights } from './pages/Insights';
import { ArticleDetail } from './pages/ArticleDetail';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Helper component to auto-scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F3EEE6] text-[#2B2727] font-sans relative selection:bg-[#D65F3F] selection:text-[#FAF7F1]">
      {/* Custom Desktop Context Cursor */}
      <CustomCursor />

      {/* SVG Texture Noise Overlay */}
      <div className="grain-overlay" />

      {/* Navigation Header */}
      <Navbar />

      <ScrollToTop />

      {/* Main Route Content with Page Transitions */}
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>

      {/* Agency Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter basename={getDynamicBasename()}>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
