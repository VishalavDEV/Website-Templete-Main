import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '../../ui/Button';

export interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ message = 'API Connection timed out to regional databases.', onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-destructive/20 rounded-xl bg-destructive/5 max-w-sm mx-auto select-none">
      <div className="h-11 w-11 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-3"><AlertCircle className="h-5 w-5" /></div>
      <h3 className="text-xs font-bold text-destructive uppercase tracking-wide">Connection Error</h3>
      <p className="text-xs text-muted-foreground mt-2 font-medium">{message}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry} className="mt-4 border-destructive/30 hover:bg-destructive/10 text-destructive">Retry Fetch</Button>
      )}
    </div>
  );
}
