import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Header } from '../components/navigation/Header';
import { FullScreenMenu } from '../components/navigation/FullScreenMenu';
import { SearchOverlay } from '../components/search/SearchOverlay';
import { SavedDrawer } from '../components/navigation/SavedDrawer';
import { PageTransition } from '../components/utility/PageTransition';
import { useZMag } from '../context/ZMagContext';
import { AnimatePresence } from 'framer-motion';
import { Sparkles, EyeOff, Eye, Globe, Compass, ArrowUpRight, BookOpen, ShieldCheck, Mail } from 'lucide-react';

export function MainLayout() {
  const { toastMessage, isReducedMotionActive, setIsReducedMotionActive, showToast } = useZMag();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMotion = () => {
    setIsReducedMotionActive(!isReducedMotionActive);
    showToast(!isReducedMotionActive ? 'Reduced Motion Activated' : 'Standard 3D Motion Restored');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#111827] relative selection:bg-[#0055FF] selection:text-white">
      {/* Floating Glassmorphic Header */}
      <Header />

      {/* Full-Screen Motion Overlay Menu */}
      <FullScreenMenu />

      {/* Full-Screen Motion Search & Discovery Overlay */}
      <SearchOverlay />

      {/* Saved Bookmarks Slide-over Drawer */}
      <SavedDrawer />

      {/* Main Content Area with Seamless Page Transitions */}
      <main className="flex-1 w-full pt-20 sm:pt-24 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition locationKey={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Rich Multi-Column Editorial Light Footer */}
      <footer className="border-t border-[#E5E7EB] bg-white pt-16 pb-12 px-4 sm:px-8 md:px-12 mt-24">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F3F4F6]">
            {/* Left: Magazine Mission & Bureaus */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-[#0055FF]" />
                <span className="font-heading font-black text-2xl text-[#111827] tracking-tight">
                  Z MAG
                </span>
                <span className="text-xs font-mono text-[#0055FF] font-bold ml-2">
                  VOL. 2026
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-md">
                An independent peer-reviewed spatial monograph dedicated to neuro-architecture, photonic quantum compute, tactile horology, and duration culture. Typeset in Zurich.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-xs font-mono text-[#4B5563]">
                <Globe className="w-3.5 h-3.5 text-[#0055FF]" />
                <span>Central Desk CET: {currentTime || '12:00:00'} (Zurich)</span>
              </div>
            </div>

            {/* Middle 1: Thematic Collections */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111827]">
                Thematic Hubs
              </h4>
              <ul className="space-y-2 text-xs font-heading font-bold text-[#4B5563]">
                <li>
                  <Link to="/category/bio-spaces" className="hover:text-[#0055FF] transition-colors block">
                    Bio-Spaces
                  </Link>
                </li>
                <li>
                  <Link to="/category/future-tech" className="hover:text-[#0055FF] transition-colors block">
                    Future Tech
                  </Link>
                </li>
                <li>
                  <Link to="/category/hyper-style" className="hover:text-[#0055FF] transition-colors block">
                    Hyper-Style
                  </Link>
                </li>
                <li>
                  <Link to="/category/z-culture" className="hover:text-[#0055FF] transition-colors block">
                    Z-Culture
                  </Link>
                </li>
                <li>
                  <Link to="/category/avant-sound" className="hover:text-[#0055FF] transition-colors block">
                    Avant-Sound
                  </Link>
                </li>
              </ul>
            </div>

            {/* Middle 2: Masthead & Archive */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111827]">
                Monograph
              </h4>
              <ul className="space-y-2 text-xs font-heading font-bold text-[#4B5563]">
                <li>
                  <Link to="/about" className="hover:text-[#0055FF] transition-colors block">
                    Manifesto & Ethos
                  </Link>
                </li>
                <li>
                  <Link to="/contributors" className="hover:text-[#0055FF] transition-colors block">
                    Editorial Fellows
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#0055FF] transition-colors block">
                    Direct Wire & Pitches
                  </Link>
                </li>
                <li>
                  <span className="text-[#9CA3AF] cursor-not-allowed block">
                    Print Hardcover (Quarterly)
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Print Archive Showcase Box */}
            <div className="lg:col-span-3 glass-card rounded-2xl p-5 bg-[#F8F9FA] border border-[#E5E7EB] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0055FF]">
                <BookOpen className="w-4 h-4" />
                <span>HARDCOVER ARCHIVE</span>
              </div>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                320-page clothbound quarterly volumes printed on Munken Lynx 120gsm archival stock.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#0055FF] hover:translate-x-1 transition-transform"
              >
                <span>Request Volume 48</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bottom Diagnostics Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>100% Light Engine &bull; WebGL 3D Active</span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={toggleMotion}
                className="flex items-center gap-1.5 hover:text-[#0055FF] transition-colors cursor-pointer"
                title="Toggle Accessible Motion"
              >
                {isReducedMotionActive ? <EyeOff className="w-3.5 h-3.5 text-[#0055FF]" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{isReducedMotionActive ? 'Motion: Reduced' : 'Motion: 3D Active'}</span>
              </button>
              <span>&bull;</span>
              <span>Zero Advertising Charter</span>
              <span>&bull;</span>
              <span>© {new Date().getFullYear()} Z MAG Zurich</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Notification Pill */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-[#111827] text-white text-xs font-mono shadow-2xl flex items-center gap-2 animate-bounce border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-[#0055FF]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
