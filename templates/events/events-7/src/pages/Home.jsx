import React from 'react';
import { Link } from 'react-router-dom';
import HeroVideo from '../components/HeroVideo';
import Countdown from '../components/Countdown';
import RaceCard from '../components/RaceCard';
import Stats from '../components/Stats';
import RouteMap from '../components/RouteMap';
import ScheduleTimeline from '../components/ScheduleTimeline';
import ParticipantCard from '../components/ParticipantCard';
import FinishLine from '../components/FinishLine';
import GalleryGrid from '../components/GalleryGrid';
import SponsorCard from '../components/SponsorCard';
import ScrollReveal from '../components/ScrollReveal';

import { RACE_CATEGORIES } from '../data/races';
import { RUNNER_STORIES } from '../data/participants';
import { SPONSORS_DATA } from '../data/sponsors';
import { Heart, Trophy, Users, ShieldCheck, Flame, ArrowRight, Volume2, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* 1. HERO VIDEO */}
      <div id="hero">
        <HeroVideo />
      </div>

      {/* 2. LIVE EVENT COUNTDOWN */}
      <div id="countdown">
        <Countdown />
      </div>

      {/* 3. RACE CATEGORIES */}
      <section id="races" style={{ padding: '90px 24px', background: 'var(--bg-midnight)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>
                SELECT YOUR RACE
              </div>
              <h2 className="section-title">CHOOSE YOUR DISTANCE</h2>
              <p style={{ color: 'var(--soft-grey)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
                Four certified race categories tailored for elite athletes, weekend runners, friends, and families.
              </p>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px'
          }}>
            {RACE_CATEGORIES.map((race, index) => (
              <ScrollReveal key={race.id} direction="up" delay={index * 100}>
                <RaceCard race={race} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MARATHON INTRODUCTION — MORE THAN A RACE */}
      <section id="about" style={{ padding: '90px 24px', background: 'linear-gradient(180deg, #090A0D 0%, #15171B 100%)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Left Image */}
            <ScrollReveal direction="left">
              <div className="glass-panel" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', padding: '12px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=80" 
                  alt="Marathon Runners"
                  style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: '12px' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  background: 'rgba(9,10,13,0.9)',
                  padding: '16px 24px',
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--marathon-red)'
                }}>
                  <div className="font-display text-gradient-fire" style={{ fontSize: '2rem', lineHeight: 1 }}>
                    25,000+ RUNNERS
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--soft-grey)', textTransform: 'uppercase' }}>
                    CHENNAI CITY ROADS
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Story Content */}
            <ScrollReveal direction="right">
              <div>
                <div className="section-tag">ABOUT VAYORA</div>
                <h2 className="section-title" style={{ marginBottom: '20px' }}>
                  MORE THAN A RACE.
                </h2>
                <p style={{ color: 'var(--warm-white)', opacity: 0.9, fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Vayora Runfest is a city marathon experience designed to bring runners, families, communities and supporters together on one unforgettable road.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                  <div style={{ borderLeft: '2px solid var(--bright-orange)', paddingLeft: '14px' }}>
                    <h4 style={{ color: '#FFFFFF', fontWeight: 800 }}>Fitness & Grit</h4>
                    <p style={{ color: 'var(--soft-grey)', fontSize: '0.85rem' }}>Pushing limits kilometer after kilometer.</p>
                  </div>
                  <div style={{ borderLeft: '2px solid var(--marathon-red)', paddingLeft: '14px' }}>
                    <h4 style={{ color: '#FFFFFF', fontWeight: 800 }}>Community Pride</h4>
                    <p style={{ color: 'var(--soft-grey)', fontSize: '0.85rem' }}>The city uniting to cheer you forward.</p>
                  </div>
                </div>

                <Link to="/about" className="btn-primary">
                  OUR STORY & MISSION <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. WHY RUN VAYORA & STATISTICS */}
      <div id="stats">
        <Stats />
      </div>

      {/* 6. ROUTE PREVIEW */}
      <div id="route">
        <RouteMap />
      </div>

      {/* 7. EVENT SCHEDULE */}
      <div id="schedule">
        <ScheduleTimeline />
      </div>

      {/* 8. CROWD CHEERING SECTION */}
      <section id="cheer" style={{
        position: 'relative',
        padding: '100px 24px',
        background: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80") center/cover no-repeat',
        textAlign: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,10,13,0.88)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            <Volume2 size={14} /> CHEERING ATMOSPHERE
          </div>
          <h2 className="font-display text-gradient-fire" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', marginBottom: '16px' }}>
            THE CITY RUNS WITH YOU.
          </h2>
          <p style={{ color: 'var(--warm-white)', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '32px' }}>
            “Every step is louder when thousands of voices are cheering you forward.”
          </p>
        </div>
      </section>

      {/* 9. RUNNER STORIES / PARTICIPANTS */}
      <section id="participants" style={{ padding: '90px 24px', background: 'var(--bg-midnight)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>
                COMMUNITY STORIES
              </div>
              <h2 className="section-title">MEET THE RUNNERS</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {RUNNER_STORIES.map(story => (
              <ScrollReveal key={story.id} direction="up">
                <ParticipantCard story={story} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINISH-LINE FEATURE */}
      <div id="finish">
        <FinishLine />
      </div>

      {/* 11. SPONSORS */}
      <section id="sponsors" style={{ padding: '80px 24px', background: '#15171B' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            PARTNERS & SPONSORS
          </div>
          <h2 className="section-title" style={{ marginBottom: '40px' }}>POWERED BY PARTNERS</h2>

          <div style={{ marginBottom: '30px' }}>
            <SponsorCard sponsor={SPONSORS_DATA.titlePartner} tier="title" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {SPONSORS_DATA.goldPartners.map((sp, idx) => (
              <SponsorCard key={idx} sponsor={sp} tier="gold" />
            ))}
          </div>
        </div>
      </section>

      {/* 12. GALLERY */}
      <section id="gallery" style={{ padding: '90px 24px', background: '#090A0D' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>
              CINEMATIC GALLERY
            </div>
            <h2 className="section-title">MOMENTS OF GLORY</h2>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* 13. REGISTRATION & CONTACT CTA */}
      <section id="contact" style={{
        position: 'relative',
        padding: '100px 24px',
        background: 'linear-gradient(135deg, rgba(233,43,43,0.2) 0%, rgba(255,107,44,0.2) 100%), #090A0D',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,107,44,0.3)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge-tag" style={{ marginBottom: '16px' }}>
            SUNDAY, 15 NOVEMBER 2026 • CHENNAI
          </div>
          <h2 className="font-display text-gradient-fire" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 0.95, marginBottom: '20px' }}>
            YOUR FINISH LINE IS WAITING.
          </h2>
          <p style={{ color: 'var(--warm-white)', fontSize: '1.15rem', marginBottom: '36px' }}>
            Join 25,000+ runners on Chennai's iconic marathon road. Secure your official bib and t-shirt today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn-primary" style={{ padding: '18px 48px', fontSize: '1.1rem' }}>
              REGISTER NOW <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary" style={{ padding: '18px 36px', fontSize: '1.1rem' }}>
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
