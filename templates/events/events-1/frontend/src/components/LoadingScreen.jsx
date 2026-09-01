import React from 'react';
import { Calendar } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="logo-icon" style={{ width: '54px', height: '54px' }}>
        <Calendar size={32} />
      </div>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>
        EVENT<span style={{ color: 'var(--primary)' }}>ORA</span>
      </h2>
      <div className="loader-spinner" />
    </div>
  );
}
