import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useShop } from '../../context/ShopContext';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, wishlist, setIsSearchOpen, setIsCartOpen } = useShop();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'NEW', path: '/shop?filter=new' },
    { label: 'WOMEN', path: '/women' },
    { label: 'MEN', path: '/men' },
    { label: 'COLLECTIONS', path: '/collections' },
    { label: 'ACCESSORIES', path: '/accessories' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`aurel-header ${scrolled ? 'scrolled' : ''} ${!isHome ? 'light-bg' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1340px', margin: '0 auto', justifyContent: 'space-between' }}>

          {/* Mobile Menu Toggle & Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} color="#171614" /> : <Menu size={20} color="#171614" />}
            </button>

            {/* Logo with expansion hover effect */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="aurel-logo-link"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: '24px',
                fontWeight: '600',
                letterSpacing: '0.22em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'letter-spacing 0.35s ease, opacity 0.25s ease',
              }}
            >
              AUREL
            </Link>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.14em',
              fontWeight: '500',
              textTransform: 'uppercase',
            }}
            className="hidden-mobile"
          >
            {navLinks.map((item) => {
              const basePath = item.path.split('?')[0];
              const queryParam = item.path.includes('?') ? item.path.split('?')[1] : null;
              const isActive = queryParam
                ? location.pathname === basePath && location.search.includes(queryParam)
                : location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="aurel-nav-item"
                  style={{
                    position: 'relative',
                    padding: '4px 0',
                    color: isActive ? 'var(--accent-bronze)' : 'var(--text-primary)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.label}
                  <span className={`nav-underline ${isActive ? 'active' : ''}`} />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
            <button
              onClick={() => setIsSearchOpen(true)}
              data-cursor="SEARCH"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                letterSpacing: '0.1em',
                fontWeight: '500',
                color: 'var(--text-primary)',
                transition: 'transform 0.2s ease',
              }}
              className="icon-hover-btn"
              title="Search AUREL"
            >
              <Search size={17} strokeWidth={1.5} />
              <span className="hidden-mobile" style={{ textTransform: 'uppercase' }}>SEARCH</span>
            </button>

            <Link
              to="/wishlist"
              data-cursor="WISHLIST"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--text-primary)',
              }}
              className="icon-hover-btn"
              title="Saved Items"
            >
              <Heart size={17} strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-8px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-bronze)',
                    color: '#FFFFFF',
                    fontSize: '9px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {wishlist.length}
                </motion.span>
              )}
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              data-cursor="BAG"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                letterSpacing: '0.12em',
                fontWeight: '500',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
              }}
              className="icon-hover-btn"
              title="Shopping Bag"
            >
              <ShoppingBag size={17} strokeWidth={1.5} />
              <motion.span key={cartCount} initial={{ y: -4, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }}>
                BAG {cartCount.toString().padStart(2, '0')}
              </motion.span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--bg-primary)',
            zIndex: 99,
            padding: '90px 32px 40px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--text-primary)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '24px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              AUREL ATELIER — INDIA / ₹ INR
            </p>
          </div>
        </div>
      )}

      <style>{`
        .aurel-logo-link:hover {
          letter-spacing: 0.28em !important;
          opacity: 0.85;
        }

        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--text-primary);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .aurel-nav-item:hover .nav-underline {
          width: 100%;
        }

        .nav-underline.active {
          width: 100%;
          background-color: var(--accent-bronze);
        }

        .icon-hover-btn:hover {
          transform: scale(1.08);
        }
      `}</style>
    </>
  );
};
