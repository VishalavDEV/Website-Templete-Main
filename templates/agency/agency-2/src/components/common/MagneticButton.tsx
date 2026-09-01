import React, { useRef, useState } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    // Subtle magnetic pull
    setOffset({ x: x * 0.18, y: y * 0.18 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  let baseStyles =
    'relative inline-flex items-center justify-center font-mono uppercase tracking-[0.12em] font-medium transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  let sizeStyles = 'text-xs px-6 py-3.5';
  if (size === 'sm') sizeStyles = 'text-[11px] px-4 py-2.5';
  if (size === 'lg') sizeStyles = 'text-sm px-8 py-4.5';

  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles =
        'bg-ink-primary text-warm-white hover:bg-accent-coral shadow-sm hover:shadow-glass-elevated';
      break;
    case 'secondary':
      variantStyles =
        'bg-accent-coral text-warm-white hover:bg-ink-primary shadow-sm hover:shadow-glass-elevated';
      break;
    case 'outline':
      variantStyles =
        'border border-ink-primary/20 text-ink-primary hover:border-accent-coral hover:text-accent-coral bg-transparent';
      break;
    case 'glass':
      variantStyles =
        'glass-panel text-ink-primary hover:bg-warm-white/90 hover:border-accent-coral/30 shadow-glass-subtle hover:shadow-glass-elevated';
      break;
    case 'ghost':
      variantStyles = 'text-ink-primary hover:text-accent-coral bg-transparent';
      break;
  }

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
