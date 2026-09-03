import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { Send, CheckCircle2, ExternalLink, Globe, Video, Music } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { showToast } = useToast();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('Collaboration');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const projectOptions = [
    'Live show',
    'Collaboration',
    'Production',
    'Visual project',
    'Press',
    'Other'
  ];

  const socialLinks = [
    { label: 'Instagram', url: '#', icon: Globe },
    { label: 'YouTube', url: '#', icon: Video },
    { label: 'SoundCloud', url: '#', icon: Music },
    { label: 'Spotify', url: '#', icon: Music },
    { label: 'Bandcamp', url: '#', icon: Music }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) errs.name = 'Name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    if (!message.trim()) errs.message = 'Message is required';

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitted(true);
      showToast('TRANSMISSION SENT', 'accent');
    }
  };

  const handleSocialClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    showToast(`DEMO LINK: ${label} (FICTIONAL ARTIST)`, 'info');
  };

  return (
    <section id="contact" className="section-light">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px'
          }}
        >
          {/* Left Column: Heading & Social Links */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                color: 'var(--accent-warm)',
                display: 'block',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              19 — DIRECT CONTACT & INQUIRIES
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
                fontWeight: 400,
                color: 'var(--text-main)',
                lineHeight: 1.05,
                marginBottom: '2rem'
              }}
            >
              MAKE SOMETHING <br />
              <span style={{ fontStyle: 'italic', color: 'var(--wine)' }}>LOUD.</span>
            </h2>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Available for live sound installations, experimental production commissions, film scoring, and spatial audio collaborations.
            </p>

            {/* Social Links */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-grotesk)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-warm)',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}
              >
                18 — DIGITAL CHANNELS
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {socialLinks.map(s => (
                  <a
                    key={s.label}
                    href={s.url}
                    onClick={(e) => handleSocialClick(e, s.label)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      backgroundColor: 'rgba(39, 35, 38, 0.05)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-grotesk)',
                      fontSize: '0.85rem',
                      color: 'var(--text-main)',
                      textDecoration: 'none',
                      transition: 'var(--transition-smooth)'
                    }}
                    data-cursor={s.label}
                  >
                    <span>{s.label}</span>
                    <ExternalLink size={12} style={{ color: 'var(--accent-warm)' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            style={{
              backgroundColor: 'rgba(242, 238, 232, 0.7)',
              border: '1px solid var(--border-light)',
              padding: '40px',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', animation: 'fadeIn 0.3s ease-out' }}>
                <CheckCircle2 size={54} style={{ color: 'var(--accent-warm)', margin: '0 auto 16px auto' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '8px' }}>
                  TRANSMISSION SENT.
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>
                  Your message has been encoded and dispatched. We will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-grotesk)', fontSize: '0.8rem', marginBottom: '6px' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: errors.name ? '1px solid var(--accent-warm)' : '1px solid var(--border-light)',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    data-cursor="INPUT NAME"
                  />
                  {errors.name && <span style={{ color: 'var(--accent-warm)', fontSize: '0.75rem' }}>{errors.name}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-grotesk)', fontSize: '0.8rem', marginBottom: '6px' }}>
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: errors.email ? '1px solid var(--accent-warm)' : '1px solid var(--border-light)',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    data-cursor="INPUT EMAIL"
                  />
                  {errors.email && <span style={{ color: 'var(--accent-warm)', fontSize: '0.75rem' }}>{errors.email}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-grotesk)', fontSize: '0.8rem', marginBottom: '6px' }}>
                    PROJECT TYPE
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      backgroundColor: '#FFFFFF',
                      outline: 'none'
                    }}
                    data-cursor="SELECT TYPE"
                  >
                    {projectOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-grotesk)', fontSize: '0.8rem', marginBottom: '6px' }}>
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project concept..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: errors.message ? '1px solid var(--accent-warm)' : '1px solid var(--border-light)',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    data-cursor="INPUT MESSAGE"
                  />
                  {errors.message && <span style={{ color: 'var(--accent-warm)', fontSize: '0.75rem' }}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: 'var(--bg-dark)',
                    color: 'var(--bg-light)',
                    fontFamily: 'var(--font-grotesk)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                  data-cursor="SEND TRANSMISSION"
                >
                  <Send size={16} />
                  <span>SEND TRANSMISSION</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
