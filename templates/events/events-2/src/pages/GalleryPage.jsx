import React from 'react';
import { Gallery } from '../components/Gallery';

export const GalleryPage = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <section style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag">MEDIA ARCHIVE</div>
          <h1 className="section-title">Summit Photo & Video Gallery</h1>
          <p className="section-subtitle">
            Immerse yourself in moments captured across previous EVENTORA keynotes, workshop halls, and VIP receptions.
          </p>
        </div>
      </section>

      <Gallery />
    </div>
  );
};
