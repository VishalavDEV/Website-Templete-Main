import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Clock, MapPin, Mail, User } from 'lucide-react';

export default function InquiriesDrawer({ isOpen, onClose }) {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/consultations');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (e) {
      console.error('Failed to fetch inquiries:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="knack-modal-backdrop" onClick={onClose}>
      <div className="inquiries-drawer-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={18} />
        </button>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '40px' }}>
          <div>
            <span className="k-tag">SPRING BOOT API STORAGE</span>
            <h3 className="modal-title">Consultation Inquiries</h3>
            <p className="modal-sub">
              Live consultation requests stored in the Java Spring Boot in-memory repository.
            </p>
          </div>
          <button 
            className="btn-outline-pill" 
            style={{ padding: '6px 14px', fontSize: '0.76rem' }}
            onClick={fetchInquiries}
            disabled={loading}
          >
            <RefreshCw size={12} style={{ marginRight: '6px', animation: loading ? 'spin 1s linear infinite' : 'none' }} />
            Refresh
          </button>
        </div>

        <div className="inquiries-scroll-list">
          {inquiries.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '30px' }}>
              No inquiries submitted yet. Book a consultation to see it appear here!
            </p>
          ) : (
            inquiries.map((inq) => (
              <div key={inq.id} className="inquiry-card">
                <div className="inquiry-header">
                  <span className="inquiry-id">{inq.id}</span>
                  <span className="inquiry-name">{inq.fullName}</span>
                </div>
                <div className="inquiry-meta">
                  <span>✉️ {inq.email}</span> • <span>📍 {inq.projectLocation || 'Unspecified Location'}</span>
                </div>
                <p className="inquiry-msg">"{inq.visionRequirements || 'No specific vision notes provided.'}"</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
