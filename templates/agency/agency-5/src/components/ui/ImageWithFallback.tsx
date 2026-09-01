import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  fallbackCategory?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  fallbackCategory,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative w-full h-full min-h-[220px] bg-gradient-to-tr from-[#121212] via-[#1E1E1E] to-[#252525] border border-[var(--border-color)] p-6 flex flex-col justify-between overflow-hidden group ${className}`}
      >
        <div className="absolute inset-0 bg-grid-line bg-[length:24px_24px] opacity-30" />
        <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-[var(--accent-color)]/10 blur-2xl" />

        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-[var(--accent-color)] text-[#0A0A0A]">
            {fallbackCategory || 'DIGITAL PRODUCT'}
          </span>
          <span className="text-[10px] font-mono text-[var(--accent-color)] uppercase tracking-wider">[ SPATIAL VISUAL ]</span>
        </div>

        <div className="relative z-10 space-y-2">
          <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[var(--text-color)] font-display group-hover:text-[var(--accent-color)] transition-colors">
            {fallbackTitle || alt}
          </h4>
          <div className="w-12 h-1 bg-[var(--accent-color)] rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${!isLoaded ? 'bg-[var(--card-bg)] animate-pulse' : ''}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        {...props}
      />
    </div>
  );
};
