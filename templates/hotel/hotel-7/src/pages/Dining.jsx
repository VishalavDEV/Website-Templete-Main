import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ForkKnife, Sparkles } from 'lucide-react';
import { DINING } from '../data/dining';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -15 }
};

export default function Dining() {
  const handleReservation = (restaurantName) => {
    alert(`Reservation request for table at ${restaurantName} submitted to our concierge.`);
  };

  return (
    <div
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
          Culinary Masterclasses & Grills
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem',
          fontWeight: '400',
          margin: '10px 0 20px 0',
          color: '#1e1e1e'
        }}>
          Gastronomy & Dining
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
          Experience fine culinary details helmed by Michelin-starred culinary professionals across our organic gardens and open fires.
        </p>
      </div>

      {/* Restaurants List Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {DINING.map((restaurant, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={restaurant.id}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '50px',
                alignItems: 'center'
              }}
            >
              {/* Image Column */}
              <div style={{
                order: isEven ? 1 : 2,
                overflow: 'hidden',
                aspectRatio: '16/10',
                border: '1px solid rgba(197, 168, 128, 0.15)'
              }}>
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>

              {/* Details Column */}
              <div style={{
                order: isEven ? 2 : 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                  <span style={{
                    backgroundColor: '#faf8f5',
                    border: '1px solid rgba(197, 168, 128, 0.3)',
                    color: '#c5a880',
                    fontSize: '0.68rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '4px 10px'
                  }}>
                    {restaurant.badge}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#777777', fontStyle: 'italic' }}>
                    {restaurant.cuisine}
                  </span>
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  fontWeight: '400',
                  margin: 0,
                  color: '#1e1e1e'
                }}>
                  {restaurant.name}
                </h2>

                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.7',
                  color: '#666666',
                  margin: 0
                }}>
                  {restaurant.description}
                </p>

                {/* Specs Box */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  backgroundColor: '#faf8f5',
                  padding: '20px',
                  border: '1px solid #f1f5f9',
                  fontSize: '0.82rem',
                  color: '#555555'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={14} style={{ color: '#c5a880' }} />
                    <span><strong>Hours:</strong> {restaurant.hours}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={14} style={{ color: '#c5a880' }} />
                    <span><strong>Signature:</strong> {restaurant.signature}</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleReservation(restaurant.name)}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#ffffff',
                      backgroundColor: '#111111',
                      border: '1px solid #111111',
                      padding: '12px 24px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#c5a880';
                      e.currentTarget.style.borderColor = '#c5a880';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#111111';
                      e.currentTarget.style.borderColor = '#111111';
                    }}
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
