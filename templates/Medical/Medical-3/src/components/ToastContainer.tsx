import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-[#1A535C] shrink-0" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />;
      default:
        return <Info className="w-5 h-5 text-[#4ECDC4] shrink-0" />;
    }
  };

  return (
    <div id="toast-container" className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-md w-full pointer-events-none px-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            id={`toast-${toast.id}`}
            className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200/80 flex items-start gap-3.5 text-[#0A1128]"
          >
            {getIcon(toast.type)}
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-[#0A1128] leading-tight mb-0.5 font-['Manrope']">
                {toast.title}
              </h4>
              <p className="text-xs text-[#4A5568] leading-relaxed break-words">
                {toast.message}
              </p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-[#0A1128] transition-colors p-1 rounded-md -mr-1 -mt-1 cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
