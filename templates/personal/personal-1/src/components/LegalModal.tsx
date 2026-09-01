import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  title,
  content,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl text-white p-6 sm:p-8"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
            <ShieldCheck size={14} />
            <span>LEGAL DISCLOSURE</span>
          </div>

          <h3 className="font-display font-bold text-xl text-white mb-4">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-6">
            {content}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs"
          >
            Acknowledge & Close
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
