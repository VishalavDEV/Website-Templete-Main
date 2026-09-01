import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Flag, Award, Eye, Volume2, VolumeX, ChevronDown } from 'lucide-react';

export default function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Procedural Canvas Visual Engine (Road perspective, dust particles, crowd cheer glows, light leaks)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles system
    const dustParticles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
      alpha: Math.random() * 0.6 + 0.2
    }));

    // Crowd light cheer points on left & right sides
    const crowdLights = Array.from({ length: 30 }, () => ({
      side: Math.random() > 0.5 ? 'left' : 'right',
      x: Math.random() * (canvas.width * 0.25),
      y: canvas.height * 0.4 + Math.random() * (canvas.height * 0.5),
      size: Math.random() * 4 + 2,
      color: Math.random() > 0.5 ? '#FF6B2C' : '#E92B2B',
      pulse: Math.random() * Math.PI * 2
    }));

    let progress = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      progress += 0.015;

      const horizonY = h * 0.45;
      const vanishingX = w * 0.5;

      // 1. Draw Perspective Road Lines
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 107, 44, 0.15)';
      ctx.lineWidth = 2;

      // Left Road Margin
      ctx.beginPath();
      ctx.moveTo(vanishingX, horizonY);
      ctx.lineTo(-w * 0.2, h);
      ctx.stroke();

      // Right Road Margin
      ctx.beginPath();
      ctx.moveTo(vanishingX, horizonY);
      ctx.lineTo(w * 1.2, h);
      ctx.stroke();

      // Center Lane Dashed Lines
      ctx.setLineDash([20, 20]);
      ctx.lineDashOffset = -progress * 60;
      ctx.strokeStyle = 'rgba(248, 247, 242, 0.2)';
      ctx.beginPath();
      ctx.moveTo(vanishingX, horizonY);
      ctx.lineTo(w * 0.5, h);
      ctx.stroke();
      ctx.restore();

      // 2. Render Crowd Cheering Flashes on sides
      crowdLights.forEach(light => {
        light.pulse += 0.05;
        const alpha = 0.4 + Math.sin(light.pulse) * 0.4;
        const posX = light.side === 'left' ? light.x : w - light.x;

        ctx.save();
        ctx.beginPath();
        ctx.arc(posX, light.y, light.size, 0, Math.PI * 2);
        ctx.fillStyle = light.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = light.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      });

      // 3. Floating Dust & Light Leaks
      dustParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < 0) {
          p.y = h;
          p.x = Math.random() * w;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 107, 44, ' + p.alpha + ')';
        ctx.shadowColor = '#E92B2B';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      });

      // 4. Red/Orange Cinematic Light Flare in top right
      const gradient = ctx.createRadialGradient(w * 0.85, h * 0.15, 10, w * 0.85, h * 0.15, w * 0.5);
      gradient.addColorStop(0, 'rgba(255, 107, 44, 0.22)');
      gradient.addColorStop(0.5, 'rgba(233, 43, 43, 0.08)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - var(--navbar-height))',
        minHeight: '600px',
        maxHeight: '900px',
        overflow: 'hidden',
        background: '#090A0D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Background High Quality Video Loop */}
      <video
        autoPlay
        loop
        muted={isMuted}
        playsInline
        poster="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1920&q=80"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${1.05 + scrollY * 0.0003}) translateY(${scrollY * 0.15}px)`,
          transition: 'transform 0.1s ease-out, filter 0.5s ease',
          filter: 'brightness(0.65) contrast(1.15) saturate(1.1)',
          zIndex: 1
        }}
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-runners-in-a-marathon-41549-large.mp4" 
          type="video/mp4" 
        />
        Your browser does not support HTML5 video.
      </video>

      {/* Interactive HTML5 Canvas FX Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />

      {/* Dark Vignette & Atmospheric Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(180deg, rgba(9,10,13,0.85) 0%, rgba(9,10,13,0.3) 40%, rgba(9,10,13,0.85) 85%, #090A0D 100%),
          radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 30%, rgba(9,10,13,0.7) 100%)
        `,
        zIndex: 3,
        pointerEvents: 'none'
      }} />

      {/* Subtle Film Grain Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 0)',
        backgroundSize: '4px 4px',
        opacity: 0.6,
        zIndex: 4,
        pointerEvents: 'none'
      }} />

      {/* Main Hero Foreground Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: 'var(--max-width)',
        width: '100%',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        {/* Top Location & Date Badge */}
        <div 
          className="badge-tag"
          style={{
            marginBottom: '20px',
            boxShadow: '0 0 20px var(--glow-red)',
            padding: '8px 20px',
            fontSize: '0.82rem'
          }}
        >
          <Flag size={14} /> CHENNAI • 15 NOVEMBER 2026
        </div>

        {/* Main Taglines */}
        <h1 
          className="font-display text-gradient"
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
            lineHeight: 0.92,
            textTransform: 'uppercase',
            marginBottom: '12px',
            letterSpacing: '2px',
            textShadow: '0 10px 40px rgba(0,0,0,0.9)'
          }}
        >
          RUN YOUR MOMENT.
        </h1>

        <h2 
          className="font-heading"
          style={{
            fontSize: 'clamp(1.2rem, 3.5vw, 2.4rem)',
            fontWeight: 800,
            color: 'var(--bright-orange)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '16px',
            textShadow: '0 4px 20px rgba(233,43,43,0.5)'
          }}
        >
          VAYORA RUNFEST 2026
        </h2>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.35rem)',
          color: 'var(--warm-white)',
          maxWidth: '640px',
          margin: '0 auto 36px auto',
          fontWeight: 400,
          opacity: 0.95,
          fontStyle: 'italic',
          letterSpacing: '0.5px',
          textShadow: '0 2px 10px rgba(0,0,0,0.8)'
        }}>
          “Thousands of runners. One road. Unforgettable stories.”
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/register" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
            <Award size={18} /> REGISTER NOW
          </Link>
          <Link to="/race-info" className="btn-secondary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
            <Eye size={18} /> EXPLORE THE RACE
          </Link>
        </div>
      </div>

      {/* Mute/Unmute Audio Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="glass-panel"
        style={{
          position: 'absolute',
          right: '24px',
          top: '24px',
          zIndex: 20,
          padding: '10px',
          border: 'none',
          color: '#FFFFFF',
          cursor: 'pointer',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Toggle sound"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} color="var(--bright-orange)" />}
      </button>

      {/* Scroll Down Indicator */}
      <div 
        className="bounce-indicator"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          color: 'var(--soft-grey)',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          textTransform: 'uppercase'
        }}
      >
        <span>SCROLL TO RUN</span>
        <ChevronDown size={14} color="var(--bright-orange)" />
      </div>
    </section>
  );
}
