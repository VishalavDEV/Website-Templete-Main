import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Zap,
  Radio,
  TrendingUp,
  Activity,
  Server,
  ArrowUpRight,
  Users,
  CheckCircle2,
  Search,
  Filter,
  RefreshCw,
  Play,
  RotateCcw,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SUB_TABS = [
  { name: 'Overview & KPIs', path: '/dashboard/overview', icon: LayoutDashboard },
  { name: 'Performance Metrics', path: '/dashboard/performance', icon: Zap },
  { name: 'Real-Time Analytics', path: '/dashboard/realtime', icon: Radio },
  { name: 'Executive Summary', path: '/dashboard/executive', icon: TrendingUp },
  { name: 'System Health & Ops', path: '/dashboard/health', icon: Activity }
];

export const DashboardSubPages: React.FC<{ subPage: string }> = ({ subPage }) => {
  const { addToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock data sets
  const kpiData = [
    { month: 'Jan', revenue: 42000, activeUsers: 1200, taskVelocity: 140 },
    { month: 'Feb', revenue: 48000, activeUsers: 1350, taskVelocity: 165 },
    { month: 'Mar', revenue: 55000, activeUsers: 1500, taskVelocity: 180 },
    { month: 'Apr', revenue: 61000, activeUsers: 1720, taskVelocity: 210 },
    { month: 'May', revenue: 73000, activeUsers: 1980, taskVelocity: 245 },
    { month: 'Jun', revenue: 89000, activeUsers: 2300, taskVelocity: 290 }
  ];

  const responseTimeData = [
    { time: '00:00', latency: 42, cpu: 28, errorRate: 0.01 },
    { time: '04:00', latency: 38, cpu: 22, errorRate: 0.02 },
    { time: '08:00', latency: 85, cpu: 65, errorRate: 0.05 },
    { time: '12:00', latency: 98, cpu: 82, errorRate: 0.08 },
    { time: '16:00', latency: 76, cpu: 59, errorRate: 0.03 },
    { time: '20:00', latency: 49, cpu: 34, errorRate: 0.01 }
  ];

  const realtimeLogData = [
    { id: 'LOG-8891', service: 'Auth-Service', status: '200 OK', latency: '34ms', timestamp: 'Just now', payload: '/api/v1/auth/login' },
    { id: 'LOG-8890', service: 'Project-API', status: '200 OK', latency: '48ms', timestamp: '2s ago', payload: '/api/v1/projects/active' },
    { id: 'LOG-8889', service: 'Billing-Vault', status: '201 Created', latency: '112ms', timestamp: '5s ago', payload: '/api/v1/invoices/generate' },
    { id: 'LOG-8888', service: 'Task-Dispatcher', status: '500 ERR', latency: '320ms', timestamp: '8s ago', payload: '/api/v1/tasks/sync' },
    { id: 'LOG-8887', service: 'Notification-Worker', status: '200 OK', latency: '15ms', timestamp: '12s ago', payload: '/api/v1/webhooks/slack' }
  ];

  const executiveMilestones = [
    { id: 'EX-1', title: 'Q2 Cloud Infrastructure Migration', owner: 'Sophia Chen', target: '2026-09-30', status: 'On Track', progress: 85 },
    { id: 'EX-2', title: 'SOC2 Type II Security Compliance Audit', owner: 'Alexandra Vance', target: '2026-10-15', status: 'Completed', progress: 100 },
    { id: 'EX-3', title: 'AI Copilot Assistant Launch', owner: 'David Rodriguez', target: '2026-11-01', status: 'In Progress', progress: 60 },
    { id: 'EX-4', title: 'Enterprise Single Sign-On (SAML/Okta)', owner: 'Marcus Sterling', target: '2026-12-05', status: 'Planning', progress: 25 }
  ];

  const [healthNodesState, setHealthNodesState] = useState([
    { id: '1', name: 'US-East Production Cluster (AWS)', status: 'Healthy', load: '42%', uptime: '99.99%', region: 'N. Virginia' },
    { id: '2', name: 'EU-West Backup Database (GCP)', status: 'Healthy', load: '38%', uptime: '99.95%', region: 'Frankfurt' },
    { id: '3', name: 'AP-South API Gateway (Azure)', status: 'Healthy', load: '61%', uptime: '99.90%', region: 'Singapore' },
    { id: '4', name: 'Redis Cache Memory Cluster', status: 'Warning', load: '88%', uptime: '99.85%', region: 'Global CDN' }
  ]);
  const [activeFilterQuery, setActiveFilterQuery] = useState('');

  const handleRebootNode = (nodeId: string, nodeName: string) => {
    setHealthNodesState(prev => prev.map(n => n.id === nodeId ? { ...n, status: 'Rebooting...' } : n));
    addToast(`Rebooting node server: ${nodeName}`, 'info');

    setTimeout(() => {
      setHealthNodesState(prev => prev.map(n => n.id === nodeId ? { ...n, status: 'Healthy (100%)', load: '24%' } : n));
      addToast(`Node ${nodeName} successfully rebooted and online.`, 'success');
    }, 1200);
  };

  const handleRefreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      addToast('Dashboard data refreshed with live stream.', 'success');
    }, 600);
  };

  const filteredLogs = realtimeLogData.filter(log => {
    const query = (activeFilterQuery || searchTerm).toLowerCase();
    const matchesSearch = log.service.toLowerCase().includes(query) || log.payload.toLowerCase().includes(query);
    const matchesStatus = statusFilter === 'ALL' || (statusFilter === 'OK' ? log.status.includes('200') || log.status.includes('201') : log.status.includes('500'));
    return matchesSearch && matchesStatus;
  });


  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-app pb-4">
        <div>
          <h1 className="text-2xl font-bold text-app-primary flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6 text-blue-500" />
            Dashboard Intelligence Center
          </h1>
          <p className="text-xs text-app-muted mt-1">
            Real-time analytics, organizational throughput, system performance, and operational health.
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

      {/* 1. OVERVIEW & KPIS */}
      {(subPage === 'overview' || !subPage) && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-app-primary">Executive KPIs Overview</h2>
            <Button size="sm" variant="outline" icon={<RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />} onClick={handleRefreshData}>
              Refresh Metrics
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-app-muted">Monthly Revenue</span>
                <p className="text-2xl font-bold text-app-primary">$89,400</p>
                <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1 mt-1">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +24.8% vs last month
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                $
              </div>
            </Card>

            <Card className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-app-muted">Active Workspaces</span>
                <p className="text-2xl font-bold text-app-primary">2,300</p>
                <span className="text-xs text-blue-500 font-semibold flex items-center gap-1 mt-1">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +18.2% expansion
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
            </Card>

            <Card className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-app-muted">Task Completion Rate</span>
                <p className="text-2xl font-bold text-app-primary">94.2%</p>
                <span className="text-xs text-purple-500 font-semibold flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> On schedule
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </Card>

            <Card className="p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-app-muted">System SLA Uptime</span>
                <p className="text-2xl font-bold text-app-primary">99.98%</p>
                <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1 mt-1">
                  <Zap className="w-3.5 h-3.5" /> SLA compliant
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Monthly Financial Expansion ($ USD)">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={kpiData}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" name="Revenue ($)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="Sprint Velocity & Task Delivery">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={kpiData}>
                    <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                    <Bar dataKey="taskVelocity" fill="#8b5cf6" name="Tasks Delivered" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="activeUsers" fill="#10b981" name="Active Contributors" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* 2. PERFORMANCE METRICS */}
      {subPage === 'performance' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Server Response Latency vs CPU Load">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={responseTimeData}>
                    <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                    <Line type="monotone" dataKey="latency" stroke="#10b981" strokeWidth={3} name="Latency (ms)" />
                    <Line type="monotone" dataKey="cpu" stroke="#f59e0b" strokeWidth={3} name="CPU Load (%)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="API Microservice Latency Telemetry">
              <div className="space-y-3">
                {[
                  { name: 'Auth Microservice', desc: 'JWT verification & session management', p99: '14ms', status: 'Healthy' },
                  { name: 'Project Database Engine', desc: 'PostgreSQL Read Replicas', p99: '22ms', status: 'Healthy' },
                  { name: 'Search & Indexing Engine', desc: 'ElasticSearch cluster', p99: '45ms', status: 'Healthy' },
                  { name: 'Billing & Payments Worker', desc: 'Stripe webhook listener', p99: '62ms', status: 'Normal' }
                ].map(item => (
                  <div key={item.name} className="p-3 rounded-xl bg-app-secondary/30 border border-app flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-app-primary text-xs">{item.name}</span>
                      <p className="text-[11px] text-app-muted">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">P99: {item.p99}</span>
                      <Button size="sm" variant="ghost" onClick={() => addToast(`Triggered diagnostic ping on ${item.name}`, 'info')}>Ping</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* 3. REAL-TIME ANALYTICS */}
      {subPage === 'realtime' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-1" title="Request Filter Controls">
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-app-muted font-medium mb-1 block">Search Endpoint Route</label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-app-muted absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="e.g. /api/v1/auth"
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="w-full bg-app-hover border border-app rounded-xl pl-9 pr-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-app-muted font-medium mb-1 block">HTTP Status Filter</label>
                  <select
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                    className="w-full bg-app-hover border border-app rounded-xl px-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                  >
                    <option value="ALL">All Responses</option>
                    <option value="OK">200 OK / 201 Created Only</option>
                    <option value="ERR">500 Server Errors Only</option>
                  </select>
                </div>

                <Button variant="primary" className="w-full" onClick={() => { setActiveFilterQuery(searchTerm); addToast('Real-time filter applied to stream.', 'success'); }}>
                  Apply Stream Filter
                </Button>
              </div>
            </Card>

            <Card className="lg:col-span-2" title="Live API Request Ingestion Stream">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Request ID</th>
                      <th className="p-3">Service</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Latency</th>
                      <th className="p-3">Endpoint Route</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-app">
                    {filteredLogs.map(log => (
                      <tr key={log.id} className="hover:bg-app-hover/50 font-mono">
                        <td className="p-3 font-semibold text-blue-400">{log.id}</td>
                        <td className="p-3 text-app-primary">{log.service}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${log.status.includes('500') ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                            {log.status}
                          </span>
                        </td>
                        <td className="p-3 text-app-secondary">{log.latency}</td>
                        <td className="p-3 text-app-primary">{log.payload}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* 4. EXECUTIVE SUMMARY */}
      {subPage === 'executive' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Strategic Portfolio Revenue Allocation">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Enterprise Cloud Migration', value: 40 },
                        { name: 'AI/ML Model Training', value: 25 },
                        { name: 'Mobile App Redesign', value: 20 },
                        { name: 'Security Compliance', value: 15 }
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label
                    >
                      <Cell fill="#3b82f6" />
                      <Cell fill="#10b981" />
                      <Cell fill="#8b5cf6" />
                      <Cell fill="#f59e0b" />
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="Quarterly Strategic Milestones">
              <div className="space-y-3">
                {executiveMilestones.map(m => (
                  <div key={m.id} className="p-3 rounded-xl bg-app-secondary/30 border border-app space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-app-primary">{m.title}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${m.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {m.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-app-muted">
                      <span>Owner: {m.owner}</span>
                      <span>Target: {m.target}</span>
                    </div>
                    <div className="w-full bg-app-hover rounded-full h-1.5 overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: `${m.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* 5. SYSTEM HEALTH & OPS */}
      {subPage === 'health' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Capacity & Memory Radial Distribution">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={15} data={[
                    { name: 'API Availability', value: 99.98, fill: '#10b981' },
                    { name: 'Database Load', value: 74.2, fill: '#3b82f6' },
                    { name: 'Redis Cache Hit', value: 92.5, fill: '#8b5cf6' },
                    { name: 'Storage Capacity', value: 48.0, fill: '#f59e0b' }
                  ]}>
                    <RadialBar background dataKey="value" />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="Global Infrastructure Node Servers">
              <div className="space-y-3">
                {healthNodesState.map(node => (
                  <div key={node.id} className="p-3 rounded-xl bg-app-secondary/30 border border-app flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-app-primary text-xs">{node.name}</span>
                        <span className="text-[10px] text-app-muted font-mono">({node.region})</span>
                      </div>
                      <p className="text-[11px] text-app-muted">CPU Load: {node.load} | Status: <strong className={node.status.includes('Rebooting') ? 'text-amber-400 font-bold' : 'text-emerald-400'}>{node.status}</strong></p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={node.status.includes('Rebooting')}
                      onClick={() => handleRebootNode(node.id, node.name)}
                    >
                      {node.status.includes('Rebooting') ? 'Rebooting...' : 'Reboot Node'}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

          </div>
        </div>
      )}
    </div>
  );
};
