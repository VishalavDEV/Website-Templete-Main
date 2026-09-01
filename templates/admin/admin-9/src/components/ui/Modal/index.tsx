import React from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { Button } from '../Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  type?: 'standard' | 'confirmation' | 'delete' | 'large' | 'fullscreen' | 'drawer' | 'bottom-sheet';
}

export function Modal({ isOpen, onClose, title, children, footer, type = 'standard' }: ModalProps) {
  if (!isOpen) return null;

  const typeClasses = {
    standard: 'max-w-lg w-full rounded-xl',
    confirmation: 'max-w-md w-full rounded-xl',
    delete: 'max-w-md w-full rounded-xl border-t-4 border-destructive',
    large: 'max-w-3xl w-full rounded-xl',
    fullscreen: 'max-w-none w-screen h-screen rounded-none',
    drawer: 'max-w-md w-full h-screen rounded-none absolute right-0 top-0 bottom-0 animate-in slide-in-from-right duration-250',
    'bottom-sheet': 'max-w-lg w-full rounded-t-2xl absolute bottom-0 left-1/2 -translate-x-1/2 animate-in slide-in-from-bottom duration-250',
  };

  const wrapperClass = type === 'drawer' || type === 'bottom-sheet'
    ? 'fixed inset-0 z-50 flex bg-black/50'
    : 'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4';

  return (
    <div className={wrapperClass}>
      {/* Background overlay click */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
      
      <div className={`relative bg-card p-6 shadow-2xl flex flex-col border border-border ${typeClasses[type]} ${
        type === 'fullscreen' ? 'overflow-y-auto' : ''
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-4">
          <div className="flex items-center gap-2">
            {type === 'delete' && <AlertTriangle className="h-5 w-5 text-destructive animate-pulse" />}
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
          </div>
          <button onClick={onClose} className="rounded-md p-1 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 text-sm text-foreground/80 overflow-y-auto min-h-0">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex justify-end gap-2 border-t border-border/50 pt-4 mt-6">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
