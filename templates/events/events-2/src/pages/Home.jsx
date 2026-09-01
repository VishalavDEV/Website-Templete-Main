import React from 'react';
import { Hero } from '../components/Hero';
import { EventStats } from '../components/EventStats';
import { AboutEvent } from '../components/AboutEvent';
import { WhyAttend } from '../components/WhyAttend';
import { Speakers } from '../components/Speakers';
import { Schedule } from '../components/Schedule';
import { PastEvents } from '../components/PastEvents';
import { Gallery } from '../components/Gallery';
import { Sponsors } from '../components/Sponsors';
import { Tickets } from '../components/Tickets';
import { Venue } from '../components/Venue';
import { FAQ } from '../components/FAQ';
import { Newsletter } from '../components/Newsletter';

export const Home = ({
  isCompletedMode,
  onOpenRegister,
  onNavigate,
  onSelectTicket
}) => {
  return (
    <div>
      <section id="home">
        <Hero
          isCompletedMode={isCompletedMode}
          onRegisterClick={onOpenRegister}
          onExploreClick={() => {
            const el = document.getElementById('why-attend');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreHighlights={() => onNavigate('past-events')}
        />
      </section>

      <EventStats />

      <section id="about">
        <AboutEvent />
        <div id="why-attend">
          <WhyAttend />
        </div>
      </section>

      <section id="events">
        <PastEvents onOpenGallery={() => onNavigate('gallery')} />
      </section>

      <section id="speakers">
        <Speakers onViewAll={() => onNavigate('speakers')} />
      </section>

      <section id="schedule">
        <Schedule />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <Sponsors />

      <Tickets onSelectTicket={(t) => { onSelectTicket(t); onOpenRegister(); }} />

      <section id="venue">
        <Venue />
      </section>

      <section id="contact">
        <FAQ />
        <Newsletter />
      </section>
    </div>
  );
};
