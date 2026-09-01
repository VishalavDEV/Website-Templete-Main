import React, { useState, useEffect } from 'react';

export default function ReservationSection() {
  const todayStr = new Date().toISOString().split('T')[0];
  const [resDate, setResDate] = useState(todayStr);
  const [resTime, setResTime] = useState('');
  const [resGuests, setResGuests] = useState('2');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackMsg(
      `Table request received for ${resGuests} guest(s) on ${resDate} at ${resTime || 'selected time'}. Our concierge will confirm shortly.`
    );
  };

  return (
    <section id="reservation" className="reservation-section-editorial" style={{ padding: 'var(--section-gap) var(--site-padding)' }}>
      <div className="res-editorial-container">
        <span className="house-meta-tag">JOIN US AT THE TABLE</span>
        <h2 className="res-editorial-title">TAKE YOUR TIME.</h2>
        <form className="res-editorial-form" id="reservation-form" onSubmit={handleSubmit}>
          <div className="res-editorial-group">
            <label className="res-editorial-label" htmlFor="res-date">SELECT DATE</label>
            <input
              type="date"
              id="res-date"
              className="res-editorial-input"
              required
              min={todayStr}
              value={resDate}
              onChange={(e) => setResDate(e.target.value)}
            />
          </div>
          <div className="res-editorial-group">
            <label className="res-editorial-label" htmlFor="res-time">SELECT TIME</label>
            <select
              id="res-time"
              className="res-editorial-select"
              required
              value={resTime}
              onChange={(e) => setResTime(e.target.value)}
            >
              <option value="">TIME</option>
              <option value="12:30">12:30</option>
              <option value="14:00">14:00</option>
              <option value="19:30">19:30</option>
              <option value="21:00">21:00</option>
            </select>
          </div>
          <div className="res-editorial-group">
            <label className="res-editorial-label" htmlFor="res-guests">GUESTS</label>
            <select
              id="res-guests"
              className="res-editorial-select"
              required
              value={resGuests}
              onChange={(e) => setResGuests(e.target.value)}
            >
              <option value="1">1 GUEST</option>
              <option value="2">2 GUESTS</option>
              <option value="4">4 GUESTS</option>
              <option value="6">6 GUESTS (PRIVATE)</option>
            </select>
          </div>
          <button type="submit" className="btn-res-find-table" data-cursor="sage" data-cursor-text="RESERVE">
            FIND A TABLE &rarr;
          </button>
        </form>
        {feedbackMsg && (
          <div
            id="res-feedback-msg"
            style={{
              display: 'block',
              marginTop: '2rem',
              padding: '1.25rem 2rem',
              background: 'var(--bg-cream-surface)',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              fontFamily: 'var(--font-body)',
              color: 'var(--color-forest)',
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            {feedbackMsg}
          </div>
        )}
      </div>
    </section>
  );
}
