import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  colors = ['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5'],
  animationSpeed = 8,
  showBorder = false,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    animation: `gradientMove ${animationSpeed}s ease infinite`,
  };

  return (
    <span className={`relative inline-block ${className}`}>
      <span
        style={gradientStyle}
        className="bg-clip-text text-transparent inline-block font-extrabold"
      >
        {children}
      </span>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </span>
  );
};
