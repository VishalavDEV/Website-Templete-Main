import React, { useState, useEffect } from 'react';
import { PageView, UserSession, ToastMessage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { StudioEngine } from './components/StudioEngine';
import { PricingSection } from './components/PricingSection';
import { InsightsSection } from './components/InsightsSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { AuthModal } from './components/AuthModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { CommandPalette } from './components/CommandPalette';
import { ToastContainer } from './components/ToastContainer';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Layers, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [contactPreselectedScope, setContactPreselectedScope] = useState('');
  
  // Bookmarks state (with localStorage persistence)
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aura_bookmarks');
      return saved ? JSON.parse(saved) : ['nexus-quantum', 'aethelgard-horology'];
    } catch {
      return ['nexus-quantum', 'aethelgard-horology'];
    }
  });

  // User session state (with localStorage persistence)
  const [userSession, setUserSession] = useState<UserSession>(() => {
    try {
      const saved = localStorage.getItem('aura_session');
      return saved
        ? JSON.parse(saved)
        : {
            isAuthenticated: false
          };
    } catch {
      return { isAuthenticated: false };
    }
  });

  // Toasts notification system
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('aura_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem('aura_session', JSON.stringify(userSession));
    } catch (e) {
      console.error(e);
    }
  }, [userSession]);

  const showToast = (
    title: string,
    description?: string,
    type: 'success' | 'info' | 'warning' | 'error' = 'info'
  ) => {
    const id = 'toast_' + Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const isBookmarked = prev.includes(id);
      if (isBookmarked) {
        showToast('Removed from Saved', 'Case study removed from bookmarks.', 'info');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Saved to Bookmarks', 'Case study added to your saved collection.', 'success');
        return [...prev, id];
      }
    });
  };

  const handleOpenContact = (scope?: string) => {
    if (scope) {
      setContactPreselectedScope(scope);
    } else {
      setContactPreselectedScope('');
    }
    setIsContactOpen(true);
  };

  const handleLoginSuccess = (session: UserSession) => {
    setUserSession(session);
    setIsPortalOpen(true);
  };

  const handleLogout = () => {
    setUserSession({ isAuthenticated: false });
    showToast('Signed Out', 'Client session securely ended.', 'info');
  };

  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Floating Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenContact={() => handleOpenContact()}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenPortal={() => {
          if (userSession.isAuthenticated) {
            setIsPortalOpen(true);
          } else {
            setIsAuthOpen(true);
          }
        }}
        userSession={userSession}
      />

      {/* Main Content Area with Dynamic Page View Switching */}
      <main className="flex-1">
        {activePage === 'home' && (
          <div>
            {/* 1. Hero Section */}
            <Hero
              onOpenContact={() => handleOpenContact()}
              onNavigate={handleNavigate}
            />

            {/* 2. Services Section */}
            <ServicesSection
              onOpenContact={handleOpenContact}
              onNavigateToEngine={() => handleNavigate('studio-engine')}
            />

            {/* 3. Portfolio & Case Studies Section */}
            <PortfolioSection
              onOpenContact={handleOpenContact}
              bookmarks={bookmarks}
              onToggleBookmark={toggleBookmark}
              onShowToast={showToast}
            />

            {/* 4. Interactive Studio Engine Banner / Configurator */}
            <StudioEngine
              onOpenContact={handleOpenContact}
              onShowToast={showToast}
            />

            {/* 5. Pricing Section */}
            <PricingSection
              onOpenContact={handleOpenContact}
              onNavigateToEngine={() => handleNavigate('studio-engine')}
            />

            {/* 6. Insights & Articles */}
            <InsightsSection onShowToast={showToast} />

            {/* 7. Bottom High-Impact Consultation Banner */}
            <section className="py-20 relative border-t border-slate-900 bg-gradient-to-b from-[#0A0A0B] to-black overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

              <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 uppercase mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Confidential Discovery</span>
                </div>

                <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  Ready to architect category-defining software?
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                  Join venture-backed founders and enterprise leaders building with AURA. Schedule a direct technical consultation with our Principal Systems Architect.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => handleOpenContact()}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-bold text-sm flex items-center gap-2 shadow-xl shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Initiate Discovery Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleNavigate('studio-engine')}
                    className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-sm font-semibold text-slate-200 transition-all"
                  >
                    Configure Custom Scope
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activePage === 'services' && (
          <div className="pt-16">
            <ServicesSection
              onOpenContact={handleOpenContact}
              onNavigateToEngine={() => handleNavigate('studio-engine')}
            />
          </div>
        )}

        {activePage === 'work' && (
          <div className="pt-16">
            <PortfolioSection
              onOpenContact={handleOpenContact}
              bookmarks={bookmarks}
              onToggleBookmark={toggleBookmark}
              onShowToast={showToast}
            />
          </div>
        )}

        {activePage === 'studio-engine' && (
          <div className="pt-16">
            <StudioEngine
              onOpenContact={handleOpenContact}
              onShowToast={showToast}
            />
          </div>
        )}

        {activePage === 'pricing' && (
          <div className="pt-16">
            <PricingSection
              onOpenContact={handleOpenContact}
              onNavigateToEngine={() => handleNavigate('studio-engine')}
            />
          </div>
        )}

        {activePage === 'insights' && (
          <div className="pt-16">
            <InsightsSection onShowToast={showToast} />
          </div>
        )}
      </main>

      {/* Global Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Global Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        preselectedScope={contactPreselectedScope}
        onShowToast={showToast}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onShowToast={showToast}
      />

      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        userSession={userSession}
        onLogout={handleLogout}
        onShowToast={showToast}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenPortal={() => {
          if (userSession.isAuthenticated) {
            setIsPortalOpen(true);
          } else {
            setIsAuthOpen(true);
          }
        }}
      />

      {/* Real-Time Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
