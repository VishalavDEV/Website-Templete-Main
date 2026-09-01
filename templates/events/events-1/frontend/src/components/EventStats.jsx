import React from 'react';
import { Users, Mic, Layers, Wrench } from 'lucide-react';

export default function EventStats() {
  const stats = [
    {
      icon: <Users size={26} />,
      number: "5,000+",
      label: "ATTENDEES"
    },
    {
      icon: <Mic size={26} />,
      number: "50+",
      label: "SPEAKERS"
    },
    {
      icon: <Layers size={26} />,
      number: "30+",
      label: "SESSIONS"
    },
    {
      icon: <Wrench size={26} />,
      number: "20+",
      label: "WORKSHOPS"
    }
  ];

  return (
    <section className="section" style={{ background: 'transparent', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ width: '54px', height: '54px', margin: '0 auto 1.25rem auto', borderRadius: '50%', background: 'rgba(108, 92, 231, 0.12)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1, marginBottom: '0.5rem' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
