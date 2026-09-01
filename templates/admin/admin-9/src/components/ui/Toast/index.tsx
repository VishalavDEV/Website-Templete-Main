import React from 'react';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  onClose?: () => void;
}

export function Toast({ message, type = 'info', onClose }: ToastProps) {
  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-success" />,
    error: <AlertCircle className="h-5 w-5 text-destructive" />,
    info: <Info className="h-5 w-5 text-info" />,
    warning: <AlertTriangle className="h-5 w-5 text-warning" />,
  };

  const bgColors = {
    success: 'border-success bg-card',
    error: 'border-destructive bg-card',
    info: 'border-info bg-card',
    warning: 'border-warning bg-card',
  };

  return (
    <div className={`flex items-start gap-3 p-4 rounded-lg border shadow-lg max-w-sm w-full ${bgColors[type]}`}>
      <div className="shrink-0 mt-0.5">{icons[type]}</div>
      <div className="flex-1 text-xs font-semibold text-foreground">{message}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="shrink-0 p-0.5 rounded hover:bg-accent text-muted-foreground transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
