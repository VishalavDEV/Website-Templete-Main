import React, { useState } from 'react';
import { IndianRupee, ShoppingBag, TrendingUp, Award, Filter, Download, Users } from 'lucide-react';
import ReactApexChart from 'react-apexcharts';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

export const SalesDashboard = () => {
  const { theme } = useTheme();
  const { addToast } = useApp();
  const [salesPeriod, setSalesPeriod] = useState('This Quarter');

  // Dynamic Chart Datasets based on selected Period
  const periodData = {
    'This Month': {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      salesData: [48000, 62000, 71000, 89000],
      conversionData: [3.1, 3.8, 4.2, 4.9],
      renewalData: [90, 92, 94, 95],
      revenue: '₹270,000.00'
    },
    'This Quarter': {
      categories: ['Month 1 (Jul)', 'Month 2 (Aug)', 'Month 3 (Sep)'],
      salesData: [185000, 210000, 295000],
      conversionData: [3.5, 4.1, 4.8],
      renewalData: [91, 93, 96],
      revenue: '₹690,000.00'
    },
    'Year 2026': {
      categories: ['Q1', 'Q2', 'Q3', 'Q4'],
      salesData: [124000, 185000, 210000, 295000],
      conversionData: [2.8, 3.5, 4.1, 5.2],
      renewalData: [88, 91, 93, 96],
      revenue: '₹814,000.00'
    }
  };

  const currentPeriod = periodData[salesPeriod] || periodData['Year 2026'];

  const salesBarOptions = {
    chart: { type: 'bar', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    plotOptions: { bar: { borderRadius: 6, columnWidth: '45%' } },
    colors: ['#6366f1'],
    xaxis: {
      categories: currentPeriod.categories,
      labels: { style: { colors: theme === 'dark' ? '#94a3b8' : '#64748b' } }
    },
    yaxis: { labels: { style: { colors: theme === 'dark' ? '#94a3b8' : '#64748b' } } },
    grid: { borderColor: theme === 'dark' ? '#1e293b' : '#e2e8f0' }
  };

  const salesBarSeries = [{ name: 'Sales Revenue (₹)', data: currentPeriod.salesData }];

  const conversionLineOptions = {
    chart: { type: 'line', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#10b981', '#06b6d4'],
    xaxis: {
      categories: currentPeriod.categories,
      labels: { style: { colors: theme === 'dark' ? '#94a3b8' : '#64748b' } }
    },
    yaxis: { labels: { style: { colors: theme === 'dark' ? '#94a3b8' : '#64748b' } } },
    grid: { borderColor: theme === 'dark' ? '#1e293b' : '#e2e8f0' }
  };

  const conversionLineSeries = [
    { name: 'Lead Conversion Rate (%)', data: currentPeriod.conversionData },
    { name: 'Customer Renewal Rate (%)', data: currentPeriod.renewalData }
  ];

  const topProducts = [
    { name: 'TS Smart Admin License (SaaS)', sales: 1420, revenue: '₹142,000.00', growth: '+24%', status: 'In Stock' },
    { name: 'Cloud Enterprise Dedicated SLA', sales: 480, revenue: '₹96,000.00', growth: '+18%', status: 'Active' },
    { name: 'Developer Custom Addons Pack', sales: 890, revenue: '₹44,500.00', growth: '+12%', status: 'In Stock' },
    { name: '24/7 Priority Support Package', sales: 320, revenue: '₹32,000.00', growth: '+8%', status: 'Active' },
    { name: 'MySQL High Availability Replication', sales: 210, revenue: '₹29,400.00', growth: '+15%', status: 'In Stock' },
    { name: 'Spring Boot REST Security Audit', sales: 150, revenue: '₹22,500.00', growth: '+10%', status: 'Active' }
  ];

  const salesReps = [
    { name: 'Elena Rostova', deals: 42, revenue: '₹240,000.00', commission: '8%', rank: '1st' },
    { name: 'Marcus Chen', deals: 36, revenue: '₹195,000.00', commission: '7%', rank: '2nd' },
    { name: 'Sarah Jenkins', deals: 28, revenue: '₹142,000.00', commission: '6%', rank: '3rd' },
    { name: 'David Kim', deals: 22, revenue: '₹98,000.00', commission: '5%', rank: '4th' }
  ];

  const handleExportCSV = () => {
    const csvRows = [
      ['Product Name', 'Units Sold', 'Revenue', 'Growth'],
      ...topProducts.map(p => [p.name, p.sales, p.revenue, p.growth])
    ];
    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `sales_data_report_${salesPeriod.toLowerCase().replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addToast(`Exported Sales CSV report for ${salesPeriod}`, 'success');
  };

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Sales Analytics Dashboard</h1>
          <p>Track revenue targets, top products, sales leaderboards, and conversion graphs.</p>
        </div>
        <div className="page-header-actions">
          <select 
            value={salesPeriod} 
            onChange={(e) => {
              setSalesPeriod(e.target.value);
              addToast(`Updated graph filter to ${e.target.value}`, 'info');
            }}
            style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
          >
            <option>This Month</option>
            <option>This Quarter</option>
            <option>Year 2026</option>
          </select>
          <button className="btn btn-primary btn-sm" onClick={handleExportCSV}>
            <Download size={16} /> Export Sales Data
          </button>
        </div>
      </div>

      {/* Sales Stats Grid */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-2 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Period Revenue</span>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>{currentPeriod.revenue}</h2>
          <span className="badge badge-success" style={{ marginTop: 8 }}>+22.4% vs previous</span>
        </div>
        <div className="col-2 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Avg Deal Size</span>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>₹4,250.00</h2>
          <span className="badge badge-primary" style={{ marginTop: 8 }}>+5.2% avg</span>
        </div>
        <div className="col-2 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Target Attainment</span>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>94.8%</h2>
          <span className="badge badge-info" style={{ marginTop: 8 }}>On track Q4</span>
        </div>
        <div className="col-2 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Closed Deals</span>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>312 Deals</h2>
          <span className="badge badge-success" style={{ marginTop: 8 }}>+34 deals</span>
        </div>
        <div className="col-2 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>MRR SaaS</span>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>₹42,500.00</h2>
          <span className="badge badge-success" style={{ marginTop: 8 }}>+14% MRR</span>
        </div>
        <div className="col-2 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Win Rate</span>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>38.5%</h2>
          <span className="badge badge-primary" style={{ marginTop: 8 }}>+3.1% win</span>
        </div>
      </div>

      {/* Analytics Graphs Row */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Sales Growth Graph ({salesPeriod})</h3>
          <ReactApexChart options={salesBarOptions} series={salesBarSeries} type="bar" height={300} />
        </div>

        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Lead & Renewal Conversion Graph</h3>
          <ReactApexChart options={conversionLineOptions} series={conversionLineSeries} type="line" height={300} />
        </div>
      </div>

      {/* Top Sales Representatives & Top Products Grid */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-5 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Top Sales Representatives</h3>
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Rep Name</th>
                  <th>Deals</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {salesReps.map((rep, idx) => (
                  <tr key={idx}>
                    <td><span className="badge badge-primary">{rep.rank}</span></td>
                    <td style={{ fontWeight: 700 }}>{rep.name}</td>
                    <td>{rep.deals} closed</td>
                    <td style={{ fontWeight: 700, color: 'var(--brand-success)' }}>{rep.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-7 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Top Revenue Generating Products</h3>
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Units Sold</th>
                  <th>Revenue</th>
                  <th>Growth</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((p, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 700 }}>{p.name}</td>
                    <td>{p.sales} units</td>
                    <td style={{ fontWeight: 700, color: 'var(--brand-success)' }}>{p.revenue}</td>
                    <td><span className="badge badge-success">{p.growth}</span></td>
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


