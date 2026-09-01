import React, { useRef, useEffect } from 'react';

export default function CraneSimulation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;

    function resize() {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    // Tower Cranes configuration
    const cranes = [
      {
        xRatio: 0.86,
        baseYRatio: 0.98,
        mastHeight: 340,
        jibLength: 200,
        counterJib: 70,
        angle: 0.2,
        angleSpeed: 0.0025,
        angleRange: [-0.3, 0.4],
        hookX: 140,
        hookY: 170,
        hookSpeed: 0.35,
        hookDir: 1,
        hasLoad: true
      },
      {
        xRatio: 0.95,
        baseYRatio: 0.96,
        mastHeight: 280,
        jibLength: 160,
        counterJib: 55,
        angle: -0.15,
        angleSpeed: 0.002,
        angleRange: [-0.4, 0.2],
        hookX: 100,
        hookY: 130,
        hookSpeed: 0.25,
        hookDir: -1,
        hasLoad: true
      }
    ];

    // Ambient twilight dust particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 600,
      r: Math.random() * 2 + 0.8,
      speedY: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.6 + 0.2
    }));

    let time = 0;

    function animate() {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw floating ambient dust particles
      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 140, 0, ${p.alpha * 0.7})`;
        ctx.fill();
      });

      // 2. Draw working tower cranes
      cranes.forEach((crane, idx) => {
        const baseX = width * crane.xRatio;
        const baseY = height * crane.baseYRatio;
        const mastTopY = baseY - crane.mastHeight;

        // Update slewing angle
        crane.angle += crane.angleSpeed;
        if (crane.angle > crane.angleRange[1] || crane.angle < crane.angleRange[0]) {
          crane.angleSpeed *= -1;
        }

        // Update hook hoist cable
        crane.hookY += crane.hookSpeed * crane.hookDir;
        if (crane.hookY > 240 || crane.hookY < 120) {
          crane.hookDir *= -1;
        }

        // Draw Vertical Lattice Mast
        ctx.strokeStyle = '#e65100';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(baseX - 10, baseY);
        ctx.lineTo(baseX - 10, mastTopY);
        ctx.moveTo(baseX + 10, baseY);
        ctx.lineTo(baseX + 10, mastTopY);
        ctx.stroke();

        // Mast cross-bracing
        ctx.strokeStyle = 'rgba(255, 107, 0, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let y = baseY; y > mastTopY; y -= 24) {
          ctx.moveTo(baseX - 10, y);
          ctx.lineTo(baseX + 10, y - 12);
          ctx.moveTo(baseX + 10, y);
          ctx.lineTo(baseX - 10, y - 12);
        }
        ctx.stroke();

        // Operator Cabin & Turntable
        ctx.fillStyle = '#ff6b00';
        ctx.fillRect(baseX - 12, mastTopY - 14, 24, 16);

        // Apex Tower Peak (A-Frame)
        const apexX = baseX;
        const apexY = mastTopY - 42;
        ctx.strokeStyle = '#e65100';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(baseX - 12, mastTopY);
        ctx.lineTo(apexX, apexY);
        ctx.lineTo(baseX + 12, mastTopY);
        ctx.stroke();

        // Flashing Red Hazard Strobe on Crane Apex
        const flash = Math.sin(time * 6 + idx) > 0.3;
        if (flash) {
          ctx.beginPath();
          ctx.arc(apexX, apexY - 2, 5, 0, Math.PI * 2);
          ctx.fillStyle = '#ff1744';
          ctx.shadowColor = '#ff1744';
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Slewing Jib & Counterweight
        ctx.save();
        ctx.translate(baseX, mastTopY);
        ctx.rotate(crane.angle);

        // Main Working Jib Line
        ctx.strokeStyle = '#ff6b00';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(crane.jibLength, 0);
        ctx.stroke();

        // Counterweight Jib
        ctx.strokeStyle = '#d84315';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-crane.counterJib, 0);
        ctx.stroke();

        // Counterweight Concrete Blocks
        ctx.fillStyle = '#424242';
        ctx.fillRect(-crane.counterJib + 5, -8, 22, 14);

        // Cable Stay Ties to Apex
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(apexX - baseX, apexY - mastTopY);
        ctx.lineTo(crane.jibLength * 0.6, 0);
        ctx.moveTo(apexX - baseX, apexY - mastTopY);
        ctx.lineTo(-crane.counterJib + 10, 0);
        ctx.stroke();

        // Trolley & Hoist Cable
        const trolleyX = crane.hookX;
        ctx.fillStyle = '#ffab00';
        ctx.fillRect(trolleyX - 6, -4, 12, 8);

        // Cable hanging down
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(trolleyX, 4);
        ctx.lineTo(trolleyX, crane.hookY);
        ctx.stroke();

        // Hook Block & Steel I-Beam Load
        ctx.fillStyle = '#ff6b00';
        ctx.fillRect(trolleyX - 5, crane.hookY, 10, 8);

        if (crane.hasLoad) {
          ctx.fillStyle = '#78909c';
          ctx.fillRect(trolleyX - 25, crane.hookY + 10, 50, 8);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-crane-canvas"
      id="craneAnimationCanvas"
    />
  );
}
