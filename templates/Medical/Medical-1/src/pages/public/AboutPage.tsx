import React from 'react';
import {
  ShieldCheck,
  Award,
  HeartPulse,
  Users,
  Target,
  CheckCircle2,
  Calendar,
  Building,
  Microscope,
  Cpu,
  PhoneCall,
  Activity,
  Sparkles,
  Zap,
  Globe,
  Clock
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';

interface AboutPageProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <ScrollReveal direction="3d">
          <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold text-teal-300 uppercase tracking-widest bg-teal-500/20 px-4 py-1.5 rounded-full border border-teal-400/30 shadow-xs backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-300 animate-pulse" />
              About Qure Nexa Medical Center
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Pioneering Healthcare with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-200">Precision & Empathy</span>
            </h1>
            <p className="text-teal-100/90 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
              Founded with a vision to combine groundbreaking biomedical research with patient-centered compassionate healing,
              Qure Nexa stands as a beacon of clinical excellence and academic innovation.
            </p>

            {/* Top Quick Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-200 bg-white/10 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-md">
                <Globe className="w-4 h-4 text-teal-400" />
                <span>JCI International Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-200 bg-white/10 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-md">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Top 100 Global Hospital 2026</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-200 bg-white/10 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-md">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Level 1 24/7 Trauma Center</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <div className="absolute right-[-60px] top-[-60px] w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-[-60px] bottom-[-60px] w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Hospital Story & Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-lg border border-teal-200/60">
                  Our Heritage & Journey
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
                  Over 30 Years of Medical Groundbreaking
                </h2>
              </div>
              <p className="text-base text-slate-600 leading-relaxed">
                Established in 1994 as a modest cardiovascular clinic, Qure Nexa has grown into a 350-bed tertiary university teaching
                hospital. We house the Pacific Northwest’s most active Hybrid Cath Lab, a Level 1 Trauma Center, and a dedicated Robotic Surgery Institute.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our multidisciplinary clinical board brings together fellowship-trained surgeons, diagnostic radiologists, and compassionate nursing teams
                united under one singular mission: delivering zero-error healthcare outcomes.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <ThreeDCard intensity={8}>
                  <div className="p-5 bg-gradient-to-br from-teal-50/80 to-emerald-50/40 rounded-2xl border border-teal-200/80 h-full shadow-2xs">
                    <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center mb-3 shadow-sm">
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Our Mission</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Provide accessible, ethical, and advanced clinical care to every patient regardless of circumstance.
                    </p>
                  </div>
                </ThreeDCard>
                <ThreeDCard intensity={8}>
                  <div className="p-5 bg-gradient-to-br from-sky-50/80 to-blue-50/40 rounded-2xl border border-sky-200/80 h-full shadow-2xs">
                    <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-3 shadow-sm">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Our Vision</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      To be the global benchmark for robotic surgery, organ preservation, and individualized genomic diagnostics.
                    </p>
                  </div>
                </ThreeDCard>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <ThreeDCard intensity={10}>
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 relative">
                  <img
                    src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1000"
                    alt="Qure Nexa Main Campus"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-teal-300 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800/80 backdrop-blur-md">
                      Main Hospital Tower
                    </span>
                    <h3 className="text-xl font-bold mt-1.5 text-white">Seattle Metropolitan Campus</h3>
                  </div>
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-500 text-white flex items-center justify-center font-black text-xl shadow-md shadow-teal-500/30">
                    30+
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 uppercase tracking-wider">Years of Excellence</p>
                    <p className="text-xs font-semibold text-teal-700">500,000+ Lives Transformed</p>
                  </div>
                </div>
              </div>
            </ThreeDCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Advanced Infrastructure & Technology (Redesigned Facilities Cards) */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-100/80 px-4 py-1.5 rounded-full border border-teal-200">
                World-Class Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Advanced Hospital Facilities & Technology
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our campus integrates cutting-edge robotics, high-field neuroimaging, and sterile surgical theaters designed according to international standards.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: 'Robotic Surgery Theater',
                desc: 'Equipped with Mako™ and da Vinci Xi® surgical platforms for sub-millimeter orthopedic and urological precision.',
                tag: 'Sub-Millimeter Precision',
                accent: 'from-teal-500 to-emerald-600'
              },
              {
                icon: Microscope,
                title: '3T Digital MRI & Cath Lab',
                desc: 'Ultra-fast cardiac magnetic resonance and biplane fluoroscopy suites ensuring immediate diagnostic accuracy.',
                tag: 'High-Field Diagnostics',
                accent: 'from-sky-500 to-blue-600'
              },
              {
                icon: Building,
                title: 'Level 1 Trauma & Resuscitation',
                desc: '24/7 direct-access emergency trauma bays with dedicated CT scanners and immediate blood-warming systems.',
                tag: '24/7 Emergency Access',
                accent: 'from-rose-500 to-red-600'
              },
              {
                icon: HeartPulse,
                title: '65-Bed Intensive Care (ICU/NICU)',
                desc: 'Round-the-clock intensivist coverage, isolated HEPA negative-pressure suites, and Level IV neonatal pods.',
                tag: 'HEPA Negative Pressure',
                accent: 'from-indigo-500 to-purple-600'
              },
              {
                icon: Users,
                title: 'Physical Therapy & Rehab Gym',
                desc: 'Hydrotherapy pools, zero-gravity treadmills, and robotic gait trainers for accelerated post-op recovery.',
                tag: 'Zero-Gravity Recovery',
                accent: 'from-amber-500 to-orange-600'
              },
              {
                icon: ShieldCheck,
                title: 'Automated Pharmacy & Diagnostics',
                desc: 'Bar-coded robotic medication dispensing minimizing medication errors to zero percent.',
                tag: 'Zero-Error Dispensing',
                accent: 'from-emerald-500 to-teal-600'
              }
            ].map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <ScrollReveal key={idx} direction="3d" delay={idx * 70}>
                  <ThreeDCard intensity={12}>
                    <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 group h-full flex flex-col justify-between relative overflow-hidden">
                      {/* Top Accent Line */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${fac.accent} rounded-t-3xl`}></div>

                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-13 h-13 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                            {fac.tag}
                          </span>
                        </div>

                        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                          {fac.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                          {fac.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-teal-700 group-hover:text-teal-800">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        <span>Certified Clinical Standard</span>
                      </div>
                    </div>
                  </ThreeDCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Certifications & Accreditations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-widest bg-teal-500/20 px-3.5 py-1.5 rounded-full border border-teal-400/30">
                  Global Quality Assurance
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Internationally Recognized Medical Quality & Patient Safety
                </h3>
                <p className="text-sm text-teal-100/90 leading-relaxed">
                  Qure Nexa maintains dual accreditation with Joint Commission International (JCI) and College of American Pathologists (CAP). Our clinical protocols strictly align with ISO 9001:2025 infection control benchmarks.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                  <ShieldCheck className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                  <p className="text-xs font-extrabold text-white">JCI Accredited</p>
                  <p className="text-[10px] text-teal-200 mt-0.5">Gold Seal of Approval</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                  <Award className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs font-extrabold text-white">CAP Certified</p>
                  <p className="text-[10px] text-emerald-200 mt-0.5">Advanced Pathology</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                  <Activity className="w-8 h-8 text-sky-400 mx-auto mb-2" />
                  <p className="text-xs font-extrabold text-white">ISO 9001:2025</p>
                  <p className="text-[10px] text-sky-200 mt-0.5">Zero-Infection Protocol</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                  <HeartPulse className="w-8 h-8 text-rose-400 mx-auto mb-2" />
                  <p className="text-xs font-extrabold text-white">99.8% Success</p>
                  <p className="text-[10px] text-rose-200 mt-0.5">Surgical Outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Leadership & CTA */}
      <ScrollReveal direction="scale">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-teal-600 to-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-teal-500/30">
            <HeartPulse className="w-8 h-8 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ready to Experience World-Class Care?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Schedule an appointment with our specialist physicians or consult our 24/7 care coordination desk today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<Calendar className="w-5 h-5" />}
              onClick={onOpenBooking}
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('doctors')}
            >
              Browse Doctors
            </Button>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};
