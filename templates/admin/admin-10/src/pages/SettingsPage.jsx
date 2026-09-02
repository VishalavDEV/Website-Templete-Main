import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Sun,
  Moon,
  Bell,
  ShieldCheck,
  Globe,
  Key,
  Smartphone,
  Save,
  CheckCircle2,
  Lock,
  Layers
} from 'lucide-react';

import Breadcrumb from '../components/common/Breadcrumb';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';

export default function SettingsPage() {
  const { theme, toggleTheme, compactMode, toggleCompactMode } = useTheme();
  const { adminProfile, setAdminProfile, addToast } = useApp();

  const [activeTab, setActiveTab] = useState('profile');

  // Form State
  const [profileForm, setProfileForm] = useState({
    name: adminProfile.name,
    email: adminProfile.email,
    phone: adminProfile.phone,
    avatar: adminProfile.avatar,
    location: adminProfile.location,
    bio: adminProfile.bio
  });

  const [notificationsForm, setNotificationsForm] = useState({
    email: adminProfile.emailNotifications,
    push: adminProfile.pushNotifications,
    order: adminProfile.orderAlerts,
    system: adminProfile.systemAlerts
  });

  const [preferencesForm, setPreferencesForm] = useState({
    language: adminProfile.language,
    timezone: adminProfile.timezone,
    currency: adminProfile.currency
  });

  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirmPass: ''
  });

  const handleProfileSave = (e) => {
    e.preventDefault();
    setAdminProfile(prev => ({ ...prev, ...profileForm }));
    addToast('Admin Profile updated successfully!', 'success');
  };

  const handleNotificationsSave = (e) => {
    e.preventDefault();
    setAdminProfile(prev => ({
      ...prev,
      emailNotifications: notificationsForm.email,
      pushNotifications: notificationsForm.push,
      orderAlerts: notificationsForm.order,
      systemAlerts: notificationsForm.system
    }));
    addToast('Notification preferences saved!', 'success');
  };

  const handlePreferencesSave = (e) => {
    e.preventDefault();
    setAdminProfile(prev => ({ ...prev, ...preferencesForm }));
    addToast('Regional preferences updated!', 'success');
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (!passwords.newPass || passwords.newPass !== passwords.confirmPass) {
      addToast('New passwords do not match!', 'error');
      return;
    }
    addToast('Password updated securely!', 'success');
    setPasswords({ current: '', newPass: '', confirmPass: '' });
  };

  return (
    <div className="space-y-8">
      <Breadcrumb />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Platform Settings & Preferences
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Configure system themes, security policies, administrative credentials, and alerts
          </p>
        </div>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 dark:border-slate-800 pb-3">
        {[
          { key: 'profile', label: 'Admin Profile', icon: User },
          { key: 'appearance', label: 'Appearance', icon: Sun },
          { key: 'notifications', label: 'Notifications', icon: Bell },
          { key: 'security', label: 'Security & 2FA', icon: ShieldCheck },
          { key: 'preferences', label: 'Preferences', icon: Globe }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm max-w-4xl">
        {/* 1. PROFILE SETTINGS */}
        {activeTab === 'profile' && (
          <form onSubmit={handleProfileSave} className="space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <img
                src={profileForm.avatar}
                alt={profileForm.name}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-brand-500/20"
              />
              <div className="space-y-2">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Admin Avatar</h3>
                <input
                  type="text"
                  value={profileForm.avatar}
                  onChange={(e) => setProfileForm({ ...profileForm, avatar: e.target.value })}
                  placeholder="Avatar image URL"
                  className="w-full sm:w-80 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                <input
                  type="text"
                  required
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full mt-1 px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                <input
                  type="email"
                  required
                  value={profileForm.email}
                  onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                  className="w-full mt-1 px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                <input
                  type="text"
                  value={profileForm.phone}
                  onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                  className="w-full mt-1 px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Location</label>
                <input
                  type="text"
                  value={profileForm.location}
                  onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                  className="w-full mt-1 px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Bio Summary</label>
              <textarea
                rows={3}
                value={profileForm.bio}
                onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                className="w-full mt-1 px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
              />
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md shadow-brand-500/20 transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </form>
        )}

        {/* 2. APPEARANCE SETTINGS */}
        {activeTab === 'appearance' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-3">Theme Selection</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => { if (theme === 'dark') toggleTheme(); }}
                  className={`p-5 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                    theme === 'light'
                      ? 'border-brand-500 bg-brand-50/40 dark:bg-brand-950/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Light Mode</p>
                      <p className="text-xs text-slate-400">Clean high-contrast theme</p>
                    </div>
                  </div>
                  {theme === 'light' && <CheckCircle2 className="w-5 h-5 text-brand-500" />}
                </button>

                <button
                  type="button"
                  onClick={() => { if (theme === 'light') toggleTheme(); }}
                  className={`p-5 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                    theme === 'dark'
                      ? 'border-brand-500 bg-slate-800'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-900 text-indigo-400 rounded-xl">
                      <Moon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">Dark Mode</p>
                      <p className="text-xs text-slate-400">Sleek obsidian night view</p>
                    </div>
                  </div>
                  {theme === 'dark' && <CheckCircle2 className="w-5 h-5 text-brand-500" />}
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Compact Density Mode</h4>
                  <p className="text-xs text-slate-400">Reduce line heights and padding for data-dense displays</p>
                </div>
                <button
                  onClick={toggleCompactMode}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    compactMode ? 'bg-brand-600' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                >
                  <span className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    compactMode ? 'left-6' : 'left-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. NOTIFICATIONS SETTINGS */}
        {activeTab === 'notifications' && (
          <form onSubmit={handleNotificationsSave} className="space-y-6">
            {[
              { key: 'email', label: 'Email Notifications', desc: 'Receive daily report digests and critical system alerts via email.' },
              { key: 'push', label: 'Browser Push Alerts', desc: 'Real-time browser notifications for high-priority events.' },
              { key: 'order', label: 'Order Telemetry Alerts', desc: 'Trigger instant notifications whenever an order > $500 is placed.' },
              { key: 'system', label: 'System Health Alerts', desc: 'Alert when API error rates spike or database maintenance is due.' }
            ].map(item => (
              <div key={item.key} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{item.label}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationsForm[item.key]}
                  onChange={(e) => setNotificationsForm({ ...notificationsForm, [item.key]: e.target.checked })}
                  className="w-5 h-5 text-brand-600 rounded focus:ring-brand-500"
                />
              </div>
            ))}

            <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="submit"
                className="px-5 py-2.5 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-md shadow-brand-500/20"
              >
                Save Preferences
              </button>
            </div>
          </form>
        )}

        {/* 4. SECURITY SETTINGS */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <form onSubmit={handlePasswordUpdate} className="space-y-4 max-w-md">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Change Admin Password</h3>
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Current Password</label>
                <input
                  type="password"
                  required
                  value={passwords.current}
                  onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">New Password</label>
                <input
                  type="password"
                  required
                  value={passwords.newPass}
                  onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={passwords.confirmPass}
                  onChange={(e) => setPasswords({ ...passwords, confirmPass: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-md"
              >
                Update Password
              </button>
            </form>
          </div>
        )}

        {/* 5. PREFERENCES SETTINGS */}
        {activeTab === 'preferences' && (
          <form onSubmit={handlePreferencesSave} className="space-y-4 max-w-md">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">System Language</label>
              <select
                value={preferencesForm.language}
                onChange={(e) => setPreferencesForm({ ...preferencesForm, language: e.target.value })}
                className="w-full mt-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
              >
                <option value="English (US)">English (US)</option>
                <option value="English (UK)">English (UK)</option>
                <option value="German">German</option>
                <option value="French">French</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Timezone</label>
              <select
                value={preferencesForm.timezone}
                onChange={(e) => setPreferencesForm({ ...preferencesForm, timezone: e.target.value })}
                className="w-full mt-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
              >
                <option value="Pacific Time (PT) - UTC-7">Pacific Time (PT) - UTC-7</option>
                <option value="Eastern Time (ET) - UTC-4">Eastern Time (ET) - UTC-4</option>
                <option value="Greenwich Mean Time (GMT) - UTC+0">Greenwich Mean Time (GMT) - UTC+0</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Currency Display</label>
              <select
                value={preferencesForm.currency}
                onChange={(e) => setPreferencesForm({ ...preferencesForm, currency: e.target.value })}
                className="w-full mt-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm"
              >
                <option value="USD ($)">USD ($)</option>
                <option value="EUR (€)">EUR (€)</option>
                <option value="GBP (£)">GBP (£)</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-5 py-2.5 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-md"
              >
                Save Preferences
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
