import React, { useState } from 'react';

export default function ImageWithLoader({
  src,
  alt = 'NOVA Device',
  className = '',
  aspectRatio = '4/3',
  style = {},
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: style.height || 'auto',
        aspectRatio: (aspectRatio === 'auto' || style.height === '100%') ? 'auto' : aspectRatio,
        backgroundColor: '#0D0E12',
        overflow: 'hidden',
        borderRadius: '6px',
        ...style
      }}
      className={`nova-image-container ${className}`}
    >
      {/* Shimmer Placeholder */}
      {!isLoaded && !hasError && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 100%)',
            backgroundSize: '200% 100%',
            animation: 'novaShimmer 1.8s infinite ease-in-out',
            zIndex: 1
          }}
        />
      )}

      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true);
          setHasError(true);
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'scale(1)' : 'scale(1.03)',
          transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
          zIndex: 2
        }}
        {...props}
      />
    </div>
  );
}
