import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, Mail } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-brand">{weddingData.brand.name}</h2>
        <div className="footer-couple">{weddingData.couple.namesCombined}</div>
        <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--muted)', fontSize: '1.15rem' }}>
          "{weddingData.brand.tagline}"
        </p>

        {/* NAVIGATION LINKS */}
        <ul className="footer-nav">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/our-story">OUR STORY</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><Link to="/schedule">SCHEDULE</Link></li>
          <li><Link to="/venue">VENUE</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/family">FAMILY</Link></li>
          <li><Link to="/rsvp">RSVP</Link></li>
          <li><Link to="/gift-registry">GIFT REGISTRY</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        {/* SOCIAL LINKS */}
        <div className="footer-socials">
          <a href={weddingData.contact.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href={weddingData.contact.social.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href={weddingData.contact.social.whatsapp} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a href={weddingData.contact.social.email} className="social-icon-btn" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        {/* COPYRIGHT & CREDITS */}
        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', borderTop: '1px solid rgba(245, 242, 237, 0.1)', paddingTop: '2rem' }}>
          Made with love for {weddingData.couple.namesCombined}.
          <br />
          <span style={{ marginTop: '0.4rem', display: 'inline-block' }}>© 2026 {weddingData.brand.name}. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
}
