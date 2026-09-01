import React, { useState } from 'react';
import { tournamentData } from '../data/tournamentData';
import { TicketCard } from '../components/TicketCard';
import { X, CheckCircle2, Ticket, CreditCard } from 'lucide-react';

export const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedMatch, setSelectedMatch] = useState('Opening Match — Vortexa Warriors vs City Titans');
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    seatPref: 'Center Bowl',
  });
  const [confirmed, setConfirmed] = useState(false);

  const subtotal = selectedTicket ? selectedTicket.numericPrice * ticketCount : 0;
  const taxes = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + taxes;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="main-content">
      <section className="section-padding sports-bg-pattern">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              TOURNAMENT <span>TICKETS</span>
            </h1>
            <div className="section-subtitle">SECURE YOUR SEATS AT VORTEX ARENA, CHENNAI</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            {tournamentData.tickets.map((t) => (
              <TicketCard key={t.id} ticket={t} onSelect={(ticket) => {
                setSelectedTicket(ticket);
                setConfirmed(false);
              }} />
            ))}
          </div>

          {/* Ticket Purchase Modal UI */}
          {selectedTicket && (
            <div className="modal-backdrop" onClick={() => setSelectedTicket(null)}>
              <div className="modal-content-box" style={{ maxWidth: '650px' }} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={() => setSelectedTicket(null)}>
                  <X size={24} />
                </button>

                {!confirmed ? (
                  <form onSubmit={handleCheckoutSubmit}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                      <Ticket size={24} color="#ff4d00" />
                      <h3 className="font-display" style={{ fontSize: '2.2rem', color: '#ff4d00' }}>
                        CHECKOUT — {selectedTicket.name}
                      </h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <label className="font-sports" style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem', color: 'var(--gray)' }}>NAME *</label>
                        <input
                          type="text"
                          required
                          value={bookingDetails.name}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                          placeholder="Your Full Name"
                          style={{ width: '100%', padding: '10px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                        />
                      </div>
                      <div>
                        <label className="font-sports" style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem', color: 'var(--gray)' }}>EMAIL *</label>
                        <input
                          type="email"
                          required
                          value={bookingDetails.email}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                          placeholder="ticket@email.com"
                          style={{ width: '100%', padding: '10px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <label className="font-sports" style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem', color: 'var(--gray)' }}>PHONE *</label>
                        <input
                          type="tel"
                          required
                          value={bookingDetails.phone}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          style={{ width: '100%', padding: '10px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                        />
                      </div>
                      <div>
                        <label className="font-sports" style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem', color: 'var(--gray)' }}>NUMBER OF TICKETS</label>
                        <select
                          value={ticketCount}
                          onChange={(e) => setTicketCount(Number(e.target.value))}
                          style={{ width: '100%', padding: '10px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                        >
                          {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                            <option key={n} value={n}>{n} Ticket(s)</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label className="font-sports" style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem', color: 'var(--gray)' }}>SELECT MATCH</label>
                      <select
                        value={selectedMatch}
                        onChange={(e) => setSelectedMatch(e.target.value)}
                        style={{ width: '100%', padding: '10px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                      >
                        <option value="15 Aug Opening — Vortexa Warriors vs City Titans">15 Aug Opening — Vortexa Warriors vs City Titans</option>
                        <option value="16 Aug — Metro Falcons vs Coastal Kings">16 Aug — Metro Falcons vs Coastal Kings</option>
                        <option value="19 Aug Quarter Final 1">19 Aug Quarter Final 1</option>
                        <option value="20 Aug Semi Final">20 Aug Semi Final</option>
                        <option value="22 Aug Grand Final Championship">22 Aug Grand Final Championship</option>
                      </select>
                    </div>

                    {/* Cost Breakdown */}
                    <div style={{ background: '#050505', padding: '16px', borderRadius: '4px', border: '1px solid var(--border)', marginBottom: '24px', fontFamily: 'var(--font-sports)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span>SUBTOTAL ({ticketCount} x {selectedTicket.price})</span>
                        <span>₹{subtotal.toLocaleString()}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', color: 'var(--gray)' }}>
                        <span>GST & TAXES (18%)</span>
                        <span>₹{taxes.toLocaleString()}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '8px', fontSize: '1.3rem', color: '#ff4d00', fontWeight: 800 }}>
                        <span>TOTAL AMOUNT payable:</span>
                        <span>₹{grandTotal.toLocaleString()}</span>
                      </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '14px' }}>
                      <CreditCard size={18} /> PROCEED TO PAYMENT
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '20px 10px' }}>
                    <CheckCircle2 size={64} color="#00c853" style={{ marginBottom: '16px' }} />
                    <h2 className="font-display" style={{ fontSize: '2.8rem', color: '#ff4d00', marginBottom: '10px' }}>
                      YOUR TICKETS ARE CONFIRMED!
                    </h2>
                    <p style={{ color: 'var(--white)', fontSize: '1.05rem', marginBottom: '20px' }}>
                      Confirmation & E-Tickets for <strong>{selectedTicket.name} ({ticketCount} Pass)</strong> have been sent to <strong>{bookingDetails.email}</strong>.
                    </p>
                    <div style={{ background: '#050505', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-orange)', marginBottom: '20px', fontSize: '0.9rem', color: 'var(--gray)' }}>
                      TICKET PASS ID: #TC-2026-{Math.floor(100000 + Math.random() * 900000)} | VENUE GATE 1 ENTRY
                    </div>
                    <button onClick={() => setSelectedTicket(null)} className="btn-primary">
                      DONE
                    </button>
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
