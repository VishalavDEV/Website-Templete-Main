import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ShowcaseSlider from './components/ShowcaseSlider';
import Portfolio from './components/Portfolio';
import PanoramaStrip from './components/PanoramaStrip';
import Story from './components/Story';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';

export default function App() {
  // State for active lightbox modal
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    item: null,
    items: [],
  });

  // State for likes map { [itemId]: boolean }
  const [likes, setLikes] = useState({});

  // State for interactive booking modal
  const [bookingModalState, setBookingModalState] = useState({
    isOpen: false,
    initialPackage: 'Portrait & Editorial',
  });

  // State for toast notifications
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3800);
    return () => clearTimeout(timer);
  }, [toast]);

  // Open Lightbox
  const handleOpenLightbox = (item, itemsList) => {
    setLightboxState({
      isOpen: true,
      item: item,
      items: itemsList || [item],
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (direction) => {
    if (!lightboxState.items.length) return;
    const currentIndex = lightboxState.items.findIndex(
      (i) => i.id === lightboxState.item.id
    );
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = lightboxState.items.length - 1;
    if (nextIndex >= lightboxState.items.length) nextIndex = 0;

    setLightboxState((prev) => ({
      ...prev,
      item: prev.items[nextIndex],
    }));
  };

  const handleToggleLike = (id) => {
    setLikes((prev) => {
      const isNowLiked = !prev[id];
      const updated = { ...prev, [id]: isNowLiked };
      showToast({
        message: isNowLiked ? 'Added to favorites!' : 'Removed from favorites',
        type: isNowLiked ? 'heart' : 'info',
      });
      return updated;
    });
  };

  const handleShare = (item) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(item.imageUrl || window.location.href);
      showToast({
        message: `Copied link for "${item.title}"!`,
        type: 'share',
      });
    } else {
      showToast({
        message: `Photo: ${item.title}`,
        type: 'share',
      });
    }
  };

  const handleOpenBooking = (packageName) => {
    setBookingModalState({
      isOpen: true,
      initialPackage: packageName || 'Portrait & Editorial',
    });
  };

  const handleCloseBooking = () => {
    setBookingModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen w-full bg-[#111111] text-white flex flex-col selection:bg-[#e74c3c] selection:text-white relative">
      {/* 1. Fixed Main Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. Hero Section (Grand Photographer Showcase & CTAs) */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 3. Three Key Feature Blocks */}
      <Features />

      {/* 4. Cinematic Showcase Slider */}
      <ShowcaseSlider onOpenBooking={handleOpenBooking} />

      {/* 5. 4-Column Masonry Portfolio Gallery with Live Backend & Filter Tabs */}
      <Portfolio
        onOpenLightbox={handleOpenLightbox}
        likes={likes}
        onToggleLike={handleToggleLike}
        onShare={handleShare}
      />

      {/* 6. Full-Width Panorama Gallery Strip */}
      <PanoramaStrip onOpenLightbox={handleOpenLightbox} />

      {/* 7. Story & Creator Bio with Interactive Gear Locker */}
      <Story />

      {/* 8. Services, Pricing Rates & FAQ */}
      <Services onOpenBooking={handleOpenBooking} />

      {/* 9. Client Testimonials & Social Proof */}
      <Testimonials />

      {/* 10. Contact Section & Interactive Studio Inquiry */}
      <Contact onShowToast={showToast} onOpenBooking={handleOpenBooking} />

      {/* 11. Complete Footer with Quick Links & Socials */}
      <Footer onShowToast={showToast} />

      {/* Fullscreen Interactive Lightbox Modal */}
      {lightboxState.isOpen && (
        <LightboxModal
          item={lightboxState.item}
          items={lightboxState.items}
          onClose={handleCloseLightbox}
          onNavigate={handleNavigateLightbox}
          isLiked={!!likes[lightboxState.item?.id]}
          onToggleLike={handleToggleLike}
          onShare={handleShare}
        />
      )}

      {/* Interactive Shoot Booking & Consultation Modal */}
      <BookingModal
        isOpen={bookingModalState.isOpen}
        initialPackage={bookingModalState.initialPackage}
        onClose={handleCloseBooking}
        onShowToast={showToast}
      />

      {/* Toast Notifications */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
