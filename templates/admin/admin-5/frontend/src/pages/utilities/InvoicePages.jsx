import React, { useState } from 'react';
import { FileText, Download, Printer, Plus, Search, Filter, CheckCircle, Clock, AlertCircle, ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { exportToCSV } from '../../utils/export';

export const InvoiceListPage = () => {
  const { navigateTo, addToast } = useApp();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const invoices = [
    { id: '#INV-2026-001', customer: 'TechCorp Enterprise', date: '20 Aug 2026', dueDate: '05 Sep 2026', amount: '₹4,250.00', status: 'Paid' },
    { id: '#INV-2026-002', customer: 'Starlight Media Systems', date: '18 Aug 2026', dueDate: '02 Sep 2026', amount: '₹1,850.00', status: 'Pending' },
    { id: '#INV-2026-003', customer: 'Acme Logistics Global', date: '15 Aug 2026', dueDate: '30 Aug 2026', amount: '₹8,900.00', status: 'Paid' },
    { id: '#INV-2026-004', customer: 'Quantum Dev Studios', date: '12 Aug 2026', dueDate: '27 Aug 2026', amount: '₹2,400.00', status: 'Overdue' },
    { id: '#INV-2026-005', customer: 'Omni Consumer Products', date: '10 Aug 2026', dueDate: '25 Aug 2026', amount: '₹3,150.00', status: 'Paid' },
    { id: '#INV-2026-006', customer: 'Hyperion Cloud Services', date: '05 Aug 2026', dueDate: '20 Aug 2026', amount: '₹6,750.00', status: 'Paid' }
  ];

  const filteredInvoices = invoices.filter(inv => {
    const matchesSearch = inv.customer.toLowerCase().includes(search.toLowerCase()) || inv.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || inv.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleExportCSV = () => {
    exportToCSV('invoice_list_2026', filteredInvoices);
    addToast('Exported invoice list CSV!', 'success');
  };

  return (
    <div className="invoice-page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Invoice Management Directory</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Manage client invoices, billing statuses, and financial receipts.</p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-secondary btn-sm" onClick={handleExportCSV}>
            <Download size={16} /> Export CSV
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => addToast('Create Invoice dialog opened', 'info')}>
            <Plus size={16} /> Create Invoice
          </button>
        </div>
      </div>

      <div className="glass-card" style={{ marginBottom: 24, padding: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 240, display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-subtle)', padding: '8px 12px', borderRadius: 8 }}>
          <Search size={18} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Search invoice ID or customer name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-primary)', width: '100%', fontSize: 14 }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Filter size={18} color="var(--text-muted)" />
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-primary)' }}
          >
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
        </div>
      </div>

      <div className="glass-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Customer Name</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((inv) => (
              <tr key={inv.id}>
                <td style={{ fontWeight: 700, color: 'var(--brand-primary)' }}>{inv.id}</td>
                <td style={{ fontWeight: 600 }}>{inv.customer}</td>
                <td>{inv.date}</td>
                <td>{inv.dueDate}</td>
                <td style={{ fontWeight: 700 }}>{inv.amount}</td>
                <td>
                  <span className={`badge ${
                    inv.status === 'Paid' ? 'badge-success' : 
                    inv.status === 'Pending' ? 'badge-warning' : 'badge-danger'
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => navigateTo('pages', 'invoice-view')}
                  >
                    View Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const InvoiceViewPage = () => {
  const { navigateTo, addToast } = useApp();

  const handlePrint = () => {
    window.print();
    addToast('Opening print preview dialog...', 'info');
  };

  return (
    <div className="invoice-view-page" style={{ maxWidth: 840, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <button className="btn btn-secondary btn-sm" onClick={() => navigateTo('pages', 'invoice-list')}>
          <ArrowLeft size={16} /> Back to Invoice List
        </button>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-secondary btn-sm" onClick={handlePrint}>
            <Printer size={16} /> Print Receipt
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => addToast('Downloading PDF Invoice...', 'success')}>
            <Download size={16} /> Download PDF
          </button>
        </div>
      </div>

      <div className="glass-card" style={{ padding: 40, background: '#ffffff', color: '#0f172a', borderRadius: 12 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #e2e8f0', paddingBottom: 24, marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#4f46e5' }}>TS SMART ADMIN</h1>
            <p style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Enterprise SaaS & Cloud Infrastructure Inc.<br />100 Technology Plaza, San Francisco, CA 94105</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <h2 style={{ fontSize: 20, fontWeight: 800 }}>INVOICE</h2>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#4f46e5', marginTop: 4 }}>#INV-2026-001</p>
            <span style={{ display: 'inline-block', background: '#dcfce7', color: '#15803d', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 700, marginTop: 6 }}>
              PAID IN FULL
            </span>
          </div>
        </div>

        {/* Invoice Meta */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>Billed To</span>
            <h3 style={{ fontSize: 16, fontWeight: 800, marginTop: 4 }}>TechCorp Enterprise Solutions</h3>
            <p style={{ fontSize: 13, color: '#64748b' }}>Attn: Robert Vance (Procurement Lead)<br />500 Innovation Way, Austin TX 78701</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 700 }}>Invoice Date:</span>
              <span style={{ fontSize: 13, fontWeight: 700, marginLeft: 8 }}>August 20, 2026</span>
            </div>
            <div>
              <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 700 }}>Payment Method:</span>
              <span style={{ fontSize: 13, fontWeight: 700, marginLeft: 8 }}>Credit Card (•••• 4821)</span>
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left', fontSize: 12, color: '#64748b' }}>
              <th style={{ padding: '12px 0' }}>Item Description</th>
              <th style={{ padding: '12px 0', textAlign: 'center' }}>Qty</th>
              <th style={{ padding: '12px 0', textAlign: 'right' }}>Unit Price</th>
              <th style={{ padding: '12px 0', textAlign: 'right' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f1f5f9', fontSize: 14 }}>
              <td style={{ padding: '14px 0', fontWeight: 700 }}>SmartAdmin Pro Enterprise License (Unlimited Seats)</td>
              <td style={{ padding: '14px 0', textAlign: 'center' }}>1</td>
              <td style={{ padding: '14px 0', textAlign: 'right' }}>₹2,500.00</td>
              <td style={{ padding: '14px 0', textAlign: 'right', fontWeight: 700 }}>₹2,500.00</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f1f5f9', fontSize: 14 }}>
              <td style={{ padding: '14px 0', fontWeight: 700 }}>Dedicated Cloud Cluster Node (High Performance)</td>
              <td style={{ padding: '14px 0', textAlign: 'center' }}>1</td>
              <td style={{ padding: '14px 0', textAlign: 'right' }}>₹1,250.00</td>
              <td style={{ padding: '14px 0', textAlign: 'right', fontWeight: 700 }}>₹1,250.00</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f1f5f9', fontSize: 14 }}>
              <td style={{ padding: '14px 0', fontWeight: 700 }}>24/7 Priority SLA Support Package</td>
              <td style={{ padding: '14px 0', textAlign: 'center' }}>1</td>
              <td style={{ padding: '14px 0', textAlign: 'right' }}>₹500.00</td>
              <td style={{ padding: '14px 0', textAlign: 'right', fontWeight: 700 }}>₹500.00</td>
            </tr>
          </tbody>
        </table>

        {/* Calculation Totals */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: 280 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 14, color: '#64748b' }}>
              <span>Subtotal:</span>
              <span style={{ fontWeight: 700, color: '#0f172a' }}>₹4,250.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 14, color: '#64748b' }}>
              <span>Tax (0% Tax Exempt):</span>
              <span style={{ fontWeight: 700, color: '#0f172a' }}>₹0.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderTop: '2px solid #e2e8f0', fontSize: 18, fontWeight: 900, color: '#4f46e5' }}>
              <span>Total Amount Paid:</span>
              <span>₹4,250.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
