import React from 'react';
import { ShieldCheck, Headset, Truck, RefreshCw } from 'lucide-react';

export default function TrustService() {
  const services = [
    {
      icon: ShieldCheck,
      title: '2-YEAR NOVA CARE',
      desc: 'Complimentary hardware warranty covering manufacturing and bio-telemetry sensors.'
    },
    {
      icon: Headset,
      title: '24/7 CONCIERGE',
      desc: 'Direct line to expert technical engineers for setup, software, and optimization.'
    },
    {
      icon: Truck,
      title: 'EXPRESS DELIVERY',
      desc: 'Insured temperature-controlled shipping with live encrypted telemetry tracking.'
    },
    {
      icon: RefreshCw,
      title: 'CIRCULAR RECYCLING',
      desc: 'Trade in legacy hardware for credit towards 100% recycled titanium devices.'
    }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      background: '#101216',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem'
        }}>
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '4px',
                  background: 'rgba(0, 240, 255, 0.08)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={20} color="#00F0FF" />
                </div>
                <h4 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#F4F4F1',
                  letterSpacing: '0.05em'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#8E94A0',
                  lineHeight: 1.5
                }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
