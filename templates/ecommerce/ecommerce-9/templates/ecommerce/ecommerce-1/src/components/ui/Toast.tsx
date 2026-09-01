'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useCart();

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        clearToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage, clearToast]);

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#1C1917] px-5 py-3 text-sm text-[#FAF8F5] shadow-2xl border border-stone-800"
        >
          <CheckCircle2 className="h-4 w-4 text-[#D98A7F]" />
          <span className="font-body text-xs md:text-sm font-medium">{toastMessage}</span>
          <button
            onClick={clearToast}
            className="ml-2 rounded-full p-1 text-stone-400 hover:text-white transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
