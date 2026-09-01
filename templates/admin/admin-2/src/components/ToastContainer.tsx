import React from 'react';
import { useEditorial } from '../services/editorialStore';
import { CheckCircle2, Info, AlertTriangle, XCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useEditorial();

  return (
    <div 
      id="toast-container" 
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-md w-full pointer-events-none px-4"
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          let icon = <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />;
          let borderColor = 'border-sky-200';
          let bgColor = 'bg-white/95';

          if (toast.type === 'info') {
            icon = <Info className="w-5 h-5 text-sky-600 shrink-0" />;
            borderColor = 'border-sky-200';
          } else if (toast.type === 'warning') {
            icon = <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />;
            borderColor = 'border-amber-200';
          } else if (toast.type === 'error') {
            icon = <XCircle className="w-5 h-5 text-rose-500 shrink-0" />;
            borderColor = 'border-rose-200';
          }

          return (
            <motion.div
              key={toast.id}
              id={`toast-item-${toast.id}`}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-lg border ${borderColor} ${bgColor} backdrop-blur-md text-slate-800`}
            >
              {icon}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold font-serif text-slate-900 leading-tight">
                  {toast.title}
                </div>
                {toast.message && (
                  <div className="text-xs text-slate-600 mt-0.5 leading-relaxed break-words">
                    {toast.message}
                  </div>
                )}
              </div>
              <button
                id={`toast-close-${toast.id}`}
                onClick={() => removeToast(toast.id)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors cursor-pointer"
                title="Dismiss"
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
