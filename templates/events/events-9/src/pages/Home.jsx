import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WeddingInfo from '../components/WeddingInfo';
import Countdown from '../components/Countdown';
import StoryPreview from '../components/StoryPreview';
import EventCard from '../components/EventCard';
import ScheduleTimeline from '../components/ScheduleTimeline';
import VenueSection from '../components/VenueSection';
import Gallery from '../components/Gallery';
import FamilyCard from '../components/FamilyCard';
import DressCode from '../components/DressCode';
import MenuSection from '../components/MenuSection';
import TravelCard from '../components/TravelCard';
import WishCard from '../components/WishCard';
import { weddingData } from '../data/weddingData';

export default function Home() {
  return (
    <div id="home">
      {/* HERO & WELCOME */}
      <Hero />
      <WeddingInfo />

      {/* COUNTDOWN */}
      <div id="countdown">
        <Countdown />
      </div>

      {/* OUR STORY PREVIEW */}
      <div id="our-story">
        <StoryPreview />
      </div>

      {/* WEDDING EVENTS */}
      <section id="events" className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">THE CELEBRATION</span>
            <h2 className="serif-title">WEDDING EVENTS</h2>
          </div>
          <div className="events-grid">
            {weddingData.events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE PREVIEW */}
      <section id="schedule" className="section-padding" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">TIMELINE</span>
            <h2 className="serif-title">THE SCHEDULE</h2>
          </div>
          <ScheduleTimeline limit={5} />
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/schedule" className="btn-secondary">
              VIEW FULL SCHEDULE →
            </Link>
          </div>
        </div>
      </section>

      {/* VENUE PREVIEW */}
      <div id="venue">
        <VenueSection />
      </div>

      {/* GALLERY PREVIEW */}
      <section id="gallery" className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">CAPTURED MOMENTS</span>
            <h2 className="serif-title">OUR GALLERY</h2>
          </div>
          <Gallery limit={6} />
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn-primary">
              VIEW ALL MEMORIES →
            </Link>
          </div>
        </div>
      </section>

      {/* FAMILY PREVIEW */}
      <section id="family" className="section-padding" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">WITH BOUNDLESS LOVE</span>
            <h2 className="serif-title">OUR FAMILIES</h2>
          </div>
          <div className="family-grid">
            {weddingData.family.bride.members.slice(0, 2).map((m, idx) => (
              <FamilyCard key={`b-${idx}`} member={m} />
            ))}
            {weddingData.family.groom.members.slice(0, 2).map((m, idx) => (
              <FamilyCard key={`g-${idx}`} member={m} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/family" className="btn-secondary">
              MEET ALL FAMILY MEMBERS →
            </Link>
          </div>
        </div>
      </section>

      {/* DRESS CODE PREVIEW */}
      <section id="dress-code" className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">ATTIRE GUIDE</span>
            <h2 className="serif-title">DRESS CODE</h2>
          </div>
          <DressCode />
        </div>
      </section>

      {/* FOOD & MENU PREVIEW */}
      <section id="menu" className="section-padding" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">ROYAL FEAST</span>
            <h2 className="serif-title">FOOD & MENU HIGHLIGHTS</h2>
          </div>
          <MenuSection />
        </div>
      </section>

      {/* TRAVEL & STAY PREVIEW */}
      <section id="travel" className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">ACCOMMODATIONS</span>
            <h2 className="serif-title">TRAVEL & STAY</h2>
          </div>
          <TravelCard />
        </div>
      </section>

      {/* WEDDING WISHES */}
      <section id="wishes" className="section-padding" style={{ backgroundColor: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">GUESTBOOK</span>
            <h2 className="serif-title">WEDDING WISHES</h2>
          </div>
          <WishCard />
        </div>
      </section>

      {/* FINAL RSVP CTA SECTION */}
      <section id="rsvp" className="section-padding text-center" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--dark)', color: 'var(--cream)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 5, maxWidth: '800px' }}>
          <span className="section-label" style={{ color: 'var(--accent)' }}>YOUR PRESENCE MATTERS</span>
          <h2 className="serif-title" style={{ color: 'var(--cream)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.5rem' }}>
            WE WOULD LOVE TO CELEBRATE WITH YOU.
          </h2>
          <p style={{ color: 'var(--border)', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
            Your presence will make our celebration even more special.
          </p>
          <Link to="/rsvp" className="btn-accent" style={{ padding: '1.1rem 3rem', fontSize: '0.85rem' }}>
            RSVP NOW
          </Link>
        </div>
      </section>
    </div>
  );
}
