import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { CursorType } from '../../types';

interface ScrollToTopProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ setCursorType }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          onMouseEnter={() => setCursorType('button', 'TOP ↑')}
          onMouseLeave={() => setCursorType('default')}
          aria-label="Scroll back to top"
          className="fixed bottom-8 right-6 sm:right-8 z-40 p-3 sm:p-3.5 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/20 text-[#FAF9F6] hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white transition-all duration-300 shadow-xl shadow-black/50 cursor-pointer group focus:outline-hidden focus:ring-2 focus:ring-[#0066FF]"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
