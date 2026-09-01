import React from 'react';

interface SectionHeaderProps {
  index: string;
  category: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  category,
  title,
  subtitle,
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'}`}>
      {/* Monospace section indicator */}
      <div className={`flex items-center space-x-3 mb-3 text-xs font-mono tracking-widest text-cyan-400 ${isCenter ? 'justify-center' : ''}`}>
        <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 font-bold">
          {index}
        </span>
        <span className="text-slate-500">//</span>
        <span className="text-slate-400 uppercase tracking-widest">{category}</span>
      </div>

      {/* Main Display Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-100 uppercase">
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className={`mt-4 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-body ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
