import React, { useState } from 'react';
import { FileImage } from 'lucide-react';

export function Image({ src, alt, className = '' }: { src?: string; alt: string; className?: string }) {
  const [error, setError] = useState(!src);
  return (
    <div className={`relative overflow-hidden bg-muted flex items-center justify-center border border-border/40 rounded-lg shrink-0 select-none ${className}`}>
      {error ? (
        <FileImage className="h-1/3 w-1/3 text-muted-foreground/50 animate-pulse" />
      ) : (
        <img src={src} alt={alt} className="h-full w-full object-cover" onError={() => setError(true)} />
      )}
    </div>
  );
}
