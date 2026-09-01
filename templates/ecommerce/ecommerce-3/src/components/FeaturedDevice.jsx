import React from 'react';
import { ArrowRight, Cpu, BatteryCharging, Camera, HardDrive } from 'lucide-react';
import ImageWithLoader from './ImageWithLoader';

export default function FeaturedDevice({ onExploreX1 }) {
  return (
    <section style={{
      padding: '7rem 0',
      background: '#101216',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      {/* Background Lighting */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.09) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.78rem',
            color: '#00F0FF',
            letterSpacing: '0.25em',
            marginBottom: '0.6rem'
          }}>
            FLAGSHIP ARCHITECTURE
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#F4F4F1', fontWeight: 800 }}>
            MEET X1.
          </h2>
          <p style={{ color: '#8E94A0', fontSize: '1.05rem', maxWidth: '500px', margin: '0.8rem auto 0 auto' }}>
            Precision-milled titanium shell. Engineered from the molecular level up.
          </p>
        </div>

        {/* Centerpiece Image & SVG Line Spec Callouts */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr 1fr',
          gap: '2rem',
          alignItems: 'center',
          minHeight: '520px'
        }} className="featured-device-grid">

          {/* Left Specs Callouts (01 & 02) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {/* 01 DISPLAY */}
            <div style={{
              background: 'rgba(8, 9, 11, 0.75)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              padding: '1.4rem 1.6rem',
              borderRadius: '8px',
              backdropFilter: 'blur(12px)',
              position: 'relative'
            }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#00F0FF', fontWeight: 700 }}>
                01 / DISPLAY
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#F4F4F1', marginTop: '0.2rem' }}>
                6.7" OLED
              </div>
              <p style={{ fontSize: '0.8rem', color: '#8E94A0', marginTop: '0.3rem' }}>
                120Hz LTPO 3.0 Dynamic Refresh
              </p>
            </div>

            {/* 02 CAMERA */}
            <div style={{
              background: 'rgba(8, 9, 11, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1.4rem 1.6rem',
              borderRadius: '8px',
              backdropFilter: 'blur(12px)',
              position: 'relative'
            }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#00F0FF', fontWeight: 700 }}>
                02 / CAMERA
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#F4F4F1', marginTop: '0.2rem' }}>
                50 MP
              </div>
              <p style={{ fontSize: '0.8rem', color: '#8E94A0', marginTop: '0.3rem' }}>
                Dual-Pixel Sensor + Periscope Zoom
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '320px',
              height: '520px',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.2)',
              position: 'relative',
              zIndex: 3
            }}>
              <ImageWithLoader
                src="/images/nova_x1_hero.webp"
                alt="NOVA X1 Flagship"
                aspectRatio="auto"
                style={{ width: '100%', height: '100%', borderRadius: '28px' }}
              />
            </div>
          </div>

          {/* Right Specs Callouts (03 & 04) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {/* 03 BATTERY */}
            <div style={{
              background: 'rgba(8, 9, 11, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1.4rem 1.6rem',
              borderRadius: '8px',
              backdropFilter: 'blur(12px)',
              position: 'relative'
            }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#00F0FF', fontWeight: 700 }}>
                03 / BATTERY
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#F4F4F1', marginTop: '0.2rem' }}>
                5000 mAh
              </div>
              <p style={{ fontSize: '0.8rem', color: '#8E94A0', marginTop: '0.3rem' }}>
                65W Fast Charge (0-80% in 18 min)
              </p>
            </div>

            {/* 04 STORAGE */}
            <div style={{
              background: 'rgba(8, 9, 11, 0.75)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              padding: '1.4rem 1.6rem',
              borderRadius: '8px',
              backdropFilter: 'blur(12px)',
              position: 'relative'
            }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#00F0FF', fontWeight: 700 }}>
                04 / STORAGE
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#F4F4F1', marginTop: '0.2rem' }}>
                256 GB
              </div>
              <p style={{ fontSize: '0.8rem', color: '#8E94A0', marginTop: '0.3rem' }}>
                High-Speed UFS 4.0 Flash Storage
              </p>
            </div>
          </div>

        </div>

        {/* Center CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button
            onClick={onExploreX1}
            className="btn-primary"
            style={{ padding: '1rem 2.5rem', fontSize: '0.9rem' }}
          >
            <span>EXPLORE X1</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
