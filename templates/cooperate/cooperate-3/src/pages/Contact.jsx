import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const offices = [
    {
      city: 'NEW YORK',
      lead: 'Maya Shah, Global Managing Partner',
      address: '575 5th Avenue, 38th Floor',
      zip: 'New York, NY 10017',
      phone: '+1 (212) 584-9000',
      email: 'ny@vantage.example'
    },
    {
      city: 'LONDON',
      lead: 'Marcus Vance, Partner Capital Markets',
      address: '100 Bishopsgate, Level 24',
      zip: 'London EC2N 4AG, UK',
      phone: '+44 20 7946 0912',
      email: 'london@vantage.example'
    },
    {
      city: 'ZURICH',
      lead: 'Jonathan Reed, Chief Transformation Officer',
      address: 'Paradeplatz 4, Postfach 8001',
      zip: '8001 Zurich, Switzerland',
      phone: '+41 44 215 5000',
      email: 'zurich@vantage.example'
    },
    {
      city: 'SINGAPORE',
      lead: 'Elena Park, Head of Digital & AI',
      address: 'Marina Bay Financial Centre, Tower 2',
      zip: 'Singapore 018983',
      phone: '+65 6818 6000',
      email: 'singapore@vantage.example'
    }
  ];

  return (
    <main>
      <PageHeader
        badge="GLOBAL DIRECTORY"
        title="DIRECT EXECUTIVE"
        highlight="ENGAGEMENT."
        description="Initiate confidential discussions with our senior practice leaders in New York, London, Zurich, or Singapore."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' }
        ]}
      />

      {/* Global Desks Grid */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#191919',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <div className="section-label">GLOBAL HUBS</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              PHYSICAL HUBS IN KEY FINANCIAL CAPITALS
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            {offices.map((off) => (
              <div
                key={off.city}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '36px',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '22px',
                      fontWeight: 800,
                      color: '#C8F169',
                      letterSpacing: '0.04em',
                      marginBottom: '8px',
                    }}
                  >
                    {off.city}
                  </div>
                  <div style={{ fontSize: '13px', color: '#9B9B9B', marginBottom: '20px' }}>
                    {off.lead}
                  </div>

                  <div style={{ fontSize: '15px', color: '#FFFFFF', lineHeight: 1.6 }}>
                    <div>{off.address}</div>
                    <div>{off.zip}</div>
                  </div>
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 600 }}>{off.phone}</div>
                  <a
                    href={`mailto:${off.email}`}
                    style={{
                      fontSize: '13px',
                      color: '#C8F169',
                      marginTop: '4px',
                      display: 'inline-block',
                    }}
                  >
                    {off.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Underline Form */}
      <ContactForm />
    </main>
  );
}
