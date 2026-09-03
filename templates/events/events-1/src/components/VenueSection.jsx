import React from 'react';
import { MapPin, Phone, Mail, CheckCircle2, Car, Train, Wifi, Coffee, Shield } from 'lucide-react';

export default function VenueSection() {
  const facilities = [
    { icon: <Car size={20} />, label: "Complimentary 2,500+ Parking" },
    { icon: <Train size={20} />, label: "Direct Metro Rail Link" },
    { icon: <Wifi size={20} />, label: "10 Gbps Ultra-Speed Wi-Fi 6" },
    { icon: <Coffee size={20} />, label: "Gourmet Catering Lounges" },
    { icon: <Shield size={20} />, label: "24/7 Security & Medical Desk" },
    { icon: <CheckCircle2 size={20} />, label: "100% Wheelchair Accessible" }
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <span className="section-tag">EVENT VENUE</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Chennai Convention Centre
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
              State-of-the-Art International Event & Conference Arena
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
                <MapPin size={20} style={{ color: 'var(--primary)' }} />
                <span>Mount Poonamallee Road, Nandambakkam, Chennai 600089</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
                <Phone size={20} style={{ color: 'var(--primary)' }} />
                <span>+91 44 2256 9000 / +91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
                <Mail size={20} style={{ color: 'var(--primary)' }} />
                <span>venue@eventora2026.org</span>
              </div>
            </div>

            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Facilities & Perks:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              {facilities.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--primary)' }}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="map-placeholder-box">
              <div className="map-grid-overlay" />
              <div className="map-pin-badge">
                <MapPin size={36} style={{ color: 'var(--primary)', margin: '0 auto 0.5rem auto' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Chennai Conv. Centre</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tamil Nadu, India</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '1rem', display: 'inline-flex' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
