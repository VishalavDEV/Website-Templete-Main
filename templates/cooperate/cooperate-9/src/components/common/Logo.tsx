import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  taglineClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showTagline = false,
  taglineClassName = 'text-xs italic font-serif text-[#191919]/70 ml-2.5' 
}) => {
  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-2.5 group cursor-pointer select-none ${className}`}
      aria-label="Finora Home"
    >
      {/* Finora Geometric Arrow Mark */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#191919] transition-transform duration-200 group-hover:scale-105"
        >
          {/* Main top-right angled chevron */}
          <path
            d="M6 18L18 6M18 6H9.5M18 6V14.5"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Accent lower diagonal slash */}
          <path
            d="M6 12L12 6"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <span className="font-sans font-bold text-xl sm:text-[22px] tracking-[-0.03em] text-[#191919]">
        Finora
      </span>

      {showTagline && (
        <span className={taglineClassName}>
          Finance. Closer.
        </span>
      )}
    </Link>
  );
};
