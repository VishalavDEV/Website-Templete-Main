import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  maxDisplacement?: number;
  onCursorEnter?: () => void;
  onCursorLeave?: () => void;
  as?: 'button' | 'a';
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.2,
  maxDisplacement = 6, // 4-8px max as per design system requirements
  onCursorEnter,
  onCursorLeave,
  as = 'button',
  href,
  onClick,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Calculate subtle delta clamped to maxDisplacement (4-8px)
    const rawX = middleX * strength;
    const rawY = middleY * strength;
    const clampedX = Math.max(-maxDisplacement, Math.min(maxDisplacement, rawX));
    const clampedY = Math.max(-maxDisplacement, Math.min(maxDisplacement, rawY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    onCursorLeave?.();
  };

  const handleMouseEnter = () => {
    onCursorEnter?.();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 240,
        mass: 0.1,
      }}
      className="inline-block"
    >
      {as === 'a' ? (
        <a
          href={href}
          onClick={onClick as any}
          className={className}
          {...(props as any)}
        >
          {children}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={className}
          {...props}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
};
