import React, { useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES } from '../../data/categories';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MegaMenu: React.FC = () => {
  const {
    isMegaMenuOpen,
    setIsMegaMenuOpen,
    activeMegaCategory,
    setActiveMegaCategory,
    navigate
  } = useShop();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMegaMenuOpen) {
        setIsMegaMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMegaMenuOpen, setIsMegaMenuOpen]);

  if (!isMegaMenuOpen) return null;

  const currentCategoryObj = CATEGORIES.find((c) => c.id === activeMegaCategory) || CATEGORIES[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsMegaMenuOpen(false)}
        style={{
          position: 'fixed',
          top: '120px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(22, 22, 22, 0.45)',
          backdropFilter: 'blur(4px)',
          zIndex: 300
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-float)',
            maxWidth: '1380px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            minHeight: '440px',
            maxHeight: '80vh',
            overflow: 'hidden',
            borderRadius: '0 0 var(--radius-md) var(--radius-md)'
          }}
        >
          {/* Left Categories List */}
          <div style={{ borderRight: '1px solid var(--border-light)', backgroundColor: 'var(--bg-primary)', padding: '1rem 0', overflowY: 'auto' }}>
            <div style={{ padding: '0.5rem 1.5rem 0.75rem', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              ORVANA Departments ({CATEGORIES.length})
            </div>
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeMegaCategory;
              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveMegaCategory(cat.id)}
                  onClick={() => {
                    navigate(`/${cat.slug}`);
                    setIsMegaMenuOpen(false);
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 800 : 500,
                    color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
                    backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--accent-blue)' : '3px solid transparent',
                    textAlign: 'left',
                    transition: 'all 150ms ease'
                  }}
                >
                  <span>{cat.name}</span>
                  <ChevronRight size={16} style={{ opacity: isActive ? 1 : 0.4 }} />
                </button>
              );
            })}
          </div>

          {/* Right Subcategories Grid */}
          <div style={{ padding: '2rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2rem', overflowY: 'auto' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{currentCategoryObj.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{currentCategoryObj.tagline}</p>
                </div>
                <button
                  onClick={() => {
                    navigate(`/${currentCategoryObj.slug}`);
                    setIsMegaMenuOpen(false);
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-blue)' }}
                >
                  Explore {currentCategoryObj.name} <ArrowRight size={15} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {currentCategoryObj.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      navigate(`/${currentCategoryObj.slug}?sub=${sub.id}`);
                      setIsMegaMenuOpen(false);
                    }}
                    style={{
                      textAlign: 'left',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-light)',
                      transition: 'all 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                    }}
                  >
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>{sub.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Shop collection →</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Showcase Tile */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: `linear-gradient(to top, rgba(22, 22, 22, 0.85), rgba(22, 22, 22, 0.2)), url(${currentCategoryObj.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.5rem',
                color: '#FFFFFF'
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)', width: 'fit-content', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                <Sparkles size={12} /> ORVANA FEATURED
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                {currentCategoryObj.showcaseHeading || `Discover ${currentCategoryObj.name}`}
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '1.25rem' }}>
                Curated premium products from top partner brands.
              </p>
              <button
                onClick={() => {
                  navigate(`/${currentCategoryObj.slug}`);
                  setIsMegaMenuOpen(false);
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-primary)',
                  padding: '0.65rem 1.2rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  width: 'fit-content'
                }}
              >
                {currentCategoryObj.showcaseCta || 'Explore Collection'} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
