import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Shield, Mail, Phone, Calendar, Edit3, Key, Terminal } from 'lucide-react';

const AdminProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Admin Profile</h1>
          <p className="text-sm text-slate-500 font-medium">Verify your administrative identity, roles, and console logs</p>
        </div>
        <button
          onClick={() => navigate('/settings?tab=account')}
          className="inline-flex items-center gap-2 py-2 px-4 border border-slate-200 hover:border-indigo-500 hover:text-indigo-655 rounded-xl text-xs font-bold transition-all active:scale-95 bg-white shadow-sm"
        >
          <Edit3 className="h-4 w-4" />
          Edit Profile
        </button>
      </div>

      {/* Profile Details Block */}
      <div className="bg-white rounded-2xl border border-slate-100 card-shadow overflow-hidden">
        {/* Banner accent */}
        <div className="h-32 bg-gradient-to-r from-indigo-550 via-purple-550 to-cyan-550" />

        {/* Profile Info */}
        <div className="p-6 relative">
          {/* Avatar overlay */}
          <div className="absolute -top-12 left-6">
            <img
              src={user.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}
              alt="Avatar"
              className="h-24 w-24 rounded-2xl object-cover ring-4 ring-white shadow-lg"
            />
          </div>

          <div className="pl-32 pt-2 pb-6 border-b border-slate-100 space-y-1">
            <h2 className="text-xl font-extrabold text-slate-850 tracking-tight capitalize">{user.username}</h2>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 capitalize">
              <Shield className="h-4 w-4 text-indigo-500" />
              {user.role?.replace('ROLE_', '').toLowerCase()}
            </div>
          </div>

          {/* Details list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-sm font-semibold text-slate-650">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-slate-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Email Address</span>
                <span className="text-slate-800">{user.email || 'N/A'}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-slate-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Phone Number</span>
                <span className="text-slate-800">{user.phone || '+1 (555) 019-2834'}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-slate-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Account Status</span>
                <span className="text-green-600 font-black flex items-center gap-1.5 capitalize text-xs">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  {user.status?.toLowerCase() || 'active'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Terminal className="h-5 w-5 text-slate-400" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">API Console Access</span>
                <span className="text-indigo-600 font-bold text-xs">Full Permissions (Root)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security notice / shortcuts */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow space-y-4">
        <h3 className="font-bold text-slate-800 text-sm border-b border-slate-50 pb-3 flex items-center gap-2">
          <Key className="h-4.5 w-4.5 text-slate-400" />
          Security Information
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed font-semibold">
          Your dashboard login token is encrypted and securely saved on this device. If you suspect unauthorized access or are on a public computer, please sign out immediately or update your credentials under Security preferences.
        </p>
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => navigate('/settings?tab=security')}
            className="px-4 py-2 border border-slate-200 hover:border-indigo-500 hover:text-indigo-650 rounded-xl text-xs font-bold bg-white transition-all active:scale-95 shadow-sm"
          >
            Update password
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
