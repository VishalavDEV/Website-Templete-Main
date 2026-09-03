import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

export default function StoryIndex({ activeSection, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

  const menuItems = [
    { number: '01', label: 'THE PERSON', id: 'person' },
    { number: '02', label: 'WHAT I CREATE', id: 'projects' },
    { number: '03', label: 'HOW I THINK', id: 'thinking' },
    { number: '04', label: 'MY TOOLS', id: 'tools' },
    { number: '05', label: 'THE ROAD', id: 'journey' },
    { number: '06', label: 'MOMENTS', id: 'moments' },
    { number: '07', label: 'CURRENTLY', id: 'currently' },
    { number: '08', label: 'PLAYGROUND', id: 'playground' },
    { number: '09', label: 'THE FILE', id: 'resume' },
    { number: '10', label: "LET'S TALK", id: 'contact' },
  ];

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Fade in overlay
      gsap.to(overlayRef.current, { opacity: 1, pointerEvents: 'auto', duration: 0.5, ease: 'power2.out' });
      // Stagger items
      gsap.fromTo(
        linksRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => setIsOpen(false),
      });
    }
  };

  const handleLinkClick = (id) => {
    toggleMenu();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Floating Index Button */}
      <button
        onClick={toggleMenu}
        data-cursor="open"
        style={{
          position: 'fixed',
          top: '2rem',
          right: '2rem',
          zIndex: 999,
          background: 'var(--color-forest)',
          border: '1px solid rgba(255, 90, 54, 0.2)',
          color: 'var(--color-bg-ivory)',
          borderRadius: '50px',
          padding: '0.8rem 1.6rem',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.2em',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(13, 44, 30, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.backgroundColor = 'var(--color-coral)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = 'var(--color-forest)';
        }}
      >
        {isOpen ? <X size={14} /> : <Menu size={14} />}
        <span>{isOpen ? 'CLOSE' : 'INDEX +'}</span>
      </button>

      {/* Fullscreen Overlay Index */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--color-bg-paper)',
          zIndex: 998,
          opacity: 0,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 2rem',
        }}
      >
        {/* Grain overlay for paper-like structure inside menu */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.03,
            pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Index Titles */}
        <div style={{ maxWidth: '600px', width: '100%', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '18px',
              fontStyle: 'italic',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-coral)',
              borderBottom: '1px solid rgba(13, 44, 30, 0.1)',
              paddingBottom: '1rem',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            TABLE OF CONTENTS
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (linksRef.current[index] = el)}
                onClick={() => handleLinkClick(item.id)}
                data-cursor="explore"
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: '1px dashed rgba(13, 44, 30, 0.08)',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                }}
                className="index-row"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontWeight: '300',
                    fontSize: '24px',
                    color: 'var(--color-coral)',
                    marginRight: '20px',
                  }}
                >
                  {item.number}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontWeight: '700',
                    fontSize: 'clamp(20px, 4vw, 32px)',
                    color: 'var(--color-forest)',
                    flex: 1,
                    textAlign: 'left',
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    color: 'var(--color-charcoal)',
                    opacity: 0.5,
                  }}
                >
                  PAGE · {parseInt(item.number) * 4}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .index-row:hover span {
          color: var(--color-coral) !important;
        }
        .index-row:hover {
          padding-left: 10px;
          border-bottom: 1px solid var(--color-coral);
        }
        .index-row {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
}
