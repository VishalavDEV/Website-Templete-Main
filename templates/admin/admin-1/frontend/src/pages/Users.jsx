import React, { useState, useRef } from 'react';
import Layout from '../components/layout/Layout';
import AdvancedDataTable from '../components/ui/AdvancedDataTable';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Users as UsersIcon, UserPlus, Shield, Trash2, Plus, X, Search, Edit, Lock, CheckCircle,
  AlertCircle, Phone, Mail, Camera, Key, RefreshCw, Eye, Download, ShieldCheck
} from 'lucide-react';

export default function Users() {
  const fileInputRef = useRef(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  // New User Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('+1 (555) 019-2834');
  const [formDepartment, setFormDepartment] = useState('Engineering');
  const [formRole, setFormRole] = useState('DEVELOPER');
  const [formAvatar, setFormAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80');

  const [usersList, setUsersList] = useState([
    {
      id: '101',
      name: 'Sarah Connor',
      email: 'sarah@neura.tech',
      phone: '+1 (555) 234-5678',
      department: 'Executive Leadership',
      role: 'ADMIN',
      status: 'Active',
      twoFactor: true,
      lastLogin: '10 mins ago',
      ip: '192.168.1.102',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: '102',
      name: 'Mike Chen',
      email: 'mike@neura.tech',
      phone: '+1 (555) 345-6789',
      department: 'Backend Engineering',
      role: 'DEVELOPER',
      status: 'Active',
      twoFactor: true,
      lastLogin: '2 hours ago',
      ip: '192.168.1.105',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: '103',
      name: 'Emily Park',
      email: 'emily@neura.tech',
      phone: '+1 (555) 456-7890',
      department: 'Cyber Security',
      role: 'MANAGER',
      status: 'Active',
      twoFactor: true,
      lastLogin: 'Yesterday',
      ip: '192.168.1.110',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: '104',
      name: 'David Lee',
      email: 'david@neura.tech',
      phone: '+1 (555) 567-8901',
      department: 'Product Quality',
      role: 'VIEWER',
      status: 'Suspended',
      twoFactor: false,
      lastLogin: '3 days ago',
      ip: '192.168.1.115',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    },
  ]);

  const handleAvatarFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormAvatar(url);
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim()) return;

    const newUser = {
      id: (100 + usersList.length + 1).toString(),
      name: formName.trim(),
      email: formEmail.trim(),
      phone: formPhone,
      department: formDepartment,
      role: formRole,
      status: 'Active',
      twoFactor: true,
      lastLogin: 'Just now',
      ip: '192.168.1.120',
      avatar: formAvatar
    };

    setUsersList([...usersList, newUser]);
    setFormName('');
    setFormEmail('');
    setShowAddModal(false);
  };

  const toggleUserStatus = (id) => {
    setUsersList(usersList.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u));
    if (selectedUser?.id === id) {
      setSelectedUser(prev => ({ ...prev, status: prev.status === 'Active' ? 'Suspended' : 'Active' }));
    }
  };

  const deleteUser = (id) => {
    setUsersList(usersList.filter(u => u.id !== id));
    if (selectedUser?.id === id) setSelectedUser(null);
  };

  const roleCounts = {
    ADMIN: usersList.filter(u => u.role === 'ADMIN').length,
    MANAGER: usersList.filter(u => u.role === 'MANAGER').length,
    DEVELOPER: usersList.filter(u => u.role === 'DEVELOPER').length,
    VIEWER: usersList.filter(u => u.role === 'VIEWER').length,
  };

  const roleDistributionData = [
    { role: 'ADMIN', count: roleCounts.ADMIN },
    { role: 'MANAGER', count: roleCounts.MANAGER },
    { role: 'DEVELOPER', count: roleCounts.DEVELOPER },
    { role: 'VIEWER', count: roleCounts.VIEWER },
  ];

  const filteredUsers = usersList.filter(u => {
    const matchesRole = roleFilter === 'All' || u.role === roleFilter;
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
                          u.email.toLowerCase().includes(search.toLowerCase()) ||
                          u.department.toLowerCase().includes(search.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const columns = [
    {
      header: 'User Profile',
      accessor: 'name',
      cell: (row) => (
        <div className="flex items-center space-x-3">
          <img
            src={row.avatar}
            alt={row.name}
            className="w-9 h-9 rounded-xl object-cover ring-2 ring-neura-cyan/30 shrink-0"
          />
          <div>
            <div className="font-bold text-white flex items-center space-x-1.5">
              <span>{row.name}</span>
              {row.role === 'ADMIN' && <ShieldCheck className="w-3.5 h-3.5 text-neura-cyan" />}
            </div>
            <div className="text-[11px] text-slate-400 font-mono">{row.email}</div>
          </div>
        </div>
      )
    },
    { header: 'Department', accessor: 'department', cell: (row) => <span className="text-slate-300 font-medium">{row.department}</span> },
    {
      header: 'Role',
      accessor: 'role',
      cell: (row) => (
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${
          row.role === 'ADMIN' ? 'bg-neura-cyan/20 text-neura-cyan border-neura-cyan/40 shadow-glow-cyan/20' :
          row.role === 'MANAGER' ? 'bg-neura-purple/20 text-neura-purple border-neura-purple/40' :
          row.role === 'DEVELOPER' ? 'bg-blue-500/20 text-blue-400 border-blue-500/40' : 'bg-slate-500/20 text-slate-400 border-slate-500/40'
        }`}>
          {row.role}
        </span>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (row) => (
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
          row.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
        }`}>
          {row.status}
        </span>
      )
    },
    { header: 'Last Active', accessor: 'lastLogin', cell: (row) => <span className="font-mono text-slate-400 text-[11px]">{row.lastLogin}</span> },
    {
      header: 'Action',
      accessor: 'action',
      cell: (row) => (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedUser(row)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-neura-cyan transition-colors"
            title="View Admin Profile Card"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleUserStatus(row.id)}
            className={`p-1.5 rounded-lg border transition-colors ${
              row.status === 'Active' ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
            }`}
            title={row.status === 'Active' ? 'Suspend User' : 'Activate User'}
          >
            <Lock className="w-4 h-4" />
          </button>
          <button
            onClick={() => deleteUser(row.id)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/10 text-slate-400 hover:text-rose-400 transition-colors"
            title="Delete User"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )
    },
  ];

  return (
    <Layout title="User Accounts & Identity Administration" breadcrumb="Home / System / Users">
      <div className="space-y-6">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-3xl glass-card border border-white/10 flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-neura-cyan/20 text-neura-cyan">
              <UsersIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Total Users</span>
              <div className="text-xl font-bold text-white font-mono">{usersList.length}</div>
            </div>
          </div>

          <div className="p-4 rounded-3xl glass-card border border-white/10 flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-neura-purple/20 text-neura-purple">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Admin Leadership</span>
              <div className="text-xl font-bold text-white font-mono">{roleCounts.ADMIN}</div>
            </div>
          </div>

          <div className="p-4 rounded-3xl glass-card border border-white/10 flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400">
              <Key className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Active Developers</span>
              <div className="text-xl font-bold text-white font-mono">{roleCounts.DEVELOPER}</div>
            </div>
          </div>

          <div className="p-4 rounded-3xl glass-card border border-white/10 flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">2FA Compliance</span>
              <div className="text-xl font-bold text-emerald-400 font-mono">
                {Math.round((usersList.filter(u => u.twoFactor).length / usersList.length) * 100)}%
              </div>
            </div>
          </div>
        </div>

        {/* Action Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <UsersIcon className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Enterprise User Directory</span>
            </h2>
            <p className="text-xs text-slate-400">Manage user profile pictures, administrative privileges, and security locks.</p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative w-48">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-neura-cyan"
              />
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2 shrink-0"
            >
              <UserPlus className="w-4 h-4" />
              <span>Add Enterprise User</span>
            </button>
          </div>
        </div>

        {/* Role Distribution BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white flex items-center">
            <Shield className="w-5 h-5 text-neura-cyan mr-2" />
            <span>User Role & RBAC Distribution</span>
          </h3>

          <div className="w-full h-48 sm:h-56 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roleDistributionData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="role" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} width={40} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="count" fill="#7000ff" radius={[6, 6, 0, 0]} maxBarSize={28} name="Users Count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Directory Table */}
        <AdvancedDataTable
          columns={columns}
          data={filteredUsers}
          title="Registered Enterprise Members"
          subtitle="Real-time access directory with profile images & administrative locks."
        />
      </div>

      {/* User Details Modal / Drawer */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-12 h-12 rounded-2xl object-cover ring-2 ring-neura-cyan/50"
                />
                <div>
                  <h3 className="text-base font-bold text-white">{selectedUser.name}</h3>
                  <p className="text-xs text-neura-cyan font-mono">{selectedUser.email}</p>
                </div>
              </div>
              <button onClick={() => setSelectedUser(null)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-slate-400 block text-[10px]">Role Assignment</span>
                <span className="font-bold text-neura-cyan font-mono">{selectedUser.role}</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-slate-400 block text-[10px]">Account Status</span>
                <span className={`font-bold ${selectedUser.status === 'Active' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {selectedUser.status}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-slate-400 block text-[10px]">Department</span>
                <span className="font-semibold text-white">{selectedUser.department}</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-slate-400 block text-[10px]">Phone Contact</span>
                <span className="font-mono text-slate-200">{selectedUser.phone}</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-slate-400 block text-[10px]">Last IP Address</span>
                <span className="font-mono text-slate-300">{selectedUser.ip}</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-slate-400 block text-[10px]">2FA Status</span>
                <span className="font-bold text-emerald-400">{selectedUser.twoFactor ? 'ENABLED' : 'DISABLED'}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-white/10">
              <button
                onClick={() => toggleUserStatus(selectedUser.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  selectedUser.status === 'Active' ? 'bg-rose-500/20 text-rose-400 border-rose-500/40' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                }`}
              >
                {selectedUser.status === 'Active' ? 'Suspend User Lock' : 'Activate User'}
              </button>

              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 rounded-xl bg-neura-cyan text-black font-bold text-xs shadow-glow-cyan"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <UserPlus className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Add Enterprise User</span>
              </h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <input type="file" ref={fileInputRef} onChange={handleAvatarFile} accept="image/*" className="hidden" />

            <form onSubmit={handleAddUser} className="space-y-3">
              <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <img src={formAvatar} alt="Avatar" className="w-12 h-12 rounded-xl object-cover ring-2 ring-neura-cyan/40" />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-neura-cyan text-xs font-bold border border-white/10"
                >
                  Upload Picture
                </button>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Alex Thompson"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="alex@neura.tech"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Department</label>
                  <input
                    type="text"
                    value={formDepartment}
                    onChange={(e) => setFormDepartment(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Role</label>
                  <select
                    value={formRole}
                    onChange={(e) => setFormRole(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                  >
                    <option value="ADMIN">ADMIN</option>
                    <option value="MANAGER">MANAGER</option>
                    <option value="DEVELOPER">DEVELOPER</option>
                    <option value="VIEWER">VIEWER</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan"
                >
                  Save User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
