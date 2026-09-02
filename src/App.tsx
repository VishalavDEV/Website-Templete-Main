import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ImageLightbox } from './components/ImageLightbox';
import { SubmissionHistoryModal } from './components/SubmissionHistoryModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { projects } from './data/projects';
import { services } from './data/services';
import { insightArticles } from './data/insights';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  // Lightbox state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    caption?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    caption: ''
  });

  // Handle client navigation & popstate
  const navigate = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPath(path);
    window.history.pushState({}, '', path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Global hotkeys (Ctrl+K, Cmd+K, /, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle / Open Command Palette: Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen(prev => !prev);
        return;
      }

      // Quick search on '/' when not typing in an input or textarea
      if (
        e.key === '/' &&
        !isCommandOpen &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setIsCommandOpen(true);
        return;
      }

      // Escape closes any open modal
      if (e.key === 'Escape') {
        if (isCommandOpen) setIsCommandOpen(false);
        if (isHistoryOpen) setIsHistoryOpen(false);
        if (lightboxData.isOpen) setLightboxData(prev => ({ ...prev, isOpen: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandOpen, isHistoryOpen, lightboxData.isOpen]);

  const openLightbox = (imageUrl: string, caption?: string) => {
    setLightboxData({
      isOpen: true,
      imageUrl,
      caption
    });
  };

  const closeLightbox = () => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  };

  // Route Resolver
  const renderRoute = () => {
    const path = currentPath;

    // Home
    if (path === '/' || path === '') {
      return (
        <HomePage
          onNavigate={navigate}
          onOpenLightbox={openLightbox}
        />
      );
    }

    // About
    if (path === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    // Services Index
    if (path === '/services') {
      return (
        <ServicesPage
          onSelectService={(slug) => navigate(`/services/${slug}`)}
          onStartProject={() => navigate('/contact')}
        />
      );
    }

    // Service Detail (/services/:slug)
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      const service = services.find(s => s.slug === slug);
      if (service) {
        return (
          <ServiceDetailPage
            service={service}
            onNavigate={navigate}
            onSelectProject={(pSlug) => navigate(`/work/${pSlug}`)}
            onStartProject={() => navigate('/contact')}
          />
        );
      }
    }

    // Work Index
    if (path === '/work') {
      return (
        <WorkPage
          onSelectProject={(slug) => navigate(`/work/${slug}`)}
          onOpenLightbox={openLightbox}
          onStartProject={() => navigate('/contact')}
        />
      );
    }

    // Work Detail (/work/:slug)
    if (path.startsWith('/work/')) {
      const slug = path.replace('/work/', '');
      const project = projects.find(p => p.slug === slug);
      if (project) {
        return (
          <ProjectDetailPage
            project={project}
            onNavigate={navigate}
            onSelectProject={(pSlug) => navigate(`/work/${pSlug}`)}
            onOpenLightbox={openLightbox}
            onStartProject={() => navigate('/contact')}
          />
        );
      }
    }

    // Insights Index
    if (path === '/insights') {
      return (
        <InsightsPage
          onSelectArticle={(slug) => navigate(`/insights/${slug}`)}
        />
      );
    }

    // Article Detail (/insights/:slug)
    if (path.startsWith('/insights/')) {
      const slug = path.replace('/insights/', '');
      const article = insightArticles.find(a => a.slug === slug);
      if (article) {
        return (
          <ArticleDetailPage
            article={article}
            onNavigate={navigate}
            onSelectArticle={(aSlug) => navigate(`/insights/${aSlug}`)}
            onStartProject={() => navigate('/contact')}
          />
        );
      }
    }

    // Contact
    if (path === '/contact') {
      return (
        <ContactPage
          onViewHistory={() => setIsHistoryOpen(true)}
          onNavigateHome={() => navigate('/')}
        />
      );
    }

    // 404 Fallback
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-[#F4F5F7] selection:bg-violet-600 selection:text-white flex flex-col justify-between font-sans">
      {/* Custom magnetic interactive cursor */}
      <Cursor />

      {/* Top sticky glass navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenHistory={() => setIsHistoryOpen(true)}
      />

      {/* Global Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onNavigate={navigate}
        onOpenHistory={() => setIsHistoryOpen(true)}
      />

      {/* Fullscreen Image Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxData.isOpen}
        images={lightboxData.imageUrl ? [{ url: lightboxData.imageUrl, caption: lightboxData.caption }] : []}
        currentIndex={0}
        onIndexChange={() => {}}
        onClose={closeLightbox}
      />

      {/* Stored Inquiries / Form Submissions History Modal */}
      <SubmissionHistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        onNavigateToContact={() => navigate('/contact')}
      />

      {/* Main Page View with Animated Transition */}
      <main className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full"
          >
            {renderRoute()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Redesigned Studio Footer */}
      <Footer
        onNavigate={navigate}
        onOpenCommand={() => setIsCommandOpen(true)}
      />
    </div>
  );
}
