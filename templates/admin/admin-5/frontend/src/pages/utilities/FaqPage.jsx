import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FaqPage = () => {
  const { addToast } = useApp();
  const [openIdx, setOpenIdx] = useState(0);
  const [search, setSearch] = useState('');

  const faqs = [
    { q: 'What technology stack powers TS Smart Admin?', a: 'TS Smart Admin is built using React (Vite-based frontend), Java Spring Boot (REST API backend), and MySQL database persistence for robust production scalability.' },
    { q: 'How does the Light / Dark theme switcher work?', a: 'The theme switcher toggles CSS custom variables dynamically on the document root element, persisting user preference in localStorage.' },
    { q: 'Can I connect my own MySQL database instance?', a: 'Yes! Update backend/src/main/resources/application.yml with your MySQL connection credentials (URL, username, password).' },
    { q: 'Are all buttons and interactive flows functional?', a: 'Yes, every button across all 7 dashboards, 8 built-in applications, user management, auth views, and utility pages triggers interactive states and modal feedback.' }
  ];

  return (
    <div className="faq-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 900 }}>Frequently Asked Questions</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 4 }}>Find answers to common questions about setup, technology stack, and licensing.</p>
      </div>

      <div className="glass-card" style={{ marginBottom: 24, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-subtle)', padding: '10px 16px', borderRadius: 8 }}>
          <Search size={18} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Type your question..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-primary)', width: '100%', fontSize: 14 }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {faqs.map((f, idx) => (
          <div key={idx} className="glass-card" style={{ padding: 20 }}>
            <div
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 700, fontSize: 15 }}
            >
              <span>{f.q}</span>
              <ChevronDown size={18} style={{ transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </div>
            {openIdx === idx && (
              <p style={{ marginTop: 12, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
