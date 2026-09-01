import React, { useState, useEffect } from 'react';
import { UserPlus, Search, Edit2, Trash2, ShieldCheck, Eye } from 'lucide-react';
import { fetchUsers } from '../../services/api';
import { useApp } from '../../context/AppContext';

export const UserListPage = () => {
  const { addToast, navigateTo } = useApp();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase()) || 
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleDeleteUser = (id, name) => {
    setUsers(prev => prev.filter(u => u.id !== id));
    addToast(`User ${name} deleted successfully`, 'danger');
  };

  return (
    <div className="user-page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>User Management Directory</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Manage user accounts, department assignments, and permission roles.</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => navigateTo('users', 'user-edit')}>
          <UserPlus size={16} /> Add New User
        </button>
      </div>

      <div className="glass-card" style={{ marginBottom: 24, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-subtle)', padding: '8px 14px', borderRadius: 8, width: 320 }}>
          <Search size={18} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-primary)', width: '100%', fontSize: 13 }}
          />
        </div>
      </div>

      <div className="glass-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Department</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(u => (
              <tr key={u.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img src={u.avatar} alt={u.name} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
                    <strong style={{ fontSize: 14 }}>{u.name}</strong>
                  </div>
                </td>
                <td style={{ color: 'var(--text-secondary)' }}>{u.email}</td>
                <td>{u.department}</td>
                <td><span className="badge badge-primary">{u.role}</span></td>
                <td><span className={`badge ${u.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>{u.status}</span></td>
                <td>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn-icon" onClick={() => navigateTo('users', 'user-profile')} title="View Profile"><Eye size={16} /></button>
                    <button className="btn-icon" onClick={() => navigateTo('users', 'user-edit')} title="Edit User"><Edit2 size={16} /></button>
                    <button className="btn-icon text-danger" onClick={() => handleDeleteUser(u.id, u.name)} title="Delete User"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
