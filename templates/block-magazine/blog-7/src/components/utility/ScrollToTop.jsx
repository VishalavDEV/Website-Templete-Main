import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useReadingProgress } from '../../hooks/useReadingProgress';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const progress = useReadingProgress();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-white text-[#141413] border-2 border-[#141413] shadow-lg hover:bg-[#141413] hover:text-white transition-colors flex items-center justify-center cursor-pointer group"
          aria-label="Scroll back to top"
          title={`Scroll to top (${Math.round(progress)}% read)`}
        >
          {/* Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
            <circle
              cx="22"
              cy="22"
              r={radius}
              stroke="#E8E5DC"
              strokeWidth="2"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              stroke="#D43825"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
            />
          </svg>

          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200 z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
