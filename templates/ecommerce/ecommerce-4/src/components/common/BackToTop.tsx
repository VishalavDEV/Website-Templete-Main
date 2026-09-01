import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        title="Return to top"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: '#161616',
          color: '#FFFFFF',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 450,
          border: 'none'
        }}
      >
        <ArrowUp size={18} />
      </motion.button>
    </AnimatePresence>
  );
};
