import React from 'react';
import {
  ShieldCheck,
  CalendarDays,
  FileText,
  Activity,
  ArrowRight,
  Sparkles,
  Lock,
  Heart,
  AlertTriangle,
  MapPin,
  Clock,
  BookOpen,
  ChevronRight,
  ShieldAlert,
  Award,
} from 'lucide-react';
import { UserProfile, MedicalDocument, PreventiveItem } from '../types';
import { EmergencyHealthCard } from './EmergencyHealthCard';
import { PersonalInsights } from './PersonalInsights';

interface OverviewProps {
  user: UserProfile;
  documents: MedicalDocument[];
  preventionItems: PreventiveItem[];
  onNavigate: (tab: string) => void;
  onOpenEmergency: () => void;
}

export const Overview: React.FC<OverviewProps> = ({
  user,
  documents,
  preventionItems,
  onNavigate,
  onOpenEmergency,
}) => {
  const upcomingScreenings = preventionItems.filter(i => i.status === 'upcoming' || i.status === 'due_soon');

  return (
    <div className="space-y-12">
      
      {/* Natural Tones Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2D3A2D] to-[#1A251A] text-white p-8 sm:p-12 border border-white/10 shadow-xl">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A8904F]/10 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          
          {/* Top Pill / User Salutation */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#A8904F]">
            <Sparkles className="w-3.5 h-3.5 text-[#A8904F]" />
            <span className="font-medium text-white/90">Welcome back, {user.fullName.split(' ')[0]}</span>
            <span className="text-white/40">•</span>
            <span className="font-mono text-[#A8904F] font-semibold">O+ Verified</span>
          </div>

          {/* Hero Heading */}
          <div>
            <span className="text-[#A8904F] text-xs font-bold uppercase tracking-[0.3em] mb-2 block">
              Personal Insights
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Your health, <br className="hidden sm:inline" />all in one place.
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl font-normal">
            Stay ahead with preventive care and maintain complete control over your private medical records.
          </p>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              id="hero-open-passport-cta"
              onClick={() => onNavigate('passport')}
              className="px-6 py-3 rounded-xl bg-[#A8904F] hover:bg-[#968043] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-[#A8904F]/25 flex items-center space-x-2 transition-all duration-200"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>View Full Passport</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              id="hero-explore-prevention-cta"
              onClick={() => onNavigate('prevention')}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all duration-200"
            >
              <span>Explore Prevention</span>
            </button>
          </div>

        </div>

        {/* Floating Quick Metadata Stamp on Large Screens */}
        <div className="hidden lg:flex absolute right-12 bottom-12 items-center space-x-4 bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-xs">
          <div className="text-right">
            <p className="text-[10px] text-white/50 uppercase font-mono tracking-wider">Passport Status</p>
            <p className="font-semibold text-white">Active & Verified</p>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-right">
            <p className="text-[10px] text-white/50 uppercase font-mono tracking-wider">2026 Goals</p>
            <p className="font-semibold text-[#A8904F]">12/17 Completed</p>
          </div>
        </div>

      </div>

      {/* 4 Large Signature Editorial Summary Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#E5E2DD]">
          <h2 className="text-2xl font-bold font-serif text-[#2D3A2D]">
            Core Health Pillars
          </h2>
          <span className="text-xs text-[#5A5A40] font-mono">
            4 Signature Modules
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          
          {/* Card 1: Health Passport */}
          <div
            onClick={() => onNavigate('passport')}
            className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E2DD] hover:border-[#2D3A2D] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex items-center justify-center text-[#2D3A2D]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8904F] bg-[#F5F2ED] px-2.5 py-1 rounded-lg border border-[#E5E2DD]">
                  ID: {user.passportId}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-[#2D3A2D] mt-4 group-hover:text-[#2D3A2D] transition-colors">
                Health Passport
              </h3>

              <p className="text-xs sm:text-sm text-[#5A5A40] mt-2 leading-relaxed">
                Your verified digital identity card. Includes blood group ({user.bloodGroup}), allergies, emergency contacts, and organ donor credentials for instant verification.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E2DD] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A5A40]">
                Last updated {user.lastUpdated}
              </span>
              <span className="text-xs font-bold text-[#A8904F] uppercase tracking-widest flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>View Full Passport</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 2: Medical Documents */}
          <div
            onClick={() => onNavigate('documents')}
            className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E2DD] hover:border-[#2D3A2D] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex items-center justify-center text-[#2D3A2D]">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40] bg-[#F5F2ED] px-2.5 py-1 rounded-lg border border-[#E5E2DD]">
                  {documents.length} Stored Documents
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-[#2D3A2D] mt-4 group-hover:text-[#2D3A2D] transition-colors">
                Medical Documents
              </h3>

              <p className="text-xs sm:text-sm text-[#5A5A40] mt-2 leading-relaxed">
                Everything important, safely organized. Access comprehensive metabolic blood panels, inhaler prescriptions, and health insurance policy schedules.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E2DD] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A5A40]">
                Latest: Lipid Panel (May 24)
              </span>
              <span className="text-xs font-bold text-[#A8904F] uppercase tracking-widest flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>Open Vault</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 3: Upcoming Prevention */}
          <div
            onClick={() => onNavigate('prevention')}
            className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E2DD] hover:border-[#2D3A2D] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-700">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-700 bg-green-50 px-2.5 py-1 rounded-lg border border-green-100">
                  {upcomingScreenings.length} Checks Scheduled
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-[#2D3A2D] mt-4 group-hover:text-[#2D3A2D] transition-colors">
                Upcoming Prevention
              </h3>

              <p className="text-xs sm:text-sm text-[#5A5A40] mt-2 leading-relaxed">
                Stay proactive with scheduled health screenings, vaccinations, and bi-annual dental hygiene. Next due: Dental checkup on June 04.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E2DD] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A5A40]">
                2026 Progress: 71% Fulfilled
              </span>
              <span className="text-xs font-bold text-[#A8904F] uppercase tracking-widest flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>View Calendar</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 4: Risk Insights & Simulator */}
          <div
            onClick={() => onNavigate('risk')}
            className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E2DD] hover:border-[#2D3A2D] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex items-center justify-center text-[#8A9A5B]">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8A9A5B] bg-[#F5F2ED] px-2.5 py-1 rounded-lg border border-[#E5E2DD]">
                  Resilience Score: 83/100
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-[#2D3A2D] mt-4 group-hover:text-[#2D3A2D] transition-colors">
                Risk Insights
              </h3>

              <p className="text-xs sm:text-sm text-[#5A5A40] mt-2 leading-relaxed">
                Interactive lifestyle risk simulator. Explore how sleep consistency, zone-2 cardio, and stress resets shape your long-term cardiovascular and metabolic vitality.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E2DD] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A5A40]">
                Biological Age: -2.3 Years
              </span>
              <span className="text-xs font-bold text-[#A8904F] uppercase tracking-widest flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Simulator</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded High-Visibility Emergency Health Card Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold font-serif text-[#2D3A2D] uppercase tracking-wider">
            Critical Emergency Quick-Access
          </span>
          <span className="text-xs text-[#5A5A40] font-mono">Immediate Triage Protocol</span>
        </div>
        <EmergencyHealthCard user={user} onOpenModal={onOpenEmergency} />
      </div>

      {/* Personal Health Insights */}
      <PersonalInsights
        user={user}
        documents={documents}
        preventionItems={preventionItems}
        onNavigate={onNavigate}
      />

    </div>
  );
};
