import React, { useState } from 'react';
import { ArrowUp, Send, Check } from 'lucide-react';
import { siteConfig } from '../data/content';
import { TwitterIcon, LinkedinIcon, GithubIcon, DribbbleIcon } from './SocialIcons';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail || !emailRegex.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }

    setNewsletterError('');
    setSubscribed(true);
    setNewsletterEmail('');

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: '#0f172a',
        color: '#f8fafc',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        borderTop: '1px solid #1e293b'
      }}
    >
      <div className="container">
        
        {/* Main Multi-Column Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          
          {/* Brand Info Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                {siteConfig.name}
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              {siteConfig.tagline}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }} aria-label="Twitter">
                <TwitterIcon size={16} />
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }} aria-label="LinkedIn">
                <LinkedinIcon size={16} />
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }} aria-label="GitHub">
                <GithubIcon size={16} />
              </a>
              <a href={siteConfig.socials.dribbble} target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }} aria-label="Dribbble">
                <DribbbleIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Hero', 'About', 'Services', 'Why Us', 'Portfolio', 'Team', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    style={{ fontSize: '0.875rem', color: '#94a3b8', transition: 'color 0.2s' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#94a3b8' }}>
              <li>Brand Architecture</li>
              <li>React & Micro-Frontends</li>
              <li>Spatial 3D & WebGL</li>
              <li>AI Product Strategy</li>
              <li>Conversion Telemetry</li>
              <li>Enterprise Cloud Security</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              AETHERIA Insights
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.25rem', lineHeight: 1.5 }}>
              Subscribe to receive our monthly engineering blueprints & digital trend teardowns.
            </p>

            {subscribed ? (
              <div style={{ padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10b981', color: '#34d399', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={16} /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter business email"
                    style={{
                      width: '100%',
                      padding: '0.65rem 1rem',
                      borderRadius: '10px',
                      background: '#1e293b',
                      border: newsletterError ? '1px solid #ef4444' : '1px solid #334155',
                      color: '#ffffff',
                      fontSize: '0.85rem'
                    }}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    style={{
                      padding: '0.65rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--gradient-primary)',
                      color: '#ffffff',
                      fontWeight: 700
                    }}
                  >
                    <Send size={16} />
                  </button>
                </div>
                {newsletterError && (
                  <span style={{ fontSize: '0.75rem', color: '#f87171' }}>{newsletterError}</span>
                )}
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div 
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid #1e293b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} AETHERIA Studio Inc. All rights reserved. Original architecture & content.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button
              onClick={scrollToTop}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#1e293b',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s'
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
