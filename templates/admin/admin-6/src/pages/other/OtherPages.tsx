import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { PageHeader } from '../../components/common/PageHeader';
import { FormInput } from '../../components/forms/FormInput';
import { INITIAL_NOTIFICATIONS } from '../../data/mockData';
import { Save, Bell, AlertTriangle, ArrowLeft, LayoutDashboard } from 'lucide-react';

export const UserProfilePage: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const { showToast } = useToast();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, email, phone });
    showToast('Profile Updated', 'Your profile details have been saved.');
  };

  return (
    <div className="space-y-6">
      <PageHeader title="My User Profile" subtitle="Manage personal account credentials, role details, and avatar." />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6 max-w-2xl">
        <div className="flex items-center gap-4">
          <img src={user?.avatar} alt={user?.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-brand-500/20" />
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{user?.name}</h2>
            <p className="text-xs text-slate-500">{user?.role} • {user?.department}</p>
          </div>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-4">
          <FormInput label="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <FormInput label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <FormInput label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <button type="submit" className="px-5 py-2.5 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  return (
    <div className="space-y-6">
      <PageHeader title="Notification Center" subtitle="Comprehensive list of system notifications, order updates, and stock alerts." />
      <div className="space-y-3">
        {notifications.map((n) => (
          <div key={n.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">{n.title}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{n.message}</p>
            </div>
            <span className="text-[10px] text-slate-400">{n.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
      <div className="p-4 rounded-3xl bg-brand-950 border border-brand-800 text-brand-400 mb-6">
        <AlertTriangle className="w-16 h-16" />
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight mb-2">404</h1>
      <h2 className="text-xl font-bold text-slate-200 mb-2">Page Not Found</h2>
      <p className="text-sm text-slate-400 max-w-md mb-8">
        The requested URL path does not exist or has been relocated to another enterprise module.
      </p>

      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl flex items-center gap-2 border border-slate-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all"
        >
          <LayoutDashboard className="w-4 h-4" /> Go Dashboard
        </button>
      </div>
    </div>
  );
};
