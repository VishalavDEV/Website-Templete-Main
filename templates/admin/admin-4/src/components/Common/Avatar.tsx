import React from 'react';
import { clsx } from 'clsx';

export interface AvatarProps {
  src?: string;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'Active' | 'On Leave' | 'Busy' | 'Offline';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  status,
  className
}) => {
  const getInitials = (n: string) => {
    if (!n) return 'U';
    const parts = n.split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return n.substring(0, 2).toUpperCase();
  };

  const sizes = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg'
  };

  const statusColors = {
    Active: 'bg-emerald-500',
    'On Leave': 'bg-amber-500',
    Busy: 'bg-rose-500',
    Offline: 'bg-gray-400'
  };

  return (
    <div className={clsx('relative inline-flex shrink-0 select-none', className)}>
      {src ? (
        <img
          src={src}
          alt={name}
          className={clsx('rounded-full object-cover border border-app', sizes[size])}
        />
      ) : (
        <div
          className={clsx(
            'rounded-full bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30 flex items-center justify-center',
            sizes[size]
          )}
        >
          {getInitials(name)}
        </div>
      )}
      {status && (
        <span
          className={clsx(
            'absolute bottom-0 right-0 rounded-full border-2 border-app-surface w-2.5 h-2.5',
            statusColors[status] || 'bg-gray-400'
          )}
        />
      )}
    </div>
  );
};
