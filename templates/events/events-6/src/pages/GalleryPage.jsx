import React from 'react';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #1C1705 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">VISUAL ARCHIVE</span>
          <h1 className="section-title">FESTIVAL GALLERY</h1>
          <p className="section-desc">Relive moments of acoustic intensity, stage lights, crowd energy, and backstage vibes.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </div>
  );
}
