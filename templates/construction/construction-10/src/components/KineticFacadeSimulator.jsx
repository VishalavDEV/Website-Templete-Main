import React, { useState } from 'react';
import { Layers, Sun, Sparkles } from 'lucide-react';

export default function KineticFacadeSimulator() {
  const [louverAngle, setLouverAngle] = useState(48); // Degrees open (0 = closed, 90 = fully open)
  const [sunAltitude, setSunAltitude] = useState(55); // Degrees in sky

  // Dynamic calculations based on origami angle & sun
  const shgcReduction = Math.min(82, Math.round(35 + (1 - louverAngle / 90) * 45));
  const daylightLux = Math.round(350 + (louverAngle / 90) * 450);
  const powerOutputKw = Math.round(95 + (Math.sin((sunAltitude * Math.PI) / 180) * 85 * (1 - Math.abs(louverAngle - 45) / 90)));
  const hvacSavings = (shgcReduction * 0.72).toFixed(1);

  return (
    <section id="kinetic-facade" style={{ padding: '90px 0', background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="section-tag">
            <Layers size={14} /> RESPONSIVE SMART ENVELOPE
          </div>
          <h2 className="section-title">
            Origami Kinetic Solar Louver Matrix
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Triangulated carbon-fiber kinetic louvers with integrated monocrystalline PV films track real-time solar azimuth to eliminate glare and generate on-site power.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'center' }} className="facade-grid">
          
          {/* Visual Origami Simulation Board */}
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-strong)',
              borderRadius: '12px',
              padding: '32px',
              position: 'relative',
              boxShadow: 'var(--shadow-md)',
              minHeight: '440px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Top Status Bar */}
            <div style={{ position: 'absolute', top: '16px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
                <Sparkles size={13} /> FACADE NODE // ARRAY 12x8 ACTIVE
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                SERVO ACCURACY: ±0.1°
              </span>
            </div>

            {/* Interactive Kinetic Louver Matrix Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
                width: '100%',
                maxWidth: '480px',
                margin: '30px 0'
              }}
            >
              {[...Array(12)].map((_, i) => {
                const foldScale = 0.4 + (louverAngle / 90) * 0.6;
                const panelRotation = ((i % 2 === 0 ? 1 : -1) * (90 - louverAngle) * 0.45);
                const opacity = 0.5 + (louverAngle / 90) * 0.5;

                return (
                  <div
                    key={i}
                    style={{
                      aspectRatio: '1',
                      background: 'var(--card-subtle-bg)',
                      border: '1px solid var(--border-strong)',
                      borderRadius: '6px',
                      position: 'relative',
                      overflow: 'hidden',
                      transform: `perspective(400px) rotateY(${panelRotation}deg) scale(${foldScale})`,
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    {/* Origami Facet Creases */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                        background: 'var(--border-subtle)',
                        borderBottom: '1px solid var(--border-strong)'
                      }}
                    />
                    
                    {/* Solar PV Micro-grid Cell */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '6px',
                        left: '6px',
                        right: '6px',
                        height: '4px',
                        background: 'var(--text-main)',
                        borderRadius: '2px',
                        opacity: opacity
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom Real-time Angle Readout */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
              <div>
                APERTURE: <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>{louverAngle}°</span>
              </div>
              <div style={{ color: 'var(--border-strong)' }}>|</div>
              <div>
                SOLAR INCIDENCE: <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>{sunAltitude}°</span>
              </div>
            </div>
          </div>

          {/* Dynamic Telemetry & Controls */}
          <div className="aero-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)' }}>
              <Sun size={18} /> Kinetic Actuation Controls
            </h3>

            {/* Louver Opening Angle Slider */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  LOUVER OPENING ANGLE (θ)
                </span>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', fontWeight: 700 }}>
                  {louverAngle}° {louverAngle > 60 ? '(High Daylight)' : louverAngle < 30 ? '(Max Shading)' : '(Balanced)'}
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="85"
                value={louverAngle}
                onChange={(e) => setLouverAngle(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
              />
            </div>

            {/* Sun Altitude Position Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  SOLAR ELEVATION ANGLE
                </span>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', fontWeight: 700 }}>
                  {sunAltitude}°
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={sunAltitude}
                onChange={(e) => setSunAltitude(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
              />
            </div>

            {/* Dynamic Real-time Calculations 4-Card Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              
              <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '12px 14px' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '2px' }}>
                  SOLAR HEAT GAIN REDUCTION
                </div>
                <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                  -{shgcReduction}%
                </div>
              </div>

              <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '12px 14px' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '2px' }}>
                  DAYLIGHT ILLUMINANCE
                </div>
                <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                  {daylightLux} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Lux</span>
                </div>
              </div>

              <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '12px 14px' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '2px' }}>
                  INSTANT SOLAR POWER
                </div>
                <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                  {powerOutputKw} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>kW</span>
                </div>
              </div>

              <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '12px 14px' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '2px' }}>
                  HVAC LOAD REDUCTION
                </div>
                <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                  {hvacSavings}%
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .facade-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
