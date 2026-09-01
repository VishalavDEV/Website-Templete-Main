import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Maximize, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ROOMS } from '../data/rooms';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0 }
};

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = ROOMS.find(r => r.id === Number(id)) || ROOMS[0];

  const [activeImage, setActiveImage] = useState(room.image);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Sync active image when room ID changes
  useEffect(() => {
    setActiveImage(room.image);
  }, [room]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? room.gallery.length - 1 : prev - 1));
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev === room.gallery.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') handlePrevLightbox();
      if (e.key === 'ArrowRight') handleNextLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const handleBook = () => {
    navigate('/booking', { state: { selectedRoomId: room.id } });
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: '140px 40px 100px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}
    >
      {/* Back Button */}
      <div style={{ marginBottom: '40px' }}>
        <Link
          to="/rooms"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#111111',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <ArrowLeft size={16} /> Back to Sanctuaries
        </Link>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1.2fr) minmax(280px, 0.8fr))',
        gap: '60px',
        alignItems: 'start'
      }}>
        {/* Left Column: Image Gallery & Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Main Large Image */}
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10', border: '1px solid rgba(197, 168, 128, 0.15)' }}>
            <img
              src={activeImage}
              alt={room.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <button
              onClick={() => openLightbox(room.gallery.indexOf(activeImage))}
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                backgroundColor: 'rgba(17, 17, 17, 0.8)',
                border: 'none',
                color: '#ffffff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c5a880'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(17, 17, 17, 0.8)'}
            >
              <Maximize size={16} />
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
            {room.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                style={{
                  width: '100px',
                  height: '70px',
                  border: activeImage === img ? '2px solid #c5a880' : '2px solid transparent',
                  padding: 0,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: 'none',
                  flexShrink: 0,
                  transition: 'border-color 0.3s'
                }}
              >
                <img src={img} alt={`Thumbnail ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>

          {/* Room Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '2px',
              color: '#c5a880',
              textTransform: 'uppercase'
            }}>
              {room.category} Details
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: '400', color: '#1e1e1e', margin: 0 }}>
              {room.name}
            </h1>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.75', color: '#555555', margin: 0 }}>
              {room.description}
            </p>

            {/* Inclusions / Amenities checklist */}
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: '400', marginBottom: '20px', margin: 0 }}>
                Sanctuary Inclusions
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px'
              }}>
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#555555' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(197, 168, 128, 0.1)',
                      border: '1px solid rgba(197, 168, 128, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Check size={10} style={{ color: '#c5a880' }} />
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Reservation Detail Box */}
        <div style={{
          position: 'sticky',
          top: '120px',
          backgroundColor: '#ffffff',
          border: '1px solid rgba(197, 168, 128, 0.25)',
          padding: '40px',
          boxSizing: 'border-box',
          boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#777777', textTransform: 'uppercase', letterSpacing: '1px' }}>sanctuary rate</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '4px' }}>
              <span style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', fontWeight: '400', color: '#1e1e1e' }}>${room.price}</span>
              <span style={{ fontSize: '0.85rem', color: '#777777' }}>/ Night</span>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: 0 }} />

          {/* Specs List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: '#555555' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#999999' }}>Sanctuary Area</span>
              <span style={{ fontWeight: '600', color: '#1e1e1e' }}>{room.size}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#999999' }}>Room Vista</span>
              <span style={{ fontWeight: '600', color: '#1e1e1e' }}>{room.view}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#999999' }}>Bedding</span>
              <span style={{ fontWeight: '600', color: '#1e1e1e' }}>{room.bed}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#999999' }}>Max Capacity</span>
              <span style={{ fontWeight: '600', color: '#1e1e1e' }}>{room.guests} Guests</span>
            </div>
          </div>

          <button
            onClick={handleBook}
            style={{
              backgroundColor: '#c5a880',
              color: '#ffffff',
              border: '1px solid #c5a880',
              padding: '16px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#c5a880';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#c5a880';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Reserve Sanctuary <ArrowRight size={14} />
          </button>

          <p style={{ fontSize: '0.72rem', color: '#999999', textAlign: 'center', margin: 0, lineHeight: '1.4' }}>
            No immediate charge. You will review dates, guests, and custom add-ons before finalizing.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(11, 11, 11, 0.95)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              boxSizing: 'border-box'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '10px'
              }}
            >
              <X size={28} />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrevLightbox}
              style={{
                position: 'absolute',
                left: '30px',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '10px'
              }}
            >
              <ChevronLeft size={36} />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNextLightbox}
              style={{
                position: 'absolute',
                right: '30px',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '10px'
              }}
            >
              <ChevronRight size={36} />
            </button>

            {/* Image View */}
            <div style={{ maxWidth: '90%', maxHeight: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              <img
                src={room.gallery[lightboxIndex]}
                alt={`Lightbox view ${lightboxIndex}`}
                style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', border: '1px solid rgba(255, 255, 255, 0.15)' }}
              />
              <span style={{ color: '#faf8f5', fontSize: '0.85rem', fontFamily: 'var(--font-sans)', letterSpacing: '1px' }}>
                {lightboxIndex + 1} / {room.gallery.length} • {room.name} Gallery
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
