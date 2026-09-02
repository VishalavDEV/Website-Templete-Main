import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 md:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className={cn(
              'pointer-events-auto flex items-start gap-3 p-4 rounded-2xl glass-panel shadow-2xl border backdrop-blur-xl',
              toast.type === 'success' && 'border-emerald-500/30 text-emerald-950 dark:text-emerald-100',
              toast.type === 'error' && 'border-rose-500/30 text-rose-950 dark:text-rose-100',
              toast.type === 'info' && 'border-cyan-500/30 text-cyan-950 dark:text-cyan-100'
            )}
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
              {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-500" />}
              {toast.type === 'info' && <Info className="w-5 h-5 text-cyan-500" />}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                {toast.title}
              </h4>
              {toast.description && (
                <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-0.5">
                  {toast.description}
                </p>
              )}
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 p-1 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
