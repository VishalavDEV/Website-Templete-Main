import React, { useState } from 'react';
import { Save, Lock, Bell, User, Shield } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AccountSettingsPage = () => {
  const { addToast } = useApp();
  const [name, setName] = useState('Alex Morgan');
  const [email, setEmail] = useState('alex.morgan@tssmartadmin.io');
  const [emailNotifs, setEmailNotifs] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    addToast('Account settings updated successfully', 'success');
  };

  return (
    <div className="settings-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Account & Profile Settings</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Update your profile preferences, password security, and notification triggers.</p>
      </div>

      <div className="glass-card" style={{ padding: 24 }}>
        <form onSubmit={handleSave}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Personal Information</h3>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>

          <div style={{ margin: '24px 0 16px 0', borderTop: '1px solid var(--border-color)', paddingTop: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Notifications & Security</h3>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14 }}>
              <input type="checkbox" checked={emailNotifs} onChange={e => setEmailNotifs(e.target.checked)} />
              <span>Receive real-time system CPU & Security alerts via email</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            <Save size={16} /> Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};
