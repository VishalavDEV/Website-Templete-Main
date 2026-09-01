import React, { useState } from 'react';
import { Sparkles, QrCode, Shield, Download, Share2, X, Check, Award } from 'lucide-react';

export default function EarlyBirdTicket({ ticketData, onClose, eventTitle = 'Quantum Epoch 2027' }) {
  const [copied, setCopied] = useState(false);

  if (!ticketData) return null;

  const handleShare = () => {
    const shareText = `I just claimed my VIP Early-Bird Pass for ${eventTitle}! Claim yours before seats close:`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog ticket-dialog-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="flex-center gap-2">
            <Award className="text-cyan" size={20} />
            <h3 className="modal-title">VIP Digital Attendee Credential</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body ticket-body">
          {/* Holographic VIP Ticket Pass */}
          <div className="hologram-card vip-ticket-card">
            <div className="ticket-header-strip">
              <div className="ticket-event-brand">
                <span className="brand-dot" />
                <span className="brand-title">{eventTitle}</span>
              </div>
              <span className="ticket-type-pill">EARLY BIRD VIP • ALL-ACCESS</span>
            </div>

            <div className="ticket-main-grid">
              <div className="ticket-info-left">
                <span className="ticket-field-label">PASS HOLDER</span>
                <h4 className="ticket-holder-name">{ticketData.name || 'Distinguished Attendee'}</h4>
                <p className="ticket-holder-email">{ticketData.email}</p>

                <div className="ticket-meta-row">
                  <div>
                    <span className="ticket-field-label">ISSUED DATE</span>
                    <span className="ticket-meta-val">{ticketData.timestamp}</span>
                  </div>
                  <div>
                    <span className="ticket-field-label">SECURITY KEY</span>
                    <span className="ticket-meta-val text-mono">{ticketData.vipNumber}</span>
                  </div>
                  <div>
                    <span className="ticket-field-label">TIER</span>
                    <span className="ticket-meta-val text-gold">TIER 1 FOUNDER</span>
                  </div>
                </div>

                <div className="ticket-perks-list">
                  <div className="perk-item">
                    <Check size={12} className="text-cyan" />
                    <span>Live 4K Keynote Access & Audio Stems</span>
                  </div>
                  <div className="perk-item">
                    <Check size={12} className="text-cyan" />
                    <span>Private Speaker Q&A Deliberation Room</span>
                  </div>
                  <div className="perk-item">
                    <Check size={12} className="text-cyan" />
                    <span>Full On-Demand Masterclass Recordings</span>
                  </div>
                </div>
              </div>

              <div className="ticket-qr-right">
                <div className="qr-box">
                  {/* Decorative QR Code SVG */}
                  <svg viewBox="0 0 100 100" className="qr-svg-graphic" fill="currentColor">
                    <rect x="5" y="5" width="25" height="25" rx="3" stroke="#00f0ff" strokeWidth="3" fill="none"/>
                    <rect x="11" y="11" width="13" height="13" fill="#00f0ff"/>
                    <rect x="70" y="5" width="25" height="25" rx="3" stroke="#00f0ff" strokeWidth="3" fill="none"/>
                    <rect x="76" y="11" width="13" height="13" fill="#00f0ff"/>
                    <rect x="5" y="70" width="25" height="25" rx="3" stroke="#00f0ff" strokeWidth="3" fill="none"/>
                    <rect x="11" y="76" width="13" height="13" fill="#00f0ff"/>
                    <rect x="36" y="12" width="6" height="6" fill="#fff"/>
                    <rect x="46" y="12" width="12" height="6" fill="#fff"/>
                    <rect x="36" y="24" width="22" height="6" fill="#fff"/>
                    <rect x="12" y="36" width="6" height="22" fill="#fff"/>
                    <rect x="24" y="36" width="6" height="10" fill="#fff"/>
                    <rect x="36" y="36" width="10" height="10" fill="#00f0ff"/>
                    <rect x="52" y="36" width="14" height="6" fill="#fff"/>
                    <rect x="72" y="36" width="18" height="6" fill="#fff"/>
                    <rect x="40" y="52" width="20" height="6" fill="#fff"/>
                    <rect x="66" y="48" width="6" height="20" fill="#fff"/>
                    <rect x="36" y="66" width="8" height="18" fill="#fff"/>
                    <rect x="50" y="66" width="20" height="6" fill="#00f0ff"/>
                    <rect x="50" y="78" width="6" height="14" fill="#fff"/>
                    <rect x="62" y="78" width="26" height="14" fill="#fff"/>
                  </svg>
                  <span className="qr-caption">SCAN TO VERIFY</span>
                </div>
                <div className="ticket-serial"># {ticketData.vipNumber}</div>
              </div>
            </div>

            <div className="ticket-barcode-strip">
              <div className="barcode-lines" />
              <div className="ticket-crypto-stamp">
                <Shield size={13} />
                <span>CRYPTOGRAPHICALLY SIGNED PASS • SECURE PROTOCOL</span>
              </div>
            </div>
          </div>

          <div className="ticket-actions-row">
            <button className="action-btn secondary-btn" onClick={handleShare}>
              {copied ? <Check size={16} /> : <Share2 size={16} />}
              <span>{copied ? 'Link Copied to Clipboard!' : 'Share Pass with Colleagues'}</span>
            </button>
            <button className="action-btn primary-btn" onClick={() => window.print()}>
              <Download size={16} />
              <span>Save / Print PDF Pass</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
