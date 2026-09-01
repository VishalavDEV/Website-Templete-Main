import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { ROOMS } from '../data/rooms';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.4 } }
};

export default function Rooms() {
  const [filter, setFilter] = useState('All');
  
  const filteredRooms = filter === 'All' 
    ? ROOMS 
    : ROOMS.filter(room => room.category === filter);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: '140px 40px 100px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '3px',
          color: '#c5a880',
          textTransform: 'uppercase'
        }}>
          Luxury Habitats
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem',
          fontWeight: '400',
          margin: '10px 0 20px 0',
          color: '#1e1e1e'
        }}>
          Our Suites & Villas
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: '#777777',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          Immerse yourself in our custom forest sanctuaries, overwater pavilions, and oceanfront pools designed for slow living.
        </p>
      </div>

      {/* Filter Category Switches */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        marginBottom: '60px'
      }}>
        {['All', 'Suite', 'Villa', 'Residence', 'Pavilion'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '10px 24px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: filter === cat ? '1px solid #c5a880' : '1px solid #e2e8f0',
              backgroundColor: filter === cat ? '#c5a880' : 'transparent',
              color: filter === cat ? '#ffffff' : '#555555',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}s
          </button>
        ))}
      </div>

      {/* Rooms Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '48px'
      }}>
        <AnimatePresence mode="popLayout">
          {filteredRooms.map((room, index) => (
            <motion.div
              layout
              key={room.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(197, 168, 128, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden'
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/2' }}>
                <img
                  src={room.image}
                  alt={room.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
                
                {/* Badges */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  display: 'flex',
                  gap: '8px'
                }}>
                  <span style={{
                    backgroundColor: '#111111',
                    color: '#c5a880',
                    fontSize: '0.68rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '6px 12px',
                    border: '1px solid rgba(197, 168, 128, 0.3)'
                  }}>
                    {room.category}
                  </span>
                </div>
              </div>

              {/* Info Details */}
              <div style={{ padding: '35px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.6rem',
                    fontWeight: '400',
                    margin: 0,
                    color: '#1e1e1e'
                  }}>
                    {room.name}
                  </h2>
                  <span style={{ fontSize: '0.95rem', color: '#c5a880', fontWeight: '700' }}>
                    ${room.price} <span style={{ fontSize: '0.72rem', color: '#777777', fontWeight: '400' }}>/ Night</span>
                  </span>
                </div>

                <p style={{
                  fontSize: '0.88rem',
                  lineHeight: '1.65',
                  color: '#666666',
                  margin: 0
                }}>
                  {room.description}
                </p>

                {/* Amenities checklist icons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '5px' }}>
                  {room.amenities.slice(0, 3).map((item, idx) => (
                    <span 
                      key={idx} 
                      style={{ 
                        fontSize: '0.72rem', 
                        backgroundColor: '#faf8f5', 
                        border: '1px solid #f1f5f9', 
                        color: '#666666', 
                        padding: '4px 10px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Sparkles size={10} style={{ color: '#c5a880' }} /> {item}
                    </span>
                  ))}
                  {room.amenities.length > 3 && (
                    <span style={{ fontSize: '0.72rem', color: '#c5a880', padding: '4px 4px' }}>+{room.amenities.length - 3} More</span>
                  )}
                </div>

                {/* Specs */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '15px',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '20px',
                  marginTop: 'auto',
                  fontSize: '0.78rem',
                  color: '#777777',
                  textAlign: 'center'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: '700', color: '#1e1e1e' }}>{room.guests} Guests</span>
                    <span style={{ fontSize: '0.68rem', color: '#999999' }}>Capacity</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid #f1f5f9', borderRight: '1px solid #f1f5f9' }}>
                    <span style={{ fontWeight: '700', color: '#1e1e1e' }}>{room.size}</span>
                    <span style={{ fontSize: '0.68rem', color: '#999999' }}>Room Area</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: '700', color: '#1e1e1e' }}>{room.view.split(' ')[0]} View</span>
                    <span style={{ fontSize: '0.68rem', color: '#999999' }}>Vista</span>
                  </div>
                </div>

                {/* CTA details */}
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    to={`/rooms/${room.id}`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#c5a880',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    View Sanctuary <ArrowRight size={12} />
                  </Link>

                  <Link
                    to="/booking"
                    state={{ selectedRoomId: room.id }}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#ffffff',
                      backgroundColor: '#1e1e1e',
                      padding: '10px 20px',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c5a880'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e1e1e'}
                  >
                    Book
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
