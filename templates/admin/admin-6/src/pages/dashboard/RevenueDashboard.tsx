import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { DollarSign, CreditCard, PieChart, TrendingUp, Activity, Clock, Server, BarChart3 } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const REVENUE_TREND = [
  { day: 'Mon', mrr: 14200, arr: 170400 },
  { day: 'Tue', mrr: 14500, arr: 174000 },
  { day: 'Wed', mrr: 15100, arr: 181200 },
  { day: 'Thu', mrr: 15800, arr: 189600 },
  { day: 'Fri', mrr: 16400, arr: 196800 },
  { day: 'Sat', mrr: 16900, arr: 202800 },
  { day: 'Sun', mrr: 17500, arr: 210000 },
];

const TELEMETRY_TIME_SERIES = [
  { time: '00:00', requests: 1200, latency: 42, memory: 45 },
  { time: '04:00', requests: 800, latency: 35, memory: 42 },
  { time: '08:00', requests: 3400, latency: 58, memory: 68 },
  { time: '12:00', requests: 4800, latency: 48, memory: 74 },
  { time: '16:00', requests: 5200, latency: 38, memory: 70 },
  { time: '20:00', requests: 2900, latency: 36, memory: 55 },
  { time: '23:59', requests: 1800, latency: 34, memory: 48 },
];

interface EndpointHealth {
  endpoint: string;
  method: string;
  avgLatency: string;
  throughput: string;
  errorRate: string;
  status: 'Healthy' | 'Degraded';
}

const ENDPOINT_HEALTH_DATA: EndpointHealth[] = [
  { endpoint: '/api/v1/orders/create', method: 'POST', avgLatency: '32 ms', throughput: '1,420 req/m', errorRate: '0.01%', status: 'Healthy' },
  { endpoint: '/api/v1/products/catalog', method: 'GET', avgLatency: '18 ms', throughput: '4,850 req/m', errorRate: '0.00%', status: 'Healthy' },
  { endpoint: '/api/v1/analytics/telemetry', method: 'GET', avgLatency: '45 ms', throughput: '890 req/m', errorRate: '0.04%', status: 'Healthy' },
  { endpoint: '/api/v1/auth/sso-verify', method: 'POST', avgLatency: '24 ms', throughput: '620 req/m', errorRate: '0.00%', status: 'Healthy' },
];

const formatNumberTick = (val: number) => {
  if (val >= 1000) return `${(val / 1000).toFixed(0)}k`;
  return `${val}`;
};

export const RevenueDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Revenue Insights"
        subtitle="Detailed analysis of Monthly Recurring Revenue (MRR), ARR, and cash projections."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Monthly Recurring Revenue (MRR)" value="$17,500" change={16.8} icon={DollarSign} />
        <StatCard title="Annual Run Rate (ARR)" value="$210,000" change={18.2} icon={TrendingUp} />
        <StatCard title="Net Profit Margin" value="58.2%" change={5.4} icon={PieChart} />
        <StatCard title="Outstanding Invoices" value="$16,196" change={-4.1} trend="down" icon={CreditCard} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">7-Day MRR & ARR Run Rate</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={REVENUE_TREND} margin={{ top: 10, right: 25, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatNumberTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Line type="monotone" dataKey="mrr" stroke="#10b981" strokeWidth={3} name="MRR ($)" />
              <Line type="monotone" dataKey="arr" stroke="#0c93e7" strokeWidth={2} strokeDasharray="5 5" name="ARR ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export const AnalyticsDashboard: React.FC = () => {
  const columns: Column<EndpointHealth>[] = [
    { key: 'endpoint', header: 'API Endpoint Path', sortable: true },
    { key: 'method', header: 'HTTP Method', render: (e) => <Badge variant={e.method === 'POST' ? 'indigo' : 'info'}>{e.method}</Badge> },
    { key: 'avgLatency', header: 'Avg Latency', sortable: true },
    { key: 'throughput', header: 'Throughput', sortable: true },
    { key: 'errorRate', header: 'Error Rate %' },
    { key: 'status', header: 'Health Status', render: (e) => <Badge variant="success">{e.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="System Analytics"
        subtitle="Real-time website traffic, system API latency, active sessions, and user retention."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Active Daily Users" value="4,892" change={11.4} icon={Activity} />
        <StatCard title="Avg Session Duration" value="14m 32s" change={8.1} icon={Clock} />
        <StatCard title="API Server Latency" value="38ms" change={-12.5} trend="up" icon={Server} />
        <StatCard title="Bounce Rate" value="24.1%" change={-3.2} trend="up" icon={BarChart3} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">System Telemetry & Request Load</h3>
            <p className="text-xs text-slate-500">API request throughput (req/m), latency (ms), and server RAM utilization (%)</p>
          </div>
          <Badge variant="success">99.99% Uptime</Badge>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={TELEMETRY_TIME_SERIES} margin={{ top: 10, right: 25, left: 10, bottom: 5 }}>
              <defs>
                <linearGradient id="reqGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0c93e7" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#0c93e7" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="latGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={55} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatNumberTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff', border: 'none' }} />
              <Area type="monotone" dataKey="requests" stroke="#0c93e7" strokeWidth={3} fill="url(#reqGrad)" name="Requests / Min" />
              <Area type="monotone" dataKey="latency" stroke="#f59e0b" strokeWidth={2} fill="url(#latGrad)" name="Latency (ms)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable columns={columns} data={ENDPOINT_HEALTH_DATA} keyExtractor={(e) => e.endpoint} searchPlaceholder="Search API endpoint telemetry..." />
    </div>
  );
};
