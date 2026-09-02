import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SERVICE_DETAILS_DATA } from '../data/serviceDetailData';
import { ServiceDetailHero } from '../components/service-detail/ServiceDetailHero';
import { ServiceStatement } from '../components/service-detail/ServiceStatement';
import { CapabilityList } from '../components/service-detail/CapabilityList';
import { ServiceVisual } from '../components/service-detail/ServiceVisual';
import { ApproachTimeline } from '../components/service-detail/ApproachTimeline';
import { ServicePhilosophy } from '../components/service-detail/ServicePhilosophy';
import { CapabilityMatrix } from '../components/service-detail/CapabilityMatrix';
import { RelatedWork } from '../components/service-detail/RelatedWork';
import { ImpactStats } from '../components/service-detail/ImpactStats';
import { ServiceTestimonial } from '../components/service-detail/ServiceTestimonial';
import { NextService } from '../components/service-detail/NextService';
import { ServiceCTA } from '../components/service-detail/ServiceCTA';
import { ServiceNotFound } from '../components/service-detail/ServiceNotFound';
import { CursorType } from '../types';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenProjectModal: () => void;
  setCursorType: (type: CursorType, text?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenProjectModal,
  setCursorType,
}) => {
  const service = SERVICE_DETAILS_DATA[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!service) {
    return (
      <ServiceNotFound
        onNavigate={onNavigate}
        setCursorType={setCursorType}
      />
    );
  }

  return (
    <motion.div
      key={slug}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden"
    >
      {/* 1. Hero */}
      <ServiceDetailHero
        service={service}
        onOpenProjectModal={onOpenProjectModal}
        setCursorType={setCursorType}
      />

      {/* 2. Statement / Why It Matters */}
      <ServiceStatement service={service} />

      {/* 3. Capabilities / What We Do */}
      <CapabilityList
        service={service}
        setCursorType={setCursorType}
      />

      {/* 4. Featured Visual */}
      <ServiceVisual
        service={service}
        setCursorType={setCursorType}
      />

      {/* 5. Our Approach */}
      <ApproachTimeline
        service={service}
        setCursorType={setCursorType}
      />

      {/* 6. Philosophy */}
      <ServicePhilosophy service={service} />

      {/* 7. Capability Grid Matrix */}
      <CapabilityMatrix
        service={service}
        setCursorType={setCursorType}
      />

      {/* 8. Selected Work */}
      <RelatedWork
        service={service}
        setCursorType={setCursorType}
        onOpenProjectModal={onOpenProjectModal}
      />

      {/* 9. Impact / Stats */}
      <ImpactStats service={service} />

      {/* 10. Testimonial */}
      <ServiceTestimonial service={service} />

      {/* 11. Next Service */}
      <NextService
        service={service}
        onNavigate={onNavigate}
        setCursorType={setCursorType}
      />

      {/* 12. Final CTA */}
      <ServiceCTA
        onOpenProjectModal={onOpenProjectModal}
        setCursorType={setCursorType}
      />
    </motion.div>
  );
};
