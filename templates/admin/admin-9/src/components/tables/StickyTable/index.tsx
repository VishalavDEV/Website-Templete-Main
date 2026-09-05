import React from 'react';

const DEFAULT_COLUMNS = [
  { key: 'logId', label: 'Log ID' },
  { key: 'service', label: 'Microservice' },
  { key: 'endpoint', label: 'API Endpoint' },
  { key: 'latency', label: 'Latency' },
  { key: 'status', label: 'HTTP Status' },
  { key: 'timestamp', label: 'Timestamp' },
];

const DEFAULT_DATA = [
  { logId: 'LOG-94801', service: 'auth-service-v2', endpoint: '/api/v1/auth/token', latency: '42ms', status: '200 OK', timestamp: '2026-09-05 17:42:01' },
  { logId: 'LOG-94802', service: 'billing-engine', endpoint: '/api/v1/subscriptions/charge', latency: '128ms', status: '200 OK', timestamp: '2026-09-05 17:42:05' },
  { logId: 'LOG-94803', service: 'analytics-aggregator', endpoint: '/api/v2/metrics/realtime', latency: '65ms', status: '200 OK', timestamp: '2026-09-05 17:42:10' },
  { logId: 'LOG-94804', service: 'user-directory', endpoint: '/api/v1/users/query', latency: '19ms', status: '200 OK', timestamp: '2026-09-05 17:42:12' },
  { logId: 'LOG-94805', service: 'notification-worker', endpoint: '/api/v1/push/dispatch', latency: '88ms', status: '202 Accepted', timestamp: '2026-09-05 17:42:18' },
  { logId: 'LOG-94806', service: 'auth-service-v2', endpoint: '/api/v1/auth/verify', latency: '31ms', status: '200 OK', timestamp: '2026-09-05 17:42:25' },
  { logId: 'LOG-94807', service: 'storage-cluster', endpoint: '/api/v1/blobs/upload', latency: '210ms', status: '201 Created', timestamp: '2026-09-05 17:42:30' },
];

export function StickyTable({ data, columns }: { data?: any[]; columns?: any[] }) {
  const activeColumns = columns && columns.length > 0 ? columns : DEFAULT_COLUMNS;
  const activeData = data && data.length > 0 ? data : DEFAULT_DATA;

  return (
    <div className="overflow-auto rounded-xl border border-border bg-card shadow-sm max-h-60 select-none">
      <table className="min-w-full divide-y divide-border text-xs">
        <thead className="bg-muted sticky top-0 z-10 shadow-sm border-b border-border">
          <tr>
            {activeColumns.map((c) => (
              <th key={c.key} className="px-4 py-3 text-left font-bold text-muted-foreground/80 uppercase">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {activeData.map((row, i) => (
            <tr key={i} className="hover:bg-accent/10 transition-colors">
              {activeColumns.map((c) => (
                <td key={c.key} className="px-4 py-3 text-foreground/90">{row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
