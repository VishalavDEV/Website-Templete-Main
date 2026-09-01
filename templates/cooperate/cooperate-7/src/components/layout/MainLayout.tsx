import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';
import { SearchModal } from '../common/SearchModal';
import { Shield, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('straventa_cookie_consent');
    if (saved) {
      setCookieConsent(saved === 'true');
    } else {
      setCookieConsent(null);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('straventa_cookie_consent', 'true');
    setCookieConsent(true);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('straventa_cookie_consent', 'false');
    setCookieConsent(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-zinc-900 selection:text-white font-sans antialiased">
      <ScrollToTop />
      
      {/* Global Header */}
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Routed Page Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Search Overlay (Cmd + K) */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Sleek Cookie Compliance Banner */}
      {cookieConsent === null && (
        <div className="fixed bottom-4 right-4 sm:right-6 max-w-md z-40 p-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl animate-fade-in text-slate-900">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-slate-100 text-slate-900 shrink-0 mt-0.5 border border-slate-200">
              <Shield className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-600">
              <p className="font-semibold text-slate-900 mb-1">We respect your privacy</p>
              <p className="leading-relaxed">
                We use cookies to analyze site traffic, optimize performance, and personalize enterprise user experiences. Review our{' '}
                <Link to="/cookie-policy" className="text-slate-900 font-semibold underline hover:text-zinc-700">
                  Cookie Policy
                </Link>.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={handleAcceptCookies}
                  className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg transition shadow-xs"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDeclineCookies}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded-lg transition"
                >
                  Necessary Only
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
