import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Send } from 'lucide-react';
import { submitContact } from '../services/api';

export default function ContactStory() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const letterRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Fire flying letter animation using GSAP
    if (letterRef.current) {
      gsap.fromTo(
        letterRef.current,
        { x: -50, y: 50, opacity: 0, scale: 0.5 },
        { x: window.innerWidth + 200, y: -200, opacity: 1, scale: 1.2, duration: 1.8, ease: 'power2.inOut' }
      );
    }

    try {
      const response = await submitContact(formData);
      if (response.status === 'success') {
        setTimeout(() => {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1200);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '6rem 2rem',
        backgroundColor: 'var(--color-bg-paper)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Flying Envelope for animation */}
      <div
        ref={letterRef}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '60px',
          height: '40px',
          backgroundColor: 'var(--color-coral)',
          border: '1px solid var(--color-bg-paper)',
          opacity: 0,
          zIndex: 90,
          pointerEvents: 'none',
          boxShadow: '0 10px 25px rgba(255, 90, 54, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(-15deg)',
        }}
      >
        {/* Abstract folding envelope flaps */}
        <div style={{
          width: 0, height: 0,
          borderLeft: '30px solid transparent', borderRight: '30px solid transparent',
          borderTop: '20px solid rgba(250, 246, 240, 0.6)',
          position: 'absolute', top: 0, left: 0,
        }} />
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', zIndex: 10 }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '1.5rem' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: 'var(--color-coral)', marginBottom: '0.5rem', display: 'block' }}>
            FINAL CHAPTER
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '700', textTransform: 'uppercase' }}>
            LET'S TALK
          </h2>
          <p style={{ fontSize: '13px', fontStyle: 'italic', opacity: 0.6, marginTop: '0.2rem' }}>
            HAVE AN IDEA? LET'S CREATE SOMETHING TOGETHER.
          </p>
        </div>

        {/* Dynamic Forms or Success Card */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            
            {/* Case: SUCCESS State */}
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{
                  border: '1px solid var(--color-coral)',
                  padding: '4rem 2rem',
                  backgroundColor: 'var(--color-bg-ivory)',
                  textAlign: 'center',
                  boxShadow: '0 15px 35px rgba(255, 90, 54, 0.05)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: '42px', color: 'var(--color-forest)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  THANK YOU FOR REACHING OUT.
                </h3>
                <p style={{ fontSize: '14px', maxWidth: '500px', margin: '0 auto 2.5rem auto', opacity: 0.8, lineHeight: 1.6 }}>
                  Your transmission was routed successfully to the Spring Boot core. Siddharth will respond to your editorial pitch shortly.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-editorial-coral" style={{ fontSize: '11px' }}>
                  SEND ANOTHER TRANSMISSION
                </button>
              </motion.div>
            ) : (
              
              /* Case: IDLE / FORM State */
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
              >
                {/* Form Fields: Row 1 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-forest)' }}>
                      01 / YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: `1px solid ${errors.name ? 'var(--color-coral)' : 'var(--color-forest)'}`,
                        fontFamily: 'var(--font-editorial)',
                        fontSize: '22px',
                        padding: '8px 0',
                        color: 'var(--color-charcoal)',
                        outline: 'none',
                      }}
                      placeholder="e.g. Jean-Luc Godard"
                    />
                    {errors.name && <span style={{ color: 'var(--color-coral)', fontSize: '11px', marginTop: '4px' }}>{errors.name}</span>}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-forest)' }}>
                      02 / YOUR EMAIL
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: `1px solid ${errors.email ? 'var(--color-coral)' : 'var(--color-forest)'}`,
                        fontFamily: 'var(--font-editorial)',
                        fontSize: '22px',
                        padding: '8px 0',
                        color: 'var(--color-charcoal)',
                        outline: 'none',
                      }}
                      placeholder="e.g. editor@cahiersducinema.com"
                    />
                    {errors.email && <span style={{ color: 'var(--color-coral)', fontSize: '11px', marginTop: '4px' }}>{errors.email}</span>}
                  </div>
                </div>

                {/* Form Fields: Row 2 */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-forest)' }}>
                    03 / THE SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: `1px solid ${errors.subject ? 'var(--color-coral)' : 'var(--color-forest)'}`,
                      fontFamily: 'var(--font-editorial)',
                      fontSize: '22px',
                      padding: '8px 0',
                      color: 'var(--color-charcoal)',
                      outline: 'none',
                    }}
                    placeholder="e.g. A New Interactive Essay Pitch"
                  />
                  {errors.subject && <span style={{ color: 'var(--color-coral)', fontSize: '11px', marginTop: '4px' }}>{errors.subject}</span>}
                </div>

                {/* Form Fields: Row 3 */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-forest)' }}>
                    04 / THE ESSAY / MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: `1px solid ${errors.message ? 'var(--color-coral)' : 'var(--color-forest)'}`,
                      fontFamily: 'var(--font-editorial)',
                      fontSize: '20px',
                      padding: '8px 0',
                      color: 'var(--color-charcoal)',
                      outline: 'none',
                      resize: 'none',
                    }}
                    placeholder="Writings, specifications, pitches, questions..."
                  />
                  {errors.message && <span style={{ color: 'var(--color-coral)', fontSize: '11px', marginTop: '4px' }}>{errors.message}</span>}
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-editorial"
                  data-cursor="explore"
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '2rem',
                    padding: '1rem 2.5rem',
                    borderColor: 'var(--color-coral)',
                    color: 'var(--color-coral)',
                    opacity: status === 'sending' ? 0.7 : 1,
                  }}
                >
                  <Send size={14} />
                  <span>{status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE →'}</span>
                </button>
              </motion.form>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
