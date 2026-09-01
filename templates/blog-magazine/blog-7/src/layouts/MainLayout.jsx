import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/navigation/Header';
import { MobileNavigation } from '../components/navigation/MobileNavigation';
import { SearchOverlay } from '../components/navigation/SearchOverlay';
import { Footer } from '../components/navigation/Footer';
import { BookmarkDrawer } from '../components/engagement/BookmarkDrawer';
import { NewsletterModal } from '../components/engagement/NewsletterModal';
import { AudioPlayerBar } from '../components/editorial/AudioPlayerBar';
import { ScrollToTop } from '../components/utility/ScrollToTop';
import { ScrollRestoration } from '../components/utility/ScrollRestoration';
import { Toast } from '../components/common/Toast';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export function MainLayout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#141413] w-full overflow-x-hidden selection:bg-[#EFE8DC] selection:text-[#141413]">
      {/* Scroll to Top on Navigation */}
      <ScrollRestoration />

      {/* Global Header with dynamic sticky shrink & backdrop blur */}
      <Header onOpenMobileMenu={() => setIsMobileNavOpen(true)} />

      {/* Mobile Off-Canvas Drawer Navigation */}
      <MobileNavigation
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      {/* Main Page Content with Seamless Editorial Transitions */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 transition-all duration-300">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -14 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Overlays & Interactive Utilities */}
      <SearchOverlay />
      <BookmarkDrawer />
      <NewsletterModal />
      <AudioPlayerBar />
      <ScrollToTop />
      <Toast />
    </div>
  );
}
