import React, { useEffect, useRef } from 'react';
import { useAudio } from '../../context/AudioContext';
import { Play, Pause, Disc } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isPlaying, togglePlay, currentTrack } = useAudio();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    let angle = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.01;

      const centerX = width * 0.7;
      const centerY = height * 0.5;
      const radius = Math.min(width, height) * 0.25;

      ctx.save();
      ctx.translate(centerX, centerY);

      const grad = ctx.createRadialGradient(0, 0, radius * 0.2, 0, 0, radius * 1.2);
      grad.addColorStop(0, '#E89A83');
      grad.addColorStop(0.5, '#D76B4A');
      grad.addColorStop(1, '#241F23');

      ctx.fillStyle = grad;
      ctx.beginPath();
      for (let i = 0; i <= 360; i += 6) {
        const rad = (i * Math.PI) / 180;
        const dist = radius + Math.sin(rad * 4 + angle) * 12;
        const x = Math.cos(rad) * dist;
        const y = Math.sin(rad) * dist;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();

      ctx.restore();
      animFrame = requestAnimationFrame(render);
    };

    animFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 5vw 40px 5vw',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-light)'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.6
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1000px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', opacity: 0.8 }}>
          <Disc size={14} style={{ color: 'var(--accent-warm)' }} />
          <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600 }}>
            ELECTRONIC / AMBIENT / EXPERIMENTAL
          </span>
        </div>

        <h1 style={{ lineHeight: 0.95, marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 9vw, 7.5rem)', color: 'var(--text-main)' }}>
            SOUND
          </div>
          <div style={{ fontFamily: 'var(--font-grotesk)', fontSize: 'clamp(2.4rem, 9vw, 7.5rem)', fontWeight: 700, color: 'var(--accent-warm)' }}>
            LIVES
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(2.4rem, 9vw, 7.5rem)', color: 'var(--wine)' }}>
            BETWEEN
          </div>
          <div style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(2.8rem, 10vw, 8.5rem)', letterSpacing: '0.04em', wordBreak: 'break-word' }}>
            MOMENTS.
          </div>
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={togglePlay}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              backgroundColor: 'var(--bg-dark)',
              color: 'var(--bg-light)',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              borderRadius: '2px'
            }}
          >
            {isPlaying ? <Pause size={16} style={{ color: 'var(--coral)' }} /> : <Play size={16} style={{ color: 'var(--coral)' }} />}
            <span>{isPlaying ? 'PAUSE SOUNDSCAPE' : 'PLAY TRANSMISSION'}</span>
          </button>

          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Now Playing: <strong>{currentTrack.title}</strong>
          </span>
        </div>
      </div>
    </section>
  );
};
