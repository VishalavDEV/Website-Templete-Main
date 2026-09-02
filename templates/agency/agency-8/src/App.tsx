import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientMarquee } from './components/ClientMarquee';
import { AboutPreview } from './components/AboutPreview';
import { ServicesPreview } from './components/ServicesPreview';
import { SelectedWork } from './components/SelectedWork';
import { Process } from './components/Process';
import { Stats } from './components/Stats';
import { Testimonial } from './components/Testimonial';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { ScrollToTop } from './components/global/ScrollToTop';
import { PageLoader } from './components/global/PageLoader';
import { SkipNavigation } from './components/global/SkipNavigation';
import { SmartPageTransition } from './components/global/SmartPageTransition';

// Pages
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { CareersPage } from './pages/CareersPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { CursorType } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path;
    }
    return '/';
  });

  const [cursorType, setCursorTypeState] = useState<CursorType>('default');
  const [cursorText, setCursorText] = useState<string>('VIEW ↗');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  // Sync document title and scroll position on route change
  useEffect(() => {
    // Dynamic Document Title
    const getDocumentTitle = (route: string): string => {
      if (route === '/') return 'Studio — Design & Technology Collective';
      if (route === '/about') return 'Studio — About & Principles';
      if (route === '/services') return 'Studio — Capabilities & Services';
      if (route.startsWith('/services/')) {
        const slug = route.replace('/services/', '').replace(/-/g, ' ');
        return `Studio — Service / ${slug.toUpperCase()}`;
      }
      if (route === '/work') return 'Studio — Selected Work & Projects';
      if (route.startsWith('/work/')) {
        const slug = route.replace('/work/', '').replace(/-/g, ' ');
        return `Studio — Case Study / ${slug.toUpperCase()}`;
      }
      if (route === '/team') return 'Studio — Creative Team & Leadership';
      if (route === '/careers') return 'Studio — Careers & Open Residencies';
      if (route === '/testimonials') return 'Studio — Client Stories & Partnerships';
      if (route === '/insights') return 'Studio — Editorial Insights & Perspectives';
      if (route.startsWith('/insights/')) {
        const slug = route.replace('/insights/', '').replace(/-/g, ' ');
        return `Studio — Article / ${slug.toUpperCase()}`;
      }
      if (route === '/contact') return 'Studio — Start a Project & Contact';
      return 'Studio — 404 Page Not Found';
    };

    document.title = getDocumentTitle(currentRoute);

    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentRoute]);

  const navigate = (path: string) => {
    if (path === currentRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const setCursorType = (type: CursorType, text?: string) => {
    setCursorTypeState(type);
    if (text) {
      setCursorText(text);
    }
  };

  const handleOpenProjectModal = () => {
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
  };

  // Helper to determine if route is a valid existing path
  const isKnownRoute =
    currentRoute === '/' ||
    currentRoute === '/about' ||
    currentRoute === '/team' ||
    currentRoute === '/services' ||
    currentRoute.startsWith('/services/') ||
    currentRoute === '/work' ||
    currentRoute.startsWith('/work/') ||
    currentRoute === '/contact' ||
    currentRoute === '/testimonials' ||
    currentRoute === '/insights' ||
    currentRoute.startsWith('/insights/') ||
    currentRoute === '/careers';

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#FAF9F6] overflow-x-hidden selection:bg-[#0066FF] selection:text-white custom-cursor-active">
      {/* Accessible Skip Link */}
      <SkipNavigation />

      {/* Global Page Entrance Loader (Plays once per session) */}
      <PageLoader />

      {/* Immersive UI Radial Background Glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 25%, rgba(0, 102, 255, 0.06) 0%, transparent 60%)',
        }}
      />

      {/* Right Edge Fixed Studio Telemetry Rail */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 pr-5 items-end pointer-events-none z-30 select-none">
        <div className="text-[9px] uppercase tracking-[0.5em] text-white/30 vertical-rl font-mono">
          Global Creative Studio
        </div>
        <div className="w-px h-28 bg-white/10" />
      </div>

      {/* Custom Mouse Cursor follower with all state variants */}
      <CustomCursor cursorType={cursorType} cursorText={cursorText} />

      {/* Global Top Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        onOpenProjectModal={handleOpenProjectModal}
        setCursorType={setCursorType}
      />

      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1} className="relative z-10 focus:outline-hidden">
        <AnimatePresence mode="wait">
          {currentRoute === '/about' ? (
            <SmartPageTransition key="about-transition" routeKey="/about" variant="default">
              <AboutPage
                key="about-page"
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
                onNavigate={navigate}
              />
            </SmartPageTransition>
          ) : currentRoute === '/team' ? (
            <SmartPageTransition key="team-transition" routeKey="/team" variant="default">
              <TeamPage
                key="team-page"
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
                onNavigate={navigate}
              />
            </SmartPageTransition>
          ) : currentRoute === '/services' ? (
            <SmartPageTransition key="services-transition" routeKey="/services" variant="default">
              <ServicesPage
                key="services-page"
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
                onNavigate={navigate}
              />
            </SmartPageTransition>
          ) : currentRoute.startsWith('/services/') ? (
            <SmartPageTransition
              key={`service-detail-transition-${currentRoute}`}
              routeKey={currentRoute}
              variant="default"
            >
              <ServiceDetailPage
                key={`service-detail-${currentRoute}`}
                slug={currentRoute.replace('/services/', '')}
                onNavigate={navigate}
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
              />
            </SmartPageTransition>
          ) : currentRoute === '/work' ? (
            <SmartPageTransition key="work-transition" routeKey="/work" variant="project">
              <WorkPage
                key="work-page"
                onNavigate={navigate}
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
              />
            </SmartPageTransition>
          ) : currentRoute.startsWith('/work/') ? (
            <SmartPageTransition
              key={`case-study-transition-${currentRoute}`}
              routeKey={currentRoute}
              variant="project"
            >
              <ProjectDetailPage
                key={`case-study-${currentRoute}`}
                slug={currentRoute.replace('/work/', '')}
                onNavigate={navigate}
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
              />
            </SmartPageTransition>
          ) : currentRoute === '/contact' ? (
            <SmartPageTransition key="contact-transition" routeKey="/contact" variant="default">
              <ContactPage
                key="contact-page"
                onNavigate={navigate}
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
              />
            </SmartPageTransition>
          ) : currentRoute === '/testimonials' ? (
            <SmartPageTransition key="testimonials-transition" routeKey="/testimonials" variant="editorial">
              <TestimonialsPage
                key="testimonials-page"
                onNavigate={navigate}
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
              />
            </SmartPageTransition>
          ) : currentRoute === '/insights' ? (
            <SmartPageTransition key="insights-transition" routeKey="/insights" variant="editorial">
              <InsightsPage
                key="insights-page"
                onNavigate={navigate}
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
              />
            </SmartPageTransition>
          ) : currentRoute.startsWith('/insights/') ? (
            <SmartPageTransition
              key={`article-detail-transition-${currentRoute}`}
              routeKey={currentRoute}
              variant="editorial"
            >
              <ArticleDetailPage
                key={`article-detail-${currentRoute}`}
                slug={currentRoute.replace('/insights/', '')}
                onNavigate={navigate}
                setCursorType={setCursorType}
              />
            </SmartPageTransition>
          ) : currentRoute === '/careers' ? (
            <SmartPageTransition key="careers-transition" routeKey="/careers" variant="default">
              <CareersPage
                key="careers-page"
                onNavigate={navigate}
                setCursorType={setCursorType}
              />
            </SmartPageTransition>
          ) : currentRoute === '/' ? (
            <SmartPageTransition key="home-transition" routeKey="/" variant="fade">
              {/* Section 2, 3, 4: Cinematic Hero & Interactive Hero Visual */}
              <Hero
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
              />

              {/* Section 5: Client Logo Marquee */}
              <ClientMarquee setCursorType={setCursorType} onNavigate={navigate} />

              {/* Section 6: Introduction / About Preview */}
              <AboutPreview
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
                onNavigate={navigate}
              />

              {/* Section 7: Services Preview */}
              <ServicesPreview
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
                onNavigate={navigate}
              />

              {/* Section 8 & 9: Selected Work Showcase */}
              <SelectedWork
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
                onNavigate={navigate}
              />

              {/* Section 10: Process Blueprint */}
              <Process setCursorType={setCursorType} />

              {/* Section 11: Stats Counter */}
              <Stats />

              {/* Section 12: Testimonial Carousel */}
              <Testimonial setCursorType={setCursorType} />

              {/* Section 13: Dramatic Final Call to Action */}
              <FinalCTA
                onOpenProjectModal={handleOpenProjectModal}
                setCursorType={setCursorType}
                onNavigate={navigate}
              />
            </SmartPageTransition>
          ) : (
            /* 404 Route Fallback */
            <SmartPageTransition key="404-transition" routeKey="/404" variant="default">
              <NotFoundPage
                onNavigate={navigate}
                setCursorType={setCursorType}
              />
            </SmartPageTransition>
          )}
        </AnimatePresence>
      </main>

      {/* Global Scroll-to-Top trigger */}
      <ScrollToTop setCursorType={setCursorType} />

      {/* Global Oversized Footer */}
      <Footer
        onOpenProjectModal={handleOpenProjectModal}
        setCursorType={setCursorType}
        onNavigate={navigate}
      />

      {/* Interactive Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isProjectModalOpen}
        onClose={handleCloseProjectModal}
      />
    </div>
  );
}
