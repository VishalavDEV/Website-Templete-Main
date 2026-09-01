import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, Send, CheckCircle2, Share2, Globe, Radio } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(245, 185, 0, 0.2)', paddingTop: '80px', paddingBottom: '40px', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Brand Info */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, color: '#FFF', textTransform: 'uppercase', marginBottom: '16px' }}>
              <Music style={{ color: 'var(--gold-bright)' }} size={28} />
              VELORA <span style={{ color: 'var(--gold-primary)' }}>LIVE</span>
            </Link>
            <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', marginBottom: '24px', fontStyle: 'italic' }}>
              "FEEL THE SOUND. OWN THE NIGHT."
            </p>
            <p style={{ color: 'var(--text-dark-gray)', fontSize: '0.85rem', lineHeight: '1.6' }}>
              Midnight Echo 2026<br />
              Aurora Sound Arena, Chennai, India<br />
              24 October 2026
            </p>
          </div>

          {/* Event Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-bright)', fontSize: '1rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
              EVENT
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/about" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>About Velora</Link></li>
              <li><Link to="/artists" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Featured Artists</Link></li>
              <li><Link to="/events" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Concert Experiences</Link></li>
              <li><Link to="/schedule" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Festival Schedule</Link></li>
              <li><Link to="/experience" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>The Velora Experience</Link></li>
              <li><Link to="/stages" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Stages Overview</Link></li>
            </ul>
          </div>

          {/* Ticket Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-bright)', fontSize: '1rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
              TICKETS & VENUE
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/tickets" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>General Pass (₹1,499)</Link></li>
              <li><Link to="/tickets" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Premium Pass (₹2,999)</Link></li>
              <li><Link to="/tickets" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>VIP Pass (₹5,999)</Link></li>
              <li><Link to="/venue" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Aurora Arena Map</Link></li>
              <li><Link to="/register" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Early Registration</Link></li>
              <li><Link to="/gallery" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Event Gallery</Link></li>
            </ul>
          </div>

          {/* Support & Social */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-bright)', fontSize: '1rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
              STAY CONNECTED
            </h4>
            <div style={{ display: 'flex', gap: '14px', marginBottom: '24px' }}>
              <a href="#instagram" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1A1A1A', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', transition: '0.3s' }}>
                <Share2 size={18} />
              </a>
              <a href="#youtube" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1A1A1A', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', transition: '0.3s' }}>
                <Globe size={18} />
              </a>
              <a href="#facebook" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1A1A1A', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-bright)', transition: '0.3s' }}>
                <Radio size={18} />
              </a>
            </div>

            <form onSubmit={handleSubscribe} style={{ position: 'relative' }}>
              <input
                type="email"
                placeholder="Subscribe to VIP Updates..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '12px 16px', paddingRight: '45px', borderRadius: 'var(--radius-pill)', background: '#141414', border: '1px solid #333', color: '#FFF', fontSize: '0.85rem' }}
              />
              <button type="submit" style={{ position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)', background: 'var(--gold-bright)', color: '#000', border: 'none', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Send size={14} />
              </button>
            </form>
            {subscribed && (
              <p style={{ color: 'var(--gold-bright)', fontSize: '0.8rem', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} /> Subscribed to VIP lineup alerts!
              </p>
            )}
          </div>

        </div>

        <div style={{ borderTop: '1px solid #1A1A1A', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--text-dark-gray)' }}>
          <p>© 2026 Velora Live — Midnight Echo. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/faq" style={{ color: 'var(--text-dark-gray)' }}>FAQ</Link>
            <Link to="/contact" style={{ color: 'var(--text-dark-gray)' }}>Support</Link>
            <span style={{ color: 'var(--text-dark-gray)' }}>Terms & Conditions</span>
            <span style={{ color: 'var(--text-dark-gray)' }}>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
