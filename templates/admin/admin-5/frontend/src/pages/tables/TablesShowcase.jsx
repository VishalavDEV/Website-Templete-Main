import React, { useState } from 'react';
import { Table, Search, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TablesShowcase = () => {
  const { addToast } = useApp();

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState('name');
  const [sortAsc, setSortAsc] = useState(true);

  const initialData = [
    { id: 1, name: 'Alex Morgan', role: 'Administrator', email: 'alex.morgan@tssmartadmin.io', amount: '₹12,450.00', status: 'Active' },
    { id: 2, name: 'Marcus Chen', role: 'Senior Engineer', email: 'marcus.chen@tssmartadmin.io', amount: '₹8,900.00', status: 'Active' },
    { id: 3, name: 'Sarah Jenkins', role: 'Product Designer', email: 'sarah.j@tssmartadmin.io', amount: '₹6,400.00', status: 'Active' },
    { id: 4, name: 'David Kim', role: 'Finance Lead', email: 'david.k@tssmartadmin.io', amount: '₹4,200.00', status: 'Pending' },
    { id: 5, name: 'Elena Rostova', role: 'Marketing Lead', email: 'elena.r@tssmartadmin.io', amount: '₹7,800.00', status: 'Active' },
    { id: 6, name: 'Robert Vance', role: 'Enterprise Client', email: 'robert.v@techcorp.com', amount: '₹15,200.00', status: 'Active' }
  ];

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const filtered = initialData.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.role.toLowerCase().includes(search.toLowerCase()) ||
    d.email.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    let valA = a[sortField];
    let valB = b[sortField];
    if (valA < valB) return sortAsc ? -1 : 1;
    if (valA > valB) return sortAsc ? 1 : -1;
    return 0;
  });

  return (
    <div className="tables-page">
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>DataTables & Grid Systems</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Interactive data tables with column sorting, searching, pagination, and status badges.</p>
      </div>

      <div className="glass-card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-subtle)', padding: '8px 14px', borderRadius: 8, width: 300 }}>
            <Search size={16} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search table data..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-primary)', width: '100%', fontSize: 13 }}
            />
          </div>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Showing {sorted.length} entries</span>
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                Name <ArrowUpDown size={14} style={{ display: 'inline', marginLeft: 4 }} />
              </th>
              <th onClick={() => handleSort('role')} style={{ cursor: 'pointer' }}>
                Role <ArrowUpDown size={14} style={{ display: 'inline', marginLeft: 4 }} />
              </th>
              <th>Email</th>
              <th onClick={() => handleSort('amount')} style={{ cursor: 'pointer' }}>
                Amount <ArrowUpDown size={14} style={{ display: 'inline', marginLeft: 4 }} />
              </th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(row => (
              <tr key={row.id}>
                <td style={{ fontWeight: 700 }}>{row.name}</td>
                <td><span className="badge badge-primary">{row.role}</span></td>
                <td style={{ color: 'var(--text-secondary)' }}>{row.email}</td>
                <td style={{ fontWeight: 700, color: 'var(--brand-success)' }}>{row.amount}</td>
                <td><span className={`badge ${row.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>{row.status}</span></td>
                <td>
                  <button className="btn btn-secondary btn-sm" onClick={() => addToast(`Viewing details for ${row.name}`, 'info')}>
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border-color-light)' }}>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Page 1 of 1</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-secondary btn-sm" onClick={() => addToast('Previous page', 'info')}><ChevronLeft size={16} /></button>
            <button className="btn btn-secondary btn-sm" onClick={() => addToast('Next page', 'info')}><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
