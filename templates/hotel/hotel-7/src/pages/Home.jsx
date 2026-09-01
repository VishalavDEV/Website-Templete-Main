import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Compass, UtensilsCrossed } from 'lucide-react';
import BookingWidget from '../components/BookingWidget';
import Marquee from '../components/Marquee';
import { ROOMS } from '../data/rooms';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ overflow: 'hidden' }}
    >
      {/* 1. Cinematic Hero Section */}
      <div style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        boxSizing: 'border-box'
      }}>
        {/* Parallax Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }} />
        
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(17, 17, 17, 0.45)',
          zIndex: 2
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 3, maxWidth: '800px' }}>
          <motion.p
            initial={{ letterSpacing: '4px', opacity: 0, y: 15 }}
            animate={{ letterSpacing: '8px', opacity: 0.8, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              color: '#c5a880',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            Aurelia Haven Resort
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#ffffff',
              lineHeight: '1.15',
              fontWeight: '400',
              margin: '0 0 24px 0',
              textShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            Stay Somewhere <br />
            <span style={{ fontStyle: 'italic', color: '#faf8f5' }}>Extraordinary.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: '#faf8f5',
              lineHeight: '1.6',
              marginBottom: '40px',
              fontWeight: '300',
              textShadow: '0 2px 6px rgba(0,0,0,0.4)'
            }}
          >
            Where nature, comfort, and unforgettable experiences come together.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              to="/rooms"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                backgroundColor: '#c5a880',
                color: '#ffffff',
                padding: '16px 36px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid #c5a880'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#c5a880';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#c5a880';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Explore Rooms
            </Link>
            <Link
              to="/experiences"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                padding: '16px 36px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid #ffffff'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#111111';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Discover Experiences
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            color: '#faf8f5',
            fontSize: '0.75rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
        >
          <span>Scroll</span>
          <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
        </motion.div>
      </div>

      {/* 2. Booking Widget Placement */}
      <div style={{ marginTop: '-50px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <BookingWidget />
      </div>

      {/* 3. Introduction Section (Split layout) */}
      <div style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left Resort Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ overflow: 'hidden', aspectRatio: '4/3', border: '1px solid rgba(197, 168, 128, 0.15)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
              alt="Aurelia Haven Experience"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '3px',
              color: '#c5a880',
              textTransform: 'uppercase'
            }}>
              THE AURELIA EXPERIENCE
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              fontWeight: '400',
              lineHeight: '1.2',
              color: '#1e1e1e',
              margin: 0
            }}>
              Designed for slow mornings and unforgettable evenings.
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              lineHeight: '1.75',
              color: '#555555',
              margin: 0
            }}>
              Aurelia Haven is an intentional retreat where nature guides the architecture. Crafted with local redwood timber, heavy granite slabs, and vast structural glass, our residences exist in perfect balance with the Big Sur landscape. Here, the natural cycle of light, wind, and silent hot springs takes over.
            </p>
            <div style={{ marginTop: '10px' }}>
              <Link
                to="/about"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: '#c5a880',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Our Heritage Story <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Marquee strip */}
      <Marquee />

      {/* 5. Rooms & Suites Showcase */}
      <div style={{ padding: '120px 40px', backgroundColor: '#faf8f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '3px',
                color: '#c5a880',
                textTransform: 'uppercase'
              }}>
                ACCOMMODATIONS
              </span>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.6rem',
                fontWeight: '400',
                margin: '10px 0 0 0',
                color: '#111111'
              }}>
                Signature Sanctuary Suites
              </h2>
            </div>
            <Link
              to="/rooms"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: '#111111',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid #111111',
                paddingBottom: '4px'
              }}
            >
              View All Rooms <ArrowRight size={14} />
            </Link>
          </div>

          {/* Rooms Grid (First 3 Rooms) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {ROOMS.slice(0, 3).map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(197, 168, 128, 0.15)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                {/* Image Wrap */}
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
                  <span style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: '#111111',
                    color: '#c5a880',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '6px 12px',
                    border: '1px solid rgba(197, 168, 128, 0.3)'
                  }}>
                    {room.category}
                  </span>
                </div>

                {/* Details */}
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: '400', margin: 0, color: '#111111' }}>
                      {room.name}
                    </h3>
                    <span style={{ fontSize: '0.9rem', color: '#c5a880', fontWeight: '700' }}>
                      ${room.price} <span style={{ fontSize: '0.72rem', color: '#777777', fontWeight: '400' }}>/ Night</span>
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                    {room.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: '#777777',
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '15px',
                    marginTop: 'auto'
                  }}>
                    <span>Guests: {room.guests}</span>
                    <span>Size: {room.size}</span>
                    <span>Bed: {room.bed}</span>
                  </div>

                  <div style={{ marginTop: '10px' }}>
                    <Link
                      to={`/rooms/${room.id}`}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
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
                      View Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Quick Highlights Grid */}
      <div style={{ padding: '120px 40px', backgroundColor: '#111111', color: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Star size={30} style={{ color: '#c5a880' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '400', margin: 0 }}>Michelin Gastronomy</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#a3a3a3', margin: 0 }}>
              Savor curated modern culinary concepts helmed by Michelin-starred culinary professionals at Terra and Ember.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Compass size={30} style={{ color: '#c5a880' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '400', margin: 0 }}>Curated Excursions</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#a3a3a3', margin: 0 }}>
              Re-engage with the wild world on sunrise ridge yoga, sunset ocean catamaran cruises, or botanical hikes.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <UtensilsCrossed size={30} style={{ color: '#c5a880' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '400', margin: 0 }}>Absolute Sanctuary</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#a3a3a3', margin: 0 }}>
              Retreat in deep privacy. Unwind with personal hot springs, wood saunas, and custom stargazing decks.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
