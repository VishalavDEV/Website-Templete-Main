import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
}

export const SplashCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (touchDevice || reducedMotion) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('custom-cursor-enabled');
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const colors = ['#D76B4A', '#E89A83', '#B9A8C8', '#633E4B'];

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Add energy particles
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.6,
          decay: Math.random() * 0.02 + 0.015
        });
      }

      // Check hover targets for interactive labels
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveParent = target.closest('button, a, input, select, textarea, [data-cursor]');
        if (interactiveParent) {
          setIsHovered(true);
          const customLabel = interactiveParent.getAttribute('data-cursor');
          if (customLabel) {
            setCursorLabel(customLabel);
          } else if (interactiveParent.tagName === 'A' || interactiveParent.tagName === 'BUTTON') {
            setCursorLabel('EXPAND');
          } else {
            setCursorLabel('');
          }
        } else {
          setIsHovered(false);
          setCursorLabel('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.radius *= 0.96;

        if (p.alpha <= 0 || p.radius <= 0.5) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrame = requestAnimationFrame(render);
    };

    animFrame = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9998
        }}
      />
      {/* Target Follower Dot & Label */}
      <div
        style={{
          position: 'fixed',
          top: cursorPos.y,
          left: cursorPos.x,
          transform: `translate(-50%, -50%) scale(${isHovered ? 2.4 : 1})`,
          width: isHovered ? '42px' : '12px',
          height: isHovered ? '42px' : '12px',
          borderRadius: '50%',
          backgroundColor: isHovered ? 'rgba(215, 107, 74, 0.25)' : 'var(--accent-warm)',
          border: isHovered ? '1px solid var(--accent-warm)' : 'none',
          backdropFilter: isHovered ? 'blur(4px)' : 'none',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), width 0.2s, height 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isHovered && cursorLabel && (
          <span
            style={{
              fontSize: '8px',
              fontFamily: 'var(--font-grotesk)',
              letterSpacing: '0.05em',
              fontWeight: 700,
              color: 'var(--text-main)',
              textTransform: 'uppercase',
              pointerEvents: 'none'
            }}
          >
            {cursorLabel}
          </span>
        )}
      </div>
    </>
  );
};
