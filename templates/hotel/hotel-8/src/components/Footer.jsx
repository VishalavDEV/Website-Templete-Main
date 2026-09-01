import React from 'react';
import { Mail, ArrowRight, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to the Ananthara Royal Chronicles.');
  };

  return (
    <footer style={{ backgroundColor: '#0A0604', borderTop: '1px solid rgba(194, 155, 79, 0.2)', padding: '6rem 0 3rem 0', color: 'var(--color-ivory)' }}>
      <div className="container">
        
        {/* Footer Top Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Col 1: Hotel Brand */}
          <div>
            <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-serif-header)', 
                fontSize: '1.5rem', 
                letterSpacing: '0.2em', 
                color: 'var(--color-sandstone-light)',
                lineHeight: 1.2
              }}>
                ANANTHARA
              </span>
              <span style={{ 
                fontFamily: 'var(--font-serif-sc)', 
                fontSize: '0.6rem', 
                letterSpacing: '0.35em', 
                color: 'var(--color-brass)',
                marginTop: '2px'
              }}>
                HERITAGE HOTEL
              </span>
            </a>
            <p style={{ color: 'var(--color-sandstone-light)', opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>
              An authentic architectural masterpiece built from handcrafted Jaisalmer sandstone and white Makrana marble, preserving the sovereignty and romance of Rajasthani hospitality.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-serif-sc)', 
              fontSize: '0.85rem', 
              color: 'var(--color-brass)', 
              letterSpacing: '0.2em', 
              marginBottom: '1.5rem',
              textTransform: 'uppercase'
            }}>
              EXPLORE
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', fontWeight: 300 }}>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: (document.documentElement.scrollHeight - window.innerHeight) * 0.05, behavior: 'smooth' }); }} style={{ color: 'var(--color-sandstone-light)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = '1'} onMouseLeave={(e) => e.target.style.opacity = '0.8'}>Hero Overview</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: (document.documentElement.scrollHeight - window.innerHeight) * 0.02, behavior: 'smooth' }); }} style={{ color: 'var(--color-sandstone-light)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = '1'} onMouseLeave={(e) => e.target.style.opacity = '0.8'}>Grand Lobby</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: (document.documentElement.scrollHeight - window.innerHeight) * 0.17, behavior: 'smooth' }); }} style={{ color: 'var(--color-sandstone-light)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = '1'} onMouseLeave={(e) => e.target.style.opacity = '0.8'}>Palace Suites</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: (document.documentElement.scrollHeight - window.innerHeight) * 0.31, behavior: 'smooth' }); }} style={{ color: 'var(--color-sandstone-light)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = '1'} onMouseLeave={(e) => e.target.style.opacity = '0.8'}>Fine Dining</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: (document.documentElement.scrollHeight - window.innerHeight) * 0.44, behavior: 'smooth' }); }} style={{ color: 'var(--color-sandstone-light)', opacity: 0.8 }} onMouseEnter={(e) => e.target.style.opacity = '1'} onMouseLeave={(e) => e.target.style.opacity = '0.8'}>Well-Being Spa</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-serif-sc)', 
              fontSize: '0.85rem', 
              color: 'var(--color-brass)', 
              letterSpacing: '0.2em', 
              marginBottom: '1.5rem',
              textTransform: 'uppercase'
            }}>
              THE PALACE
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', fontWeight: 300 }}>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: 'var(--color-brass)', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--color-sandstone-light)', opacity: 0.85 }}>Haridas Ji Ki Magri, Udaipur 313001, Rajasthan, India</span>
              </li>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--color-brass)' }} />
                <span style={{ color: 'var(--color-sandstone-light)', opacity: 0.85 }}>+91 294 241000</span>
              </li>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--color-brass)' }} />
                <span style={{ color: 'var(--color-sandstone-light)', opacity: 0.85 }}>concierge@anantharaheritage.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-serif-sc)', 
              fontSize: '0.85rem', 
              color: 'var(--color-brass)', 
              letterSpacing: '0.2em', 
              marginBottom: '1.5rem',
              textTransform: 'uppercase'
            }}>
              CHRONICLES
            </h4>
            <p style={{ color: 'var(--color-sandstone-light)', opacity: 0.7, fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1.2rem', fontWeight: 300 }}>
              Subscribe to receive updates on culinary festivals, heritage events, and seasonal reservation packages.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative' }}>
              <input 
                type="email" 
                placeholder="Enter email"
                required
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(194, 155, 79, 0.3)',
                  padding: '0.6rem 2.5rem 0.6rem 1rem',
                  color: 'var(--color-ivory)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                  borderRadius: '2px'
                }}
              />
              <button 
                type="submit"
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  height: '100%',
                  width: '40px',
                  backgroundColor: 'var(--color-brass)',
                  border: 'none',
                  color: 'var(--color-ivory)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-teak-light)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-brass)'}
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom (Fine Print) */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--color-sandstone-light)',
            opacity: 0.6,
            fontWeight: 300
          }}
        >
          <span>© 2026 Ananthara Heritage Hotels Private Limited. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Mewari Registry</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
