import React from 'react';
import VenueSection from '../components/VenueSection';

export default function Venue() {
  const hotels = [
    {
      name: "Grand Mercure Chennai",
      distance: "1.2 km from Venue",
      rating: "5 Star Luxury",
      price: "₹5,500 / night",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Radisson Blu Guindy",
      distance: "2.8 km from Venue",
      rating: "5 Star Business",
      price: "₹6,200 / night",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Hablis Executive Hotel",
      distance: "3.5 km from Venue",
      rating: "4 Star Business",
      price: "₹4,200 / night",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">CHENNAI, INDIA</span>
          <h1 className="page-title">
            Venue & <span className="gradient-text">Accommodations</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Chennai Convention Centre — Premier International Arena with Hospitality Partnerships.
          </p>
        </div>
      </div>

      <VenueSection />

      {/* Recommended Hotels */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">PARTNER HOTELS</span>
            <h2 className="section-title">
              Recommended <span className="gradient-text">Accommodations</span>
            </h2>
            <p className="section-subtitle">
              Eventora delegates receive up to 25% off partner hotel room rates.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {hotels.map((hotel, idx) => (
              <div key={idx} className="glass-card" style={{ overflow: 'hidden' }}>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 700, marginBottom: '0.25rem' }}>{hotel.name}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{hotel.rating}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>{hotel.distance}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>{hotel.price}</span>
                    <button className="btn btn-outline btn-sm">Reserve Room</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
