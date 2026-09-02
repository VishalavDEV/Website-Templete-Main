import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  Stethoscope, 
  FlaskConical, 
  Smile, 
  Apple, 
  Dumbbell, 
  Pill, 
  Heart, 
  Activity, 
  Droplets, 
  Moon, 
  Footprints, 
  Scale, 
  Calendar, 
  Video, 
  Clock, 
  MoreVertical, 
  ShieldCheck, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { 
  NavigationTab, 
  HealthMetrics, 
  Appointment, 
  HealthcareProfessional, 
  HubArticle, 
  FamilyMember 
} from '../../types';
import { HealthPlusRightSidebar } from './HealthPlusRightSidebar';

interface HomeHubProps {
  metrics: HealthMetrics;
  onUpdateMetrics: (newMetrics: HealthMetrics) => void;
  onNavigate: (tab: NavigationTab) => void;
  upcomingAppointments: Appointment[];
  doctors: HealthcareProfessional[];
  articles: HubArticle[];
  currentMember: FamilyMember;
  onOpenLogVitals: () => void;
  onJoinAppointment: (appointment: Appointment) => void;
  onArticleClick: (article: HubArticle) => void;
  onDoctorSelect: (doctor: HealthcareProfessional) => void;
  onOpenUploadReport: () => void;
  onOpenEmergency: () => void;
}

export const HomeHub: React.FC<HomeHubProps> = ({
  metrics,
  onUpdateMetrics,
  onNavigate,
  upcomingAppointments,
  doctors,
  articles,
  currentMember,
  onOpenLogVitals,
  onJoinAppointment,
  onArticleClick,
  onDoctorSelect,
  onOpenUploadReport,
  onOpenEmergency,
}) => {
  const [heroSearchInput, setHeroSearchInput] = useState('');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroSearchInput || !heroSearchInput.trim()) return;
    const term = heroSearchInput.trim().toLowerCase();
    if (term.includes('doctor') || term.includes('priya') || term.includes('rohan') || term.includes('consult')) {
      onNavigate('appointments');
    } else if (term.includes('lab') || term.includes('test') || term.includes('blood') || term.includes('report')) {
      onNavigate('reports');
    } else if (term.includes('mental') || term.includes('meditat') || term.includes('mind')) {
      onNavigate('mental');
    } else if (term.includes('diet') || term.includes('food') || term.includes('nutri')) {
      onNavigate('nutrition');
    } else if (term.includes('fit') || term.includes('work') || term.includes('gym')) {
      onNavigate('fitness');
    } else if (term.includes('med') || term.includes('pharm') || term.includes('pill')) {
      onNavigate('pharmacy');
    } else {
      onNavigate('services');
    }
  };

  // 6 Quick Access items exactly matching image
  const quickAccessItems = [
    {
      id: 'doctor-consult',
      title: 'Doctor Consultation',
      desc: 'Book online or in-person',
      iconBg: 'bg-[#E0F7FA]',
      icon: (
        <div className="relative">
          <svg className="w-7 h-7 text-[#00838F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
            <path d="M12 7v4" />
            <path d="M10 9h4" />
          </svg>
        </div>
      ),
      tab: 'appointments' as NavigationTab,
    },
    {
      id: 'lab-tests',
      title: 'Lab Tests',
      desc: 'Book tests & health checkups',
      iconBg: 'bg-[#EDE7F6]',
      icon: (
        <svg className="w-7 h-7 text-[#5E35B1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31a2 2 0 0 1-.37 1.17L4.2 18.72A2 2 0 0 0 5.86 22h12.28a2 2 0 0 0 1.66-3.28l-5.43-8.24A2 2 0 0 1 14 9.31V2" />
          <path d="M8.5 2h7" />
          <path d="M7 16h10" />
        </svg>
      ),
      tab: 'reports' as NavigationTab,
    },
    {
      id: 'mental-wellness',
      title: 'Mental Wellness',
      desc: 'Therapy, meditation & more',
      iconBg: 'bg-[#FFF3E0]',
      icon: (
        <svg className="w-7 h-7 text-[#E65100]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
        </svg>
      ),
      tab: 'mental' as NavigationTab,
    },
    {
      id: 'nutrition',
      title: 'Nutrition',
      desc: 'Diet plans & nutrition advice',
      iconBg: 'bg-[#F1F8E9]',
      icon: (
        <svg className="w-7 h-7 text-[#33691E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20.94c1.88-1.57 3.32-3.4 4.31-5.46 1.05-2.18 1.69-4.5 1.69-6.48 0-4.42-3.58-7-8-7s-8 2.58-8 7c0 1.98.64 4.3 1.69 6.48.99 2.06 2.43 3.89 4.31 5.46a2.02 2.02 0 0 0 4 0Z" />
          <path d="M12 2v3" />
        </svg>
      ),
      tab: 'nutrition' as NavigationTab,
    },
    {
      id: 'fitness',
      title: 'Fitness',
      desc: 'Workouts, yoga & tracking',
      iconBg: 'bg-[#E1F5FE]',
      icon: (
        <svg className="w-7 h-7 text-[#0277BD]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6.5 6.5 11 11" />
          <path d="m21 21-1-1" />
          <path d="m3 3 1 1" />
          <path d="m18 22 4-4" />
          <path d="m2 6 4-4" />
          <path d="m3 10 7-7" />
          <path d="m14 21 7-7" />
        </svg>
      ),
      tab: 'fitness' as NavigationTab,
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      desc: 'Medicines & prescriptions',
      iconBg: 'bg-[#FCE4EC]',
      icon: (
        <svg className="w-7 h-7 text-[#C2185B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
          <path d="m8.5 8.5 7 7" />
        </svg>
      ),
      tab: 'pharmacy' as NavigationTab,
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Top Flex Layout: Main Dashboard Center (Left) & Right Sidebar (Right) */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* CENTER MAIN COLUMN */}
        <div className="flex-1 min-w-0 space-y-6">
          
          {/* 1. User Greeting Header */}
          <div className="flex items-center space-x-3.5">
            <img
              src={currentMember?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'}
              alt={currentMember?.name || 'Ananya'}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-slate-200"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                Good Morning, {currentMember?.name ? currentMember.name.split(' ')[0] : 'Ananya'}! 👋
              </h1>
              <p className="text-xs sm:text-sm font-medium text-[#64748B]">
                Take charge of your health and live your best life.
              </p>
            </div>
          </div>

          {/* 2. Hero Search Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#E0F2FE] via-[#E6F7F3] to-[#DCFCE7] p-6 sm:p-8 border border-[#BAE6FD]/40 shadow-xs">
            <div className="relative z-10 max-w-lg">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] leading-tight mb-4">
                What health service are you looking for?
              </h2>

              <form onSubmit={handleHeroSearch} className="flex items-center max-w-md bg-white rounded-2xl p-1.5 shadow-sm border border-slate-200/80">
                <input
                  id="hero-banner-search-input"
                  type="text"
                  value={heroSearchInput}
                  onChange={(e) => setHeroSearchInput(e.target.value)}
                  placeholder="Search doctors, services, tests..."
                  className="flex-1 px-3.5 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
                <button
                  id="hero-banner-search-btn"
                  type="submit"
                  className="w-10 h-10 rounded-xl bg-[#00A884] hover:bg-[#009172] text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* High fidelity Runner & Park Vector Illustration on Right */}
            <div className="hidden sm:block absolute right-2 bottom-0 top-0 w-64 lg:w-80 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 320 220" fill="none" preserveAspectRatio="xMidYMax meet">
                {/* Sunny Sky & Clouds */}
                <circle cx="270" cy="50" r="28" fill="#FEF08A" fillOpacity="0.6" />
                <path d="M210 40 Q225 30 240 40 Q255 35 265 45 L195 45 Z" fill="#FFFFFF" fillOpacity="0.7" />
                <path d="M140 70 Q155 60 170 70 Q185 65 195 75 L130 75 Z" fill="#FFFFFF" fillOpacity="0.6" />
                
                {/* Distant Skyline & Hills */}
                <path d="M200 130 L200 80 L220 80 L220 130 Z" fill="#93C5FD" fillOpacity="0.3" />
                <path d="M225 130 L225 65 L245 65 L245 130 Z" fill="#93C5FD" fillOpacity="0.25" />
                <path d="M250 130 L250 90 L270 90 L270 130 Z" fill="#93C5FD" fillOpacity="0.35" />
                <path d="M120 140 Q200 95 320 125 L320 220 L120 220 Z" fill="#86EFAC" fillOpacity="0.4" />
                
                {/* Lush Park Trees */}
                <ellipse cx="280" cy="115" rx="30" ry="40" fill="#22C55E" fillOpacity="0.6" />
                <rect x="276" y="140" width="8" height="30" fill="#78350F" fillOpacity="0.5" />
                <ellipse cx="230" cy="130" rx="22" ry="32" fill="#16A34A" fillOpacity="0.55" />
                <rect x="228" y="150" width="6" height="25" fill="#78350F" fillOpacity="0.5" />

                {/* Park Trail Path */}
                <path d="M110 220 Q190 180 320 195 L320 220 Z" fill="#CBD5E1" fillOpacity="0.6" />

                {/* Stylized Athletic Woman Runner */}
                <g transform="translate(145, 45) scale(0.95)">
                  {/* Head & Ponytail */}
                  <circle cx="68" cy="22" r="10" fill="#9A3412" />
                  <path d="M63 20 Q50 25 45 18" stroke="#9A3412" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="70" cy="22" r="8" fill="#FDBA74" />
                  
                  {/* Athletic Top (Coral/Pink) */}
                  <path d="M64 32 L78 34 L72 65 L58 63 Z" fill="#F43F5E" />
                  
                  {/* Left Arm (Pumping backward) */}
                  <path d="M62 36 L48 48 L42 42" stroke="#FDBA74" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Right Arm (Forward) */}
                  <path d="M74 38 L88 48 L96 42" stroke="#FDBA74" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Athletic Leggings (Indigo/Navy) */}
                  {/* Left Leg (Kicking Back) */}
                  <path d="M60 63 L45 88 L30 82" stroke="#1E1B4B" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Left Running Shoe (Neon Green) */}
                  <ellipse cx="28" cy="80" rx="5" ry="3" fill="#22C55E" />

                  {/* Right Leg (Driving Forward) */}
                  <path d="M70 65 L82 92 L75 120" stroke="#1E1B4B" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Right Running Shoe (Neon Green) */}
                  <ellipse cx="75" cy="122" rx="6" ry="3.5" fill="#22C55E" />
                </g>
              </svg>
            </div>
          </div>

          {/* 3. Quick Access (6 Cards Row) */}
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">Quick Access</h3>
              <button 
                id="quick-access-view-all-btn"
                onClick={() => onNavigate('services')}
                className="text-xs font-semibold text-[#00A884] hover:text-[#008f70] flex items-center space-x-1 cursor-pointer"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {quickAccessItems.map((item) => (
                <button
                  key={item.id}
                  id={`quick-access-card-${item.id}`}
                  onClick={() => onNavigate(item.tab)}
                  className="bg-white hover:bg-slate-50/80 border border-[#E2E8F0] hover:border-[#00A884]/40 rounded-2xl p-4 flex flex-col items-center text-center transition-all cursor-pointer group shadow-2xs hover:shadow-sm"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xs font-bold text-[#0F172A] leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-[#64748B] line-clamp-2 leading-tight">
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Health Overview (6 Cards Row with Sparklines) */}
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">Health Overview</h3>
              <button 
                id="health-overview-view-dashboard-btn"
                onClick={() => onNavigate('dashboard')}
                className="text-xs font-semibold text-[#00A884] hover:text-[#008f70] flex items-center space-x-1 cursor-pointer"
              >
                <span>View Full Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {/* 1. Heart Rate */}
              <div className="bg-white rounded-2xl p-3.5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-[#64748B]">Heart Rate</span>
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-lg font-extrabold text-[#0F172A]">{metrics.heartRate}</span>
                    <span className="text-[10px] text-slate-500 font-medium">bpm</span>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-emerald-600">Normal</span>
                  {/* Pink Sparkline SVG */}
                  <svg className="w-12 h-4 text-rose-400" viewBox="0 0 50 15" fill="none">
                    <path d="M0 8 Q 8 2, 16 9 T 32 6 T 50 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* 2. Blood Pressure */}
              <div className="bg-white rounded-2xl p-3.5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-[#64748B]">Blood Pressure</span>
                    <Activity className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-base font-extrabold text-[#0F172A]">
                      {metrics.bloodPressureSys}/{metrics.bloodPressureDia}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">mmHg</span>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-emerald-600">Normal</span>
                  {/* Blue Sparkline SVG */}
                  <svg className="w-12 h-4 text-blue-400" viewBox="0 0 50 15" fill="none">
                    <path d="M0 10 Q 12 3, 25 8 T 50 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* 3. Blood Glucose */}
              <div className="bg-white rounded-2xl p-3.5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-[#64748B]">Blood Glucose</span>
                    <Droplets className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-lg font-extrabold text-[#0F172A]">{metrics.bloodGlucose}</span>
                    <span className="text-[10px] text-slate-500 font-medium">mg/dL</span>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-emerald-600">Normal</span>
                  {/* Green Sparkline SVG */}
                  <svg className="w-12 h-4 text-emerald-400" viewBox="0 0 50 15" fill="none">
                    <path d="M0 7 Q 15 12, 30 5 T 50 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* 4. Weight */}
              <div className="bg-white rounded-2xl p-3.5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-[#64748B]">Weight</span>
                    <Scale className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-lg font-extrabold text-[#0F172A]">{metrics.weight}</span>
                    <span className="text-[10px] text-slate-500 font-medium">kg</span>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-purple-600">↓ 1.2 kg</span>
                  {/* Purple Sparkline SVG */}
                  <svg className="w-12 h-4 text-purple-400" viewBox="0 0 50 15" fill="none">
                    <path d="M0 5 Q 12 7, 26 10 T 50 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* 5. Sleep */}
              <div className="bg-white rounded-2xl p-3.5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-[#64748B]">Sleep</span>
                    <Moon className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-lg font-extrabold text-[#0F172A]">{metrics.sleepHours}</span>
                    <span className="text-[10px] text-slate-500 font-medium">hrs</span>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-indigo-600">Good</span>
                  {/* Violet Sparkline SVG */}
                  <svg className="w-12 h-4 text-indigo-400" viewBox="0 0 50 15" fill="none">
                    <path d="M0 9 Q 15 4, 30 8 T 50 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* 6. Steps */}
              <div className="bg-white rounded-2xl p-3.5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-[#64748B]">Steps</span>
                    <Footprints className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-base font-extrabold text-[#0F172A]">{metrics.steps.toLocaleString()}</span>
                  </div>
                </div>
                <div className="mt-2 pt-1 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-orange-600">64% Goal</span>
                  {/* Orange Sparkline SVG */}
                  <svg className="w-12 h-4 text-orange-400" viewBox="0 0 50 15" fill="none">
                    <path d="M0 12 Q 18 10, 32 4 T 50 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Two-Column Section: Upcoming Appointments (Left) & Health Tips for You (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-[#0F172A]">Upcoming Appointments</h3>
                  <button 
                    id="upcoming-apts-view-all-btn"
                    onClick={() => onNavigate('appointments')}
                    className="text-xs font-semibold text-[#00A884] hover:text-[#008f70] flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Appointment 1: Dr. Priya Sharma */}
                  <div className="p-3.5 rounded-xl border border-slate-100 bg-[#F8FAFC] flex items-center justify-between gap-3">
                    <div className="flex items-center space-x-3 min-w-0">
                      <img
                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80"
                        alt="Dr. Priya Sharma"
                        className="w-11 h-11 rounded-full object-cover border border-slate-200 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-xs font-bold text-[#0F172A] truncate">Dr. Priya Sharma</h4>
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-md flex items-center space-x-1">
                            <Video className="w-2.5 h-2.5" />
                            <span>Video</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium">General Physician</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">📅 May 24, 2024 • 🕒 10:30 AM</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 flex-shrink-0">
                      <button
                        id="join-priya-sharma-btn"
                        onClick={() => {
                          const apt = upcomingAppointments[0] || {
                            id: 'apt-1',
                            doctorName: 'Dr. Priya Sharma',
                            doctorSpecialty: 'General Physician',
                            type: 'video',
                            date: 'May 24, 2024',
                            time: '10:30 AM',
                          } as Appointment;
                          onJoinAppointment(apt);
                        }}
                        className="bg-[#00A884] hover:bg-[#009172] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        Join
                      </button>
                      <button 
                        onClick={() => onNavigate('appointments')}
                        className="p-1 text-slate-400 hover:text-slate-600 rounded cursor-pointer"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Appointment 2: Dr. Rohan Mehta */}
                  <div className="p-3.5 rounded-xl border border-slate-100 bg-[#F8FAFC] flex items-center justify-between gap-3">
                    <div className="flex items-center space-x-3 min-w-0">
                      <img
                        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80"
                        alt="Dr. Rohan Mehta"
                        className="w-11 h-11 rounded-full object-cover border border-slate-200 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-xs font-bold text-[#0F172A] truncate">Dr. Rohan Mehta</h4>
                          <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.2 rounded-md flex items-center space-x-1">
                            <MapPin className="w-2.5 h-2.5" />
                            <span>In-clinic</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium">Cardiologist</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">📅 May 27, 2024 • 🕒 04:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 flex-shrink-0">
                      <button
                        id="view-rohan-mehta-btn"
                        onClick={() => onNavigate('appointments')}
                        className="border border-[#00A884] text-[#00A884] hover:bg-[#E6F7F3] text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        View
                      </button>
                      <button 
                        onClick={() => onNavigate('appointments')}
                        className="p-1 text-slate-400 hover:text-slate-600 rounded cursor-pointer"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Tips for You */}
            <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-[#0F172A]">Health Tips for You</h3>
                  <button 
                    id="health-tips-view-all-btn"
                    onClick={() => onNavigate('hub')}
                    className="text-xs font-semibold text-[#00A884] hover:text-[#008f70] flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {articles.slice(0, 3).map((art) => (
                    <div
                      key={art.id}
                      id={`home-article-card-${art.id}`}
                      onClick={() => onArticleClick(art)}
                      className="group cursor-pointer rounded-xl overflow-hidden border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-all flex flex-col"
                    >
                      <div className="h-20 w-full overflow-hidden relative">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-2 flex-1 flex flex-col justify-between">
                        <h4 className="text-[11px] font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#00A884] transition-colors mb-1.5">
                          {art.title}
                        </h4>
                        <div className="flex items-center justify-between text-[9px] text-slate-400">
                          <span className="font-semibold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded">
                            {art.category}
                          </span>
                          <span>{art.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 6. Bottom Banner ("Your Health is Our Priority") */}
          <div className="bg-[#E6F7F3] border border-[#A7F3D0] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#00A884] text-white flex items-center justify-center shadow-xs flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0F172A]">
                  Your Health is Our Priority
                </h4>
                <p className="text-xs text-[#475569]">
                  Explore personalized health plans and premium care services.
                </p>
              </div>
            </div>

            <button
              id="bottom-banner-explore-plans-btn"
              onClick={() => onNavigate('services')}
              className="bg-[#00A884] hover:bg-[#008f70] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer flex-shrink-0"
            >
              Explore Plans
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR (Today's Goals, AI Assistant, Quick Actions) */}
        <HealthPlusRightSidebar
          metrics={metrics}
          onNavigate={onNavigate}
          onOpenUploadReport={onOpenUploadReport}
          onOpenEmergency={onOpenEmergency}
          onUpdateMetrics={onUpdateMetrics}
        />
      </div>
    </div>
  );
};
