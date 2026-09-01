import React, { useState } from 'react';
import { Printer, Download, ArrowLeft, CheckCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const InvoicePage = () => {
  const { addToast } = useApp();
  const [viewDetail, setViewDetail] = useState(true);

  const handlePrint = () => {
    addToast('Opening print dialog...', 'info');
    window.print();
  };

  return (
    <div className="utility-page" style={{ maxWidth: 900, margin: '0 auto' }}>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Invoice #INV-2026-089</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Enterprise License & Cloud Hosting Statement</p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-secondary btn-sm" onClick={handlePrint}>
            <Printer size={16} /> Print Invoice
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => addToast('PDF invoice downloaded', 'success')}>
            <Download size={16} /> Download PDF
          </button>
        </div>
      </div>

      <div className="glass-card" style={{ padding: 40 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32, borderBottom: '1px solid var(--border-color)', paddingBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: 'var(--brand-primary)' }}>TS Smart Admin Inc.</h2>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>100 Technology Way, San Francisco, CA</p>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Tax ID: US-9482019</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="badge badge-success" style={{ fontSize: 14, padding: '6px 14px' }}>PAID IN FULL</span>
            <p style={{ fontSize: 13, marginTop: 8 }}><strong>Date:</strong> 20 Aug 2026</p>
            <p style={{ fontSize: 13 }}><strong>Due Date:</strong> 20 Sep 2026</p>
          </div>
        </div>

        <div style={{ marginBottom: 32 }}>
          <h4 style={{ fontSize: 14, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8 }}>Billed To:</h4>
          <h3 style={{ fontSize: 18, fontWeight: 800 }}>Robert Vance</h3>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>TechCorp Solutions Ltd.</p>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>robert.vance@techcorp.com</p>
        </div>

        <table className="custom-table" style={{ marginBottom: 24 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TS Smart Admin Enterprise Developer License</td>
              <td>1</td>
              <td>₹1,250.00</td>
              <td style={{ fontWeight: 700 }}>₹1,250.00</td>
            </tr>
            <tr>
              <td>Spring Boot REST API & MySQL Integration Package</td>
              <td>1</td>
              <td>₹450.00</td>
              <td style={{ fontWeight: 700 }}>₹450.00</td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: 280, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Subtotal:</span>
              <strong>₹1,700.00</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Tax (0%):</span>
              <strong>₹0.00</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid var(--border-color)', paddingTop: 8, fontSize: 18, fontWeight: 900, color: 'var(--brand-primary)' }}>
              <span>Total Paid:</span>
              <span>₹1,700.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
