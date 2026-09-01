import React from 'react';
import GalleryComponent from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';

export default function Gallery() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        {/* HEADER */}
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">MEMORIES & HIGHLIGHTS</span>
          <h1 className="serif-title">WEDDING GALLERY</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0.8rem auto 0' }}>
            Click on any image to view in full-screen editorial lightbox mode.
          </p>
        </div>

        {/* PHOTOGRAPHY MASONRY GALLERY */}
        <GalleryComponent />

        {/* VIDEO GALLERY SECTION */}
        <div style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid var(--border)' }}>
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="section-label">CINEMATIC FILMS</span>
            <h2 className="serif-title">VIDEO HIGHLIGHTS</h2>
          </div>

          <VideoGallery />
        </div>
      </div>
    </div>
  );
}
