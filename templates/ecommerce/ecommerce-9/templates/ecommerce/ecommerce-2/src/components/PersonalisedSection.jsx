import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Edit3, PenTool, Compass } from 'lucide-react';

export default function PersonalisedSection() {
  const cards = [
    {
      icon: <Edit3 size={24} className="card-icon" />,
      title: "ENGRAVING",
      subtitle: "Inscribe initials, secret coordinates, or romantic dates inside your band or pendant."
    },
    {
      icon: <Sparkles size={24} className="card-icon" />,
      title: "BIRTHSTONE",
      subtitle: "Commemorate loved ones with natural, ethically sourced birthstones of your choice."
    },
    {
      icon: <PenTool size={24} className="card-icon" />,
      title: "NAME JEWELLERY",
      subtitle: "Architectural typography cast in solid 18K yellow gold for an intimate heirloom."
    },
    {
      icon: <Compass size={24} className="card-icon" />,
      title: "CUSTOM DESIGN",
      subtitle: "Collaborate directly with our master jewellers to realize your dream custom concept."
    }
  ];

  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#F5F0E6',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '600' }}>
            PERSONALIZED HIGH JEWELLERY
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              marginTop: '0.4rem',
              color: 'var(--emerald-deep)',
              letterSpacing: '0.14em'
            }}
          >
            MADE PERSONAL
          </h2>
          <div className="gold-divider" />
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3.5rem'
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                background: '#FAF7F0',
                border: '1px solid var(--border-gold)',
                padding: '2.5rem 1.8rem',
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: 'var(--shadow-sm)'
              }}
              className="personalised-card"
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--ivory)',
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}
                className="icon-wrapper"
              >
                {card.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  letterSpacing: '0.14em',
                  marginBottom: '0.8rem',
                  color: 'var(--emerald-deep)'
                }}
                className="card-title"
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6
                }}
                className="card-desc"
              >
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/shop?collection=personalised" className="btn-emerald">
            CREATE YOUR PIECE
          </Link>
        </div>
      </div>

      <style>{`
        .card-icon {
          color: var(--gold-primary);
          transition: transform 0.4s ease, color 0.4s ease;
        }
        .personalised-card:hover {
          background: #064E3B !important;
          border-color: var(--gold-primary) !important;
          transform: translateY(-8px);
          box-shadow: var(--shadow-gold) !important;
        }
        .personalised-card:hover .icon-wrapper {
          background: rgba(212, 175, 55, 0.2) !important;
          border-color: var(--gold-light) !important;
        }
        .personalised-card:hover .card-icon {
          color: var(--gold-light) !important;
          transform: scale(1.15) rotate(5deg);
        }
        .personalised-card:hover .card-title {
          color: #FAF7F0 !important;
        }
        .personalised-card:hover .card-desc {
          color: #D4DEC9 !important;
        }
      `}</style>
    </section>
  );
}
