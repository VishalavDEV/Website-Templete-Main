import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin, Navigation, Car, Plane, Train, Hotel } from 'lucide-react';

export default function Venue() {
  return (
    <div className="section-padding" style={{ paddingTop: '8rem' }}>
      <div className="container">
        {/* HEADER */}
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">THE LOCATION</span>
          <h1 className="serif-title">{weddingData.venue.name}</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0.8rem auto 0' }}>
            {weddingData.venue.subheading}
          </p>
        </div>

        {/* HERO VENUE IMAGE */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)', marginBottom: '4rem' }}>
          <img src={weddingData.venue.image} alt={weddingData.venue.name} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>

        {/* ADDRESS & MAP SECTION */}
        <div className="split-story-grid" style={{ marginBottom: '5rem' }}>
          <div>
            <span className="section-label">ADDRESS & CONTACT</span>
            <h2 className="serif-title" style={{ marginBottom: '1rem' }}>LOCATION DETAILS</h2>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              <MapPin size={20} color="var(--accent)" style={{ display: 'inline', marginRight: '0.4rem' }} />
              {weddingData.venue.address}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              <div><strong>Phone:</strong> {weddingData.venue.phone}</div>
              <div><strong>Email:</strong> {weddingData.venue.email}</div>
            </div>

            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(weddingData.venue.name + ' ' + weddingData.venue.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Navigation size={16} /> GET DIRECTIONS IN GOOGLE MAPS
            </a>
          </div>

          {/* LARGE MAP PLACEHOLDER IFRAME */}
          <div className="map-placeholder-box">
            <iframe 
              src={weddingData.venue.mapEmbedUrl}
              title="Venue Map"
              loading="lazy"
            />
          </div>
        </div>

        {/* PARKING INFORMATION */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 className="serif-title text-center" style={{ marginBottom: '2.5rem' }}>PARKING INFORMATION</h2>
          <div className="dresscode-grid">
            <div className="dresscode-card">
              <Car size={28} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3 className="serif-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>VALET PARKING</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>{weddingData.venue.parking.valet}</p>
            </div>

            <div className="dresscode-card">
              <Car size={28} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3 className="serif-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>GUEST PARKING</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>{weddingData.venue.parking.guest}</p>
            </div>

            <div className="dresscode-card">
              <Car size={28} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3 className="serif-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>ACCESSIBLE PARKING</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>{weddingData.venue.parking.accessible}</p>
            </div>
          </div>
        </div>

        {/* TRANSPORTATION */}
        <div>
          <h2 className="serif-title text-center" style={{ marginBottom: '2.5rem' }}>TRANSPORTATION & ACCESS</h2>
          <div className="dresscode-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <Plane size={24} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>AIRPORT</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{weddingData.venue.transportation.airport}</p>
              </div>

              <div>
                <Train size={24} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>RAILWAY</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{weddingData.venue.transportation.railway}</p>
              </div>

              <div>
                <Hotel size={24} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>HOTEL SHUTTLE</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{weddingData.venue.transportation.shuttle}</p>
              </div>

              <div>
                <Car size={24} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>TAXI / CAB</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{weddingData.venue.transportation.cabs}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
