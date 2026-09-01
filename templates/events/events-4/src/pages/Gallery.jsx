import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [activeModalIdx, setActiveModalIdx] = useState(null);

  const images = [
    { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80', cat: 'Training', title: 'Barbell Deadlift Heavy Pull' },
    { url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80', cat: 'Gym', title: 'Main Powerlifting Floor' },
    { url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80', cat: 'Events', title: 'Iron Ascent 2025 Finals' },
    { url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80', cat: 'Equipment', title: 'Urethane Dumbbell Rack' },
    { url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80', cat: 'Trainers', title: 'Head Coach Arin Guidance' },
    { url: 'https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1000&q=80', cat: 'Members', title: 'High-Velocity Treadmill Sprint' }
  ];

  const categories = ['ALL', 'Gym', 'Training', 'Events', 'Trainers', 'Equipment', 'Members'];
  const filtered = activeTab === 'ALL' ? images : images.filter(img => img.cat === activeTab);

  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <SectionTitle subheading="VISUAL HIGHLIGHTS" title="VORTEX FORGE GALLERY" />
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveTab(cat)} style={{ padding: '0.6rem 1.2rem', background: activeTab === cat ? 'var(--color-yellow)' : 'var(--color-bg-card)', color: activeTab === cat ? '#000' : '#FFF', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'Outfit', fontWeight: '800', cursor: 'pointer' }}>
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid-3">
          {filtered.map((item, idx) => (
            <div key={idx} onClick={() => setActiveModalIdx(idx)} style={{ position: 'relative', height: '260px', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img src={item.url} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        {activeModalIdx !== null && (
          <div className="modal-backdrop" onClick={() => setActiveModalIdx(null)}>
            <img src={filtered[activeModalIdx].url} alt="Enlarged" style={{ maxWidth: '85vw', maxHeight: '85vh', border: '2px solid var(--color-yellow)' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
