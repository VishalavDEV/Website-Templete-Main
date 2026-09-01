import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Avatar } from '../../components/Common/Avatar';
import { Badge } from '../../components/Common/Badge';
import { History, ShieldCheck, Search, Filter } from 'lucide-react';

export const ActivityLogPage: React.FC = () => {
  const { activityLogs } = useApp();
  const [query, setQuery] = useState('');

  const filtered = activityLogs.filter(
    a => a.userName.toLowerCase().includes(query.toLowerCase()) || a.action.toLowerCase().includes(query.toLowerCase()) || a.entityName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-app-primary">Workspace Activity Log</h1>
        <p className="text-xs text-app-secondary mt-0.5">Chronological timeline of user mutations across all project entities.</p>
      </div>

      <div className="bg-app-surface p-4 border border-app rounded-2xl">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Filter activity by user or action..."
          className="w-full px-4 py-2 rounded-xl bg-app-secondary border border-app text-xs text-app-primary focus:outline-none"
        />
      </div>

      <Card noPadding>
        <div className="divide-y divide-app">
          {filtered.map(act => (
            <div key={act.id} className="p-4 flex items-start gap-3 text-xs hover:bg-app-hover">
              <Avatar src={act.userAvatar} name={act.userName} size="sm" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-app-primary">{act.userName}</span>
                  <span className="text-[10px] text-app-muted font-mono">{act.timestamp}</span>
                </div>
                <p className="text-app-secondary mt-1">
                  <span className="font-semibold text-blue-400">{act.action}</span> on{' '}
                  <span className="font-semibold text-app-primary">{act.entityName}</span> ({act.entityType})
                </p>
                <p className="text-[11px] text-app-muted mt-0.5">{act.details}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export const AuditLogPage: React.FC = () => {
  const { auditLogs } = useApp();
  const [query, setQuery] = useState('');

  const filtered = auditLogs.filter(
    a => a.userName.toLowerCase().includes(query.toLowerCase()) || a.action.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-app-primary">Security Audit Log</h1>
        <p className="text-xs text-app-secondary mt-0.5">Admin security events, permission modifications, and IP access logs.</p>
      </div>

      <Card noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-app-primary">
            <thead className="bg-app-secondary/60 border-b border-app text-app-muted uppercase font-semibold">
              <tr>
                <th className="p-3.5 pl-5">Timestamp</th>
                <th className="p-3.5">User</th>
                <th className="p-3.5">Role</th>
                <th className="p-3.5">Action</th>
                <th className="p-3.5">IP Address</th>
                <th className="p-3.5">Module</th>
                <th className="p-3.5 text-right pr-5">Severity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app">
              {filtered.map(aud => (
                <tr key={aud.id} className="hover:bg-app-hover">
                  <td className="p-3.5 pl-5 font-mono text-app-muted">{aud.timestamp}</td>
                  <td className="p-3.5 font-semibold">{aud.userName}</td>
                  <td className="p-3.5 text-app-secondary">{aud.userRole}</td>
                  <td className="p-3.5 font-medium">{aud.action}</td>
                  <td className="p-3.5 font-mono text-blue-400">{aud.ipAddress}</td>
                  <td className="p-3.5">{aud.module}</td>
                  <td className="p-3.5 text-right pr-5">
                    <Badge variant={aud.severity === 'Warning' ? 'warning' : 'neutral'}>{aud.severity}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
