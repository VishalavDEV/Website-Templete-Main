import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Search, Heart, ShoppingBag } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { cartCount, wishlist, setIsSearchOpen, setIsCartOpen } = useShop();

  return (
    <div
      className="mobile-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-light)',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 8px',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: location.pathname === '/' ? 'var(--text-primary)' : 'var(--text-muted)',
          fontSize: '9px',
          letterSpacing: '0.08em',
          fontWeight: '500',
        }}
      >
        <Home size={18} strokeWidth={1.5} />
        <span>HOME</span>
      </Link>

      <Link
        to="/shop"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: location.pathname === '/shop' ? 'var(--text-primary)' : 'var(--text-muted)',
          fontSize: '9px',
          letterSpacing: '0.08em',
          fontWeight: '500',
        }}
      >
        <Compass size={18} strokeWidth={1.5} />
        <span>SHOP</span>
      </Link>

      <button
        onClick={() => setIsSearchOpen(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: 'var(--text-muted)',
          fontSize: '9px',
          letterSpacing: '0.08em',
          fontWeight: '500',
        }}
      >
        <Search size={18} strokeWidth={1.5} />
        <span>SEARCH</span>
      </button>

      <Link
        to="/wishlist"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: location.pathname === '/wishlist' ? 'var(--text-primary)' : 'var(--text-muted)',
          fontSize: '9px',
          letterSpacing: '0.08em',
          fontWeight: '500',
        }}
      >
        <Heart size={18} strokeWidth={1.5} />
        {wishlist.length > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-3px',
              right: '8px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-bronze)',
              color: '#FFF',
              fontSize: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {wishlist.length}
          </span>
        )}
        <span>WISHLIST</span>
      </Link>

      <button
        onClick={() => setIsCartOpen(true)}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          color: 'var(--text-primary)',
          fontSize: '9px',
          letterSpacing: '0.08em',
          fontWeight: '500',
        }}
      >
        <ShoppingBag size={18} strokeWidth={1.5} />
        {cartCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-3px',
              right: '8px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              fontSize: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {cartCount}
          </span>
        )}
        <span>BAG</span>
      </button>

      <style>{`
        @media (min-width: 768px) {
          .mobile-bottom-nav {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
