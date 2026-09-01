import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Heart, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenCompare,
  compareCount,
  onOpenWishlist,
  wishlistCount,
  onOpenBag,
  bagCount,
  onSelectCategory
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'DISCOVER', value: 'home' },
    { label: 'DEVICES', value: 'shop', category: 'PHONES' },
    { label: 'COMPUTING', value: 'shop', category: 'LAPTOPS' },
    { label: 'AUDIO', value: 'shop', category: 'AUDIO' },
    { label: 'GAMING', value: 'shop', category: 'GAMING' },
    { label: 'SMART HOME', value: 'shop', category: 'SMART HOME' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        background: scrolled ? 'rgba(8, 9, 11, 0.92)' : 'rgba(16, 18, 22, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'background 0.3s ease, border-color 0.3s ease'
      }}
    >
      {/* Left Branding */}
      <div 
        onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
      >
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '1.4rem',
          fontWeight: 800,
          letterSpacing: '0.12em',
          color: '#F4F4F1'
        }}>
          NOVA
        </span>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          color: '#00F0FF',
          padding: '2px 6px',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          borderRadius: '2px',
          letterSpacing: '0.08em'
        }}>
          2026 LAB
        </span>
      </div>

      {/* Center Links */}
      <nav className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => {
              setActiveTab(link.value);
              if (link.category) {
                onSelectCategory(link.category);
              }
            }}
            style={{
              background: 'none',
              border: 'none',
              color: (activeTab === link.value) ? '#00F0FF' : '#8E94A0',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              padding: '0.4rem 0',
              position: 'relative'
            }}
            onMouseEnter={(e) => e.target.style.color = '#F4F4F1'}
            onMouseLeave={(e) => e.target.style.color = (activeTab === link.value) ? '#00F0FF' : '#8E94A0'}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
        <button
          onClick={onOpenSearch}
          title="Search Command Center"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#F4F4F1',
            padding: '0.45rem 0.8rem',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            fontFamily: 'JetBrains Mono, monospace',
            transition: 'border-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00F0FF'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
        >
          <Search size={14} color="#00F0FF" />
          <span style={{ color: '#8E94A0' }}>SEARCH</span>
          <span style={{
            fontSize: '0.65rem',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1px 5px',
            borderRadius: '2px'
          }}>/</span>
        </button>

        <button
          onClick={onOpenCompare}
          title="Compare Matrix"
          style={{
            background: 'none',
            border: 'none',
            color: compareCount > 0 ? '#00F0FF' : '#8E94A0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.75rem',
            fontFamily: 'JetBrains Mono, monospace',
            position: 'relative'
          }}
        >
          <SlidersHorizontal size={16} />
          <span style={{ fontSize: '0.75rem' }}>COMPARE</span>
          {compareCount > 0 && (
            <span style={{
              background: '#00F0FF',
              color: '#08090B',
              borderRadius: '50%',
              width: '16px',
              height: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
              fontWeight: 800
            }}>
              {compareCount}
            </span>
          )}
        </button>

        <button
          onClick={onOpenWishlist}
          title="Saved Items"
          style={{
            background: 'none',
            border: 'none',
            color: wishlistCount > 0 ? '#00F0FF' : '#8E94A0',
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Heart size={18} fill={wishlistCount > 0 ? '#00F0FF' : 'none'} color={wishlistCount > 0 ? '#00F0FF' : '#8E94A0'} />
          {wishlistCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-6px',
              right: '-8px',
              background: '#00F0FF',
              color: '#08090B',
              borderRadius: '50%',
              width: '15px',
              height: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.6rem',
              fontWeight: 800
            }}>
              {wishlistCount}
            </span>
          )}
        </button>

        <button
          onClick={onOpenBag}
          style={{
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.4)',
            color: '#F4F4F1',
            padding: '0.45rem 0.9rem',
            borderRadius: '2px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#00F0FF';
            e.currentTarget.style.color = '#08090B';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 240, 255, 0.08)';
            e.currentTarget.style.color = '#F4F4F1';
          }}
        >
          <ShoppingBag size={15} />
          <span>BAG</span>
          <span style={{ fontWeight: 700 }}>
            {bagCount < 10 ? `0${bagCount}` : bagCount}
          </span>
        </button>
      </div>
    </header>
  );
}
