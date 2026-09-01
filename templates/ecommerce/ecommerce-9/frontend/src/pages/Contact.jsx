import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, Phone, MapPin, Send, HelpCircle, ShieldCheck } from 'lucide-react';
import { submitContact } from '../services/api';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'System Bug Report',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    try {
      await submitContact(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: 'System Bug Report', message: '' });
    } catch (err) {
      console.error(err);
      alert('Message transmission failed. Console link disrupted.');
    } finally {
      setLoading(false);
    }
  };

  const supportChannels = [
    { title: 'HOLOGRAPHIC CHAT', desc: 'Secure direct comm link', icon: <MessageSquare size={18} />, val: 'Live Terminal 4A' },
    { title: 'COMMS EMAIL', desc: 'Secure asynchronous email', icon: <Mail size={18} />, val: 'support@bluecore.io' },
    { title: 'TELEPHONE LINE', desc: 'Voice communication band', icon: <Phone size={18} />, val: '+1 (800) BLUECORE' },
    { title: 'MAIN TERMINAL HQ', desc: 'Physical showroom address', icon: <MapPin size={18} />, val: 'Neo Tokyo, Sector 42' }
  ];

  const faqs = [
    { q: "How do I sync my TV screen channel?", a: "Hover or use the virtual TV Remote control keys to adjust telemetry display content." },
    { q: "Where can I track my drop pod delivery?", a: "Insert your order code BC-xxxxxx into the Delivery Tracker page to view real-time vehicle progression." },
    { q: "Do these devices run on clean energy?", a: "Yes, all BLUECORE devices run on custom fusion battery cores engineered to last up to 5 standard cycles." }
  ];

  return (
    <PageTransition>
      <div style={{ padding: '40px 5%', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div className="circuit-bg" />

        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 className="glow-text" style={{ fontSize: '30px', fontFamily: 'var(--font-tech)' }}>
            NEED TECH SUPPORT?
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '8px' }}>
            Open a direct com link to the BLUECORE network array.
          </p>
        </div>

        {/* Outer Grid */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '40px',
          alignItems: 'flex-start'
        }}>
          
          {/* LEFT SUPPORT INFO */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {supportChannels.map((c, i) => (
              <div key={i} className="glass-panel" style={{
                padding: '20px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                border: '1.5px solid rgba(0, 240, 255, 0.15)'
              }}>
                <div style={{
                  color: '#00f0ff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 240, 255, 0.05)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {c.icon}
                </div>
                <div>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-tech)', color: '#00f0ff', letterSpacing: '0.05em' }}>{c.title}</span>
                  <h4 style={{ fontSize: '14px', color: '#fff', marginTop: '3px' }}>{c.val}</h4>
                  <p style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SUPPORT FORM */}
          <div className="glass-panel" style={{
            flex: '1 1 500px',
            padding: '30px',
            borderRadius: '12px',
            border: '1.5px solid rgba(0, 240, 255, 0.25)'
          }}>
            <h3 style={{ fontSize: '13px', color: '#00f0ff', fontFamily: 'var(--font-tech)', marginBottom: '20px' }}>
              TRANSMIT BUG REPORT OR ASSISTANCE REQUEST
            </h3>

            <AnimatePresence mode="wait">
              {!success ? (
                /* Contact Form */
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
                >
                  <div>
                    <label style={labelStyle}>IDENTIFICATION NAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter full name..."
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>COMMS ROUTE EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter email route..."
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>TELEMETRY SUBJECT</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="System Bug Report">SYSTEM BUG REPORT</option>
                      <option value="Order Telemetry Issue">ORDER TELEMETRY ISSUE</option>
                      <option value="Fusion Core Warranty">FUSION CORE WARRANTY</option>
                      <option value="General Inquiries">GENERAL INQUIRIES</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>TRANSMISSION ENVELOPE</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Enter details of request..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        fontFamily: 'var(--font-body)',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button type="submit" disabled={loading} className="cyber-button solid" style={{ justifyContent: 'center', marginTop: '10px' }}>
                    {loading ? 'TRANSMITTING CODES...' : 'TRANSMIT SIGNAL'} <Send size={14} />
                  </button>
                </motion.form>
              ) : (
                /* Success Message */
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    textAlign: 'center',
                    padding: '40px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    style={{ color: '#10b981' }}
                  >
                    <ShieldCheck size={48} />
                  </motion.div>
                  <div>
                    <h3 style={{ color: '#10b981', fontFamily: 'var(--font-tech)' }}>TRANSMISSION LOGGED SUCCESS</h3>
                    <p style={{ color: '#64748b', fontSize: '13px', marginTop: '6px', lineHeight: '1.4' }}>
                      Your comm envelope has been cataloged. Our terminal specialists will respond shortly on your comm email port.
                    </p>
                  </div>
                  <button onClick={() => setSuccess(false)} className="cyber-button">
                    OPEN NEW LINK
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* FAQs section */}
        <div style={{ marginTop: '70px' }}>
          <h2 className="glow-text-cyan" style={{ fontSize: '18px', textAlign: 'center', marginBottom: '35px', fontFamily: 'var(--font-tech)' }}>
            SHOWROOM DIAGNOSTIC FAQS
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {faqs.map((f, i) => (
              <div key={i} className="glass-panel" style={{ padding: '20px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '13px', color: '#fff', fontFamily: 'var(--font-tech)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={14} color="#00f0ff" /> {f.q}
                </h4>
                <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '10px', lineHeight: '1.5' }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

const labelStyle = {
  display: 'block',
  fontSize: '10px',
  fontFamily: 'var(--font-tech)',
  color: '#00f0ff',
  marginBottom: '8px',
  letterSpacing: '0.1em'
};

const inputStyle = {
  width: '100%',
  padding: '10px 15px',
  backgroundColor: 'rgba(3, 7, 18, 0.7)',
  border: '1px solid rgba(0, 240, 255, 0.25)',
  borderRadius: '6px',
  color: '#fff',
  outline: 'none',
  fontSize: '13px',
  transition: 'border-color 0.3s'
};

export default Contact;
