import React, { useState } from 'react';
import { Send, Paperclip, Search, Phone, Video, MoreVertical, CheckCheck, ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ChatApp = () => {
  const { addToast } = useApp();

  const [activeChatId, setActiveChatId] = useState(1);
  const [inputText, setInputText] = useState('');
  const [mobileShowThread, setMobileShowThread] = useState(false);

  const [contacts, setContacts] = useState([
    { id: 1, name: 'Sarah Jenkins', role: 'Product Designer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', online: true, unread: 2 },
    { id: 2, name: 'Marcus Chen', role: 'Senior Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', online: true, unread: 0 },
    { id: 3, name: 'David Kim', role: 'Finance Lead', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', online: false, unread: 0 },
    { id: 4, name: 'Elena Rostova', role: 'Marketing Lead', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150', online: true, unread: 1 },
    { id: 5, name: 'Clara Oswald', role: 'Security Auditor', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', online: true, unread: 0 },
    { id: 6, name: 'Liam O\'Connor', role: 'DevOps Lead', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150', online: false, unread: 0 }
  ]);

  const [messagesMap, setMessagesMap] = useState({
    1: [
      { id: 1, sender: 'them', text: 'Hey Alex! Have you had a chance to review the new glass UI wireframes?', time: '10:14 AM' },
      { id: 2, sender: 'me', text: 'Yes, Sarah! The dark mode gradient contrasts look fantastic.', time: '10:16 AM' },
      { id: 3, sender: 'them', text: 'Awesome! I pushed the updated Figma tokens to the repo.', time: '10:18 AM' },
      { id: 4, sender: 'them', text: 'Let me know when the build is updated on staging.', time: '10:20 AM' }
    ],
    2: [
      { id: 1, sender: 'them', text: 'Spring Boot REST API endpoint /api/dashboard/overview is live.', time: 'Yesterday' },
      { id: 2, sender: 'me', text: 'Great work Marcus! The MySQL JPA persistence queries are blazing fast.', time: 'Yesterday' }
    ],
    3: [
      { id: 1, sender: 'them', text: 'Q3 financial report PDF statement is ready for executive sign-off.', time: '18 Aug' }
    ],
    4: [
      { id: 1, sender: 'them', text: 'LinkedIn B2B LeadGen campaign conversion rate reached 4.8%!', time: '09:45 AM' }
    ]
  });

  const activeContact = contacts.find(c => c.id === activeChatId) || contacts[0];
  const messages = messagesMap[activeChatId] || [];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessagesMap(prev => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMsg]
    }));

    setInputText('');
    addToast('Message sent', 'success');
  };

  return (
    <div className="app-page chat-app-container" style={{ minHeight: 'calc(100vh - 140px)', display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {/* Contact List Panel */}
      <div 
        className="glass-card chat-contact-panel" 
        style={{ 
          width: 320, 
          display: 'flex', 
          flexDirection: 'column', 
          padding: 16,
          flexShrink: 0
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-subtle)', padding: '8px 12px', borderRadius: 8, marginBottom: 16 }}>
          <Search size={16} color="var(--text-muted)" />
          <input type="text" placeholder="Search conversations..." style={{ border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-primary)', width: '100%', fontSize: 13 }} />
        </div>

        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 520 }}>
          {contacts.map(c => (
            <div
              key={c.id}
              onClick={() => {
                setActiveChatId(c.id);
                setMobileShowThread(true);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: 10,
                borderRadius: 8,
                cursor: 'pointer',
                background: activeChatId === c.id ? 'var(--brand-primary-light)' : 'transparent',
                color: activeChatId === c.id ? 'var(--brand-primary)' : 'var(--text-primary)'
              }}
            >
              <div style={{ position: 'relative' }}>
                <img src={c.avatar} alt={c.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
                {c.online && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, borderRadius: '50%', background: 'var(--brand-success)', border: '2px solid var(--bg-surface)' }} />}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: 14, fontWeight: 700 }}>{c.name}</h4>
                <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{c.role}</p>
              </div>
              {c.unread > 0 && <span className="badge badge-danger">{c.unread}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Thread Panel */}
      <div 
        className={`glass-card chat-thread-panel ${mobileShowThread ? 'mobile-active' : ''}`}
        style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden', minHeight: 520 }}
      >
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button 
              className="btn-icon mobile-back-btn" 
              onClick={() => setMobileShowThread(false)}
              style={{ marginRight: 4 }}
              title="Back to contacts"
            >
              <ArrowLeft size={18} />
            </button>
            <img src={activeContact.avatar} alt={activeContact.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700 }}>{activeContact.name}</h3>
              <span style={{ fontSize: 12, color: activeContact.online ? 'var(--brand-success)' : 'var(--text-muted)' }}>
                {activeContact.online ? '● Online' : 'Offline'}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn-icon" onClick={() => addToast(`Starting audio call with ${activeContact.name}`, 'info')}><Phone size={18} /></button>
            <button className="btn-icon" onClick={() => addToast(`Starting video call with ${activeContact.name}`, 'info')}><Video size={18} /></button>
          </div>
        </div>

        {/* Message History */}
        <div style={{ flex: 1, padding: 20, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14, minHeight: 320 }}>
          {messages.map(m => (
            <div key={m.id} style={{ display: 'flex', justifyContent: m.sender === 'me' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '75%',
                padding: '10px 16px',
                borderRadius: m.sender === 'me' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                background: m.sender === 'me' ? 'var(--brand-primary)' : 'var(--bg-subtle)',
                color: m.sender === 'me' ? '#ffffff' : 'var(--text-primary)',
                fontSize: 14
              }}>
                <p>{m.text}</p>
                <span style={{ fontSize: 10, opacity: 0.8, display: 'block', textAlign: 'right', marginTop: 4 }}>{m.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input Box */}
        <form onSubmit={handleSendMessage} style={{ padding: 16, borderTop: '1px solid var(--border-color)', display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <button type="button" className="btn-icon" onClick={() => addToast('Attachment option clicked', 'info')}><Paperclip size={18} /></button>
          <input
            type="text"
            placeholder="Type your message here..."
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            style={{ flex: 1, minWidth: 150, padding: '10px 14px', borderRadius: 8, border: '1px solid var(--border-color)', background: 'var(--bg-subtle)', color: 'var(--text-primary)', outline: 'none' }}
          />
          <button type="submit" className="btn btn-primary"><Send size={16} /> <span className="hide-mobile">Send</span></button>
        </form>
      </div>
    </div>
  );
};

