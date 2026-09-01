import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Search,
  PhoneCall,
  ShieldCheck,
  Award,
  Users,
  Building,
  HeartPulse,
  Activity,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  Sparkles,
  Stethoscope,
  ChevronRight,
  ChevronLeft,
  Flame,
  Zap,
  MessageSquare,
  X
} from 'lucide-react';
import { Doctor, Department, Service, Testimonial } from '../../types';
import { ApiService } from '../../services/api';
import { INITIAL_HEALTH_ARTICLES } from '../../data/seedData';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';

interface HomePageProps {
  onNavigate: (view: string, params?: Record<string, string>) => void;
  onOpenBooking: (prefill?: { doctorId?: string; departmentId?: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [doctorSearchQuery, setDoctorSearchQuery] = useState('');
  const [showQuickWidget, setShowQuickWidget] = useState(true);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const [docs, depts, srvs, tests] = await Promise.all([
          ApiService.getDoctors(),
          ApiService.getDepartments(),
          ApiService.getServices(),
          ApiService.getTestimonials(true)
        ]);
        setDoctors(docs);
        setDepartments(depts);
        setServices(srvs.slice(0, 6));
        setTestimonials(tests.slice(0, 3));
      } catch (err) {
        console.error('Failed to load homepage data', err);
      }
    };
    loadHomeData();
  }, []);

  const handleDoctorSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('doctors', { search: doctorSearchQuery });
  };

  return (
    <div className="relative space-y-16 pb-20 bg-slate-50/80 min-h-screen overflow-hidden">
      {/* Dynamic Background Glowing Ambient Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-teal-300/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-[600px] right-10 w-[600px] h-[600px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* ================= FLOATING GLASS HERO SECTION WITH BACKGROUND VIDEO ================= */}
      <ScrollReveal direction="up" delay={50}>
        <header id="home" className="relative mx-3 sm:mx-6 lg:mx-8 mt-4 rounded-3xl overflow-hidden bg-slate-950 text-white shadow-2xl border border-slate-800/80">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
          >
            <source src="0814.mp4" type="video/mp4" />
          </video>
          {/* Soft Contrast Gradient Overlay for high text readability & video clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/30 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 text-teal-300 text-xs font-bold tracking-wider uppercase border border-teal-400/40 backdrop-blur-md shadow-lg animate-float-slow">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>Accredited Academic Medical Center</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                Advanced Healthcare, <br />
                <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                  Personalized For You.
                </span>
              </h1>

              <p className="text-slate-100 text-sm sm:text-base max-w-2xl leading-relaxed font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                Experience next-generation hospital care. Connecting you with 150+ board-certified medical specialists, robotic precision surgery, and rapid 24/7 trauma emergency response.
              </p>

              {/* Glassmorphic Find a Doctor Search Bar */}
              <form
                onSubmit={handleDoctorSearch}
                className="p-2 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 flex flex-col sm:flex-row gap-2 max-w-2xl mt-4"
              >
                <div className="relative flex-1 flex items-center pl-4">
                  <Search className="w-5 h-5 text-teal-600 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search specialist name, symptom, or department..."
                    value={doctorSearchQuery}
                    onChange={e => setDoctorSearchQuery(e.target.value)}
                    className="w-full pl-3 pr-2 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent font-medium"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  leftIcon={<Search className="w-4 h-4" />}
                  className="rounded-2xl font-bold shadow-lg shadow-teal-500/30"
                >
                  Find Doctor
                </Button>
              </form>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Button
                  id="hero-book-btn"
                  variant="primary"
                  size="lg"
                  leftIcon={<Calendar className="w-5 h-5" />}
                  onClick={() => onOpenBooking()}
                  className="rounded-full font-bold shadow-xl shadow-teal-500/35 hover:-translate-y-1 transition-all duration-300"
                >
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate('services')}
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/60 rounded-full font-bold backdrop-blur-md hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Services
                </Button>
              </div>
            </div>

            {/* Floating Emergency Glass Card */}
            <div className="lg:col-span-4 animate-float">
              <div className="glass-card-dark rounded-3xl p-7 border border-teal-500/30 shadow-2xl text-white space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-extrabold uppercase tracking-wider">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                    <span>24/7 Level 1 Trauma ICU</span>
                  </div>
                  <Badge variant="teal" size="sm">Active</Badge>
                </div>

                <h3 className="text-2xl font-bold">Emergency Dispatch</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Instant ambulance deployment with cardiac resuscitation standby and stroke rapid response unit.
                </p>
                
                <a
                  href="tel:+911800555091"
                  className="text-2xl sm:text-3xl font-black text-teal-300 tracking-tight tabular-nums block hover:text-white transition-colors"
                >
                  +91 1800 555 091
                </a>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-teal-400" /> Door-to-Balloon &lt;45m</span>
                  <span className="text-teal-300 font-bold">911 Linked</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </ScrollReveal>

      {/* ================= FLOATING STATS COUNTERS BAR ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { num: 50000, suffix: '+', label: 'Patients Treated Annually', icon: Users, color: 'text-teal-600', bg: 'bg-teal-500/10' },
            { num: 150, suffix: '+', label: 'Board-Certified Specialists', icon: Stethoscope, color: 'text-sky-600', bg: 'bg-sky-500/10' },
            { num: 25, suffix: '+', label: 'Specialized Clinical Divisions', icon: Building, color: 'text-purple-600', bg: 'bg-purple-500/10' },
            { num: 99, suffix: '%', label: 'Clinical Satisfaction Rating', icon: Award, color: 'text-amber-600', bg: 'bg-amber-500/10' }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-xl flex items-center gap-4 h-full">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5 leading-snug">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ================= TOP-RATED SPECIALISTS & HOSPITAL HIGHLIGHTS ================= */}
      <section id="doctors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Top-Rated Specialists + Hospital Highlights */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="w-2.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-400 rounded-full inline-block"></span>
                  Top-Rated Specialists
                </h2>
                <button
                  type="button"
                  onClick={() => onNavigate('doctors')}
                  className="text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Full Directory</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Doctors Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {doctors.slice(0, 4).map((doctor, idx) => (
                  <ScrollReveal key={doctor.doctor_id} direction="up" delay={idx * 80}>
                    <Card
                      hover
                      onClick={() => onNavigate('doctor-detail', { docId: doctor.doctor_id })}
                      className="p-5 flex gap-4 items-center h-full"
                    >
                      <ImageWithFallback
                        src={doctor.photo_url}
                        alt={doctor.name}
                        fallbackType="doctor"
                        className="w-20 h-20 rounded-2xl object-cover shrink-0 bg-slate-100 ring-2 ring-teal-500/20 group-hover:scale-105 transition-transform"
                      />
                      <div className="flex flex-col justify-between flex-1 min-w-0">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {doctor.available_today ? (
                              <Badge variant="teal" size="sm" dot>Available Today</Badge>
                            ) : (
                              <Badge variant="amber" size="sm">Next: {idx % 2 === 0 ? 'Tomorrow' : 'Monday'}</Badge>
                            )}
                          </div>
                          <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-teal-700 transition-colors truncate">
                            {doctor.name}
                          </h3>
                          <p className="text-xs text-slate-500 truncate font-medium">{doctor.specialization}</p>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
                          <div className="flex items-center gap-1 text-amber-500 font-extrabold">
                            ★ {doctor.rating}{' '}
                            <span className="text-slate-400 font-normal">
                              ({doctor.review_count || 120 + idx * 14})
                            </span>
                          </div>
                          <span className="font-extrabold text-slate-900">₹{doctor.consultation_fee}</span>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>

              {/* Hospital Highlights Card */}
              <ScrollReveal direction="up" delay={150}>
                <Card glass className="p-7">
                  <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2.5 mb-5">
                    <ShieldCheck className="w-6 h-6 text-teal-600" />
                    Hospital Highlights & Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-teal-50/80 border border-teal-100 rounded-2xl text-center shadow-2xs">
                      <p className="text-3xl font-black text-teal-700">15+</p>
                      <p className="text-xs text-teal-900 font-bold mt-1">Specialized Divisions</p>
                    </div>
                    <div className="p-4 bg-sky-50/80 border border-sky-100 rounded-2xl text-center shadow-2xs">
                      <p className="text-3xl font-black text-sky-700">500+</p>
                      <p className="text-xs text-sky-900 font-bold mt-1">Robotic Surgeries / Yr</p>
                    </div>
                    <div className="p-4 bg-emerald-50/80 border border-emerald-100 rounded-2xl text-center shadow-2xs">
                      <p className="text-3xl font-black text-emerald-700">24/7</p>
                      <p className="text-xs text-emerald-900 font-bold mt-1">Emergency Trauma ICU</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>

            {/* Right Column: Active Appointments & Quick Scheduling */}
            <div className="lg:col-span-4 space-y-6">
              {/* Active OPD Clinic Status */}
              <ScrollReveal direction="up" delay={120}>
                <Card glass className="flex flex-col overflow-hidden p-0">
                  <div className="bg-slate-900 text-white p-5 border-b border-slate-800 flex items-center justify-between">
                    <h3 className="font-bold text-sm">Active OPD Clinic Status</h3>
                    <Badge variant="teal" size="sm" dot>Live</Badge>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-3 items-start border-l-4 border-teal-500 pl-3">
                      <div>
                        <p className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">
                          Next Available Slot • Today
                        </p>
                        <p className="font-bold text-slate-800 text-sm">General Cardiac Assessment</p>
                        <p className="text-xs text-slate-500">Dr. Marcus Vance • Suite 302</p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-teal-50/80 rounded-2xl border border-teal-100 text-xs text-slate-700 font-medium">
                      <p className="font-bold text-teal-900 mb-0.5">Need a consultation today?</p>
                      <span>Same-day appointments and video telehealth slots are open now.</span>
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => onOpenBooking()}
                      className="w-full justify-center rounded-2xl font-bold shadow-lg shadow-teal-500/25"
                    >
                      Schedule New Appointment
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>

              {/* Floating Helpline Widget */}
              <ScrollReveal direction="up" delay={180}>
                <div className="glass-card-dark rounded-3xl p-7 text-white flex flex-col gap-3 relative overflow-hidden shadow-2xl">
                  <div className="relative z-10 space-y-2">
                    <Badge variant="rose" size="sm" dot>Emergency Hotline</Badge>
                    <h3 className="font-bold text-xl leading-tight">Instant Ambulance Dispatch</h3>
                    <p className="text-slate-300 text-xs leading-relaxed font-medium">
                      Direct line to trauma team, pediatric resuscitation, and stroke rapid intervention.
                    </p>
                    <a
                      href="tel:+911800555091"
                      className="text-2xl sm:text-3xl font-black text-teal-300 tabular-nums block hover:text-white transition-colors"
                    >
                      +91 1800 555 091
                    </a>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none">
                    <HeartPulse className="w-32 h-32 text-white" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= FEATURED CLINICAL SERVICES ================= */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-400 rounded-full inline-block"></span>
                Featured Clinical Services
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mt-1 font-medium">
                Comprehensive medical treatments utilizing state-of-the-art diagnostic instruments and multidisciplinary clinical teams.
              </p>
            </div>
            <Button
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() => onNavigate('services')}
              className="rounded-2xl"
            >
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, idx) => (
              <ScrollReveal key={srv.service_id} direction="up" delay={idx * 60}>
                <Card
                  hover
                  onClick={() => onNavigate('services')}
                  className="p-0 flex flex-col justify-between hover-lift h-full overflow-hidden border border-slate-200/90 shadow-md group cursor-pointer"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <ImageWithFallback
                        src={srv.image_url}
                        alt={srv.name}
                        fallbackType="treatment"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                      <div className="absolute top-3 right-3">
                        <Badge variant="teal" size="sm" className="shadow-md font-bold uppercase tracking-wider">
                          {srv.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                        {srv.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-medium">
                        {srv.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/50">
                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium">Estimate Range:</span>
                      <span className="font-extrabold text-slate-900">{srv.price_range}</span>
                    </div>
                    <span className="text-teal-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Details <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ================= CENTERS OF EXCELLENCE (DEPARTMENTS) ================= */}
      <section id="departments" className="mx-3 sm:mx-6 lg:mx-8 py-16 px-6 sm:px-12 bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="w-2.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-400 rounded-full inline-block"></span>
                  Centers of Excellence
                </h2>
                <p className="text-slate-600 text-sm max-w-xl mt-1 font-medium">
                  Each department is equipped with dedicated surgical suites, intensive care beds, and outpatient consultation clinics.
                </p>
              </div>
              <Button
                variant="outline"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => onNavigate('departments')}
                className="rounded-2xl"
              >
                All Departments
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.slice(0, 6).map((dept, idx) => (
                <ScrollReveal key={dept.department_id} direction="up" delay={idx * 60}>
                  <Card
                    hover
                    onClick={() => onNavigate('departments', { deptId: dept.department_id })}
                    className="p-0 flex flex-col justify-between hover-lift h-full overflow-hidden border border-slate-200/90 shadow-md group cursor-pointer"
                  >
                    <div>
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                        <ImageWithFallback
                          src={dept.image_url}
                          alt={dept.name}
                          fallbackType="hospital"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                        <div className="absolute top-3 right-3">
                          <Badge variant="teal" size="sm" className="shadow-md font-bold">
                            {dept.active_doctors_count || 2} Specialists
                          </Badge>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                          {dept.name}
                        </h3>
                        <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-medium">
                          {dept.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50/50">
                      <span>Head: <strong>{dept.head_doctor_name?.split(',')[0]}</strong></span>
                      <span className="text-teal-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS PREVIEW ================= */}
      <section id="testimonials" className="mx-3 sm:mx-6 lg:mx-8 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white py-16 rounded-3xl px-6 sm:px-12 shadow-2xl border border-slate-800/80">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                  <span className="w-2.5 h-8 bg-gradient-to-b from-teal-400 to-emerald-400 rounded-full inline-block"></span>
                  What Our Patients Say
                </h2>
                <p className="text-slate-300 text-sm max-w-xl mt-1 font-medium">
                  Real feedback from patients who entrusted their health and surgical recovery to Qure Nexa clinicians.
                </p>
              </div>
              <Button
                variant="outline"
                size="md"
                className="bg-slate-800/80 text-white border-slate-700 hover:bg-slate-700 rounded-2xl backdrop-blur-md"
                onClick={() => onNavigate('testimonials')}
              >
                Read All Stories
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <ScrollReveal key={t.id} direction="up" delay={idx * 80}>
                  <div
                    className="glass-card-dark rounded-3xl p-6 flex flex-col justify-between border border-slate-700/80 shadow-xl h-full"
                  >
                    <div>
                      <div className="flex items-center gap-1 text-amber-400 mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed font-medium">
                        "{t.feedback}"
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center gap-3">
                      <ImageWithFallback
                        src={t.patient_avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'}
                        alt={t.patient_name}
                        fallbackType="user"
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-teal-400/40"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white">{t.patient_name}</h4>
                        <p className="text-[11px] text-teal-300 font-semibold">{t.doctor_name || t.department_name}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= HEALTH ARTICLES PREVIEW ================= */}
      <section id="articles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-teal-500 to-emerald-400 rounded-full inline-block"></span>
                Latest Health Insights
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mt-1 font-medium">
                Evidence-based medical advice and preventive health tips published by our clinical department heads.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INITIAL_HEALTH_ARTICLES.map((article, idx) => (
              <ScrollReveal key={article.id} direction="up" delay={idx * 80}>
                <Card
                  hover
                  className="p-0 overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className="aspect-16/9 overflow-hidden bg-slate-100 relative">
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="glass" size="sm">{article.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-semibold">
                        <span className="text-teal-700">{article.read_time}</span>
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">{article.title}</h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-medium">
                        {article.summary}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>By <strong>{article.author}</strong></span>
                      <span className="text-teal-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Article <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ================= FLOATING QUICK ACTION BAR (BOTTOM RIGHT) ================= */}
      {showQuickWidget && (
        <div className="fixed bottom-20 right-6 z-40 flex flex-col items-end gap-2">
          <div className="glass-card p-3 rounded-2xl shadow-2xl border border-teal-400/40 backdrop-blur-2xl flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Quick Book</span>
            </button>
            <a
              href="tel:+911800555091"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Helpline</span>
            </a>
            <button
              onClick={() => setShowQuickWidget(false)}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              title="Close floating widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
