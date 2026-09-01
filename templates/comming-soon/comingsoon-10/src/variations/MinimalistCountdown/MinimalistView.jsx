import React, { useState } from 'react';
import { Sparkles, Play, Calendar, MapPin, ArrowRight, ShieldCheck, Twitter, Github, Linkedin, Disc as Discord, ExternalLink, Cpu } from 'lucide-react';
import CountdownTimer from '../../components/common/CountdownTimer';
import EmailCapture from '../../components/common/EmailCapture';
import SocialProof from '../../components/common/SocialProof';
import FAQAccordion from '../../components/common/FAQAccordion';
import PartnerLogos from '../../components/common/PartnerLogos';
import './Minimalist.css';

export default function MinimalistView({
  data,
  onRegisterSuccess,
  onOpenVideoModal,
  onOpenSpeakerModal,
}) {
  return (
    <div className="theme-minimalist">
      {/* Background Graphic and Ambient Glow */}
      <div
        className="minimalist-hero-bg"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      />
      <div className="minimalist-ambient-glow" />

      {/* Hero Section */}
      <section className="min-hero-section">
        <div className="container">
          <div className="min-badge">
            <Cpu size={14} />
            <span>{data.badge}</span>
          </div>

          <h1 className="min-hero-title">{data.title}</h1>
          <p className="min-hero-tagline">{data.tagline}</p>

          {/* Centered High-Impact Monospace Countdown */}
          <CountdownTimer
            targetDate={data.targetDate}
            variant="minimalist"
            accentColor={data.accentColor}
          />

          {/* Email Capture Module */}
          <EmailCapture
            variant="minimalist"
            discountText={data.earlyBirdDiscount}
            deadlineText={data.earlyBirdDeadline}
            onRegisterSuccess={onRegisterSuccess}
          />

          {/* Social Proof Strip */}
          <SocialProof
            count={data.subscribersCount}
            variant="minimalist"
          />

          {/* Stats Grid */}
          <div className="min-stats-grid">
            {data.stats.map((st, idx) => (
              <div key={idx} className="min-stat-card">
                <div className="min-stat-value">{st.value}</div>
                <div className="min-stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Spotlight Section */}
      <section className="min-speakers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">
              <Sparkles size={14} />
              <span>KEYNOTE FACULTY</span>
            </span>
            <h2 className="section-title">Leading the Quantum Frontier</h2>
            <p className="section-subtitle">
              Hear directly from the world's foremost minds in topological qubits, optical neural synthesis, and autonomous swarm robotics.
            </p>
          </div>

          <div className="speakers-grid">
            {data.speakers.map((spk) => (
              <div
                key={spk.id}
                className="speaker-card"
                onClick={() => onOpenSpeakerModal(spk)}
              >
                <div className="speaker-photo-wrap">
                  <img
                    src={spk.image}
                    alt={`Portrait of ${spk.name}`}
                    className="speaker-photo"
                    loading="lazy"
                  />
                </div>
                <h3 className="speaker-name">{spk.name}</h3>
                <div className="speaker-role">{spk.role}</div>
                <div className="speaker-org">{spk.org}</div>
                <div className="speaker-topic-pill">
                  <span>{spk.topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser Video Section */}
      <section className="min-teaser-section">
        <div className="container">
          <div
            className="teaser-banner-card"
            onClick={() => onOpenVideoModal(data.teaser)}
          >
            <div className="teaser-thumbnail-container">
              <img
                src={data.teaser.thumbnail}
                alt={data.teaser.title}
                className="teaser-thumbnail-img"
                loading="lazy"
              />
              <div className="teaser-overlay">
                <div className="teaser-tag">{data.teaser.duration}</div>
                <div className="teaser-play-center">
                  <Play size={32} fill="currentColor" />
                </div>
                <div className="teaser-meta-bottom">
                  <h3>{data.teaser.title}</h3>
                  <p>{data.teaser.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="container">
        <FAQAccordion faqs={data.faqs} variant="minimalist" />
      </section>

      {/* Strategic Partners Marquee */}
      <PartnerLogos partners={data.partners} variant="minimalist" />

      {/* Footer */}
      <footer className="min-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4>{data.title}</h4>
              <p>
                The international benchmark convention for quantum engineers, autonomous systems researchers, and computing pioneers.
              </p>
            </div>
            <div className="footer-col">
              <h5>Event Logistics</h5>
              <ul className="footer-links">
                <li><a href="#sessions">Keynote Index</a></li>
                <li><a href="#virtual">Virtual Stage Access</a></li>
                <li><a href="#fellowships">Research Fellowships</a></li>
                <li><a href="#press">Press Accreditation</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Direct Inquiries</h5>
              <ul className="footer-links">
                <li><a href="mailto:delegates@quantumepoch.io">delegates@quantumepoch.io</a></li>
                <li><a href="#sponsor">Sponsorship Kit 2027</a></li>
                <li><a href="#privacy">Privacy & Protocol</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>© 2027 {data.title}. All sovereign rights reserved.</span>
            <span>Zero Tracking Protocol • Encrypted Registration</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
