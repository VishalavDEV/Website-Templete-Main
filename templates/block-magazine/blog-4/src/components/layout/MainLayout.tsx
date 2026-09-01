import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SearchOverlay } from '../modals/SearchOverlay';
import { SubscribeModal } from '../modals/SubscribeModal';
import { ScrollToTop } from '../common/ScrollToTop';

export const MainLayout: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#0F172A] dark:bg-[#0B0F14] dark:text-[#F8FAFC] transition-colors duration-200 relative selection:bg-[#4A7285]/20 selection:text-[#0F172A] dark:selection:bg-[#5C899D]/40 dark:selection:text-white antialiased">
      <ScrollToTop />

      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
      />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* Global Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Global Newsletter Subscription Modal */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />
    </div>
  );
};
