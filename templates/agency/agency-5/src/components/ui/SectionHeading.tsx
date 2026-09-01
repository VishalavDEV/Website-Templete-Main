import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'split';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  badge,
  title,
  subtitle,
  description,
  align = 'left',
  className = '',
}) => {
  if (align === 'split') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-8 border-b border-[var(--border-color)] mb-12 ${className}`}>
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            {number && <span className="font-mono text-xs font-bold text-[var(--accent-color)]">{number} —</span>}
            {badge && <Badge variant="accent">{badge}</Badge>}
          </div>
          {subtitle && <p className="text-xs font-mono uppercase tracking-widest text-[var(--secondary-color)]">{subtitle}</p>}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-color)] uppercase">
            {title}
          </h2>
        </div>
        {description && (
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg text-[var(--secondary-color)] leading-relaxed font-light">
              {description}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-4 mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        {number && <span className="font-mono text-xs font-bold text-[var(--accent-color)]">{number} —</span>}
        {badge && <Badge variant="accent">{badge}</Badge>}
      </div>
      {subtitle && <p className="text-xs font-mono uppercase tracking-widest text-[var(--secondary-color)]">{subtitle}</p>}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-color)] uppercase">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-[var(--secondary-color)] leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
};
