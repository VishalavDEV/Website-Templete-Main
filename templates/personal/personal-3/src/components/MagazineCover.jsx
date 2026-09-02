import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function MagazineCover({ onOpen }) {
  const [opened, setOpened] = useState(false);
  const coverRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const visualRef = useRef(null);
  const btnRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);
    
    // Create custom GSAP timeline for cover slide outs
    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpen) onOpen();
      }
    });

    tl.to(titleRef.current, { y: -100, opacity: 0, duration: 0.8, ease: 'power2.in' })
      .to(subRef.current, { y: 50, opacity: 0, duration: 0.6, ease: 'power2.in' }, '-=0.6')
      .to(btnRef.current, { scale: 0.8, opacity: 0, duration: 0.5, ease: 'power2.in' }, '-=0.5')
      .to(visualRef.current, { scale: 1.2, opacity: 0, duration: 1, ease: 'power3.inOut' }, '-=0.8')
      .to(coverRef.current, {
        rotateY: -110,
        opacity: 0,
        x: '-100%',
        duration: 1.4,
        ease: 'power3.inOut',
      }, '-=0.8');
  };

  useEffect(() => {
    // Initial entrance animations
    gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 });
    gsap.fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 });
    gsap.fromTo(visualRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.4 });
    gsap.fromTo(btnRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.75)', delay: 0.8 });
  }, []);

  return (
    <div
      ref={coverRef}
      className={`magazine-cover-container ${opened ? 'page-fold' : ''}`}
      style={{
        transformOrigin: 'left center',
        borderRight: '1px solid rgba(13, 44, 30, 0.15)',
        boxShadow: '10px 0 30px rgba(0,0,0,0.05)',
      }}
    >
      <div className="magazine-border">
        {/* Header Metadata */}
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', paddingBottom: '1rem', fontStyle: 'italic' }}>
          <span>THE INKWELL PUBLISHING</span>
          <span>SPECIAL ISSUE</span>
          <span>N° 42</span>
        </div>

        {/* Center Cover Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, position: 'relative', width: '100%' }}>
          
          {/* Abstract Animated Visual Background */}
          <div
            ref={visualRef}
            style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--color-forest) 0%, rgba(13, 44, 30, 0.2) 70%, transparent 100%)',
              position: 'absolute',
              zIndex: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            {/* Animated Ring elements */}
            <div style={{
              width: '80%', height: '80%', border: '1px dashed var(--color-coral)', borderRadius: '50%',
              animation: 'spin 40s linear infinite'
            }} />
            <div style={{
              width: '60%', height: '60%', border: '1px solid rgba(13, 44, 30, 0.4)', borderRadius: '50%',
              position: 'absolute', animation: 'spin-reverse 20s linear infinite'
            }} />
          </div>

          {/* Typography */}
          <div style={{ zIndex: 1, textAlign: 'center', pointerEvents: 'none' }}>
            <h1
              ref={titleRef}
              style={{
                fontSize: 'clamp(3rem, 10vw, 7.5rem)',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                fontWeight: '700',
                color: 'var(--color-forest)',
                marginBottom: '1rem',
                lineHeight: 0.9,
              }}
            >
              SIDDHARTH<br />MEHTA
            </h1>
            <p
              ref={subRef}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: '500',
                fontSize: '14px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'var(--color-charcoal)',
                marginTop: '10px'
              }}
            >
              CREATIVE DEVELOPER
            </p>
          </div>
        </div>

        {/* Footer layout */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <button
            ref={btnRef}
            onClick={handleOpen}
            className="btn-editorial"
            data-cursor="open"
            style={{
              padding: '1.2rem 2.8rem',
              fontSize: '13px',
              letterSpacing: '0.2em',
              borderColor: 'var(--color-coral)',
              color: 'var(--color-coral)',
            }}
          >
            OPEN STORY →
          </button>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderTop: '1px solid rgba(13, 44, 30, 0.1)', paddingTop: '1rem', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>PERSONAL EDITION · 2026</span>
            <span>DEVELOPMENT / DESIGN / AI</span>
            <span>VOL. I</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
