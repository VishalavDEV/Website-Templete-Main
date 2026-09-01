import React from 'react';
import { Sparkles, Play, Palette, Zap, ArrowRight, Star, Heart, Instagram, Youtube, Globe, Disc as Discord } from 'lucide-react';
import CountdownTimer from '../../components/common/CountdownTimer';
import EmailCapture from '../../components/common/EmailCapture';
import SocialProof from '../../components/common/SocialProof';
import FAQAccordion from '../../components/common/FAQAccordion';
import PartnerLogos from '../../components/common/PartnerLogos';
import './Vibrant.css';

export default function VibrantView({
  data,
  onRegisterSuccess,
  onOpenVideoModal,
  onOpenSpeakerModal,
}) {
  return (
    <div className="theme-vibrant">
      {/* Background Mesh and Shapes */}
      <div className="vibrant-mesh-bg" />
      <div
        className="vibrant-hero-image-bg"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      />

      {/* Hero Section */}
      <section className="vib-hero-section">
        <div className="container">
          <div className="vib-hero-grid">
            {/* Left Column: Headline, Countdown, Stickers */}
            <div className="vib-hero-left">
              <div className="vib-badge">
                <Zap size={14} />
                <span>{data.badge}</span>
              </div>

              <h1 className="vib-hero-title">{data.title}</h1>
              <p className="vib-hero-tagline">{data.tagline}</p>

              {/* Floating Sticker Accents */}
              <div className="floating-stickers-wrap">
                <span className="sticker-pill">🔥 32 Live Masterclasses</span>
                <span className="sticker-pill">🎨 $250k Creator Grants</span>
                <span className="sticker-pill">⚡ Unreal 6 & AI Pipelines</span>
              </div>

              {/* Dynamic Countdown */}
              <CountdownTimer
                targetDate={data.targetDate}
                variant="vibrant"
                accentColor={data.accentColor}
              />
            </div>

            {/* Right Column: Interactive Registration Card */}
            <div className="vib-hero-right">
              <div className="vib-hero-card">
                <h3 className="card-title-vibrant">Claim Early Creator Pass</h3>
                <p className="card-desc-vibrant">
                  Get instant access to 500+ GB of 3D procedural materials, live workshop streaming, and entry into the 2027 Tokyo Creator Jam.
                </p>

                <EmailCapture
                  variant="vibrant"
                  discountText={data.earlyBirdDiscount}
                  deadlineText={data.earlyBirdDeadline}
                  onRegisterSuccess={onRegisterSuccess}
                />

                <SocialProof
                  count={data.subscribersCount}
                  variant="vibrant"
                />
              </div>
            </div>
          </div>

          {/* Stats Ribbon */}
          <div className="vib-stats-ribbon">
            {data.stats.map((st, idx) => (
              <div key={idx} className="vib-stat-item">
                <div className="vib-stat-num">{st.value}</div>
                <div className="vib-stat-desc">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers Grid */}
      <section className="vib-speakers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-pill" style={{ borderColor: '#ff007a', color: '#ff80bf' }}>
              <Palette size={14} />
              <span>VISUAL VISIONARIES</span>
            </span>
            <h2 className="section-title">World Builders & Creative Directors</h2>
            <p className="section-subtitle">
              Learn cutting-edge real-time motion design, neural generative aesthetics, and spatial UX from visionary leaders.
            </p>
          </div>

          <div className="speakers-grid-vibrant">
            {data.speakers.map((spk) => (
              <div
                key={spk.id}
                className="speaker-card-vibrant"
                onClick={() => onOpenSpeakerModal(spk)}
              >
                <div className="speaker-photo-wrap-vibrant">
                  <img
                    src={spk.image}
                    alt={`Portrait of ${spk.name}`}
                    className="speaker-photo-vibrant"
                    loading="lazy"
                  />
                </div>
                <h3 className="speaker-name-vibrant">{spk.name}</h3>
                <div className="speaker-role-vibrant">{spk.role}</div>
                <div className="speaker-tag-vibrant">{spk.topic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Trailer Teaser */}
      <section className="vib-teaser-section">
        <div className="container">
          <div
            className="teaser-card-vibrant"
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
                <div className="teaser-tag" style={{ background: 'rgba(255,0,122,0.3)', color: '#fff', borderColor: '#ff007a' }}>
                  {data.teaser.duration}
                </div>
                <div className="teaser-play-vibrant">
                  <Play size={34} fill="currentColor" />
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

      {/* FAQ Section */}
      <section className="container">
        <FAQAccordion faqs={data.faqs} variant="vibrant" />
      </section>

      {/* Strategic Partners */}
      <PartnerLogos partners={data.partners} variant="vibrant" />

      {/* Footer */}
      <footer className="vib-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4>{data.title}</h4>
              <p>
                Empowering the next generation of visual storytellers, 3D world builders, and creative technologists worldwide.
              </p>
            </div>
            <div className="footer-col">
              <h5>Tracks & Labs</h5>
              <ul className="footer-links">
                <li><a href="#labs">Unreal & Unity 6 Stage</a></li>
                <li><a href="#ai">Generative Diffusion Lab</a></li>
                <li><a href="#spatial">Apple Vision & Spatial UX</a></li>
                <li><a href="#showcase">Student Art Gallery</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Creative Community</h5>
              <ul className="footer-links">
                <li><a href="#discord">Join Community Discord</a></li>
                <li><a href="#grants">Submit Portfolio for Grant</a></li>
                <li><a href="#press">Media & Creator Passes</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>© 2027 Creative Horizons Collective. Crafted for visual innovators.</span>
            <span>Tokyo • Metaverse • Worldwide</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
