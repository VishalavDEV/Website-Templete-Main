import React from 'react';
import { Link } from 'react-router-dom';
import { weddingData } from '../data/weddingData';
import { MapPin, Navigation, Car } from 'lucide-react';

export default function VenueSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="venue-grid">
          {/* LARGE VENUE IMAGE */}
          <div className="story-image-wrap">
            <img src={weddingData.venue.image} alt={weddingData.venue.name} />
          </div>

          {/* VENUE TEXT */}
          <div>
            <span className="section-label">THE VENUE</span>
            <h2 className="serif-title" style={{ marginBottom: '0.5rem' }}>{weddingData.venue.name}</h2>
            <h4 style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
              {weddingData.venue.city}
            </h4>

            <blockquote style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '1.5rem', borderLeft: '2px solid var(--accent)', paddingLeft: '1rem' }}>
              "{weddingData.venue.subheading}"
            </blockquote>

            <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              <MapPin size={16} color="var(--accent)" style={{ display: 'inline', marginRight: '0.4rem' }} />
              {weddingData.venue.address}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/venue" className="btn-primary">
                VIEW VENUE
              </Link>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(weddingData.venue.name + ' ' + weddingData.venue.address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Navigation size={15} /> GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
