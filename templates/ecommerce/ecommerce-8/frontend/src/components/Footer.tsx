import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="main-footer glass-panel">
      <div className="footer-grid">
        <div className="footer-info">
          <Link to="/" className="footer-logo" data-cursor="play">
            <span className="logo-icon">🧱</span>
            <span className="logo-text">TOY<span className="text-accent">WORLD</span></span>
          </Link>
          <p className="footer-desc">
            Where toys come alive! Step into our interactive animated toy store and let the adventure begin.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Explore</h4>
          <Link to="/shop" data-cursor="drive">Catalog</Link>
          <Link to="/categories" data-cursor="build">Categories</Link>
          <Link to="/search" data-cursor="play">Search</Link>
        </div>

        <div className="footer-links-group">
          <h4>Collection</h4>
          <Link to="/wishlist" data-cursor="collect">My Toys</Link>
          <Link to="/cart" data-cursor="add-cart">Toy Box</Link>
          <Link to="/profile" data-cursor="activate">Account</Link>
        </div>

        <div className="footer-links-group">
          <h4>Support</h4>
          <Link to="/about" data-cursor="play">About Workshop</Link>
          <Link to="/about" data-cursor="play">Contact Us</Link>
          <Link to="/about" data-cursor="play">FAQ & Shipping</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Animated Toy World. Built with love, React & Framer Motion.</p>
      </div>
    </footer>
  );
};
