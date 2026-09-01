import React, { useState } from 'react';
import { Shield, Check, X, Plus } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RolesPermissionsPage = () => {
  const { addToast } = useApp();

  const matrix = [
    { module: 'Dashboard Analytics', admin: true, manager: true, editor: true, viewer: true },
    { module: 'User Account Management', admin: true, manager: true, editor: false, viewer: false },
    { module: 'System Configurations & API Keys', admin: true, manager: false, editor: false, viewer: false },
    { module: 'Financial Ledger & Invoices', admin: true, manager: true, editor: false, viewer: false },
    { module: 'Support Ticket Moderation', admin: true, manager: true, editor: true, viewer: false }
  ];

  return (
    <div className="roles-page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Roles & Access Permissions</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Role-based access control matrix for system modules.</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => addToast('Create role dialog opened', 'info')}>
          <Plus size={16} /> Create Custom Role
        </button>
      </div>

      <div className="glass-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>System Module</th>
              <th>Administrator</th>
              <th>Manager</th>
              <th>Editor</th>
              <th>Viewer</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, idx) => (
              <tr key={idx}>
                <td style={{ fontWeight: 700 }}>{row.module}</td>
                <td>{row.admin ? <Check color="var(--brand-success)" size={20} /> : <X color="var(--brand-danger)" size={20} />}</td>
                <td>{row.manager ? <Check color="var(--brand-success)" size={20} /> : <X color="var(--brand-danger)" size={20} />}</td>
                <td>{row.editor ? <Check color="var(--brand-success)" size={20} /> : <X color="var(--brand-danger)" size={20} />}</td>
                <td>{row.viewer ? <Check color="var(--brand-success)" size={20} /> : <X color="var(--brand-danger)" size={20} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
