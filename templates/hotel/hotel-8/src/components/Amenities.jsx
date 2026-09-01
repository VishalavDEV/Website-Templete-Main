import React from 'react';
import { 
  Wifi, Shield, Phone, Sparkles, MapPin, Compass, 
  Car, Activity, Award, Coffee, BookOpen, Clock 
} from 'lucide-react';

export default function Amenities() {
  const list = [
    { name: 'Swimming Pool', desc: 'Teal-green tiled pool surrounded by domed pavilions.', icon: <Sparkles size={20} /> },
    { name: 'Complimentary Wi-Fi', desc: 'High-speed gigabit connectivity across the entire property.', icon: <Wifi size={20} /> },
    { name: '24/7 Room Service', desc: 'Fresh gourmet dining delivered to your suite door.', icon: <Clock size={20} /> },
    { name: 'Airport Transfer', desc: 'Private chauffeur luxury car escorts from airport terminals.', icon: <Car size={20} /> },
    { name: 'Fitness Centre', desc: 'Modern equipment overlooking landscaped gardens.', icon: <Activity size={20} /> },
    { name: 'Ayurvedic Spa', desc: 'Sandstone wellness suite for holistic body treatments.', icon: <Shield size={20} /> },
    { name: 'Fine Dining', desc: 'Heritage recipes served on hand-hammered thali sets.', icon: <Coffee size={20} /> },
    { name: 'Royal Concierge', desc: 'Dedicated butler services for itinerary and booking arrangements.', icon: <Award size={20} /> },
    { name: 'Valet Parking', desc: 'Secure indoor vehicle housing with charging terminals.', icon: <Car size={20} /> },
    { name: 'Event Spaces', desc: 'Courtyards and rooftop terraces for heritage weddings.', icon: <BookOpen size={20} /> },
    { name: 'Premium Laundry', desc: 'Eco-friendly same-day washing and pressing services.', icon: <Clock size={20} /> },
    { name: 'Travel Assistance', desc: 'Custom local city sightseeing and boat tour bookings.', icon: <Compass size={20} /> }
  ];

  return (
    <section id="amenities" style={{ padding: '8rem 0', backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Sanctum Inclusions</span>
          <h2>Services & Amenities</h2>
        </div>

        {/* Grid layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}
        >
          {list.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card amenity-card"
              style={{
                padding: '2rem',
                borderRadius: '4px',
                backgroundColor: 'var(--color-ivory)',
                border: 'var(--border-brass)',
                display: 'flex',
                gap: '1.2rem',
                alignItems: 'start',
                transition: 'var(--transition-smooth)'
              }}
            >
              {/* Icon Container */}
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(194, 155, 79, 0.1)',
                  border: '1px solid var(--color-brass)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--color-brass)',
                  flexShrink: 0
                }}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-teak-dark)', fontWeight: 500 }}>
                  {item.name}
                </h4>
                <p style={{ color: 'var(--color-teak-light)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .amenity-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-brass);
          box-shadow: 0 10px 25px rgba(10, 6, 4, 0.1);
        }
      `}</style>
    </section>
  );
}
