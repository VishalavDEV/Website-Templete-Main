import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Bookmark, User, Crown } from 'lucide-react';
import { useState, useEffect } from 'react';
import config from '../data/site-config.json';
import { getBookmarks } from '../lib/bookmarks';
import { mockStore } from '../lib/mockStore';

export default function Header({ onOpenSubscribe, onOpenProfile }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [userProfile, setUserProfile] = useState(mockStore.getUserProfile());
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setBookmarkCount(getBookmarks().length);
    setUserProfile(mockStore.getUserProfile());
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const isActive = (path) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? 'rgba(16, 14, 24, 0.85)' : 'rgba(16, 14, 24, 0.4)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all 0.35s var(--ease-out-expo)',
        padding: scrolled ? '0.75rem 0' : '1.15rem 0',
      }}>
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.9rem', fontWeight: 800, color: 'var(--bg-color)',
              boxShadow: '0 0 20px var(--accent-cyan-glow)',
            }}>FI</div>
            <span className="desktop-only" style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700,
              letterSpacing: '-0.03em', color: 'var(--text-primary)',
            }}>Future Intelligence</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            {config.nav.map(item => (
              <Link key={item.path} to={item.path} style={{
                padding: '0.45rem 0.8rem', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 500,
                color: isActive(item.path) ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                background: isActive(item.path) ? 'rgba(0, 229, 255, 0.08)' : 'transparent',
                transition: 'all 0.25s ease',
              }}>{item.label}</Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Link to="/search" aria-label="Search" style={{
              padding: '0.55rem', borderRadius: '8px', color: 'var(--text-secondary)',
              transition: 'all 0.25s ease', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }} className="hover-text-cyan">
              <Search size={18} />
            </Link>

            {/* Saved / Profile Button */}
            <button
              onClick={onOpenProfile}
              aria-label="Open Reader Profile & Saved Articles"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.45rem 0.85rem', borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--surface-color)',
                color: 'var(--text-secondary)',
                fontSize: '0.78rem', fontWeight: 500,
                transition: 'all 0.25s ease'
              }}
              className="hover-border-cyan hover-text-cyan"
            >
              <User size={15} style={{ color: 'var(--accent-cyan)' }} />
              <span>Profile</span>
              {bookmarkCount > 0 && (
                <span style={{
                  backgroundColor: 'var(--accent-cyan)', color: 'var(--bg-color)',
                  fontSize: '0.65rem', fontWeight: 700, padding: '0.1rem 0.4rem',
                  borderRadius: '10px', marginLeft: '0.2rem'
                }}>
                  {bookmarkCount}
                </span>
              )}
            </button>

            {/* Subscribe CTA Button */}
            <button
              onClick={onOpenSubscribe}
              className="btn-cyan"
              style={{ padding: '0.5rem 1.15rem', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <Crown size={13} />
              <span>Subscribe</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="mobile-only" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={onOpenProfile}
              aria-label="Profile"
              style={{ padding: '0.5rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center' }}
            >
              <User size={20} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              style={{ padding: '0.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          backgroundColor: 'rgba(16, 14, 24, 0.98)', backdropFilter: 'blur(20px)',
          padding: '5.5rem 2rem 2rem',
          animation: 'fadeIn 0.3s var(--ease-out-expo)',
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
          overflowY: 'auto'
        }}>
          {config.nav.map((item, i) => (
            <Link key={item.path} to={item.path} style={{
              fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 500,
              padding: '0.85rem 0', borderBottom: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              animation: `fadeInUp ${0.25 + i * 0.04}s var(--ease-out-expo) forwards`,
              opacity: 0,
            }}>
              {item.label}
            </Link>
          ))}
          <Link to="/search" style={{
            fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 500,
            padding: '0.85rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem',
            color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-color)',
          }}>
            <Search size={22} /> Search Archive
          </Link>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenProfile(); }}
              className="btn-outline"
              style={{ padding: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <User size={16} /> Open Reader Profile & Saved ({bookmarkCount})
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSubscribe(); }}
              className="btn-cyan"
              style={{ padding: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <Crown size={16} /> Subscribe to Membership
            </button>
          </div>
        </div>
      )}
    </>
  );
}
