import React from 'react';
import { dataStore } from '../services/dataStore';
import { Siren, Video, Stethoscope, Scan, CheckCircle2, Calendar } from 'lucide-react';

interface ServicesViewProps {
  onOpenBooking: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenBooking }) => {
  const services = dataStore.getServices();

  const getIcon = (category: string) => {
    if (category === 'Emergency') return <Siren size={28} color="#e11d48" />;
    if (category === 'Telehealth') return <Video size={28} color="#0284c7" />;
    if (category === 'Radiology') return <Scan size={28} color="#8b5cf6" />;
    return <Stethoscope size={28} color="#0d9488" />;
  };

  return (
    <div style={{ padding: '3rem 0 5rem 0', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Comprehensive Healthcare</span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Clinical & Diagnostic Services
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.2rem' }}>
            From 24/7 trauma emergency care to virtual telehealth and high-precision radiology audits.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '1.5rem' }}>
          {services.map(srv => (
            <div key={srv.id} className="card-elevated" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  {getIcon(srv.category)}
                </div>
                <span className="badge badge-teal" style={{ fontSize: '0.8rem' }}>{srv.category}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>{srv.name}</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>{srv.description}</p>

              <div style={{ marginBottom: '1.5rem', background: '#f0fdfa', padding: '1rem', borderRadius: '12px', border: '1px solid #ccfbf1' }}>
                <h5 style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f766e', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Service Highlights
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {srv.highlights.map((h, i) => (
                    <span key={i} style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={14} color="#0d9488" /> {h}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block' }}>Estimated Price</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{srv.priceRange}</span>
                </div>

                <button onClick={onOpenBooking} className="btn-primary">
                  <Calendar size={16} /> Request Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
