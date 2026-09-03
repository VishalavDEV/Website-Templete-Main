import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ArrowRight, Eye, Sun } from 'lucide-react';

export default function HeroFlythrough({ currentTheme, onExploreProjects, onOpenRfq }) {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cameraMode, setCameraMode] = useState('orbit');
  const [sunTime, setSunTime] = useState(14.0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let angle = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 560;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const isLight = currentTheme === 'light';

    const render = () => {
      if (isPlaying) {
        angle += 0.006;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 40;

      // Canvas background
      ctx.fillStyle = isLight ? '#f8fafc' : '#09090b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle atmospheric gradient
      const gradient = ctx.createRadialGradient(cx, cy, 30, cx, cy, canvas.width * 0.6);
      if (isLight) {
        gradient.addColorStop(0, 'rgba(15, 23, 42, 0.04)');
        gradient.addColorStop(1, 'rgba(248, 250, 252, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(9, 9, 11, 0)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Minimal Ground Circle
      ctx.strokeStyle = isLight ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(cx, cy + 160, 240, 70, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Parametric Tower Slices
      const storeys = 40;
      const baseRadius = 82;
      const heightStep = 8;

      const levels = [];
      for (let i = 0; i < storeys; i++) {
        const t = i / storeys;
        const currentRadius = baseRadius * (1 - t * 0.72) + Math.sin(t * Math.PI) * 14;
        const twist = t * Math.PI * 1.5 + (cameraMode === 'orbit' ? angle : 1.2);
        const y = cy + 140 - i * heightStep;
        levels.push({ y, radius: currentRadius, twist, t });
      }

      // Clean Diagrid Structural Lines
      ctx.strokeStyle = isLight ? 'rgba(15, 23, 42, 0.45)' : 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 1.2;

      const ribCount = 6;
      for (let rib = 0; rib < ribCount; rib++) {
        ctx.beginPath();
        levels.forEach((lvl, idx) => {
          const ribAngle = lvl.twist + (rib * (Math.PI * 2 / ribCount));
          const x = cx + Math.cos(ribAngle) * lvl.radius;
          const rx = lvl.radius * 0.32;
          const y = lvl.y + Math.sin(ribAngle) * rx;

          if (idx === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();
      }

      // Minimalist Floor Plates
      levels.forEach((lvl, idx) => {
        if (idx % 3 === 0 || idx === levels.length - 1) {
          ctx.beginPath();
          ctx.ellipse(cx, lvl.y, lvl.radius, lvl.radius * 0.3, 0, 0, Math.PI * 2);
          ctx.strokeStyle = isLight ? 'rgba(15, 23, 42, 0.2)' : 'rgba(255, 255, 255, 0.2)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Spire Pinnacle
      const topLevel = levels[levels.length - 1];
      ctx.beginPath();
      ctx.moveTo(cx, topLevel.y);
      ctx.lineTo(cx, topLevel.y - 50);
      ctx.strokeStyle = isLight ? '#0f172a' : '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isPlaying, cameraMode, sunTime, currentTheme]);

  return (
    <section id="hero" style={{ minHeight: '90vh', paddingTop: '120px', paddingBottom: '70px', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column */}
          <div>
            <div className="section-tag" style={{ marginBottom: '20px' }}>
              Architectural Studio & Engineering
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 4.4vw, 3.8rem)', lineHeight: 1.12, marginBottom: '22px', fontWeight: 800, letterSpacing: '-0.03em' }}>
              Designing the next generation of skyrises.
            </h1>

            <p style={{ fontSize: '1.12rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '36px', maxWidth: '520px' }}>
              We combine computational design, aerodynamic testing, and sustainable engineering to create enduring architectural landmarks.
            </p>

            {/* Clean Metrics Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid var(--border-subtle)' }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', lineHeight: 1 }}>
                  342m
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '6px' }}>
                  Pinnacle Height
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', lineHeight: 1 }}>
                  -44%
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '6px' }}>
                  Wind Resistance
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', lineHeight: 1 }}>
                  Net-Zero
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '6px' }}>
                  Energy Profile
                </div>
              </div>
            </div>

            {/* Clean Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button onClick={onExploreProjects} className="btn btn-primary" style={{ padding: '14px 28px' }}>
                <Eye size={16} /> View Selected Works
              </button>

              <a href="#estimator" className="btn btn-secondary" style={{ padding: '14px 24px' }}>
                Project Estimator <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Viewport */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-surface)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              height: '520px'
            }}
          >
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

            {/* Minimal In-Canvas Overlay */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                background: 'var(--bg-glass)',
                padding: '6px 12px',
                borderRadius: '4px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              3D Parametric Model // 60 FPS
            </div>

            {/* Minimal Viewport Controls */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'var(--bg-glass)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-main)'
                }}
                title={isPlaying ? 'Pause Rotation' : 'Resume Rotation'}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setCameraMode('orbit')}
                  style={{
                    background: cameraMode === 'orbit' ? 'var(--accent-primary)' : 'transparent',
                    color: cameraMode === 'orbit' ? 'var(--accent-primary-text)' : 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Orbit
                </button>
                <button
                  onClick={() => setCameraMode('spire')}
                  style={{
                    background: cameraMode === 'spire' ? 'var(--accent-primary)' : 'transparent',
                    color: cameraMode === 'spire' ? 'var(--accent-primary-text)' : 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Pinnacle
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
