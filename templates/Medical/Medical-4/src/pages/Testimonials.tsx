import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { testimonials } from '../data/testimonials';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="Patient Experiences" 
        subtitle="Hear from patients about their experiences with our doctors, staff, and healthcare services."
        breadcrumbItems={[{ label: 'Testimonials' }]}
      />

      <section className="space-y-8 sm:space-y-10">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Patient Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">Trusted by Our Community</h2>
          <p className="text-slate-600 text-base">Read authentic reviews from individuals and families who received care at MediCare.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} animation="pop" delay={index * 60}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};
