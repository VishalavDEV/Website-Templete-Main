import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import { Mail, Phone, MapPin, LifeBuoy, Send, CheckCircle2, Github, Linkedin, Twitter, Disc as Discord, Instagram } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Hero */}
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● ORGANIZER COMMUNICATIONS</div>
          <GlitchText text="CONTACT THE ORGANIZERS" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Have questions or need assistance? Reach out to the NEXORA AFTERDARK event team.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* Left: Contact Info */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem' }}>COMMUNICATION CHANNELS</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div className="cyber-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
                  <Mail size={24} color="#00ff66" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>EMAIL SUPPORT</div>
                    <div style={{ color: '#fff', fontSize: '1rem', fontWeight: '600' }}>help@nexora-afterdark.io</div>
                  </div>
                </div>

                <div className="cyber-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
                  <Phone size={24} color="#00ff66" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>HELPLINE PHONE</div>
                    <div style={{ color: '#fff', fontSize: '1rem', fontWeight: '600' }}>+91 44 2800 9000 / +91 98400 12345</div>
                  </div>
                </div>

                <div className="cyber-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
                  <MapPin size={24} color="#00ff66" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>EVENT VENUE</div>
                    <div style={{ color: '#fff', fontSize: '1rem', fontWeight: '600' }}>Nexora Innovation Lab, OMR, Chennai, India</div>
                  </div>
                </div>

                <div className="cyber-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
                  <LifeBuoy size={24} color="#00ff66" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>LIVE HELP DESK</div>
                    <div style={{ color: '#fff', fontSize: '1rem', fontWeight: '600' }}>Click floating Help Desk button for 24/7 support</div>
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                OFFICIAL SOCIAL NETWORKS
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { icon: Github, name: 'GitHub', link: 'https://github.com' },
                  { icon: Linkedin, name: 'LinkedIn', link: 'https://linkedin.com' },
                  { icon: Twitter, name: 'Twitter/X', link: 'https://twitter.com' },
                  { icon: Discord, name: 'Discord', link: 'https://discord.com' },
                  { icon: Instagram, name: 'Instagram', link: 'https://instagram.com' }
                ].map((soc, idx) => {
                  const IconComp = soc.icon;
                  return (
                    <a
                      key={idx}
                      href={soc.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(0, 255, 102, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00ff66',
                        transition: 'all 0.2s ease'
                      }}
                      className="interactive"
                    >
                      <IconComp size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="cyber-card" style={{ padding: '2.5rem', backgroundColor: 'rgba(10, 16, 12, 0.9)' }}>
              <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1.5rem' }}>SEND US A MESSAGE</h2>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={50} color="#00ff66" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 style={{ color: '#fff', fontSize: '1.4rem' }}>MESSAGE TRANSMITTED</h3>
                  <p style={{ color: '#94a3b8', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Thank you! Our organizing committee will respond within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ananya Roy"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="cyber-input"
                      required
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      placeholder="ananya@college.edu"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="cyber-input"
                      required
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      SUBJECT *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Travel Stipend Query / Mentor Request"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="cyber-input"
                      required
                    />
                  </div>

                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="cyber-input"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                    <Send size={18} /> SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
