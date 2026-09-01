import React, { useEffect, useRef } from 'react';

export default function InteractiveCanvas({ styleVariant = 'immersive', theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
      active: false
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes for Immersive style
    const particleCount = Math.min(Math.floor((width * height) / 14000), 100);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        baseRadius: Math.random() * 2 + 1,
        color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#818cf8' : '#c084fc'
      });
    }

    // Orbs for Gradient style
    const orbs = [
      { x: width * 0.2, y: height * 0.3, vx: 0.4, vy: 0.3, radius: 240, color: 'rgba(236, 72, 153, 0.18)' },
      { x: width * 0.8, y: height * 0.4, vx: -0.3, vy: 0.4, radius: 280, color: 'rgba(139, 92, 246, 0.16)' },
      { x: width * 0.5, y: height * 0.75, vx: 0.2, vy: -0.3, radius: 260, color: 'rgba(6, 182, 212, 0.14)' }
    ];

    // Minimalist Grid settings
    const gridSpacing = 42;

    const isDarkMode = theme === 'dark';

    const render = () => {
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      if (styleVariant === 'minimalist') {
        // Minimalist Kinetic Magnetic Dot Matrix
        const dotColor = isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)';
        const activeColor = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)';

        for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
          for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            let px = x;
            let py = y;
            let radius = 1.2;

            if (dist < mouse.radius && mouse.active) {
              const force = (1 - dist / mouse.radius) * 12;
              px -= (dx / dist) * force;
              py -= (dy / dist) * force;
              radius = 1.2 + (1 - dist / mouse.radius) * 2;
              ctx.fillStyle = activeColor;
            } else {
              ctx.fillStyle = dotColor;
            }

            ctx.beginPath();
            ctx.arc(px, py, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      } else if (styleVariant === 'gradient') {
        // Bold Chromatic Glowing Orbs reacting to Cursor
        orbs.forEach((orb) => {
          orb.x += orb.vx;
          orb.y += orb.vy;

          if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
          if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

          let targetOrbX = orb.x;
          let targetOrbY = orb.y;

          if (mouse.active) {
            const dx = mouse.x - orb.x;
            const dy = mouse.y - orb.y;
            targetOrbX += dx * 0.05;
            targetOrbY += dy * 0.05;
          }

          const grad = ctx.createRadialGradient(
            targetOrbX,
            targetOrbY,
            0,
            targetOrbX,
            targetOrbY,
            orb.radius
          );
          grad.addColorStop(0, orb.color);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(targetOrbX, targetOrbY, orb.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      } else {
        // Immersive WebGL Matrix & Interactive Constellation
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Mouse interaction
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && mouse.active) {
            const force = (1 - dist / mouse.radius) * 4;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
            p.radius = p.baseRadius * 1.8;
          } else {
            p.radius = p.baseRadius;
          }

          ctx.fillStyle = isDarkMode ? p.color : '#0284c7';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();

          // Connect nearby particles with glowing lines
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const pDist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (pDist < 120) {
              const alpha = (1 - pDist / 120) * (isDarkMode ? 0.22 : 0.15);
              ctx.strokeStyle = isDarkMode ? `rgba(56, 189, 248, ${alpha})` : `rgba(2, 132, 199, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [styleVariant, theme]);

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
        zIndex: 0
      }}
    />
  );
}
