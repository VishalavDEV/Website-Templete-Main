import React from 'react';
import { ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  return (
    <footer style={{
      background: '#08090B',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '5rem 0 3rem 0',
      color: '#8E94A0'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: '3rem',
          marginBottom: '4rem'
        }} className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#F4F4F1',
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}>
              NOVA
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '300px', marginBottom: '1.5rem' }}>
              Precision technology quietly designed. Engineered from custom titanium composites and proprietary neural processors.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: '#00F0FF',
              padding: '4px 10px',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              borderRadius: '2px'
            }}>
              <Cpu size={14} />
              <span>NEURAL OS 2026 ONLINE</span>
            </div>
          </div>

          {/* Column 2: Hardware Categories */}
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: '#F4F4F1',
              fontWeight: 700,
              marginBottom: '1.2rem',
              letterSpacing: '0.1em'
            }}>
              DEVICES
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li onClick={() => onSelectCategory('PHONES')} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>NOVA X1 Smartphone</li>
              <li onClick={() => onSelectCategory('LAPTOPS')} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>NOVA Book Air</li>
              <li onClick={() => onSelectCategory('AUDIO')} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>NOVA Buds Pro</li>
              <li onClick={() => onSelectCategory('WEARABLES')} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>NOVA Watch X</li>
              <li onClick={() => onSelectCategory('GAMING')} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>NOVA Vision VR</li>
            </ul>
          </div>

          {/* Column 3: Telemetry & Support */}
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: '#F4F4F1',
              fontWeight: 700,
              marginBottom: '1.2rem',
              letterSpacing: '0.1em'
            }}>
              SUPPORT
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li>24/7 Concierge</li>
              <li>NOVA Care Warranty</li>
              <li>Device Telemetry</li>
              <li>Circular Recycling</li>
              <li>Global Stores</li>
            </ul>
          </div>

          {/* Column 4: Newsletter Dispatch */}
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: '#F4F4F1',
              fontWeight: 700,
              marginBottom: '1.2rem',
              letterSpacing: '0.1em'
            }}>
              LAB DISPATCHES
            </div>
            <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
              Subscribe to zero-spam hardware drop alerts and software updates.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter email address..."
                style={{
                  flex: 1,
                  background: 'rgba(16, 18, 22, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#F4F4F1',
                  padding: '0.6rem 0.8rem',
                  borderRadius: '4px',
                  fontSize: '0.78rem',
                  fontFamily: 'JetBrains Mono, monospace'
                }}
              />
              <button
                style={{
                  background: '#00F0FF',
                  border: 'none',
                  color: '#08090B',
                  padding: '0.6rem 0.9rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 700
                }}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.75rem',
          fontFamily: 'JetBrains Mono, monospace'
        }}>
          <div>
            © 2026 NOVA TECHNOLOGY LABS. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>PRIVACY TELEMETRY</span>
            <span>TERMS OF SERVICE</span>
            <span>SECURITY ARCHITECTURE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
