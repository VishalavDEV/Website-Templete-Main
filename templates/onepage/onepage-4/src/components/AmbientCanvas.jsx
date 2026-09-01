import React, { useEffect, useRef } from 'react';

export default function AmbientCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Optimized particle count: 40 max instead of 75 (72% fewer iteration pairs)
    const particleCount = Math.min(Math.floor(width / 32), 40);
    const particles = [];
    const mouse = { x: -9999, y: -9999, radius: 200, radiusSq: 40000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const colors = [
      'rgba(0, 102, 255, 0.45)',  // electric blue
      'rgba(124, 58, 237, 0.45)', // violet
      'rgba(6, 182, 212, 0.45)',  // cyan
      'rgba(225, 29, 72, 0.35)'   // pink
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const maxDistSq = 140 * 140; // 19600
    let lastTime = performance.now();
    const targetFps = 60;
    const frameInterval = 1000 / targetFps;

    const render = (now) => {
      animationFrameId = requestAnimationFrame(render);

      const delta = now - lastTime;
      if (delta < frameInterval) return; // Throttle to 60 FPS
      lastTime = now - (delta % frameInterval);

      if (document.hidden) return; // Skip rendering if tab is hidden

      ctx.clearRect(0, 0, width, height);

      // Draw particle nodes and connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect particles within proximity distance (fast squared check)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 102, 255, ${0.16 * (1 - dist / 140)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Mouse proximity reaction (fast squared check)
        if (mouse.x > 0) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdistSq = mdx * mdx + mdy * mdy;

          if (mdistSq < mouse.radiusSq) {
            const mdist = Math.sqrt(mdistSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.28 * (1 - mdist / mouse.radius)})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
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
        zIndex: 0,
        willChange: 'transform'
      }}
    />
  );
}
