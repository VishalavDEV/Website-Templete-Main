import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesIntro } from '../components/services/ServicesIntro';
import { ServicesIndex } from '../components/services/ServicesIndex';
import { ServiceCategoryVisual } from '../components/services/ServiceCategoryVisual';
import { ServiceDetailSections } from '../components/services/ServiceDetailSections';
import { HowWeWorkSection } from '../components/services/HowWeWorkSection';
import { CapabilityMatrix } from '../components/services/CapabilityMatrix';
import { FeaturedServicesWork } from '../components/services/FeaturedServicesWork';
import { ServiceTestimonial } from '../components/services/ServiceTestimonial';
import { ServicesCTA } from '../components/services/ServicesCTA';
import { CursorType } from '../types';

interface ServicesPageProps {
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenProjectModal,
  setCursorType,
  onNavigate,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleNavigateDetail = (slug: string) => {
    onNavigate(`/services/${slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {/* 1. SERVICES HERO */}
      <ServicesHero setCursorType={setCursorType} />

      {/* 2. SERVICES INTRODUCTION */}
      <ServicesIntro />

      {/* 3. INTERACTIVE SERVICES INDEX (Visual Centerpiece) */}
      <ServicesIndex
        setCursorType={setCursorType}
        onSelectService={(serviceId) => {
          const el = document.getElementById(`service-detail-${serviceId}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* 4. SERVICE CATEGORY VISUAL (One Studio. Many Disciplines.) */}
      <ServiceCategoryVisual setCursorType={setCursorType} />

      {/* 5 - 10. DEDICATED SERVICE EDITORIAL SECTIONS (01 Strategy through 06 Content & Motion) */}
      <ServiceDetailSections
        setCursorType={setCursorType}
        onOpenProjectModal={onOpenProjectModal}
        onNavigateDetail={handleNavigateDetail}
      />

      {/* 11. HOW WE WORK (Methodology 01 - 05) */}
      <HowWeWorkSection setCursorType={setCursorType} />

      {/* 12. CAPABILITY MATRIX (Our Toolkit & Stack) */}
      <CapabilityMatrix setCursorType={setCursorType} />

      {/* 13. FEATURED WORK (Disciplines in action: Aura, North, Form) */}
      <FeaturedServicesWork
        setCursorType={setCursorType}
        onOpenProjectModal={onOpenProjectModal}
      />

      {/* 14. SERVICE TESTIMONIAL (Maya Richardson, CMO Aura) */}
      <ServiceTestimonial />

      {/* 15. FINAL CTA (Know What You Need? Let's Build It.) */}
      <ServicesCTA
        onOpenProjectModal={onOpenProjectModal}
        setCursorType={setCursorType}
      />
    </motion.div>
  );
};
