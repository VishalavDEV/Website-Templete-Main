import React, { useState, useEffect } from 'react';

export default function Reservation({ onReserve }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('8:30 PM');
  const [guests, setGuests] = useState('2');
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    setMinDate(todayStr);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formattedDateStr = date;
    if (date) {
      const parsedDate = new Date(date + 'T00:00:00');
      formattedDateStr = parsedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }
    onReserve({ rawDate: date, formattedDate: formattedDateStr, time, guests });
  };

  return (
    <section className="reservation-section" id="reservation">
      <div className="reservation-container">
        <span className="section-label" style={{ color: 'var(--color-sand)' }}>
          <span className="accent-line" style={{ backgroundColor: 'var(--color-sand)' }}></span>BOOK A TABLE
        </span>
        <h2 className="reservation-heading">MEET US<br />AT THE TABLE.</h2>

        <form className="reservation-form" id="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="res-date">DATE</label>
            <input
              type="date"
              id="res-date"
              min={minDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-time">TIME</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="12:30 PM">12:30 PM (Lunch)</option>
              <option value="1:30 PM">1:30 PM (Lunch)</option>
              <option value="7:00 PM">7:00 PM (Dinner)</option>
              <option value="8:30 PM">8:30 PM (Dinner)</option>
              <option value="9:45 PM">9:45 PM (Dinner)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="res-guests">GUESTS</label>
            <select id="res-guests" value={guests} onChange={(e) => setGuests(e.target.value)} required>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="4">4 Guests</option>
              <option value="6">6 Guests</option>
              <option value="8+">8+ Guests (Private)</option>
            </select>
          </div>

          <button type="submit" className="reservation-submit-btn" data-cursor="CHECK">
            CHECK AVAILABILITY
          </button>
        </form>
      </div>
    </section>
  );
}
