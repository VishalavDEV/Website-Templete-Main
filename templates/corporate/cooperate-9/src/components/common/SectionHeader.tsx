import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  badgeText?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  badgeText,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} max-w-3xl ${className}`}>
      {badgeText && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {badgeText}
        </div>
      )}
      
      {eyebrow && (
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3 block">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F9FA] leading-[1.15] tracking-tight font-normal">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-sans font-light">
          {description}
        </p>
      )}
    </div>
  );
};
