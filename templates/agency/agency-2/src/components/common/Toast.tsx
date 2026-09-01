import React, { useEffect, useState } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'info';
  title: string;
  description?: string;
}

export const Toast: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const custom = e as CustomEvent<ToastMessage>;
      if (custom.detail) {
        const id = Math.random().toString(36).substring(2, 9);
        const newToast = { ...custom.detail, id };
        setToasts((prev) => [...prev, newToast]);

        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4000);
      }
    };

    window.addEventListener('valence-toast', handleToast);
    return () => window.removeEventListener('valence-toast', handleToast);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto glass-panel-strong p-4 rounded-xl shadow-glass-elevated border border-ink-border flex items-start gap-3 animate-slideInRight"
        >
          {t.type === 'info' ? (
            <Info className="w-5 h-5 text-accent-lavender shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-accent-coral shrink-0 mt-0.5" />
          )}
          <div className="flex-1">
            <p className="text-xs font-semibold text-ink-primary font-mono uppercase">{t.title}</p>
            {t.description && <p className="text-xs text-ink-secondary mt-0.5">{t.description}</p>}
          </div>
          <button
            onClick={() => setToasts((prev) => prev.filter((item) => item.id !== t.id))}
            className="text-ink-muted hover:text-ink-primary p-1"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export const showToast = (title: string, description?: string, type: 'success' | 'info' = 'success') => {
  window.dispatchEvent(
    new CustomEvent('valence-toast', {
      detail: { title, description, type },
    })
  );
};
