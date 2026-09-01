import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  SlidersHorizontal,
  Layers,
  ChevronDown
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    wishlist,
    compareList,
    setIsCartOpen,
    setIsSearchOpen,
    isMegaMenuOpen,
    setIsMegaMenuOpen,
    navigate,
    currentRoute
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={`navbar-sticky ${isScrolled ? 'scrolled' : ''}`}>
      {/* Main Header Row */}
      <div style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div
          className="container header-inner"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
            gap: '1.5rem',
            transition: 'height 250ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left'
            }}
          >
            <span
              className="logo-text"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.85rem',
                fontWeight: 900,
                letterSpacing: '0.12em',
                color: 'var(--text-primary)',
                lineHeight: 1,
                transition: 'font-size 250ms ease'
              }}
            >
              ORVANA
            </span>
            <span
              style={{
                fontSize: '0.6rem',
                fontWeight: 800,
                letterSpacing: '0.24em',
                color: 'var(--accent-blue)',
                textTransform: 'uppercase',
                marginTop: '3px'
              }}
            >
              DIGITAL DEPARTMENT STORE
            </span>
          </button>

          {/* Large Smart Search Bar */}
          <div
            onClick={() => setIsSearchOpen(true)}
            style={{
              flex: 1,
              maxWidth: '560px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-light)',
              borderRadius: 'var(--radius-full)',
              padding: '0.65rem 1.2rem',
              cursor: 'pointer',
              transition: 'all 200ms ease'
            }}
          >
            <Search size={18} color="var(--accent-blue)" />
            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Search products, brands and categories...
            </span>
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Wishlist */}
            <button
              onClick={() => navigate('/wishlist')}
              title="Wishlist"
              style={{ position: 'relative', padding: '0.5rem' }}
            >
              <Heart size={22} color="var(--text-primary)" />
              {wishlist.length > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    backgroundColor: 'var(--accent-blue)',
                    color: '#FFFFFF',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Compare */}
            {compareList.length > 0 && (
              <button
                onClick={() => navigate('/compare')}
                title="Compare Products"
                style={{
                  position: 'relative',
                  padding: '0.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: 'var(--accent-blue)'
                }}
              >
                <SlidersHorizontal size={18} />
                <span className="desktop-compare-count">({compareList.length})</span>
              </button>
            )}

            {/* Account */}
            <button
              onClick={() => navigate('/account')}
              title="Account"
              style={{ padding: '0.5rem' }}
            >
              <User size={22} color="var(--text-primary)" />
            </button>

            {/* Cart Bag */}
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'var(--text-primary)',
                color: '#FFFFFF',
                padding: '0.6rem 1.1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem',
                fontWeight: 700,
                transition: 'all 180ms ease'
              }}
            >
              <ShoppingBag size={18} />
              <span>BAG</span>
              <span
                style={{
                  backgroundColor: 'var(--accent-blue)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  padding: '0.15rem 0.45rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                {totalCartCount < 10 ? `0${totalCartCount}` : totalCartCount}
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '0.5rem' }}>
                ₹{cartSubtotal.toLocaleString('en-IN')}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation Strip */}
      <div style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflowX: 'auto', gap: '1.25rem' }}>
          <button
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              fontWeight: 800,
              color: isMegaMenuOpen ? 'var(--accent-blue)' : 'var(--text-primary)',
              padding: '0.6rem 0',
              borderRight: '1px solid var(--border-light)',
              paddingRight: '1.25rem',
              marginRight: '0.5rem'
            }}
          >
            <Layers size={16} />
            <span>ALL CATEGORIES</span>
            <ChevronDown size={14} style={{ transform: isMegaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
            <button onClick={() => navigate('/shop')} className={`nav-link ${currentRoute === '/shop' ? 'active' : ''}`}>
              ALL
            </button>
            <button onClick={() => navigate('/electronics')} className={`nav-link ${currentRoute === '/electronics' ? 'active' : ''}`}>
              ELECTRONICS
            </button>
            <button onClick={() => navigate('/fashion')} className={`nav-link ${currentRoute === '/fashion' ? 'active' : ''}`}>
              FASHION
            </button>
            <button onClick={() => navigate('/home')} className={`nav-link ${currentRoute === '/home' ? 'active' : ''}`}>
              HOME
            </button>
            <button onClick={() => navigate('/beauty')} className={`nav-link ${currentRoute === '/beauty' ? 'active' : ''}`}>
              BEAUTY
            </button>
            <button onClick={() => navigate('/grocery')} className={`nav-link ${currentRoute === '/grocery' ? 'active' : ''}`}>
              GROCERY
            </button>
            <button onClick={() => navigate('/sports')} className={`nav-link ${currentRoute === '/sports' ? 'active' : ''}`}>
              SPORTS
            </button>
            <button onClick={() => navigate('/kids')} className={`nav-link ${currentRoute === '/kids' ? 'active' : ''}`}>
              KIDS
            </button>
            <button onClick={() => navigate('/travel')} className={`nav-link ${currentRoute === '/travel' ? 'active' : ''}`}>
              TRAVEL
            </button>
            <button onClick={() => navigate('/deals')} className={`nav-link ${currentRoute === '/deals' ? 'active' : ''}`} style={{ color: 'var(--accent-amber)' }}>
              DEALS
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
