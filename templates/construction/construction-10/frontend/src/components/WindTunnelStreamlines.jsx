import React, { useState, useEffect, useRef } from 'react';
import { Wind, Sliders } from 'lucide-react';

export default function WindTunnelStreamlines({ currentTheme }) {
  const canvasRef = useRef(null);
  const [shape, setShape] = useState('aerofoil'); // 'aerofoil', 'helical', 'standard-box'
  const [windSpeed, setWindSpeed] = useState(18); // m/s
  const [turbulence, setTurbulence] = useState(15); // %
  const [particleDensity, setParticleDensity] = useState(120);

  // Computed CFD telemetry
  const cd = shape === 'aerofoil' ? (0.24 + (turbulence * 0.002)).toFixed(3) :
             shape === 'helical' ? (0.31 + (turbulence * 0.003)).toFixed(3) :
             (0.85 + (turbulence * 0.008)).toFixed(3);

  const shearForce = ((windSpeed * windSpeed * 0.6125 * (parseFloat(cd))) / 10).toFixed(1);
  const vortexHz = ((windSpeed * 0.18) / 35).toFixed(2);
  const powerDensity = (0.5 * 1.225 * Math.pow(windSpeed, 3)).toFixed(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 420;
    };
    resize();
    window.addEventListener('resize', resize);

    const isLight = currentTheme === 'light';

    // Particle Array
    const particles = [];
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleDensity; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: (windSpeed / 10) * (0.8 + Math.random() * 0.4),
          size: 1.5 + Math.random() * 2,
          alpha: 0.2 + Math.random() * 0.6
        });
      }
    };
    initParticles();

    const render = () => {
      ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.35)' : 'rgba(9, 9, 11, 0.35)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width * 0.45;
      const cy = canvas.height * 0.5;

      // Draw Building Cross-Section
      ctx.save();
      if (shape === 'aerofoil') {
        ctx.beginPath();
        ctx.ellipse(cx, cy, 65, 38, 0, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#0f172a' : '#18181b';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#000000' : '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, 14, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#ffffff' : '#ffffff';
        ctx.fill();
      } else if (shape === 'helical') {
        ctx.beginPath();
        ctx.roundRect(cx - 45, cy - 45, 90, 90, [18, 35, 18, 35]);
        ctx.fillStyle = isLight ? '#0f172a' : '#18181b';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#000000' : '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.rect(cx - 50, cy - 50, 100, 100);
        ctx.fillStyle = isLight ? '#334155' : '#27272a';
        ctx.fill();
        ctx.strokeStyle = isLight ? '#0f172a' : '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.restore();

      // Update and Draw Particles
      particles.forEach((p) => {
        p.x += p.speed * (windSpeed / 12);

        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = shape === 'aerofoil' ? 70 : shape === 'helical' ? 68 : 80;

        if (dist < radius) {
          const force = (radius - dist) / radius;
          if (dy > 0) p.y += force * 4.5 * (1 + turbulence / 50);
          else p.y -= force * 4.5 * (1 + turbulence / 50);

          if (dx > 0 && shape === 'standard-box') {
            p.y += (Math.random() - 0.5) * (turbulence * 0.4);
          }
        }

        if (p.x > canvas.width) {
          p.x = 0;
          p.y = Math.random() * canvas.height;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? `rgba(15, 23, 42, ${p.alpha})` : `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [shape, windSpeed, turbulence, particleDensity, currentTheme]);

  return (
    <section id="wind-tunnel" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Wind size={14} /> COMPUTATIONAL FLUID DYNAMICS
          </div>
          <h2 className="section-title">
            Aerodynamic Boundary Layer Simulator
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Simulate real-time laminar flow, vortex-shedding mitigation, and wind wake dissipation across parametric building geometries.
          </p>
        </div>

        {/* Interactive CFD Dashboard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '32px', alignItems: 'center' }} className="cfd-grid">
          
          {/* CFD Canvas Display */}
          <div
            style={{
              background: 'var(--canvas-bg)',
              border: '1px solid var(--border-strong)',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <canvas ref={canvasRef} style={{ width: '100%', height: '420px', display: 'block' }} />

            {/* In-Canvas Telemetry Badges */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                display: 'flex',
                gap: '10px',
                pointerEvents: 'none'
              }}
            >
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-main)',
                  fontWeight: 700,
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                FLOW: LAMINAR CFD 2D
              </div>

              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-main)',
                  fontWeight: 700,
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                DRAG: Cd {cd}
              </div>
            </div>
          </div>

          {/* Controls & Realtime Telemetry Panel */}
          <div className="aero-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)' }}>
              <Sliders size={18} /> Wind Tunnel Parameters
            </h3>

            {/* Shape Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>
                BUILDING AERODYNAMIC PROFILE
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                <button
                  onClick={() => setShape('aerofoil')}
                  style={{
                    background: shape === 'aerofoil' ? 'var(--accent-primary)' : 'var(--bg-surface)',
                    color: shape === 'aerofoil' ? 'var(--accent-primary-text)' : 'var(--text-main)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: '6px',
                    padding: '8px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Aerofoil Ellipse
                </button>

                <button
                  onClick={() => setShape('helical')}
                  style={{
                    background: shape === 'helical' ? 'var(--accent-primary)' : 'var(--bg-surface)',
                    color: shape === 'helical' ? 'var(--accent-primary-text)' : 'var(--text-main)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: '6px',
                    padding: '8px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Twisted Helix
                </button>

                <button
                  onClick={() => setShape('standard-box')}
                  style={{
                    background: shape === 'standard-box' ? 'var(--accent-primary)' : 'var(--bg-surface)',
                    color: shape === 'standard-box' ? 'var(--accent-primary-text)' : 'var(--text-main)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: '6px',
                    padding: '8px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Standard Box
                </button>
              </div>
            </div>

            {/* Wind Velocity Slider */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  WIND VELOCITY (v)
                </span>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', fontWeight: 700 }}>
                  {windSpeed} m/s ({Math.round(windSpeed * 3.6)} km/h)
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="38"
                value={windSpeed}
                onChange={(e) => setWindSpeed(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
              />
            </div>

            {/* Turbulence Intensity Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  ATMOSPHERIC TURBULENCE (I)
                </span>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', fontWeight: 700 }}>
                  {turbulence}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={turbulence}
                onChange={(e) => setTurbulence(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
              />
            </div>

            {/* Realtime Telemetry Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', background: 'var(--card-subtle-bg)', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  BASE SHEAR MOMENT
                </div>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                  {shearForce} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MN·m</span>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  VORTEX SHEDDING
                </div>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                  {vortexHz} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Hz</span>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  WIND ENERGY DENSITY
                </div>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                  {powerDensity} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>W/m²</span>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  SAFETY TOLERANCE
                </div>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                  {shape === 'standard-box' ? '1.34x (High)' : '2.85x (Optimal)'}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .cfd-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
