import React from 'react';
import GalleryGrid from '../components/GalleryGrid';
import { Eye, Sparkles } from 'lucide-react';

export const Gallery = () => {
  return (
    <div style={{ background: '#07090b', paddingBottom: '90px' }}>
      {/* Banner */}
      <section style={{
        padding: '90px 0 50px 0',
        background: 'radial-gradient(ellipse at top, #161c22 0%, #07090b 80%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container">
          <div className="badge-pill badge-green" style={{ marginBottom: '16px' }}>
            <Eye size={14} /> AUTOMOTIVE PORTFOLIO
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#f5f7f8',
            marginBottom: '16px'
          }}>
            THE GALLERY OF GLOSS.
          </h1>
          <p style={{ color: '#b9c0c5', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Browse through active snow foam washes, paint correction buffing, custom repaints, and workshop studio moments.
          </p>
        </div>
      </section>

      {/* Gallery Grid with Category Filter & Lightbox */}
      <GalleryGrid />
    </div>
  );
};

export default Gallery;
