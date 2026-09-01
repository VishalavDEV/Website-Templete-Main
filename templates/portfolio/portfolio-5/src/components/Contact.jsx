import React, { useState } from 'react';
import { Mail, MapPin, Globe, Share2, Send, CheckCircle } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Environmental Documentary',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', projectType: 'Environmental Documentary', message: '' });
      }, 6000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Subtle Background Natural Landscape Visual */}
      <div className="contact-bg-wrapper">
        <img src={PROFILE_DATA.heroImage} alt="Nature Sunset Silhouette" className="contact-bg-img" />
        <div className="contact-bg-overlay"></div>
      </div>

      <div className="container contact-container">
        <div className="contact-grid">
          {/* Left Column: Heading & Contact Info */}
          <div className="contact-info-col">
            <span className="chapter-badge">BEGIN A COLLABORATION</span>
            <h2 className="contact-main-heading">
              LET'S <br />
              TELL A STORY <br />
              <span className="heading-highlight">THAT MATTERS.</span>
            </h2>

            <p className="contact-lead-text">
              Open to documentary collaborations, visual storytelling projects, editorial assignments, and creative conversations across remote ecosystems.
            </p>

            <div className="contact-details-list">
              <div className="detail-item">
                <Mail className="detail-icon" size={18} />
                <div>
                  <span className="detail-label">DIRECT EMAIL</span>
                  <a href="mailto:hello@noaheverwood.example" className="detail-link">
                    hello@noaheverwood.example
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <MapPin className="detail-icon" size={18} />
                <div>
                  <span className="detail-label">BASE LOCATION</span>
                  <span className="detail-val">Queenstown, New Zealand</span>
                </div>
              </div>

              <div className="detail-item">
                <Globe className="detail-icon" size={18} />
                <div>
                  <span className="detail-label">PORTFOLIO NETWORK</span>
                  <span className="detail-val">Portfolio Network (Placeholder)</span>
                </div>
              </div>

              <div className="detail-item">
                <Share2 className="detail-icon" size={18} />
                <div>
                  <span className="detail-label">PROFESSIONAL NETWORK</span>
                  <span className="detail-val">LinkedIn (Placeholder)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-title">Send a Field Inquiry</h3>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle size={40} className="success-icon" />
                  <h4>Message Sent Successfully</h4>
                  <p>Thank you for reaching out. Noah will review your inquiry shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="minimal-contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder="e.g. sarah@foundation.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType">Project Category</label>
                    <select 
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option value="Environmental Documentary">Environmental Documentary</option>
                      <option value="Wildlife Expedition Photo Essay">Wildlife Expedition Photo Essay</option>
                      <option value="Editorial Print Assignment">Editorial Print Assignment</option>
                      <option value="Conservation Research Collaboration">Conservation Research Collaboration</option>
                      <option value="Speaking / Panel Discussion">Speaking / Panel Discussion</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details / Message</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      required 
                      placeholder="Tell us about the wilderness project, location, timeline, and story goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Send size={16} />
                    <span>Begin the Conversation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
