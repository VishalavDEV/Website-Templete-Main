import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { INITIAL_ACTIVITY_LOGS } from '../../data/mockData';
import { ActivityLog, LoginLog } from '../../types';
import { ShieldCheck, Activity, Key, AlertTriangle, Server, Cpu, HardDrive } from 'lucide-react';

const INITIAL_LOGIN_LOGS: LoginLog[] = [
  { id: 'l1', user: 'Alexander Pierce', email: 'alexander@enterprise.com', ipAddress: '192.168.1.104', location: 'New York, USA', device: 'Chrome / Windows 11', timestamp: '2026-08-24 10:14:02', status: 'Success' },
  { id: 'l2', user: 'Eleanor Vance', email: 'eleanor@enterprise.com', ipAddress: '192.168.1.112', location: 'San Francisco, USA', device: 'Safari / macOS', timestamp: '2026-08-24 09:45:18', status: 'Success' },
  { id: 'l3', user: 'Unknown User', email: 'unknown@external.net', ipAddress: '45.33.21.99', location: 'Frankfurt, Germany', device: 'Python HTTP Client', timestamp: '2026-08-24 02:11:00', status: 'Failed' },
];

export const ActivityLogsPage: React.FC = () => {
  const [logs] = useState<ActivityLog[]>(INITIAL_ACTIVITY_LOGS);

  const columns: Column<ActivityLog>[] = [
    { key: 'user', header: 'Operator', sortable: true },
    { key: 'action', header: 'Action Executed', sortable: true },
    { key: 'module', header: 'Module Scope', sortable: true },
    { key: 'ipAddress', header: 'IP Address' },
    { key: 'timestamp', header: 'Timestamp', sortable: true },
    { key: 'status', header: 'Outcome', render: (l) => <Badge variant="success">{l.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="System Activity Logs" subtitle="SOC2 compliant audit trails recording administrative modifications." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Audit Records" value="1,420" change={12.4} icon={Activity} />
        <StatCard title="Administrative Edits" value="340" change={4.2} icon={ShieldCheck} />
        <StatCard title="Security Compliance Score" value="100%" change={0} icon={ShieldCheck} />
      </div>
      <DataTable columns={columns} data={logs} keyExtractor={(l) => l.id} searchPlaceholder="Search audit logs..." />
    </div>
  );
};

export const LoginLogsPage: React.FC = () => {
  const [logs] = useState<LoginLog[]>(INITIAL_LOGIN_LOGS);

  const columns: Column<LoginLog>[] = [
    { key: 'user', header: 'User Account', sortable: true },
    { key: 'email', header: 'Email Address' },
    { key: 'ipAddress', header: 'IP Address' },
    { key: 'location', header: 'Geolocation' },
    { key: 'device', header: 'User Agent / Device' },
    { key: 'timestamp', header: 'Login Timestamp', sortable: true },
    { key: 'status', header: 'Auth Status', render: (l) => <Badge variant={l.status === 'Success' ? 'success' : 'danger'}>{l.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Authentication & Login Logs" subtitle="Track user sign-ins, IP geolocations, failed password attempts, and SSO tokens." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Successful Sign-ins" value="142 logins" change={8.4} icon={Key} />
        <StatCard title="Blocked Auth Attempts" value="1 attempt" change={-80.0} trend="up" icon={AlertTriangle} />
        <StatCard title="Active Concurrent Sessions" value="4 sessions" change={0} icon={ShieldCheck} />
      </div>
      <DataTable columns={columns} data={logs} keyExtractor={(l) => l.id} searchPlaceholder="Search login logs..." />
    </div>
  );
};

export const ErrorLogsPage: React.FC = () => (
  <div className="space-y-6">
    <PageHeader title="Application Exception & Error Logs" subtitle="Uncaught frontend stack traces, backend REST 500 errors, and API timeouts." />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <StatCard title="Unhandled Exceptions" value="0 errors" change={-100.0} trend="up" icon={ShieldCheck} />
      <StatCard title="API 404 / 500 Errors" value="0 requests" change={-100.0} trend="up" icon={AlertTriangle} />
      <StatCard title="Error Free Session Rate" value="100.0%" change={0.5} icon={ShieldCheck} />
    </div>
  </div>
);

export const SystemHealthPage: React.FC = () => (
  <div className="space-y-6">
    <PageHeader title="Infrastructure Telemetry & Health" subtitle="Real-time CPU utilization, database connection pools, memory load, and uptime." />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <StatCard title="CPU Core Load" value="14.2%" change={-2.1} trend="up" icon={Cpu} />
      <StatCard title="RAM Allocation" value="2.4 GB / 16 GB" change={0} icon={Server} />
      <StatCard title="MySQL Connection Pool" value="12 active / 100 max" change={0} icon={HardDrive} />
    </div>
  </div>
);
