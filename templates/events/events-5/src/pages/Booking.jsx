import React from 'react';
import BookingForm from '../components/BookingForm';
import { Calendar, ShieldCheck, Sparkles } from 'lucide-react';

export const Booking = () => {
  return (
    <div style={{ background: '#07090b', paddingBottom: '90px' }}>
      {/* Banner */}
      <section style={{
        padding: '90px 0 50px 0',
        background: 'radial-gradient(ellipse at top, #161c22 0%, #07090b 80%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container">
          <div className="badge-pill badge-green" style={{ marginBottom: '16px' }}>
            <Calendar size={14} /> ONLINE APPOINTMENT PORTAL
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#f5f7f8',
            marginBottom: '16px'
          }}>
            RESERVE YOUR STUDIO BAY.
          </h1>
          <p style={{ color: '#b9c0c5', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Select your vehicle specs, preferred detailing or wash package, date & time slot to receive instant confirmation.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default Booking;
