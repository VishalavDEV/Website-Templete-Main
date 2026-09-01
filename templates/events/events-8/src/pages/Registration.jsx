import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import confetti from 'canvas-confetti';
import { CheckCircle2, ShieldCheck, Zap, Terminal, Sparkles, User, Mail, Phone, School, BookOpen, Users, Code, Github, Linkedin, Utensils, AlertCircle } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    course: 'B.Tech / B.E. Computer Science',
    year: '3rd Year',
    teamName: '',
    teamSize: '3',
    skills: '',
    github: '',
    linkedin: '',
    projectInterest: 'AI & Machine Learning',
    foodPref: 'Vegetarian',
    emergencyContact: '',
    termsAgreed: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAgreed) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00ff66', '#00f0ff', '#ffffff']
      });
    } catch (err) {
      console.log('Confetti triggered');
    }

    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Hero */}
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● HACKER REGISTRATION</div>
          <GlitchText text="EVENT REGISTRATION" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Reserve your team slot for NEXORA AFTERDARK 2026. Limited to 500 hacker slots.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          {submitted ? (
            /* Futuristic Success Screen */
            <div
              className="cyber-card pulse-glow"
              style={{
                padding: '3.5rem 2rem',
                backgroundColor: 'rgba(10, 16, 12, 0.95)',
                border: '2px solid #00ff66',
                textAlign: 'center'
              }}
            >
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-br" />

              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 255, 102, 0.2)',
                  border: '2px solid #00ff66',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00ff66',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '0 0 30px #00ff66'
                }}
              >
                <CheckCircle2 size={48} />
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: '#00ff66',
                  marginBottom: '0.5rem',
                  letterSpacing: '2px'
                }}
                className="glitch-effect"
              >
                REGISTRATION RECEIVED
              </div>

              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '4px' }}>
                WELCOME TO THE NIGHT.
              </h2>

              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                Your hacker access credentials and team confirmation pass have been dispatched to <strong style={{ color: '#00ff66' }}>{formData.email}</strong>. Prepare your laptops for Oct 18, 2026 at Nexora Innovation Lab, Chennai!
              </p>

              <div
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  backgroundColor: 'rgba(0, 255, 102, 0.1)',
                  border: '1px solid #00ff66',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: '#00ff66',
                  marginBottom: '2rem'
                }}
              >
                TICKET ID: #NEXORA-AFTERDARK-2026-{Math.floor(1000 + Math.random() * 9000)}
              </div>

              <div>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ padding: '0.85rem 2rem' }}>
                  SUBMIT ANOTHER REGISTRATION
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <div className="cyber-card" style={{ padding: '2.5rem', backgroundColor: 'rgba(10, 16, 12, 0.9)' }}>
              <div className="cyber-corner-tl" />
              <div className="cyber-corner-br" />

              <form onSubmit={handleSubmit}>
                {/* SECTION 1: PERSONAL INFORMATION */}
                <h3 style={{ fontSize: '1.2rem', color: '#00ff66', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem', borderBottom: '1px solid rgba(0, 255, 102, 0.2)', paddingBottom: '0.5rem' }}>
                  1. CAPTAIN & PERSONAL INFORMATION
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Vikramaditya Roy"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="cyber-input"
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="vikram@college.edu"
                      value={formData.email}
                      onChange={handleChange}
                      className="cyber-input"
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="cyber-input"
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      EMERGENCY CONTACT PHONE *
                    </label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      placeholder="+91 98765 00000"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="cyber-input"
                      required
                    />
                  </div>
                </div>

                {/* SECTION 2: ACADEMIC DETAILS */}
                <h3 style={{ fontSize: '1.2rem', color: '#00ff66', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem', borderBottom: '1px solid rgba(0, 255, 102, 0.2)', paddingBottom: '0.5rem' }}>
                  2. ACADEMIC & COLLEGE DETAILS
                </h3>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                    COLLEGE / UNIVERSITY NAME *
                  </label>
                  <input
                    type="text"
                    name="college"
                    placeholder="e.g. Indian Institute of Technology Madras"
                    value={formData.college}
                    onChange={handleChange}
                    className="cyber-input"
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      COURSE / DEGREE *
                    </label>
                    <input
                      type="text"
                      name="course"
                      placeholder="e.g. B.Tech Computer Science & AI"
                      value={formData.course}
                      onChange={handleChange}
                      className="cyber-input"
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      YEAR OF STUDY *
                    </label>
                    <select name="year" value={formData.year} onChange={handleChange} className="cyber-input">
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>
                </div>

                {/* SECTION 3: TEAM & TECHNICAL DETAILS */}
                <h3 style={{ fontSize: '1.2rem', color: '#00ff66', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem', borderBottom: '1px solid rgba(0, 255, 102, 0.2)', paddingBottom: '0.5rem' }}>
                  3. TEAM & TECHNICAL DETAILS
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      TEAM NAME *
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      placeholder="e.g. Neural Ninjas"
                      value={formData.teamName}
                      onChange={handleChange}
                      className="cyber-input"
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      TEAM SIZE (2 - 4 MEMBERS) *
                    </label>
                    <select name="teamSize" value={formData.teamSize} onChange={handleChange} className="cyber-input">
                      <option value="2">2 Members</option>
                      <option value="3">3 Members</option>
                      <option value="4">4 Members</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                    PRIMARY SKILLS & TECH STACK *
                  </label>
                  <input
                    type="text"
                    name="skills"
                    placeholder="e.g. React, Python, PyTorch, Rust, Docker, Figma"
                    value={formData.skills}
                    onChange={handleChange}
                    className="cyber-input"
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      GITHUB PROFILE LINK *
                    </label>
                    <input
                      type="url"
                      name="github"
                      placeholder="https://github.com/yourhandle"
                      value={formData.github}
                      onChange={handleChange}
                      className="cyber-input"
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      LINKEDIN PROFILE LINK
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      placeholder="https://linkedin.com/in/yourhandle"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="cyber-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      PROJECT TRACK INTEREST *
                    </label>
                    <select name="projectInterest" value={formData.projectInterest} onChange={handleChange} className="cyber-input">
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Web & App Development">Web & App Development</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="FinTech">FinTech</option>
                      <option value="HealthTech">HealthTech</option>
                      <option value="Sustainability">Sustainability</option>
                      <option value="Smart Cities">Smart Cities</option>
                      <option value="Open Innovation">Open Innovation</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      FOOD PREFERENCE *
                    </label>
                    <select name="foodPref" value={formData.foodPref} onChange={handleChange} className="cyber-input">
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                      <option value="Jain / Vegan">Jain / Vegan</option>
                    </select>
                  </div>
                </div>

                {/* TERMS CHECKBOX */}
                <div style={{ marginBottom: '2rem' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      color: '#cbd5e1',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <input
                      type="checkbox"
                      name="termsAgreed"
                      checked={formData.termsAgreed}
                      onChange={handleChange}
                      style={{ width: '18px', height: '18px', accentColor: '#00ff66', cursor: 'pointer' }}
                      required
                    />
                    <span>
                      I agree to the Hackathon Rules, Code of Conduct, and confirm that all members of my team are currently enrolled students.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.termsAgreed}
                  className="btn btn-primary interactive pulse-glow"
                  style={{
                    width: '100%',
                    padding: '1.1rem',
                    fontSize: '1.05rem',
                    opacity: formData.termsAgreed ? 1 : 0.4
                  }}
                >
                  <Zap size={20} /> REGISTER FOR NEXORA AFTERDARK
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Registration;
