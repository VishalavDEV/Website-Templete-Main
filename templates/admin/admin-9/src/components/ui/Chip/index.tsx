import React from 'react';
import { X } from 'lucide-react';

export interface ChipProps {
  label: string;
  onDelete?: () => void;
  variant?: 'outline' | 'fill';
}

export function Chip({ label, onDelete, variant = 'fill' }: ChipProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-border ${
      variant === 'fill' ? 'bg-muted text-foreground' : 'bg-transparent text-muted-foreground'
    }`}>
      <span>{label}</span>
      {onDelete && (
        <X className="h-3 w-3 hover:text-destructive shrink-0 cursor-pointer" onClick={onDelete} />
      )}
    </span>
  );
}
