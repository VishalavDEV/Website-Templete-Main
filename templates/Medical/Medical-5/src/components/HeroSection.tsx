import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Calendar,
  Sparkles,
  Star,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openBooking, setActivePage, setFilterSpecialtyId } = useApp();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleSpecialtyPill = (specId: string) => {
    setFilterSpecialtyId(specId);
    setActivePage('doctors');
  };

  return (
    <section
      id="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      style={{ backgroundColor: '#F9F7FB' }}
    >
      {/* Luxury Atmospheric Glow Orbs */}
      <div
        className="atmosphere-orb w-96 h-96 top-[-10%] right-[-10%]"
        style={{ background: '#E8DDF2' }}
      />
      <div
        className="atmosphere-orb w-[500px] h-[500px] bottom-[-20%] left-[-10%]"
        style={{ background: '#F2D9DF', opacity: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7">
            {/* Luxury Eyebrow with Line Divider */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-[#8B6FAE]" />
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-[#8B6FAE]">
                Care, Reimagined
              </span>
            </div>

            {/* Large Editorial Serif Headline */}
            <h1 className="serif text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] leading-[1.08] text-[#3E3445] tracking-tight">
              Healthcare that feels <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#665080]">human again.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#756B7C] max-w-lg leading-relaxed font-normal">
              A modern approach to healthcare that brings specialists, diagnostics and personalized
              care together in one calm experience.
            </p>

            {/* Prestige Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-book-appointment-btn"
                onClick={() => openBooking()}
                className="btn-lilac px-8 py-4 rounded-full font-bold shadow-lg shadow-[#8B6FAE]/25 hover:shadow-[#665080]/35 transition-all flex items-center justify-center gap-3 text-sm tracking-wide"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <button
                id="hero-find-specialist-btn"
                onClick={() => setActivePage('doctors')}
                className="bg-white/90 hover:bg-white px-8 py-4 rounded-full font-bold border border-[#3E3445]/10 text-[#3E3445] hover:text-[#665080] shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Find a Specialist</span>
                <ArrowRight className="w-4 h-4 text-[#8B6FAE]" />
              </button>
            </div>

            {/* Micro Highlights Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#756B7C] font-medium border-t border-[#3E3445]/8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#739B82]" />
                <span>Zero Wait Times on Arrival</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#739B82]" />
                <span>Same-Day Lab Results Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#739B82]" />
                <span>45-Min In-Depth Consultations</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual with Luxury 60px Frame & Frosted Glass Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            <div
              className="w-full max-w-[420px] sm:max-w-[440px] rounded-[60px] bg-gradient-to-br from-[#E8DDF2] to-[#F2D9DF] p-1.5 shadow-2xl relative overflow-hidden transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
              }}
            >
              <div className="w-full h-full rounded-[54px] bg-white relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80"
                  alt="Doctor and patient consultation in a peaceful modern sanctuary"
                  className="w-full h-[440px] sm:h-[480px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E3445]/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="serif text-lg font-bold">Aura Medical Pavilion</p>
                  <p className="text-xs text-white/90">
                    Designed for peace, privacy, and clinical precision.
                  </p>
                </div>

                {/* Floating Top Left Badge: Instant Care */}
                <div className="absolute top-6 left-6 lilac-frost-card p-3.5 flex items-center gap-3 w-48 shadow-lg">
                  <div className="w-9 h-9 rounded-full bg-[#8B6FAE] flex items-center justify-center text-white font-semibold shadow-xs">
                    <span className="text-[11px]">24/7</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#756B7C]">Instant Care</span>
                    <span className="text-xs font-bold text-[#3E3445]">Available Now</span>
                  </div>
                </div>

                {/* Floating Bottom Right Badge: Specialist Card */}
                <div className="absolute bottom-16 right-4 lilac-frost-card p-3.5 flex flex-col gap-2 w-52 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#F2D9DF] overflow-hidden flex items-center justify-center text-[#D98B9C] font-bold text-xs">
                      DR
                    </div>
                    <span className="text-xs font-bold text-[#3E3445]">Dr. Maya Raman</span>
                  </div>
                  <div className="h-[1px] w-full bg-[#3E3445]/10" />
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-[#756B7C]">Cardiology Specialist</span>
                    <span className="font-bold text-[#739B82]">★★★★★ 4.9</span>
                  </div>
                </div>

                {/* Floating Side Badge: 120+ Experts */}
                <div className="absolute top-[42%] -left-3 lilac-frost-card p-3 flex flex-col items-center gap-0.5 shadow-xl">
                  <span className="text-lg font-bold text-[#8B6FAE]">120+</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#756B7C] font-bold">
                    Specialists
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Specialty Discovery Strip with Luxury Cards */}
        <div className="mt-16 pt-8 border-t border-[rgba(62,52,69,0.08)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#756B7C] mb-1">
                Browse Specialties
              </h3>
              <p className="text-xs sm:text-sm text-[#756B7C]">
                Find the right specialist for your personalized health journey.
              </p>
            </div>
            <button
              id="hero-view-all-specialties-btn"
              onClick={() => setActivePage('specialties')}
              className="text-xs font-semibold text-[#8B6FAE] hover:text-[#665080] flex items-center gap-1 hover:underline"
            >
              <span>View All 12 Specialties</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-3 scrollbar-none">
            {[
              { id: 'cardiology', name: 'Cardiology', count: '14 Specialists' },
              { id: 'neurology', name: 'Neurology', count: '9 Specialists' },
              { id: 'dermatology', name: 'Dermatology', count: '12 Specialists' },
              { id: 'orthopedics', name: 'Orthopedics', count: '11 Specialists' },
              { id: 'womens-health', name: "Women's Health", count: '8 Specialists' },
              { id: 'mental-wellness', name: 'Mental Wellness', count: '18 Specialists' },
              { id: 'general-medicine', name: 'Preventive Medicine', count: '16 Specialists' },
              { id: 'pathology-diagnostics', name: '3T Diagnostics', count: '10 Specialists' },
            ].map((spec) => (
              <div
                key={spec.id}
                id={`hero-spec-card-${spec.id}`}
                onClick={() => handleSpecialtyPill(spec.id)}
                className="lilac-frost-card min-w-[170px] p-4 flex flex-col justify-between group cursor-pointer transition-all hover:bg-white border border-[#3E3445]/8 hover:border-[#8B6FAE]/30 shadow-xs hover:shadow-md"
              >
                <div className="w-8 h-8 rounded-xl bg-[#E8DDF2] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-3.5 h-3.5 border-2 border-[#8B6FAE] rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#3E3445] mb-0.5 group-hover:text-[#665080] transition-colors">
                    {spec.name}
                  </h4>
                  <span className="text-[10px] text-[#756B7C]">{spec.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
