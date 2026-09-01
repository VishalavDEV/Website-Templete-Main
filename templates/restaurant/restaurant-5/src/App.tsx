import React, { useState, useEffect } from 'react';
import { NoireMenuItem } from './types';

import { CornerNav } from './components/CornerNav';
import { NoireHero } from './components/NoireHero';
import { TheRoomSection } from './components/TheRoomSection';
import { InteractiveMenuSection } from './components/InteractiveMenuSection';
import { FireSection } from './components/FireSection';
import { NightHorizontalSection } from './components/NightHorizontalSection';
import { SignatureDishSection } from './components/SignatureDishSection';
import { EditorialChefSection } from './components/EditorialChefSection';
import { EventsCalendarSection } from './components/EventsCalendarSection';
import { UnconventionalGallerySection } from './components/UnconventionalGallerySection';
import { TestimonialSection } from './components/TestimonialSection';
import { MinimalReservationSection } from './components/MinimalReservationSection';
import { UrbanLocationSection } from './components/UrbanLocationSection';
import { NoireFooter } from './components/NoireFooter';
import { DishDetailModal } from './components/DishDetailModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedDish, setSelectedDish] = useState<NoireMenuItem | null>(null);

  // Scroll spy to monitor current active section
  useEffect(() => {
    const sections = ['hero', 'room', 'menu', 'night', 'events', 'gallery', 'reservation', 'location'];

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection('location');
        return;
      }

      const scrollPosition = window.scrollY + 300;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveForDish = () => {
    setSelectedDish(null);
    scrollToSection('reservation');
  };

  return (
    <div className="min-h-screen bg-[#171512] text-[#F3EBDD] font-body selection:bg-[#B87552] selection:text-[#F3EBDD]">
      {/* Viewport Frame */}
      <div className="w-full bg-[#171512]">
        {/* Fixed 4-Corner Navigation */}
        <CornerNav
          currentSection={activeSection}
          onNavigate={scrollToSection}
          onOpenReservation={() => scrollToSection('reservation')}
        />

        {/* Hero Section */}
        <NoireHero
          onExploreMenu={() => scrollToSection('menu')}
          onOpenReservation={() => scrollToSection('reservation')}
        />

        {/* 01. The Room Architecture */}
        <TheRoomSection />

        {/* 02. Interactive Menu */}
        <InteractiveMenuSection onSelectDish={(dish) => setSelectedDish(dish)} />

        {/* 03. Fire is Flavor */}
        <FireSection />

        {/* 04. Nocturnal Horizontal Experience */}
        <NightHorizontalSection />

        {/* 05. Signature Dish Showcase */}
        <SignatureDishSection />

        {/* 06. Chef Arjun Rao Profile */}
        <EditorialChefSection />

        {/* 07. Events Schedule */}
        <EventsCalendarSection onOpenReservation={() => scrollToSection('reservation')} />

        {/* 08. Unconventional Gallery */}
        <UnconventionalGallerySection />

        {/* 09. Giant Testimonial Statement */}
        <TestimonialSection />

        {/* 10. Minimal Reservation */}
        <MinimalReservationSection onReservationSubmitted={() => {}} />

        {/* 11. Urban Location & Vector Map */}
        <UrbanLocationSection />

        {/* Black Footer */}
        <NoireFooter
          onNavigate={scrollToSection}
          onOpenReservation={() => scrollToSection('reservation')}
        />
      </div>

      {/* Dish Quick View Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserveForDish={handleReserveForDish}
      />
    </div>
  );
}
