import React from 'react';
import { Code2, Share2, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-color)',
      padding: '40px 24px',
      color: 'var(--text-muted)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {/* Left Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #2563EB 0%, #F97316 100%)',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            MS
          </div>
          <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)' }}>
            Marcus Sterling — Full Stack Portfolio
          </span>
        </div>

        {/* Center Copyright */}
        <div style={{ fontSize: '13px' }}>
          © {new Date().getFullYear()} Marcus Sterling. Built with React.js & Java Spring Boot.
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="btn-outline"
          style={{ padding: '8px 14px', fontSize: '12px' }}
        >
          <ArrowUp size={14} /> Back To Top
        </button>
      </div>
    </footer>
  );
}
