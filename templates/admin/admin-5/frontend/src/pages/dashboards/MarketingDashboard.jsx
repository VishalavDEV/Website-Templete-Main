import React from 'react';
import { Target, TrendingUp, Mail, Share2, IndianRupee, Download } from 'lucide-react';
import ReactApexChart from 'react-apexcharts';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

export const MarketingDashboard = () => {
  const { theme } = useTheme();
  const { addToast } = useApp();

  const radarOptions = {
    chart: { type: 'radar', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    colors: ['#6366f1', '#06b6d4'],
    labels: ['Email Marketing', 'Google Ads', 'LinkedIn B2B', 'SEO Organic', 'Social Media', 'Events'],
    yaxis: { show: false }
  };

  const radarSeries = [
    { name: 'Campaign Budget (₹)', data: [80, 90, 70, 60, 50, 40] },
    { name: 'ROI Performance (%)', data: [95, 85, 90, 80, 65, 55] }
  ];

  const adSpendBarOptions = {
    chart: { type: 'bar', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    colors: ['#f59e0b', '#10b981'],
    xaxis: { categories: ['Google Ads', 'LinkedIn', 'Twitter/X', 'Meta B2B'] }
  };

  const adSpendBarSeries = [
    { name: 'Ad Spend (₹)', data: [12500, 8400, 3200, 2100] },
    { name: 'Revenue Generated (₹)', data: [42000, 28000, 9500, 6800] }
  ];

  const campaigns = [
    { name: 'Q3 Enterprise B2B SaaS Growth', channel: 'LinkedIn & Google', budget: '₹12,500.00', leads: 480, roi: '+340%', status: 'Active' },
    { name: 'Developer API Integration Campaign', channel: 'GitHub & Twitter', budget: '₹8,400.00', leads: 320, roi: '+280%', status: 'Active' },
    { name: 'Spring Boot REST Security Webinar', channel: 'Email Newsletter', budget: '₹3,200.00', leads: 210, roi: '+410%', status: 'Completed' }
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Marketing & Campaign Analytics</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Track campaign ROI graphs, ad spend vs revenue, CPL, and click-through rates.</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => addToast('Exporting campaign graphs...', 'success')}>
          <Download size={16} /> Export Graphs
        </button>
      </div>

      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Overall Campaign ROI</span>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>340%</h2>
          <span className="badge badge-success" style={{ marginTop: 8 }}>+45% YoY</span>
        </div>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Cost Per Lead (CPL)</span>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>₹18.40</h2>
          <span className="badge badge-success" style={{ marginTop: 8 }}>-₹2.10 reduced</span>
        </div>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Email Click Rate</span>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>6.85%</h2>
          <span className="badge badge-primary" style={{ marginTop: 8 }}>Industry avg 3.2%</span>
        </div>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Ad Spend</span>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>₹24,500.00</h2>
          <span className="badge badge-info" style={{ marginTop: 8 }}>This Month</span>
        </div>
      </div>

      {/* Analytics Graphs Row */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Channel ROI & Budget Radar Graph</h3>
          <ReactApexChart options={radarOptions} series={radarSeries} type="radar" height={300} />
        </div>

        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Ad Spend vs Revenue Generated Graph</h3>
          <ReactApexChart options={adSpendBarOptions} series={adSpendBarSeries} type="bar" height={300} />
        </div>
      </div>

      {/* Active Marketing Campaigns Table */}
      <div className="glass-card">
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Active Marketing Campaigns Performance</h3>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Channel</th>
              <th>Budget Spent</th>
              <th>Leads Generated</th>
              <th>ROI Performance</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, idx) => (
              <tr key={idx}>
                <td style={{ fontWeight: 700 }}>{c.name}</td>
                <td>{c.channel}</td>
                <td>{c.budget}</td>
                <td>{c.leads} leads</td>
                <td style={{ fontWeight: 700, color: 'var(--brand-success)' }}>{c.roi}</td>
                <td><span className="badge badge-success">{c.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
