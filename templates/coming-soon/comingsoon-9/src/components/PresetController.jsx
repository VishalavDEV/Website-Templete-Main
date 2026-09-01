import React, { useState } from 'react';
import { Sliders, Sun, Moon, Sparkles, Layers, Globe, ChevronUp, ChevronDown } from 'lucide-react';
import { PRODUCT_CATEGORIES, STYLE_DIRECTIONS } from '../data/presets';

export default function PresetController({
  activeCategory,
  setActiveCategory,
  activeStyle,
  setActiveStyle,
  theme,
  setTheme,
  lang,
  setLang
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      aria-label="Preset and Style Controls"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        width: 'calc(100% - 32px)',
        maxWidth: '920px'
      }}
    >
      <div className="glass-panel" style={{
        padding: isExpanded ? '16px 20px' : '10px 18px',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(24px)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-accent)',
        boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.7)'
      }}>
        {/* Toggle Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: isExpanded ? '14px' : '0',
          paddingBottom: isExpanded ? '10px' : '0',
          borderBottom: isExpanded ? '1px solid var(--border-subtle)' : 'none'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sliders size={16} style={{ color: 'var(--accent-1)' }} />
            <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Template Adaptation Controls
            </span>
            <span className="glass-pill" style={{ padding: '2px 8px', fontSize: '11px', color: 'var(--accent-2)', fontWeight: 600 }}>
              Live Switcher
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Quick Dark/Light Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="glass-pill"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              style={{
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              {theme === 'dark' ? <Sun size={13} style={{ color: '#f59e0b' }} /> : <Moon size={13} style={{ color: '#6366f1' }} />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>

            {/* Language / RTL Switcher */}
            <div className="glass-pill" style={{ display: 'flex', padding: '2px' }}>
              {[
                { code: 'en', label: 'EN' },
                { code: 'ar', label: 'العربية (RTL)' },
                { code: 'ja', label: '日本語' }
              ].map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  style={{
                    background: lang === l.code ? 'var(--accent-gradient)' : 'transparent',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    color: lang === l.code ? '#ffffff' : 'var(--text-secondary)',
                    padding: '4px 8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Expand / Collapse */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px'
              }}
            >
              {isExpanded ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            </button>
          </div>
        </div>

        {/* Expanded Controls Grid */}
        {isExpanded && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '16px' }}>
            {/* Category Selector */}
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '6px' }}>
                1. Select Product Category (6 Presets):
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                {Object.values(PRODUCT_CATEGORIES).map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className="glass-pill"
                      style={{
                        padding: '6px 8px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        background: isSelected ? 'var(--accent-gradient)' : 'var(--bg-pill)',
                        borderColor: isSelected ? 'transparent' : 'var(--border-subtle)',
                        color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {cat.name}
                      </div>
                      <div style={{ fontSize: '9px', opacity: 0.8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {cat.categoryLabel}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visual Style Selector */}
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '6px' }}>
                2. Visual Style Aesthetic (3 Directions):
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                {STYLE_DIRECTIONS.map((st) => {
                  const isSelected = activeStyle === st.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => setActiveStyle(st.id)}
                      className="glass-pill"
                      style={{
                        padding: '6px 8px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        background: isSelected ? 'var(--accent-gradient)' : 'var(--bg-pill)',
                        borderColor: isSelected ? 'transparent' : 'var(--border-subtle)',
                        color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ fontSize: '11px', fontWeight: 700 }}>
                        {st.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
