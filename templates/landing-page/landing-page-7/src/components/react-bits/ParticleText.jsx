import React, { useEffect, useRef, useState } from 'react';

/**
 * ParticleText — Architectural Particle Convergence Transition
 * Thousands of mineral dust particles converge into the word 'SPACE'
 */
export const ParticleText = ({ text = 'SPACE' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInView) return;
    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Offscreen canvas to sample text pixels
    const offCanvas = document.createElement('canvas');
    offCanvas.width = width;
    offCanvas.height = height;
    const offCtx = offCanvas.getContext('2d');

    const fontSize = Math.min(width * 0.22, 160);
    offCtx.fillStyle = '#302825';
    offCtx.font = `800 ${fontSize}px 'Syne', sans-serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText(text, width / 2, height / 2);

    const imgData = offCtx.getImageData(0, 0, width, height).data;
    const targets = [];
    const step = 6; // density step

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        if (imgData[index + 3] > 128) {
          targets.push({ x, y });
        }
      }
    }

    const particles = targets.map((target) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 300 + 150;
      return {
        x: width / 2 + Math.cos(angle) * distance,
        y: height / 2 + Math.sin(angle) * distance,
        targetX: target.x,
        targetY: target.y,
        vx: 0,
        vy: 0,
        color: Math.random() > 0.3 ? '#302825' : '#A96750', // Deep brown or Clay
        size: Math.random() * 2 + 1.2,
      };
    });

    let animId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let settledCount = 0;
      particles.forEach((p) => {
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx = (p.vx + dx * 0.05) * 0.85;
        p.vy = (p.vy + dy * 0.05) * 0.85;
        p.x += p.vx;
        p.y += p.vy;

        if (Math.hypot(dx, dy) < 0.5) settledCount++;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animId);
  }, [isInView, text]);

  return (
    <div 
      ref={containerRef} 
      className="particle-text-transition"
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(180px, 28vh, 320px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-ivory)',
      }}
      aria-label={`Architectural particle convergence: ${text}`}
    >
      <div 
        style={{
          position: 'absolute',
          top: '12px',
          left: 'var(--grid-margin)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-clay)',
        }}
      >
        [ TECTONIC TRANSITION // 004 ]
      </div>
      <canvas 
        ref={canvasRef} 
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
