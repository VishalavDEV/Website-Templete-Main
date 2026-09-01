import React, { useState } from 'react';
import { Eye, Shield, Users, Bed, Check, X } from 'lucide-react';

export default function Stay({ onBookClick }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 'deluxe',
      name: 'Heritage Deluxe Room',
      price: '₹18,000',
      guests: '2 Adults',
      bed: 'King Size',
      image: 'images/4_palace_suite.jpg', // using suite for fallback
      description: 'Elegant heritage room showcasing hand-finished stone walls, traditional carved tables, and antique metal sconces.',
      amenities: ['Complimentary Wi-Fi', 'Fruit Platter', 'Organic Toiletries', '24/7 Room Service'],
      details: 'Our Heritage Deluxe Room captures the cozy romance of ancient Rajasthani quarters. It features authentic stone blocks, a plush king bed with embroidered cotton sheets, custom carved work desks, and tall arched windows overlooking the lush courtyard palms.'
    },
    {
      id: 'courtyard',
      name: 'Courtyard Suite',
      price: '₹26,000',
      guests: '2 Adults, 1 Child',
      bed: 'Imperial King',
      image: 'images/8_courtyard_pool.jpg', // using courtyard view
      description: 'Spacious suite overlooking the central water lily pond and the sandstone columns of the inner courtyard.',
      amenities: ['Private Balcony', 'Ayurvedic Pillow Menu', 'Teak Wood Armchairs', 'Butler Service'],
      details: 'The Courtyard Suite is positioned along the inner pathways of the palace. Guests enjoy private seating on the balcony overlooking the teal-green swimming pool, a lavish master bath with natural stone fittings, and personalized hosting service.'
    },
    {
      id: 'royal',
      name: 'Royal Suite',
      price: '₹35,000',
      guests: '3 Adults',
      bed: 'Royal Canopy King',
      image: 'images/4_palace_suite.jpg',
      description: 'Grand palace suite with high dome ceilings, elaborate miniature frescoes, and private jharokha bay window seats.',
      amenities: ['24/7 Butler Escort', 'Private Jharokha Window', 'Welcoming Platter', 'Airport Limousine'],
      details: 'Embodying the highest standard of Mewari luxury, the Royal Suite features a majestic canopy four-poster bed, original hand-painted miniature paintings, and a grand jharokha window with silk gold curtains looking out onto distant misty hills.'
    },
    {
      id: 'family',
      name: 'Family Suite',
      price: '₹42,000',
      guests: '4 Adults',
      bed: 'Two King Beds',
      image: 'images/3_the_lobby.jpg', // using lobby for fallback
      description: 'Expansive interconnected multi-room suite designed for family groups seeking traditional palace living.',
      amenities: ['Interconnected Rooms', 'Walk-in Closets', 'Exclusive Dining Area', 'Personal Concierge'],
      details: 'The Family Suite offers two grand interconnected master bedrooms, each with private en-suite baths. Finished in dark teak wood and rich silk textiles, it includes a central dining table and spacious seating lounges for group comfort.'
    }
  ];

  return (
    <section id="stay" style={{ padding: '8rem 0', backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-ivory)', position: 'relative' }}>
      
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 10% 30%, rgba(194, 155, 79, 0.03) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header dark">
          <span className="subtitle" style={{ color: 'var(--color-brass)' }}>Imperial Registry</span>
          <h2 style={{ color: 'var(--color-ivory)' }}>Our Heritage Lodgings</h2>
        </div>

        {/* Room Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2.5rem' 
          }}
        >
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="glass-card-dark room-card"
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(194, 155, 79, 0.2)',
                backgroundColor: '#140D0A',
                transition: 'var(--transition-smooth)'
              }}
            >
              {/* Image Frame */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={room.image} 
                  alt={room.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-slow)'
                  }}
                  className="room-zoom"
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(15, 9, 6, 0.5) 0%, transparent 60%)',
                  pointerEvents: 'none'
                }} />
                
                {/* Price Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(15, 9, 6, 0.85)',
                  border: '1px solid var(--color-brass)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-serif-sc)',
                  fontSize: '0.8rem',
                  color: 'var(--color-ivory)',
                  letterSpacing: '0.05em'
                }}>
                  {room.price} / NIGHT
                </div>
              </div>

              {/* Text specifications */}
              <div style={{ padding: '1.8rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-ivory)' }}>
                  {room.name}
                </h3>
                
                <p style={{ color: 'var(--color-sandstone-light)', opacity: 0.85, fontSize: '0.9rem', lineHeight: '1.6', fontWeight: 300 }}>
                  {room.description}
                </p>

                {/* Spec Icons */}
                <div style={{ display: 'flex', gap: '1.5rem', margin: '0.5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-brass)' }}>
                    <Users size={14} />
                    <span>{room.guests}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-brass)' }}>
                    <Bed size={14} />
                    <span>{room.bed}</span>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
                  <button 
                    onClick={() => setSelectedRoom(room)}
                    className="btn-outline" 
                    style={{ 
                      padding: '0.6rem 0', 
                      fontSize: '0.75rem', 
                      textAlign: 'center',
                      borderColor: 'rgba(194, 155, 79, 0.4)'
                    }}
                  >
                    DETAILS
                  </button>
                  <button 
                    onClick={() => onBookClick({ suiteType: room.name })}
                    className="btn-gold" 
                    style={{ 
                      padding: '0.6rem 0', 
                      fontSize: '0.75rem', 
                      textAlign: 'center'
                    }}
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(15, 9, 6, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2200,
            padding: '1.5rem',
            animation: 'fadeInSimple 0.3s ease-out'
          }}
        >
          <div 
            className="glass-card-dark"
            style={{
              width: '100%',
              maxWidth: '650px',
              borderRadius: '4px',
              border: '1px solid rgba(194, 155, 79, 0.4)',
              position: 'relative',
              padding: '2.5rem',
              boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            {/* Close */}
            <button 
              onClick={() => setSelectedRoom(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'var(--color-sandstone-light)',
                cursor: 'pointer',
                opacity: 0.7,
                zIndex: 10
              }}
            >
              <X size={22} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ position: 'relative', borderRadius: '2px', overflow: 'hidden' }}>
                <img 
                  src={selectedRoom.image} 
                  alt={selectedRoom.name}
                  style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', bottom: '15px', left: '15px', color: 'var(--color-ivory)', zIndex: 5 }}>
                  <h3 style={{ fontSize: '1.8rem', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    {selectedRoom.name}
                  </h3>
                </div>
              </div>

              <div>
                <span style={{ fontFamily: 'var(--font-serif-sc)', color: 'var(--color-brass)', fontSize: '0.8rem', letterSpacing: '0.15em' }}>
                  SPECIFICATIONS & STORY
                </span>
                <p style={{ color: 'var(--color-sandstone-light)', opacity: 0.9, fontSize: '0.92rem', lineHeight: '1.7', fontWeight: 300, marginTop: '0.5rem' }}>
                  {selectedRoom.details}
                </p>
              </div>

              {/* Amenities list */}
              <div>
                <span style={{ fontFamily: 'var(--font-serif-sc)', color: 'var(--color-brass)', fontSize: '0.8rem', letterSpacing: '0.15em', display: 'block', marginBottom: '0.8rem' }}>
                  KEY INCLUSIONS
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  {selectedRoom.amenities.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <Check size={12} style={{ color: 'var(--color-brass)' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-sandstone-light)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.2rem', marginTop: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-serif-header)', fontSize: '1.4rem', color: 'var(--color-brass)' }}>
                  {selectedRoom.price} / night
                </span>
                <button 
                  onClick={() => { onBookClick({ suiteType: selectedRoom.name }); setSelectedRoom(null); }}
                  className="btn-gold" 
                  style={{ padding: '0.8rem 2.5rem' }}
                >
                  RESERVE STAY
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      <style>{`
        .room-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-brass) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }
        .room-card:hover .room-zoom {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
