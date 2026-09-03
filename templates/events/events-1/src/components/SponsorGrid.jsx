import React from 'react';
import { Cpu, Cloud, Shield, Eye, Zap, Code, Database, Globe, Book, Users, Sparkles } from 'lucide-react';
import { sponsorsData } from '../data/sponsors';

export default function SponsorGrid() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'cloud': return <Cloud size={20} />;
      case 'cpu': return <Cpu size={20} />;
      case 'shield': return <Shield size={20} />;
      case 'eye': return <Eye size={20} />;
      case 'zap': return <Zap size={20} />;
      case 'code': return <Code size={20} />;
      case 'database': return <Database size={20} />;
      case 'globe': return <Globe size={20} />;
      case 'book': return <Book size={20} />;
      case 'users': return <Users size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">GLOBAL PARTNERS</span>
          <h2 className="section-title">
            Backed by Industry <span className="gradient-text">Leaders</span>
          </h2>
          <p className="section-subtitle">
            We collaborate with premier enterprise brands shaping software, cloud compute, and AI.
          </p>
        </div>

        {sponsorsData.map((tierGroup, idx) => (
          <div key={idx} style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '1.25rem', fontWeight: 800 }}>
              {tierGroup.tier}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1.25rem' }}>
              {tierGroup.list.map((sp, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    padding: '1.1rem 2rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'var(--transition-normal)',
                    cursor: 'pointer'
                  }}
                >
                  {getIcon(sp.icon)}
                  <span>{sp.logoText}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
