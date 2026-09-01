import React, { useState } from 'react';
import { SponsorGrid } from '../components/SponsorGrid';
import { tournamentData } from '../data/tournamentData';
import { HeartHandshake, CheckCircle2, X } from 'lucide-react';

export const SponsorsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              OUR <span>SPONSORS</span>
            </h1>
            <div className="section-subtitle">POWERING THE THUNDERCOURT CLASH BASKETBALL CHAMPIONSHIP</div>
          </div>

          <SponsorGrid />

          {/* Sponsor Benefits Grid */}
          <div className="section-header" style={{ marginTop: '70px' }}>
            <h2 className="section-title">
              SPONSORSHIP <span>BENEFITS</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            {tournamentData.sponsorBenefits.map((b, idx) => (
              <div key={idx} className="sports-card" style={{ padding: '28px', borderLeft: '4px solid var(--orange)' }}>
                <CheckCircle2 size={28} color="#ff4d00" style={{ marginBottom: '12px' }} />
                <h3 className="font-display" style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{b.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--gray)' }}>{b.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => { setModalOpen(true); setFormSent(false); }} className="btn-primary" style={{ fontSize: '1.2rem', padding: '16px 36px' }}>
              <HeartHandshake size={20} /> BECOME AN OFFICIAL SPONSOR
            </button>
          </div>

          {/* Sponsor Inquiry Modal */}
          {modalOpen && (
            <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
              <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
                  <X size={24} />
                </button>

                {!formSent ? (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-display" style={{ fontSize: '2.2rem', color: '#ff4d00', marginBottom: '16px' }}>
                      BECOME A SPONSOR
                    </h3>
                    <p style={{ color: 'var(--gray)', marginBottom: '20px', fontSize: '0.95rem' }}>
                      Partner with the biggest basketball event in the region. Leave your brand details below:
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                      <input type="text" required placeholder="Company / Brand Name *" style={{ padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
                      <input type="email" required placeholder="Official Corporate Email *" style={{ padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
                      <input type="tel" required placeholder="Phone Number *" style={{ padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
                      <select style={{ padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}>
                        <option>Platinum Partner Tier</option>
                        <option>Gold Partner Tier</option>
                        <option>Official Media / Beverage Partner</option>
                      </select>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%' }}>SUBMIT SPONSORSHIP ENQUIRY</button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <CheckCircle2 size={54} color="#00c853" style={{ marginBottom: '14px' }} />
                    <h3 className="font-display" style={{ fontSize: '2.2rem', color: '#ff4d00' }}>ENQUIRY RECEIVED!</h3>
                    <p style={{ color: 'var(--white)', marginTop: '10px' }}>Our corporate partnership team will connect with you within 24 hours.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
