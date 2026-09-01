import React, { memo, useState, useEffect } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { getFallbackForArticle } from '../../data/assets';

export interface DynamicImageProps {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackKey?: string;
  layoutId?: string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  onClick?: () => void;
  overlay?: React.ReactNode;
}

export const DynamicImage: React.FC<DynamicImageProps> = memo(({
  src,
  alt,
  className = 'w-full h-full object-cover object-center',
  containerClassName = 'relative w-full h-full overflow-hidden bg-slate-900',
  fallbackKey,
  layoutId,
  aspectRatio,
  loading = 'lazy',
  priority = false,
  onClick,
  overlay,
}) => {
  const fallbackUrl = getFallbackForArticle(fallbackKey || alt);
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackUrl);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (src) {
      setImgSrc(src);
      setHasError(false);
      setIsLoaded(false);
    } else {
      setImgSrc(fallbackUrl);
      setIsLoaded(true);
    }
  }, [src, fallbackUrl]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackUrl);
      setIsLoaded(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const ImageComponent = layoutId ? motion.img : 'img';
  const motionProps: any = layoutId ? { layoutId } : {};

  return (
    <div
      onClick={onClick}
      style={aspectRatio ? { aspectRatio } : undefined}
      className={`${containerClassName} will-change-transform`}
    >
      {/* Progressive Shimmer Placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse z-0" />
      )}

      {/* Primary / Fallback Image Element */}
      <ImageComponent
        {...motionProps}
        src={imgSrc}
        alt={alt}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        onError={handleError}
        onLoad={handleLoad}
        className={`${className} transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Optional Overlay Children (gradients, badges, captions) */}
      {overlay}
    </div>
  );
});

DynamicImage.displayName = 'DynamicImage';
