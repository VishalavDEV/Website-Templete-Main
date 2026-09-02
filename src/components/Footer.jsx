import React from 'react';
import { FAQS } from '../data/medicalData';
import { Activity, ShieldCheck, Heart, Lock, Globe, MousePointer } from 'lucide-react';

export default function Footer({ cursorEnabled, onToggleCursor }) {
  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid var(--border-light)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="section-container">
        {/* FAQ Accordion Section */}
        <div id="faq" style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="heading-editorial" style={{ fontSize: '2rem' }}>
              Patient Resources & Assistance
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: '1.5rem' }}>
            {FAQS.map((faq, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {faq.q}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Brand & Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--border-light)'
        }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 4' }}>
            <div className="logo-brand" style={{ marginBottom: '1rem' }}>
              <div className="logo-icon-wrap">
                <Activity size={24} />
              </div>
              <div>
                <div style={{ lineHeight: 1.1 }}>AURA HEALTH</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--primary-cyan)', fontWeight: '600' }}>
                  Human Anatomy — Reimagined
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              Aura Health Medical Center provides advanced multi-disciplinary surgical interventions, 
              interactive body diagnostics, and Arctic Frost clinical comfort.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={onToggleCursor}
                className="btn-secondary"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
              >
                <MousePointer size={12} />
                <span>Custom Cursor: {cursorEnabled ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </div>

          {/* Column 2: Centers */}
          <div style={{ gridColumn: 'span 3' }}>
            <h5 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Clinical Institutes
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li><a href="#anatomy" style={{ color: 'inherit', textDecoration: 'none' }}>Cardiovascular Institute</a></li>
              <li><a href="#anatomy" style={{ color: 'inherit', textDecoration: 'none' }}>Neuro-Suite Pavilion</a></li>
              <li><a href="#anatomy" style={{ color: 'inherit', textDecoration: 'none' }}>Motion & Joint Center</a></li>
              <li><a href="#anatomy" style={{ color: 'inherit', textDecoration: 'none' }}>Thoracic Pulmonology</a></li>
              <li><a href="#anatomy" style={{ color: 'inherit', textDecoration: 'none' }}>Digestive Care Center</a></li>
            </ul>
          </div>

          {/* Column 3: Accreditation & Security */}
          <div style={{ gridColumn: 'span 5' }}>
            <h5 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Compliance & Safety
            </h5>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Lock size={16} style={{ color: 'var(--accent-emerald)' }} />
                <span>HIPAA Encrypted Patient Portal</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--primary-cyan)' }} />
                <span>Joint Commission Gold Seal</span>
              </div>
            </div>
            
            {/* Mandatory Healthcare Disclaimer */}
            <div style={{
              fontSize: '0.78rem',
              color: 'var(--text-light)',
              background: 'var(--bg-subtle)',
              padding: '0.85rem',
              borderRadius: 'var(--radius-sm)',
              lineHeight: '1.5'
            }}>
              <strong>MEDICAL DISCLAIMER:</strong> The information provided on this template website is for educational and informational demonstration purposes only. It is not intended as medical advice or as a substitute for professional clinical diagnosis. If you are experiencing a life-threatening emergency, please dial 911 or visit your nearest emergency room immediately.
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.5rem',
          fontSize: '0.8rem',
          color: 'var(--text-light)'
        }}>
          <div>
            © 2026 Aura Health Medical Center. All rights reserved. Built with Arctic Frost Design System.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>HIPAA Compliance</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Care</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
