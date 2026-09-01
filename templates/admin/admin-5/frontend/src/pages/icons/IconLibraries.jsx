import React, { useState } from 'react';
import { Smile, Search, Shield, Heart, Zap, Globe, Star, Sun, Moon, Bell } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const IconLibraryView = ({ libraryName }) => {
  const { addToast } = useApp();
  const [search, setSearch] = useState('');

  const sampleIcons = [
    { name: 'speedometer', icon: Zap },
    { name: 'shield-check', icon: Shield },
    { name: 'heart-fill', icon: Heart },
    { name: 'globe-americas', icon: Globe },
    { name: 'star-half', icon: Star },
    { name: 'sun-fill', icon: Sun },
    { name: 'moon-stars', icon: Moon },
    { name: 'bell-ring', icon: Bell }
  ];

  const filtered = sampleIcons.filter(i => i.name.includes(search.toLowerCase()));

  return (
    <div className="icons-page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>{libraryName} Showcase</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Explore {libraryName} vector icons and click to copy markup.</p>
      </div>

      <div className="glass-card" style={{ marginBottom: 24, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-subtle)', padding: '10px 16px', borderRadius: 8 }}>
          <Search size={18} color="var(--text-muted)" />
          <input
            type="text"
            placeholder={`Search ${libraryName}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-primary)', width: '100%', fontSize: 14 }}
          />
        </div>
      </div>

      <div className="grid-12">
        {filtered.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="col-3 glass-card"
              onClick={() => addToast(`Copied ${libraryName} icon: ${item.name}`, 'success')}
              style={{ textAlign: 'center', cursor: 'pointer', padding: 20 }}
            >
              <Icon size={32} color="var(--brand-primary)" style={{ marginBottom: 8 }} />
              <span style={{ fontSize: 12, fontWeight: 600, display: 'block' }}>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
