import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Hero } from '../../components/sections/Hero';
import { ClientLogos } from '../../components/sections/ClientLogos';
import { StatsSection } from '../../components/sections/StatsSection';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { ServiceCard } from '../../components/cards/ServiceCard';
import { CaseStudyCard } from '../../components/cards/CaseStudyCard';
import { servicesData } from '../../data/services';
import { caseStudiesData } from '../../data/caseStudies';
import { testimonialsData } from '../../data/testimonials';
import { staggerContainer, fadeUp } from '../../utils/animations';

export const HomePage: React.FC = () => {
  // Show top 6 services for the homepage grid matching design
  const homeServices = servicesData.slice(0, 6);
  // Show 3 featured case studies
  const homeCaseStudies = caseStudiesData.slice(0, 3);
  
  // Testimonial carousel state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonialsData[activeTestimonialIdx] || testimonialsData[0];

  return (
    <div className="space-y-0 bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Client Logos Section */}
      <ClientLogos />

      {/* 3. Stats Section */}
      <StatsSection showTitle={true} />

      {/* 4. Our Core Services (Services Grid) */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Title on Left and "View All Services →" on Right matching screenshot */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Core Services
              </h2>
              <p className="text-base text-slate-600 mt-2 max-w-xl">
                End-to-end solutions to help your business innovate, grow, and scale.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-zinc-700 group shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {homeServices.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Featured Case Studies Section */}
      <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Title on Left and "View All Case Studies →" on Right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Case Studies
              </h2>
              <p className="text-base text-slate-600 mt-2 max-w-xl">
                Real stories. Real impact.
              </p>
            </div>

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-zinc-700 group shrink-0"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {homeCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. What Our Clients Say (Interactive Testimonials matching screenshot) */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="relative bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xs">
            {/* Quote Mark */}
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mx-auto mb-8 border border-slate-200 shadow-2xs">
              <Quote className="w-7 h-7 fill-slate-800" />
            </div>

            {/* Testimonial Content with animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <blockquote className="text-xl sm:text-2xl lg:text-[26px] font-medium text-slate-900 leading-relaxed max-w-3xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Rating Stars */}
                <div className="flex items-center justify-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-3.5 pt-2">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div className="text-left">
                    <div className="font-bold text-slate-900 text-base">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {currentTestimonial.role}, <span className="text-slate-900 font-semibold">{currentTestimonial.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={handlePrevTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-950 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
                title="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs font-semibold text-slate-400 font-mono">
                {activeTestimonialIdx + 1} / {testimonialsData.length}
              </div>
              <button
                onClick={handleNextTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-950 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
                title="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <CtaBanner />
    </div>
  );
};
