import React from 'react';

interface BeamsBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export const BeamsBackground: React.FC<BeamsBackgroundProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden bg-[#F8FAFC] ${className}`}>
      {/* Dynamic Luminous Beams / Glow Mesh for Light Theme */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Beam 1 - Indigo Glow from Top Left */}
        <div className="absolute -top-40 -left-40 w-96 sm:w-[540px] h-96 sm:h-[540px] bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        
        {/* Beam 2 - Cyan Light Ray from Top Right */}
        <div className="absolute -top-32 -right-32 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-gradient-to-bl from-cyan-400/15 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse-glow [animation-delay:2s]" />

        {/* Beam 3 - Electric Violet Accent in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-purple-500/8 via-indigo-500/10 to-cyan-400/8 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle Grid Matrix Texture */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.25) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Subtle Radial Fade */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#F8FAFC]/40 to-[#F8FAFC]" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
