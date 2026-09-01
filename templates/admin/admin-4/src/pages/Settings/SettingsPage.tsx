import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Tabs } from '../../components/Common/Tabs';
import { Settings, Shield, Bell, Palette, Database, RotateCcw } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { settings, updateSettings, theme, toggleTheme, resetToDemoData } = useApp();

  const [appName, setAppName] = useState(settings.appName);
  const [currency, setCurrency] = useState(settings.currency);
  const [timezone, setTimezone] = useState(settings.timezone);
  const [dateFormat, setDateFormat] = useState(settings.dateFormat);
  const [emailAlerts, setEmailAlerts] = useState(settings.emailNotificationsEnabled);
  const [twoFactor, setTwoFactor] = useState(settings.twoFactorAuthRequired);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      ...settings,
      appName,
      currency,
      timezone,
      dateFormat,
      emailNotificationsEnabled: emailAlerts,
      twoFactorAuthRequired: twoFactor
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-xl font-bold text-app-primary">System & Workspace Settings</h1>
        <p className="text-xs text-app-secondary mt-0.5">
          Configure application parameters, appearance themes, security requirements, and notifications.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* General Settings */}
        <Card title="General Workspace Configuration">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Application Name</label>
              <input
                type="text"
                value={appName}
                onChange={e => setAppName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-app-primary mb-1">Default Currency</label>
              <select
                value={currency}
                onChange={e => setCurrency(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              >
                <option value="USD ($)">USD ($)</option>
                <option value="EUR (€)">EUR (€)</option>
                <option value="GBP (£)">GBP (£)</option>
                <option value="JPY (¥)">JPY (¥)</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-app-primary mb-1">Timezone</label>
              <input
                type="text"
                value={timezone}
                onChange={e => setTimezone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-app-primary mb-1">Date Format</label>
              <input
                type="text"
                value={dateFormat}
                onChange={e => setDateFormat(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              />
            </div>
          </div>
        </Card>

        {/* Appearance Settings */}
        <Card title="Appearance & Themes">
          <div className="flex items-center justify-between text-xs">
            <div>
              <p className="font-semibold text-app-primary">Active Visual Theme</p>
              <p className="text-app-secondary mt-0.5">Currently using {theme === 'dark' ? 'Grey/Charcoal Dark Mode' : 'Light Theme'}</p>
            </div>
            <Button type="button" variant="outline" size="sm" onClick={toggleTheme}>
              Switch Theme Mode
            </Button>
          </div>
        </Card>

        {/* Security & Notifications */}
        <Card title="Security & Authentication Controls">
          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-app-primary">Enforce Two-Factor Authentication (2FA)</p>
                <p className="text-app-secondary">Require TOTP authenticator code on workspace sign in.</p>
              </div>
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={e => setTwoFactor(e.target.checked)}
                className="rounded border-app text-blue-600 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-app">
              <div>
                <p className="font-semibold text-app-primary">Email Notifications</p>
                <p className="text-app-secondary">Send automated emails for task assignments & deadlines.</p>
              </div>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={e => setEmailAlerts(e.target.checked)}
                className="rounded border-app text-blue-600 cursor-pointer"
              />
            </div>
          </div>
        </Card>

        {/* Save Settings */}
        <div className="flex items-center justify-between pt-4">
          <Button
            type="button"
            variant="danger"
            size="sm"
            icon={<RotateCcw className="w-4 h-4" />}
            onClick={resetToDemoData}
          >
            Reset Platform to Initial Demo Data
          </Button>
          <Button type="submit" variant="primary">
            Save All Settings
          </Button>
        </div>
      </form>
    </div>
  );
};
