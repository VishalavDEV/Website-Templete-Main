import React, { useState } from 'react';
import { Gift, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Offers() {
  const [activeSlide, setActiveSlide] = useState(0);

  const list = [
    {
      title: 'Weekend Escape Package',
      desc: 'Recharge your spirit with a curated weekend stay. Includes traditional welcome, daily breakfast at The Jharokha, and guided walking tour.',
      benefit: '15% Off Room Booking',
      validity: 'Valid Friday - Sunday stays',
      image: 'images/1_hero_overview.jpg'
    },
    {
      title: 'Honeymoon Experience',
      desc: 'Celebrate love in a private palace canopy. Includes champagne upon arrival, private balcony dinner, and couple Abhyanga spa massage.',
      benefit: 'Complimentary Dinner & Spa Treatment',
      validity: 'Requires minimum 3 nights stay',
      image: 'images/9_evening_experience.jpg'
    },
    {
      title: 'Heritage Stay Package',
      desc: 'Delve deep into Mewari history. Includes private boat tour on Lake Pichola, museum passes, and royal thali dinner experience.',
      benefit: 'Includes City Sightseeing & Dinings',
      validity: 'Available year-round stays',
      image: 'images/2_hotel_entrance.jpg'
    },
    {
      title: 'Spa & Wellness Retreat',
      desc: 'Restore your inner balance. Includes Ayurvedic consultation, daily yoga classes, customizable spa massage, and organic herbal teas.',
      benefit: 'Includes 2 Daily Ayurvedic Treatments',
      validity: 'Minimum 2 nights stay required',
      image: 'images/7_wellbeing_spa.jpg'
    },
    {
      title: 'Family Getaway Special',
      desc: 'Create family memories in our interconnected suites. Includes child activities, cooking masterclass with chefs, and laundry inclusions.',
      benefit: 'Kids Stay & Dine Complimentary',
      validity: 'Valid for Family Suite category',
      image: 'images/3_the_lobby.jpg'
    },
    {
      title: 'Early Bird Privilege',
      desc: 'Book your heritage holiday in advance and secure exclusive privileges and premium suite allocations.',
      benefit: '25% Off Advance Reservations',
      validity: 'Book 30 days prior to arrival',
      image: 'images/4_palace_suite.jpg'
    }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + list.length) % list.length);
  };

  return (
    <section id="offers" style={{ padding: '8rem 0', backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-ivory)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background gradients */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 10% 80%, rgba(194, 155, 79, 0.03) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header dark">
          <span className="subtitle" style={{ color: 'var(--color-brass)' }}>Exclusive Privileges</span>
          <h2 style={{ color: 'var(--color-ivory)' }}>Offers & Packages</h2>
        </div>

        {/* Carousel Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="offers-split">
          
          {/* Column 1: Active Slide Image Showcase */}
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(194, 155, 79, 0.2)' }}>
            <img 
              src={list[activeSlide].image} 
              alt={list[activeSlide].title} 
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16/10',
                objectFit: 'cover',
                display: 'block',
                animation: 'fadeInSimple 0.6s ease-in-out'
              }}
              key={activeSlide}
            />
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              right: '15px',
              bottom: '15px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Column 2: Offer details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Gift size={16} style={{ color: 'var(--color-brass)' }} />
              <span style={{ fontFamily: 'var(--font-serif-sc)', color: 'var(--color-brass)', fontSize: '0.8rem', letterSpacing: '0.15em' }}>
                SPECIAL PRIVILEGE
              </span>
            </div>

            <h3 style={{ fontSize: '2rem', color: 'var(--color-ivory)', lineHeight: 1.2 }}>
              {list[activeSlide].title}
            </h3>

            <p style={{ color: 'var(--color-sandstone-light)', opacity: 0.85, fontSize: '0.98rem', lineHeight: '1.7', fontWeight: 300 }}>
              {list[activeSlide].desc}
            </p>

            <div 
              className="glass-card-dark"
              style={{ 
                padding: '1.2rem', 
                borderLeft: '3px solid var(--color-brass)',
                backgroundColor: 'rgba(35, 18, 11, 0.5)',
                margin: '0.5rem 0'
              }}
            >
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-serif-sc)', color: 'var(--color-brass)', display: 'block', marginBottom: '0.3rem', letterSpacing: '0.05em' }}>
                PACKAGE HIGHLIGHT
              </span>
              <strong style={{ fontSize: '1.1rem', color: 'var(--color-ivory)', fontWeight: 500 }}>
                {list[activeSlide].benefit}
              </strong>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-sandstone-light)', opacity: 0.7, fontSize: '0.8rem' }}>
              <Calendar size={14} />
              <span>{list[activeSlide].validity}</span>
            </div>

            {/* Carousel navigation buttons */}
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <button 
                  onClick={handlePrev}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(194, 155, 79, 0.3)',
                    color: 'var(--color-ivory)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-brass)'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'rgba(194, 155, 79, 0.3)'}
                >
                  <ArrowLeft size={16} />
                </button>
                <button 
                  onClick={handleNext}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(194, 155, 79, 0.3)',
                    color: 'var(--color-ivory)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-brass)'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'rgba(194, 155, 79, 0.3)'}
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              
              <button className="btn-gold" style={{ padding: '0.8rem 2.5rem' }}>
                VIEW OFFER
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .offers-split {
            grid-template-columns: 1.2fr 1fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
