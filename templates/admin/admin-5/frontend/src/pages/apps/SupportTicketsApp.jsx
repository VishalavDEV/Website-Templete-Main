import React, { useState } from 'react';
import { LifeBuoy, Plus, Search, Filter, MessageSquare, CheckCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SupportTicketsApp = () => {
  const { setActiveModal, addToast } = useApp();

  const [tickets, setTickets] = useState([
    { id: 1, number: '#TCK-9482', subject: 'Cannot reset password via email link', customer: 'Robert Vance', priority: 'High', status: 'Open', created: '10 mins ago' },
    { id: 2, number: '#TCK-9481', subject: 'Billing invoice PDF download error', customer: 'TechCorp Inc.', priority: 'Medium', status: 'In Progress', created: '1 hour ago' },
    { id: 3, number: '#TCK-9479', subject: 'API rate limit reached for webhooks', customer: 'Starlight Media', priority: 'Urgent', status: 'Open', created: '3 hours ago' },
    { id: 4, number: '#TCK-9475', subject: 'Request for custom permission roles', customer: 'Acme Logistics', priority: 'Low', status: 'Resolved', created: 'Yesterday' }
  ]);

  const [filterStatus, setFilterStatus] = useState('All');

  const filteredTickets = filterStatus === 'All' 
    ? tickets 
    : tickets.filter(t => t.status === filterStatus);

  return (
    <div className="app-page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Support Ticket Center</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Track customer inquiries, SLA responses, and ticket statuses.</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => setActiveModal('ticket')}>
          <Plus size={16} /> New Support Ticket
        </button>
      </div>

      <div className="glass-card" style={{ marginBottom: 24, padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {['All', 'Open', 'In Progress', 'Resolved'].map(st => (
            <button
              key={st}
              className={`btn btn-sm ${filterStatus === st ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilterStatus(st)}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Ticket #</th>
              <th>Subject</th>
              <th>Customer</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map(t => (
              <tr key={t.id}>
                <td style={{ fontWeight: 700, color: 'var(--brand-primary)' }}>{t.number}</td>
                <td style={{ fontWeight: 600 }}>{t.subject}</td>
                <td>{t.customer}</td>
                <td><span className="badge badge-warning">{t.priority}</span></td>
                <td>
                  <span className={`badge ${t.status === 'Open' ? 'badge-danger' : t.status === 'In Progress' ? 'badge-primary' : 'badge-success'}`}>
                    {t.status}
                  </span>
                </td>
                <td style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.created}</td>
                <td>
                  <button className="btn btn-secondary btn-sm" onClick={() => navigateTo('apps', 'chat')}>
                    <MessageSquare size={14} /> Reply
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
