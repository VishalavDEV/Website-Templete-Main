import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { categoriesList, collectionsList } from '../data/products';

export default function Navbar() {
  const { cartCount, wishlist, setIsCartOpen, setIsSearchOpen } = useContext(ShopContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Announcement Bar */}
      <div
        style={{
          background: '#033B2C',
          color: 'var(--gold-light)',
          fontSize: '0.7rem',
          letterSpacing: '0.18em',
          padding: '0.45rem 1rem',
          textAlign: 'center',
          textTransform: 'uppercase',
          borderBottom: '1px solid var(--border-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          fontWeight: '600'
        }}
      >
        <Sparkles size={12} style={{ color: 'var(--gold-primary)' }} />
        <span>COMPLIMENTARY WORLDWIDE EXPRESS SHIPPING ON ALL ORDERS ABOVE ₹25,000</span>
        <Sparkles size={12} style={{ color: 'var(--gold-primary)' }} />
      </div>

      {/* Main Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: '#064E3B',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-gold)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.25)' : 'none'
        }}
      >
        <div className="container-custom" style={{ height: '78px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              color: 'var(--ivory)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} style={{ color: 'var(--gold-primary)' }} /> : <Menu size={24} style={{ color: 'var(--gold-primary)' }} />}
          </button>

          {/* Aurelia Brand Logo */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontWeight: '700',
                letterSpacing: '0.22em',
                color: 'var(--gold-primary)',
                lineHeight: 1
              }}
            >
              AURELIA
            </span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--gold-light)',
                display: 'inline-block',
                marginBottom: '10px'
              }}
            ></span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.5rem'
            }}
            className="desktop-nav"
          >
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link-emerald ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>

            {/* Shop Mega Menu */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('shop')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/shop"
                className="nav-link-emerald"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                Shop <ChevronDown size={14} style={{ color: 'var(--gold-primary)' }} />
              </Link>

              {activeDropdown === 'shop' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-120px',
                    width: '580px',
                    background: '#064E3B',
                    border: '1px solid var(--border-gold)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '2rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem',
                    zIndex: 100,
                    animation: 'fadeIn 0.3s ease forwards'
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.15em',
                        color: 'var(--gold-primary)',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid var(--border-gold)',
                        paddingBottom: '0.4rem'
                      }}
                    >
                      Shop By Category
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {categoriesList.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/shop?category=${cat.id}`}
                          style={{
                            color: 'var(--ivory)',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            letterSpacing: '0.04em',
                            transition: 'color 0.2s',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                          className="hover-gold-link"
                        >
                          <span>{cat.name}</span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--gold-light)' }}>{cat.count}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.15em',
                        color: 'var(--gold-primary)',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid var(--border-gold)',
                        paddingBottom: '0.4rem'
                      }}
                    >
                      Precious Metal & Stones
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {['18K Yellow Gold & Emerald', '18K Yellow Gold', 'Platinum & Emerald', 'Freshwater Pearl'].map((metal) => (
                        <Link
                          key={metal}
                          to={`/shop?metal=${encodeURIComponent(metal)}`}
                          style={{
                            color: 'var(--ivory)',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            letterSpacing: '0.04em'
                          }}
                          className="hover-gold-link"
                        >
                          {metal}
                        </Link>
                      ))}
                    </div>

                    <div style={{ marginTop: '1.5rem', background: 'rgba(212, 175, 55, 0.12)', padding: '1rem', border: '1px solid var(--border-gold)' }}>
                      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--gold-light)' }}>
                        "Handcrafted in 18K solid gold with 100% certified Zambian emeralds."
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Collections Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('collections')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/collections"
                className="nav-link-emerald"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                Collections <ChevronDown size={14} style={{ color: 'var(--gold-primary)' }} />
              </Link>

              {activeDropdown === 'collections' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-80px',
                    width: '320px',
                    background: '#064E3B',
                    border: '1px solid var(--border-gold)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem',
                    zIndex: 100,
                    animation: 'fadeIn 0.3s ease forwards'
                  }}
                >
                  {collectionsList.map((col) => (
                    <Link
                      key={col.id}
                      to={`/shop?collection=${col.id}`}
                      style={{
                        color: 'var(--ivory)',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        letterSpacing: '0.04em',
                        display: 'block'
                      }}
                      className="hover-gold-link"
                    >
                      <div style={{ fontWeight: '600', color: 'var(--gold-light)' }}>{col.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--ivory)', opacity: 0.8 }}>{col.tagline}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/bridal"
              className={({ isActive }) => `nav-link-emerald ${isActive ? 'active' : ''}`}
            >
              Bridal
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link-emerald ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
          </nav>

          {/* Action Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.3rem' }}>
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--gold-primary)',
                cursor: 'pointer',
                padding: '0.4rem',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Search Catalogue"
            >
              <Search size={20} />
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              style={{
                color: 'var(--gold-primary)',
                textDecoration: 'none',
                position: 'relative',
                padding: '0.4rem',
                display: 'flex',
                alignItems: 'center'
              }}
              title="View Wishlist"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '-2px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--gold-primary)',
                    color: 'var(--emerald-dark)',
                    fontSize: '0.65rem',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--gold-primary)',
                cursor: 'pointer',
                padding: '0.4rem',
                display: 'flex',
                alignItems: 'center',
                position: 'relative'
              }}
              title="Shopping Bag"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '-2px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--gold-primary)',
                    color: 'var(--emerald-dark)',
                    fontSize: '0.65rem',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--emerald-deep)'
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1050,
            background: 'var(--emerald-deep)',
            color: 'var(--ivory)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.3s ease forwards'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-gold)', paddingBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.2em', color: 'var(--gold-primary)' }}>
                AURELIA
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold-primary)' }}>
                <X size={26} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--ivory)', textDecoration: 'none' }}>Home</Link>
              <Link to="/shop" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--ivory)', textDecoration: 'none' }}>Shop Jewellery</Link>
              <Link to="/collections" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--ivory)', textDecoration: 'none' }}>Collections</Link>
              <Link to="/bridal" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--ivory)', textDecoration: 'none' }}>Bridal Atelier</Link>
              <Link to="/about" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--ivory)', textDecoration: 'none' }}>Our Heritage</Link>
              <Link to="/contact" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--ivory)', textDecoration: 'none' }}>Boutiques & Concierge</Link>
            </nav>
          </div>

          <div style={{ borderTop: '1px solid var(--border-gold)', paddingTop: '1.5rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--gold-light)', marginBottom: '0.4rem' }}>
              Jewellery designed to become part of your story.
            </p>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--gold-primary)' }}>
              BOUTIQUE CONCIERGE: +91 1800 287 3542
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        .hover-gold-link:hover {
          color: var(--gold-primary) !important;
        }
      `}</style>
    </>
  );
}
