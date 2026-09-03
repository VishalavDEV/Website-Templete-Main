import React, { useEffect, useRef } from 'react';

/**
 * SplashCursor — Architectural Dust & Drawing Ink Trail
 * Emits subtle particles in Clay, Rust, Stone, and Ivory.
 * Strictly non-blocking (pointer-events: none) and disabled on touch devices.
 */
export const SplashCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Architectural theme palette
    const colors = [
      'rgba(169, 103, 80, 0.45)', // Clay
      'rgba(135, 76, 60, 0.4)',   // Rust
      'rgba(201, 193, 181, 0.35)',// Stone
      'rgba(248, 245, 239, 0.4)', // Ivory
    ];

    const particles = [];
    let lastX = 0;
    let lastY = 0;

    const createParticle = (x, y) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.3;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2.8 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: Math.random() * 0.02 + 0.015,
      });
    };

    const handleMouseMove = (e) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist > 6) {
        for (let i = 0; i < 2; i++) {
          createParticle(
            e.clientX + (Math.random() - 0.5) * 8,
            e.clientY + (Math.random() - 0.5) * 8
          );
        }
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = p.life;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 998,
      }}
      aria-hidden="true"
    />
  );
};
