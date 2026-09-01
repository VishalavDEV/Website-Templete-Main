import React, { useEffect, useRef, useState } from 'react';

export default function DynamicBackground() {
  const canvasRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // 120 Fiery Gaming Ember & Ruby Quantum Particles
    const particleCount = 110;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.4 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.6 - 0.2,
      opacity: Math.random() * 0.75 + 0.25,
      color: Math.random() > 0.6 ? '#FF003C' : (Math.random() > 0.3 ? '#EF4444' : '#F97316'),
    }));

    const render = () => {
      time += 0.016;
      const w = canvas.width;
      const h = canvas.height;

      // Dark Obsidian clear with fiery red undertone
      ctx.fillStyle = 'rgba(4, 2, 4, 0.28)';
      ctx.fillRect(0, 0, w, h);

      // Gaming Embers & Quantum Red Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = h;
          p.x = Math.random() * w;
        }
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * (0.6 + 0.4 * Math.sin(time * 2.5 + p.x));
        ctx.shadowBlur = 14;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      // Ambient Gaming Red & Ruby Nebulae
      const centerX = w * 0.5 + mouseOffset.x * 25;
      const centerY = h * 0.45 + mouseOffset.y * 18;

      const crimsonNebula = ctx.createRadialGradient(
        centerX - 160, centerY - 60, 40,
        centerX - 160, centerY - 60, 520
      );
      crimsonNebula.addColorStop(0, 'rgba(255, 0, 60, 0.18)');
      crimsonNebula.addColorStop(0.5, 'rgba(239, 68, 68, 0.04)');
      crimsonNebula.addColorStop(1, 'transparent');
      ctx.fillStyle = crimsonNebula;
      ctx.fillRect(0, 0, w, h);

      const amberNebula = ctx.createRadialGradient(
        centerX + 180, centerY - 20, 40,
        centerX + 180, centerY - 20, 480
      );
      amberNebula.addColorStop(0, 'rgba(249, 115, 22, 0.14)');
      amberNebula.addColorStop(0.5, 'rgba(225, 29, 72, 0.03)');
      amberNebula.addColorStop(1, 'transparent');
      ctx.fillStyle = amberNebula;
      ctx.fillRect(0, 0, w, h);

      // Kinetic Gaming Red Scanline
      const scanY = ((Math.sin(time * 1.4) + 1) / 2) * h;
      const scanGrad = ctx.createLinearGradient(0, scanY, w, scanY);
      scanGrad.addColorStop(0, 'transparent');
      scanGrad.addColorStop(0.3, 'rgba(255, 0, 60, 0.2)');
      scanGrad.addColorStop(0.5, 'rgba(239, 68, 68, 0.4)');
      scanGrad.addColorStop(0.7, 'rgba(255, 0, 60, 0.2)');
      scanGrad.addColorStop(1, 'transparent');

      ctx.strokeStyle = scanGrad;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(w, scanY);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseOffset]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-obsidian-950">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-95 transition-opacity duration-1000" />
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-obsidian-950 via-obsidian-950/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-obsidian-950 via-obsidian-950/90 to-transparent" />
      
      {/* Ambient Red Glow Halo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyber-red/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
