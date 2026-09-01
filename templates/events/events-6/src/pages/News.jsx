import React, { useState } from 'react';
import Modal from '../components/Modal';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'LINEUP ANNOUNCEMENT',
      subtitle: 'Meet the first wave of artists joining Midnight Echo 2026.',
      category: 'ANNOUNCEMENT',
      date: '15 AUGUST 2026',
      image: '/images/hero_performer.jpg',
      fullText: 'Velora Live is thrilled to announce the official first phase lineup for Midnight Echo 2026! Headlined by indie pop icon Lyra Voss and electronic producer Kael Nova, this year features 30+ artists performing across three custom sound arenas in Chennai.',
    },
    {
      id: 2,
      title: 'VIP EXPERIENCE',
      subtitle: 'Discover the exclusive world of the Velora VIP zone.',
      category: 'VIP INSIDER',
      date: '10 AUGUST 2026',
      image: '/images/main_stage.jpg',
      fullText: 'Step into unprecedented festival luxury. The Velora VIP Pass unlocks dedicated front-stage viewing decks, air-conditioned lounges, complimentary artisanal catering, and backstage meet & greet sessions with headline performers.',
    },
    {
      id: 3,
      title: 'THE VENUE',
      subtitle: 'Step inside Aurora Sound Arena, Chennai.',
      category: 'VENUE GUIDE',
      date: '02 AUGUST 2026',
      image: '/images/main_stage.jpg',
      fullText: 'Designed specifically for high-fidelity live music acoustic performance, Aurora Sound Arena features 360-degree acoustic baffle architecture, multi-tiered viewing platforms, and 4,000+ parking spaces.',
    },
    {
      id: 4,
      title: 'EVENT GUIDE',
      subtitle: 'Everything you need to know before the night begins.',
      category: 'FESTIVAL GUIDE',
      date: '28 JULY 2026',
      image: '/images/dj_performer.jpg',
      fullText: 'From gate entry protocols and e-ticket scanning to food village vendors, transportation options, and camera rules, here is your essential guide to navigating Midnight Echo 2026.',
    },
  ];

  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #1A1505 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">LATEST UPDATES</span>
          <h1 className="section-title">FESTIVAL NEWS & GUIDES</h1>
          <p className="section-desc">Stay informed with official lineup announcements, venue guides, and VIP features.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {articles.map((art) => (
              <div key={art.id} className="event-card">
                <div className="event-card-img-wrapper">
                  <img src={art.image} alt={art.title} className="event-card-img" />
                  <span className="event-card-badge">{art.category}</span>
                </div>
                <div className="event-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-bright)', fontSize: '0.8rem', marginBottom: '8px' }}>
                    <Calendar size={14} /> {art.date}
                  </div>
                  <h3 className="event-card-title">{art.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '20px' }}>{art.subtitle}</p>
                  
                  <button
                    className="btn-secondary"
                    style={{ marginTop: 'auto', padding: '10px 20px', fontSize: '0.8rem' }}
                    onClick={() => setSelectedArticle(art)}
                  >
                    READ MORE <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <Modal onClose={() => setSelectedArticle(null)}>
          <span className="artist-genre-tag" style={{ marginBottom: '12px' }}>{selectedArticle.category}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '1.8rem', marginBottom: '8px' }}>
            {selectedArticle.title}
          </h2>
          <div style={{ color: 'var(--gold-bright)', fontSize: '0.85rem', marginBottom: '16px' }}>{selectedArticle.date}</div>
          <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
            {selectedArticle.fullText}
          </p>
          <button className="btn-primary" onClick={() => setSelectedArticle(null)}>
            CLOSE ARTICLE
          </button>
        </Modal>
      )}
    </div>
  );
}
