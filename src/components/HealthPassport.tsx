import React, { useState } from 'react';
import {
  ShieldCheck,
  Edit3,
  Download,
  Share2,
  QrCode,
  Calendar,
  Heart,
  AlertCircle,
  Phone,
  User,
  Activity,
  CheckCircle2,
  Sparkles,
  Award,
  Layers,
  Clock,
  ChevronRight,
  Printer,
  FileCheck,
} from 'lucide-react';
import { UserProfile, HealthStoryEvent } from '../types';
import { QrCodeDisplay } from './QrCodeDisplay';

interface HealthPassportProps {
  user: UserProfile;
  onEditProfile: () => void;
  onSharePassport: () => void;
  onNavigateToTimeline: () => void;
  recentEvents: HealthStoryEvent[];
}

export const HealthPassport: React.FC<HealthPassportProps> = ({
  user,
  onEditProfile,
  onSharePassport,
  onNavigateToTimeline,
  recentEvents,
}) => {
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadPassport = () => {
    // Generate text/json export and trigger download
    const exportData = {
      nuvitaHealthPassport: {
        id: user.passportId,
        patient: user.fullName,
        dob: user.dateOfBirth,
        bloodGroup: user.bloodGroup,
        allergies: user.allergies,
        chronicConditions: user.chronicConditions,
        medications: user.medications,
        primaryPhysician: user.primaryDoctor,
        emergencyContacts: user.emergencyContacts,
        insurance: user.insurance,
        organDonor: user.organDonor,
        lastVerified: new Date().toISOString(),
        issuer: 'Nuvita Health Digital Health Passport Protocol',
      },
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Nuvita_Health_Passport_${user.fullName.replace(/\s+/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const primaryContact = user.emergencyContacts[0];

  return (
    <div className="space-y-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5E2DD]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8904F] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#A8904F]" />
            <span>Digital Identity & Biometric Record</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#2D3A2D] mt-1">
            Digital Health Passport
          </h1>
          <p className="text-sm text-[#5A5A40] mt-1 max-w-2xl">
            A verified personal health credential. Present at clinics, travel hubs, or emergency care centers worldwide.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            id="edit-passport-profile-btn"
            onClick={onEditProfile}
            className="px-4 py-2 rounded-xl bg-white hover:bg-[#F5F2ED] text-xs font-medium text-[#2D3A2D] border border-[#E5E2DD] flex items-center space-x-1.5 transition-all shadow-xs"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Profile</span>
          </button>

          <button
            id="download-passport-btn"
            onClick={handleDownloadPassport}
            className="px-4 py-2 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-xs font-medium text-white flex items-center space-x-1.5 transition-all shadow-sm"
          >
            {downloadSuccess ? <CheckCircle2 className="w-3.5 h-3.5 text-[#A8904F]" /> : <Download className="w-3.5 h-3.5" />}
            <span>{downloadSuccess ? 'Downloaded' : 'Download Passport'}</span>
          </button>

          <button
            id="share-passport-btn"
            onClick={onSharePassport}
            className="px-4 py-2 rounded-xl bg-[#A8904F] hover:bg-[#968043] text-xs font-medium text-white flex items-center space-x-1.5 transition-all shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Securely</span>
          </button>
        </div>
      </div>

      {/* Main Passport Card Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left / Passport Card Presentation */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Card View Switcher */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-medium text-[#5A5A40] flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#A8904F]" />
              <span>Identity Credential</span>
            </span>
            <div className="inline-flex p-1 bg-white rounded-xl border border-[#E5E2DD] text-xs">
              <button
                onClick={() => setActiveSide('front')}
                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                  activeSide === 'front' ? 'bg-[#2D3A2D] text-white shadow-xs' : 'text-[#5A5A40]'
                }`}
              >
                Front View
              </button>
              <button
                onClick={() => setActiveSide('back')}
                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                  activeSide === 'back' ? 'bg-[#2D3A2D] text-white shadow-xs' : 'text-[#5A5A40]'
                }`}
              >
                Clinical Data
              </button>
            </div>
          </div>

          {/* Luxury Digital Passport Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 border border-white/10 bg-gradient-to-br from-[#2D3A2D] to-[#1A251A] text-white p-6 sm:p-8">
            
            {/* Gold Foil Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A8904F] via-[#DFCE9D] to-[#A8904F]" />
            <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
              <ShieldCheck className="w-32 h-32 text-[#A8904F]" />
            </div>

            {activeSide === 'front' ? (
              <div className="space-y-6">
                
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#A8904F] font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-[#A8904F] uppercase">
                        NUVITA HEALTH • PASSPORT PROTOCOL
                      </p>
                      <h2 className="text-lg sm:text-xl font-bold font-serif text-white tracking-wide">
                        HEALTH PASSPORT
                      </h2>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/15 text-[10px] font-mono font-bold tracking-wider">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Patient Profile Card Body */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  
                  {/* Photo & Biometric Stamp */}
                  <div className="sm:col-span-4 flex flex-col items-center text-center">
                    <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-white/10 border-2 border-[#A8904F]/60 shadow-lg flex items-center justify-center">
                      <User className="w-14 h-14 text-white/80" />
                      <div className="absolute bottom-0 inset-x-0 py-0.5 bg-black/60 text-[9px] font-mono text-[#A8904F] uppercase tracking-wider text-center">
                        NUVITA ID
                      </div>
                    </div>
                    <p className="text-[11px] font-mono text-white/60 mt-2 tracking-wider">
                      {user.passportId}
                    </p>
                  </div>

                  {/* Vitals & Identity Fields */}
                  <div className="sm:col-span-8 space-y-3.5">
                    <div>
                      <p className="text-[10px] text-white/50 uppercase font-mono tracking-wider">Full Legal Name</p>
                      <p className="text-2xl font-bold font-serif text-white tracking-wide">
                        {user.fullName}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[10px] text-white/50 uppercase font-mono">Blood Group</p>
                        <p className="text-base font-bold font-serif text-white mt-0.5">{user.bloodGroup}</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[10px] text-white/50 uppercase font-mono">Allergies</p>
                        <p className="text-xs font-semibold text-[#F7C1B5] mt-0.5">
                          {user.allergies.length} Recorded
                        </p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[10px] text-white/50 uppercase font-mono">Date of Birth</p>
                        <p className="text-xs font-semibold text-white mt-0.5">{user.dateOfBirth}</p>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <p className="text-[10px] text-white/50 uppercase font-mono">Primary Emergency Contact</p>
                      <p className="text-xs font-medium text-white/90 mt-0.5">
                        {primaryContact?.name} ({primaryContact?.relationship}) • <span className="font-mono text-[#A8904F]">{primaryContact?.phone}</span>
                      </p>
                    </div>
                  </div>

                </div>

                {/* Footer Security Ribbon */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-[#A8904F]" />
                    <span>Last Updated: <strong className="text-white font-medium">{user.lastUpdated}</strong></span>
                  </div>
                  <div className="font-mono text-[11px] text-[#A8904F]">
                    AES 256-BIT ENCRYPTED
                  </div>
                </div>

              </div>
            ) : (
              /* Back Side / Clinical & Insurance Details */
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-lg font-bold font-serif text-white">Clinical & Coverage Profile</h3>
                  <span className="text-xs font-mono text-[#A8904F]">SECURE HEALTH VAULT</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <p className="text-[10px] text-white/50 uppercase font-mono">Primary Physician</p>
                    <p className="font-bold text-white text-sm">{user.primaryDoctor.name}</p>
                    <p className="text-white/60 text-[11px]">{user.primaryDoctor.specialty}</p>
                    <p className="text-[#A8904F] font-mono text-[11px]">{user.primaryDoctor.phone}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <p className="text-[10px] text-white/50 uppercase font-mono">Insurance Policy</p>
                    <p className="font-bold text-white text-sm">{user.insurance.provider}</p>
                    <p className="text-[#A8904F] font-mono text-[11px]">Policy: {user.insurance.policyNumber}</p>
                    <p className="text-white/60 text-[11px]">Valid Thru: {user.insurance.validThrough}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-xs">
                  <p className="text-[10px] text-white/50 uppercase font-mono">Documented Allergies & Sensitivities</p>
                  <div className="flex flex-wrap gap-1.5">
                    {user.allergies.map((allergy, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-red-950/40 text-red-200 rounded-md font-semibold text-[11px] border border-red-800/50">
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1 text-xs">
                  <p className="text-[10px] text-white/50 uppercase font-mono">Important Health Notes</p>
                  <p className="text-white/80 text-xs leading-relaxed">
                    {user.importantNotes}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Quick Helper Tip */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#E5E2DD] text-xs text-[#5A5A40] flex items-center justify-between shadow-xs">
            <span className="flex items-center space-x-2">
              <FileCheck className="w-4 h-4 text-[#2D3A2D]" />
              <span>Compatible with Apple Health, EU Digital Health Pass & WHO Standards.</span>
            </span>
            <button
              onClick={() => window.print()}
              className="text-[#2D3A2D] font-semibold hover:underline flex items-center space-x-1 shrink-0 ml-2"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Card</span>
            </button>
          </div>

        </div>

        {/* Right / Passport Verification & Key Highlights */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Cryptographic QR Passport Pass */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5E2DD] shadow-sm text-center space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DD]">
              <span className="text-xs font-semibold text-[#2D3A2D] uppercase tracking-wider font-mono">
                Official Health QR Token
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-[#F5F2ED] text-[#2D3A2D] rounded-full font-semibold border border-[#E5E2DD]">
                Live Dynamic Key
              </span>
            </div>

            <div className="bg-[#F5F2ED] p-4 rounded-xl inline-block border border-[#E5E2DD]">
              <QrCodeDisplay
                value={`https://nuvita.health/passport/verify/${user.passportId}`}
                size={160}
                fgColor="#2D3A2D"
                bgColor="#F5F2ED"
                subLabel={user.passportId}
              />
            </div>

            <p className="text-xs text-[#5A5A40] max-w-xs mx-auto leading-relaxed">
              Medical providers and diagnostic labs can scan this token to authenticate your records without physical paperwork.
            </p>

            <div className="pt-2 flex items-center justify-center space-x-3 text-xs">
              <button
                onClick={onSharePassport}
                className="px-4 py-2 rounded-xl bg-[#2D3A2D] text-white hover:bg-[#1F2B1F] font-semibold shadow-xs transition-all flex items-center space-x-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Grant Provider Access</span>
              </button>
            </div>
          </div>

          {/* Summary Health Timeline Preview */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5E2DD] shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#E5E2DD]">
              <h3 className="text-base font-bold font-serif text-[#2D3A2D]">
                Recent Health Milestones
              </h3>
              <button
                onClick={onNavigateToTimeline}
                className="text-xs text-[#A8904F] font-semibold hover:underline flex items-center space-x-0.5"
              >
                <span>Full Story</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {recentEvents.slice(0, 3).map((evt) => (
                <div
                  key={evt.id}
                  className="p-3 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex items-start space-x-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#2D3A2D] mt-1.5 shrink-0" />
                  <div className="text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-[#2D3A2D]">{evt.title}</span>
                    </div>
                    <p className="text-[11px] text-[#5A5A40] mt-0.5 font-mono">
                      {evt.date}, {evt.year} • {evt.facility}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
