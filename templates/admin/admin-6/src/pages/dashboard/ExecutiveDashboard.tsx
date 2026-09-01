import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  Activity,
  Server,
  Clock,
  BarChart3,
  PieChart as PieIcon,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from 'recharts';
import { useToast } from '../../context/ToastContext';

// Dynamic Datasets for Timeframe Filter
const TIMEFRAME_DATA = {
  today: {
    stats: { revenue: '$14,850', orders: '42', customers: '28', margin: '62.4%' },
    revenueSeries: [
      { month: '08:00', revenue: 1200, expenses: 800 },
      { month: '10:00', revenue: 3400, expenses: 1900 },
      { month: '12:00', revenue: 5800, expenses: 3200 },
      { month: '14:00', revenue: 8900, expenses: 4800 },
      { month: '16:00', revenue: 12400, expenses: 6900 },
      { month: '18:00', revenue: 14850, expenses: 8100 },
    ],
  },
  week: {
    stats: { revenue: '$89,200', orders: '284', customers: '142', margin: '58.1%' },
    revenueSeries: [
      { month: 'Mon', revenue: 11200, expenses: 6400 },
      { month: 'Tue', revenue: 14500, expenses: 8200 },
      { month: 'Wed', revenue: 18900, expenses: 10500 },
      { month: 'Thu', revenue: 22400, expenses: 12800 },
      { month: 'Fri', revenue: 29800, expenses: 16200 },
      { month: 'Sat', revenue: 34500, expenses: 18900 },
      { month: 'Sun', revenue: 89200, expenses: 48000 },
    ],
  },
  month: {
    stats: { revenue: '$444,000', orders: '1,248', customers: '892', margin: '56.8%' },
    revenueSeries: [
      { month: 'Jan', revenue: 42000, expenses: 28000 },
      { month: 'Feb', revenue: 58000, expenses: 32000 },
      { month: 'Mar', revenue: 64000, expenses: 31000 },
      { month: 'Apr', revenue: 78000, expenses: 40000 },
      { month: 'May', revenue: 92000, expenses: 45000 },
      { month: 'Jun', revenue: 110000, expenses: 52000 },
    ],
  },
  year: {
    stats: { revenue: '$4,850,000', orders: '14,200', customers: '3,450', margin: '54.2%' },
    revenueSeries: [
      { month: 'Q1 2025', revenue: 650000, expenses: 410000 },
      { month: 'Q2 2025', revenue: 890000, expenses: 520000 },
      { month: 'Q3 2025', revenue: 1120000, expenses: 680000 },
      { month: 'Q4 2025', revenue: 1450000, expenses: 890000 },
      { month: 'Q1 2026', revenue: 1780000, expenses: 980000 },
      { month: 'Q2 2026', revenue: 4850000, expenses: 2450000 },
    ],
  },
};

const CATEGORY_DATA = [
  { name: 'Hardware', value: 45, color: '#0c93e7' },
  { name: 'Software', value: 30, color: '#6366f1' },
  { name: 'Networking', value: 15, color: '#10b981' },
  { name: 'Office', value: 10, color: '#f59e0b' },
];

const SYSTEM_TELEMETRY_DATA = [
  { time: '00:00', requests: 1200, latency: 42, memory: 45 },
  { time: '04:00', requests: 800, latency: 35, memory: 42 },
  { time: '08:00', requests: 3400, latency: 58, memory: 68 },
  { time: '12:00', requests: 4800, latency: 48, memory: 74 },
  { time: '16:00', requests: 5200, latency: 38, memory: 70 },
  { time: '20:00', requests: 2900, latency: 36, memory: 55 },
];

const SALES_CHANNEL_DATA = [
  { channel: 'Direct Sales', volume: 142000 },
  { channel: 'Partner Network', volume: 88000 },
  { channel: 'Online Portal', volume: 54500 },
];

const REVENUE_GROWTH_DATA = [
  { month: 'Q1', mrr: 98000, arr: 1176000 },
  { month: 'Q2', mrr: 108000, arr: 1296000 },
  { month: 'Q3', mrr: 118500, arr: 1422000 },
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

const formatCurrencyTick = (val: number) => {
  if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `$${(val / 1000).toFixed(0)}k`;
  return `$${val}`;
};

export const ExecutiveDashboard: React.FC = () => {
  const { showToast } = useToast();
  const [timeframe, setTimeframe] = useState<'today' | 'week' | 'month' | 'year'>('month');

  const currentData = TIMEFRAME_DATA[timeframe];

  const handleTimeframeChange = (t: 'today' | 'week' | 'month' | 'year') => {
    setTimeframe(t);
    showToast('Timeframe Filter Applied', `Dashboard metrics updated for ${t.toUpperCase()}`);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Executive Overview Dashboard"
        subtitle="Real-time financial performance, sales pipeline metrics, and system telemetry."
        actions={
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            {(['today', 'week', 'month', 'year'] as const).map((t) => (
              <button
                key={t}
                onClick={() => handleTimeframeChange(t)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all ${
                  timeframe === t
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Total Revenue" value={currentData.stats.revenue} change={18.4} icon={DollarSign} />
        <StatCard title="Total Sales Orders" value={currentData.stats.orders} change={12.1} icon={ShoppingBag} />
        <StatCard title="Active Customers" value={currentData.stats.customers} change={8.6} icon={Users} />
        <StatCard title="Profit Margin" value={currentData.stats.margin} change={4.2} icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Revenue vs Expense Trend ({timeframe.toUpperCase()})</h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-brand-50 dark:bg-brand-950 text-brand-600 rounded-lg capitalize">
              Range: {timeframe}
            </span>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentData.revenueSeries} margin={{ top: 10, right: 25, left: 10, bottom: 5 }}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0c93e7" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#0c93e7" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
                <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrencyTick} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff', border: 'none' }} />
                <Area type="monotone" dataKey="revenue" stroke="#0c93e7" strokeWidth={3} fill="url(#revGrad)" name="Revenue ($)" />
                <Area type="monotone" dataKey="expenses" stroke="#f43f5e" strokeWidth={2} fill="url(#expGrad)" name="Expenses ($)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Sales by Category</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={CATEGORY_DATA} innerRadius={45} outerRadius={70} paddingAngle={4} dataKey="value">
                  {CATEGORY_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4 text-xs">
            {CATEGORY_DATA.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}
                </span>
                <span className="font-bold text-slate-900 dark:text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SalesDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Sales Performance Dashboard" subtitle="Track deal velocity, sales channel volume, and representative leaderboard." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Channel Sales" value="$284,500" change={16.2} icon={DollarSign} />
        <StatCard title="Direct Sales Share" value="49.9%" change={4.1} icon={ShoppingBag} />
        <StatCard title="Partner Conversion" value="30.9%" change={2.5} icon={Users} />
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Sales Volume by Channel Distribution</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SALES_CHANNEL_DATA} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="channel" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrencyTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="volume" fill="#0c93e7" name="Volume ($)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export const RevenueDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Revenue Analytics & Growth" subtitle="Monthly Recurring Revenue (MRR), Annual Run Rate (ARR), and subscription expansions." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Monthly Recurring (MRR)" value="$118,500" change={14.8} icon={DollarSign} />
        <StatCard title="Annualized Run Rate (ARR)" value="$1,422,000" change={14.8} icon={TrendingUp} />
        <StatCard title="Net Revenue Retention" value="114.2%" change={3.1} icon={BarChart3} />
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Quarterly MRR vs ARR Growth</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={REVENUE_GROWTH_DATA} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrencyTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Line type="monotone" dataKey="mrr" stroke="#10b981" strokeWidth={3} name="MRR ($)" />
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
    { key: 'avgLatency', header: 'Avg Response Latency', sortable: true },
    { key: 'throughput', header: 'Request Throughput', sortable: true },
    { key: 'errorRate', header: 'Error Rate %' },
    { key: 'status', header: 'Health Status', render: (e) => <Badge variant="success">{e.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="System Telemetry & Endpoint Analytics" subtitle="Real-time request throughput, latency monitoring, and endpoint health statuses." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="API Request Throughput" value="5,200 req/min" change={14.2} icon={Activity} />
        <StatCard title="Avg Server Response Latency" value="38 ms" change={-12.0} trend="up" icon={Clock} />
        <StatCard title="System Uptime Health" value="99.99%" change={0} icon={Server} />
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">24-Hour API Request Throughput vs Latency</h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={SYSTEM_TELEMETRY_DATA} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Area type="monotone" dataKey="requests" stroke="#0c93e7" fill="#0c93e720" strokeWidth={3} name="Requests / Min" />
              <Area type="monotone" dataKey="latency" stroke="#f59e0b" fill="#f59e0b20" strokeWidth={2} name="Latency (ms)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <DataTable columns={columns} data={ENDPOINT_HEALTH_DATA} keyExtractor={(e) => e.endpoint} searchPlaceholder="Search API endpoints..." />
    </div>
  );
};
