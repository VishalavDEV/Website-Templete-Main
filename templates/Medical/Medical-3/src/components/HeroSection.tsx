import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Clock, 
  Activity, 
  Heart,
  ChevronRight, 
  CheckCircle,
  Video,
  Sparkles,
  MapPin,
  Stethoscope,
  PhoneCall
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const { 
    openBooking, 
    setActiveTab, 
    doctors, 
    departments,
    setSelectedSpecialtyFilter,
  } = useApp();

  // Quick search widget state inside bento
  const [selectedSpecialty, setSelectedSpecialty] = useState('Cardiology');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [widgetDoctorId, setWidgetDoctorId] = useState('');
  const [widgetDate, setWidgetDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const handleQuickSpecialtySearch = (spec: string) => {
    setSelectedSpecialtyFilter(spec);
    setActiveTab('doctors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWidgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (widgetDoctorId) {
      const foundDoc = doctors.find(d => d.id === widgetDoctorId);
      openBooking(foundDoc);
    } else {
      setSelectedSpecialtyFilter(selectedSpecialty);
      setActiveTab('doctors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="relative pt-28 sm:pt-36 pb-14 overflow-hidden bg-[#FAF9F6] text-[#0A1128] selection:bg-[#4ECDC4] selection:text-[#0A1128]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8">
        
        {/* Main Bento Hero Split: Headline (7/12) + Bento Stack (5/12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Bento Headline & Introduction (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center gap-6 lg:pr-6"
          >
            {/* Bento Pill Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] py-1.5 px-4 bg-[#1A535C]/10 text-[#1A535C] rounded-full border border-[#1A535C]/15 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] animate-pulse" />
                The Future of Personal Healthcare
              </span>
            </div>

            {/* High-Impact Display Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.0] tracking-tight text-[#0A1128] font-['Manrope']">
              Healthcare that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A535C] via-[#0D9488] to-[#4ECDC4]">
                moves at your pace.
              </span>
            </h1>

            {/* Narrative copy */}
            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed max-w-xl font-normal">
              Experience a revolutionary platform where premium medical expertise meets seamless technology. Personalized care, prioritized for your life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-2">
              <button
                onClick={() => openBooking()}
                id="hero-primary-cta"
                className="group flex items-center gap-3 bg-[#0A1128] text-white text-sm sm:text-base font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-xl hover:bg-[#1A535C] hover:shadow-[#1A535C]/25 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#4ECDC4]" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('doctors');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                id="hero-secondary-cta"
                className="font-bold text-sm sm:text-base text-[#0A1128] border-b-2 border-transparent hover:border-[#1A535C] pb-1 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Stethoscope className="w-4 h-4 text-[#1A535C]" />
                <span>Explore Specialists</span>
              </button>
            </div>

            {/* Clinical Trust Micro-Indicators */}
            <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg border-t border-gray-200/80 text-left">
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-[#0A1128] font-['Manrope'] block">99.4%</span>
                <span className="text-[11px] text-[#4A5568] font-semibold uppercase tracking-wider">Precision Rate</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-[#0A1128] font-['Manrope'] block">&lt; 15 min</span>
                <span className="text-[11px] text-[#4A5568] font-semibold uppercase tracking-wider">ER Wait Time</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-[#0A1128] font-['Manrope'] block">120+</span>
                <span className="text-[11px] text-[#4A5568] font-semibold uppercase tracking-wider">Top Faculty</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Bento Hero Grid Stack (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {/* Top Large Bento Card (Physician Hero Tile) */}
            <div className="col-span-2 relative h-72 sm:h-80 rounded-[36px] sm:rounded-[40px] overflow-hidden shadow-xl border border-white bg-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85" 
                alt="Dr. Sarah Lin, Chief of Interventional Cardiology" 
                className="w-full h-full object-cover object-top filter brightness-[0.98] group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 via-transparent to-black/10" />

              {/* Bento Floating Doctor Tag */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse shadow-[0_0_8px_rgba(78,205,196,0.9)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Dr. Sarah Lin, MD, FACC
                  </span>
                </div>
                <p className="text-xs text-slate-300">Head of Interventional Cardiology • Harvard Fellow</p>
              </div>

              {/* Top rating badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-[#0A1128] flex items-center gap-1 shadow-md">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>4.98</span>
              </div>
            </div>

            {/* Bottom Left Bento Cell: Next Sync / Slot (Navy Deep Bento) */}
            <div className="col-span-1 bg-[#0A1128] rounded-[28px] sm:rounded-[32px] p-5 flex flex-col justify-between text-white border border-[#1A535C] shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#4ECDC4]">
                Next Sync
              </span>
              <div className="mt-4">
                <div className="text-xl sm:text-2xl font-extrabold font-['Manrope'] text-white">
                  10:30 AM
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-300 mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#4ECDC4]" />
                  <span>Tomorrow, Central Lab</span>
                </div>
              </div>
            </div>

            {/* Bottom Right Bento Cell: Vitals Score (Mint Accent Bento) */}
            <div className="col-span-1 bg-[#4ECDC4] rounded-[28px] sm:rounded-[32px] p-5 flex flex-col justify-between text-[#0A1128] border border-white shadow-xl">
              <div className="w-8 h-8 bg-white/40 rounded-full flex items-center justify-center text-[#0A1128]">
                <Heart className="w-4 h-4 fill-[#0A1128]" />
              </div>
              <div className="mt-4">
                <div className="text-2xl sm:text-3xl font-extrabold font-['Manrope'] text-[#0A1128]">
                  98%
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0A1128]/80 block">
                  Vitals Score
                </span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* BOTTOM BENTO GRID ROW: 4 High-Impact Feature Tiles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Bento Tile 1: Find Specialists Selector */}
          <div className="bg-white p-6 rounded-[32px] border border-gray-200/90 shadow-sm flex flex-col justify-center hover:border-[#4ECDC4] transition-all group">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A5568] mb-3">
              Find Specialists
            </h4>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="text-sm font-bold text-[#0A1128] bg-transparent focus:outline-none cursor-pointer w-full"
              >
                <option value="Cardiology">Cardiology & Vascular</option>
                <option value="Neurology">Neurology & Spine</option>
                <option value="Oncology">Precision Oncology</option>
                <option value="Orthopedics">Orthopedics & Joint</option>
                <option value="Pediatrics">Pediatrics & Fetal</option>
              </select>
            </div>
            <button 
              onClick={() => handleQuickSpecialtySearch(selectedSpecialty)}
              className="text-xs font-bold text-[#1A535C] mt-2 flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              <span>Advanced Search</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#4ECDC4]" />
            </button>
          </div>

          {/* Bento Tile 2: 120+ Top Specialists Metric */}
          <div className="bg-white p-6 rounded-[32px] border border-gray-200/90 shadow-sm flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] font-['Manrope']">
                120+
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#4A5568] mt-1">
                Top Specialists
              </div>
              <p className="text-[11px] text-slate-500 mt-2">Board-certified clinical leads</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#1A535C]/8 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Bento Tile 3: Department Peek */}
          <div 
            onClick={() => {
              setActiveTab('departments');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white p-6 rounded-[32px] border border-gray-200/90 shadow-sm flex flex-col justify-center cursor-pointer hover:border-[#4ECDC4] transition-all"
          >
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A5568] mb-3">
              Department Peek
            </h4>
            <div className="flex gap-3 items-center">
              <div className="w-11 h-11 rounded-2xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center text-xl shadow-2xs">
                🧠
              </div>
              <div>
                <div className="text-xs font-bold text-[#0A1128]">Neurology & Spine</div>
                <div className="text-[10px] text-[#4A5568]">8 Active Research Cells</div>
              </div>
            </div>
          </div>

          {/* Bento Tile 4: Emergency Care Direct Tile */}
          <div 
            onClick={() => {
              setActiveTab('emergency');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#1A535C] p-6 rounded-[32px] shadow-lg flex flex-col justify-center text-white border border-[#4ECDC4]/30 cursor-pointer hover:brightness-105 transition-all"
          >
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4ECDC4] mb-2 flex items-center justify-between">
              <span>Emergency Care</span>
              <span className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-ping" />
            </h4>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-slate-200">Direct 24/7 Response</span>
              <span className="text-lg sm:text-xl font-mono font-bold tracking-tight text-white">
                +1 (800) 227-3911
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
