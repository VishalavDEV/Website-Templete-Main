import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Search } from 'lucide-react';

export default function SearchOverlay({ isOpen, onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-brand-dark/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white hover:scale-110 transition-all duration-200 focus:outline-none"
        aria-label="Close search"
      >
        <X size={32} />
      </button>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="w-full max-w-2xl text-center"
      >
        <div className="relative flex items-center border-b-2 border-brand-accent/50 focus-within:border-brand-accent transition-all duration-300 py-3">
          <Search size={28} className="text-brand-accent mr-4" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type your search query..."
            className="w-full bg-transparent text-white text-xl md:text-2xl placeholder-white/30 border-none outline-none focus:ring-0"
          />
        </div>
        <p className="text-white/40 text-sm mt-3 text-left pl-10 font-mono">
          Press <span className="bg-white/10 px-2 py-0.5 rounded text-xs text-white/60">ESC</span> to cancel
        </p>
      </motion.div>
    </motion.div>
  );
}
