import React, { useState, useEffect } from 'react';
import { IndianRupee, Users, ShoppingBag, ArrowUpRight, Eye, ChevronRight, Download, Activity, Globe, ShieldCheck } from 'lucide-react';
import ReactApexChart from 'react-apexcharts';
import { fetchOverviewStats } from '../../services/api';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

export const HomeOverview = () => {
  const { theme } = useTheme();
  const { navigateTo, addToast } = useApp();
  const [period, setPeriod] = useState('Monthly');
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchOverviewStats().then(data => setStats(data));
  }, []);

  const chartOptions = {
    chart: { type: 'area', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#6366f1', '#10b981'],
    fill: {
      type: 'gradient',
      gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05 }
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: period === 'Monthly' 
        ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: { style: { colors: theme === 'dark' ? '#94a3b8' : '#64748b' } }
    },
    yaxis: { labels: { style: { colors: theme === 'dark' ? '#94a3b8' : '#64748b' } } },
    grid: { borderColor: theme === 'dark' ? '#1e293b' : '#e2e8f0' }
  };

  const chartSeries = period === 'Monthly' ? [
    { name: 'Revenue 2026 (₹)', data: [45000, 52000, 49000, 62000, 69000, 84000, 95000, 128450, 110000, 135000, 140000, 160000] },
    { name: 'Target Revenue (₹)', data: [40000, 45000, 50000, 55000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000] }
  ] : [
    { name: 'Revenue (₹)', data: [12000, 15400, 18200, 14100, 22000, 26500, 20250] },
    { name: 'Target (₹)', data: [10000, 12000, 15000, 15000, 18000, 20000, 20000] }
  ];

  const donutOptions = {
    chart: { type: 'donut', background: 'transparent' },
    theme: { mode: theme },
    colors: ['#6366f1', '#06b6d4', '#f59e0b', '#10b981'],
    labels: ['Enterprise SaaS (45%)', 'Cloud Hosting (25%)', 'Developer APIs (18%)', 'Support SLAs (12%)'],
    legend: { position: 'bottom', labels: { colors: theme === 'dark' ? '#cbd5e1' : '#475569' } }
  };

  const donutSeries = [45, 25, 18, 12];

  const recentOrders = [
    { id: '#ORD-8820', customer: 'Robert Vance', company: 'TechCorp Inc.', product: 'SmartAdmin Pro Enterprise License', amount: '₹1,250.00', status: 'Completed', date: 'Today, 14:32' },
    { id: '#ORD-8819', customer: 'Sarah Jenkins', company: 'DesignCorp', product: 'Cloud Dedicated Cluster Node', amount: '₹3,800.00', status: 'Pending', date: 'Today, 11:15' },
    { id: '#ORD-8818', customer: 'Clara Oswald', company: 'Starlight Media', product: 'Annual Support SLA Tier-1', amount: '₹450.00', status: 'Completed', date: 'Yesterday' },
    { id: '#ORD-8817', customer: 'Marcus Chen', company: 'Acme Logistics', product: 'Custom Developer API Addon', amount: '₹890.00', status: 'Cancelled', date: '18 Aug 2026' },
    { id: '#ORD-8816', customer: 'Elena Rostova', company: 'Global Solutions', product: 'MySQL DB Replication Package', amount: '₹2,100.00', status: 'Completed', date: '17 Aug 2026' },
    { id: '#ORD-8815', customer: 'David Kim', company: 'Finance Flow', product: 'Spring Boot REST Security Audit', amount: '₹1,650.00', status: 'Completed', date: '16 Aug 2026' }
  ];

  const regionalBreakdown = [
    { region: 'North America', revenue: '₹64,225.00', share: '50%', color: 'var(--brand-primary)' },
    { region: 'Europe (EMEA)', revenue: '₹38,535.00', share: '30%', color: 'var(--brand-secondary)' },
    { region: 'Asia Pacific (APAC)', revenue: '₹18,410.00', share: '14%', color: 'var(--brand-warning)' },
    { region: 'Latin America (LATAM)', revenue: '₹7,280.00', share: '6%', color: 'var(--brand-success)' }
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Executive Home & Overview Dashboard</h1>
          <p>Real-time summary analytics, system performance, and revenue graphs.</p>
        </div>
        <div className="page-header-actions">
          <div className="period-toggle" style={{ background: 'var(--bg-subtle)', padding: 4, borderRadius: 'var(--radius-sm)', display: 'flex' }}>
            <button 
              className={`btn btn-sm ${period === 'Weekly' ? 'btn-primary' : ''}`}
              onClick={() => { setPeriod('Weekly'); addToast('Switched graph view to Weekly analytics', 'info'); }}
              style={{ border: 'none' }}
            >
              Weekly
            </button>
            <button 
              className={`btn btn-sm ${period === 'Monthly' ? 'btn-primary' : ''}`}
              onClick={() => { setPeriod('Monthly'); addToast('Switched graph view to Monthly analytics', 'info'); }}
              style={{ border: 'none' }}
            >
              Monthly
            </button>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={() => navigateTo('dashboards', 'sales')}>
            View Sales <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-3 glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: 13, fontWeight: 600 }}>Total Gross Revenue</span>
            <div style={{ padding: 8, borderRadius: 8, background: 'var(--brand-primary-light)', color: 'var(--brand-primary)' }}>
              <IndianRupee size={20} />
            </div>
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 800 }}>{stats?.totalRevenue || '₹128,450.00'}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 13, color: 'var(--brand-success)' }}>
            <ArrowUpRight size={16} />
            <span>{stats?.revenueGrowth || '+14.2%'} vs last period</span>
          </div>
        </div>

        <div className="col-3 glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: 13, fontWeight: 600 }}>Active Platform Users</span>
            <div style={{ padding: 8, borderRadius: 8, background: 'var(--brand-success-light)', color: 'var(--brand-success)' }}>
              <Users size={20} />
            </div>
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 800 }}>{stats?.activeUsers?.toLocaleString() || '14,820'}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 13, color: 'var(--brand-success)' }}>
            <ArrowUpRight size={16} />
            <span>{stats?.userGrowth || '+8.5%'} active monthly</span>
          </div>
        </div>

        <div className="col-3 glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: 13, fontWeight: 600 }}>Total Completed Orders</span>
            <div style={{ padding: 8, borderRadius: 8, background: 'var(--brand-warning-light)', color: 'var(--brand-warning)' }}>
              <ShoppingBag size={20} />
            </div>
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 800 }}>{stats?.totalOrders?.toLocaleString() || '3,420'}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 13, color: 'var(--brand-success)' }}>
            <ArrowUpRight size={16} />
            <span>{stats?.orderGrowth || '+12.1%'} conversion rate</span>
          </div>
        </div>

        <div className="col-3 glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: 13, fontWeight: 600 }}>System Health & Uptime</span>
            <div style={{ padding: 8, borderRadius: 8, background: 'var(--brand-info-light)', color: 'var(--brand-info)' }}>
              <ShieldCheck size={20} />
            </div>
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: 'var(--brand-success)' }}>99.98%</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 13, color: 'var(--brand-success)' }}>
            <span>All nodes operational</span>
          </div>
        </div>
      </div>

      {/* Analytics Graphs Row */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-8 glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>Revenue Growth & Target Baseline Graph</h3>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Comparing actual revenue performance vs target budget</p>
            </div>
            <button className="btn btn-secondary btn-sm" onClick={() => addToast('Graph data exported', 'success')}>
              <Download size={14} /> Export Graph
            </button>
          </div>
          <ReactApexChart options={chartOptions} series={chartSeries} type="area" height={320} />
        </div>

        <div className="col-4 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Revenue Channel Distribution</h3>
          <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={300} />
        </div>
      </div>

      {/* Regional Revenue Breakdown & Live Activity Grid */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Regional Revenue Share</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {regionalBreakdown.map((r, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                  <span>{r.region}</span>
                  <span>{r.revenue} ({r.share})</span>
                </div>
                <div style={{ background: 'var(--bg-subtle)', height: 8, borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: r.share, height: '100%', background: r.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-6 glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700 }}>Live Activity Feed</h3>
            <button className="btn btn-secondary btn-sm" onClick={() => navigateTo('utilities', 'timeline')}>
              View Audit Log
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--brand-success)', marginTop: 6 }} />
              <div>
                <p style={{ fontSize: 13, fontWeight: 600 }}>User Alex Morgan assigned Administrator role to Marcus Chen</p>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>10 minutes ago</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--brand-primary)', marginTop: 6 }} />
              <div>
                <p style={{ fontSize: 13, fontWeight: 600 }}>Spring Boot REST API hotfix v2.4 deployed to Production</p>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>45 minutes ago</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--brand-warning)', marginTop: 6 }} />
              <div>
                <p style={{ fontSize: 13, fontWeight: 600 }}>MySQL Database snapshot backup-20260820 completed</p>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700 }}>Recent Enterprise Orders</h3>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Click order ID or customer name for detailed profile view.</p>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={() => navigateTo('dashboards', 'sales')}>
            View All Orders
          </button>
        </div>

        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Company</th>
                <th>Product / Service</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((ord) => (
                <tr key={ord.id}>
                  <td>
                    <button 
                      style={{ color: 'var(--brand-primary)', fontWeight: 700 }}
                      onClick={() => {
                        addToast(`Opened order ${ord.id} details`, 'info');
                        navigateTo('utilities', 'invoice');
                      }}
                    >
                      {ord.id}
                    </button>
                  </td>
                  <td style={{ fontWeight: 600 }}>{ord.customer}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{ord.company}</td>
                  <td>{ord.product}</td>
                  <td style={{ fontWeight: 700 }}>{ord.amount}</td>
                  <td>
                    <span className={`badge ${
                      ord.status === 'Completed' ? 'badge-success' : 
                      ord.status === 'Pending' ? 'badge-warning' : 'badge-danger'
                    }`}>
                      {ord.status}
                    </span>
                  </td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 12 }}>{ord.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
