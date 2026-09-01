import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tournamentData } from '../data/tournamentData';
import { ArrowLeft, MapPin, Users, Navigation, ShieldCheck, Car, Coffee, HeartPulse } from 'lucide-react';

export const VenueDetails = () => {
  const { id } = useParams();
  const venue = tournamentData.venues.find((v) => v.id === id) || tournamentData.venues[0];

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <Link to="/venues" className="btn-outline" style={{ marginBottom: '24px', fontSize: '0.9rem' }}>
            <ArrowLeft size={16} /> BACK TO VENUES
          </Link>

          <div className="sports-card" style={{ padding: '36px', marginBottom: '40px' }}>
            <div style={{ height: '380px', borderRadius: '8px', overflow: 'hidden', marginBottom: '30px', position: 'relative' }}>
              <img src={venue.image} alt={venue.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(5,5,5,0.85)', padding: '8px 18px', borderRadius: '4px', border: '1px solid var(--border-orange)' }}>
                <span className="font-display" style={{ fontSize: '2rem', color: '#ff4d00' }}>CAPACITY: {venue.capacity}</span>
              </div>
            </div>

            <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, marginBottom: '10px' }}>
              {venue.name}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--orange-light)', fontSize: '1.1rem', marginBottom: '24px' }}>
              <MapPin size={20} color="#ff4d00" />
              <span>{venue.location}</span>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(venue.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginBottom: '30px' }}
            >
              <Navigation size={18} /> GET ARENA DIRECTIONS
            </a>

            {/* Stadium Layout & Gate Details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '30px', borderTop: '1px solid var(--border)', paddingTop: '30px' }}>
              <div style={{ background: '#050505', padding: '20px', borderRadius: '6px', border: '1px solid var(--border)' }}>
                <Car size={24} color="#ff4d00" style={{ marginBottom: '8px' }} />
                <h4 className="font-display" style={{ fontSize: '1.4rem' }}>PARKING & ACCESS</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>4,000 Multi-tier vehicle spaces with VIP reserved parking zones at Gate 1.</p>
              </div>

              <div style={{ background: '#050505', padding: '20px', borderRadius: '6px', border: '1px solid var(--border)' }}>
                <ShieldCheck size={24} color="#ff4d00" style={{ marginBottom: '8px' }} />
                <h4 className="font-display" style={{ fontSize: '1.4rem' }}>ENTRANCE GATES</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Gate 1 (VIP & Media), Gate 2 & 3 (General Ticket Holders), Gate 4 (Courtside Pass).</p>
              </div>

              <div style={{ background: '#050505', padding: '20px', borderRadius: '6px', border: '1px solid var(--border)' }}>
                <Coffee size={24} color="#ff4d00" style={{ marginBottom: '8px' }} />
                <h4 className="font-display" style={{ fontSize: '1.4rem' }}>FOOD & MERCH ZONES</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Food court on Concourse Level 2. Official merchandise stores at Main Atrium.</p>
              </div>

              <div style={{ background: '#050505', padding: '20px', borderRadius: '6px', border: '1px solid var(--border)' }}>
                <HeartPulse size={24} color="#ff4d00" style={{ marginBottom: '8px' }} />
                <h4 className="font-display" style={{ fontSize: '1.4rem' }}>MEDICAL & SAFETY</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Full trauma response unit, paramedics, and certified FIBA sports physios on site.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
