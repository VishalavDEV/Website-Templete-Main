import React, { useEffect, useRef } from 'react';

export default function BackgroundMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes configuration
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        color: i % 3 === 0 ? 'rgba(0, 240, 255, ' : i % 3 === 1 ? 'rgba(157, 78, 221, ' : 'rgba(0, 245, 160, ',
        baseAlpha: Math.random() * 0.4 + 0.2,
      });
    }

    let mouse = { x: -1000, y: -1000, radius: 160 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let extraAlpha = 0;
        if (dist < mouse.radius) {
          extraAlpha = (1 - dist / mouse.radius) * 0.4;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha + extraAlpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color.includes('240') ? '#00F0FF' : '#9D4EDD';
        ctx.fill();

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 130;

          if (dist2 < maxDist) {
            const alpha = (1 - dist2 / maxDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(130, 160, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
      {/* Ambient Gradient Orbs */}
      <div
        className="glow-orb glow-orb-cyan"
        style={{
          width: '700px',
          height: '700px',
          top: '-150px',
          left: '10%',
          animation: 'float-slow 12s ease-in-out infinite',
        }}
      />
      <div
        className="glow-orb glow-orb-purple"
        style={{
          width: '800px',
          height: '800px',
          top: '30%',
          right: '-10%',
          animation: 'float-reverse 15s ease-in-out infinite',
        }}
      />
      <div
        className="glow-orb glow-orb-pink"
        style={{
          width: '600px',
          height: '600px',
          bottom: '10%',
          left: '20%',
          animation: 'float-slow 18s ease-in-out infinite',
          opacity: 0.35,
        }}
      />

      {/* Cyber Grid Background */}
      <div
        className="bg-grid-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.6,
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      {/* Interactive Node Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.75,
        }}
      />
    </div>
  );
}
