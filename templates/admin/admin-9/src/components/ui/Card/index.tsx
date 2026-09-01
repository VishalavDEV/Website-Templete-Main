import React from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'basic' | 'stat' | 'profile' | 'image' | 'action' | 'pricing' | 'feature' | 'progress' | 'notification' | 'activity';
  imageSrc?: string;
  statValue?: string | number;
  statChange?: string;
  profileRole?: string;
  profileAvatar?: string;
  price?: string;
  progressPercent?: number;
}

export function Card({
  className = '',
  title,
  subtitle,
  headerAction,
  footer,
  variant = 'basic',
  imageSrc,
  statValue,
  statChange,
  profileRole,
  profileAvatar,
  price,
  progressPercent = 0,
  children,
  ...props
}: CardProps) {
  const baseStyle = 'rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden';

  if (variant === 'stat') {
    return (
      <div className={`${baseStyle} p-6 flex flex-col justify-between ${className}`} {...props}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</span>
          {headerAction}
        </div>
        <div className="mt-4 space-y-1">
          <div className="text-3xl font-extrabold tracking-tight text-foreground">{statValue}</div>
          {statChange && (
            <p className="text-xs font-medium text-success flex items-center gap-1">
              <span>{statChange}</span>
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'profile') {
    return (
      <div className={`${baseStyle} p-6 flex flex-col items-center text-center ${className}`} {...props}>
        <img src={profileAvatar} className="h-20 w-20 rounded-full object-cover border-2 border-primary mb-4" />
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{profileRole}</p>
        <p className="text-xs text-foreground/80 max-w-xs mt-3">{subtitle}</p>
        <div className="flex gap-2.5 mt-5 w-full">
          <Button variant="outline" size="sm" className="flex-1">Message</Button>
          <Button variant="primary" size="sm" className="flex-1">View Profile</Button>
        </div>
      </div>
    );
  }

  if (variant === 'image') {
    return (
      <div className={`${baseStyle} ${className}`} {...props}>
        {imageSrc && <img src={imageSrc} className="h-44 w-full object-cover" />}
        <div className="p-5 space-y-1.5">
          <h3 className="text-base font-bold leading-tight">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
          <div className="pt-3 text-xs">{children}</div>
        </div>
      </div>
    );
  }

  if (variant === 'pricing') {
    return (
      <div className={`${baseStyle} p-8 flex flex-col justify-between text-center border-2 ${
        statChange ? 'border-primary shadow-lg scale-105' : 'border-border'
      } ${className}`} {...props}>
        <div className="space-y-2">
          {statChange && <Badge variant="default" className="mx-auto select-none">{statChange}</Badge>}
          <h3 className="text-lg font-extrabold uppercase tracking-wider">{title}</h3>
          <div className="flex justify-center items-baseline my-4">
            <span className="text-4xl font-extrabold tracking-tight text-foreground">{price}</span>
            <span className="text-xs text-muted-foreground ml-1">/month</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{subtitle}</p>
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <ul className="text-xs text-left space-y-3 mb-6">{children}</ul>
          <Button variant={statChange ? 'primary' : 'outline'} className="w-full">Get Started</Button>
        </div>
      </div>
    );
  }

  if (variant === 'progress') {
    return (
      <div className={`${baseStyle} p-6 space-y-4 ${className}`} {...props}>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-sm font-bold text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
          </div>
          <span className="text-sm font-bold text-primary">{progressPercent}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden border border-border">
          <div className="bg-primary h-full rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseStyle} ${className}`} {...props}>
      {(title || subtitle || headerAction) && (
        <div className="flex flex-row items-center justify-between space-y-0 p-5 border-b border-border/50">
          <div>
            {title && <h3 className="text-base font-bold leading-none tracking-tight">{title}</h3>}
            {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="p-5">{children}</div>
      {footer && (
        <div className="flex items-center p-5 pt-0 border-t border-border/50 mt-2">{footer}</div>
      )}
    </div>
  );
}
