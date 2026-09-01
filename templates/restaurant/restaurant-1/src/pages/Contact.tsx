import React from 'react';
import InlineReservation from '../components/InlineReservation';

export const Contact: React.FC = () => {
  return (
    <>
      {/* Banner */}
      <section className="intro-section" style={{ paddingTop: '12rem' }}>
        <span className="eyebrow-chapter">09 &bull; FIND US</span>
        <h1 className="font-heading display-2 mb-3">Location & Inquiries</h1>
        <p className="intro-paragraph">
          27 Garden Street, Chennai, Tamil Nadu &bull; +91 98765 43210 &bull; hello@emberhouse.example
        </p>
      </section>

      {/* Reservation Component */}
      <InlineReservation />
    </>
  );
};

export default Contact;
