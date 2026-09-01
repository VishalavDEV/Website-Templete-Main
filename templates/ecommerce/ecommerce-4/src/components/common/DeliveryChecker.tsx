import React, { useState } from 'react';
import { MapPin, Truck, CheckCircle2 } from 'lucide-react';

export const DeliveryChecker: React.FC = () => {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState<{ checked: boolean; valid: boolean; date?: string } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length === 6 && /^\d+$/.test(pincode.trim())) {
      const deliveryDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      setResult({ checked: true, valid: true, date: deliveryDate });
    } else {
      setResult({ checked: true, valid: false });
    }
  };

  return (
    <div style={{ padding: '1rem', backgroundColor: '#FAF9F6', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <MapPin size={16} color="var(--accent-cobalt)" />
        <span>DELIVERY & SERVICE AVAILABILITY</span>
      </div>

      <form onSubmit={handleCheck} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          placeholder="Enter 6-digit Pincode (e.g. 110001)"
          maxLength={6}
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          style={{
            flex: 1,
            padding: '0.5rem 0.75rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-light)',
            fontSize: '0.82rem'
          }}
        />
        <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
          CHECK
        </button>
      </form>

      {result?.checked && (
        <div style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>
          {result.valid ? (
            <div style={{ color: '#047857', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} /> Express delivery available to {pincode} by <strong>{result.date}</strong>. Cash on delivery eligible.
            </div>
          ) : (
            <div style={{ color: '#DC2626', fontWeight: 600 }}>Please enter a valid 6-digit Indian PIN code.</div>
          )}
        </div>
      )}
    </div>
  );
};
