import React from 'react';
import FamilyCard from '../components/FamilyCard';
import { weddingData } from '../data/weddingData';

export default function Family() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        {/* HEADER */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <span className="section-label">THE PILLARS OF OUR LIVES</span>
          <h1 className="serif-title">OUR FAMILIES</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.8rem auto 0' }}>
            We owe our journey to the unconditional guidance, blessing, and love of our wonderful families.
          </p>
        </div>

        {/* BRIDE'S FAMILY */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">THE VANCE FAMILY</span>
            <h2 className="serif-title">{weddingData.family.bride.sideName}</h2>
          </div>
          <div className="family-grid">
            {weddingData.family.bride.members.map((member, idx) => (
              <FamilyCard key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* GROOM'S FAMILY */}
        <div>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">THE STERLING FAMILY</span>
            <h2 className="serif-title">{weddingData.family.groom.sideName}</h2>
          </div>
          <div className="family-grid">
            {weddingData.family.groom.members.map((member, idx) => (
              <FamilyCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
