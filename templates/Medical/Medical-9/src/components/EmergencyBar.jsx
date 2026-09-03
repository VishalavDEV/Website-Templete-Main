import React from 'react';
import { PhoneCall, ShieldAlert, Navigation, Clock } from 'lucide-react';

export default function EmergencyBar() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      padding: '1.25rem 0',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div className="section-container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#e11d48',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 0 15px rgba(225, 29, 72, 0.5)'
            }}>
              <ShieldAlert size={20} />
            </div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>
                Need Immediate Emergency Assistance?
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                Level 1 Trauma Triage Active • Average ER Wait &lt; 4 Mins
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="tel:18005552872"
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
                boxShadow: '0 4px 15px rgba(225, 29, 72, 0.4)',
                padding: '0.6rem 1.25rem',
                fontSize: '0.875rem'
              }}
            >
              <PhoneCall size={16} /> Call ER Hotline (1-800-555-AURA)
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontWeight: '600',
                background: 'rgba(255,255,255,0.1)',
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <Navigation size={14} /> Hospital Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
