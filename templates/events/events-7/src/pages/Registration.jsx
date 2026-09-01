import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { INCLUSIONS_COMPARISON } from '../data/races';
import { Check, X, ShieldCheck } from 'lucide-react';

export default function Registration() {
  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Hero Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>OFFICIAL EVENT ENTRY</div>
          <h1 className="font-display text-gradient-fire" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            YOUR STARTS HERE.
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem' }}>
            Choose your category, fill in your details, and claim your place on Chennai's legendary marathon road.
          </p>
        </div>

        {/* Registration Form Component */}
        <RegistrationForm />

        {/* Inclusions Comparison Table */}
        <div style={{ marginTop: '60px' }}>
          <h2 className="font-display" style={{ fontSize: '2.5rem', color: '#FFFFFF', textAlign: 'center', marginBottom: '32px' }}>
            RACE CATEGORY INCLUSIONS COMPARISON
          </h2>

          <div className="glass-panel" style={{ padding: '24px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--warm-white)', fontSize: '0.9rem', textAlign: 'center' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--bright-orange)' }}>
                  <th style={{ textAlign: 'left', padding: '14px' }}>Feature / Inclusion</th>
                  <th style={{ padding: '14px' }}>21.1K Half (₹1,299)</th>
                  <th style={{ padding: '14px' }}>10K City (₹899)</th>
                  <th style={{ padding: '14px' }}>5K Fun (₹599)</th>
                  <th style={{ padding: '14px' }}>3K Family (₹399)</th>
                </tr>
              </thead>
              <tbody>
                {INCLUSIONS_COMPARISON.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ textAlign: 'left', padding: '14px', fontWeight: 600 }}>{row.feature}</td>
                    <td style={{ padding: '14px' }}>{renderCell(row.half)}</td>
                    <td style={{ padding: '14px' }}>{renderCell(row.city)}</td>
                    <td style={{ padding: '14px' }}>{renderCell(row.fun)}</td>
                    <td style={{ padding: '14px' }}>{renderCell(row.family)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

function renderCell(val) {
  if (val === true) return <Check size={18} color="var(--bright-orange)" style={{ margin: '0 auto' }} />;
  if (val === false) return <X size={18} color="var(--soft-grey)" style={{ margin: '0 auto', opacity: 0.4 }} />;
  return <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--warm-white)' }}>{val}</span>;
}
