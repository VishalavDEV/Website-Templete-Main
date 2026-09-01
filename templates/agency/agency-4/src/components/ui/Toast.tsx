import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  isVisible: boolean;
  type?: 'success' | 'error' | 'info';
  title: string;
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  isVisible,
  type = 'success',
  title,
  message,
  onClose
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 max-w-md bg-[#1A1918] text-white p-5 rounded-2xl shadow-2xl border border-white/10 flex items-start space-x-4"
        >
          <div className="flex-shrink-0 pt-0.5">
            {type === 'success' ? (
              <CheckCircle2 className="w-6 h-6 text-[#D96B43]" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-400" />
            )}
          </div>

          <div className="flex-1 pr-2">
            <h4 className="text-sm font-bold text-white mb-1 font-display">{title}</h4>
            <p className="text-xs text-gray-300 leading-relaxed">{message}</p>
          </div>

          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
