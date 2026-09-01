import React from 'react';
import { Clock, ShieldCheck, CheckCircle, Upload, UserPlus } from 'lucide-react';

export const TimelinePage = () => {
  const events = [
    { title: 'User Alex Morgan created new custom role', time: '10 mins ago', desc: 'Assigned Senior Engineer permissions to Marcus Chen.', icon: UserPlus, color: 'var(--brand-primary)' },
    { title: 'Hotfix v2.4 deployed to Production Cluster', time: '45 mins ago', desc: 'Applied Spring Boot REST API patches and verified MySQL database connection.', icon: ShieldCheck, color: 'var(--brand-success)' },
    { title: 'Cloud Database Backup Completed', time: '2 hours ago', desc: 'Full snapshot backup-20260820 verified in cloud storage.', icon: Upload, color: 'var(--brand-warning)' }
  ];

  return (
    <div className="timeline-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Activity Stream & Audit Log</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Chronological log of all system deployments, security audits, and user changes.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {events.map((ev, idx) => {
          const Icon = ev.icon;
          return (
            <div key={idx} className="glass-card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 20 }}>
              <div style={{ padding: 10, borderRadius: '50%', background: ev.color, color: '#ffffff', flexShrink: 0 }}>
                <Icon size={20} />
              </div>
              <div>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{ev.time}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: '2px 0 6px 0' }}>{ev.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{ev.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
