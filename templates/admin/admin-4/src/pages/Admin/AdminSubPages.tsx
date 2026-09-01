import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  History,
  Lock,
  Boxes,
  Settings,
  Search,
  Plus,
  RefreshCw,
  Activity,
  Save,
  Radio,
  CheckCircle2,
  AlertTriangle,
  Key,
  Webhook,
  Users
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SUB_TABS = [
  { name: 'Activity Stream', path: '/admin/activity', icon: Activity },
  { name: 'System Audit Logs', path: '/admin/audit', icon: History },
  { name: 'Security & Auth Logs', path: '/admin/security', icon: Lock },
  { name: 'API & Webhooks', path: '/admin/api-webhooks', icon: Webhook },
  { name: 'Global Settings', path: '/admin/settings', icon: Settings }
];

export const AdminSubPages: React.FC<{ subPage: string }> = ({ subPage }) => {
  const { auditLogs, users, updateSettings, addToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [siteName, setSiteName] = useState('CoreVista Enterprise PM');
  const [maintMode, setMaintMode] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  const handleSaveSettings = () => {
    updateSettings({
      appName: siteName,
      twoFactorAuthRequired: twoFactor,
      emailNotificationsEnabled: emailAlerts
    });
    addToast('Global System Settings saved successfully.', 'success');
  };


  const securityEvents = [
    { day: 'Mon', logins: 120, failedAttempts: 2 },
    { day: 'Tue', logins: 145, failedAttempts: 1 },
    { day: 'Wed', logins: 160, failedAttempts: 4 },
    { day: 'Thu', logins: 138, failedAttempts: 0 },
    { day: 'Fri', logins: 152, failedAttempts: 3 }
  ];

  const actionCategories = [
    { name: 'Project Created', value: 35, color: '#3b82f6' },
    { name: 'User Role Update', value: 20, color: '#8b5cf6' },
    { name: 'Settings Changed', value: 15, color: '#f59e0b' },
    { name: 'Data Export', value: 30, color: '#10b981' }
  ];

  const webhooksList = [
    { id: 'wh-1', name: 'GitHub Deployment Webhook', url: 'https://api.corevista.io/v1/webhooks/github', event: 'push, release', status: 'Active' },
    { id: 'wh-2', name: 'Slack Alert Notification', url: 'https://hooks.slack.com/services/T00/B00/X00', event: 'task.urgent, audit.warning', status: 'Active' },
    { id: 'wh-3', name: 'Stripe Billing Events', url: 'https://api.corevista.io/v1/webhooks/stripe', event: 'invoice.paid, invoice.failed', status: 'Active' }
  ];

  const apiKeysList = [
    { id: 'key-1', name: 'Production CI/CD Deploy Key', prefix: 'cv_live_89a...', created: '2026-01-15', status: 'Active' },
    { id: 'key-2', name: 'Staging Integration Secret', prefix: 'cv_test_41f...', created: '2026-03-10', status: 'Active' }
  ];

  const filteredAudit = auditLogs.filter(a => 
    (a.userName || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
    (a.action || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = users.filter(u => 
    (u.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
    (u.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (u.role || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-app pb-4">
        <div>
          <h1 className="text-2xl font-bold text-app-primary flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-blue-500" />
            System Administration & Governance
          </h1>
          <p className="text-xs text-app-muted mt-1">
            Global access control, security policies, API integrations, and immutable audit logs.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-app-secondary/40 p-1 rounded-xl border border-app overflow-x-auto">
          {SUB_TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = subPage === tab.path.split('/')[2];
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-app-secondary hover:text-app-primary hover:bg-app-hover'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* SUBPAGE 1: ACTIVITY STREAM (DEFAULT) */}
      {(subPage === 'activity' || !subPage) && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="System Activity & Auth Telemetry">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={securityEvents}>
                    <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                    <Line type="monotone" dataKey="logins" stroke="#10b981" strokeWidth={3} name="Successful Logins" />
                    <Line type="monotone" dataKey="failedAttempts" stroke="#ef4444" strokeWidth={3} name="Failed Auth Attempts" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="Admin Governance Action Distribution">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={actionCategories} cx="50%" cy="50%" outerRadius={90} dataKey="value" label>
                      {actionCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <Card title="Real-time Admin Activity Feed">
            <div className="space-y-3">
              {auditLogs.slice(0, 5).map(log => (
                <div key={log.id} className="p-3 rounded-xl bg-app-secondary/30 border border-app flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs">
                      {(log.userName || 'AD').substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <span className="font-semibold text-app-primary block">{log.userName}</span>
                      <span className="text-[11px] text-app-muted">{log.action}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-app-muted font-mono">{log.timestamp}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* SUBPAGE 2: SYSTEM AUDIT LOGS */}
      {subPage === 'audit' && (
        <Card title="System Governance Audit Trail">
          <div className="space-y-4">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-app-muted absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search user or action..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-app-hover border border-app rounded-xl pl-9 pr-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">User</th>
                    <th className="p-3">Action Description</th>
                    <th className="p-3">IP Address</th>
                    <th className="p-3">Timestamp</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app">
                  {filteredAudit.map(log => (
                    <tr key={log.id} className="hover:bg-app-hover/50">
                      <td className="p-3 font-semibold text-app-primary">{log.userName}</td>
                      <td className="p-3 text-app-secondary">{log.action}</td>
                      <td className="p-3 text-app-muted font-mono">{log.ipAddress}</td>
                      <td className="p-3 text-app-muted font-mono">{log.timestamp}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                          {log.status || 'SUCCESS'}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <Button size="sm" variant="outline" onClick={() => addToast(`Inspected log entry ${log.id}`, 'info')}>
                          Inspect Log
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}

      {/* SUBPAGE 3: SECURITY & AUTH LOGS */}
      {subPage === 'security' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <span className="text-xs text-app-muted font-medium">Two-Factor Authentication (2FA)</span>
              <p className="text-2xl font-extrabold text-emerald-400 mt-1">100% Enforced</p>
              <span className="text-[11px] text-emerald-500 font-semibold mt-1 block">Mandatory for all workspace users</span>
            </Card>

            <Card className="p-4">
              <span className="text-xs text-app-muted font-medium">Single Sign-On (SSO / SAML)</span>
              <p className="text-2xl font-extrabold text-blue-400 mt-1">Active (Okta)</p>
              <span className="text-[11px] text-blue-500 font-semibold mt-1 block">SAML 2.0 Integration verified</span>
            </Card>

            <Card className="p-4">
              <span className="text-xs text-app-muted font-medium">Session Inactivity Timeout</span>
              <p className="text-2xl font-extrabold text-purple-400 mt-1">30 Minutes</p>
              <span className="text-[11px] text-purple-400 font-semibold mt-1 block">Auto lock screen active</span>
            </Card>
          </div>

          <Card title="Security & Authentication Telemetry">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={securityEvents}>
                  <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} />
                  <YAxis stroke="var(--text-muted)" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  <Legend />
                  <Bar dataKey="logins" fill="#3b82f6" name="Successful Logins" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="failedAttempts" fill="#ef4444" name="Failed Attempts" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      )}

      {/* SUBPAGE 4: API & WEBHOOKS (OR INTEGRATIONS) */}
      {(subPage === 'api-webhooks' || subPage === 'integrations') && (
        <div className="space-y-6">
          <Card title="Registered Webhook Subscriptions">
            <div className="space-y-3">
              {webhooksList.map(w => (
                <div key={w.id} className="p-3.5 rounded-xl bg-app-secondary/30 border border-app flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold text-app-primary block">{w.name}</span>
                    <span className="text-app-muted font-mono">{w.url}</span>
                    <span className="text-[10px] text-blue-400 block mt-0.5">Events: {w.event}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                      {w.status}
                    </span>
                    <Button size="sm" variant="outline" onClick={() => addToast(`Triggered test ping for ${w.name}`, 'success')}>
                      Test Event
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="System API Secret Keys">
            <div className="space-y-3">
              {apiKeysList.map(k => (
                <div key={k.id} className="p-3.5 rounded-xl bg-app-secondary/30 border border-app flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-app-primary block">{k.name}</span>
                    <span className="text-app-muted font-mono">Key Prefix: {k.prefix} • Created: {k.created}</span>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => addToast(`Regenerated key ${k.name}`, 'warning')}>
                    Regenerate Key
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* SUBPAGE 5: GLOBAL SETTINGS */}
      {subPage === 'settings' && (
        <Card title="Global System Settings & Environment Configuration">
          <div className="space-y-5 max-w-2xl text-xs">
            <div>
              <label className="text-xs font-semibold text-app-muted mb-1 block">Platform System Title</label>
              <input
                type="text"
                value={siteName}
                onChange={e => setSiteName(e.target.value)}
                className="w-full bg-app-hover border border-app rounded-xl px-4 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-app-secondary/30 border border-app">
              <div>
                <span className="font-semibold text-xs text-app-primary">System Maintenance Mode</span>
                <p className="text-[11px] text-app-muted">Restrict access for non-admin users during updates</p>
              </div>
              <input
                type="checkbox"
                checked={maintMode}
                onChange={e => setMaintMode(e.target.checked)}
                className="w-4 h-4 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-app-secondary/30 border border-app">
              <div>
                <span className="font-semibold text-xs text-app-primary">Enforce Two-Factor Authentication (2FA)</span>
                <p className="text-[11px] text-app-muted">Require TOTP for all team member logins</p>
              </div>
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={e => setTwoFactor(e.target.checked)}
                className="w-4 h-4 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-app-secondary/30 border border-app">
              <div>
                <span className="font-semibold text-xs text-app-primary">Automated System Email Alerts</span>
                <p className="text-[11px] text-app-muted">Send security and billing digest reports</p>
              </div>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={e => setEmailAlerts(e.target.checked)}
                className="w-4 h-4 rounded cursor-pointer"
              />
            </div>

            <Button variant="primary" icon={<Save className="w-4 h-4" />} onClick={handleSaveSettings}>
              Save Workspace Settings
            </Button>

          </div>
        </Card>
      )}

      {/* FALLBACK FOR USERS PROVISIONING ROUTE */}
      {subPage === 'users' && (
        <Card title="User Accounts & Identity Directory">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-app-muted absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search user, email, or role..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-app-hover border border-app rounded-xl pl-9 pr-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                />
              </div>
              <Button size="sm" variant="primary" icon={<Plus className="w-3.5 h-3.5" />} onClick={() => addToast('Invite User modal opened.', 'info')}>
                Provision User
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">User</th>
                    <th className="p-3">Email Address</th>
                    <th className="p-3">System Role</th>
                    <th className="p-3">Department</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app">
                  {filteredUsers.map(u => (
                    <tr key={u.id} className="hover:bg-app-hover/50">
                      <td className="p-3 flex items-center gap-3">
                        <img src={u.avatar} alt={u.name} className="w-7 h-7 rounded-full object-cover" />
                        <span className="font-semibold text-app-primary">{u.name}</span>
                      </td>
                      <td className="p-3 text-app-secondary font-mono">{u.email}</td>
                      <td className="p-3 font-semibold text-blue-400">{u.role}</td>
                      <td className="p-3 text-app-muted">{u.department || 'Engineering'}</td>
                      <td className="p-3 text-right">
                        <Button size="sm" variant="outline" onClick={() => addToast(`Editing user permissions for ${u.name}`, 'info')}>
                          Permissions
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

