import React from 'react';
import { Mail, Phone, MapPin, Briefcase, Calendar, ShieldCheck, Edit3 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const UserProfilePage = () => {
  const { navigateTo, addToast } = useApp();

  return (
    <div className="user-profile-page" style={{ maxWidth: 1000, margin: '0 auto' }}>
      <div className="glass-card" style={{ padding: 32, marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <img
            src="/assets/avatar_alex.jpg"
            alt="Alex Morgan"
            style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--brand-primary)' }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h1 style={{ fontSize: 24, fontWeight: 800 }}>Alex Morgan</h1>
                <p style={{ color: 'var(--brand-primary)', fontWeight: 600, fontSize: 14 }}>Chief Technology Officer / Administrator</p>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}><MapPin size={14} style={{ display: 'inline' }} /> San Francisco, CA • Joined Jan 2024</p>
              </div>
              <button className="btn btn-secondary btn-sm" onClick={() => navigateTo('users', 'settings')}>
                <Edit3 size={16} /> Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-12">
        <div className="col-4 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Contact Information</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13 }}>
            <div><strong>Email:</strong> alex.morgan@tssmartadmin.io</div>
            <div><strong>Phone:</strong> +1 (555) 019-2834</div>
            <div><strong>Department:</strong> Executive Engineering</div>
            <div><strong>Security Level:</strong> Super Admin (2FA Active)</div>
          </div>
        </div>

        <div className="col-8 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Recent Account Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 13 }}>
            <div style={{ padding: 12, background: 'var(--bg-subtle)', borderRadius: 8 }}>
              <strong>Updated System Security Roles</strong> - Assigned Admin role to Marcus Chen. (2 hours ago)
            </div>
            <div style={{ padding: 12, background: 'var(--bg-subtle)', borderRadius: 8 }}>
              <strong>Deployed v2.4 Hotfix</strong> - Production build verification completed. (Yesterday)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
