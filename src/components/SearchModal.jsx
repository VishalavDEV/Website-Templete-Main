import React, { useState, useEffect, useRef } from 'react';
import { DOCTORS, SPECIALTIES, BODY_REGIONS, FACILITIES } from '../data/medicalData';
import { Search, X, User, HeartPulse, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSelectDoctor, onSelectSpecialty, onOpenBooking }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false); // open search
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingDoctors = q ? DOCTORS.filter((d) =>
    d.name.toLowerCase().includes(q) ||
    d.title.toLowerCase().includes(q) ||
    d.department.toLowerCase().includes(q)
  ) : [];

  const matchingSpecialties = q ? SPECIALTIES.filter((s) =>
    s.title.toLowerCase().includes(q) ||
    s.tagline.toLowerCase().includes(q) ||
    s.keyServices.some((k) => k.toLowerCase().includes(q))
  ) : [];

  const matchingBody = q ? BODY_REGIONS.filter((b) =>
    b.name.toLowerCase().includes(q) ||
    b.conditions.some((c) => c.toLowerCase().includes(q))
  ) : [];

  const hasResults = matchingDoctors.length > 0 || matchingSpecialties.length > 0 || matchingBody.length > 0;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '640px',
          padding: '1.5rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg), 0 0 50px rgba(2, 132, 199, 0.25)',
          background: 'rgba(255, 255, 255, 0.96)',
          animation: 'fadeIn 0.2s ease'
        }}
      >
        {/* Search Input Box */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '1.25rem' }}>
          <Search size={20} style={{ position: 'absolute', left: '14px', color: 'var(--primary-cyan)' }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search doctors, procedures, conditions (e.g. 'Cardiology', 'TAVR', 'Dr. Vance')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.85rem 1rem 0.85rem 2.75rem',
              borderRadius: 'var(--radius-md)',
              border: '2px solid var(--primary-cyan)',
              fontSize: '1rem',
              outline: 'none',
              fontFamily: 'inherit',
              boxShadow: '0 0 15px rgba(2, 132, 199, 0.15)'
            }}
          />
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              right: '12px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Results Area */}
        <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
          {!query && (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>Quick Search Categories:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {['TAVR', 'Cardiology', 'Neurosurgery', 'MRI Suite', 'Dr. Vance', 'Dr. Chen'].map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setQuery(kw)}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-light)',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      color: 'var(--primary-cyan)',
                      fontWeight: '600'
                    }}
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No medical results found for "{query}". Try searching "Cardiology" or "Dr. Vance".
            </div>
          )}

          {/* Doctor Matches */}
          {matchingDoctors.length > 0 && (
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                Doctors & Faculty ({matchingDoctors.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {matchingDoctors.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => {
                      onClose();
                      onSelectDoctor(doc);
                    }}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img src={doc.avatar} alt={doc.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                      <div>
                        <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-main)' }}>{doc.name}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{doc.title}</div>
                      </div>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--primary-cyan)' }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specialty Matches */}
          {matchingSpecialties.length > 0 && (
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                Clinical Specialties ({matchingSpecialties.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {matchingSpecialties.map((spec) => (
                  <div
                    key={spec.id}
                    onClick={() => {
                      onClose();
                      onOpenBooking(spec.id);
                    }}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(2, 132, 199, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-main)' }}>{spec.title}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{spec.tagline}</div>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary-cyan)', fontWeight: '700' }}>Book Care →</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
