import React from 'react';

export interface AvatarProps {
  src?: string;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isOnline?: boolean;
}

export function Avatar({ src, name, size = 'md', isOnline }: AvatarProps) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  const sizeClasses = {
    xs: 'h-6 w-6 text-[10px]',
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-14 w-14 text-base',
    xl: 'h-20 w-20 text-lg',
  };

  return (
    <div className="relative inline-block shrink-0 select-none">
      {src ? (
        <img src={src} alt={name} className={`rounded-full object-cover border border-border ${sizeClasses[size]}`} />
      ) : (
        <div className={`rounded-full bg-primary/10 border border-primary/20 text-primary font-bold flex items-center justify-center ${sizeClasses[size]}`}>
          {initials}
        </div>
      )}
      {isOnline !== undefined && (
        <span className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-card ${
          isOnline ? 'bg-success' : 'bg-muted-foreground'
        }`}></span>
      )}
    </div>
  );
}
