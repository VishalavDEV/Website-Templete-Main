import React, { useState, useRef } from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import {
  User, Mail, Phone, Building, Camera, Save, Shield, Key, Lock,
  CheckCircle, Clock, Smartphone, Laptop, Terminal, Check, Activity, Sparkles, ShieldCheck
} from 'lucide-react';

export default function Profile() {
  const { user, updateUser } = useAuth();
  const avatarInputRef = useRef(null);

  const [toastMessage, setToastMessage] = useState('');

  // Admin Profile Fields
  const [adminName, setAdminName] = useState(user?.name || 'Admin User');
  const [adminEmail, setAdminEmail] = useState(user?.email || 'admin@neura.tech');
  const [adminPhone, setAdminPhone] = useState(user?.phone || '+1 (555) 019-2834');
  const [adminDepartment, setAdminDepartment] = useState(user?.department || 'Executive Engineering');
  const [adminBio, setAdminBio] = useState(user?.bio || 'Super Admin & Lead System Architect at NEURA Cybernetics.');
  const [adminAvatar, setAdminAvatar] = useState(user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80');

  const [activeSessions, setActiveSessions] = useState([
    { id: 1, device: 'Chrome on Windows 11 (This Device)', location: 'San Francisco, CA', ip: '192.168.1.102', time: 'Active Now', current: true },
    { id: 2, device: 'Neura Mobile iOS App', location: 'San Francisco, CA', ip: '172.56.21.88', time: '2 hours ago', current: false },
    { id: 3, device: 'Kubectl K8s CLI Auth Token', location: 'US-East-1 Cluster', ip: '10.0.4.15', time: 'Yesterday', current: false },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleAvatarFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAdminAvatar(imageUrl);
      updateUser({ avatar: imageUrl });
      showToast('Admin Profile Picture updated successfully!');
    }
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateUser({
      name: adminName,
      email: adminEmail,
      phone: adminPhone,
      department: adminDepartment,
      bio: adminBio,
      avatar: adminAvatar
    });
    showToast('User Profile & Identity saved globally!');
  };

  const revokeSession = (id) => {
    setActiveSessions(activeSessions.filter(s => s.id !== id));
    showToast('Session revoked and access token invalidated.');
  };

  return (
    <Layout title="User Admin Profile" breadcrumb="Home / Users / Profile">
      <div className="space-y-6 max-w-6xl relative">
        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-emerald-500 text-black font-bold text-xs shadow-2xl flex items-center space-x-2.5 animate-bounce">
            <Check className="w-5 h-5" />
            <span>{toastMessage}</span>
          </div>
        )}

        <input
          type="file"
          ref={avatarInputRef}
          onChange={handleAvatarFile}
          accept="image/*"
          className="hidden"
        />

        {/* Profile Card & Details Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Avatar & Quick Info Card */}
          <div className="lg:col-span-4 rounded-3xl glass-card p-6 border border-white/10 space-y-6 text-center flex flex-col items-center justify-between">
            <div className="w-full space-y-5 flex flex-col items-center">
              <div className="relative group">
                <img
                  src={adminAvatar}
                  alt="Admin Avatar"
                  className="w-32 h-32 rounded-3xl object-cover ring-4 ring-neura-cyan/50 shadow-2xl transition-transform group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => avatarInputRef.current?.click()}
                  className="absolute -bottom-2 -right-2 p-3 rounded-2xl bg-neura-cyan text-black shadow-glow-cyan hover:scale-110 transition-transform"
                  title="Change Admin Picture"
                >
                  <Camera className="w-4 h-4 font-bold" />
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center justify-center space-x-1.5">
                  <span>{adminName}</span>
                  <ShieldCheck className="w-4 h-4 text-neura-cyan" />
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{adminEmail}</p>
                <div className="mt-3 flex items-center justify-center space-x-2">
                  <span className="px-3 py-1 rounded-full bg-neura-cyan/20 text-neura-cyan border border-neura-cyan/30 text-[10px] font-mono font-bold uppercase">
                    {user?.role || 'ADMIN'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase">
                    ACTIVE SESSIONS: {activeSessions.length}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 w-full text-left space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Department:</span>
                  <span className="font-semibold text-white">{adminDepartment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Phone:</span>
                  <span className="font-mono text-slate-200">{adminPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Security Status:</span>
                  <span className="font-bold text-emerald-400">2FA ENABLED</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => avatarInputRef.current?.click()}
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neura-cyan font-bold text-xs transition-colors flex items-center justify-center space-x-2 mt-4"
            >
              <Camera className="w-4 h-4" />
              <span>Upload New Picture</span>
            </button>
          </div>

          {/* Right Column: Admin Profile Details Form */}
          <form onSubmit={handleSaveProfile} className="lg:col-span-8 rounded-3xl glass-card p-6 border border-white/10 space-y-5">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
              <User className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Admin Profile Details</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Admin Full Name</label>
                <input
                  type="text"
                  required
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Admin Email Address</label>
                <input
                  type="email"
                  required
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={adminPhone}
                  onChange={(e) => setAdminPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Department</label>
                <input
                  type="text"
                  value={adminDepartment}
                  onChange={(e) => setAdminDepartment(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Profile Bio & Role Description</label>
              <textarea
                rows={3}
                value={adminBio}
                onChange={(e) => setAdminBio(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan resize-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Avatar Image URL (or upload above)</label>
              <input
                type="text"
                value={adminAvatar}
                onChange={(e) => setAdminAvatar(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan font-mono"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Update Admin Profile</span>
              </button>
            </div>
          </form>
        </div>

        {/* Active Sessions & Security Section */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center">
            <Laptop className="w-5 h-5 text-neura-cyan mr-2" />
            <span>Active Login Sessions & Tokens</span>
          </h3>

          <div className="space-y-3">
            {activeSessions.map((session) => (
              <div
                key={session.id}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center space-x-3">
                  {session.device.includes('Phone') ? (
                    <Smartphone className="w-5 h-5 text-neura-purple shrink-0" />
                  ) : session.device.includes('CLI') ? (
                    <Terminal className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <Laptop className="w-5 h-5 text-neura-cyan shrink-0" />
                  )}
                  <div>
                    <div className="font-bold text-white flex items-center space-x-2">
                      <span>{session.device}</span>
                      {session.current && (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                          THIS DEVICE
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-[11px] font-mono mt-0.5">
                      {session.location} • IP: {session.ip} • {session.time}
                    </p>
                  </div>
                </div>

                {!session.current && (
                  <button
                    onClick={() => revokeSession(session.id)}
                    className="px-3 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 border border-rose-500/30 text-xs font-semibold shrink-0 self-start sm:self-auto"
                  >
                    Revoke Access
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
