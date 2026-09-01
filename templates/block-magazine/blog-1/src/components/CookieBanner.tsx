import { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setAccepted(true);
  };

  return (
    <AnimatePresence>
      {!accepted && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-50 bg-neutral-900 text-white p-5 rounded-2xl shadow-2xl border border-neutral-800 flex flex-col gap-3"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy & Editorial Cookies</span>
            </div>
            <button
              onClick={handleAccept}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed font-sans">
            We use minimal local storage cookies to remember your bookmarks, reading mode preferences, and dark theme settings. No invasive trackers.
          </p>
          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              onClick={handleAccept}
              className="bg-amber-600 hover:bg-amber-500 text-white font-medium px-4 py-2 rounded-xl text-xs transition-colors shadow-sm"
            >
              Accept & Continue
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
