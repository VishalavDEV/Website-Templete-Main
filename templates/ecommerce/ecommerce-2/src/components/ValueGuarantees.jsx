import React from 'react';
import { Award, ShieldCheck, Gem, Truck } from 'lucide-react';

export default function ValueGuarantees() {
  const pillars = [
    {
      icon: <Award size={26} style={{ color: 'var(--gold-primary)' }} />,
      title: "FINE CRAFTSMANSHIP",
      subtitle: "Carefully finished details."
    },
    {
      icon: <Gem size={26} style={{ color: 'var(--gold-primary)' }} />,
      title: "RESPONSIBLY SOURCED",
      subtitle: "Thoughtfully selected materials."
    },
    {
      icon: <ShieldCheck size={26} style={{ color: 'var(--gold-primary)' }} />,
      title: "TIMELESS DESIGN",
      subtitle: "Created beyond trends."
    },
    {
      icon: <Truck size={26} style={{ color: 'var(--gold-primary)' }} />,
      title: "SECURE DELIVERY",
      subtitle: "Beautifully packaged & protected."
    }
  ];

  return (
    <section
      style={{
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
        backgroundColor: '#FAF7F0',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem'
          }}
        >
          {pillars.map((p, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.5rem 1rem',
                border: '1px solid var(--border-light)',
                background: '#ffffff'
              }}
            >
              <div style={{ marginBottom: '0.8rem' }}>{p.icon}</div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.18em',
                  color: 'var(--emerald-deep)',
                  marginBottom: '0.3rem',
                  fontWeight: '700'
                }}
              >
                ✦ {p.title}
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{p.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
