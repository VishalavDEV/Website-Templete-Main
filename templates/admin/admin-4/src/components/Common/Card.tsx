import React from 'react';
import { clsx } from 'clsx';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  action,
  noPadding = false,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'bg-app-surface border border-app rounded-2xl shadow-xs transition-all duration-200 overflow-hidden max-w-full',
        className
      )}
      {...props}
    >
      {(title || action) && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 sm:px-5 py-3.5 sm:py-4 border-b border-app">
          <div className="min-w-0 flex-1">
            {typeof title === 'string' ? (
              <h3 className="text-sm sm:text-base font-bold text-app-primary truncate">{title}</h3>
            ) : (
              title
            )}
            {subtitle && (
              <p className="text-xs text-app-secondary mt-0.5">{subtitle}</p>
            )}
          </div>
          {action && <div className="flex items-center gap-2 shrink-0">{action}</div>}
        </div>
      )}
      <div className={clsx(!noPadding && 'p-3.5 sm:p-5 max-w-full')}>{children}</div>
    </div>
  );
};

