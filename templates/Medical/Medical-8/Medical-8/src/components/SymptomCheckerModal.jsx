import React, { useState } from 'react';
import { X, Stethoscope, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SymptomCheckerModal({ isOpen, onClose, onOpenBooking }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [assessment, setAssessment] = useState(null);

  if (!isOpen) return null;

  const symptomList = [
    { id: 'chest', label: 'Chest Tightness / Heart Palpitations', dept: 'cardiology', deptName: 'Cardiovascular System', urgency: 'High' },
    { id: 'headache', label: 'Chronic Migraines / Dizziness', dept: 'neurosurgery', deptName: 'Brain & Nervous System', urgency: 'Medium' },
    { id: 'breathing', label: 'Shortness of Breath / Wheezing', dept: 'pulmonology', deptName: 'Respiratory Care', urgency: 'High' },
    { id: 'joint', label: 'Joint Stiffness / Knee Pain', dept: 'orthopedics', deptName: 'Orthopedics & Joint Care', urgency: 'Low' },
    { id: 'stomach', label: 'Acid Reflux / Abdominal Discomfort', dept: 'gastroenterology', deptName: 'Gastroenterology', urgency: 'Low' },
    { id: 'skin', label: 'Skin Rash / Unusual Mole Growth', dept: 'dermatology', deptName: 'Cutaneous Dermatology', urgency: 'Medium' }
  ];

  const toggleSymptom = (symId) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symId) ? prev.filter((id) => id !== symId) : [...prev, symId]
    );
  };

  const handleEvaluate = () => {
    if (selectedSymptoms.length === 0) return;
    const matched = symptomList.filter((s) => selectedSymptoms.includes(s.id));
    setAssessment(matched);
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '580px',
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          background: 'rgba(255,255,255,0.96)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Stethoscope size={22} style={{ color: 'var(--primary-cyan)' }} />
            <h3 className="heading-editorial" style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>
              Interactive Symptom Assistant
            </h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </div>

        {!assessment ? (
          <div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Select any primary symptoms you are experiencing for an instant clinical recommendation:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {symptomList.map((sym) => {
                const isChecked = selectedSymptoms.includes(sym.id);
                return (
                  <div
                    key={sym.id}
                    onClick={() => toggleSymptom(sym.id)}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid',
                      borderColor: isChecked ? 'var(--primary-cyan)' : 'var(--border-light)',
                      background: isChecked ? 'rgba(2, 132, 199, 0.05)' : 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      fontWeight: isChecked ? '700' : '500'
                    }}
                  >
                    <span>{sym.label}</span>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: isChecked ? 'var(--primary-cyan)' : 'var(--border-light)',
                      background: isChecked ? 'var(--primary-cyan)' : 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px'
                    }}>
                      {isChecked ? '✓' : ''}
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleEvaluate}
              disabled={selectedSymptoms.length === 0}
              className="btn-primary"
              style={{ width: '100%', padding: '0.8rem', opacity: selectedSymptoms.length === 0 ? 0.5 : 1 }}
            >
              <span>Analyze & Suggest Care Center</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div>
            <div style={{
              background: 'rgba(2, 132, 199, 0.08)',
              border: '1px solid rgba(2, 132, 199, 0.2)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary-cyan)', marginBottom: '0.5rem' }}>
                Clinical Recommendation Summary
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {assessment.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: '600' }}>• {item.label}</span>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      background: 'var(--accent-teal-light)',
                      color: 'var(--accent-teal)'
                    }}>
                      Recommended: {item.deptName}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setAssessment(null)}
                className="btn-secondary"
                style={{ flex: 1, padding: '0.7rem' }}
              >
                Reset Symptoms
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking(assessment[0].dept);
                }}
                className="btn-primary"
                style={{ flex: 1.5, padding: '0.7rem' }}
              >
                Book Recommended Care
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
