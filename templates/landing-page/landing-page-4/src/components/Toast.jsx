import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Sparkles, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Toast() {
  const { toastMessage } = useModal();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#111116]/95 border border-amber-500/40 shadow-2xl shadow-black/90 backdrop-blur-2xl text-white text-xs sm:text-sm font-medium"
        >
          {toastMessage.type === 'error' ? (
            <AlertCircle size={18} className="text-rose-400 shrink-0" />
          ) : (
            <Sparkles size={18} className="text-amber-400 shrink-0" />
          )}

          <span>{toastMessage.message}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
