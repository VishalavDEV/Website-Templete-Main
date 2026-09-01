import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Aurelia Haven Chronicles.');
  };

  return (
    <footer style={{
      backgroundColor: '#111111',
      color: '#a3a3a3',
      padding: '80px 40px 40px',
      borderTop: '1px solid rgba(197, 168, 128, 0.15)',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '48px',
        marginBottom: '60px'
      }}>
        {/* Brand Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.6rem',
            fontWeight: '600',
            letterSpacing: '2px',
            color: '#ffffff',
            margin: 0
          }}>
            AURELIA <span style={{ color: '#c5a880', fontWeight: '400' }}>HAVEN</span>
          </h3>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.7', color: '#8c8c8c', margin: 0 }}>
            An editorial sanctuary designed in harmony with ancient redwood forests, coastal lagoon winds, and deep meditative silence.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={14} style={{ color: '#c5a880' }} /> 18 Aurelia Cliff Way, Big Sur, California
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={14} style={{ color: '#c5a880' }} /> +1 (800) 555-0199
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={14} style={{ color: '#c5a880' }} /> concierge@aureliahaven.fictional
            </span>
          </div>
        </div>

        {/* Directory Links */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '24px', margin: 0 }}>
            Directory
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
            <li><Link to="/rooms" style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.3s' }}>Suites & Residences</Link></li>
            <li><Link to="/experiences" style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.3s' }}>Curated Experiences</Link></li>
            <li><Link to="/dining" style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.3s' }}>Luxury Gastronomy</Link></li>
            <li><Link to="/spa" style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.3s' }}>Wellness & Spa Caves</Link></li>
            <li><Link to="/gallery" style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.3s' }}>Resort Photo Gallery</Link></li>
          </ul>
        </div>

        {/* Platform Links */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '24px', margin: 0 }}>
            Sanctuary
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
            <li><Link to="/about" style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.3s' }}>Our Heritage Story</Link></li>
            <li><Link to="/offers" style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.3s' }}>Exclusive Packages</Link></li>
            <li><Link to="/contact" style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.3s' }}>Inquiries & Contact</Link></li>
            <li><Link to="/booking" style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.3s' }}>Online Reservation</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '24px', margin: 0 }}>
            Chronicles
          </h4>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#8c8c8c', marginBottom: '20px', margin: 0 }}>
            Subscribe to receive stories of slow living, seasonal menus, and exclusive clifftop retreats.
          </p>
          <form onSubmit={handleSubscribe} style={{ display: 'flex', borderBottom: '1px solid rgba(197, 168, 128, 0.4)', paddingBottom: '6px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontSize: '0.85rem',
                flexGrow: 1,
                padding: '4px 0'
              }}
            />
            <button type="submit" style={{ background: 'none', border: 'none', color: '#c5a880', cursor: 'pointer', padding: '0 8px' }}>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '30px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        fontSize: '0.8rem',
        color: '#666666'
      }}>
        <span>&copy; {new Date().getFullYear()} Aurelia Haven Resort. All Rights Reserved.</span>
        <span>A Fictional Luxury Resort Template. Created for Demonstration Purposes.</span>
      </div>
    </footer>
  );
}
