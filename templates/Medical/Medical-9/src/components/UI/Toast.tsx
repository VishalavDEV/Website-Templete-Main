import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full px-4 sm:px-0 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto bg-[#392B3A] text-[#FBF8F3] p-4 rounded-xl shadow-soft-lg border border-[#D96C5F]/20 flex items-start gap-3 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
          {t.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#F2B59F] shrink-0 mt-0.5" />}
          {t.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
          {t.type === 'info' && <Info className="w-5 h-5 text-[#D96C5F] shrink-0 mt-0.5" />}

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold tracking-wide text-[#FBF8F3] font-sans">{t.title}</p>
            <p className="text-xs text-[#F5F0E8]/80 mt-0.5 leading-relaxed">{t.message}</p>
          </div>

          <button
            onClick={() => onDismiss(t.id)}
            className="text-[#F5F0E8]/60 hover:text-white transition-colors p-1"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
