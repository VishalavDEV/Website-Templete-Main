import React from 'react';

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function InstagramGallery() {
  const tiles = [
    { id: 1, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600", tag: "@aurelia_finejewellery" },
    { id: 2, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600", tag: "#AureliaStory" },
    { id: 3, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600", tag: "@aurelia_finejewellery" },
    { id: 4, image: "https://images.unsplash.com/photo-1611591475179-67314290d462?auto=format&fit=crop&q=80&w=600", tag: "#SolitaireBespoke" },
    { id: 5, image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600", tag: "@aurelia_bridal" },
    { id: 6, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600", tag: "#AtelierGold" }
  ];

  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--bg-ivory)'
      }}
    >
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-dark)' }}>
            INSTAGRAM GALLERY
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              marginTop: '0.4rem',
              color: 'var(--text-main)'
            }}
          >
            #AURELIASTORIES
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Tag @aurelia_finejewellery to be featured in our editorial journal.
          </p>
        </div>

        {/* 6-tile grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '1rem'
          }}
        >
          {tiles.map((tile) => (
            <a
              key={tile.id}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                display: 'block'
              }}
              className="insta-tile"
            >
              <img
                src={tile.image}
                alt="Instagram Aurelia"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(20, 19, 18, 0.65)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  padding: '1rem',
                  textAlign: 'center'
                }}
                className="insta-overlay"
              >
                <InstagramIcon size={24} style={{ color: 'var(--gold-primary)', marginBottom: '0.4rem' }} />
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', fontWeight: '500' }}>{tile.tag}</span>
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--gold-light)', marginTop: '0.4rem' }}>View on Instagram</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .insta-tile:hover img {
          transform: scale(1.08);
        }
        .insta-tile:hover .insta-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
