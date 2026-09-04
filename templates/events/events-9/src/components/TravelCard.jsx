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
          <div key={hotel.id} className="event-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="event-image-wrap" style={{ aspectRatio: '4/3', width: '100%', height: 'auto', overflow: 'hidden' }}>
              <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="event-body" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
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
                <a href="#book" onClick={(e) => { e.preventDefault(); alert(`Use code ${hotel.bookingCode} for special rates when booking at ${hotel.name}.`); }} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  BOOK WITH DISCOUNT CODE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TRANSPORTATION DETAILS */}
      <div className="dresscode-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <h3 className="serif-title text-center" style={{ marginBottom: '2rem' }}>LOGISTICS & TRANSPORTATION</h3>
        
        <div className="transport-grid">
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Plane size={20} color="var(--accent)" />
            </div>
            <div>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.95rem', marginBottom: '0.3rem' }}>AIRPORT ARRIVAL</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>{weddingData.venue.transportation.airport}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Train size={20} color="var(--accent)" />
            </div>
            <div>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.95rem', marginBottom: '0.3rem' }}>RAILWAY ACCESS</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>{weddingData.venue.transportation.railway}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Hotel size={20} color="var(--accent)" />
            </div>
            <div>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.95rem', marginBottom: '0.3rem' }}>HOTEL SHUTTLES</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>{weddingData.venue.transportation.shuttle}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Car size={20} color="var(--accent)" />
            </div>
            <div>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.95rem', marginBottom: '0.3rem' }}>CABS & TAXIS</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>{weddingData.venue.transportation.cabs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
