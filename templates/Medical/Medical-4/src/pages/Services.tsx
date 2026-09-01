import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { services } from '../data/services';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="Our Medical Services" 
        subtitle="Explore healthcare services designed to support diagnosis, treatment, prevention, and long-term wellness."
        breadcrumbItems={[{ label: 'Services' }]}
      />

      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Healthcare Services</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Comprehensive Care Offerings</h2>
          <p className="text-slate-600 text-base">Designed around safety, accuracy, and patient comfort.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} animation="pop" delay={index * 70}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};
