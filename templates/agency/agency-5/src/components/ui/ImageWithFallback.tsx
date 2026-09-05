import React, { useState, useEffect, useRef } from 'react';
import { getAssetUrl } from '../../utils/assets';

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
  const imgRef = useRef<HTMLImageElement>(null);
  const resolvedSrc = getAssetUrl(src);

  useEffect(() => {
    setHasError(false);
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [resolvedSrc]);

  if (hasError || !resolvedSrc) {
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
    <div className="relative w-full h-full overflow-hidden bg-[#121212]">
      <img
        ref={imgRef}
        src={resolvedSrc}
        alt={alt}
        loading="eager"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-transform duration-500`}
        {...props}
      />
    </div>
  );
};
