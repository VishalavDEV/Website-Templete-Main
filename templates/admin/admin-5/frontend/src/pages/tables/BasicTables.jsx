import React from 'react';
import { Table, CheckCircle, AlertTriangle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const BasicTables = () => {
  const { addToast } = useApp();

  return (
    <div className="tables-page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Basic HTML Tables</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Standard clean styled tables for structured data displays.</p>
      </div>

      <div className="glass-card" style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Bordered Table</h3>
        <table className="custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{ fontWeight: 700 }}>Robert Vance</td>
              <td>SmartAdmin Enterprise License</td>
              <td>₹1,250.00</td>
              <td><span className="badge badge-success">Completed</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ fontWeight: 700 }}>Sarah Jenkins</td>
              <td>Cloud Cluster Node</td>
              <td>₹3,800.00</td>
              <td><span className="badge badge-warning">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const ResponsiveTables = () => {
  const { addToast } = useApp();

  return (
    <div className="tables-page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Responsive Mobile Tables</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Horizontally scrollable table viewports for compact screen sizes.</p>
      </div>

      <div className="glass-card" style={{ overflowX: 'auto' }}>
        <table className="custom-table" style={{ minWidth: 700 }}>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Customer Name</th>
              <th>Billing Address</th>
              <th>Payment Method</th>
              <th>Total Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 700, color: 'var(--brand-primary)' }}>#INV-9482</td>
              <td>Acme Enterprise Solutions</td>
              <td>100 Tech Way, San Francisco CA</td>
              <td>Credit Card (•••• 4821)</td>
              <td style={{ fontWeight: 700 }}>₹4,250.00</td>
              <td><span className="badge badge-success">Paid</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
