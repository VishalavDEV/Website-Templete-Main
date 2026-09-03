import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Award, TrendingUp, Heart, Lightbulb, Shield } from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from '../components/SocialIcons/SocialIcons';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import StatsCounter from '../components/StatsCounter/StatsCounter';
import Button from '../components/Button/Button';
import { stats, values } from '../data/stats';
import { team, timeline } from '../data/team';
import './About.css';

// Icon map for value icons
import { Target, Users } from 'lucide-react';
const valueIconMap = { Target, Users, Lightbulb, Shield };

const differentiators = [
  'No offshore-only teams — senior engineers on every project',
  'Business-outcome focused, not feature-factory model',
  'Fixed-scope or time-and-materials — you choose',
  'Transparent reporting and weekly stakeholder syncs',
  'Security-first engineering built into every sprint',
  'Post-launch support included as standard',
];

const About = () => {
  return (
    <main id="main-content" className="about-page">
      {/* ─── Page Hero ─── */}
      <section className="page-hero" aria-label="About NeXus Digital">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__blob page-hero__blob--1" />
          <div className="page-hero__blob page-hero__blob--2" />
        </div>
        <div className="container">
          <motion.div
            className="page-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">About Us</span>
            <h1 className="page-hero__title font-display">
              We Are <span className="text-gradient">NeXus Digital</span>
            </h1>
            <p className="page-hero__subtitle">
              A global technology company on a mission to make enterprise-grade engineering accessible to every ambitious business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Intro & Mission/Vision ─── */}
      <section className="section" aria-label="Company introduction">
        <div className="container">
          <div className="about__intro-grid">
            <ScrollReveal direction="left">
              <div className="about__intro-text">
                <span className="section-tag">Our Story</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Built by Engineers, <span className="text-gradient">Obsessed with Outcomes</span>
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Founded in 2016 in Bangalore, NeXus Digital started with a simple but powerful belief: that world-class technology should not be the exclusive domain of companies with billion-dollar R&D budgets.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                  Today, we are a global team of 250+ engineers, designers, and strategists serving 200+ enterprise clients across 30+ countries. We've helped businesses in fintech, healthcare, retail, logistics, and government harness technology as a genuine competitive weapon.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="about__mv-cards">
                <div className="about__mv-card">
                  <div className="about__mv-icon"><Target size={20} /></div>
                  <h3 className="about__mv-title">Our Mission</h3>
                  <p className="about__mv-text">
                    To engineer digital transformation that creates lasting, measurable business value — delivered by teams that genuinely care about the outcome.
                  </p>
                </div>
                <div className="about__mv-card about__mv-card--accent">
                  <div className="about__mv-icon"><Globe size={20} /></div>
                  <h3 className="about__mv-title">Our Vision</h3>
                  <p className="about__mv-text">
                    A world where any business, regardless of size, can access the technology capabilities that were once only available to the largest corporations on earth.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="section-sm about__stats" aria-label="Company statistics">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <StatsCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section className="section" aria-label="Core values">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Core Values</span>
              <h2 className="section-title">
                The Principles That <span className="text-gradient">Guide Everything We Do</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid-4">
            {values.map((value, i) => {
              const IconComp = valueIconMap[value.icon] || Target;
              return (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <div className="about__value-card" style={{ '--accent': value.color }}>
                    <div className="about__value-icon"><IconComp size={20} /></div>
                    <h3 className="about__value-title">{value.title}</h3>
                    <p className="about__value-desc">{value.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="section about__timeline-section" aria-label="Company journey">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Our Journey</span>
              <h2 className="section-title">
                From Startup to <span className="text-gradient">Global Leader</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="about__timeline">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`about__timeline-item ${i % 2 !== 0 ? 'about__timeline-item--right' : ''}`}>
                  <div className="about__timeline-card">
                    <span className="about__timeline-year">{item.year}</span>
                    <h3 className="about__timeline-title">{item.title}</h3>
                    <p className="about__timeline-desc">{item.description}</p>
                  </div>
                  <div className="about__timeline-dot" aria-hidden="true" />
                </div>
              </ScrollReveal>
            ))}
            <div className="about__timeline-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="section" aria-label="Our team">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">The Team</span>
              <h2 className="section-title">
                Meet the <span className="text-gradient">People Behind the Work</span>
              </h2>
              <p className="section-subtitle">
                Our leadership team brings decades of combined experience from Google, Amazon, Goldman Sachs, and world-class startups.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.08}>
                <article className="about__team-card">
                  <div
                    className="about__team-avatar"
                    style={{ background: `linear-gradient(135deg, ${member.avatarColor}, ${member.avatarColor}88)` }}
                    aria-hidden="true"
                  >
                    {member.avatar}
                  </div>
                  <div className="about__team-info">
                    <h3 className="about__team-name">{member.name}</h3>
                    <p className="about__team-role">{member.role}</p>
                    <p className="about__team-bio">{member.bio}</p>
                    <div className="about__team-socials">
                      <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`} className="about__team-social">
                        <LinkedinIcon size={14} />
                      </a>
                      <a href={member.twitter} aria-label={`${member.name} on Twitter`} className="about__team-social">
                        <TwitterIcon size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Differentiators ─── */}
      <section className="section about__diff-section" aria-label="What makes us different">
        <div className="container">
          <div className="about__diff-grid">
            <ScrollReveal direction="left">
              <div>
                <span className="section-tag">Why Different</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Not Just Another <span className="text-gradient">Agency</span>
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  The technology services landscape is crowded. Here is what sets NeXus Digital apart from every other option on your shortlist.
                </p>
                <Link to="/contact">
                  <Button variant="primary" size="md" icon={<ArrowRight size={16} />}>
                    Let's Talk
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <ul className="about__diff-list">
                {differentiators.map((item, i) => (
                  <motion.li
                    key={i}
                    className="about__diff-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <CheckCircle size={16} className="about__diff-icon" aria-hidden="true" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
