import React, { useEffect, useRef, useState } from 'react';

export default function WeatherAtmosphere({ stormActive = true, intensity = 'heavy' }) {
  const canvasRef = useRef(null);
  const [lightningFlash, setLightningFlash] = useState(false);
  const [boltPaths, setBoltPaths] = useState([]);

  useEffect(() => {
    if (!stormActive) return;

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

    // Raindrop Particle System
    const dropCount = intensity === 'heavy' ? 220 : intensity === 'medium' ? 120 : 60;
    const raindrops = [];
    const splashes = [];

    for (let i = 0; i < dropCount; i++) {
      raindrops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 18 + 12,
        speed: Math.random() * 14 + 16,
        opacity: Math.random() * 0.4 + 0.25,
        thickness: Math.random() * 1.5 + 0.8,
        drift: -2.5 // Diagonal rain angle
      });
    }

    // Lightning Generator
    let lightningTimer = null;
    const triggerLightning = () => {
      // Create branching lightning bolt points
      const startX = Math.random() * (width * 0.7) + width * 0.15;
      const startY = Math.random() * 40;
      const branches = [];

      let curX = startX;
      let curY = startY;
      const mainBolt = [{ x: curX, y: curY }];

      const segments = Math.floor(Math.random() * 8) + 12;
      for (let s = 0; s < segments; s++) {
        curX += (Math.random() - 0.5) * 60;
        curY += (height * 0.6) / segments + Math.random() * 15;
        mainBolt.push({ x: curX, y: curY });

        // Branching fork
        if (Math.random() > 0.65) {
          const fork = [{ x: curX, y: curY }];
          let fx = curX;
          let fy = curY;
          for (let f = 0; f < 5; f++) {
            fx += (Math.random() - 0.4) * 40;
            fy += 25 + Math.random() * 15;
            fork.push({ x: fx, y: fy });
          }
          branches.push(fork);
        }
      }

      setBoltPaths([mainBolt, ...branches]);
      setLightningFlash(true);

      // Flash decay
      setTimeout(() => {
        setLightningFlash(false);
        setBoltPaths([]);
      }, 180);

      // Double flash echo occasionally
      if (Math.random() > 0.45) {
        setTimeout(() => {
          setLightningFlash(true);
          setTimeout(() => {
            setLightningFlash(false);
          }, 120);
        }, 260);
      }

      // Schedule next lightning strike
      const nextDelay = Math.random() * 4000 + 3500;
      lightningTimer = setTimeout(triggerLightning, nextDelay);
    };

    lightningTimer = setTimeout(triggerLightning, 2000);

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Raindrops
      ctx.strokeStyle = 'rgba(210, 230, 255, 0.6)';
      ctx.lineWidth = 1.2;

      for (let i = 0; i < raindrops.length; i++) {
        const drop = raindrops[i];

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.drift, drop.y + drop.length);
        ctx.strokeStyle = `rgba(180, 210, 245, ${drop.opacity})`;
        ctx.lineWidth = drop.thickness;
        ctx.stroke();

        drop.x += drop.drift;
        drop.y += drop.speed;

        // Splashes at bottom
        if (drop.y > height - 20) {
          if (Math.random() > 0.7) {
            splashes.push({
              x: drop.x,
              y: height - Math.random() * 15,
              radius: Math.random() * 2 + 1,
              opacity: 0.7,
              vx: (Math.random() - 0.5) * 4,
              vy: -(Math.random() * 3 + 2)
            });
          }
          drop.y = -drop.length;
          drop.x = Math.random() * width;
        }
      }

      // Draw Splashes
      for (let j = splashes.length - 1; j >= 0; j--) {
        const s = splashes[j];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190, 220, 255, ${s.opacity})`;
        ctx.fill();

        s.x += s.vx;
        s.y += s.vy;
        s.opacity -= 0.04;
        if (s.opacity <= 0) {
          splashes.splice(j, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (lightningTimer) clearTimeout(lightningTimer);
    };
  }, [stormActive, intensity]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 4,
      overflow: 'hidden'
    }}>
      {/* Dynamic Rain Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%'
        }}
      />

      {/* Atmospheric Storm Clouds Layers (Top Gradient & Drifting Mist) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '420px',
        background: 'linear-gradient(180deg, rgba(8, 12, 18, 0.92) 0%, rgba(14, 18, 26, 0.7) 50%, transparent 100%)',
        zIndex: 1
      }} />

      {/* Drifting Volumetric Cloud Mist 1 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-30%',
        width: '160%',
        height: '380px',
        background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(35, 45, 60, 0.45), transparent 75%)',
        filter: 'blur(30px)',
        animation: 'driftCloud 45s ease-in-out infinite alternate',
        zIndex: 2
      }} />

      {/* Drifting Volumetric Cloud Mist 2 */}
      <div style={{
        position: 'absolute',
        top: 40,
        right: '-20%',
        width: '140%',
        height: '340px',
        background: 'radial-gradient(ellipse 50% 40% at 50% 40%, rgba(25, 32, 45, 0.5), transparent 70%)',
        filter: 'blur(40px)',
        animation: 'driftCloudReverse 55s ease-in-out infinite alternate',
        zIndex: 2
      }} />

      {/* Lightning Flash Overlay - Illuminates Clouds and Screen */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 20%, rgba(200, 230, 255, 0.48) 0%, rgba(130, 180, 255, 0.25) 50%, rgba(0,0,0,0) 100%)',
        opacity: lightningFlash ? 1 : 0,
        transition: 'opacity 0.08s ease-out',
        zIndex: 5,
        mixBlendMode: 'screen'
      }} />

      {/* Procedural Lightning Bolts SVG */}
      {boltPaths.length > 0 && (
        <svg style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 6,
          filter: 'drop-shadow(0 0 16px rgba(0, 229, 255, 0.95)) drop-shadow(0 0 35px rgba(255, 255, 255, 0.8))'
        }}>
          {boltPaths.map((path, idx) => {
            const d = path.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`, '');
            return (
              <g key={idx}>
                {/* Outer Glow Path */}
                <path
                  d={d}
                  fill="none"
                  stroke="rgba(0, 229, 255, 0.75)"
                  strokeWidth={idx === 0 ? "5" : "3"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Core White Hot Path */}
                <path
                  d={d}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={idx === 0 ? "2.5" : "1.5"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            );
          })}
        </svg>
      )}

      <style>{`
        @keyframes driftCloud {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(15%) translateY(20px); }
        }
        @keyframes driftCloudReverse {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-12%) translateY(-15px); }
        }
      `}</style>
    </div>
  );
}
