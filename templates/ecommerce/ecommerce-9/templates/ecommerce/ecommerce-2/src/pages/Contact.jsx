import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Mail, Phone, MapPin, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function Contact() {
  const { showToast } = useContext(ShopContext);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'Boutique Consultation', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please complete all required fields.', 'error');
      return;
    }
    setIsSubmitted(true);
    showToast('Your message has been received by our Boutique Concierge.');
  };

  const faqs = [
    {
      q: "How can I verify the authenticity of my Aurelia piece?",
      a: "Every Aurelia creation is stamped with the official BIS 750 hallmark for 18K solid gold or PT950 for platinum. Each emerald and diamond above 0.5 ct includes an individual diamond & gemstone grading passport."
    },
    {
      q: "What is your complimentary resizing policy?",
      a: "We offer complimentary ring resizing within 30 days of purchase for all solitaire and gold band designs."
    },
    {
      q: "Do you offer custom bespoke jewellery creation?",
      a: "Yes. Our Private Atelier works directly with clients to design bespoke engagement rings, emerald bridal sets, and heirloom remakes."
    },
    {
      q: "How long does shipping take?",
      a: "In-stock items ship within 48 hours via insured express courier. Custom engraved or bespoke orders take 7 to 14 business days."
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Hero Header */}
      <div
        style={{
          background: '#064E3B',
          color: '#FAF7F0',
          padding: '5rem 1.5rem 4rem 1.5rem',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-gold)'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: '600' }}>
          BOUTIQUE CONCIERGE
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            letterSpacing: '0.15em',
            marginTop: '0.4rem',
            color: '#FAF7F0'
          }}
        >
          CONTACT AURELIA
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', color: '#D4DEC9' }}>
          Our personal advisors are at your service.
        </p>
      </div>

      <div className="container-custom" style={{ paddingTop: '4rem' }}>
        {/* Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ background: '#FAF7F0', padding: '2rem', border: '1px solid var(--border-gold)', textAlign: 'center' }}>
            <Phone size={28} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.4rem', color: 'var(--emerald-deep)' }}>Toll-Free Concierge</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--gold-dark)', fontWeight: '600' }}>+91 1800 287 3542</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Mon – Sat | 10:00 AM – 8:00 PM IST</p>
          </div>

          <div style={{ background: '#FAF7F0', padding: '2rem', border: '1px solid var(--border-gold)', textAlign: 'center' }}>
            <Mail size={28} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.4rem', color: 'var(--emerald-deep)' }}>Private Email Enquiries</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--gold-dark)', fontWeight: '600' }}>concierge@aureliajewellery.com</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Response guaranteed within 4 hours</p>
          </div>

          <div style={{ background: '#FAF7F0', padding: '2rem', border: '1px solid var(--border-gold)', textAlign: 'center' }}>
            <MapPin size={28} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.4rem', color: 'var(--emerald-deep)' }}>Flagship Boutiques</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mumbai • New Delhi • Bengaluru</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', marginTop: '0.2rem', fontWeight: '600' }}>By Private Appointment</p>
          </div>
        </div>

        {/* Form & Boutiques Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem', marginBottom: '6rem' }}>
          <div style={{ gridColumn: 'span 12' }} className="contact-form-col">
            <div style={{ background: '#FAF7F0', padding: '2.5rem', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--emerald-deep)' }}>Send a Direct Message</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Whether inquiring about a specific Zambian emerald or requesting bespoke engraving, write to us.
              </p>

              {isSubmitted ? (
                <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--gold-primary)', padding: '2rem', textAlign: 'center' }}>
                  <CheckCircle2 size={36} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--emerald-deep)' }}>Message Received</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    Your message has been assigned to a senior jewellery advisor.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ padding: '0.9rem', border: '1px solid var(--border-gold)', outline: 'none', fontSize: '0.85rem', background: '#ffffff', color: 'var(--emerald-deep)' }}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ padding: '0.9rem', border: '1px solid var(--border-gold)', outline: 'none', fontSize: '0.85rem', background: '#ffffff', color: 'var(--emerald-deep)' }}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ padding: '0.9rem', border: '1px solid var(--border-gold)', outline: 'none', fontSize: '0.85rem', background: '#ffffff', color: 'var(--emerald-deep)' }}
                    />
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ padding: '0.9rem', border: '1px solid var(--border-gold)', outline: 'none', fontSize: '0.85rem', background: '#ffffff', color: 'var(--emerald-deep)' }}
                    >
                      <option value="Boutique Consultation">Boutique Appointment</option>
                      <option value="Custom Atelier Order">Custom Atelier Order</option>
                      <option value="Order Status & Care">Order Status & Care</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <textarea
                    rows={5}
                    placeholder="How may we assist you today? *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ padding: '0.9rem', border: '1px solid var(--border-gold)', outline: 'none', fontSize: '0.85rem', fontFamily: 'var(--font-sans)', background: '#ffffff', color: 'var(--emerald-deep)' }}
                    required
                  />

                  <button type="submit" className="btn-emerald" style={{ alignSelf: 'flex-start' }}>
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>

          <div style={{ gridColumn: 'span 12' }} className="contact-stores-col">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--gold-dark)', fontWeight: '700' }}>
              Flagship Boutiques
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: '#FAF7F0', padding: '1.5rem', border: '1px solid var(--border-gold)' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.3rem', color: 'var(--emerald-deep)' }}>Mumbai Atelier & Salon</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Altamount Road, Cumballa Hill, Mumbai 400026
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold-dark)', marginTop: '0.4rem', fontWeight: '600' }}>Phone: +91 22 4982 1100</p>
              </div>

              <div style={{ background: '#FAF7F0', padding: '1.5rem', border: '1px solid var(--border-gold)' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.3rem', color: 'var(--emerald-deep)' }}>New Delhi VIP Suite</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  The Chanakya, Chanakyapuri, New Delhi 110021
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold-dark)', marginTop: '0.4rem', fontWeight: '600' }}>Phone: +91 11 4102 8890</p>
              </div>

              <div style={{ background: '#FAF7F0', padding: '1.5rem', border: '1px solid var(--border-gold)' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.3rem', color: 'var(--emerald-deep)' }}>Bengaluru Boutique</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  UB City Mall, Vittal Mallya Road, Bengaluru 560001
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold-dark)', marginTop: '0.4rem', fontWeight: '600' }}>Phone: +91 80 4390 5520</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '600' }}>
              HELP & GUIDANCE
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginTop: '0.3rem', color: 'var(--emerald-deep)' }}>
              Frequently Asked Questions
            </h2>
            <div className="gold-divider" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ border: '1px solid var(--border-gold)', background: '#FAF7F0' }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    color: 'var(--emerald-deep)',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  {activeFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeFaq === index && (
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid var(--border-gold)', paddingTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-form-col { grid-column: span 7 !important; }
          .contact-stores-col { grid-column: span 5 !important; }
        }
      `}</style>
    </div>
  );
}
