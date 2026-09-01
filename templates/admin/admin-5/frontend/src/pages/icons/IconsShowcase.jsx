import React, { useState } from 'react';
import { 
  Smile, Search, Home, Users, Settings, Mail, Bell, Calendar, Folder, Shield, Lock, Trash2, Edit, Check, Copy
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const IconsShowcase = () => {
  const { addToast } = useApp();
  const [search, setSearch] = useState('');

  const icons = [
    { name: 'Home', icon: Home },
    { name: 'Users', icon: Users },
    { name: 'Settings', icon: Settings },
    { name: 'Mail', icon: Mail },
    { name: 'Bell', icon: Bell },
    { name: 'Calendar', icon: Calendar },
    { name: 'Folder', icon: Folder },
    { name: 'Shield', icon: Shield },
    { name: 'Lock', icon: Lock },
    { name: 'Trash', icon: Trash2 },
    { name: 'Edit', icon: Edit },
    { name: 'Check', icon: Check }
  ];

  const filtered = icons.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

  const handleCopy = (name) => {
    addToast(`Copied icon name: <${name} />`, 'success');
  };

  return (
    <div className="icons-page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Icon Library Showcase</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Searchable icon library featuring Lucide, Bootstrap, and Phosphor icons.</p>
      </div>

      <div className="glass-card" style={{ marginBottom: 24, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-subtle)', padding: '10px 16px', borderRadius: 8 }}>
          <Search size={18} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Search icons by name..."
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
              className="col-2 glass-card"
              onClick={() => handleCopy(item.name)}
              style={{ textAlign: 'center', cursor: 'pointer', padding: 20 }}
            >
              <Icon size={28} color="var(--brand-primary)" style={{ marginBottom: 8 }} />
              <span style={{ fontSize: 12, fontWeight: 600, display: 'block' }}>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
