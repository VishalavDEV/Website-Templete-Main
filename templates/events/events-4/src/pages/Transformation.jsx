import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Transformation = () => {
  const transformations = [
    {
      name: 'Alex Mercer',
      program: 'POWER FORGE',
      metrics: [
        { label: 'DURATION', val: '12 WEEKS' },
        { label: 'FAT LOSS', val: '-8 KG' },
        { label: 'STRENGTH', val: '+35%' }
      ],
      beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80',
      afterImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80',
      story: 'Focused heavily on progressive overload and nutrition. Squat jumped from 90kg to 160kg!'
    },
    {
      name: 'Jordan Vance',
      program: 'ASCENT SHRED',
      metrics: [
        { label: 'DURATION', val: '16 WEEKS' },
        { label: 'FAT LOSS', val: '-12 KG' },
        { label: 'STRENGTH', val: '+25%' }
      ],
      beforeImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80',
      afterImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80',
      story: 'Rebuilt conditioning through sprint intervals and heavy sled work. Reached 8% body fat.'
    }
  ];

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="PROOF OF EFFORT" title="ATHLETE TRANSFORMATIONS" />
        <div className="grid-2">
          {transformations.map((item, idx) => (
            <div key={idx} className="transformation-card">
              <div className="trans-img-comparison">
                <div className="trans-img-box"><img src={item.beforeImg} alt="Before" /><div className="trans-label">BEFORE</div></div>
                <div className="trans-img-box"><img src={item.afterImg} alt="After" /><div className="trans-label" style={{ color: '#000', background: 'var(--color-yellow)' }}>AFTER</div></div>
              </div>
              <div className="trans-metrics-grid">
                {item.metrics.map((m, i) => (
                  <div key={i}><div className="metric-val">{m.val}</div><div className="metric-lbl">{m.label}</div></div>
                ))}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#FFF', fontSize: '1.3rem' }}>{item.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{item.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transformation;
