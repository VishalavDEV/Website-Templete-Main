import React, { useState } from 'react';
import { Save, User, Mail, Shield, Building, Camera, ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const UserEditPage = () => {
  const { addToast, navigateTo } = useApp();

  const [user, setUser] = useState({
    name: 'Alex Morgan',
    email: 'alex.morgan@tssmartadmin.io',
    department: 'Executive Engineering',
    role: 'Administrator',
    status: 'Active',
    bio: 'Lead Architect & Systems Engineer managing Spring Boot REST API services and MySQL data clusters.'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addToast('User profile changes saved successfully!', 'success');
    navigateTo('users', 'user-list');
  };

  return (
    <div className="users-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <button className="btn btn-secondary btn-sm" onClick={() => navigateTo('users', 'user-list')} style={{ marginBottom: 8 }}>
            <ArrowLeft size={16} /> Back to Users Directory
          </button>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Edit User Profile</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Update user account information, permissions, and department access.</p>
        </div>
      </div>

      <div className="glass-card" style={{ padding: 32 }}>
        <form onSubmit={handleSubmit}>
          {/* Avatar Upload Simulation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="/assets/avatar_alex.jpg"
                alt="Avatar"
                style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }}
              />
              <button
                type="button"
                className="btn-icon"
                onClick={() => addToast('Upload new avatar clicked', 'info')}
                style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--brand-primary)', color: '#ffffff' }}
              >
                <Camera size={14} />
              </button>
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>{user.name}</h3>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>ID: #USR-9482 | Administrator</p>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                required
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                required
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                required
                value={user.department}
                onChange={e => setUser({ ...user, department: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Permission Role</label>
              <select
                value={user.role}
                onChange={e => setUser({ ...user, role: e.target.value })}
              >
                <option>Administrator</option>
                <option>Senior Engineer</option>
                <option>Product Designer</option>
                <option>Finance Lead</option>
                <option>Marketing Lead</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Bio Summary</label>
            <textarea
              rows={4}
              value={user.bio}
              onChange={e => setUser({ ...user, bio: e.target.value })}
              style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-primary)', outline: 'none', fontFamily: 'inherit' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
            <button type="button" className="btn btn-secondary" onClick={() => navigateTo('users', 'user-list')}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <Save size={16} /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
