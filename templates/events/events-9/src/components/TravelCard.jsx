import React from 'react';
import { weddingData } from '../data/weddingData';
import { Plane, Train, Car, Hotel, ExternalLink } from 'lucide-react';

export default function TravelCard() {
  return (
    <div>
      {/* HOTEL CARDS */}
      <h3 className="serif-title text-center" style={{ marginBottom: '2.5rem' }}>RECOMMENDED LUXURY HOTELS</h3>
      <div className="events-grid" style={{ marginBottom: '4rem' }}>
        {weddingData.hotels.map((hotel) => (
          <div key={hotel.id} className="event-card">
            <div className="event-image-wrap">
              <img src={hotel.image} alt={hotel.name} />
            </div>
            <div className="event-body">
              <span className="event-tagline">{hotel.stars} • {hotel.distance}</span>
              <h3 className="event-name">{hotel.name}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1rem' }}>
                {hotel.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {hotel.facilities.map((fac, fIdx) => (
                  <span key={fIdx} className="schedule-badge">
                    {fac}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  BOOKING DISCOUNT CODE: <strong>{hotel.bookingCode}</strong>
                </div>
                <a href="#book" onClick={(e) => { e.preventDefault(); alert(`Use code ${hotel.bookingCode} for special rates when booking at ${hotel.name}.`); }} className="btn-primary" style={{ width: '100%' }}>
                  BOOK WITH DISCOUNT CODE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TRANSPORTATION DETAILS */}
      <div className="dresscode-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h3 className="serif-title text-center" style={{ marginBottom: '2rem' }}>LOGISTICS & TRANSPORTATION</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Plane size={24} color="var(--accent)" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.95rem', marginBottom: '0.3rem' }}>AIRPORT ARRIVAL</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{weddingData.venue.transportation.airport}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Train size={24} color="var(--accent)" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.95rem', marginBottom: '0.3rem' }}>RAILWAY ACCESS</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{weddingData.venue.transportation.railway}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Hotel size={24} color="var(--accent)" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.95rem', marginBottom: '0.3rem' }}>HOTEL SHUTTLES</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{weddingData.venue.transportation.shuttle}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Car size={24} color="var(--accent)" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.95rem', marginBottom: '0.3rem' }}>CABS & TAXIS</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{weddingData.venue.transportation.cabs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
