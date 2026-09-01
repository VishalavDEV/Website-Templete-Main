import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShieldCheck, Lock, Key, Eye, AlertOctagon, CheckCircle2, Check, RefreshCw } from 'lucide-react';

export default function Security() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [ipWhitelisting, setIpWhitelisting] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [apiKey, setApiKey] = useState('neura_live_98a76f4e2b109c8d7e6f');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    setCurrentPassword('');
    setNewPassword('');
    showToast('Account password updated successfully!');
  };

  const generateApiKey = () => {
    const newKey = `neura_live_${Math.random().toString(36).substring(2, 18)}`;
    setApiKey(newKey);
    showToast('New secret API key generated!');
  };

  const securityThreatData = [
    { time: '00:00', blockedRequests: 140 },
    { time: '04:00', blockedRequests: 95 },
    { time: '08:00', blockedRequests: 320 },
    { time: '12:00', blockedRequests: 280 },
    { time: '16:00', blockedRequests: 410 },
    { time: '20:00', blockedRequests: 190 },
  ];

  return (
    <Layout title="Cyber Security & Compliance Audit" breadcrumb="Home / System / Security">
      <div className="space-y-6 relative">
        {toastMessage && (
          <div className="absolute top-0 right-0 z-50 px-4 py-2.5 rounded-2xl bg-emerald-500 text-black font-bold text-xs shadow-xl flex items-center space-x-2 animate-bounce">
            <Check className="w-4 h-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Security Audit AreaChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white flex items-center">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mr-2" />
            <span>Cyber Threat Telemetry (Blocked Malicious Traffic)</span>
          </h3>

          <div className="w-full h-56 sm:h-64 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={securityThreatData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorThreat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="time" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
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
                <Area type="monotone" dataKey="blockedRequests" stroke="#ef4444" strokeWidth={3} fill="url(#colorThreat)" name="Blocked Requests" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Security Toggles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl glass-card border border-white/10 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-white">Two-Factor Authentication (2FA)</h4>
              <p className="text-xs text-slate-400 mt-1">Enforce TOTP authenticator for all ADMIN logins.</p>
            </div>
            <button
              onClick={() => {
                setTwoFactor(!twoFactor);
                showToast(`2FA turned ${!twoFactor ? 'ON' : 'OFF'}`);
              }}
              className={`w-12 h-6 rounded-full transition-all relative p-1 ${twoFactor ? 'bg-neura-cyan' : 'bg-white/10'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-black transition-all ${twoFactor ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-white/10 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-white">Strict IP Whitelisting</h4>
              <p className="text-xs text-slate-400 mt-1">Restrict admin console access to company CIDR range.</p>
            </div>
            <button
              onClick={() => {
                setIpWhitelisting(!ipWhitelisting);
                showToast(`IP Whitelisting turned ${!ipWhitelisting ? 'ON' : 'OFF'}`);
              }}
              className={`w-12 h-6 rounded-full transition-all relative p-1 ${ipWhitelisting ? 'bg-neura-cyan' : 'bg-white/10'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-black transition-all ${ipWhitelisting ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>

        {/* Password Update & API Key Generation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={handlePasswordUpdate} className="p-6 rounded-3xl glass-card border border-white/10 space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center">
              <Lock className="w-4 h-4 text-neura-cyan mr-2" />
              <span>Update Password Credentials</span>
            </h4>

            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Current Password</label>
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">New Password</label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
              />
            </div>

            <button type="submit" className="px-4 py-2 rounded-xl bg-neura-cyan text-black font-bold text-xs shadow-glow-cyan">
              Update Password
            </button>
          </form>

          <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center">
              <Key className="w-4 h-4 text-neura-purple mr-2" />
              <span>Secret API Key Token</span>
            </h4>

            <p className="text-xs text-slate-400">Use this token for programmatic REST API calls.</p>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between font-mono text-xs text-neura-cyan">
              <span className="truncate">{apiKey}</span>
              <button onClick={generateApiKey} className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white" title="Regenerate Key">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
