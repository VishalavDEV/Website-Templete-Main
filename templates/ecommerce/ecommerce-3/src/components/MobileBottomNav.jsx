import React from 'react';
import { Home, Compass, Search, Heart, ShoppingBag } from 'lucide-react';

export default function MobileBottomNav({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenWishlist,
  wishlistCount,
  onOpenBag,
  bagCount
}) {
  return (
    <div
      className="mobile-bottom-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '60px',
        background: 'rgba(8, 9, 11, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 0.5rem'
      }}
    >
      <button
        onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        style={{
          background: 'none',
          border: 'none',
          color: activeTab === 'home' ? '#00F0FF' : '#8E94A0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          cursor: 'pointer'
        }}
      >
        <Home size={18} />
        <span>HOME</span>
      </button>

      <button
        onClick={() => setActiveTab('shop')}
        style={{
          background: 'none',
          border: 'none',
          color: activeTab === 'shop' ? '#00F0FF' : '#8E94A0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          cursor: 'pointer'
        }}
      >
        <Compass size={18} />
        <span>DISCOVER</span>
      </button>

      <button
        onClick={onOpenSearch}
        style={{
          background: 'none',
          border: 'none',
          color: '#8E94A0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          cursor: 'pointer'
        }}
      >
        <Search size={18} />
        <span>SEARCH</span>
      </button>

      <button
        onClick={onOpenWishlist}
        style={{
          background: 'none',
          border: 'none',
          color: wishlistCount > 0 ? '#00F0FF' : '#8E94A0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        <Heart size={18} fill={wishlistCount > 0 ? '#00F0FF' : 'none'} />
        <span>SAVED</span>
      </button>

      <button
        onClick={onOpenBag}
        style={{
          background: 'none',
          border: 'none',
          color: bagCount > 0 ? '#00F0FF' : '#8E94A0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        <ShoppingBag size={18} />
        <span>BAG ({bagCount})</span>
      </button>
    </div>
  );
}
