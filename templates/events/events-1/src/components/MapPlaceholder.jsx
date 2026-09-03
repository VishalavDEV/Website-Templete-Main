import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { venueData } from '../data/venue';

export default function MapPlaceholder() {
  return (
    <div className="map-placeholder-box">
      <div className="map-grid-overlay" />
      <div className="map-pin-badge">
        <MapPin size={32} style={{ color: 'var(--accent-cyan)', margin: '0 auto 0.5rem auto' }} />
        <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{venueData.name}</h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{venueData.address}</p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-sm"
          style={{ marginTop: '1rem', display: 'inline-flex' }}
        >
          <Navigation size={14} /> Open in Google Maps
        </a>
      </div>
    </div>
  );
}
