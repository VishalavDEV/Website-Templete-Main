import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '../../ui/Button';

export interface ConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

export function ConfirmationDialog({ isOpen, onClose, onConfirm, title = 'Confirm dangerous deletion', message = 'This action cannot be undone. All active staging keys will be permanently revoked.' }: ConfirmProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center select-none p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200 space-y-4">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-full bg-destructive/15 text-destructive flex items-center justify-center shrink-0"><AlertTriangle className="h-4.5 w-4.5" /></div>
          <div>
            <h3 className="text-sm font-bold text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{message}</p>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={onClose}>Cancel</Button>
          <Button variant="destructive" size="sm" onClick={onConfirm}>Revoke Staging Keys</Button>
        </div>
      </div>
    </div>
  );
}
