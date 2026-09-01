import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isLight = false }) => {
  return (
    <div className={`flex items-center space-x-2.5 select-none cursor-pointer group ${className}`}>
      {/* Minimalist Solid Geometric Mark */}
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs ${
        isLight
          ? 'bg-white text-black'
          : 'bg-black text-white dark:bg-white dark:text-black'
      }`}>
        <span className="font-mono text-xs font-extrabold tracking-tighter">A</span>
      </div>
      
      {/* Brand Text with Clean Tracking */}
      <span className={`text-lg font-bold tracking-tighter ${
        isLight ? 'text-white' : 'text-gray-900 dark:text-white'
      }`}>
        ARJUN DEV<span className="text-blue-600 dark:text-blue-400">.</span>
      </span>
    </div>
  );
};

