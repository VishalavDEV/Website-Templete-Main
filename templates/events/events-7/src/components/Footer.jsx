import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Mail, Send, Check, Share2, Globe, Video, MessageSquare, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer style={{
      background: '#090A0D',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '80px',
      paddingBottom: '40px',
      color: 'var(--soft-grey)',
      fontSize: '0.9rem'
    }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Newsletter Section */}
        <div 
          className="glass-panel"
          style={{
            padding: '40px 32px',
            marginBottom: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            background: 'linear-gradient(135deg, rgba(233,43,43,0.12) 0%, rgba(255,107,44,0.12) 100%)',
            border: '1px solid rgba(255,107,44,0.3)'
          }}
        >
          <div>
            <span style={{ color: 'var(--bright-orange)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              MARATHON NEWSLETTER
            </span>
            <h3 className="font-display" style={{ fontSize: '2.2rem', color: '#FFFFFF', marginTop: '4px' }}>
              NEVER MISS THE START.
            </h3>
            <p style={{ color: 'var(--warm-white)', opacity: 0.9, fontSize: '0.92rem' }}>
              Get race updates, training tips, bib alerts, and event announcements directly in your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', flex: '1', maxWidth: '460px' }}>
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              style={{
                flex: 1,
                padding: '14px 20px',
                background: 'rgba(9,10,13,0.9)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '6px',
                color: '#FFFFFF',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '14px 24px', fontSize: '0.85rem' }}>
              {subscribed ? <Check size={16} /> : 'JOIN THE RUN'}
            </button>
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--marathon-red), var(--bright-orange))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF'
              }}>
                <Flame size={22} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: '1.8rem', color: '#FFF', lineHeight: 0.9 }}>VAYORA</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--bright-orange)', letterSpacing: '2px' }}>RUNFEST 2026</div>
              </div>
            </Link>
            
            <p style={{ color: 'var(--warm-white)', opacity: 0.8, lineHeight: 1.6, marginBottom: '20px', maxWidth: '360px' }}>
              Chennai's premier international half marathon experience. Bringing thousands of runners and supporters together on one road.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#instagram" title="Instagram" style={{ color: '#FFF', background: 'rgba(255,255,255,0.08)', padding: '10px', borderRadius: '50%' }}><Share2 size={18} /></a>
              <a href="#facebook" title="Facebook" style={{ color: '#FFF', background: 'rgba(255,255,255,0.08)', padding: '10px', borderRadius: '50%' }}><Globe size={18} /></a>
              <a href="#youtube" title="YouTube" style={{ color: '#FFF', background: 'rgba(255,255,255,0.08)', padding: '10px', borderRadius: '50%' }}><Video size={18} /></a>
              <a href="#twitter" title="X / Twitter" style={{ color: '#FFF', background: 'rgba(255,255,255,0.08)', padding: '10px', borderRadius: '50%' }}><MessageSquare size={18} /></a>
            </div>
          </div>

          {/* Column 1: EVENT */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '16px' }}>
              EVENT
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/race-info" style={{ color: 'inherit', textDecoration: 'none' }}>Race Info</Link></li>
              <li><Link to="/schedule" style={{ color: 'inherit', textDecoration: 'none' }}>Event Schedule</Link></li>
              <li><Link to="/route" style={{ color: 'inherit', textDecoration: 'none' }}>Route Map</Link></li>
              <li><Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>Registration</Link></li>
              <li><Link to="/expo" style={{ color: 'inherit', textDecoration: 'none' }}>Race Expo</Link></li>
            </ul>
          </div>

          {/* Column 2: COMMUNITY */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '16px' }}>
              COMMUNITY
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/participants" style={{ color: 'inherit', textDecoration: 'none' }}>Participants</Link></li>
              <li><Link to="/results" style={{ color: 'inherit', textDecoration: 'none' }}>Live Results</Link></li>
              <li><Link to="/training" style={{ color: 'inherit', textDecoration: 'none' }}>Training Plans</Link></li>
              <li><Link to="/volunteers" style={{ color: 'inherit', textDecoration: 'none' }}>Volunteers</Link></li>
              <li><Link to="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: SUPPORT */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '16px' }}>
              SUPPORT
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQs</Link></li>
              <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link></li>
              <li><Link to="/sponsors" style={{ color: 'inherit', textDecoration: 'none' }}>Sponsors</Link></li>
              <li><span style={{ opacity: 0.7 }}>Emergency Line: +91 90000 78901</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem'
        }}>
          <div>
            © 2026 Vayora Runfest. All Rights Reserved. Designed for Chennai Marathon Event.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms & Conditions</span>
            <span style={{ cursor: 'pointer' }}>Event Rules</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
