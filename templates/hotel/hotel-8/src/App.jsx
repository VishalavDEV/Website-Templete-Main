import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Key, CheckCircle, Award } from 'lucide-react';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Stay from './components/Stay';
import FineDining from './components/FineDining';
import WellBeing from './components/WellBeing';
import Amenities from './components/Amenities';
import Offers from './components/Offers';
import Gallery from './components/Gallery';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import LoginModal from './components/LoginModal';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [appState, setAppState] = useState('intro'); // 'intro', 'keycard', 'main'
  const [keycardStep, setKeycardStep] = useState(0); // 0: initial, 1: slide-in/scan, 2: green-light, 3: door-open, 4: enter/zoom
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [bookingData, setBookingData] = useState({});

  // Trigger keycard scan sequence when user clicks ENTER ANANTHARA
  const handleEnterClick = () => {
    setAppState('keycard');
    setKeycardStep(1); // slide-in keycard
    
    setTimeout(() => {
      setKeycardStep(2); // indicator turns green
    }, 2500);

    setTimeout(() => {
      setKeycardStep(3); // doors open (ONE AND ONLY door opening animation!)
    }, 3800);

    setTimeout(() => {
      setKeycardStep(4); // camera moves forward (zoom & fade)
    }, 5500);

    setTimeout(() => {
      setAppState('main'); // enter main website and enable scrolling
      window.scrollTo(0, 0);
    }, 7500);
  };

  const handleOpenBooking = (data = {}) => {
    setBookingData(data);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingData({});
  };

  return (
    <>
      {/* 🚪 STEP 1 — INITIAL CLOSED DOOR SCREEN */}
      {appState === 'intro' && (
        <div className="cinematic-container" style={{ backgroundColor: '#050302' }}>
          {/* Symmetrical Entrance Closed Doors backdrop */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url("images/2_hotel_entrance.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          />

          {/* Symmetrical Wooden Door panels (Fully Closed) */}
          <div 
            style={{
              position: 'absolute',
              left: '41%',
              top: '40%',
              width: '9.1%',
              height: '60%',
              backgroundColor: '#32180F',
              backgroundImage: 'url("images/2_hotel_entrance.jpg")',
              backgroundSize: '1100% 167%',
              backgroundPosition: '45.1% 67%',
              borderRight: '1px solid rgba(194, 155, 79, 0.4)',
              zIndex: 3
            }}
          />
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              top: '40%',
              width: '9.1%',
              height: '60%',
              backgroundColor: '#32180F',
              backgroundImage: 'url("images/2_hotel_entrance.jpg")',
              backgroundSize: '1100% 167%',
              backgroundPosition: '55.1% 67%',
              borderLeft: '1px solid rgba(194, 155, 79, 0.4)',
              zIndex: 3
            }}
          />

          {/* Symmetrical Arch Frame Overlay */}
          <img 
            src="images/2_hotel_entrance.jpg" 
            alt="Entrance Arch"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 4,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 59.2% 100%, 59.2% 40%, 40.8% 40%, 40.8% 100%, 0% 100%)',
              pointerEvents: 'none'
            }}
          />

          {/* Dim overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(10, 6, 4, 0.65)',
            zIndex: 5
          }} />

          {/* Intro Text Overlay & Enter CTA */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
            zIndex: 10
          }}>
            <div style={{ maxWidth: '600px', animation: 'fadeIn 1.5s cubic-bezier(0.25, 1, 0.5, 1)' }}>
              <span style={{ 
                fontFamily: 'var(--font-serif-sc)', 
                color: 'var(--color-brass)', 
                fontSize: '0.85rem', 
                letterSpacing: '0.25em',
                textTransform: 'uppercase'
              }}>
                ANCIENT IMPERIAL MEWARI SANCTUM
              </span>
              
              <h1 style={{ 
                fontSize: 'clamp(3rem, 8vw, 5rem)', 
                lineHeight: '1.1', 
                margin: '1rem 0 1.5rem 0',
                color: 'var(--color-ivory)',
                textShadow: '0 4px 15px rgba(0,0,0,0.6)'
              }}>
                ANANTHARA
              </h1>

              <p style={{ 
                fontFamily: 'var(--font-serif-header)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                fontStyle: 'italic',
                color: 'var(--color-sandstone-light)',
                opacity: 0.95,
                marginBottom: '3rem',
                textShadow: '0 2px 8px rgba(0,0,0,0.4)'
              }}>
                Where Heritage Welcomes You Home
              </p>

              <button onClick={handleEnterClick} className="btn-gold" style={{ padding: '1.2rem 3.5rem' }}>
                ENTER ANANTHARA
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔑 STEP 2 & 3 — KEY CARD INTERACTION & CAMERA ENTERS LOBBY */}
      {appState === 'keycard' && (
        <div className="cinematic-container" style={{ backgroundColor: '#050302' }}>
          {/* Main Backdrop gate */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url("images/2_hotel_entrance.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: keycardStep === 4 ? 'scale(1.25)' : 'scale(1.0)',
              opacity: keycardStep === 4 ? 0 : 1,
              transition: 'transform 2.5s cubic-bezier(0.25, 1, 0.3, 1), opacity 1.8s ease-in-out',
              zIndex: 1
            }}
          />

          {/* Lobby preview image shown behind the doors */}
          <img 
            src="images/3_the_lobby.jpg" 
            alt="Lobby Reveal"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 2,
              transform: keycardStep === 4 ? 'scale(1.05)' : 'scale(1.0)',
              transition: 'transform 3s cubic-bezier(0.25, 1, 0.5, 1)',
              opacity: keycardStep >= 3 ? 1 : 0
            }}
          />

          {/* Shadow mask */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: keycardStep >= 3 ? 'rgba(0,0,0,0)' : 'rgba(10, 6, 4, 0.55)',
            zIndex: 2,
            transition: 'background-color 2s ease-in-out'
          }} />

          {/* Symmetrical Left/Right Door Panels swinging open */}
          <div 
            style={{
              position: 'absolute',
              left: '41%',
              top: '40%',
              width: '9.1%',
              height: '60%',
              backgroundColor: '#32180F',
              backgroundImage: 'url("images/2_hotel_entrance.jpg")',
              backgroundSize: '1100% 167%',
              backgroundPosition: '45.1% 67%',
              borderRight: '1px solid rgba(194, 155, 79, 0.4)',
              zIndex: 3,
              transformOrigin: 'left center',
              transform: keycardStep >= 3 ? 'perspective(1200px) rotateY(-85deg)' : 'perspective(1200px) rotateY(0deg)',
              opacity: keycardStep === 4 ? 0 : 1,
              transition: 'transform 2.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.5s ease-in-out',
              boxShadow: keycardStep >= 3 ? '5px 0 15px rgba(0,0,0,0.5)' : 'none'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              top: '40%',
              width: '9.1%',
              height: '60%',
              backgroundColor: '#32180F',
              backgroundImage: 'url("images/2_hotel_entrance.jpg")',
              backgroundSize: '1100% 167%',
              backgroundPosition: '55.1% 67%',
              borderLeft: '1px solid rgba(194, 155, 79, 0.4)',
              zIndex: 3,
              transformOrigin: 'right center',
              transform: keycardStep >= 3 ? 'perspective(1200px) rotateY(85deg)' : 'perspective(1200px) rotateY(0deg)',
              opacity: keycardStep === 4 ? 0 : 1,
              transition: 'transform 2.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.5s ease-in-out',
              boxShadow: keycardStep >= 3 ? '-5px 0 15px rgba(0,0,0,0.5)' : 'none'
            }}
          />

          {/* Sandstone Arch Frame */}
          <img 
            src="images/2_hotel_entrance.jpg" 
            alt="Entrance Frame"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 4,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 59.2% 100%, 59.2% 40%, 40.8% 40%, 40.8% 100%, 0% 100%)',
              transform: keycardStep === 4 ? 'scale(1.25)' : 'scale(1.0)',
              opacity: keycardStep === 4 ? 0 : 1,
              transition: 'transform 2.5s cubic-bezier(0.25, 1, 0.3, 1), opacity 1.8s ease-in-out',
              pointerEvents: 'none'
            }}
          />

          {/* Access indicator panel (Left side wall) */}
          {keycardStep < 3 && (
            <div 
              style={{
                position: 'absolute',
                left: '36%',
                top: '65%',
                width: '35px',
                height: '75px',
                backgroundColor: '#1E1E1E',
                border: '1px solid rgba(194, 155, 79, 0.5)',
                borderRadius: '4px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.8)',
                zIndex: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '5px 0'
              }}
            >
              <div 
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: keycardStep >= 2 ? '#22c55e' : '#ef4444',
                  boxShadow: keycardStep >= 2 ? '0 0 15px #22c55e' : '0 0 8px #ef4444',
                  transition: 'background-color 0.5s, box-shadow 0.5s'
                }}
              />
              <span style={{ fontSize: '0.45rem', color: '#888', letterSpacing: '0.1em' }}>KEY</span>
            </div>
          )}

          {/* Luxury Card Sliding Scan Animation */}
          {keycardStep > 0 && keycardStep < 3 && (
            <div 
              style={{
                position: 'absolute',
                left: '39%',
                top: '66%',
                width: '120px',
                height: '180px',
                zIndex: 10,
                animation: 'keyCardScan 5s ease-in-out forwards',
                transformOrigin: 'center center'
              }}
            >
              <div 
                className="glass-card-dark"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  border: '2px solid var(--color-brass)',
                  padding: '1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(135deg, rgba(35, 18, 11, 0.95) 0%, rgba(61, 34, 22, 0.95) 100%)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.8)'
                }}
              >
                <div style={{ width: '25px', height: '20px', borderRadius: '3px', background: 'linear-gradient(to right, #B3925C, #C29B4F)' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-serif-header)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-ivory)' }}>
                    ANANTHARA
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif-sc)', fontSize: '0.35rem', letterSpacing: '0.3em', color: 'var(--color-brass)' }}>
                    HERITAGE HOTEL
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', fontSize: '0.45rem', color: 'var(--color-brass)', opacity: 0.8 }}>
                  <span>ROOM 108</span>
                  <Key size={10} />
                </div>
              </div>
            </div>
          )}

          {/* State Text message */}
          <div 
            style={{
              position: 'absolute',
              bottom: '10%',
              width: '100%',
              textAlign: 'center',
              zIndex: 10,
              opacity: keycardStep < 4 ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          >
            <p style={{
              fontFamily: 'var(--font-serif-sc)',
              color: 'var(--color-brass)',
              fontSize: '0.85rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase'
            }}>
              {keycardStep === 1 && 'Scanning Guest Key Card...'}
              {keycardStep === 2 && 'Access Granted. Unlocking Chambers...'}
              {keycardStep >= 3 && 'Entering Ananthara'}
            </p>
          </div>
        </div>
      )}

      {/* 🏛️ COMPLETE WEBSITE STRUCTURE */}
      {appState === 'main' && (
        <div style={{ backgroundColor: 'var(--color-dark-bg)', animation: 'fadeInSimple 2s ease-out' }}>
          <Navbar onBookClick={handleOpenBooking} onLoginClick={() => setIsLoginOpen(true)} />
          
          {/* Main sections */}
          <Overview />
          <Stay onBookClick={handleOpenBooking} />
          <FineDining />
          <WellBeing />
          <Amenities />
          <Offers />
          <Gallery />
          <Experiences />
          <Contact />

          {/* 🌙 Final cinematic rooftop + Book Your Stay */}
          <section 
            id="book-stay"
            style={{ 
              height: '100vh', 
              position: 'relative', 
              backgroundColor: 'var(--color-dark-bg)', 
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Background image terrace panning */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("images/9_evening_experience.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.45,
                zIndex: 1
              }}
              className="animate-pan"
            />

            {/* Indigo dark overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to top, rgba(10, 6, 4, 0.95) 0%, rgba(10, 9, 20, 0.5) 60%, rgba(10, 6, 4, 0.8) 100%)',
              zIndex: 2
            }} />

            {/* Glowing Lantern dots */}
            <div className="lantern-dot glow" style={{ left: '67%', top: '33%', opacity: 1, zIndex: 3 }} />
            <div className="lantern-dot glow" style={{ left: '23%', top: '36%', opacity: 1, zIndex: 3 }} />
            <div className="lantern-dot glow" style={{ left: '52%', top: '68%', opacity: 1, zIndex: 3 }} />

            {/* Booking call-out Card */}
            <div style={{ position: 'relative', zIndex: 10, padding: '2rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div 
                className="glass-card-dark"
                style={{
                  padding: '3.5rem 3rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(194, 155, 79, 0.45)',
                  maxWidth: '550px',
                  width: '100%',
                  textAlign: 'center',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif-sc)', color: 'var(--color-brass)', fontSize: '0.85rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                  YOUR STORY BEGINS HERE
                </span>

                <h2 style={{ fontFamily: 'var(--font-serif-header)', fontSize: '2.8rem', color: 'var(--color-ivory)', margin: '1rem 0' }}>
                  ANANTHARA
                </h2>

                <p style={{ color: 'var(--color-sandstone-light)', opacity: 0.9, fontSize: '0.98rem', lineHeight: '1.7', fontWeight: 300, marginBottom: '2.5rem' }}>
                  Where Every Stay Becomes a Memory. Secure your heritage residency now and experience Udaipur’s finest traditional luxury.
                </p>

                <button onClick={() => handleOpenBooking()} className="btn-gold" style={{ padding: '1rem 3rem', fontSize: '0.95rem' }}>
                  BOOK YOUR STAY
                </button>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      )}

      {/* Login Modal Overlay */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />

      {/* Booking Modal Overlay */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        initialData={bookingData} 
      />
    </>
  );
}
