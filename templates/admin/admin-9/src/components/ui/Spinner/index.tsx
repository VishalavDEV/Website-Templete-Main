import React from 'react';
import { Loader2 } from 'lucide-react';

export function Spinner({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };
  return <Loader2 className={`animate-spin text-primary shrink-0 ${sizes[size]} ${className}`} />;
}
