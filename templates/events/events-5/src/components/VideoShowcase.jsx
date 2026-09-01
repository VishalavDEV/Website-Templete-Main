import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Sparkles, ArrowRight } from 'lucide-react';

export const VideoShowcase = () => {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '450px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#07090b',
      borderTop: '1px solid rgba(124, 255, 79, 0.2)',
      borderBottom: '1px solid rgba(124, 255, 79, 0.2)'
    }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1920&q=80"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.4) contrast(1.1)'
        }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-man-washing-a-black-car-with-foam-41551-large.mp4" type="video/mp4" />
      </video>

      {/* Dark Vignette Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(7,9,11,0.5) 0%, rgba(7,9,11,0.9) 100%)'
      }} />

      {/* Foreground Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '60px 20px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(124, 255, 79, 0.2)',
          border: '2px solid #7cff4f',
          color: '#7cff4f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto',
          boxShadow: '0 0 30px rgba(124, 255, 79, 0.5)'
        }}>
          <Play size={26} fill="#7cff4f" style={{ marginLeft: '4px' }} />
        </div>

        <div className="badge-pill badge-green" style={{ marginBottom: '12px' }}>
          SEE THE PROCESS
        </div>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '900',
          color: '#f5f7f8',
          marginBottom: '16px'
        }}>
          Every Detail Matters.
        </h2>

        <p style={{
          color: '#b9c0c5',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto 28px auto'
        }}>
          Watch our certified auto spa technicians restore depth and high gloss shine using professional active snow foam cannons and dual action polishers.
        </p>

        <Link to="/about" className="btn-primary" style={{ padding: '14px 32px' }}>
          EXPLORE OUR PROCESS <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default VideoShowcase;
