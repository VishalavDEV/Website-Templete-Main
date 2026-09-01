import React from 'react';
import EventCard from '../components/EventCard';

export default function Events() {
  const experiences = [
    {
      id: 1,
      title: 'MIDNIGHT ECHO',
      genre: 'MAIN CONCERT FESTIVAL',
      date: '24 October 2026',
      time: '6:00 PM - 2:00 AM',
      venue: 'Aurora Sound Arena (Main Stage)',
      description: 'The centerpiece festival experience featuring Lyra Voss, The Silver Room, Mira Vale, and 15,000 music lovers under the stars.',
      price: 1499,
      image: '/images/hero_performer.jpg',
    },
    {
      id: 2,
      title: 'GOLDEN FREQUENCY',
      genre: 'ELECTRONIC & SYNTH',
      date: '24 October 2026',
      time: '11:00 PM - 2:00 AM',
      venue: 'Afterdark Stage',
      description: 'An immersive dark techno and synth-wave session led by Kael Nova and Nova Kai with synchronized golden laser displays.',
      price: 1499,
      image: '/images/dj_performer.jpg',
    },
    {
      id: 3,
      title: 'AFTERGLOW DJ SESSION',
      genre: 'LATE-NIGHT CLUBBING',
      date: '25 October 2026',
      time: '12:00 AM - 3:00 AM',
      venue: 'VIP Lounge Arena',
      description: 'Exclusive late-night DJ sets for VIP & Premium ticket holders with craft cocktails and live ambient beats.',
      price: 2999,
      image: '/images/dj_performer.jpg',
    },
    {
      id: 4,
      title: 'UNPLUGGED SOUL',
      genre: 'ACOUSTIC & INDIE',
      date: '24 October 2026',
      time: '5:30 PM - 8:00 PM',
      venue: 'Echo Stage',
      description: 'Intimate acoustic sessions from indie singer-songwriters Elio Vane and Aria Noir under warm golden spotlights.',
      price: 1499,
      image: '/images/hero_performer.jpg',
    },
    {
      id: 5,
      title: 'CITY RHYTHMS',
      genre: 'URBAN & HIP-HOP FUSION',
      date: '24 October 2026',
      time: '9:00 PM - 10:30 PM',
      venue: 'Main Stage',
      description: 'High-energy hip-hop fusion and live urban drum jams led by Zen Ray and regional guest vocalists.',
      price: 1499,
      image: '/images/main_stage.jpg',
    },
  ];

  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #191404 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">CURATED MUSIC EXPERIENCES</span>
          <h1 className="section-title">CONCERT EXPERIENCES</h1>
          <p className="section-desc">Discover the 5 unique sound atmospheres comprising Midnight Echo 2026.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {experiences.map(exp => (
              <EventCard key={exp.id} event={exp} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
