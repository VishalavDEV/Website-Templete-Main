import React, { useState } from 'react';
import { Inbox, Send, File, Trash2, Plus, Star, Reply, Forward, Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const EmailApp = () => {
  const { setActiveModal, addToast } = useApp();

  const [activeFolder, setActiveFolder] = useState('inbox');
  const [selectedMailId, setSelectedMailId] = useState(1);
  const [search, setSearch] = useState('');

  const [mails, setMails] = useState([
    { id: 1, folder: 'inbox', sender: 'TechCorp Enterprise', email: 'sales@techcorp.com', subject: 'Inquiry regarding TS Smart Admin Unlimited License', snippet: 'Hello team, we are evaluating TS Smart Admin for 50 enterprise developers...', date: '10:24 AM', starred: true, body: 'Hello team,\n\nWe are currently evaluating TS Smart Admin for our internal operations portal spanning over 50 enterprise developers across North America and Europe.\n\nCould you please provide a quote for the Unlimited Developer License including priority SLA support?\n\nBest regards,\nTechCorp Procurement Team' },
    { id: 2, folder: 'inbox', sender: 'AWS Cloud Services', email: 'no-reply@aws.amazon.com', subject: 'Monthly Infrastructure Billing Statement August 2026', snippet: 'Your monthly AWS cloud compute statement is now available for download...', date: 'Yesterday', starred: false, body: 'Dear Customer,\n\nYour invoice for August 2026 is ready. Total charges: $1,420.50.\n\nThank you for choosing AWS.' },
    { id: 3, folder: 'inbox', sender: 'Starlight Security Audit', email: 'security@starlight.io', subject: 'SOC2 Type-II Security Compliance Certificate Verified', snippet: 'Congratulations! Your Spring Boot REST API & MySQL data architecture passed...', date: '18 Aug 2026', starred: true, body: 'Congratulations! Your system has successfully satisfied all SOC2 Type-II security controls.' },
    { id: 4, folder: 'sent', sender: 'Me (To: Acme Logistics)', email: 'acme@logistics.com', subject: 'Proposal: Spring Boot Backend Custom Integration', snippet: 'Hi John, attached is the revised proposal for custom REST endpoint development...', date: '17 Aug 2026', starred: false, body: 'Hi John,\n\nPlease find attached our technical proposal for integrating your legacy MySQL database with TS Smart Admin.\n\nBest regards,\nAlex Morgan' },
    { id: 5, folder: 'sent', sender: 'Me (To: TechCorp SLA)', email: 'sales@techcorp.com', subject: 'Re: Enterprise License Quote & SLA Guarantee', snippet: 'Hi Team, thank you for reaching out! Here is the detailed SLA agreement...', date: '16 Aug 2026', starred: true, body: 'Hi Team,\n\nThank you for reaching out! Here is the breakdown of our Unlimited SLA Enterprise License.' },
    { id: 6, folder: 'drafts', sender: 'Draft: Q3 Financial Report', email: 'finance@tssmartadmin.io', subject: 'Draft: Q3 Revenue Forecast & Expense Budget', snippet: 'Executive summary for upcoming Q3 board meeting detailing growth targets...', date: '15 Aug 2026', starred: false, body: 'Draft Notes:\n- Revenue projection: $1.2M\n- Projected MRR growth: +18%' },
    { id: 7, folder: 'trash', sender: 'Legacy Marketing Newsletter', email: 'spam@marketingdeals.net', subject: 'Special Discount on Stock Assets', snippet: 'Get 50% off vectors and stock images this week only...', date: '10 Aug 2026', starred: false, body: 'This email has been moved to Trash.' }
  ]);

  const toggleStar = (e, id) => {
    e.stopPropagation();
    setMails(prev => prev.map(m => m.id === id ? { ...m, starred: !m.starred } : m));
    addToast('Updated star status', 'info');
  };

  const moveFolder = (folderName) => {
    setActiveFolder(folderName);
    const folderMails = mails.filter(m => m.folder === folderName);
    if (folderMails.length > 0) {
      setSelectedMailId(folderMails[0].id);
    }
  };

  const deleteCurrentMail = (id) => {
    setMails(prev => prev.map(m => m.id === id ? { ...m, folder: 'trash' } : m));
    addToast('Moved message to Trash', 'warning');
  };

  const folderMails = mails.filter(m => m.folder === activeFolder && 
    (m.sender.toLowerCase().includes(search.toLowerCase()) || m.subject.toLowerCase().includes(search.toLowerCase()))
  );

  const selectedMail = mails.find(m => m.id === selectedMailId) || folderMails[0] || mails[0];

  return (
    <div className="app-page email-app-container" style={{ minHeight: 'calc(100vh - 140px)', display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {/* Email Folders Drawer */}
      <div className="glass-card" style={{ width: 220, minWidth: 200, padding: 16, display: 'flex', flexDirection: 'column', gap: 16, flexShrink: 0 }}>
        <button className="btn btn-primary" onClick={() => setActiveModal('mail')} style={{ width: '100%' }}>
          <Plus size={16} /> Compose
        </button>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <button 
            className={`subpanel-item ${activeFolder === 'inbox' ? 'active' : ''}`}
            onClick={() => moveFolder('inbox')}
          >
            <div className="item-left"><Inbox size={16} /> <span>Inbox</span></div>
            <span className="badge badge-primary">{mails.filter(m => m.folder === 'inbox').length}</span>
          </button>
          <button 
            className={`subpanel-item ${activeFolder === 'sent' ? 'active' : ''}`}
            onClick={() => moveFolder('sent')}
          >
            <div className="item-left"><Send size={16} /> <span>Sent</span></div>
            <span className="badge badge-info">{mails.filter(m => m.folder === 'sent').length}</span>
          </button>
          <button 
            className={`subpanel-item ${activeFolder === 'drafts' ? 'active' : ''}`}
            onClick={() => moveFolder('drafts')}
          >
            <div className="item-left"><File size={16} /> <span>Drafts</span></div>
            <span className="badge badge-warning">{mails.filter(m => m.folder === 'drafts').length}</span>
          </button>
          <button 
            className={`subpanel-item ${activeFolder === 'trash' ? 'active' : ''}`}
            onClick={() => moveFolder('trash')}
          >
            <div className="item-left"><Trash2 size={16} /> <span>Trash</span></div>
            <span className="badge badge-danger">{mails.filter(m => m.folder === 'trash').length}</span>
          </button>
        </nav>
      </div>

      {/* Email List */}
      <div className="glass-card" style={{ width: 320, minWidth: 260, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div style={{ padding: 12, borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--bg-subtle)', padding: '6px 12px', borderRadius: 6, marginBottom: 8 }}>
            <Search size={14} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search mail..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-primary)', width: '100%', fontSize: 12 }}
            />
          </div>
          <strong style={{ fontSize: 13, textTransform: 'uppercase' }}>{activeFolder} ({folderMails.length})</strong>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', maxHeight: 480 }}>
          {folderMails.length === 0 ? (
            <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>
              No messages in {activeFolder}
            </div>
          ) : (
            folderMails.map(m => (
              <div
                key={m.id}
                onClick={() => setSelectedMailId(m.id)}
                style={{
                  padding: 14,
                  borderBottom: '1px solid var(--border-color-light)',
                  cursor: 'pointer',
                  background: selectedMailId === m.id ? 'var(--brand-primary-light)' : 'transparent'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button onClick={(e) => toggleStar(e, m.id)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: m.starred ? 'var(--brand-warning)' : 'var(--text-muted)' }}>
                      <Star size={14} fill={m.starred ? 'var(--brand-warning)' : 'none'} />
                    </button>
                    <strong style={{ fontSize: 13, color: 'var(--text-primary)' }}>{m.sender}</strong>
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{m.date}</span>
                </div>
                <h5 style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand-primary)', marginBottom: 4 }}>{m.subject}</h5>
                <p style={{ fontSize: 12, color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.snippet}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Email Content Reader */}
      <div className="glass-card" style={{ flex: 1, minWidth: 280, padding: 24, display: 'flex', flexDirection: 'column' }}>
        {selectedMail ? (
          <>
            <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: 16, marginBottom: 16 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{selectedMail.subject}</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <strong style={{ fontSize: 14 }}>{selectedMail.sender}</strong>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 8 }}>&lt;{selectedMail.email}&gt;</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => addToast('Replying to mail...', 'info')}><Reply size={14} /> Reply</button>
                  <button className="btn btn-secondary btn-sm" onClick={() => addToast('Forwarding mail...', 'info')}><Forward size={14} /> Forward</button>
                  <button className="btn btn-secondary btn-sm text-danger" onClick={() => deleteCurrentMail(selectedMail.id)}><Trash2 size={14} /> Delete</button>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, whiteSpace: 'pre-wrap', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {selectedMail.body}
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 40 }}>Select an email to view content</div>
        )}
      </div>
    </div>
  );
};


