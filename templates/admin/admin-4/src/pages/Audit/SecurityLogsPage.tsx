import React from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Badge } from '../../components/Common/Badge';
import { Shield, Key, Lock, AlertTriangle } from 'lucide-react';

export const SecurityLogsPage: React.FC = () => {
  const { auditLogs } = useApp();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-app-primary">Security & Login Session Logs</h1>
        <p className="text-xs text-app-secondary mt-0.5">
          Real-time security telemetry, MFA challenges, IP geo-locations, and authentication logs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card title="Active Sessions">
          <span className="text-2xl font-bold text-emerald-400">14 Active</span>
        </Card>
        <Card title="2FA Enforcement">
          <span className="text-2xl font-bold text-blue-400">Enabled (TOTP)</span>
        </Card>
        <Card title="Failed Login Attempts">
          <span className="text-2xl font-bold text-amber-400">0 (24h)</span>
        </Card>
      </div>

      <Card title="Authentication & Session Audit History" noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-app-primary">
            <thead className="bg-app-secondary/60 border-b border-app text-app-muted uppercase font-semibold">
              <tr>
                <th className="p-3.5 pl-5">Timestamp</th>
                <th className="p-3.5">User</th>
                <th className="p-3.5">IP Address</th>
                <th className="p-3.5">Event Action</th>
                <th className="p-3.5">Severity</th>
                <th className="p-3.5 text-right pr-5">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app">
              {auditLogs.map(a => (
                <tr key={a.id} className="hover:bg-app-hover">
                  <td className="p-3.5 pl-5 font-mono text-app-muted">{a.timestamp}</td>
                  <td className="p-3.5 font-bold text-app-primary">{a.userName}</td>
                  <td className="p-3.5 font-mono text-blue-400">{a.ipAddress}</td>
                  <td className="p-3.5 font-medium">{a.action}</td>
                  <td className="p-3.5"><Badge variant={a.severity === 'Warning' ? 'warning' : 'completed'}>{a.severity}</Badge></td>
                  <td className="p-3.5 text-right pr-5 text-app-secondary">{a.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
