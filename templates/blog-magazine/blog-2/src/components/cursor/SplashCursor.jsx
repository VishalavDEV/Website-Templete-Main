import React, { useEffect, useRef } from 'react';

/**
 * SplashCursor - Global Interactive Fluid Particle Layer
 * Configured specifically for ELEMENTAL:
 * - RAINBOW_MODE = false
 * - Warm terracotta/amber palette (#D96C4A & #FFB05A)
 * - Subtle, non-distracting, doesn't block text selection (pointer-events: none)
 * - Auto-disables on prefers-reduced-motion or touch devices
 */
export function SplashCursor({ color = '#d96c4a', secondaryColor = '#ffb05a' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Check for touch primary device
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const maxParticles = 24;
    let mouse = { x: -100, y: -100, prevX: -100, prevY: -100, speed: 0 };
    let animationFrameId = null;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.alpha -= p.decay;
        p.radius *= 0.97;

        if (p.alpha <= 0.01 || p.radius <= 0.5) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.fill();
        ctx.restore();
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        animationFrameId = null;
        ctx.clearRect(0, 0, width, height);
      }
    };

    const startAnimation = () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleMouseMove = (e) => {
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      const dist = Math.hypot(dx, dy);
      mouse.speed = dist;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Spawn smooth fluid particles based on movement
      if (dist > 4) {
        const count = Math.min(Math.floor(dist / 12) + 1, 2);
        for (let i = 0; i < count; i++) {
          if (particles.length < maxParticles) {
            const angle = Math.random() * Math.PI * 2;
            const spread = Math.random() * 6;
            const useSecondary = Math.random() > 0.65;
            particles.push({
              x: mouse.x + Math.cos(angle) * spread,
              y: mouse.y + Math.sin(angle) * spread,
              vx: dx * 0.06 + (Math.random() - 0.5) * 1.0,
              vy: dy * 0.06 + (Math.random() - 0.5) * 1.0,
              radius: Math.random() * 4 + 2.5,
              alpha: 0.3,
              color: useSecondary ? secondaryColor : color,
              decay: Math.random() * 0.02 + 0.015
            });
          }
        }
        startAnimation();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [color, secondaryColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'multiply'
      }}
      aria-hidden="true"
    />
  );
}

export default SplashCursor;
