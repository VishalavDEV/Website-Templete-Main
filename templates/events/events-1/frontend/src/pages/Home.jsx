import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import EventStats from '../components/EventStats';
import AboutSection from '../components/AboutSection';
import EventCard from '../components/EventCard';
import SpeakerCard from '../components/SpeakerCard';
import SpeakerModal from '../components/SpeakerModal';
import ScheduleTabs from '../components/ScheduleTabs';
import VenueSection from '../components/VenueSection';
import TicketCard from '../components/TicketCard';
import WhyAttend from '../components/WhyAttend';
import TestimonialSlider from '../components/TestimonialSlider';
import SponsorGrid from '../components/SponsorGrid';
import FAQAccordion from '../components/FAQAccordion';
import Newsletter from '../components/Newsletter';
import ContactForm from '../components/ContactForm';
import { eventsData } from '../data/events';
import { speakersData } from '../data/speakers';
import { ticketsData } from '../data/tickets';

export default function Home({ onOpenRegisterModal, savedSessionIds, onToggleBookmark, showToast }) {
  const [activeSpeakerModal, setActiveSpeakerModal] = useState(null);

  const featuredEvents = eventsData.slice(0, 3);
  const featuredSpeakers = speakersData.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <Hero onOpenRegisterModal={onOpenRegisterModal} />

      {/* Stats */}
      <EventStats />

      {/* About Preview */}
      <AboutSection />

      {/* Upcoming Events Preview */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">UPCOMING EVENTS</span>
            <h2 className="section-title">
              Discover Premier <span className="gradient-text">Conferences</span>
            </h2>
            <p className="section-subtitle">
              Browse top upcoming tech summits, artificial intelligence conventions, and startup galas.
            </p>
          </div>

          <div className="events-grid">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/events" className="btn btn-outline btn-lg">
              EXPLORE ALL EVENTS <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FEATURED SPEAKERS</span>
            <h2 className="section-title">
              Learn From Global <span className="gradient-text">Pioneers</span>
            </h2>
            <p className="section-subtitle">
              Hear directly from CTOs, AI researchers, cloud architects, and venture founders.
            </p>
          </div>

          <div className="speakers-grid">
            {featuredSpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                onSelectSpeaker={(sp) => setActiveSpeakerModal(sp)}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/speakers" className="btn btn-outline btn-lg">
              VIEW ALL 50+ SPEAKERS <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Speaker Modal */}
      {activeSpeakerModal && (
        <SpeakerModal
          speaker={activeSpeakerModal}
          onClose={() => setActiveSpeakerModal(null)}
        />
      )}

      {/* Schedule Preview */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">CONFERENCE AGENDA</span>
            <h2 className="section-title">
              Interactive 3-Day <span className="gradient-text">Schedule</span>
            </h2>
            <p className="section-subtitle">
              Explore sessions and click "Add to My Schedule" to build your custom conference itinerary.
            </p>
          </div>

          <ScheduleTabs
            savedSessionIds={savedSessionIds}
            onToggleBookmark={onToggleBookmark}
          />
        </div>
      </section>

      {/* Venue Section */}
      <VenueSection />

      {/* Ticket Plans */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">PASS OPTIONS</span>
            <h2 className="section-title">
              Get Your Eventora <span className="gradient-text">Pass</span>
            </h2>
            <p className="section-subtitle">
              Select the pass plan that fits your learning and career goals.
            </p>
          </div>

          <div className="tickets-grid">
            {ticketsData.map((plan) => (
              <TicketCard
                key={plan.id}
                plan={plan}
                onSelectPlan={() => onOpenRegisterModal(plan)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <WhyAttend />

      {/* Testimonials Carousel */}
      <TestimonialSlider />

      {/* Sponsors */}
      <SponsorGrid />

      {/* FAQ Accordion */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <FAQAccordion />
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter showToast={showToast} />

      {/* Contact Section Preview */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info-card">
              <span className="section-tag">CONTACT US</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                We're Here to <span className="gradient-text">Help You</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Have questions regarding team pass registrations, speaker proposals, or venue logistics?
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                <div>📍 Chennai Convention Centre, Tamil Nadu, India</div>
                <div>📧 hello@eventora.com</div>
                <div>📞 +91 98765 43210</div>
              </div>
            </div>

            <ContactForm showToast={showToast} />
          </div>
        </div>
      </section>
    </div>
  );
}
