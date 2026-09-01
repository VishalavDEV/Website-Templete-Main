import React from 'react';
import { Crown, Play, Award, Feather, ArrowRight, ShieldCheck, Mail, Globe, BookOpen } from 'lucide-react';
import CountdownTimer from '../../components/common/CountdownTimer';
import EmailCapture from '../../components/common/EmailCapture';
import SocialProof from '../../components/common/SocialProof';
import FAQAccordion from '../../components/common/FAQAccordion';
import PartnerLogos from '../../components/common/PartnerLogos';
import './Elegant.css';

export default function ElegantView({
  data,
  onRegisterSuccess,
  onOpenVideoModal,
  onOpenSpeakerModal,
}) {
  return (
    <div className="theme-elegant">
      {/* Background Ambience */}
      <div
        className="elegant-hero-bg"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      />
      <div className="elegant-ambient-light" />

      {/* Hero Section */}
      <section className="ele-hero-section">
        <div className="container">
          <div className="ele-badge-bar">
            <Crown size={15} />
            <span>{data.badge}</span>
          </div>

          <h1 className="ele-hero-title">
            The <em>Aethelgard</em> Global Forum
          </h1>
          <p className="ele-hero-tagline">{data.tagline}</p>

          {/* Roman / Serif Countdown */}
          <CountdownTimer
            targetDate={data.targetDate}
            variant="elegant"
            accentColor={data.accentColor}
          />

          {/* Curated Invitation Application */}
          <div className="ele-curated-card">
            <EmailCapture
              variant="elegant"
              discountText={data.earlyBirdDiscount}
              deadlineText={data.earlyBirdDeadline}
              onRegisterSuccess={onRegisterSuccess}
            />

            <SocialProof
              count={data.subscribersCount}
              variant="elegant"
            />
          </div>
        </div>
      </section>

      {/* Stats Matrix */}
      <section className="container">
        <div className="ele-stats-matrix">
          {data.stats.map((st, idx) => (
            <div key={idx} className="ele-stat-box">
              <div className="ele-stat-val">{st.value}</div>
              <div className="ele-stat-lbl">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Distinguished Speakers Grid */}
      <section className="ele-speakers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-pill" style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#d4af37' }}>
              <Feather size={14} />
              <span>ACADEMIC & DIPLOMATIC FELLOWS</span>
            </span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>
              Distinguished Faculty & Plenary Speakers
            </h2>
            <p className="section-subtitle">
              Convening heads of international policy institutes, senior macroeconomic strategists, and sovereign infrastructure architects.
            </p>
          </div>

          <div className="speakers-grid-elegant">
            {data.speakers.map((spk) => (
              <div
                key={spk.id}
                className="speaker-card-elegant"
                onClick={() => onOpenSpeakerModal(spk)}
              >
                <div className="speaker-photo-wrap-elegant">
                  <img
                    src={spk.image}
                    alt={`Portrait of ${spk.name}`}
                    className="speaker-photo-elegant"
                    loading="lazy"
                  />
                </div>
                <h3 className="speaker-name-elegant">{spk.name}</h3>
                <div className="speaker-role-elegant">{spk.role}</div>
                <div className="speaker-topic-elegant">"{spk.topic}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Video Teaser */}
      <section className="ele-teaser-section">
        <div className="container">
          <div
            className="teaser-banner-card teaser-card-elegant"
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
                <div className="teaser-tag" style={{ borderColor: '#d4af37', color: '#d4af37' }}>
                  {data.teaser.duration}
                </div>
                <div className="teaser-play-center teaser-play-elegant">
                  <Play size={28} fill="currentColor" />
                </div>
                <div className="teaser-meta-bottom">
                  <h3 style={{ fontFamily: 'var(--font-serif)' }}>{data.teaser.title}</h3>
                  <p>{data.teaser.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container">
        <FAQAccordion faqs={data.faqs} variant="elegant" />
      </section>

      {/* Sovereign Partners Marquee */}
      <PartnerLogos partners={data.partners} variant="elegant" />

      {/* Footer */}
      <footer className="ele-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4 style={{ fontFamily: 'var(--font-serif)' }}>{data.title}</h4>
              <p>
                Convened under the patronage of sovereign research institutions and economic policy foundations. Operating under the Chatham House Rule.
              </p>
            </div>
            <div className="footer-col">
              <h5>Governance & Whitepapers</h5>
              <ul className="footer-links">
                <li><a href="#proceedings">2026 Proceedings Archive</a></li>
                <li><a href="#chatham">Chatham House Protocol</a></li>
                <li><a href="#delegations">Diplomatic Delegations</a></li>
                <li><a href="#fellowships">Fellowship Grants</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Secretariat Inquiries</h5>
              <ul className="footer-links">
                <li><a href="mailto:secretariat@aethelgard.org">secretariat@aethelgard.org</a></li>
                <li><a href="#security">Cryptographic Verification</a></li>
                <li><a href="#legal">Legal & Compliance Notice</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>© 2027 Aethelgard Global Forum Secretariat. All diplomatic rights reserved.</span>
            <span>London • Geneva • Confidential Working Session</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
