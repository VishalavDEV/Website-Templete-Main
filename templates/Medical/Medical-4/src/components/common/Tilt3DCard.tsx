import React, { useRef, useEffect, useState } from 'react';

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // default: 8 degrees on desktop
  perspective?: number; // default: 1000px
  glare?: boolean;
}

/**
 * Responsive 3D Card:
 * - Desktop: Interactive 3D cursor tilt with dynamic specular glare reflection & spatial depth.
 * - Mobile/Phone View (Touch screens & small screens < 768px): Continuous organic floating 3D animation
 *   with subtle elevation, ambient shadow breathing, and touch-free 3D depth.
 */
export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  maxTilt = 8,
  perspective = 1000,
  glare = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile or touch-primary
    const checkMobile = () => {
      const isTouchOrSmall = 
        window.innerWidth < 768 || 
        window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(hover: none)').matches;
      setIsMobile(isTouchOrSmall);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // If on mobile/phone view, rely on smooth CSS 3D floating animation instead of cursor events
    if (isMobile) return;

    const container = containerRef.current;
    const card = cardRef.current;
    const glareEl = glareRef.current;
    if (!container || !card) return;

    let bounds: DOMRect | null = null;

    const onMouseEnter = () => {
      bounds = container.getBoundingClientRect();
      // Fast, responsive tracking during hover on desktop
      card.style.transition = 'transform 0.12s ease-out, box-shadow 0.2s ease-out';
      if (glareEl) {
        glareEl.style.transition = 'opacity 0.2s ease-out';
        glareEl.style.opacity = '1';
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!bounds) bounds = container.getBoundingClientRect();

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      const clientX = e.clientX;
      const clientY = e.clientY;

      rafId.current = requestAnimationFrame(() => {
        if (!bounds || !card) return;
        const x = clientX - bounds.left;
        const y = clientY - bounds.top;

        // Calculate percentage from center: -1 to +1
        const xPct = (x / bounds.width - 0.5) * 2;
        const yPct = (y / bounds.height - 0.5) * 2;

        const rotateX = (-yPct * maxTilt).toFixed(2);
        const rotateY = (xPct * maxTilt).toFixed(2);

        card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        card.style.boxShadow = `
          ${(-xPct * 12).toFixed(1)}px ${(18 - yPct * 8).toFixed(1)}px 32px -6px rgba(15, 23, 42, 0.14),
          0 6px 12px -2px rgba(15, 23, 42, 0.06),
          0 1px 0 0 rgba(255, 255, 255, 0.95) inset
        `;

        if (glareEl) {
          const glareX = ((x / bounds.width) * 100).toFixed(1);
          const glareY = ((y / bounds.height) * 100).toFixed(1);
          glareEl.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 70%)`;
        }
      });
    };

    const onMouseLeave = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      bounds = null;
      // Ultra-smooth return to rest
      card.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
      card.style.boxShadow = '';
      if (glareEl) {
        glareEl.style.transition = 'opacity 0.4s ease-out';
        glareEl.style.opacity = '0';
      }
    };

    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isMobile, maxTilt, perspective, glare]);

  return (
    <div 
      ref={containerRef}
      className={`relative h-full select-none ${className}`}
      style={{ perspective: `${perspective}px` }}
    >
      <div
        ref={cardRef}
        className={`w-full h-full will-change-transform rounded-2xl overflow-hidden ${
          isMobile ? 'mobile-3d-float' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: !isMobile 
            ? `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px)` 
            : undefined,
        }}
      >
        {children}

        {glare && !isMobile && (
          <div
            ref={glareRef}
            className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 transition-opacity z-30"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};
