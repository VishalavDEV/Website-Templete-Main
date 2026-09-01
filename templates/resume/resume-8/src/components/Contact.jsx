import React, { useState } from 'react';
import { Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Creative Direction',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', projectType: 'Creative Direction', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-layout">
        <div className="contact-left-col">
          <div className="section-label">
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="contact-heading">
            LET'S CREATE<br />THE NEXT<br />CHAPTER.
          </h2>

          <p className="contact-subtext">
            Open to creative direction, fashion design collaborations, editorial concepts, and new visual conversations across Berlin, Paris, and globally.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-block">
              <span className="contact-info-label">DIRECT EMAIL</span>
              <a href="mailto:hello@elaravoss.example" className="contact-info-val">
                hello@elaravoss.example
              </a>
            </div>

            <div className="contact-info-block">
              <span className="contact-info-label">STUDIO LOCATION</span>
              <span className="contact-info-val">Berlin, Germany</span>
            </div>

            <div className="contact-info-block">
              <span className="contact-info-label">PROFESSIONAL NETWORK</span>
              <a href="#contact" className="contact-info-val" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-right-col">
          {formSubmitted ? (
            <div className="form-success-msg">
              Thank you for initiating the conversation. Elara Voss or the studio team will respond within two business days.
            </div>
          ) : (
            <form className="editorial-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">YOUR NAME</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Helena Vance"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. helena@fashionhouse.example"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">COMPANY / STUDIO</label>
                <input 
                  type="text" 
                  placeholder="e.g. Maison Atelier"
                  className="form-input"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">PROJECT TYPE</label>
                <select 
                  className="form-input"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="Creative Direction">Creative Direction</option>
                  <option value="Capsule Collection Design">Capsule Collection Design</option>
                  <option value="Material & Textile Innovation">Material & Textile Innovation</option>
                  <option value="Editorial Concept">Editorial Concept</option>
                  <option value="Other Advisory">Other Advisory</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">YOUR MESSAGE</label>
                <textarea 
                  required
                  placeholder="Tell us about your upcoming project or concept..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-editorial-primary" style={{ marginTop: '1rem' }}>
                <span>Start a Conversation</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
