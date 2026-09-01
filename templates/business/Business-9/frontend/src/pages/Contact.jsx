import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import PageTransition from '../animations/PageTransition';
import { Mail, Phone, MapPin, Clock, Sparkles } from 'lucide-react';

export default function Contact() {
  const location = useLocation();
  
  // Extract state parameters if coming from PricingCard or SolutionsCard
  const initialPlan = location.state?.planName || location.state?.serviceName || location.state?.solutionTier || '';

  const contactChannels = [
    {
      title: 'Email Address',
      desc: 'Submit inquiries directly to our principal advisor.',
      value: 'info@orangrow.com',
      icon: <Mail size={22} />
    },
    {
      title: 'Phone Helpline',
      desc: 'Call during operating hours for general project queries.',
      value: '+1 (555) 249-GROW',
      icon: <Phone size={22} />
    },
    {
      title: 'Headquarters Office',
      desc: 'Our central remote coordination office location.',
      value: 'Silicon Valley, CA, USA',
      icon: <MapPin size={22} />
    },
    {
      title: 'Operating Hours',
      desc: 'Weekly availability details for check-in advisory sessions.',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM PST',
      icon: <Clock size={22} />
    }
  ];

  return (
    <PageTransition>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge"><Sparkles size={14} /> Contact Us</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1rem' }}>
              Let's Build Something <span className="text-gradient">Impactful</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxDWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Fill out the form below. Our principal advisor will review your process details and reply within 24 hours.
            </p>
          </div>

          <div className="grid-2" style={{ alignItems: 'start' }}>
            
            {/* Contact channels listing */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {contactChannels.map((chan, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem',
                    padding: '1.75rem',
                    background: 'rgba(255, 255, 255, 0.4)'
                  }}
                >
                  <div style={{
                    background: 'rgba(249, 115, 22, 0.08)',
                    color: 'var(--primary)',
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {chan.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem', fontFamily: 'var(--font-title)' }}>
                      {chan.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      {chan.desc}
                    </p>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {chan.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Submitting form widget */}
            <div>
              <ContactForm initialPlan={initialPlan} />
            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
}
