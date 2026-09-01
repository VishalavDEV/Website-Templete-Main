import React from 'react';

/**
 * GooeyNav - Fluid Interactive Category Filter Nav
 * Styled with warm cream, ink, and terracotta tones for ELEMENTAL.
 */
export function GooeyNav({ items = [], activeSlug = 'all', onSelect, className = '' }) {
  return (
    <nav className={`gooey-nav-container ${className}`} style={{ position: 'relative', margin: '1.5rem 0' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          padding: '0.4rem',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: '4px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        {items.map((item) => {
          const isActive = activeSlug === item.slug;
          return (
            <button
              key={item.slug}
              onClick={() => onSelect && onSelect(item.slug)}
              style={{
                position: 'relative',
                padding: '0.55rem 1.1rem',
                fontSize: '0.78rem',
                fontWeight: isActive ? 700 : 500,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: isActive ? '#ffffff' : 'var(--text-ink)',
                backgroundColor: isActive ? 'var(--accent-terracotta)' : 'transparent',
                border: 'none',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
              className="gooey-nav-item"
            >
              <span>{item.name}</span>
              {item.storyCount && (
                <span
                  style={{
                    fontSize: '0.68rem',
                    opacity: isActive ? 0.9 : 0.6,
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600
                  }}
                >
                  ({item.storyCount})
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default GooeyNav;
