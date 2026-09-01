import React, { useState } from 'react';
import { UserCheck, MessageSquare, Clock, X, CheckCircle, Award, Briefcase } from 'lucide-react';

const AskMentorModal = ({ mentor, onClose }) => {
  const [question, setQuestion] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10002,
        padding: '1rem',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '550px',
          backgroundColor: '#0a0e0a',
          border: '1px solid #00ff66',
          borderRadius: '12px',
          padding: '2rem',
          position: 'relative',
          boxShadow: '0 0 40px rgba(0, 255, 102, 0.3)'
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>

        <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.5rem' }}>
          ASK MENTOR: {mentor.name}
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>
          {mentor.title} at {mentor.company}
        </p>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle size={48} color="#00ff66" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ color: '#fff', fontSize: '1.2rem' }}>QUESTION TRANSMITTED</h4>
            <p style={{ color: '#94a3b8', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              {mentor.name} has received your request and will drop by your table shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                Your Team Name & Table ID:
              </label>
              <input type="text" placeholder="e.g. Code Titans (Table B-12)" className="cyber-input" required />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                What technical or architecture advice do you need?
              </label>
              <textarea
                rows={4}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g. Debugging WebSocket connections on our Node backend..."
                className="cyber-input"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <MessageSquare size={16} /> REQUEST MENTOR VISIT
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const MentorCard = ({ mentor }) => {
  const [askModalOpen, setAskModalOpen] = useState(false);

  return (
    <>
      <div className="cyber-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', textAlign: 'center' }}>
        <div className="cyber-corner-tl" />
        <div className="cyber-corner-br" />

        {/* Mentor Avatar */}
        <div
          style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            margin: '0 auto 1.25rem auto',
            border: '2px solid #00ff66',
            boxShadow: '0 0 15px rgba(0, 255, 102, 0.4)',
            overflow: 'hidden',
            backgroundColor: '#0a0e0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            fontFamily: 'var(--font-heading)',
            color: '#00ff66'
          }}
        >
          {mentor.initials}
        </div>

        <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.25rem' }}>{mentor.name}</h3>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#00ff66', marginBottom: '0.25rem' }}>
          {mentor.title}
        </div>

        <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>{mentor.company}</div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem' }}>
          <span><Briefcase size={12} style={{ display: 'inline', marginRight: '3px' }} /> {mentor.experience}</span>
          <span><Clock size={12} style={{ display: 'inline', marginRight: '3px' }} /> {mentor.availableTime}</span>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem', flex: 1 }}>
          {mentor.expertise.map((exp, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                backgroundColor: 'rgba(0, 255, 102, 0.08)',
                border: '1px solid rgba(0, 255, 102, 0.2)',
                color: '#00ff66',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px'
              }}
            >
              {exp}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setAskModalOpen(true)}
            className="btn btn-primary"
            style={{ flex: 1, padding: '0.5rem', fontSize: '0.78rem' }}
          >
            <MessageSquare size={14} /> ASK MENTOR
          </button>
        </div>
      </div>

      {askModalOpen && <AskMentorModal mentor={mentor} onClose={() => setAskModalOpen(false)} />}
    </>
  );
};

export default MentorCard;
