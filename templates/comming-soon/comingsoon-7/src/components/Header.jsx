import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Sparkles, FileText, Zap, Compass, Flame } from 'lucide-react';

export const Header = ({ 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenSpecsModal,
  activeColorway 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="site-header">
      {/* Top Notification Announcement Bar */}
      <div className="top-banner">
        <div className="top-banner-content">
          <span className="live-dot"></span>
          <span className="top-banner-text">
            <strong>GLOBAL LAUNCH DROP:</strong> AEROSTRIDE X-PRO Limited Batch 01 Now Live. Worldwide Carbon-Neutral Express Shipping.
          </span>
          <span className="top-banner-badge">USE CODE: STRIDE2026</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-navbar glass-panel">
        <div className="nav-container">
          
          {/* Logo & Brand */}
          <div className="nav-brand">
            <a href="#hero" className="brand-logo">
              <span className="brand-icon">
                <Zap className="zap-svg" />
              </span>
              <span className="brand-name">AEROSTRIDE</span>
              <span className="brand-tag">X-PRO</span>
            </a>
          </div>

          {/* Center Navigation Links */}
          <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#hero" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>
              Launch Drop
            </a>
            <a href="#showcase" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              360° Showcase
            </a>
            <a href="#motion-lab" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-badge-pill">Motion Lab</span>
              Kinetic Video
            </a>
            <a href="#technology" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Tech Specs
            </a>
            <a href="#reviews" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Reviews
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="nav-actions">
            
            {/* UI/UX Spec Deliverables Button */}
            <button 
              className="spec-doc-btn"
              onClick={onOpenSpecsModal}
              title="View UI/UX Architecture & Technical Specifications"
            >
              <FileText size={16} />
              <span className="spec-doc-text">UI/UX Specs</span>
            </button>

            {/* Wishlist Button */}
            <button 
              className="icon-btn" 
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              title="View Wishlist"
            >
              <Heart size={20} className={wishlistCount > 0 ? 'heart-filled' : ''} />
              {wishlistCount > 0 && (
                <span className="badge-count">{wishlistCount}</span>
              )}
            </button>

            {/* Cart Drawer Trigger */}
            <button 
              className="icon-btn cart-btn" 
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              title="Open Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="badge-count cart-badge">{cartCount}</span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
