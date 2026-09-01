import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, CheckCircle, Navigation } from 'lucide-react';

export const VenueCard = ({ venue }) => {
  return (
    <div className="sports-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ height: '220px', width: '100%', position: 'relative' }}>
        <img
          src={venue.image}
          alt={venue.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/arena-bg.jpg';
          }}
        />
        <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(5,5,5,0.85)', padding: '6px 12px', borderRadius: '4px', border: '1px solid var(--border-orange)', fontFamily: 'var(--font-sports)', fontSize: '0.9rem', color: '#ff4d00', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Users size={14} /> CAPACITY: {venue.capacity}
        </div>
      </div>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{venue.name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gray)', fontSize: '0.95rem', marginBottom: '18px' }}>
          <MapPin size={16} color="#ff4d00" />
          <span>{venue.location}</span>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div className="font-sports" style={{ fontSize: '1rem', color: '#ff4d00', marginBottom: '10px' }}>ARENA FACILITIES:</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {venue.facilities.map((fac, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--white)' }}>
                <CheckCircle size={14} color="#00c853" />
                <span>{fac}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
          <Link to={`/venues/${venue.id}`} className="btn-secondary" style={{ flex: 1, fontSize: '0.9rem' }}>
            VENUE DETAILS
          </Link>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(venue.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: '0.9rem', padding: '10px 14px' }}
          >
            <Navigation size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};
