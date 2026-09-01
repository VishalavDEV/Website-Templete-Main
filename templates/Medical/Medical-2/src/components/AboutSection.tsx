import React, { useState } from 'react';
import { 
  HeartHandshake, Shield, Sparkles, Award, CheckCircle2, 
  Building2, Users, Calendar, ArrowRight, Microchip, Stethoscope 
} from 'lucide-react';

interface AboutSectionProps {
  onBookAppointment: () => void;
  onExploreDoctors: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onBookAppointment,
  onExploreDoctors,
}) => {
  const [activeFacilityTab, setActiveFacilityTab] = useState<number>(0);

  const valuesList = [
    {
      title: 'Patient-First Clinical Dignity',
      desc: 'Every treatment protocol is custom-crafted around the individual’s physical comfort, emotional wellness, and personal recovery goals.',
      icon: HeartHandshake,
    },
    {
      title: 'Sub-Millimeter Scientific Rigor',
      desc: 'Integrating AI-assisted imaging, robotic surgical arms, and genomic precision diagnostics for verified clinical outcomes.',
      icon: Microchip,
    },
    {
      title: 'Transparent & Rapid Access',
      desc: 'Zero-wait emergency triage, transparent pricing schedules, and direct digital access to complete health records and lab reports.',
      icon: Shield,
    },
    {
      title: 'Continuous Clinical Innovation',
      desc: 'Active medical research fellowships and ongoing clinical trials in interventional cardiology and cerebrovascular recovery.',
      icon: Sparkles,
    },
  ];

  const facilities = [
    {
      title: 'Hybrid Robotic Surgical Suites',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80',
      tag: 'Surgical Tower, Level 4',
      specs: 'ISO Class 5 Ultra-Clean Airflow • Biplane Fluoroscopy • Real-Time Telemetric Hemodynamics',
      description: 'Our surgical suites integrate intraoperative 3D navigation and MAKO robotic arm guidance, allowing orthopedic and cardiac surgeons to perform complex interventions with sub-millimeter tissue preservation.'
    },
    {
      title: 'Advanced 3.0T MRI & Diagnostic Pavilion',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
      tag: 'Diagnostic Pavilion, Sub-Level 1',
      specs: 'Wide-Bore 70cm Gantry • Acoustic Noise Shielding • 4-Hour Stat Radiologist Readouts',
      description: 'Equipped with wide-bore, ambient scenic projection MRI systems, our radiology pavilion provides claustrophobia-free examinations with crisp anatomical resolution for nervous, cardiac, and musculoskeletal diagnostics.'
    },
    {
      title: 'Sensory-Friendly Pediatric Care Wing',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1000&q=80',
      tag: 'Children’s Pavilion, Level 2',
      specs: 'Interactive Light Walls • Level-III NICU Pods • Separate Well & Sick Waiting Zones',
      description: 'Designed specifically to relieve anxiety in children and families, our pediatric wing combines a joyful, warm environment with top pediatric subspecialists and gentle exam techniques.'
    },
    {
      title: 'Robotic Motion & Physical Rehabilitation Lab',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
      tag: 'Mobility Wing, Level 1',
      specs: 'AlterG Anti-Gravity Treadmills • Computerized Dynamic Posturography • Hydrotherapy Pool',
      description: 'Staffed by certified neurological and sports physical therapists, our rehabilitation gym guides patients safely from post-operative vulnerability to full daily mobility and athletic performance.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-700 font-black text-[10px] tracking-widest uppercase bg-teal-100/60 border border-teal-200/60 px-3.5 py-1 rounded-full">
            Our Healthcare Heritage & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Setting the Benchmark for Modern Clinical Excellence
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded with a commitment to human dignity and medical innovation, Medicio Medical Center has grown into an internationally accredited regional hospital recognized for breakthrough clinical treatments and patient-centered hospitality.
          </p>
        </div>

        {/* 4 Pillars of Clinical Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesList.map((val, idx) => {
            const Icon = val.icon;
            const bgStyles = [
              'bg-indigo-50 text-indigo-600',
              'bg-teal-50 text-teal-600',
              'bg-amber-50 text-amber-600',
              'bg-emerald-50 text-emerald-600',
            ][idx % 4];

            return (
              <div
                key={idx}
                id={`about-value-card-${idx}`}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgStyles}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">{val.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Facility Tour & Technology Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-teal-700 uppercase tracking-widest block">
                World-Class Clinical Infrastructure
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Explore Our Medical Facilities & Surgical Suites
              </h3>
            </div>

            {/* Facility Tab Buttons */}
            <div className="flex flex-wrap gap-2">
              {facilities.map((fac, idx) => (
                <button
                  key={idx}
                  id={`facility-tab-btn-${idx}`}
                  onClick={() => setActiveFacilityTab(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    activeFacilityTab === idx
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {fac.title.split(' ')[0]} {fac.title.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Facility Display */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative group">
              <img
                src={facilities[activeFacilityTab].image}
                alt={facilities[activeFacilityTab].title}
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-teal-300 text-xs font-semibold px-3 py-1 rounded-lg border border-white/10">
                {facilities[activeFacilityTab].tag}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xl font-extrabold text-slate-900">
                {facilities[activeFacilityTab].title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {facilities[activeFacilityTab].description}
              </p>

              <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-100">
                <span className="text-[10px] font-black text-teal-900 uppercase tracking-widest block mb-1">
                  Key Technical Specifications:
                </span>
                <p className="text-xs font-semibold text-teal-800">
                  {facilities[activeFacilityTab].specs}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  id="about-book-tour-btn"
                  onClick={onBookAppointment}
                  className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center gap-1.5 cursor-pointer active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Visit in this Facility</span>
                </button>
                <button
                  id="about-meet-doctors-btn"
                  onClick={onExploreDoctors}
                  className="px-4 py-2.5 text-slate-700 hover:text-teal-700 text-xs font-semibold transition cursor-pointer"
                >
                  Meet Faculty →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Geometric Balance Statistics Numbers Grid */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="space-y-1 pt-4 sm:pt-0">
              <span className="text-3xl sm:text-5xl font-black text-white block">48+</span>
              <span className="text-xs sm:text-sm font-bold text-teal-400 block">Board-Certified Specialists</span>
              <p className="text-[11px] text-slate-400">Harvard, Hopkins & Mayo alumni</p>
            </div>
            <div className="space-y-1 pt-4 sm:pt-0">
              <span className="text-3xl sm:text-5xl font-black text-teal-400 block">14</span>
              <span className="text-xs sm:text-sm font-bold text-teal-400 block">Dedicated Departments</span>
              <p className="text-[11px] text-slate-400">Cardiology, Neuro, Ortho & more</p>
            </div>
            <div className="space-y-1 pt-4 sm:pt-0">
              <span className="text-3xl sm:text-5xl font-black text-white block">62,000+</span>
              <span className="text-xs sm:text-sm font-bold text-teal-400 block">Patients Treated Safely</span>
              <p className="text-[11px] text-slate-400">Annual inpatient & outpatient care</p>
            </div>
            <div className="space-y-1 pt-4 sm:pt-0">
              <span className="text-3xl sm:text-5xl font-black text-teal-400 block">18+</span>
              <span className="text-xs sm:text-sm font-bold text-teal-400 block">Years of Healthcare Trust</span>
              <p className="text-[11px] text-slate-400">Serving New England communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
