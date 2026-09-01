import React, { useState } from 'react';
import { Eye, Users, Globe, Smartphone, Monitor, ArrowUpRight, Download, Flag } from 'lucide-react';
import ReactApexChart from 'react-apexcharts';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

export const AnalyticsDashboard = () => {
  const { theme } = useTheme();
  const { addToast } = useApp();

  const trafficChartOptions = {
    chart: { type: 'line', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#3b82f6', '#10b981', '#f59e0b'],
    xaxis: {
      categories: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
      labels: { style: { colors: theme === 'dark' ? '#94a3b8' : '#64748b' } }
    },
    yaxis: { labels: { style: { colors: theme === 'dark' ? '#94a3b8' : '#64748b' } } },
    grid: { borderColor: theme === 'dark' ? '#1e293b' : '#e2e8f0' }
  };

  const trafficChartSeries = [
    { name: 'Organic Search', data: [1200, 800, 3400, 6800, 8200, 5400, 2100] },
    { name: 'Direct Traffic', data: [800, 500, 2100, 4200, 5100, 3900, 1500] },
    { name: 'Referral & Social', data: [400, 200, 1100, 2300, 3100, 2100, 900] }
  ];

  const devicePieOptions = {
    chart: { type: 'donut', background: 'transparent' },
    theme: { mode: theme },
    colors: ['#6366f1', '#06b6d4', '#f59e0b'],
    labels: ['Desktop (62%)', 'Mobile (31%)', 'Tablet (7%)'],
    legend: { position: 'bottom', labels: { colors: theme === 'dark' ? '#cbd5e1' : '#475569' } }
  };

  const devicePieSeries = [62, 31, 7];

  const trafficSources = [
    { source: 'Google Organic Search', visitors: '248,910', bounce: '24.2%', avgTime: '4m 12s', conversion: '4.2%' },
    { source: 'Direct URL Entry', visitors: '142,500', bounce: '18.5%', avgTime: '5m 04s', conversion: '5.1%' },
    { source: 'LinkedIn B2B Campaign', visitors: '58,200', bounce: '32.1%', avgTime: '3m 45s', conversion: '3.8%' },
    { source: 'GitHub Referral Links', visitors: '33,300', bounce: '21.0%', avgTime: '6m 15s', conversion: '4.9%' }
  ];

  const topCountries = [
    { country: 'United States', code: 'US', sessions: '198,420', share: '41.1%' },
    { country: 'United Kingdom', code: 'UK', sessions: '72,150', share: '14.9%' },
    { country: 'Germany', code: 'DE', sessions: '58,900', share: '12.2%' },
    { country: 'India', code: 'IN', sessions: '48,200', share: '10.0%' },
    { country: 'Japan', code: 'JP', sessions: '36,400', share: '7.5%' }
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Web Analytics Dashboard</h1>
          <p>Real-time traffic volume graphs, geographic demographics, and source attribution.</p>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-primary btn-sm" onClick={() => addToast('Exporting analytics graphs report...', 'success')}>
            <Download size={16} /> Export Graphs
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Unique Sessions</span>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>482,910</h2>
          <span className="badge badge-success" style={{ marginTop: 8 }}>+18.4% this week</span>
        </div>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Avg Session Duration</span>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>4m 32s</h2>
          <span className="badge badge-primary" style={{ marginTop: 8 }}>+42s retention</span>
        </div>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Bounce Rate</span>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>28.4%</h2>
          <span className="badge badge-success" style={{ marginTop: 8 }}>-3.2% improved</span>
        </div>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Active Online Now</span>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginTop: 4, color: 'var(--brand-success)' }}>1,482 Users</h2>
          <span className="badge badge-success" style={{ marginTop: 8 }}>Live Stream</span>
        </div>
      </div>

      {/* Analytics Graphs Row */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-8 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Hourly Traffic Volume Graph</h3>
          <ReactApexChart options={trafficChartOptions} series={trafficChartSeries} type="line" height={300} />
        </div>

        <div className="col-4 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Device Breakdown Graph</h3>
          <ReactApexChart options={devicePieOptions} series={devicePieSeries} type="donut" height={300} />
        </div>
      </div>

      {/* Traffic Sources & Geographic Countries Grid */}
      <div className="grid-12">
        <div className="col-7 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Traffic Attribution Sources</h3>
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Traffic Channel</th>
                  <th>Visitors</th>
                  <th>Bounce Rate</th>
                  <th>Avg Duration</th>
                  <th>Conversion</th>
                </tr>
              </thead>
              <tbody>
                {trafficSources.map((t, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 700 }}>{t.source}</td>
                    <td>{t.visitors}</td>
                    <td>{t.bounce}</td>
                    <td>{t.avgTime}</td>
                    <td><span className="badge badge-success">{t.conversion}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-5 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Top Visitor Geographic Demographics</h3>
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Sessions</th>
                  <th>Share</th>
                </tr>
              </thead>
              <tbody>
                {topCountries.map((c, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 700 }}>{c.country} ({c.code})</td>
                    <td>{c.sessions}</td>
                    <td><span className="badge badge-primary">{c.share}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

