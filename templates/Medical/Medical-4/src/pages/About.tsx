import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { siteSettings } from '../data/siteData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { 
  Heart, Shield, Award, Sparkles, UserCheck, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title={`About ${siteSettings.name}`} 
        subtitle="Trusted healthcare with a patient-first approach."
        breadcrumbItems={[{ label: 'About' }]}
      />

      {/* About Introduction Floating Window */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal animation="fade-up" delay={100}>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Committed to Excellence</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                Committed to Better Healthcare
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                {siteSettings.organization} brings together experienced healthcare professionals, modern facilities, and coordinated medical services to provide dependable care for individuals and families in {siteSettings.location}.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Our approach combines clinical expertise with compassion, communication, and respect for every patient. From routine diagnostics to specialized surgeries, we ensure quality care at every step.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="pop" delay={300}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-1">25+</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-bold">Years Experience</div>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-1">50+</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-bold">Expert Specialists</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6">
            <ScrollReveal animation="slide-right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=600" 
                  alt="Hospital Architecture" 
                  className="rounded-2xl shadow-md h-56 sm:h-64 w-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=600" 
                  alt="Medical Innovation & Diagnostics" 
                  className="rounded-2xl shadow-md h-56 sm:h-64 w-full object-cover mt-6 sm:mt-8 border border-slate-200"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>

      {/* Mission & Vision Floating Window */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <ScrollReveal animation="pop" delay={100}>
          <div className="floating-card bg-white p-8 sm:p-10 h-full">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-6">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-base">
              To provide safe, accessible, and compassionate healthcare while continuously improving the quality of patient outcomes through medical excellence and advanced technology.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="pop" delay={250}>
          <div className="floating-card bg-white p-8 sm:p-10 h-full">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-6">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-base">
              To become a trusted healthcare destination recognized for clinical excellence, innovation, and patient-centered care that puts individuals and families first.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Core Values Floating Window */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Our Values</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Core Values That Guide Us</h2>
          <p className="text-slate-600 text-base">The foundational principles that drive our commitment to exceptional healthcare.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: <Heart className="w-6 h-6" />, title: "Compassion", desc: "Treat every patient with empathy and deep human respect." },
            { icon: <Shield className="w-6 h-6" />, title: "Integrity", desc: "Maintain honesty, clinical transparency, and high ethics." },
            { icon: <Award className="w-6 h-6" />, title: "Excellence", desc: "Continuously benchmark and elevate medical standards." },
            { icon: <Sparkles className="w-6 h-6" />, title: "Innovation", desc: "Adopt breakthrough medical technologies and minimally invasive protocols." },
            { icon: <UserCheck className="w-6 h-6" />, title: "Patient First", desc: "Make patient safety, comfort, and healing central to every choice." }
          ].map((val, idx) => (
            <ScrollReveal key={val.title} animation="pop" delay={idx * 100}>
              <div className="floating-card bg-slate-50/70 p-6 text-center hover:bg-white group h-full">
                <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-xs">
                  {val.icon}
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{val.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{val.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* Facilities Floating Window */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Infrastructure</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Modern Healthcare Facilities</h2>
          <p className="text-slate-600 text-base">Equipped with advanced infrastructure to support precise diagnostics and comfortable treatment.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Advanced 3T MRI & 128-Slice CT Imaging",
            "Modular Laminar Flow Operating Suites",
            "Private Deluxe & General Patient Suites",
            "24/7 Level-1 Emergency & Trauma Care",
            "NABL Accredited Automated Pathology Lab",
            "24/7 Fully Stocked Pharmacy & Delivery"
          ].map((facility, index) => (
            <ScrollReveal key={index} animation="pop" delay={index * 100}>
              <div className="floating-card bg-slate-50/70 p-6 flex items-center gap-4 group hover:bg-white h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-bold text-slate-800 text-base group-hover:text-blue-600 transition-colors">{facility}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* CTA Floating Window */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window-dark cta-photo-bg text-white text-center relative overflow-hidden p-8 sm:p-14 lg:p-16">
        <div className="absolute inset-0 bg-blue-950/85 backdrop-blur-xs"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal animation="fade-up" delay={100}>
            <span className="bg-white/20 border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block mb-4">
              Patient Support
            </span>
          </ScrollReveal>
          <ScrollReveal animation="pop" delay={200}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">Your Health Deserves Dedicated Care</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">Schedule a consultation with our experts today or reach out for specialized inquiries.</p>
          </ScrollReveal>
          <ScrollReveal animation="pop" delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-900/60 hover:bg-blue-900/80 border border-white/30 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </div>
  );
};
