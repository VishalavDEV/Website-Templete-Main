import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDepartments, getDoctors } from '../services/api';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import { gallery } from '../data/gallery';
import { siteSettings } from '../data/siteData';
import { DepartmentCard } from '../components/cards/DepartmentCard';
import { ServiceCard } from '../components/cards/ServiceCard';
import { DoctorCard } from '../components/cards/DoctorCard';
import { DoctorCardSkeleton, DepartmentCardSkeleton } from '../components/skeletons';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { FAQCard } from '../components/cards/FAQCard';
import { GalleryCard } from '../components/cards/GalleryCard';
import { StatisticCard } from '../components/cards/StatisticCard';
import { HealthCalculator } from '../components/common/HealthCalculator';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Tilt3DCard } from '../components/common/Tilt3DCard';
import { 
  ShieldAlert, Stethoscope, Building2, Calendar, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { GalleryItem, Department, Doctor } from '../types';
const heroBannerImg = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200";

export const Home: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('All');
  const [homeDepartments, setHomeDepartments] = useState<Department[]>([]);
  const [homeDoctors, setHomeDoctors] = useState<Doctor[]>([]);
  const [isDeptsLoading, setIsDeptsLoading] = useState<boolean>(true);
  const [isDocsLoading, setIsDocsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    getDepartments().then(data => {
      if (isMounted) {
        setHomeDepartments(data);
        setIsDeptsLoading(false);
      }
    });
    getDoctors().then(data => {
      if (isMounted) {
        setHomeDoctors(data);
        setIsDocsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredGallery = activeGalleryFilter === 'All' 
    ? gallery.slice(0, 8) 
    : gallery.filter(item => item.category === activeGalleryFilter).slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      {/* SECTION 1 — HERO FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="relative bg-white text-slate-900 py-16 sm:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden floating-window">
        {/* Sleek light premium grid pattern overlay with radial mask */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0"></span>
              <span>Trusted Healthcare • 24/7 Advanced Care</span>
            </div>
          </ScrollReveal>
          
          {/* Headline */}
          <ScrollReveal animation="pop" delay={200} className="w-full max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 drop-shadow-xs">
              Compassionate Care for You and Your Family
            </h1>
          </ScrollReveal>
          
          {/* Subtext */}
          <ScrollReveal animation="fade-up" delay={300} className="w-full max-w-2xl">
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal text-balance">
              Our multidisciplinary team of experienced physicians and healthcare professionals provides comprehensive medical care with an unwavering focus on safety, comfort, and clinical excellence.
            </p>
          </ScrollReveal>
          
          {/* CTA Buttons */}
          <ScrollReveal animation="pop" delay={400} className="w-full">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/appointment"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group text-sm sm:text-base whitespace-nowrap"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
              <Link
                to="/services"
                className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base whitespace-nowrap"
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>

          {/* Emergency hotline bar */}
          <ScrollReveal animation="pop" delay={500} className="w-full max-w-md">
            <div className="inline-flex items-center gap-4 bg-slate-50 border border-slate-200/60 px-5 sm:px-6 py-3.5 rounded-2xl shadow-xs hover:border-red-300 transition-colors group text-left">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shrink-0">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block whitespace-nowrap">Emergency Care — 24/7 Hotline</span>
                <a href={`tel:${siteSettings.emergencyPhone}`} className="text-base sm:text-lg font-black text-slate-900 hover:text-red-600 transition-colors">
                  {siteSettings.emergencyPhone}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Center Stacked Hero Image */}
          <ScrollReveal animation="slide-up" delay={550} className="w-full max-w-4xl pt-4">
            <Tilt3DCard maxTilt={4} perspective={1200} className="w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 group text-left" style={{ transformStyle: 'preserve-3d' }}>
                <img 
                  src={heroBannerImg} 
                  alt="Modern Healthcare Excellence" 
                  className="w-full h-[280px] sm:h-[420px] lg:h-[480px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                
                {/* Floating Live Badge */}
                <div 
                  className="absolute top-5 right-5 bg-slate-950/85 backdrop-blur-md px-4 py-2 rounded-full border border-white/25 text-xs font-bold text-white flex items-center gap-2 shadow-xl animate-float-slow"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Doctors On Duty</span>
                </div>

                {/* Bottom Card */}
                <div 
                  className="absolute bottom-5 left-5 right-5 bg-slate-900/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 text-white shadow-2xl"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                    <span className="font-black text-xs sm:text-sm tracking-wide">NABH Accredited Healthcare</span>
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed">State-of-the-art diagnostic labs and qualified emergency physicians on 24/7 standby.</p>
                </div>
              </div>
            </Tilt3DCard>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      {/* SECTION 2 — QUICK INFORMATION CARDS WITH 3D TILT */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ScrollReveal animation="pop" delay={100}>
          <Tilt3DCard maxTilt={8} perspective={1000} className="h-full">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 group h-full flex flex-col justify-between" style={{ transformStyle: 'preserve-3d' }}>
              <div>
                <div 
                  className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-xs"
                  style={{ transform: 'translateZ(24px)' }}
                >
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors" style={{ transform: 'translateZ(18px)' }}>
                  Emergency Care
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed" style={{ transform: 'translateZ(12px)' }}>
                  Round-the-clock emergency support from our experienced critical care medical team.
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </ScrollReveal>

        <ScrollReveal animation="pop" delay={200}>
          <Tilt3DCard maxTilt={8} perspective={1000} className="h-full">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 group h-full flex flex-col justify-between" style={{ transformStyle: 'preserve-3d' }}>
              <div>
                <div 
                  className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-xs"
                  style={{ transform: 'translateZ(24px)' }}
                >
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors" style={{ transform: 'translateZ(18px)' }}>
                  Expert Doctors
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed" style={{ transform: 'translateZ(12px)' }}>
                  Experienced board-certified specialists across 12+ medical departments.
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </ScrollReveal>

        <ScrollReveal animation="pop" delay={300}>
          <Tilt3DCard maxTilt={8} perspective={1000} className="h-full">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 group h-full flex flex-col justify-between" style={{ transformStyle: 'preserve-3d' }}>
              <div>
                <div 
                  className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-xs"
                  style={{ transform: 'translateZ(24px)' }}
                >
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors" style={{ transform: 'translateZ(18px)' }}>
                  Modern Facilities
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed" style={{ transform: 'translateZ(12px)' }}>
                  Advanced diagnostic labs and surgical suites designed around patient comfort and safety.
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </ScrollReveal>

        <ScrollReveal animation="pop" delay={400}>
          <Tilt3DCard maxTilt={8} perspective={1000} className="h-full">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 group h-full flex flex-col justify-between" style={{ transformStyle: 'preserve-3d' }}>
              <div>
                <div 
                  className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-xs"
                  style={{ transform: 'translateZ(24px)' }}
                >
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors" style={{ transform: 'translateZ(18px)' }}>
                  Easy Appointments
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed" style={{ transform: 'translateZ(12px)' }}>
                  Book in-person or virtual consultations instantly through our digital booking portal.
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </ScrollReveal>
      </section>

      {/* SECTION 3 — ABOUT FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="slide-left" delay={150}>
              <Tilt3DCard maxTilt={6} perspective={1000}>
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80" style={{ transformStyle: 'preserve-3d' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                    alt="Doctor consultation" 
                    className="w-full h-[360px] sm:h-[420px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div 
                    className="absolute -bottom-5 -right-5 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden sm:block border border-blue-500"
                    style={{ transform: 'translateZ(26px)' }}
                  >
                    <div className="text-3xl font-black mb-1">15+ Years</div>
                    <div className="text-blue-100 text-xs font-bold">Of Dedicated Healthcare Excellence</div>
                  </div>
                </div>
              </Tilt3DCard>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6">
            <ScrollReveal animation="fade-up" delay={200}>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">About {siteSettings.name}</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                Healthcare Built Around You
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                At {siteSettings.name}, we believe quality healthcare begins with listening. Our multidisciplinary team combines medical expertise, modern technology, and compassionate care to support patients at every stage of their healthcare journey.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                From preventive consultations to advanced treatment, our goal is to make every patient feel informed, respected, and cared for.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="pop" delay={400}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>

      {/* SECTION 4 — DEPARTMENTS FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Departments</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Our Medical Departments</h2>
          <p className="text-slate-600 text-base">Explore specialized departments supported by experienced doctors and modern healthcare facilities.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {isDeptsLoading ? (
            <DepartmentCardSkeleton count={6} />
          ) : (
            homeDepartments.slice(0, 6).map((department, idx) => (
              <ScrollReveal key={department.id} animation="pop" delay={idx * 100}>
                <DepartmentCard department={department} />
              </ScrollReveal>
            ))
          )}
        </div>

        <ScrollReveal animation="pop" delay={200} className="text-center">
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-blue-600 text-slate-800 hover:text-blue-600 font-bold px-8 py-3.5 rounded-xl shadow-xs transition-all hover:scale-105"
          >
            <span>View All Departments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </ScrollReveal>

      {/* SECTION 5 — SERVICES FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Services</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Comprehensive Medical Services</h2>
          <p className="text-slate-600 text-base">From routine consultations to specialized treatment, our services are designed to provide accessible and coordinated healthcare.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {services.slice(0, 6).map((service, idx) => (
            <ScrollReveal key={service.id} animation="pop" delay={idx * 100}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="pop" delay={200} className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </ScrollReveal>

      {/* SECTION 6 — STATISTICS FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window-dark stats-photo-bg text-white relative overflow-hidden p-8 sm:p-14 lg:p-16">
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
        
        <div className="relative z-10">
          <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest block mb-2">Hospital Milestones</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Excellence in Numbers</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal animation="pop" delay={100}><StatisticCard value="25+" label="Years of Healthcare Experience" /></ScrollReveal>
            <ScrollReveal animation="pop" delay={200}><StatisticCard value="50+" label="Board-Certified Specialists" /></ScrollReveal>
            <ScrollReveal animation="pop" delay={300}><StatisticCard value="100K+" label="Satisfied Patients Treated" /></ScrollReveal>
            <ScrollReveal animation="pop" delay={400}><StatisticCard value="24/7" label="Emergency & Trauma Wing" /></ScrollReveal>
          </div>
        </div>
      </ScrollReveal>

      {/* SECTION 6.5 — HEALTH CALCULATOR */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-transparent p-0 border-none shadow-none">
        <HealthCalculator />
      </ScrollReveal>

      {/* SECTION 7 — WHY CHOOSE US FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Why {siteSettings.name}</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Why Patients Choose {siteSettings.name}</h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">We combine advanced clinical technology with deep empathy to ensure the best possible care outcomes.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ScrollReveal animation="pop" delay={100}>
            <div className="floating-card bg-slate-50/70 p-7 sm:p-8 hover:bg-white group h-full">
              <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Experienced Specialists</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Patients receive care from qualified senior doctors with international fellowship experience.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="pop" delay={200}>
            <div className="floating-card bg-slate-50/70 p-7 sm:p-8 hover:bg-white group h-full">
              <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Patient-Centered Care</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We focus on understanding individual patient needs and creating comfortable, respectful care experiences.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="pop" delay={300}>
            <div className="floating-card bg-slate-50/70 p-7 sm:p-8 hover:bg-white group h-full">
              <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Modern Diagnostic Tech</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Our labs feature high-field MRI, low-dose CT scanners, and robotic-assisted surgical equipment.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="pop" delay={400}>
            <div className="floating-card bg-slate-50/70 p-7 sm:p-8 hover:bg-white group h-full">
              <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Coordinated Healthcare</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Our multidisciplinary tumor boards and cardiology panels collaborate for rapid, seamless care.</p>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      {/* SECTION 8 — DOCTORS FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Our Doctors</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Meet Our Specialists</h2>
          <p className="text-slate-600 text-base">Get to know the experienced medical professionals who support our patients across different specialties.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {isDocsLoading ? (
            <DoctorCardSkeleton count={4} />
          ) : (
            homeDoctors.slice(0, 4).map((doctor, idx) => (
              <ScrollReveal key={doctor.id} animation="pop" delay={idx * 100}>
                <DoctorCard doctor={doctor} />
              </ScrollReveal>
            ))
          )}
        </div>

        <ScrollReveal animation="pop" delay={200} className="text-center">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-blue-600/20 hover:scale-105 transition-all"
          >
            <span>Meet All Doctors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </ScrollReveal>

      {/* SECTION 9 — APPOINTMENT CTA FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window-dark cta-photo-bg text-white relative overflow-hidden p-8 sm:p-14 lg:p-16 text-center">
        <div className="absolute inset-0 bg-blue-950/85 backdrop-blur-xs"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/25 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal animation="fade-up" delay={100}>
            <span className="bg-white/20 border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block mb-4">
              Easy Online Booking
            </span>
          </ScrollReveal>
          <ScrollReveal animation="pop" delay={200}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Ready to Take Charge of Your Health?
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-blue-100 text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation with one of our experienced doctors or get prompt 24/7 care.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="pop" delay={400}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                to="/appointment"
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="bg-blue-900/60 hover:bg-blue-900/80 border border-white/30 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                Contact Support
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={500}>
            <div className="inline-flex flex-wrap justify-center items-center gap-2 bg-slate-900/70 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 text-xs sm:text-sm text-blue-100">
              <span>Need urgent assistance? Call 24/7 Hotline:</span>
              <a href={`tel:${siteSettings.emergencyPhone}`} className="font-black text-white hover:text-blue-300 transition-colors">
                {siteSettings.emergencyPhone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      {/* SECTION 10 — TESTIMONIALS FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">What Our Patients Say</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {testimonials.slice(0, 3).map((testimonial, idx) => (
            <ScrollReveal key={testimonial.id} animation="pop" delay={idx * 150}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="pop" delay={200} className="text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-blue-600 text-slate-800 hover:text-blue-600 font-bold px-8 py-3.5 rounded-xl shadow-xs transition-all hover:scale-105"
          >
            <span>View All Testimonials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </ScrollReveal>

      {/* SECTION 11 — FAQ FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14 max-w-4xl mx-auto w-full">
        <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
        </ScrollReveal>

        <div className="flex flex-col gap-4 mb-8 sm:mb-10">
          {faqs.slice(0, 5).map((faq, idx) => (
            <ScrollReveal key={faq.id} animation="fade-up" delay={idx * 80}>
              <FAQCard faq={faq} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="pop" delay={200} className="text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
          >
            <span>View All FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </ScrollReveal>

      {/* SECTION 12 — GALLERY PREVIEW FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Gallery</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Inside {siteSettings.name}</h2>
          <p className="text-slate-600 text-base">Explore our facilities, medical teams, and patient-focused environment.</p>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal animation="fade-up" delay={100} className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', 'Hospital', 'Facilities', 'Doctors', 'Events'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveGalleryFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeGalleryFilter === cat ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 border border-slate-200/80 text-slate-700 hover:bg-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 sm:mb-12">
          {filteredGallery.map((item, idx) => (
            <ScrollReveal key={item.id} animation="pop" delay={idx * 75}>
              <GalleryCard item={item} onOpen={setLightboxItem} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="pop" delay={200} className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </ScrollReveal>

      {/* SECTION 13 — CONTACT CTA FLOATING WINDOW */}
      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 text-center max-w-5xl mx-auto w-full">
        <ScrollReveal animation="pop" delay={100}>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Have Questions About Your Care?</h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={200}>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">Our healthcare team is here to help you find the right information and services.</p>
        </ScrollReveal>
        <ScrollReveal animation="pop" delay={300}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 sm:py-4 rounded-xl shadow-md transition-all hover:scale-105 text-sm sm:text-base"
            >
              Contact Us
            </Link>
            <Link
              to="/appointment"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-8 py-3.5 sm:py-4 rounded-xl transition-all hover:scale-105 text-sm sm:text-base"
            >
              Book Appointment
            </Link>
          </div>
        </ScrollReveal>
      </ScrollReveal>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-fadeIn">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors"
            >
              ✕
            </button>
            <div className="max-h-[70vh] bg-slate-900 flex items-center justify-center">
              <img 
                src={lightboxItem.image} 
                alt={lightboxItem.title} 
                className="max-h-[70vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-white">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{lightboxItem.category}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{lightboxItem.title}</h3>
              <p className="text-slate-600 text-sm">{lightboxItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

