import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { FormInput } from '../../components/forms/FormInput';
import { FormSelect } from '../../components/forms/FormSelect';
import { useToast } from '../../context/ToastContext';
import { Save, Lock, Bell, CreditCard, Globe, Key, DollarSign, ShieldCheck, RefreshCw } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

const GATEWAY_VOLUME_DATA = [
  { name: 'Stripe Live', volume: 84500, fill: '#0c93e7' },
  { name: 'PayPal Commerce', volume: 32000, fill: '#6366f1' },
  { name: 'Bank Wire Direct', volume: 32000, fill: '#10b981' },
];

const LOCALE_DISTRIBUTION_DATA = [
  { name: 'English (United States)', value: 55, color: '#0c93e7' },
  { name: 'English (United Kingdom)', value: 20, color: '#6366f1' },
  { name: 'German (Deutsch)', value: 15, color: '#10b981' },
  { name: 'Spanish (Español)', value: 10, color: '#f59e0b' },
];

export const GeneralSettingsPage: React.FC = () => {
  const { showToast } = useToast();
  const [companyName, setCompanyName] = useState('Nexus Enterprise Inc');
  const [supportEmail, setSupportEmail] = useState('support@nexusenterprise.com');
  const [currency, setCurrency] = useState('USD ($)');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Settings Saved', 'General company settings updated successfully.');
  };

  return (
    <div className="space-y-6">
      <PageHeader title="General System Settings" subtitle="Configure organization profile, legal company details, and default currency." />

      <form onSubmit={handleSave} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4 max-w-2xl">
        <FormInput label="Organization / Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        <FormInput label="Official Support Email" type="email" value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} required />
        <FormSelect
          label="Default System Currency"
          options={[
            { label: 'USD ($)', value: 'USD ($)' },
            { label: 'EUR (€)', value: 'EUR (€)' },
            { label: 'GBP (£)', value: 'GBP (£)' },
            { label: 'CAD ($)', value: 'CAD ($)' },
          ]}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <button type="submit" className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-xl flex items-center gap-2 shadow-sm">
          <Save className="w-4 h-4" /> Save General Settings
        </button>
      </form>
    </div>
  );
};

export const SecuritySettingsPage: React.FC = () => {
  const { showToast } = useToast();
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="space-y-6">
      <PageHeader title="Security & Authentication" subtitle="Password policies, multi-factor authentication (2FA), and session timeouts." />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6 max-w-2xl">
        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Two-Factor Authentication (2FA)</h4>
            <p className="text-[11px] text-slate-500">Require authenticator app code on every login.</p>
          </div>
          <input
            type="checkbox"
            checked={twoFactor}
            onChange={() => {
              setTwoFactor(!twoFactor);
              showToast('Security Updated', `2FA requirement ${!twoFactor ? 'enabled' : 'disabled'}`);
            }}
            className="w-5 h-5 accent-brand-600 rounded cursor-pointer"
          />
        </div>

        <form onSubmit={(e) => { e.preventDefault(); showToast('Password Updated', 'Your security password has been changed.'); }} className="space-y-4">
          <FormInput label="Current Password" type="password" required />
          <FormInput label="New Password" type="password" required />
          <button type="submit" className="px-4 py-2 bg-brand-600 text-white text-xs font-semibold rounded-xl">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export const NotificationSettingsPage: React.FC = () => {
  const { showToast } = useToast();
  return (
    <div className="space-y-6">
      <PageHeader title="Notification Preferences" subtitle="Email alerts, order placement notifications, and support ticket updates." />
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4 max-w-2xl">
        <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span>Email order confirmation receipts</span>
          <input type="checkbox" defaultChecked onChange={() => showToast('Saved', 'Preference updated')} className="w-4 h-4 accent-brand-600" />
        </label>
        <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span>Low inventory stock warning alerts</span>
          <input type="checkbox" defaultChecked onChange={() => showToast('Saved', 'Preference updated')} className="w-4 h-4 accent-brand-600" />
        </label>
      </div>
    </div>
  );
};

export const PaymentSettingsPage: React.FC = () => {
  const { showToast } = useToast();
  const [stripeEnabled, setStripeEnabled] = useState(true);
  const [paypalEnabled, setPaypalEnabled] = useState(true);
  const [stripeKey, setStripeKey] = useState('pk_live_51M0019283819283891283');
  const [paypalEmail, setPaypalEmail] = useState('merchant@nexusenterprise.com');

  const handleSaveStripe = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Stripe Updated', 'Stripe Live API credentials saved successfully.');
  };

  const handleSavePaypal = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('PayPal Updated', 'PayPal merchant business email updated.');
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Payment Gateways & Integrations" subtitle="Connect Stripe, PayPal, and Bank Wire payment clearing integrations." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active Payment Gateways" value="3 Active" change={0} icon={CreditCard} />
        <StatCard title="Monthly Gateway Clearing" value="$148,500" change={18.4} icon={DollarSign} />
        <StatCard title="Clearing SLA Reliability" value="99.99%" change={0.1} icon={ShieldCheck} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Monthly Payment Clearing Volume Distribution</h3>
        <p className="text-xs text-slate-500 mb-4">Volume breakdown across connected payment providers ($).</p>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={GATEWAY_VOLUME_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="name" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="volume" fill="#0c93e7" name="Clearing Volume ($)" radius={[4, 4, 0, 0]}>
                {GATEWAY_VOLUME_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form onSubmit={handleSaveStripe} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-brand-600" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Stripe Live Gateway</h4>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="text-xs font-semibold text-slate-500">{stripeEnabled ? 'Enabled' : 'Disabled'}</span>
              <input type="checkbox" checked={stripeEnabled} onChange={() => setStripeEnabled(!stripeEnabled)} className="w-4 h-4 accent-brand-600" />
            </label>
          </div>
          <FormInput label="Publishable API Key" value={stripeKey} onChange={(e) => setStripeKey(e.target.value)} required />
          <FormInput label="Secret API Key" type="password" value="••••••••••••••••••••••••" readOnly />
          <button type="submit" className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Stripe Credentials
          </button>
        </form>

        <form onSubmit={handleSavePaypal} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-indigo-600" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">PayPal Business Express</h4>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="text-xs font-semibold text-slate-500">{paypalEnabled ? 'Enabled' : 'Disabled'}</span>
              <input type="checkbox" checked={paypalEnabled} onChange={() => setPaypalEnabled(!paypalEnabled)} className="w-4 h-4 accent-brand-600" />
            </label>
          </div>
          <FormInput label="PayPal Merchant Email" type="email" value={paypalEmail} onChange={(e) => setPaypalEmail(e.target.value)} required />
          <FormSelect label="Environment" options={[{ label: 'Live Production', value: 'live' }, { label: 'Sandbox Testing', value: 'sandbox' }]} value="live" />
          <button type="submit" className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Save className="w-4 h-4" /> Save PayPal Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export const LocalizationSettingsPage: React.FC = () => {
  const { showToast } = useToast();
  const [language, setLanguage] = useState('en-US');
  const [timezone, setTimezone] = useState('America/New_York (UTC-05:00)');
  const [dateFormat, setDateFormat] = useState('YYYY-MM-DD');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Localization Updated', 'System locale, timezones, and regional formats saved.');
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Localization & Regional Settings" subtitle="Language standards, timezone defaults, date formats (YYYY-MM-DD), and currency formatting." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Default Language" value="English (US)" change={0} icon={Globe} />
        <StatCard title="System Timezone" value="EST (UTC-5)" change={0} icon={Globe} />
        <StatCard title="Date Format Standard" value="YYYY-MM-DD" change={0} icon={Globe} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={handleSave} className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
          <FormSelect
            label="Primary Display Language"
            options={[
              { label: 'English (United States) - en-US', value: 'en-US' },
              { label: 'English (United Kingdom) - en-GB', value: 'en-GB' },
              { label: 'German (Deutsch) - de-DE', value: 'de-DE' },
              { label: 'Spanish (Español) - es-ES', value: 'es-ES' },
            ]}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />

          <FormSelect
            label="System Standard Timezone"
            options={[
              { label: 'Eastern Standard Time (America/New_York - UTC-05:00)', value: 'America/New_York (UTC-05:00)' },
              { label: 'Pacific Standard Time (America/Los_Angeles - UTC-08:00)', value: 'America/Los_Angeles (UTC-08:00)' },
              { label: 'Greenwich Mean Time (Europe/London - UTC+00:00)', value: 'Europe/London (UTC+00:00)' },
              { label: 'Central European Time (Europe/Berlin - UTC+01:00)', value: 'Europe/Berlin (UTC+01:00)' },
            ]}
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          />

          <FormSelect
            label="Date Format Standard"
            options={[
              { label: 'ISO Standard (YYYY-MM-DD)', value: 'YYYY-MM-DD' },
              { label: 'US Standard (MM/DD/YYYY)', value: 'MM/DD/YYYY' },
              { label: 'European Standard (DD/MM/YYYY)', value: 'DD/MM/YYYY' },
            ]}
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
          />

          <button type="submit" className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-xl flex items-center gap-2 shadow-sm">
            <Save className="w-4 h-4" /> Save Localization Preferences
          </button>
        </form>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">User Traffic Locale Distribution</h3>
            <p className="text-xs text-slate-500 mb-4">Active user sessions by regional language locale</p>
            <div className="h-48 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={LOCALE_DISTRIBUTION_DATA} innerRadius={50} outerRadius={75} paddingAngle={4} dataKey="value">
                    {LOCALE_DISTRIBUTION_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const APISettingsPage: React.FC = () => {
  const { showToast } = useToast();
  return (
    <div className="space-y-6">
      <PageHeader title="API Credentials & Webhooks" subtitle="Manage secret API keys, OAuth tokens, and webhook endpoint URLs." />
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4 max-w-2xl">
        <FormInput label="Secret API Key" value="sk_live_99812739182391238912" readOnly />
        <button
          onClick={() => showToast('API Key Regenerated', 'New secret API key generated.')}
          className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl"
        >
          Regenerate Key
        </button>
      </div>
    </div>
  );
};
