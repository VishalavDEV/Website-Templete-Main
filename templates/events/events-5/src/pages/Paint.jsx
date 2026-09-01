import React from 'react';
import CarVisualizer from '../components/CarVisualizer';
import { paintTypes, paintProcess } from '../data/paintData';
import { Link } from 'react-router-dom';
import { Palette, Layers, Sparkles, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';

export const Paint = () => {
  return (
    <div style={{ background: '#07090b', paddingBottom: '90px' }}>
      {/* Banner */}
      <section style={{
        padding: '90px 0 50px 0',
        background: 'radial-gradient(ellipse at top, #161c22 0%, #07090b 80%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container">
          <div className="badge-pill badge-green" style={{ marginBottom: '16px' }}>
            <Palette size={14} /> HVLP CUSTOM PAINT STUDIO
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            color: '#f5f7f8',
            marginBottom: '16px'
          }}>
            CHANGE THE COLOR.<br />
            <span style={{ color: '#7cff4f' }}>CHANGE THE PRESENCE.</span>
          </h1>
          <p style={{ color: '#b9c0c5', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto' }}>
            Professional automotive paint transformation with precision color matching and premium finishing inside our dust-controlled negative pressure paint booth.
          </p>
        </div>
      </section>

      {/* Interactive Visualizer */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <CarVisualizer />
        </div>
      </section>

      {/* Paint Types Section */}
      <section style={{ padding: '60px 0', background: '#0a0d10' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">FINISH SPECTRUM</span>
            <h2 className="section-title">CHOOSE YOUR PAINT TYPE</h2>
            <p className="section-subtitle">
              From pure solid pigments to light-refracting tri-coat pearls and ultra matte satins.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {paintTypes.map((pt, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
                    <img src={pt.image} alt={pt.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', color: '#f5f7f8', marginBottom: '8px' }}>
                    {pt.name}
                  </h3>
                  <p style={{ color: '#b9c0c5', fontSize: '0.9rem', marginBottom: '16px', lineHeight: '1.5' }}>
                    {pt.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#64748b', marginBottom: '8px' }}>
                    <span>Durability Life:</span>
                    <strong style={{ color: '#7cff4f' }}>{pt.durability}</strong>
                  </div>
                </div>

                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Estimated Range</span>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: '800', color: '#25bfff' }}>
                      {pt.priceRange}
                    </div>
                  </div>

                  <Link to="/booking" className="btn-outline-green" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paint Studio Process */}
      <section style={{ padding: '80px 0', background: '#07090b' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">STUDIO CRAFTSMANSHIP</span>
            <h2 className="section-title">THE 5-STEP PAINT PROCESS</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {paintProcess.map((step, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px', textAlign: 'center', position: 'relative' }}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: '#7cff4f',
                  marginBottom: '8px'
                }}>
                  {step.step}
                </div>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', color: '#f5f7f8', marginBottom: '8px' }}>
                  {step.title}
                </h4>
                <p style={{ color: '#b9c0c5', fontSize: '0.85rem' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paint;
