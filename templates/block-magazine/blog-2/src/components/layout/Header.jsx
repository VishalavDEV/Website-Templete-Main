import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Bookmark, Menu, X, ChevronDown, Sparkles, BookOpen, Compass, Flame, Shield, Activity, Leaf, Clock, Scale } from 'lucide-react';
import categoriesData from '../../data/categories.json';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topicsDropdownOpen, setTopicsDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedCount, setSavedCount] = useState(4);

  // Sync saved count
  useEffect(() => {
    const updateCount = () => {
      try {
        const raw = localStorage.getItem('elemental_saved_stories_v1');
        const ids = raw ? JSON.parse(raw) : ['art-1', 'art-2', 'art-4', 'art-8'];
        setSavedCount(ids.length);
      } catch {
        setSavedCount(4);
      }
    };
    updateCount();

    const handleSavedChange = (e) => {
      if (e.detail?.ids) {
        setSavedCount(e.detail.ids.length);
      }
    };
    window.addEventListener('elemental_saved_change', handleSavedChange);
    return () => window.removeEventListener('elemental_saved_change', handleSavedChange);
  }, []);

  // Handle scroll opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTopicsDropdownOpen(false);
    setSearchModalOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchModalOpen(false);
    }
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(250, 248, 242, 0.95)' : 'rgba(250, 248, 242, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border-light)',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--header-height)' }}>
          {/* Brand Logo & Tagline */}
          <Link to="/" style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-classic)',
                fontSize: '1.75rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: 'var(--text-ink)',
                lineHeight: 1
              }}
            >
              ELEMENTAL
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: 'var(--accent-terracotta)',
                textTransform: 'uppercase',
                marginTop: '3px'
              }}
            >
              STORIES BEHIND THE SCIENCE
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
            <Link
              to="/stories"
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: location.pathname === '/stories' ? 'var(--accent-terracotta)' : 'var(--text-ink)'
              }}
            >
              Stories
            </Link>

            {/* Topics Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setTopicsDropdownOpen(true)}
              onMouseLeave={() => setTopicsDropdownOpen(false)}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: location.pathname.startsWith('/topic') ? 'var(--accent-terracotta)' : 'var(--text-ink)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 0'
                }}
              >
                <span>Topics</span>
                <ChevronDown size={14} style={{ transform: topicsDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {topicsDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-100px',
                    width: '540px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '1.5rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.85rem',
                    zIndex: 200
                  }}
                >
                  {categoriesData.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/topic/${cat.slug}`}
                      style={{
                        padding: '0.6rem 0.75rem',
                        borderRadius: '3px',
                        backgroundColor: 'rgba(32, 28, 24, 0.02)',
                        transition: 'background-color 0.2s ease',
                        display: 'block'
                      }}
                      className="topic-dropdown-item"
                    >
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-ink)', marginBottom: '2px' }}>
                        {cat.name}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                        {cat.dek.slice(0, 55)}...
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/collection"
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: location.pathname === '/collection' ? 'var(--accent-terracotta)' : 'var(--text-ink)'
              }}
            >
              Collection
            </Link>

            <Link
              to="/archive"
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: location.pathname === '/archive' ? 'var(--accent-terracotta)' : 'var(--text-ink)'
              }}
            >
              Archive
            </Link>

            <Link
              to="/authors"
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: location.pathname === '/authors' ? 'var(--accent-terracotta)' : 'var(--text-ink)'
              }}
            >
              Historians
            </Link>

            <Link
              to="/about"
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: location.pathname === '/about' ? 'var(--accent-terracotta)' : 'var(--text-ink)'
              }}
            >
              About
            </Link>
          </nav>

          {/* Right Action Icons & Subscribe CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchModalOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-ink)',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'color 0.2s'
              }}
              aria-label="Search articles"
              title="Search articles"
            >
              <Search size={20} />
            </button>

            {/* Saved Stories Bookmark Link */}
            <Link
              to="/saved"
              style={{
                position: 'relative',
                color: location.pathname === '/saved' ? 'var(--accent-terracotta)' : 'var(--text-ink)',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Saved stories"
              title="Saved reading list"
            >
              <Bookmark size={20} />
              {savedCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: 2,
                    right: 0,
                    backgroundColor: 'var(--accent-terracotta)',
                    color: '#ffffff',
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {savedCount}
                </span>
              )}
            </Link>

            {/* Subscribe CTA Button */}
            <Link
              to="/subscribe"
              className="btn-editorial-primary desktop-only"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.78rem' }}
            >
              Subscribe
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-ink)',
                padding: '6px'
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/stories" className="mobile-nav-link">
                All Stories
              </Link>

              {/* Mobile Topics Section */}
              <div style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '0.75rem 0' }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-terracotta)', marginBottom: '0.5rem' }}>
                  Explore Topics
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.4rem' }}>
                  {categoriesData.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/topic/${cat.slug}`}
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-ink)',
                        padding: '4px 6px',
                        borderRadius: '2px',
                        backgroundColor: 'rgba(32, 28, 24, 0.03)'
                      }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/collection" className="mobile-nav-link">
                The Visual Collection
              </Link>
              <Link to="/archive" className="mobile-nav-link">
                The Archive Lab
              </Link>
              <Link to="/authors" className="mobile-nav-link">
                Historians & Authors
              </Link>
              <Link to="/saved" className="mobile-nav-link" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Saved Reading List</span>
                {savedCount > 0 && <span className="category-badge" style={{ fontSize: '0.65rem' }}>{savedCount} items</span>}
              </Link>
              <Link to="/about" className="mobile-nav-link">
                About Elemental
              </Link>
              <Link to="/subscribe" className="btn-editorial-primary" style={{ textAlign: 'center', marginTop: '0.75rem', width: '100%' }}>
                Subscribe to The Weekly Element
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(32, 28, 24, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '10vh 1.5rem 2rem'
          }}
          onClick={() => setSearchModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              borderRadius: '4px',
              maxWidth: '680px',
              width: '100%',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-light)' }}>
              <Search size={22} color="var(--accent-terracotta)" style={{ marginRight: '1rem' }} />
              <input
                type="text"
                autoFocus
                placeholder="Search discoveries, scientists, artifacts, eras..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flexGrow: 1,
                  fontSize: '1.15rem',
                  fontFamily: 'var(--font-editorial)',
                  border: 'none',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  color: 'var(--text-ink)'
                }}
              />
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={20} />
              </button>
            </form>

            {/* Quick suggested searches */}
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(32, 28, 24, 0.02)' }}>
              <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Suggested Inquiries:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Refrigeration', 'Marie Tharp', 'X-Rays', 'Penicillin', 'Alchemy', 'Bletchley Park', 'DNA', 'Galapagos'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      navigate(`/search?q=${encodeURIComponent(term)}`);
                      setSearchModalOpen(false);
                    }}
                    style={{
                      padding: '0.35rem 0.8rem',
                      fontSize: '0.78rem',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      color: 'var(--text-ink)',
                      transition: 'border-color 0.2s ease'
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
