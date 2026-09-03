import React from 'react';
import { ToastMessage } from '../types';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none px-4">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';
          const isWarning = toast.type === 'warning';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-2xl backdrop-blur-xl ${
                isSuccess
                  ? 'bg-slate-900/95 border-emerald-500/30 text-emerald-100 shadow-emerald-950/20'
                  : isError
                  ? 'bg-slate-900/95 border-rose-500/30 text-rose-100 shadow-rose-950/20'
                  : isWarning
                  ? 'bg-slate-900/95 border-indigo-500/30 text-indigo-100 shadow-indigo-950/20'
                  : 'bg-slate-900/95 border-slate-700/50 text-slate-200 shadow-black/40'
              }`}
            >
              <div className="shrink-0 mt-0.5">
                {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                {isError && <AlertCircle className="w-5 h-5 text-rose-400" />}
                {isWarning && <AlertCircle className="w-5 h-5 text-indigo-400" />}
                {!isSuccess && !isError && !isWarning && <Info className="w-5 h-5 text-indigo-400" />}
              </div>

              <div className="flex-1 text-sm">
                <p className="font-semibold text-slate-100">{toast.title}</p>
                {toast.description && (
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">{toast.description}</p>
                )}
              </div>

              <button
                onClick={() => onDismiss(toast.id)}
                className="shrink-0 text-slate-400 hover:text-slate-200 transition-colors p-1"
                aria-label="Close notification"
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
