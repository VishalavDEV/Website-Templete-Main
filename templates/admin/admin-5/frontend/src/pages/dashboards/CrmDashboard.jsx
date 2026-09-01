import React, { useState } from 'react';
import { Users, Target, PhoneCall, Calendar, CheckCircle, Download } from 'lucide-react';
import ReactApexChart from 'react-apexcharts';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

export const CrmDashboard = () => {
  const { theme } = useTheme();
  const { addToast, navigateTo } = useApp();

  const pipelineChartOptions = {
    chart: { type: 'bar', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    plotOptions: { bar: { horizontal: true, borderRadius: 6 } },
    colors: ['#6366f1'],
    xaxis: { categories: ['Lead Qualified', 'Meeting Scheduled', 'Proposal Sent', 'Negotiation', 'Closed Won'] }
  };

  const pipelineChartSeries = [{ name: 'Pipeline Value (₹)', data: [320000, 240000, 180000, 140000, 290000] }];

  const conversionFunnelOptions = {
    chart: { type: 'area', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#10b981'],
    xaxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] }
  };

  const conversionFunnelSeries = [{ name: 'Leads Converted', data: [12, 19, 24, 38] }];

  const stages = [
    { name: 'Lead Qualified', count: 48, value: '₹320,000', color: 'var(--brand-info)' },
    { name: 'Meeting Scheduled', count: 24, value: '₹240,000', color: 'var(--brand-primary)' },
    { name: 'Proposal Sent', count: 14, value: '₹180,000', color: 'var(--brand-warning)' },
    { name: 'Negotiation', count: 8, value: '₹140,000', color: 'var(--brand-danger)' },
    { name: 'Closed Won', count: 19, value: '₹290,000', color: 'var(--brand-success)' }
  ];

  const highValueDeals = [
    { name: 'Enterprise Cloud Portal Migration', customer: 'TechCorp Inc.', stage: 'Proposal Sent', value: '₹120,000.00', probability: '75%', owner: 'Elena Rostova' },
    { name: 'SaaS Platform Unlimited License', customer: 'Starlight Media', stage: 'Negotiation', value: '₹85,000.00', probability: '90%', owner: 'Marcus Chen' },
    { name: 'Global Infrastructure Dedicated SLA', customer: 'Acme Logistics', stage: 'Meeting Scheduled', value: '₹65,000.00', probability: '50%', owner: 'Sarah Jenkins' },
    { name: 'Spring Boot REST API Hardening', customer: 'Quantum Systems', stage: 'Lead Qualified', value: '₹45,000.00', probability: '30%', owner: 'David Kim' }
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>CRM & Deal Pipeline Analytics</h1>
          <p>Track deal stage values, conversion graphs, high-value opportunities, and sales team activities.</p>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-primary btn-sm" onClick={() => addToast('Exporting CRM graphs...', 'success')}>
            <Download size={16} /> Export CRM Report
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        {stages.map((stage, idx) => (
          <div key={idx} className="glass-card" style={{ flex: '1 1 180px', minWidth: 160, borderTop: `4px solid ${stage.color}` }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>{stage.name}</span>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>{stage.count} Leads</h2>
            <span style={{ fontSize: 13, fontWeight: 700, color: stage.color }}>{stage.value}</span>
          </div>
        ))}
      </div>

      {/* Analytics Graphs Row */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Deal Pipeline Stage Values Graph</h3>
          <ReactApexChart options={pipelineChartOptions} series={pipelineChartSeries} type="bar" height={280} />
        </div>

        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Monthly Lead Conversion Trend Graph</h3>
          <ReactApexChart options={conversionFunnelOptions} series={conversionFunnelSeries} type="area" height={280} />
        </div>
      </div>

      {/* High-Value Opportunities Table */}
      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700 }}>High-Value Sales Opportunities</h3>
          <button className="btn btn-primary btn-sm" onClick={() => navigateTo('apps', 'contacts')}>
            View All Contacts
          </button>
        </div>
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Opportunity Deal Name</th>
                <th>Customer / Account</th>
                <th>Stage</th>
                <th>Deal Value</th>
                <th>Win Probability</th>
                <th>Deal Owner</th>
              </tr>
            </thead>
            <tbody>
              {highValueDeals.map((d, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 700 }}>{d.name}</td>
                  <td>{d.customer}</td>
                  <td><span className="badge badge-warning">{d.stage}</span></td>
                  <td style={{ fontWeight: 700, color: 'var(--brand-success)' }}>{d.value}</td>
                  <td><span className="badge badge-primary">{d.probability}</span></td>
                  <td style={{ color: 'var(--text-secondary)' }}>{d.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

