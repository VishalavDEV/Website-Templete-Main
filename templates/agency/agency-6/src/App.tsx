import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CustomCursor, CursorState } from './components/common/CustomCursor';
import { CinematicIntro } from './components/common/CinematicIntro';
import { PageTransition } from './components/common/PageTransition';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Work } from './pages/Work';
import { CaseStudy } from './pages/CaseStudy';
import { IndustriesPage } from './pages/Industries';
import { Insights } from './pages/Insights';
import { ArticleDetail } from './pages/ArticleDetail';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

function AppContent() {
  const [cursorState, setCursorState] = useState<CursorState>({
    text: '',
    variant: 'default',
  });
  const [forceReplayIntro, setForceReplayIntro] = useState(false);
  const [introActive, setIntroActive] = useState(true);

  const location = useLocation();

  const handleCursorChange = (text: string, variant: 'default' | 'hover' | 'card' | 'drag' | 'menu' = 'default') => {
    setCursorState({ text, variant });
  };

  const triggerReplayIntro = () => {
    sessionStorage.removeItem('vanta_intro_seen');
    setForceReplayIntro(true);
    setIntroActive(true);
  };

  return (
    <>
      {/* Desktop Custom Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Cinematic 3D Intro Sequence */}
      <CinematicIntro
        forceReplay={forceReplayIntro}
        onComplete={() => {
          setIntroActive(false);
          setForceReplayIntro(false);
        }}
      />

      {/* Layout Wrapper */}
      <Navbar onCursorChange={handleCursorChange} />

      <main className="min-h-screen">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home onCursorChange={handleCursorChange} onReplayIntro={triggerReplayIntro} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/work" element={<Work onCursorChange={handleCursorChange} />} />
            <Route path="/work/:projectId" element={<CaseStudy />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:articleId" element={<ArticleDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer onReplayIntro={triggerReplayIntro} />
    </>
  );
}

export default function App() {
  return (
    <Router basename="/templates/agency/agency-6">
      <AppContent />
    </Router>
  );
}
