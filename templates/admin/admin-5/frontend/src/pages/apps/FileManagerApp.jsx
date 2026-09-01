import React, { useState } from 'react';
import { Folder, FileText, Image, HardDrive, Upload, Grid, List, Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FileManagerApp = () => {
  const { addToast } = useApp();
  const [viewMode, setViewMode] = useState('grid');

  const files = [
    { id: 1, name: 'TS_Smart_Admin_Architecture.pdf', type: 'PDF Document', size: '4.2 MB', updated: 'Today, 12:40' },
    { id: 2, name: 'Spring_Boot_Backend_Schema.sql', type: 'SQL File', size: '128 KB', updated: 'Yesterday' },
    { id: 3, name: 'Dashboard_Glass_Mockup.png', type: 'PNG Image', size: '2.8 MB', updated: '18 Aug 2026' },
    { id: 4, name: 'Customer_Invoices_Q3_2026.xlsx', type: 'Spreadsheet', size: '1.4 MB', updated: '15 Aug 2026' }
  ];

  return (
    <div className="app-page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>File Manager & Cloud Drive</h1>
          <p>Organize project documents, SQL schemas, and asset uploads.</p>
        </div>
        <div className="page-header-actions">
          <div style={{ background: 'var(--bg-subtle)', padding: 4, borderRadius: 8, display: 'flex' }}>
            <button className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : ''}`} onClick={() => setViewMode('grid')}><Grid size={16} /></button>
            <button className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : ''}`} onClick={() => setViewMode('list')}><List size={16} /></button>
          </div>
          <button className="btn btn-primary btn-sm" onClick={() => addToast('File upload zone activated', 'info')}>
            <Upload size={16} /> Upload File
          </button>
        </div>
      </div>

      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-12 glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 700 }}>Cloud Storage Usage</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>42.8 GB / 100 GB</span>
          </div>
          <div style={{ background: 'var(--bg-subtle)', height: 10, borderRadius: 5, overflow: 'hidden' }}>
            <div style={{ width: '42.8%', height: '100%', background: 'var(--brand-primary)' }} />
          </div>
        </div>
      </div>

      <div className="grid-12">
        {files.map(f => (
          <div key={f.id} className="col-3 glass-card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ padding: 12, borderRadius: 8, background: 'var(--brand-primary-light)', color: 'var(--brand-primary)', width: 'fit-content' }}>
              <FileText size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, wordBreak: 'break-all' }}>{f.name}</h4>
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{f.type} • {f.size}</p>
            </div>
            <button className="btn btn-secondary btn-sm" onClick={() => addToast(`Downloading ${f.name}`, 'success')}>
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

