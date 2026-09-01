import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Invitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="invitation-experience">
      <div className="envelope-wrapper">
        {!isOpen ? (
          <div className="invitation-card text-center" style={{ animation: 'fadeIn 0.6s ease' }}>
            <Sparkles size={40} color="var(--accent)" style={{ margin: '0 auto 1.2rem' }} />
            <span className="section-label">EXCLUSIVE INVITATION</span>
            <h2 className="serif-title" style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>
              YOU ARE CORDIALLY INVITED
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              Together with the Vance & Sterling families, we request the honor of your presence.
            </p>
            <button 
              onClick={() => setIsOpen(true)}
              className="btn-primary"
              style={{ padding: '1.1rem 2.8rem', fontSize: '0.85rem' }}
            >
              <Mail size={18} /> OPEN INVITATION
            </button>
          </div>
        ) : (
          <div className="invitation-card" style={{ animation: 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="invitation-border-frame">
              <span className="section-label">TOGETHER WITH THEIR FAMILIES</span>
              <h2 className="hero-couple-names" style={{ fontSize: '3rem', margin: '0.8rem 0' }}>
                {weddingData.couple.namesCombined}
              </h2>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '2rem' }}>
                Request the pleasure of your company to celebrate their wedding union.
              </p>

              <div className="hero-underline" style={{ width: '120px' }}></div>

              <div style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '0.15em', color: 'var(--accent)' }}>
                  {weddingData.details.date}
                </div>
                <div style={{ fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text)' }}>
                  {weddingData.details.time}
                </div>
                <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>
                  {weddingData.venue.name}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                  {weddingData.details.locationFull}
                </div>
              </div>

              <div style={{ fontSize: '0.82rem', color: 'var(--muted)', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '2rem' }}>
                PARENTS: Victor & Eleanor Vance • Marcus & Diana Sterling
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <Link to="/rsvp" className="btn-primary">
                  CONFIRM RSVP
                </Link>
                <button onClick={() => setIsOpen(false)} className="btn-secondary">
                  CLOSE CARD
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
