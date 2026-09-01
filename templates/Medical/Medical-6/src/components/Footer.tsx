import React from 'react';
import { Activity, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer style={{ background: '#0f172a', color: '#cbd5e1', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '1px solid #1e293b' }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '3rem' }}>
          {/* Col 1: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, #0d9488 0%, #06b6d4 100%)',
                color: '#ffffff',
                padding: '0.45rem',
                borderRadius: '10px'
              }}>
                <Activity size={20} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                Apex<span style={{ color: '#0d9488' }}>Health</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              A next-generation medical platform connecting patients, specialized doctors, and healthcare administrators with real-time dynamic booking.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.8rem', fontWeight: 600 }}>
              <ShieldCheck size={16} /> JCI Accredited & HIPAA Compliant
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Platform Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => onNavigate('doctors')} style={{ color: '#cbd5e1' }}>
                  Find Specialists & Doctors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('departments')} style={{ color: '#cbd5e1' }}>
                  Medical Departments
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} style={{ color: '#cbd5e1' }}>
                  Clinical Services & Telehealth
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} style={{ color: '#cbd5e1' }}>
                  Health Knowledge & Articles
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: User Portals */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>User Experiences</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => onNavigate('patient')} style={{ color: '#14b8a6', fontWeight: 600 }}>
                  → Patient Portal & Appointments
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctor')} style={{ color: '#38bdf8', fontWeight: 600 }}>
                  → Doctor Schedule Workspace
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin')} style={{ color: '#c084fc', fontWeight: 600 }}>
                  → Admin Platform Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Emergency */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Emergency & Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#f43f5e', fontWeight: 700 }}>
                <Phone size={16} /> 24/7 Hotline: +1 (800) 999-HEAL
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#94a3b8' }}>
                <Mail size={16} /> care@apexhealth.org
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#94a3b8' }}>
                <MapPin size={16} style={{ marginTop: '0.2rem', flexShrink: 0 }} /> 742 Medical Center Blvd, Health City, NY 10001
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #1e293b',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 ApexHealth Medical Platform. All rights reserved. Built with modern React & dynamic architecture.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }}>Security Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
