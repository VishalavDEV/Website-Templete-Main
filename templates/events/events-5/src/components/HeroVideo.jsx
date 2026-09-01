import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, Shield, ArrowRight } from 'lucide-react';

export const HeroVideo = () => {
  const canvasRef = useRef(null);

  // Water droplet & light streak particle canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particles array
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 1,
      speedY: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? '#7cff4f' : '#25bfff'
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: 'calc(100vh - 40px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#07090b'
    }}>
      {/* Background Video Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1920&q=80"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.55) contrast(1.15)'
          }}
        >
          {/* High performance automotive detailing video links */}
          <source src="https://cdn.coverr.co/videos/coverr-washing-a-black-car-4682/1080p.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-washing-a-black-car-with-foam-41551-large.mp4" type="video/mp4" />
        </video>

        {/* Dark Cinematic Vignette & Radial Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(7, 9, 11, 0.4) 0%, rgba(7, 9, 11, 0.88) 85%)',
          pointerEvents: 'none'
        }} />

        {/* Diagonal Carbon Streak Lines */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(124,255,79,0.03) 0, rgba(124,255,79,0.03) 1px, transparent 0, transparent 50px)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Hero Content Layer */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        paddingTop: '60px',
        paddingBottom: '80px',
        maxWidth: '900px'
      }}>
        {/* Small Top Label */}
        <div className="hero-animate-1" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 18px',
          borderRadius: '99px',
          background: 'rgba(124, 255, 79, 0.12)',
          border: '1px solid rgba(124, 255, 79, 0.4)',
          color: '#7cff4f',
          fontSize: '0.8rem',
          fontWeight: '800',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: '24px',
          boxShadow: '0 0 20px rgba(124, 255, 79, 0.2)'
        }}>
          <Sparkles size={14} /> PREMIUM AUTO CARE
        </div>

        {/* Main Heading */}
        <h1 className="hero-animate-2" style={{
          fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
          fontWeight: '900',
          letterSpacing: '-0.02em',
          color: '#f5f7f8',
          lineHeight: 1.05,
          marginBottom: '20px',
          textShadow: '0 10px 40px rgba(0,0,0,0.8)'
        }}>
          YOUR CAR.<br />
          <span style={{
            background: 'linear-gradient(135deg, #7cff4f 0%, #25bfff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 25px rgba(124,255,79,0.3))'
          }}>
            OUR CRAFT.
          </span>
        </h1>

        {/* Supporting text */}
        <p className="hero-animate-3" style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          color: '#b9c0c5',
          maxWidth: '680px',
          margin: '0 auto 36px auto',
          fontWeight: '400',
          lineHeight: '1.6'
        }}>
          From deep foam washes to flawless paint transformations, AQUAVEXA gives every vehicle the care it deserves.
        </p>

        {/* Action Buttons */}
        <div className="hero-animate-4" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <Link to="/booking" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
            BOOK A SERVICE <ArrowRight size={18} />
          </Link>
          <Link to="/services" className="btn-secondary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
            EXPLORE SERVICES
          </Link>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        color: '#b9c0c5',
        fontSize: '0.72rem',
        fontWeight: '700',
        letterSpacing: '0.2em',
        textTransform: 'uppercase'
      }}>
        <span>SCROLL TO DISCOVER</span>
        <ChevronDown size={18} className="animate-bounce-slow" style={{ color: '#7cff4f' }} />
      </div>

      <style>{`
        .hero-animate-1 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
        .hero-animate-2 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both; }
        .hero-animate-3 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }
        .hero-animate-4 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroVideo;
