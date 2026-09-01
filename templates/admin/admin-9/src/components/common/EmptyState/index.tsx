import React from 'react';
import { Inbox } from 'lucide-react';
import { Button } from '../../ui/Button';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ title = 'No data logs found', description = 'Try adjusting date filters or query terms.', actionLabel = 'Reset query', onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-border border-dashed rounded-xl bg-card/40 max-w-sm mx-auto select-none">
      <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4"><Inbox className="h-6 w-6" /></div>
      <h3 className="text-sm font-bold text-foreground">{title}</h3>
      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{description}</p>
      {onAction && (
        <Button variant="primary" size="sm" onClick={onAction} className="mt-4">{actionLabel}</Button>
      )}
    </div>
  );
}
