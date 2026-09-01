import React, { useState } from 'react';
import { X, Send, CheckSquare, LifeBuoy, UserPlus, Phone, PhoneOff, PhoneCall } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Modals.css';

export const ModalContainer = () => {
  const { activeModal, setActiveModal, addToast } = useApp();

  const [taskTitle, setTaskTitle] = useState('');
  const [taskCategory, setTaskCategory] = useState('Frontend');
  const [taskPriority, setTaskPriority] = useState('High');

  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCustomer, setTicketCustomer] = useState('');
  const [ticketPriority, setTicketPriority] = useState('High');

  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const [callActive, setCallActive] = useState(false);

  if (!activeModal) return null;

  const handleClose = () => {
    setCallActive(false);
    setActiveModal(null);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    addToast(`Task "${taskTitle || 'New Task'}" created successfully!`, 'success');
    handleClose();
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    addToast(`Support ticket created for ${ticketCustomer || 'Customer'}`, 'success');
    handleClose();
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    addToast(`Email sent to ${emailTo || 'recipient'}`, 'success');
    handleClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            {activeModal === 'task' && <><CheckSquare size={20} /> <h3>Create New Task</h3></>}
            {activeModal === 'ticket' && <><LifeBuoy size={20} /> <h3>Create Support Ticket</h3></>}
            {activeModal === 'mail' && <><Send size={20} /> <h3>Compose New Email</h3></>}
            {activeModal === 'call' && <><PhoneCall size={20} /> <h3>Voice Call Dialer</h3></>}
          </div>
          <button className="btn-icon" onClick={handleClose}><X size={18} /></button>
        </div>

        <div className="modal-body">
          {activeModal === 'task' && (
            <form onSubmit={handleTaskSubmit}>
              <div className="form-group">
                <label>Task Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Deploy v2.4 Hotfix" 
                  value={taskTitle} 
                  onChange={e => setTaskTitle(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Category</label>
                  <select value={taskCategory} onChange={e => setTaskCategory(e.target.value)}>
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Design</option>
                    <option>DevOps</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Priority</label>
                  <select value={taskPriority} onChange={e => setTaskPriority(e.target.value)}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">Create Task</button>
              </div>
            </form>
          )}

          {activeModal === 'ticket' && (
            <form onSubmit={handleTicketSubmit}>
              <div className="form-group">
                <label>Customer Name / Company</label>
                <input 
                  type="text" 
                  placeholder="e.g. Acme Corp" 
                  value={ticketCustomer} 
                  onChange={e => setTicketCustomer(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Issue Subject</label>
                <input 
                  type="text" 
                  placeholder="e.g. Unable to generate PDF report" 
                  value={ticketSubject} 
                  onChange={e => setTicketSubject(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Priority Level</label>
                <select value={ticketPriority} onChange={e => setTicketPriority(e.target.value)}>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit Ticket</button>
              </div>
            </form>
          )}

          {activeModal === 'mail' && (
            <form onSubmit={handleMailSubmit}>
              <div className="form-group">
                <label>To (Email Address)</label>
                <input 
                  type="email" 
                  placeholder="recipient@example.com" 
                  value={emailTo} 
                  onChange={e => setEmailTo(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  placeholder="Enter email subject" 
                  value={emailSubject} 
                  onChange={e => setEmailSubject(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Message Content</label>
                <textarea 
                  rows={5} 
                  placeholder="Write your email message here..." 
                  value={emailBody} 
                  onChange={e => setEmailBody(e.target.value)} 
                  required 
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">
                  <Send size={16} /> Send Email
                </button>
              </div>
            </form>
          )}

          {activeModal === 'call' && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%', background: callActive ? 'rgba(16, 185, 129, 0.15)' : 'var(--brand-primary-light)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
                animation: callActive ? 'pulse 1.5s infinite' : 'none'
              }}>
                <Phone size={36} color={callActive ? 'var(--brand-success)' : 'var(--brand-primary)'} />
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>
                {callActive ? 'In Active Call...' : 'Ready to Dial'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 24 }}>
                {callActive ? 'Voice connection established (00:14)' : 'VoIP & PSTN Phone Dialer Connection'}
              </p>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                {!callActive ? (
                  <button 
                    className="btn btn-success" 
                    style={{ background: '#10b981', color: '#fff', padding: '10px 24px', fontWeight: 700, borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                    onClick={() => {
                      setCallActive(true);
                      addToast('Call connected!', 'success');
                    }}
                  >
                    <Phone size={18} /> Start Call
                  </button>
                ) : (
                  <button 
                    className="btn btn-danger" 
                    style={{ background: '#ef4444', color: '#fff', padding: '10px 24px', fontWeight: 700, borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                    onClick={handleClose}
                  >
                    <PhoneOff size={18} /> End Call
                  </button>
                )}
                <button className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
