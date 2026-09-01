import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function GiftRegistry() {
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'bank') {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2500);
    } else {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2500);
    }
  };

  return (
    <div>
      <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto 3.5rem' }}>
        <span className="section-label">REGISTRY & BLESSINGS</span>
        <h2 className="serif-title" style={{ marginBottom: '1rem' }}>
          {weddingData.registry.message}
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
          {weddingData.registry.subtext}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        {/* BANK DETAILS CARD */}
        <div className="dresscode-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span className="section-label">DIRECT BANK TRANSFER</span>
            <h3 className="serif-title" style={{ marginBottom: '1.2rem' }}>HONEYMOON & HOME FUND</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.92rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
              <div><strong>Account Name:</strong> {weddingData.registry.bankDetails.accountName}</div>
              <div><strong>Bank Name:</strong> {weddingData.registry.bankDetails.bankName}</div>
              <div><strong>Account Number:</strong> {weddingData.registry.bankDetails.accountNumber}</div>
              <div><strong>IFSC Code:</strong> {weddingData.registry.bankDetails.ifscCode}</div>
            </div>
          </div>

          <button 
            onClick={() => copyToClipboard(weddingData.registry.bankDetails.accountNumber, 'bank')}
            className="btn-secondary"
            style={{ width: '100%' }}
          >
            {copiedBank ? <Check size={16} color="var(--accent)" /> : <Copy size={16} />}
            {copiedBank ? 'ACCOUNT NUMBER COPIED!' : 'COPY ACCOUNT NUMBER'}
          </button>
        </div>

        {/* UPI DETAILS CARD */}
        <div className="dresscode-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span className="section-label">DIGITAL PAYMENTS</span>
            <h3 className="serif-title" style={{ marginBottom: '1.2rem' }}>INSTANT UPI TRANSFER</h3>

            <div style={{ textCenter: 'center', padding: '1.5rem', backgroundColor: 'var(--background)', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                {weddingData.registry.bankDetails.upiId}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                Supports Google Pay, PhonePe, Paytm & UPI Apps
              </p>
            </div>
          </div>

          <button 
            onClick={() => copyToClipboard(weddingData.registry.bankDetails.upiId, 'upi')}
            className="btn-secondary"
            style={{ width: '100%' }}
          >
            {copiedUpi ? <Check size={16} color="var(--accent)" /> : <Copy size={16} />}
            {copiedUpi ? 'UPI ID COPIED!' : 'COPY UPI ID'}
          </button>
        </div>
      </div>
    </div>
  );
}
