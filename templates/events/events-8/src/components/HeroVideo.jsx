import React, { useEffect, useRef, useState } from 'react';

const HeroVideo = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Canvas fallback generator for overnight hacker lab visuals
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Grid of glowing student workstation screens in the lab
    const screens = [];
    const cols = 8;
    const rows = 5;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        screens.push({
          x: (w / cols) * i + 40,
          y: (h / rows) * j + 30,
          width: w / cols - 60,
          height: h / rows - 50,
          glow: Math.random() * 0.5 + 0.5,
          speed: Math.random() * 0.02 + 0.01,
          codeLines: Array.from({ length: 8 }, () => Math.random().toString(36).substring(2, 10))
        });
      }
    }

    const renderLabAnimation = () => {
      // Dark indoor lab ambient lighting
      ctx.fillStyle = '#030604';
      ctx.fillRect(0, 0, w, h);

      // Render glowing laptop/monitor screens of student hackers
      screens.forEach((scr) => {
        scr.glow += scr.speed;
        const opacity = (Math.sin(scr.glow) + 1) / 2 * 0.4 + 0.2;

        // Monitor bloom
        ctx.fillStyle = `rgba(0, 255, 102, ${opacity * 0.3})`;
        ctx.fillRect(scr.x - 4, scr.y - 4, scr.width + 8, scr.height + 8);

        // Screen bezel & display
        ctx.fillStyle = 'rgba(8, 16, 12, 0.9)';
        ctx.fillRect(scr.x, scr.y, scr.width, scr.height);
        ctx.strokeStyle = `rgba(0, 255, 102, ${opacity})`;
        ctx.strokeRect(scr.x, scr.y, scr.width, scr.height);

        // Render code lines inside screen
        ctx.fillStyle = `rgba(0, 255, 102, ${opacity + 0.3})`;
        ctx.font = '10px "JetBrains Mono", monospace';
        scr.codeLines.forEach((line, idx) => {
          ctx.fillText(`> ${line}`, scr.x + 8, scr.y + 16 + idx * 12);
        });
      });

      animId = requestAnimationFrame(renderLabAnimation);
    };

    renderLabAnimation();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}
    >
      {/* HTML5 Video Element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: videoLoaded ? 'block' : 'none'
        }}
      >
        <source src="/videos/hackathon-lab.mp4" type="video/mp4" />
      </video>

      {/* Dynamic Animated Canvas Fallback (if MP4 is loading or missing) */}
      {!videoLoaded && (
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      )}

      {/* Dark Black Overlay with Subtle Cyber Green Tint */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(5, 5, 5, 0.75) 0%, rgba(5, 5, 5, 0.85) 60%, #050505 100%), radial-gradient(circle at center, rgba(0, 255, 102, 0.08) 0%, rgba(5, 5, 5, 0.9) 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default HeroVideo;
