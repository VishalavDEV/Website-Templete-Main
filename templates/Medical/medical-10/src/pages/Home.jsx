import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Award,
  Users,
  Clock,
  ArrowRight,
  PhoneCall,
  CheckCircle,
  Activity,
  Zap,
  Sparkles,
  Search
} from "lucide-react";

import PageTransition from "../components/PageTransition";
import AnimatedEcgWave from "../components/AnimatedEcgWave";
import StatCounter from "../components/StatCounter";
import DepartmentCard from "../components/DepartmentCard";
import ServiceCard from "../components/ServiceCard";
import DoctorCard from "../components/DoctorCard";
import PackageCard from "../components/PackageCard";
import BlogCard from "../components/BlogCard";
import TestimonialSlider from "../components/TestimonialSlider";
import FaqAccordion from "../components/FaqAccordion";
import AiHealthcareWidget from "../components/AiHealthcareWidget";
import AppointmentModal from "../components/AppointmentModal";

import { doctorsData } from "../data/doctorsData";
import { departmentsData } from "../data/departmentsData";
import { servicesData } from "../data/servicesData";
import { packagesData } from "../data/packagesData";
import { blogsData } from "../data/blogsData";
import { faqsData } from "../data/faqsData";

export default function Home() {
  const navigate = useNavigate();
  const [selectedDeptFilter, setSelectedDeptFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  // Form state for quick appointment
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Cardiology",
    doctor: "Dr. Elena Vance",
    date: "",
    time: "10:00 AM",
    reason: ""
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAppointmentData({
      ...formData,
      bookingRef: Math.floor(100000 + Math.random() * 900000)
    });
    setIsModalOpen(true);
  };

  const openBookModalForDoctor = (doctor) => {
    setFormData(prev => ({ ...prev, doctor: doctor.name, department: doctor.department }));
    document.getElementById("appointment-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredDoctors =
    selectedDeptFilter === "All"
      ? doctorsData.slice(0, 4)
      : doctorsData.filter(d => d.department.toLowerCase() === selectedDeptFilter.toLowerCase());

  return (
    <PageTransition>
      {/* Appointment Modal Popup */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appointmentData={appointmentData}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden">
        {/* Background Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-semibold glow-cyan">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
                <span>Next-Gen AI Diagnostics & Trusted Hospital Care</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Smarter Healthcare. <br />
                <span className="text-gradient">Better Living.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Empowering your health journey with board-certified specialist doctors, 24/7 trauma emergency response, advanced AI-guided diagnostic technology, and personalized patient-centered care.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => document.getElementById("appointment-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="py-4 px-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm transition-all shadow-xl hover:shadow-cyan-500/30 flex items-center space-x-2.5 glow-cyan"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>

                <Link
                  to="/services"
                  className="py-4 px-8 rounded-2xl glass-card border border-white/15 hover:border-cyan-400 text-white font-bold text-sm transition-all flex items-center space-x-2 hover:bg-white/5"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </Link>
              </div>

              {/* Emergency Helpline Banner */}
              <div className="pt-4 flex items-center space-x-4 border-t border-white/10">
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20">
                  <PhoneCall className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Need Immediate Assistance?</div>
                  <div className="text-white font-mono font-extrabold text-base flex items-center gap-2">
                    <span>24/7 Emergency Hotline:</span>
                    <span className="text-red-400">+1 (800) 785-7322</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Visual Illustration / Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-cyan-500/30 glow-cyan">
                {/* Hero Image */}
                <div className="relative h-[420px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                    alt="AICarePlus Doctor"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  {/* ECG Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <div className="text-[11px] font-mono text-cyan-300 mb-1 flex items-center justify-between">
                      <span>VITAL SIGN MONITORING</span>
                      <span className="text-emerald-400 font-bold">NORMAL 72 BPM</span>
                    </div>
                    <AnimatedEcgWave className="h-10" />
                  </div>
                </div>

                {/* Floating Card 1: Specialist Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 -left-6 glass-card p-3.5 rounded-2xl border border-white/20 shadow-2xl flex items-center space-x-3 text-white hidden sm:flex"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500 text-slate-950">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">100% Certified</div>
                    <div className="text-[10px] text-slate-400">Board Specialists</div>
                  </div>
                </motion.div>

                {/* Floating Card 2: AI Diagnostic Status */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-28 -right-6 glass-card p-3.5 rounded-2xl border border-cyan-400/40 shadow-2xl flex items-center space-x-3 text-white hidden sm:flex"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500 text-slate-950">
                    <Activity className="w-5 h-5 animate-spin" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-400">AI Diagnostic Active</div>
                    <div className="text-[10px] text-slate-300">99.8% Precision Rate</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TRUST STATISTICS SECTION */}
      <section className="py-12 relative border-y border-white/10 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter value="50+" title="Specialist Doctors" icon={Stethoscope} />
            <StatCounter value="20+" title="Medical Departments" icon={HeartPulse} />
            <StatCounter value="10K+" title="Happy Patients" icon={Users} />
            <StatCounter value="24/7" title="Healthcare Support" icon={Clock} />
          </div>
        </div>
      </section>

      {/* MEDICAL DEPARTMENTS SECTION */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Center of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Medical Departments
            </h2>
            <p className="text-slate-400 text-sm">
              Specialized clinical institutes operating with cutting-edge medical hardware and multidisciplinary expert panels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentsData.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL SERVICES SECTION */}
      <section className="py-20 relative bg-slate-950/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Comprehensive Care
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Medical Services & Facilities
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBookClick={() => document.getElementById("appointment-section")?.scrollIntoView({ behavior: "smooth" })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI & MODERN HEALTHCARE INNOVATION SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Futuristic Healthcare Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              AI-Powered Diagnostic Excellence
            </h2>
            <p className="text-slate-400 text-sm">
              Experience the future of medical diagnostics with real-time biometric analytics, ultra-high-definition imaging, and neural risk stratification.
            </p>
          </div>

          <AiHealthcareWidget />
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section className="py-20 relative bg-slate-950/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              World-Class Physicians
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Meet Our Specialist Doctors
            </h2>
            <p className="text-slate-400 text-sm">
              Leading clinical experts dedicated to compassionate, high-precision healthcare delivery.
            </p>

            {/* Department Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {["All", "Cardiology", "Neurology", "Pediatrics", "Orthopedics"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDeptFilter(dept)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedDeptFilter === dept
                      ? "bg-cyan-500 text-white shadow-lg glow-cyan"
                      : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <DoctorCard
                key={doc.id}
                doctor={doc}
                onBookClick={openBookModalForDoctor}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/doctors"
              className="inline-flex items-center space-x-2 py-3 px-6 rounded-xl bg-white/10 hover:bg-cyan-500 text-white font-bold text-xs transition-all border border-white/10"
            >
              <span>Explore All 50+ Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Why AICarePlus AI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Setting New Benchmarks in Modern Healthcare
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We combine human empathy with cutting-edge medical technology to provide safer, faster, and more accurate healthcare outcomes for every patient.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: "Experienced Specialist Doctors", desc: "15+ average years of clinical mastery across all sub-specialties." },
                  { title: "Advanced AI Diagnostic Suite", desc: "Sub-millimeter imaging resolution and instant biomarker analysis." },
                  { title: "24/7 Emergency Trauma Response", desc: "Zero waiting triage gate with dedicated shock rooms and cath labs." },
                  { title: "Patient-Centered Treatment", desc: "Holistic care plans tailored to individual lifestyle and genetic markers." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 glass-card p-4 rounded-xl border border-white/10">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 mt-0.5">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
                alt="Modern Hospital Facility"
                className="rounded-3xl object-cover h-72 w-full glass-card p-2 border border-white/10 shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                alt="AI Diagnostics Lab"
                className="rounded-3xl object-cover h-72 w-full glass-card p-2 border border-white/10 shadow-xl sm:translate-y-6"
              />
            </div>

          </div>
        </div>
      </section>

      {/* APPOINTMENT SECTION */}
      <section id="appointment-section" className="py-20 relative bg-slate-950/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-cyan-500/30 shadow-2xl glow-cyan">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  Instant Booking Interface
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Schedule Your Consultation
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Book an in-person or virtual consultation with our board-certified specialists in seconds.
                </p>

                <div className="pt-4 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Instant SMS & Email Confirmation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>No Wait Time Priority Queue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Free Rescheduling up to 2 Hours Prior</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Patient Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Select Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {departmentsData.map(d => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Doctor</label>
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {doctorsData.map(d => (
                        <option key={d.id} value={d.name}>{d.name} ({d.department})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Reason for Visit / Symptoms</label>
                    <textarea
                      name="reason"
                      rows="2"
                      placeholder="Briefly describe your symptoms or visit reason..."
                      value={formData.reason}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm transition-all shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Confirm & Book Appointment</span>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* HEALTH PACKAGES SECTION */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Preventive Health Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Comprehensive Health Packages
            </h2>
            <p className="text-slate-400 text-sm">
              Tailored biomarker screenings designed for early detection, active longevity, and whole-family wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagesData.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelect={() => navigate("/packages")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT TESTIMONIALS SECTION */}
      <section className="py-20 relative bg-slate-950/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Patient Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Stories of Recovery & Trust
            </h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* MEDICAL BLOG SECTION */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Medical Insights
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Latest Health & Innovation Articles
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogsData.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION PREVIEW */}
      <section className="py-20 relative bg-slate-950/60 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <FaqAccordion items={faqsData} allowSearch={false} />

          <div className="text-center mt-10">
            <Link
              to="/faq"
              className="inline-flex items-center space-x-2 py-3 px-6 rounded-xl bg-white/10 hover:bg-cyan-500 text-white font-bold text-xs transition-all border border-white/10"
            >
              <span>View All FAQ Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
