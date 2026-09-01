import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div
      id="toast-container"
      className="fixed bottom-6 right-6 z-[9990] flex flex-col space-y-3 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            id={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-[#3E3445]/10 shadow-[0_12px_30px_rgba(102,80,128,0.12)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
          >
            <div className="mt-0.5 shrink-0">
              {isSuccess && <CheckCircle2 className="w-5 h-5 text-[#739B82]" />}
              {isError && <AlertCircle className="w-5 h-5 text-[#C77C83]" />}
              {!isSuccess && !isError && <Info className="w-5 h-5 text-[#8B6FAE]" />}
            </div>

            <div className="flex-1 text-sm font-medium text-[#3E3445] leading-relaxed">
              {toast.message}
            </div>

            <button
              id={`close-toast-${toast.id}`}
              onClick={() => removeToast(toast.id)}
              className="text-[#756B7C] hover:text-[#3E3445] p-1 rounded-lg hover:bg-[#E8DDF2]/40 transition-colors"
              aria-label="Dismiss message"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
