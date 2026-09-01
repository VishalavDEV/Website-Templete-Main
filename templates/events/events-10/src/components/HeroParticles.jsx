import React, { useEffect, useRef } from 'react';

export const HeroParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particleCount = 45;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: Math.random() > 0.4 ? '#ff4d00' : '#ff7518',
        vx: (Math.random() - 0.5) * 0.8,
        vy: -Math.random() * 1.5 - 0.5,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    // Speed lines
    const speedLines = [];
    for (let i = 0; i < 15; i++) {
      speedLines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 150 + 50,
        speed: Math.random() * 4 + 2,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particle embers
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      // Draw speed lines (diagonal dynamic lines)
      speedLines.forEach((l) => {
        l.y += l.speed;
        l.x -= l.speed * 0.5;

        if (l.y > canvas.height || l.x < -100) {
          l.y = -50;
          l.x = Math.random() * (canvas.width + 200);
        }

        ctx.save();
        ctx.strokeStyle = `rgba(255, 77, 0, ${l.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x - l.length * 0.5, l.y + l.length);
        ctx.stroke();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles-canvas" />;
};
