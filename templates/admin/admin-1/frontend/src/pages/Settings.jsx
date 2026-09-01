import React, { useState, useRef } from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
  User, Shield, Database, Bell, Cpu, Save, Camera, Key, Lock,
  RefreshCw, Check, AlertTriangle, Sliders, Globe, Mail, Sparkles, Terminal, HardDrive
} from 'lucide-react';

export default function Settings() {
  const { user, updateUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const avatarInputRef = useRef(null);

  const [activeTab, setActiveTab] = useState('profile');
  const [toastMessage, setToastMessage] = useState('');

  // Admin Profile State
  const [adminName, setAdminName] = useState(user?.name || 'Admin User');
  const [adminEmail, setAdminEmail] = useState(user?.email || 'admin@neura.tech');
  const [adminPhone, setAdminPhone] = useState(user?.phone || '+1 (555) 019-2834');
  const [adminDepartment, setAdminDepartment] = useState(user?.department || 'Executive Engineering');
  const [adminBio, setAdminBio] = useState(user?.bio || 'Super Admin & Lead System Architect at NEURA Cybernetics.');
  const [adminAvatar, setAdminAvatar] = useState(user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80');

  // Security State
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState('1 hour');

  // System & Engine State
  const [gpuAllocation, setGpuAllocation] = useState('Dynamic High-Throughput (Cluster US-East)');
  const [dbSync, setDbSync] = useState('Real-Time Streaming WebSockets (100ms)');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [cacheFlushing, setCacheFlushing] = useState(false);
  const [backupRunning, setBackupRunning] = useState(false);

  // Notifications State
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [slackWebhook, setSlackWebhook] = useState('https://hooks.slack.com/services/T00/B00/X00');
  const [gpuThreshold, setGpuThreshold] = useState(85);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAdminAvatar(imageUrl);
      updateUser({ avatar: imageUrl });
      showToast('Admin Profile Picture updated!');
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
    showToast('Admin Profile & Info saved globally!');
  };

  const handleSaveSecurity = (e) => {
    e.preventDefault();
    if (currentPass || newPass) {
      setCurrentPass('');
      setNewPass('');
      showToast('Security Password updated successfully!');
    } else {
      showToast('Security policies updated!');
    }
  };

  const handleSaveSystem = (e) => {
    e.preventDefault();
    showToast('System Engine configuration deployed!');
  };

  const handleFlushCache = () => {
    setCacheFlushing(true);
    setTimeout(() => {
      setCacheFlushing(false);
      showToast('System Redis & V8 Bytecode Cache flushed (1.4 GB freed).');
    }, 1200);
  };

  const handleTriggerBackup = () => {
    setBackupRunning(true);
    setTimeout(() => {
      setBackupRunning(false);
      showToast('Full MySQL & GCS Storage Snapshot backup created: neura_backup_2026-08-19.sql');
    }, 1800);
  };

  return (
    <Layout title="System & Admin Control Settings" breadcrumb="Home / Settings">
      <div className="space-y-6 max-w-6xl relative">
        {/* Floating Toast Alert */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-emerald-500 text-black font-bold text-xs shadow-2xl flex items-center space-x-2.5 animate-bounce">
            <Check className="w-5 h-5" />
            <span>{toastMessage}</span>
          </div>
        )}

        <input
          type="file"
          ref={avatarInputRef}
          onChange={handleAvatarChange}
          accept="image/*"
          className="hidden"
        />

        {/* Tab Navigation Header */}
        <div className="rounded-3xl glass-card p-3 border border-white/10 flex flex-wrap items-center gap-2">
          {[
            { id: 'profile', label: 'Admin Profile', icon: User, color: 'text-neura-cyan' },
            { id: 'security', label: 'Security & Auth', icon: Shield, color: 'text-emerald-400' },
            { id: 'system', label: 'System Engine', icon: Cpu, color: 'text-neura-purple' },
            { id: 'notifications', label: 'Alerts & Webhooks', icon: Bell, color: 'text-amber-400' },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl font-bold text-xs flex items-center space-x-2 transition-all ${
                  isActive
                    ? 'bg-neura-cyan text-black shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-black' : tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: ADMIN PROFILE & IDENTITY */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Admin Avatar & Card Info */}
            <div className="lg:col-span-4 rounded-3xl glass-card p-6 border border-white/10 space-y-5 text-center flex flex-col items-center justify-center">
              <div className="relative group">
                <img
                  src={adminAvatar}
                  alt="Admin Avatar"
                  className="w-28 h-28 rounded-3xl object-cover ring-4 ring-neura-cyan/50 shadow-2xl transition-transform group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => avatarInputRef.current?.click()}
                  className="absolute -bottom-2 -right-2 p-2.5 rounded-2xl bg-neura-cyan text-black shadow-glow-cyan hover:scale-110 transition-transform"
                  title="Change Admin Picture"
                >
                  <Camera className="w-4 h-4 font-bold" />
                </button>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{adminName}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{adminEmail}</p>
                <div className="mt-2.5 flex items-center justify-center space-x-2">
                  <span className="px-3 py-1 rounded-full bg-neura-cyan/20 text-neura-cyan border border-neura-cyan/30 text-[10px] font-mono font-bold uppercase">
                    {user?.role || 'ADMIN'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase">
                    ACTIVE SESSIONS: 3
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 w-full text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Department:</span>
                  <span className="font-semibold text-white">{adminDepartment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Phone:</span>
                  <span className="font-mono text-slate-200">{adminPhone}</span>
                </div>
              </div>
            </div>

            {/* Admin Profile Form */}
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
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan font-mono"
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
        )}

        {/* TAB 2: SECURITY & AUTH */}
        {activeTab === 'security' && (
          <form onSubmit={handleSaveSecurity} className="rounded-3xl glass-card p-6 border border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
              <Shield className="w-5 h-5 text-emerald-400 mr-2" />
              <span>Authentication & Access Credentials</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-white flex items-center">
                  <Lock className="w-4 h-4 text-neura-cyan mr-2" />
                  <span>Password Security Update</span>
                </h4>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Current Password</label>
                  <input
                    type="password"
                    value={currentPass}
                    onChange={(e) => setCurrentPass(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">New Strong Password</label>
                  <input
                    type="password"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    placeholder="Minimum 8 chars with symbols"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                  />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                <h4 className="text-xs font-bold text-white flex items-center">
                  <Key className="w-4 h-4 text-emerald-400 mr-2" />
                  <span>Two-Factor Authentication & Session Timeout</span>
                </h4>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">2FA Authenticator App</span>
                    <span className="text-[11px] text-slate-400">Require TOTP code on login.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    className={`w-12 h-6 rounded-full transition-all relative p-1 ${twoFactorEnabled ? 'bg-neura-cyan' : 'bg-white/10'}`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-black transition-all ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Inactivity Session Timeout</label>
                  <select
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                  >
                    <option value="15 mins">15 Minutes</option>
                    <option value="1 hour">1 Hour (Recommended)</option>
                    <option value="8 hours">8 Hours</option>
                    <option value="Never">Never (Developer Mode)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Security Rules</span>
              </button>
            </div>
          </form>
        )}

        {/* TAB 3: SYSTEM ENGINE */}
        {activeTab === 'system' && (
          <form onSubmit={handleSaveSystem} className="rounded-3xl glass-card p-6 border border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
              <Cpu className="w-5 h-5 text-neura-purple mr-2" />
              <span>System & Engine Performance Controls</span>
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <label className="text-xs font-bold text-white flex items-center">
                  <Cpu className="w-4 h-4 mr-2 text-neura-cyan" />
                  <span>AI Inference GPU Allocation Cluster</span>
                </label>
                <select
                  value={gpuAllocation}
                  onChange={(e) => setGpuAllocation(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                >
                  <option value="Dynamic High-Throughput (Cluster US-East)">Dynamic High-Throughput (Cluster US-East)</option>
                  <option value="Dedicated NVIDIA H100 Node">Dedicated NVIDIA H100 Node</option>
                  <option value="Power-Saving Low-Latency Batch Mode">Power-Saving Low-Latency Batch Mode</option>
                </select>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <label className="text-xs font-bold text-white flex items-center">
                  <Database className="w-4 h-4 mr-2 text-neura-purple" />
                  <span>Database Synchronization Frequency</span>
                </label>
                <select
                  value={dbSync}
                  onChange={(e) => setDbSync(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                >
                  <option value="Real-Time Streaming WebSockets (100ms)">Real-Time Streaming WebSockets (100ms)</option>
                  <option value="Interval Batch (5 Seconds)">Interval Batch (5 Seconds)</option>
                  <option value="On-Demand Manual Pull">On-Demand Manual Pull</option>
                </select>
              </div>

              {/* Operations Triggers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-white">System Bytecode Cache</h4>
                  <p className="text-[11px] text-slate-400">Purge Redis cache and stored V8 memory buffers.</p>
                  <button
                    type="button"
                    onClick={handleFlushCache}
                    disabled={cacheFlushing}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neura-cyan text-xs font-bold flex items-center space-x-2 transition-all"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${cacheFlushing ? 'animate-spin' : ''}`} />
                    <span>{cacheFlushing ? 'Flushing...' : 'Flush Cache'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-white">Database Snapshot Backup</h4>
                  <p className="text-[11px] text-slate-400">Create full SQL export and upload to S3.</p>
                  <button
                    type="button"
                    onClick={handleTriggerBackup}
                    disabled={backupRunning}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-400 text-xs font-bold flex items-center space-x-2 transition-all"
                  >
                    <HardDrive className={`w-3.5 h-3.5 ${backupRunning ? 'animate-bounce' : ''}`} />
                    <span>{backupRunning ? 'Backing Up...' : 'Trigger Backup'}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save System Preferences</span>
              </button>
            </div>
          </form>
        )}

        {/* TAB 4: ALERTS & WEBHOOKS */}
        {activeTab === 'notifications' && (
          <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
              <Bell className="w-5 h-5 text-amber-400 mr-2" />
              <span>Alert Notifications & Webhooks</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white">Critical Security Email Alerts</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Send instant emails for unauthorized login attempts or firewall alerts.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setEmailAlerts(!emailAlerts)}
                  className={`w-12 h-6 rounded-full transition-all relative p-1 ${emailAlerts ? 'bg-neura-cyan' : 'bg-white/10'}`}
                >
                  <div className={`w-4 h-4 rounded-full bg-black transition-all ${emailAlerts ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <label className="font-bold text-white block">Slack Alert Webhook Endpoint</label>
                <input
                  type="text"
                  value={slackWebhook}
                  onChange={(e) => setSlackWebhook(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-neura-cyan text-xs font-mono focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="flex justify-between font-bold text-white">
                  <span>GPU Memory Load Alert Threshold</span>
                  <span className="text-neura-cyan font-mono">{gpuThreshold}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="98"
                  value={gpuThreshold}
                  onChange={(e) => setGPUThreshold(Number(e.target.value))}
                  className="w-full accent-neura-cyan"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => showToast('Alert Notification Webhooks saved!')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Alert Webhooks</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
