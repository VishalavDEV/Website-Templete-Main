import React, { useState } from 'react';
import { Mail, Phone, Plus, Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ContactsApp = () => {
  const { setActiveModal, addToast } = useApp();
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Alex Morgan', role: 'Administrator', company: 'TS Smart Admin', email: 'alex.morgan@tssmartadmin.io', phone: '+1 (555) 019-2834', avatar: '/assets/avatar_alex.jpg' },
    { id: 2, name: 'Marcus Chen', role: 'Senior Engineer', company: 'TS Smart Admin', email: 'marcus.chen@tssmartadmin.io', phone: '+1 (555) 018-9921', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { id: 3, name: 'Sarah Jenkins', role: 'Product Designer', company: 'TS Smart Admin', email: 'sarah.j@tssmartadmin.io', phone: '+1 (555) 017-4412', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { id: 4, name: 'David Kim', role: 'Finance Lead', company: 'TS Smart Admin', email: 'david.k@tssmartadmin.io', phone: '+1 (555) 016-8831', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
    { id: 5, name: 'Elena Rostova', role: 'Marketing Lead', company: 'TS Smart Admin', email: 'elena.r@tssmartadmin.io', phone: '+1 (555) 015-7742', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150' },
    { id: 6, name: 'Robert Vance', role: 'Enterprise Client', company: 'TechCorp Inc.', email: 'robert.v@techcorp.com', phone: '+1 (555) 014-6639', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
    { id: 7, name: 'Clara Oswald', role: 'Security Auditor', company: 'Starlight Media', email: 'clara.o@starlight.io', phone: '+1 (555) 013-5528', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150' },
    { id: 8, name: 'Liam O\'Connor', role: 'DevOps Specialist', company: 'Cloud Dynamics', email: 'liam.o@clouddynamics.com', phone: '+1 (555) 012-4417', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150' }
  ]);

  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.role.toLowerCase().includes(search.toLowerCase()) ||
    c.company.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddContact = () => {
    const name = prompt('Enter Contact Name:');
    if (!name) return;
    const role = prompt('Enter Role / Position:') || 'Team Member';
    const email = prompt('Enter Email Address:') || `${name.toLowerCase().replace(/\s+/g, '.')}@tssmartadmin.io`;
    const phone = prompt('Enter Phone Number:') || '+1 (555) 019-9999';

    const newContact = {
      id: Date.now(),
      name,
      role,
      company: 'TS Smart Admin',
      email,
      phone,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
    };

    setContacts(prev => [newContact, ...prev]);
    addToast(`Added new contact "${name}"`, 'success');
  };

  const handleCall = (c) => {
    setActiveModal('call');
    addToast(`Initiating call with ${c.name} (${c.phone})...`, 'info');
  };

  const handleEmail = (c) => {
    setActiveModal('mail');
    addToast(`Composing email for ${c.name} (${c.email})...`, 'info');
  };

  return (
    <div className="app-page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800 }}>Contacts Directory</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Team members, enterprise client reps, and key stakeholders.</p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search contacts..." 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              style={{
                padding: '8px 12px 8px 36px',
                borderRadius: 8,
                border: '1px solid var(--border-color)',
                background: 'var(--bg-surface)',
                color: 'var(--text-primary)',
                fontSize: 14
              }}
            />
          </div>
          <button className="btn btn-primary btn-sm" onClick={handleAddContact}>
            <Plus size={16} /> Add Contact
          </button>
        </div>
      </div>

      <div className="grid-12">
        {filteredContacts.length === 0 ? (
          <div className="col-12 glass-card" style={{ textAlign: 'center', padding: 40, color: 'var(--text-secondary)' }}>
            No contacts found matching "{search}".
          </div>
        ) : (
          filteredContacts.map(c => (
            <div key={c.id} className="col-3 glass-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
              <img src={c.avatar} alt={c.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, border: '3px solid var(--brand-primary)' }} />
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{c.name}</h3>
              <p style={{ fontSize: 12, color: 'var(--brand-primary)', fontWeight: 600, margin: '4px 0 2px 0' }}>{c.role}</p>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>{c.company}</span>
              <div style={{ display: 'flex', gap: 8, width: '100%', marginTop: 'auto' }}>
                <button 
                  className="btn btn-secondary btn-sm" 
                  style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} 
                  onClick={() => handleCall(c)}
                >
                  <Phone size={14} /> Call
                </button>
                <button 
                  className="btn btn-primary btn-sm" 
                  style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} 
                  onClick={() => handleEmail(c)}
                >
                  <Mail size={14} /> Email
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


