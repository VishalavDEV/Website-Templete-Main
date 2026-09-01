/* src/app/providers/ToastProvider.tsx */
import React, { createContext, useContext, useState, useCallback } from 'react';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

type ToastContextType = {
  toasts: Toast[];
  addToast: (message: string, type: ToastType, duration?: number) => void;
  dismissToast: (id: string) => void;
  toast: {
    success: (msg: string, duration?: number) => void;
    error: (msg: string, duration?: number) => void;
    info: (msg: string, duration?: number) => void;
    warning: (msg: string, duration?: number) => void;
  };
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message: string, type: ToastType, duration = 4000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);

    if (duration > 0) {
      setTimeout(() => {
        dismissToast(id);
      }, duration);
    }
  }, [dismissToast]);

  const toast = React.useMemo(() => ({
    success: (msg: string, dur?: number) => addToast(msg, 'success', dur),
    error: (msg: string, dur?: number) => addToast(msg, 'error', dur),
    info: (msg: string, dur?: number) => addToast(msg, 'info', dur),
    warning: (msg: string, dur?: number) => addToast(msg, 'warning', dur),
  }), [addToast]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast, toast }}>
      {children}
      <ToastContainer toasts={toasts} dismiss={dismissToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
}

// Toast Container Component rendered inside the provider
function ToastContainer({ toasts, dismiss }: { toasts: Toast[]; dismiss: (id: string) => void }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => {
        const icons = {
          success: <CheckCircle2 className="h-5 w-5 text-success" />,
          error: <AlertCircle className="h-5 w-5 text-destructive" />,
          info: <Info className="h-5 w-5 text-info" />,
          warning: <AlertTriangle className="h-5 w-5 text-warning" />,
        };

        const bgColors = {
          success: 'border-success bg-card dark:bg-card',
          error: 'border-destructive bg-card dark:bg-card',
          info: 'border-info bg-card dark:bg-card',
          warning: 'border-warning bg-card dark:bg-card',
        };

        return (
          <div
            key={t.id}
            className={`flex items-start gap-3 p-4 rounded-lg border shadow-lg pointer-events-auto animate-in slide-in-from-right-5 duration-250 ${bgColors[t.type]}`}
          >
            <div className="shrink-0 mt-0.5">{icons[t.type]}</div>
            <div className="flex-1 text-xs font-medium text-foreground">{t.message}</div>
            <button
              onClick={() => dismiss(t.id)}
              className="shrink-0 p-0.5 rounded hover:bg-accent text-muted-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
