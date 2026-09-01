import React, { useState } from 'react';
import { IndianRupee, CreditCard, ArrowUpRight, ArrowDownRight, FileText, Download } from 'lucide-react';
import ReactApexChart from 'react-apexcharts';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

export const FinanceDashboard = () => {
  const { theme } = useTheme();
  const { addToast, navigateTo } = useApp();

  const financeBarOptions = {
    chart: { type: 'bar', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    colors: ['#10b981', '#ef4444'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      labels: { style: { colors: theme === 'dark' ? '#94a3b8' : '#64748b' } }
    },
    yaxis: { labels: { style: { colors: theme === 'dark' ? '#94a3b8' : '#64748b' } } },
    grid: { borderColor: theme === 'dark' ? '#1e293b' : '#e2e8f0' }
  };

  const financeBarSeries = [
    { name: 'Income (₹)', data: [65000, 72000, 89000, 94000, 110000, 125000, 138000, 152000] },
    { name: 'Expenses (₹)', data: [32000, 38000, 41000, 45000, 48000, 52000, 56000, 61000] }
  ];

  const cashFlowAreaOptions = {
    chart: { type: 'area', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#06b6d4'],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] }
  };

  const cashFlowAreaSeries = [
    { name: 'Net Liquid Reserves (₹)', data: [33000, 34000, 48000, 49000, 62000, 73000, 82000, 91000] }
  ];

  const transactions = [
    { id: '#TRX-9482', description: 'Stripe SaaS Subscription Revenue Payout', type: 'Credit', amount: '+₹128,450.00', status: 'Cleared', date: 'Today, 10:14' },
    { id: '#TRX-9481', description: 'AWS Cloud Infrastructure Compute Invoice', type: 'Debit', amount: '-₹1,420.50', status: 'Cleared', date: 'Yesterday' },
    { id: '#TRX-9480', description: 'Engineering Team Payroll & Contractors', type: 'Debit', amount: '-₹38,500.00', status: 'Cleared', date: '18 Aug 2026' },
    { id: '#TRX-9479', description: 'Google Ads & LinkedIn B2B Ad Spend', type: 'Debit', amount: '-₹12,500.00', status: 'Cleared', date: '15 Aug 2026' }
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Finance & Treasury Analytics</h1>
          <p>Cash flow graphs, income vs operating expenses, treasury ledger, and budget summaries.</p>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-primary btn-sm" onClick={() => addToast('Downloading financial graph statement...', 'success')}>
            <Download size={16} /> Export Financial Graphs
          </button>
        </div>
      </div>

      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Total Cash Reserves</span>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginTop: 4 }}>₹1,420,500.00</h2>
          <span className="badge badge-success" style={{ marginTop: 8 }}>+12.8% net liquid</span>
        </div>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Monthly Operating Costs</span>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginTop: 4 }}>₹61,000.00</h2>
          <span className="badge badge-warning" style={{ marginTop: 8 }}>Under ₹65k budget</span>
        </div>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Pending Invoices</span>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginTop: 4 }}>₹48,900.00</h2>
          <button 
            className="btn btn-secondary btn-sm" 
            style={{ marginTop: 8 }}
            onClick={() => navigateTo('utilities', 'invoice')}
          >
            Review Invoices <FileText size={14} />
          </button>
        </div>
        <div className="col-3 glass-card">
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>ARR Run Rate</span>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginTop: 4 }}>₹1,850,000.00</h2>
          <span className="badge badge-success" style={{ marginTop: 8 }}>+24% YoY growth</span>
        </div>
      </div>

      {/* Analytics Graphs Row */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Income vs Expense Comparison Graph</h3>
          <ReactApexChart options={financeBarOptions} series={financeBarSeries} type="bar" height={300} />
        </div>

        <div className="col-6 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Net Cash Flow Reserves Graph</h3>
          <ReactApexChart options={cashFlowAreaOptions} series={cashFlowAreaSeries} type="area" height={300} />
        </div>
      </div>

      {/* Treasury Ledger Table */}
      <div className="glass-card">
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Recent Treasury Transactions Ledger</h3>
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Description / Category</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx) => (
                <tr key={trx.id}>
                  <td style={{ fontWeight: 700, color: 'var(--brand-primary)' }}>{trx.id}</td>
                  <td>{trx.description}</td>
                  <td><span className={`badge ${trx.type === 'Credit' ? 'badge-success' : 'badge-danger'}`}>{trx.type}</span></td>
                  <td style={{ fontWeight: 700, color: trx.type === 'Credit' ? 'var(--brand-success)' : 'var(--brand-danger)' }}>{trx.amount}</td>
                  <td><span className="badge badge-primary">{trx.status}</span></td>
                  <td style={{ fontSize: 12, color: 'var(--text-muted)' }}>{trx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

