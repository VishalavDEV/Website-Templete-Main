import React, { useEffect, useRef } from 'react';

export default function BiophilicAtmosphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // 50 Floating Botanical Leaves & Organic Spore Particles
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1.5 + Math.random() * 3.5,
      speedY: 0.4 + Math.random() * 0.8,
      speedX: 0.5 + Math.random() * 0.9,
      oscillation: Math.random() * Math.PI * 2,
      isLeaf: Math.random() > 0.4,
      alpha: 0.25 + Math.random() * 0.5
    }));

    let animId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.015 + p.oscillation) * 0.6 + p.speedX;

        if (p.y > height) {
          p.y = -15;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);

        if (p.isLeaf) {
          // Botanical curved leaf
          ctx.rotate(p.y * 0.02 + p.oscillation);
          ctx.fillStyle = `rgba(116, 198, 157, ${p.alpha})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 2.2, p.size * 0.9, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Bioluminescent spore dot
          ctx.fillStyle = `rgba(233, 196, 106, ${p.alpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="sporeCanvas" />;
}
