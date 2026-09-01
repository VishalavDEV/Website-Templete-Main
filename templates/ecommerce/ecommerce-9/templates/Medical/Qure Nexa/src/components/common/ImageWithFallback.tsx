import React, { useState } from 'react';
import { User, Stethoscope, Building2, Activity, ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'doctor' | 'user' | 'hospital' | 'treatment' | 'general';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  fallbackType = 'doctor',
  onError,
  ...props
}) => {
  const [error, setError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true);
    if (onError) {
      onError(e);
    }
  };

  if (error || !src) {
    if (fallbackType === 'doctor') {
      return (
        <div className={`flex flex-col items-center justify-center bg-gradient-to-b from-teal-50 to-sky-50 text-teal-900 border border-teal-100/80 relative overflow-hidden ${className || ''}`}>
          <div className="w-14 h-14 rounded-full bg-teal-600/10 flex items-center justify-center mb-1 text-teal-700 shadow-inner">
            <User className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-slate-900 text-center px-2 line-clamp-1">
            {alt || 'Doctor Specialist'}
          </span>
          <div className="flex items-center gap-1 text-[10px] text-teal-700 font-semibold mt-0.5">
            <Stethoscope className="w-3 h-3 text-teal-600" />
            <span>Qure Nexa Board Certified</span>
          </div>
        </div>
      );
    }

    if (fallbackType === 'hospital') {
      return (
        <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-teal-900 via-slate-900 to-teal-950 text-white ${className || ''}`}>
          <Building2 className="w-8 h-8 mb-1 text-teal-300" />
          <span className="text-[11px] font-bold text-center px-2">{alt || 'Medical Center'}</span>
        </div>
      );
    }

    if (fallbackType === 'treatment') {
      return (
        <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 text-teal-100 ${className || ''}`}>
          <Activity className="w-8 h-8 mb-1 text-teal-300" />
          <span className="text-[11px] font-bold text-center px-2">{alt || 'Clinical Treatment'}</span>
        </div>
      );
    }

    if (fallbackType === 'user') {
      return (
        <div className={`flex items-center justify-center bg-teal-100 text-teal-700 font-bold ${className || ''}`}>
          <User className="w-1/2 h-1/2" />
        </div>
      );
    }

    return (
      <div className={`flex flex-col items-center justify-center bg-slate-100 text-slate-400 ${className || ''}`}>
        <ImageOff className="w-6 h-6 mb-1 opacity-60" />
        <span className="text-[10px] text-slate-500">{alt || 'Image'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};
