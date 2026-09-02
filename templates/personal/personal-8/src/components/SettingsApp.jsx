import React from 'react';
import { Settings, Sun, Moon, Palette, Sparkles, Check } from 'lucide-react';

export default function SettingsApp({ theme, accentColor, onThemeChange, onAccentChange }) {
  const accents = [
    { name: 'blue', label: 'Royal Blue', color: '#2563EB' },
    { name: 'orange', label: 'Bright Orange', color: '#F97316' },
    { name: 'purple', label: 'Neon Purple', color: '#8B5CF6' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{
        backgroundColor: 'var(--soft-gray)',
        borderRadius: '12px',
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Settings size={20} color="#2563EB" />
          <h2 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>
            VISHAL OS SYSTEM CONTROL CENTER
          </h2>
        </div>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
          v3.0 Dynamic Engine
        </span>
      </div>

      {/* Theme Mode Selector */}
      <div className="glass-card" style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sun size={18} color="#F97316" /> DESKTOP COLOR SCHEME
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <button
            onClick={() => onThemeChange('light')}
            style={{
              padding: '14px',
              borderRadius: '10px',
              border: theme === 'light' ? '2px solid var(--royal-blue)' : '1px solid var(--border-color)',
              backgroundColor: '#FBF9F5',
              color: '#0F172A',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Sun size={18} color="#F97316" /> LIGHT MODE
            {theme === 'light' && <Check size={16} color="#2563EB" />}
          </button>

          <button
            onClick={() => onThemeChange('dark')}
            style={{
              padding: '14px',
              borderRadius: '10px',
              border: theme === 'dark' ? '2px solid var(--bright-orange)' : '1px solid var(--border-color)',
              backgroundColor: '#0F172A',
              color: '#F8FAFC',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Moon size={18} color="#3B82F6" /> DARK MODE
            {theme === 'dark' && <Check size={16} color="#F97316" />}
          </button>
        </div>
      </div>

      {/* Accent Color Preset Selector */}
      <div className="glass-card" style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Palette size={18} color="#2563EB" /> SYSTEM ACCENT HIGHLIGHTS
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
          {accents.map(acc => (
            <button
              key={acc.name}
              onClick={() => onAccentChange(acc.name)}
              style={{
                padding: '12px',
                borderRadius: '10px',
                border: accentColor === acc.name ? `2px solid ${acc.color}` : '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-main)',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: acc.color }} />
              {acc.label}
              {accentColor === acc.name && <Check size={14} color={acc.color} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
