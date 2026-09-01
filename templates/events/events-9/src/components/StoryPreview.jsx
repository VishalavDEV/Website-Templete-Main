import React from 'react';
import { Link } from 'react-router-dom';
import { weddingData } from '../data/weddingData';

export default function StoryPreview() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="split-story-grid">
          {/* LEFT: LARGE COUPLE PHOTOGRAPH */}
          <div className="story-image-wrap">
            <img 
              src={weddingData.ourStory.howWeMet.image} 
              alt={`${weddingData.couple.bride} and ${weddingData.couple.groom} Story`} 
            />
          </div>

          {/* RIGHT: STORY TEXT */}
          <div>
            <span className="section-label">OUR JOURNEY</span>
            <h2 className="serif-title" style={{ marginBottom: '1.5rem' }}>OUR STORY</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.8rem', lineHeight: '1.8' }}>
              {weddingData.ourStory.howWeMet.text}
            </p>
            <Link to="/our-story" className="btn-primary">
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
