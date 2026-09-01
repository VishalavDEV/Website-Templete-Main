import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SettingService, UserService, AdminSetting, User, AuthService } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';
import { Globe, User as UserIcon, Shield, Bell } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const { showToast } = useToast();
  const location = useLocation();

  // Tab management
  const queryTab = new URLSearchParams(location.search).get('tab');
  const [activeTab, setActiveTab] = useState(queryTab || 'general');

  const [loading, setLoading] = useState(false);

  // 1. General website settings states
  const [websiteName, setWebsiteName] = useState('');
  const [websiteLogo, setWebsiteLogo] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [address, setAddress] = useState('');

  // 2. Account settings states
  const [accUsername, setAccUsername] = useState('');
  const [accEmail, setAccEmail] = useState('');
  const [accPhone, setAccPhone] = useState('');
  const [accAvatar, setAccAvatar] = useState('');

  // 3. Security settings states
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 4. Notifications preferences states
  const [notifyOrders, setNotifyOrders] = useState(true);
  const [notifySystem, setNotifySystem] = useState(true);
  const [notifyLogins, setNotifyLogins] = useState(false);

  // Retrieve current user details
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    fetchGeneralSettings();
    loadAccountSettings();
  }, []);

  const fetchGeneralSettings = async () => {
    try {
      const data = await SettingService.get();
      setWebsiteName(data.websiteName);
      setWebsiteLogo(data.websiteLogo || '');
      setContactEmail(data.contactEmail || '');
      setContactPhone(data.contactPhone || '');
      setAddress(data.address || '');
    } catch (err) {
      console.error(err);
    }
  };

  const loadAccountSettings = () => {
    setAccUsername(currentUser.username || '');
    setAccEmail(currentUser.email || '');
    setAccPhone(currentUser.phone || '');
    setAccAvatar(currentUser.profileImage || '');
  };

  const handleSaveGeneral = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload: AdminSetting = {
        websiteName,
        websiteLogo,
        contactEmail,
        contactPhone,
        address,
      };
      await SettingService.update(payload);
      showToast('General settings updated successfully.', 'success');
    } catch (err) {
      showToast('Failed to update general settings.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Find current user's database ID
      const users = await UserService.getAll();
      const dbUser = users.find((u) => u.username === currentUser.username);
      if (!dbUser || !dbUser.id) {
        showToast('Account user reference missing.', 'error');
        return;
      }

      const payload: User = {
        username: accUsername,
        email: accEmail,
        phone: accPhone,
        profileImage: accAvatar,
        role: dbUser.role,
        status: dbUser.status,
      };

      await UserService.update(dbUser.id, payload);
      
      // Update session
      const updatedUserSession = {
        ...currentUser,
        username: accUsername,
        email: accEmail,
        phone: accPhone,
        profileImage: accAvatar,
      };
      localStorage.setItem('user', JSON.stringify(updatedUserSession));

      showToast('Account profile updated successfully.', 'success');
    } catch (err: any) {
      showToast(err.response?.data?.message || 'Failed to update account.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSecurity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      showToast('Fields are empty.', 'warning');
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast('Passwords do not match.', 'error');
      return;
    }

    setLoading(true);
    try {
      await AuthService.resetPassword({
        email: currentUser.email,
        newPassword: newPassword,
      });
      showToast('Password updated successfully.', 'success');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      showToast('Failed to update password.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Notifications preferences saved.', 'success');
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">System Settings</h1>
        <p className="text-sm text-slate-500 font-medium">Configure global site options, customize user details, and change credentials</p>
      </div>

      {/* Setup configuration layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Navigation panel tab */}
        <div className="flex flex-col gap-1.5 md:col-span-1">
          <button
            onClick={() => setActiveTab('general')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
              activeTab === 'general' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Globe className="h-4 w-4" />
            General
          </button>
          <button
            onClick={() => setActiveTab('account')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
              activeTab === 'account' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <UserIcon className="h-4 w-4" />
            My Account
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
              activeTab === 'security' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Shield className="h-4 w-4" />
            Security
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
              activeTab === 'notifications' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Bell className="h-4 w-4" />
            Notifications
          </button>
        </div>

        {/* Configurations Forms */}
        <div className="md:col-span-3 bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
          {/* TAB 1: General settings */}
          {activeTab === 'general' && (
            <form onSubmit={handleSaveGeneral} className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm mb-4 border-b border-slate-50 pb-2">Global Settings</h3>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Website Name</label>
                <input
                  type="text"
                  required
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold text-slate-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Logo URL</label>
                <input
                  type="text"
                  value={websiteLogo}
                  onChange={(e) => setWebsiteLogo(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold text-slate-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Contact Email</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Contact Phone</label>
                  <input
                    type="text"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold text-slate-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Street Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold text-slate-700"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl active:scale-95 disabled:opacity-50 transition-all cursor-pointer shadow-sm"
                >
                  Save General Settings
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: Account Profile settings */}
          {activeTab === 'account' && (
            <form onSubmit={handleSaveAccount} className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm mb-4 border-b border-slate-50 pb-2">Account Profile</h3>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Admin Username</label>
                <input
                  type="text"
                  required
                  value={accUsername}
                  onChange={(e) => setAccUsername(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold text-slate-750"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={accEmail}
                  onChange={(e) => setAccEmail(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold text-slate-750"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone Number</label>
                <input
                  type="text"
                  value={accPhone}
                  onChange={(e) => setAccPhone(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold text-slate-750"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Profile Photo URL</label>
                <input
                  type="text"
                  value={accAvatar}
                  onChange={(e) => setAccAvatar(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold text-slate-750"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl active:scale-95 disabled:opacity-50 transition-all cursor-pointer shadow-sm"
                >
                  Save Profile Settings
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: Security settings */}
          {activeTab === 'security' && (
            <form onSubmit={handleSaveSecurity} className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm mb-4 border-b border-slate-50 pb-2">Change Password</h3>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">New Password</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl active:scale-95 disabled:opacity-50 transition-all cursor-pointer shadow-sm"
                >
                  Update Credentials
                </button>
              </div>
            </form>
          )}

          {/* TAB 4: Notifications settings */}
          {activeTab === 'notifications' && (
            <form onSubmit={handleSaveNotifications} className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm mb-4 border-b border-slate-50 pb-2">Alert Preferences</h3>

              <div className="space-y-3 font-semibold text-slate-650">
                <div className="flex items-start">
                  <input
                    id="notify-orders"
                    type="checkbox"
                    checked={notifyOrders}
                    onChange={(e) => setNotifyOrders(e.target.checked)}
                    className="h-4.5 w-4.5 text-indigo-650 rounded border-slate-250 cursor-pointer"
                  />
                  <label htmlFor="notify-orders" className="ml-3 block text-xs cursor-pointer select-none">
                    <p className="text-slate-800 font-bold">Orders Alerts</p>
                    <p className="text-slate-400 font-medium mt-0.5">Receive immediate notifications on customer checkout purchases</p>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    id="notify-system"
                    type="checkbox"
                    checked={notifySystem}
                    onChange={(e) => setNotifySystem(e.target.checked)}
                    className="h-4.5 w-4.5 text-indigo-650 rounded border-slate-250 cursor-pointer"
                  />
                  <label htmlFor="notify-system" className="ml-3 block text-xs cursor-pointer select-none">
                    <p className="text-slate-800 font-bold">System Alerts</p>
                    <p className="text-slate-400 font-medium mt-0.5">Alert me when CPU/RAM spikes or API connections timeout</p>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    id="notify-logins"
                    type="checkbox"
                    checked={notifyLogins}
                    onChange={(e) => setNotifyLogins(e.target.checked)}
                    className="h-4.5 w-4.5 text-indigo-650 rounded border-slate-250 cursor-pointer"
                  />
                  <label htmlFor="notify-logins" className="ml-3 block text-xs cursor-pointer select-none">
                    <p className="text-slate-800 font-bold">Security Alerts</p>
                    <p className="text-slate-400 font-medium mt-0.5">Notify me on failed administrator session logins or updates</p>
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl active:scale-95 transition-all cursor-pointer shadow-sm"
                >
                  Save Notification Preferences
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
