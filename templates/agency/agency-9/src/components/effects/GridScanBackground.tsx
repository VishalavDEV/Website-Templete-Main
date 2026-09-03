import React from 'react';

export const GridScanBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15] ${className}`}>
      {/* Structural SVG Grid */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2B2727" strokeWidth="0.5" strokeDasharray="2,4" />
            <circle cx="60" cy="60" r="1" fill="#D65F3F" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      {/* Animated laser line */}
      <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D65F3F] to-transparent grid-scanner opacity-60" />
    </div>
  );
};
