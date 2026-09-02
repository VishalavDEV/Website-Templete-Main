import React from 'react';

export const SkipNavigation: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only fixed top-4 left-4 z-50 px-4 py-2 bg-[#0066FF] text-white font-mono text-xs uppercase tracking-widest font-bold border border-white/20 shadow-2xl rounded-md transition-all focus:outline-hidden focus:ring-2 focus:ring-white"
    >
      Skip to main content
    </a>
  );
};
