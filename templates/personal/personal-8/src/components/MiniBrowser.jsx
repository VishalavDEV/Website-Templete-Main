import React, { useState } from 'react';
import { Globe, ArrowLeft, ArrowRight, RotateCw, ExternalLink, Code2, Share2, Mail } from 'lucide-react';

export default function MiniBrowser() {
  const [currentUrl, setCurrentUrl] = useState("https://github.com/vishal-dev");

  const bookmarks = [
    { title: "GitHub Profile", url: "https://github.com/vishal-dev", icon: <Code2 size={16} /> },
    { title: "LinkedIn Profile", url: "https://linkedin.com/in/vishal-sharma-dev", icon: <Share2 size={16} /> },
    { title: "Email Portfolio", url: "mailto:vishal.dev@os.portfolio", icon: <Mail size={16} /> }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>
      {/* Browser Address Bar */}
      <div style={{
        backgroundColor: 'var(--soft-gray)',
        borderRadius: '10px',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><ArrowLeft size={16} /></button>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><ArrowRight size={16} /></button>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><RotateCw size={14} /></button>
        </div>

        <div style={{
          flex: 1,
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: '6px',
          padding: '6px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          fontFamily: 'var(--font-mono)'
        }}>
          <Globe size={14} color="#10B981" />
          <span style={{ color: 'var(--text-main)', flex: 1 }}>{currentUrl}</span>
        </div>

        <a
          href={currentUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
          className="blue-btn"
        >
          <ExternalLink size={14} /> Open Link
        </a>
      </div>

      {/* Bookmarks Bar */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {bookmarks.map(bm => (
          <button
            key={bm.title}
            onClick={() => setCurrentUrl(bm.url)}
            style={{
              backgroundColor: currentUrl === bm.url ? 'var(--royal-blue)' : 'var(--bg-surface)',
              color: currentUrl === bm.url ? '#FFFFFF' : 'var(--text-main)',
              border: '1px solid var(--border-color)',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {bm.icon} {bm.title}
          </button>
        ))}
      </div>

      {/* Browser View Preview Box */}
      <div className="glass-card" style={{
        flex: 1,
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '16px'
      }}>
        <Globe size={48} color="#2563EB" className="pulse-glow" />
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>MY WEB — PORTFOLIO BROWSER</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', maxWidth: '420px', lineHeight: '1.5' }}>
          You are exploring <strong>{currentUrl}</strong>. For security and optimal viewport experience, external web profiles open safely in dedicated browser tabs.
        </p>

        <a
          href={currentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="accent-btn"
          style={{ textDecoration: 'none' }}
        >
          <ExternalLink size={18} /> Launch Web Page in New Window
        </a>
      </div>
    </div>
  );
}
