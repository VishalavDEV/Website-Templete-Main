import React, { useState, useEffect, useRef } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fit?: 'cover' | 'contain' | 'fill';
  priority?: boolean;
  caption?: string;
  credit?: string;
  hoverZoom?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fit = 'cover',
  priority = false,
  caption,
  credit,
  hoverZoom = false,
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
    
    // If image is already cached by browser, mark as loaded immediately
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [src]);

  return (
    <figure className="relative w-full h-full min-h-full block group overflow-hidden bg-neutral-200 dark:bg-neutral-900">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Subtle skeleton pulse background only while loading - NO text overlay blocking image */}
        {loading && (
          <div className="absolute inset-0 bg-neutral-300/40 dark:bg-neutral-800/40 animate-pulse pointer-events-none z-0" />
        )}

        <img
          ref={imgRef}
          src={error ? '/images/ai_futuristic_farm.jpg' : imgSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
            setImgSrc('/images/ai_futuristic_farm.jpg');
          }}
          className={`absolute inset-0 w-full h-full transition-all duration-700 block ${
            fit === 'cover' ? 'object-cover' : fit === 'contain' ? 'object-contain' : 'object-cover'
          } ${hoverZoom ? 'group-hover:scale-105' : ''} ${
            loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          } ${className}`}
        />
      </div>

      {(caption || credit) && (
        <figcaption className="absolute bottom-0 left-0 right-0 z-20 p-3 bg-black/80 backdrop-blur-md text-white text-[11px] font-mono-tech flex justify-between items-center border-t border-neutral-800">
          {caption && <span className="line-clamp-1">{caption}</span>}
          {credit && <span className="text-emerald-400 uppercase text-[9px] font-bold">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
};
