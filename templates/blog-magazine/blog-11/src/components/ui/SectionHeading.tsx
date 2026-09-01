import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = ''
}) => {
  const getAlignClass = () => {
    switch (align) {
      case 'center': return 'text-center items-center';
      case 'right': return 'text-right items-end';
      default: return 'text-left items-start';
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col mb-12 ${getAlignClass()} ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`w-8 h-[2px] ${isDark ? 'bg-emerald-400' : 'bg-emerald-700 dark:bg-emerald-400'}`} />
        <span className={`font-mono-tech text-xs uppercase tracking-widest font-bold ${
          isDark ? 'text-emerald-400' : 'text-emerald-700 dark:text-emerald-400'
        }`}>
          {label}
        </span>
      </div>

      <h2 className={`text-3xl md:text-5xl font-serif-editorial font-extrabold tracking-tight leading-tight ${
        isDark ? 'text-white' : 'text-theme-primary'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3 text-sm md:text-base max-w-2xl font-sans leading-relaxed ${
          isDark ? 'text-neutral-200' : 'text-theme-secondary'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
