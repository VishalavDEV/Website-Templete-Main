import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = ''
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-3 mb-3.5 ${isCenter ? 'justify-center' : ''}`}>
          <span className={`w-6 sm:w-8 h-px ${isDark ? 'bg-white/40' : 'bg-[#0D4433]/30'}`}></span>
          <span
            className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] ${
              isDark
                ? 'bg-white/10 text-[#DFBA58] border border-white/15 backdrop-blur-sm'
                : 'bg-white/80 text-[#0D4433] border border-[#1A1A1A]/10 shadow-xs backdrop-blur-sm'
            }`}
          >
            {badge}
          </span>
          <span className={`w-6 sm:w-8 h-px ${isDark ? 'bg-white/40' : 'bg-[#0D4433]/30'}`}></span>
        </div>
      )}
      
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.12] ${
          isDark ? 'text-white' : 'text-[#1A1A1A]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-white/80' : 'text-[#424D48]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

