import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="editorial-footer">
      <div className="container">
        <div className="footer-title-giant">EMBER HOUSE</div>

        <div className="d-flex flex-wrap justify-content-center gap-5 fs-6 mb-4 text-uppercase fw-semibold" style={{ letterSpacing: '0.2em' }}>
          <span>CHENNAI</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-paper hover-gold">Instagram</a>
          <a href="mailto:hello@emberhouse.example" className="text-paper hover-gold">Email</a>
          <Link to="/contact#reservation" className="text-paper hover-gold">Reservations</Link>
        </div>

        <div className="text-muted small mt-5">&copy; <span className="current-year">{currentYear}</span> Ember House. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
