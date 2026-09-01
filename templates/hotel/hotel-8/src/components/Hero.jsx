import React, { useState } from 'react';
import { Calendar, Users, MapPin, Search } from 'lucide-react';

export default function Hero({ onBookClick }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookClick({ checkIn, checkOut, guests });
  };

  return (
    <section 
      id="overview"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--color-dark-bg)'
      }}
    >
      {/* Background Image with Slow Pan Animation */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("images/1_hero_overview.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          opacity: 0.65
        }}
        className="animate-pan"
      />

      {/* Luxury Vignette and Gradients */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(15, 9, 6, 0.8) 0%, rgba(15, 9, 6, 0.4) 40%, rgba(15, 9, 6, 0.2) 100%), linear-gradient(to top, rgba(15, 9, 6, 0.9) 0%, transparent 20%)',
          zIndex: 2
        }}
      />

      {/* Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '680px', color: 'var(--color-ivory)' }} className="animate-fade-in">
          {/* Emblem decoration */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-brass)' }}></div>
            <span style={{ 
              fontFamily: 'var(--font-serif-sc)', 
              color: 'var(--color-brass)', 
              fontSize: '0.85rem', 
              letterSpacing: '0.25em',
              textTransform: 'uppercase'
            }}>
              Mewari Heritage Sanctuary
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 4.8rem)', 
            lineHeight: '1.1', 
            marginBottom: '1.5rem', 
            color: 'var(--color-ivory)',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            Where Timeless Legends <br />
            <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: 300, color: 'var(--color-sandstone-light)' }}>
              Whisper Comfort
            </span>
          </h1>

          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', 
            fontWeight: 300, 
            lineHeight: '1.7', 
            color: 'var(--color-sandstone-light)', 
            opacity: 0.9, 
            marginBottom: '2.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Immerse yourself in Rajasthani royal heritage. Ananthara is a handcrafted palace hotel built from raw sandstone, polished marble, and antique brass, capturing the heart of Udaipur's golden sunsets.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => onBookClick()} className="btn-gold" style={{ padding: '1rem 2.5rem' }}>
              EXPLORE THE SANCTUARY
            </button>
          </div>
        </div>
      </div>

      {/* Quick Booking Widget */}
      <div 
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1000px',
          zIndex: 4,
          animation: 'fadeIn 1s 0.3s ease-out both'
        }}
      >
        <form 
          onSubmit={handleSubmit}
          className="glass-card-dark"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            padding: '1.5rem 2rem',
            borderRadius: '4px',
            border: '1px solid rgba(194, 155, 79, 0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            alignItems: 'end'
          }}
        >
          {/* Check-In */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ 
              fontFamily: 'var(--font-serif-sc)', 
              fontSize: '0.7rem', 
              letterSpacing: '0.15em', 
              color: 'var(--color-brass)',
              textTransform: 'uppercase'
            }}>
              Check In
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Calendar size={16} style={{ position: 'absolute', left: '12px', color: 'var(--color-brass)' }} />
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(194, 155, 79, 0.2)',
                  color: 'var(--color-ivory)',
                  padding: '0.6rem 1rem 0.6rem 2.2rem',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                  borderRadius: '2px'
                }}
              />
            </div>
          </div>

          {/* Check-Out */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ 
              fontFamily: 'var(--font-serif-sc)', 
              fontSize: '0.7rem', 
              letterSpacing: '0.15em', 
              color: 'var(--color-brass)',
              textTransform: 'uppercase'
            }}>
              Check Out
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Calendar size={16} style={{ position: 'absolute', left: '12px', color: 'var(--color-brass)' }} />
              <input 
                type="date" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(194, 155, 79, 0.2)',
                  color: 'var(--color-ivory)',
                  padding: '0.6rem 1rem 0.6rem 2.2rem',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                  borderRadius: '2px'
                }}
              />
            </div>
          </div>

          {/* Guests */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ 
              fontFamily: 'var(--font-serif-sc)', 
              fontSize: '0.7rem', 
              letterSpacing: '0.15em', 
              color: 'var(--color-brass)',
              textTransform: 'uppercase'
            }}>
              Guests
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Users size={16} style={{ position: 'absolute', left: '12px', color: 'var(--color-brass)' }} />
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(194, 155, 79, 0.2)',
                  color: 'var(--color-ivory)',
                  padding: '0.6rem 1.5rem 0.6rem 2.2rem',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                  borderRadius: '2px',
                  appearance: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="1 Guest" style={{ color: 'var(--color-teak-dark)' }}>1 Guest</option>
                <option value="2 Guests" style={{ color: 'var(--color-teak-dark)' }}>2 Guests</option>
                <option value="3 Guests" style={{ color: 'var(--color-teak-dark)' }}>3 Guests</option>
                <option value="4 Guests" style={{ color: 'var(--color-teak-dark)' }}>4 Guests (Suite)</option>
                <option value="5+ Guests" style={{ color: 'var(--color-teak-dark)' }}>Royal Group</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button 
            type="submit" 
            className="btn-gold" 
            style={{ 
              width: '100%', 
              height: '38px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '0.5rem',
              padding: 0
            }}
          >
            <Search size={16} />
            <span>CHECK AVAILABILITY</span>
          </button>
        </form>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #overview { height: auto !important; min-height: 100vh; padding: 7rem 0 15rem 0 !important; }
          #overview .container { padding-bottom: 0 !important; }
          #overview div:nth-child(4) { bottom: 2% !important; width: 94% !important; }
        }
      `}</style>
    </section>
  );
}
