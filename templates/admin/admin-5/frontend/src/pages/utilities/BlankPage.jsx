import React from 'react';
import { File } from 'lucide-react';

export const BlankPage = () => {
  return (
    <div className="blank-page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Blank Page Starter Template</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Use this clean canvas template to build custom dashboard views or application pages.</p>
      </div>

      <div className="glass-card" style={{ minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <File size={48} color="var(--brand-primary)" style={{ marginBottom: 12 }} />
          <h3 style={{ fontSize: 18, fontWeight: 800 }}>Clean Canvas Ready</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 4 }}>Add your custom React components and Spring Boot API data hooks here.</p>
        </div>
      </div>
    </div>
  );
};
