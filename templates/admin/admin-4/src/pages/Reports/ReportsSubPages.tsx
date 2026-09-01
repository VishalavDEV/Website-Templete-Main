import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { useApp } from '../../context/AppContext';
import {
  BarChart3,
  TrendingUp,
  LineChart as LineIcon,
  Users,
  Bug,
  Sliders,
  Printer,
  Download,
  Play,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SUB_TABS = [
  { name: 'Executive Summary', path: '/reports/executive', icon: TrendingUp },
  { name: 'Financial Reports', path: '/reports/financial', icon: LineIcon },
  { name: 'Resource Productivity', path: '/reports/productivity', icon: Users },
  { name: 'Quality & Bug Radar', path: '/reports/quality', icon: Bug },
  { name: 'Custom Query Builder', path: '/reports/custom', icon: Sliders }
];

export const ReportsSubPages: React.FC<{ subPage: string }> = ({ subPage }) => {
  const { addToast } = useApp();
  const [selectedMetric, setSelectedMetric] = useState('velocity');
  const [selectedChartType, setSelectedChartType] = useState('bar');
  const [isExecutingQuery, setIsExecutingQuery] = useState(false);

  const growthData = [
    { month: 'Oct', velocity: 78, qualityScore: 94, revenue: 120000, bugs: 14 },
    { month: 'Nov', velocity: 85, qualityScore: 96, revenue: 140000, bugs: 9 },
    { month: 'Dec', velocity: 92, qualityScore: 91, revenue: 160000, bugs: 12 },
    { month: 'Jan', velocity: 98, qualityScore: 97, revenue: 180000, bugs: 6 },
    { month: 'Feb', velocity: 105, qualityScore: 98, revenue: 195000, bugs: 3 }
  ];

  const bugRadar = [
    { category: 'UI/UX Bugs', count: 12 },
    { category: 'API Latency', count: 5 },
    { category: 'Security Flaws', count: 1 },
    { category: 'Database Leaks', count: 0 },
    { category: 'Third-party SLA', count: 3 }
  ];

  const handleExportCSV = () => {
    const csvRows = [
      ['Month', 'Sprint Velocity', 'Quality Score %', 'Revenue ($)', 'Bugs Reported'],
      ...growthData.map(g => [g.month, g.velocity, g.qualityScore, g.revenue, g.bugs])
    ];
    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `corevista_bi_analytics_report_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast('Report data exported to CSV file.', 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExecuteBIQuery = () => {
    setIsExecutingQuery(true);
    setTimeout(() => {
      setIsExecutingQuery(false);
      addToast(`BI Query executed successfully for metric: "${selectedMetric.toUpperCase()}" (${selectedChartType} chart format).`, 'success');
    }, 400);
  };


  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-app pb-4">
        <div>
          <h1 className="text-2xl font-bold text-app-primary flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-500" />
            Business Intelligence & Executive Analytics
          </h1>
          <p className="text-xs text-app-muted mt-1">
            Enterprise reports, quality defect analysis, team productivity metrics, and custom BI queries.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" icon={<Printer className="w-4 h-4" />} onClick={handlePrint}>
            Print
          </Button>
          <Button variant="primary" size="sm" icon={<Download className="w-4 h-4" />} onClick={handleExportCSV}>
            Export CSV
          </Button>
        </div>
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

      {/* SUBPAGE 1: EXECUTIVE SUMMARY */}
      {(subPage === 'executive' || !subPage) && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <span className="text-xs text-app-muted font-medium">Portfolio Growth Index</span>
              <p className="text-3xl font-extrabold text-blue-400 mt-1">+34.2%</p>
              <span className="text-[11px] text-emerald-500 font-semibold mt-1 block">Year-over-Year Expansion</span>
            </Card>

            <Card className="p-4">
              <span className="text-xs text-app-muted font-medium">On-Time Delivery Rate</span>
              <p className="text-3xl font-extrabold text-emerald-400 mt-1">96.5%</p>
              <span className="text-[11px] text-emerald-500 font-semibold mt-1 block">Exceeds Target Goal (95%)</span>
            </Card>

            <Card className="p-4">
              <span className="text-xs text-app-muted font-medium">Total Client Accounts</span>
              <p className="text-3xl font-extrabold text-purple-400 mt-1">46 Accounts</p>
              <span className="text-[11px] text-purple-400 font-semibold mt-1 block">100% SLA Compliance</span>
            </Card>
          </div>

          <Card title="Executive Growth & Revenue Trajectory">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                  <YAxis stroke="var(--text-muted)" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} name="Total Billed ($)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      )}

      {/* SUBPAGE 2: FINANCIAL REPORTS */}
      {subPage === 'financial' && (
        <Card title="Quarterly Financial Breakdown & Audited Ledger">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData}>
                <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                <YAxis stroke="var(--text-muted)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                <Bar dataKey="revenue" fill="#10b981" name="Gross Revenue ($)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {/* SUBPAGE 3: RESOURCE PRODUCTIVITY */}
      {subPage === 'productivity' && (
        <Card title="Resource Output & Sprint Productivity Report">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                <YAxis stroke="var(--text-muted)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                <Line type="monotone" dataKey="velocity" stroke="#8b5cf6" strokeWidth={3} name="Velocity Index" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {/* SUBPAGE 4: QUALITY & BUG RADAR */}
      {subPage === 'quality' && (
        <Card title="Quality Assurance Bug Severity Radar">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={bugRadar}>
                <PolarGrid stroke="var(--border-color)" />
                <PolarAngleAxis dataKey="category" stroke="var(--text-primary)" fontSize={12} />
                <PolarRadiusAxis stroke="var(--text-muted)" />
                <Radar name="Defects Reported" dataKey="count" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {/* SUBPAGE 5: INTERACTIVE BI QUERY BUILDER */}
      {subPage === 'custom' && (
        <Card title="Interactive Custom BI Query Builder">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-semibold text-app-muted mb-1 block">Target Metric</label>
                <select
                  value={selectedMetric}
                  onChange={e => setSelectedMetric(e.target.value)}
                  className="w-full bg-app-hover border border-app rounded-xl px-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                >
                  <option value="velocity">Sprint Velocity</option>
                  <option value="revenue">Gross Revenue ($)</option>
                  <option value="qualityScore">Quality Score (%)</option>
                  <option value="bugs">Defects Count</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-app-muted mb-1 block">Visualization Type</label>
                <select
                  value={selectedChartType}
                  onChange={e => setSelectedChartType(e.target.value)}
                  className="w-full bg-app-hover border border-app rounded-xl px-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                >
                  <option value="bar">Bar Chart</option>
                  <option value="line">Line Chart</option>
                  <option value="area">Area Chart</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  className="w-full"
                  disabled={isExecutingQuery}
                  icon={<Play className="w-3.5 h-3.5" />}
                  onClick={handleExecuteBIQuery}
                >
                  {isExecutingQuery ? 'Executing Query...' : 'Execute BI Query'}
                </Button>
              </div>

            </div>

            <div className="h-72 w-full pt-4 border-t border-app">
              <ResponsiveContainer width="100%" height="100%">
                {selectedChartType === 'bar' ? (
                  <BarChart data={growthData}>
                    <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Bar dataKey={selectedMetric} fill="#3b82f6" name={selectedMetric.toUpperCase()} radius={[4, 4, 0, 0]} />
                  </BarChart>
                ) : selectedChartType === 'line' ? (
                  <LineChart data={growthData}>
                    <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Line type="monotone" dataKey={selectedMetric} stroke="#10b981" strokeWidth={3} name={selectedMetric.toUpperCase()} />
                  </LineChart>
                ) : (
                  <AreaChart data={growthData}>
                    <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Area type="monotone" dataKey={selectedMetric} stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} name={selectedMetric.toUpperCase()} />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

