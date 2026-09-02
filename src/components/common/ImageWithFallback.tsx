import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  category?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  fallbackTitle,
  category,
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={cn(
          'w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 border border-slate-200 select-none relative overflow-hidden',
          className
        )}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-200/80 flex items-center justify-center text-blue-600 mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          {category && (
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 mb-1 px-2.5 py-0.5 rounded-full bg-blue-100/80 border border-blue-200">
              {category}
            </span>
          )}
          <span className="text-xs font-display font-extrabold text-slate-800 max-w-[200px] line-clamp-1">
            {fallbackTitle || alt || 'Project Preview'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-100">
      {!loaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center text-slate-400">
          <ImageIcon className="w-6 h-6 opacity-40 animate-pulse" />
        </div>
      )}
      <img
        src={src}
        alt={alt || 'Image'}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        {...props}
      />
    </div>
  );
};
