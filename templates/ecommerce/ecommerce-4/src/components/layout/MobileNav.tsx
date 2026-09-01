import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Home, Layers, Search, Heart, ShoppingBag } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const {
    currentRoute,
    navigate,
    setIsSearchOpen,
    isMegaMenuOpen,
    setIsMegaMenuOpen,
    setIsCartOpen,
    cart,
    wishlist
  } = useShop();

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        padding: '0.5rem 0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 700,
        boxShadow: '0 -4px 15px rgba(0,0,0,0.05)'
      }}
      className="mobile-only-nav"
    >
      <button
        onClick={() => navigate('/')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: currentRoute === '/' ? 'var(--accent-blue)' : 'var(--text-secondary)'
        }}
      >
        <Home size={18} />
        <span>HOME</span>
      </button>

      <button
        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: isMegaMenuOpen ? 'var(--accent-blue)' : 'var(--text-secondary)'
        }}
      >
        <Layers size={18} />
        <span>CATEGORIES</span>
      </button>

      <button
        onClick={() => setIsSearchOpen(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: 'var(--text-secondary)'
        }}
      >
        <Search size={18} />
        <span>SEARCH</span>
      </button>

      <button
        onClick={() => navigate('/wishlist')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: currentRoute === '/wishlist' ? 'var(--accent-blue)' : 'var(--text-secondary)',
          position: 'relative'
        }}
      >
        <Heart size={18} />
        <span>SAVED</span>
        {wishlist.length > 0 && (
          <span style={{ position: 'absolute', top: '-2px', right: '8px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-blue)' }} />
        )}
      </button>

      <button
        onClick={() => setIsCartOpen(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: 'var(--text-secondary)',
          position: 'relative'
        }}
      >
        <ShoppingBag size={18} />
        <span>BAG</span>
        {totalCartCount > 0 && (
          <span style={{ position: 'absolute', top: '-4px', right: '4px', backgroundColor: 'var(--accent-blue)', color: '#FFFFFF', fontSize: '0.6rem', fontWeight: 800, width: '15px', height: '15px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {totalCartCount}
          </span>
        )}
      </button>
    </div>
  );
};
