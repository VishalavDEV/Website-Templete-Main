import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showTagline = false }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const textClasses = {
    sm: 'text-lg font-bold tracking-tighter',
    md: 'text-xl font-bold tracking-tighter',
    lg: 'text-2xl font-extrabold tracking-tighter'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Professional Polish Multi-tone Indigo-Purple-Cyan Emblem */}
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300 flex-shrink-0`}
      >
        <svg
          className={`${iconSizes[size]} text-white`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-display text-white ${textClasses[size]}`}>
          NEXORA
        </span>
        {showTagline && (
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest -mt-1 font-mono">
            Intelligence Platform
          </span>
        )}
      </div>
    </div>
  );
};

