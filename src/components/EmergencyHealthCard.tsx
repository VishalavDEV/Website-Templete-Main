import React, { useState } from 'react';
import {
  AlertTriangle,
  Phone,
  QrCode,
  Share2,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  Download,
  Heart,
  ShieldAlert,
  X,
  Info,
  ExternalLink,
} from 'lucide-react';
import { UserProfile } from '../types';
import { QrCodeDisplay } from './QrCodeDisplay';

interface EmergencyHealthCardProps {
  user: UserProfile;
  isOpenModal?: boolean;
  modalOnly?: boolean;
  onCloseModal?: () => void;
  onOpenModal?: () => void;
}

export const EmergencyHealthCard: React.FC<EmergencyHealthCardProps> = ({
  user,
  isOpenModal = false,
  modalOnly = false,
  onCloseModal,
  onOpenModal,
}) => {
  const [copied, setCopied] = useState(false);
  const [shareNotice, setShareNotice] = useState(false);

  const emergencyDataPayload = `NUVITA EMERGENCY HEALTH RECORD\nName: ${user.fullName}\nDOB: ${user.dateOfBirth}\nBlood Group: ${user.bloodGroup}\nAllergies: ${user.allergies.join(', ')}\nConditions: ${user.chronicConditions.join(', ')}\nEmergency Contact: ${user.emergencyContacts[0]?.name} (${user.emergencyContacts[0]?.relationship}) - ${user.emergencyContacts[0]?.phone}\nPCP: ${user.primaryDoctor.name} (${user.primaryDoctor.phone})\nOrgan Donor: ${user.organDonor ? 'YES' : 'NO'}\nPassport ID: ${user.passportId}`;

  const handleCopyInfo = () => {
    navigator.clipboard.writeText(emergencyDataPayload);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${user.fullName} - Emergency Health Summary`,
        text: emergencyDataPayload,
      }).catch(() => {});
    } else {
      handleCopyInfo();
      setShareNotice(true);
      setTimeout(() => setShareNotice(false), 3500);
    }
  };

  const primaryContact = user.emergencyContacts[0];

  return (
    <>
      {/* Embedded Section Card */}
      {!modalOnly && (
        <div className="relative overflow-hidden rounded-2xl bg-[#2D3A2D] text-white p-6 sm:p-8 border border-white/10 shadow-xl">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#A8904F]/5 blur-3xl pointer-events-none" />

          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-red-900/60 text-red-200 flex items-center justify-center shadow-inner border border-red-700/50 shrink-0">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#A8904F] uppercase font-semibold">
                    First Responder Access
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-red-950/60 text-red-200 border border-red-800/60">
                    Instant Triage
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-wide">
                  Emergency Health Card
                </h2>
              </div>
            </div>

            {/* Quick Actions Header */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopyInfo}
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white border border-white/15 flex items-center space-x-1.5 transition-all"
                title="Copy Emergency Data to Clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={handleShare}
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white border border-white/15 flex items-center space-x-1.5 transition-all"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
              {onOpenModal && (
                <button
                  onClick={onOpenModal}
                  className="px-3.5 py-2 rounded-xl bg-[#A8904F] text-white hover:bg-[#968043] text-xs font-semibold flex items-center space-x-1.5 shadow-sm transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Full Screen Card</span>
                  <span className="sm:hidden">Full Screen</span>
                </button>
              )}
            </div>
          </div>

          {/* Card Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-center">
            
            {/* Patient Emergency Details (Left Column) */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Name and Blood Group Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Full Legal Name</p>
                  <p className="text-lg font-bold font-serif text-white mt-0.5">{user.fullName}</p>
                  <p className="text-[11px] text-white/60 mt-0.5 font-mono">DOB: {user.dateOfBirth} • Female</p>
                </div>

                <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-800/40 flex flex-col justify-center">
                  <p className="text-[10px] text-red-200 uppercase tracking-wider font-semibold">Blood Group</p>
                  <div className="flex items-baseline space-x-1.5 mt-0.5">
                    <span className="text-2xl font-bold font-serif text-white">{user.bloodGroup}</span>
                    <span className="text-[11px] text-red-200">Universal</span>
                  </div>
                </div>
              </div>

              {/* Critical Allergies & Conditions Warnings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/30 text-white">
                  <div className="flex items-center space-x-1.5 text-red-300 text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>Severe Allergies</span>
                  </div>
                  <div className="mt-1.5 space-y-1">
                    {user.allergies.map((allergy, i) => (
                      <span
                        key={i}
                        className="inline-block mr-1.5 px-2 py-0.5 rounded-md text-xs font-semibold bg-red-950/60 text-red-200 border border-red-800/50"
                      >
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center space-x-1.5 text-[#A8904F] text-xs font-bold uppercase tracking-wider">
                    <Info className="w-3.5 h-3.5 shrink-0" />
                    <span>Key Conditions / Notes</span>
                  </div>
                  <p className="text-xs font-medium text-white/90 mt-1.5">
                    {user.chronicConditions.join(', ')}
                  </p>
                  <p className="text-[11px] text-white/60 mt-1">
                    Active rescue inhaler required for cardio & high pollen.
                  </p>
                </div>

              </div>

              {/* Emergency Contacts Direct Call Bar */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
                    Primary Emergency Contact (Spouse)
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    {primaryContact?.name} <span className="text-xs font-normal text-white/60">({primaryContact?.relationship})</span>
                  </p>
                  <p className="text-xs font-mono text-[#A8904F] mt-0.5">{primaryContact?.phone}</p>
                </div>
                <a
                  href={`tel:${primaryContact?.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center justify-center space-x-2 border border-white/15 shadow-sm transition-all shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Emergency Contact</span>
                </a>
              </div>

            </div>

            {/* QR Code & Digital Scan Card (Right Column) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="bg-[#F5F2ED] p-3 rounded-xl shadow-lg border border-white/20">
                <QrCodeDisplay
                  value={`https://nuvita.health/emergency/verify/${user.passportId}`}
                  size={140}
                  fgColor="#2D3A2D"
                  bgColor="#F5F2ED"
                />
              </div>
              <div className="mt-3">
                <p className="text-xs font-semibold text-white">First Responder QR Verification</p>
                <p className="text-[11px] text-white/60 mt-0.5">
                  Scan instantly with any camera for cryptographic verification.
                </p>
                <p className="text-[10px] font-mono text-[#A8904F] mt-1.5">
                  ID: {user.passportId}
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Warning Notice */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-white/60 gap-2">
            <div className="flex items-center space-x-1.5 text-[#A8904F]">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
              <span className="font-medium">
                Notice: Only share essential emergency medical information with authorized responders.
              </span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] text-white/60">
              <Heart className="w-3 h-3 text-red-400 fill-current" />
              <span>Organ Donor: {user.organDonor ? 'Registered' : 'Not Registered'}</span>
            </div>
          </div>

        </div>
      )}

      {/* Full-Screen Emergency Modal View (Accessible in emergency drills or first responder mode) */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#2D3A2D] text-white rounded-2xl border-2 border-red-700/60 p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Modal Close & Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-sm font-mono tracking-widest text-[#A8904F] uppercase font-bold">
                  EMERGENCY HEALTH CARD • FULL PROTOCOL
                </span>
              </div>
              <button
                onClick={onCloseModal}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close emergency modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Emergency Patient Banner */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <p className="text-xs text-[#A8904F] uppercase font-semibold">Patient</p>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">{user.fullName}</h3>
                <p className="text-xs font-mono text-white/70 mt-1">
                  DOB: {user.dateOfBirth} • Passport: {user.passportId}
                </p>
              </div>
              <div className="text-center sm:text-right px-4 py-2 rounded-xl bg-red-900/60 border border-red-700 text-white">
                <p className="text-[10px] uppercase font-bold text-red-200">Blood Group</p>
                <p className="text-3xl font-bold font-serif">{user.bloodGroup}</p>
              </div>
            </div>

            {/* High-Alert Allergies & Notes */}
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 space-y-2">
              <div className="flex items-center space-x-2 text-red-300 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>CRITICAL ALLERGIES & CONTRAINDICATIONS</span>
              </div>
              <p className="text-lg font-bold text-white">
                {user.allergies.join(' • ')}
              </p>
              <p className="text-xs text-red-200">
                Avoid Penicillin/Beta-lactam antibiotics. Patient carries PRN inhaler for allergic asthma.
              </p>
            </div>

            {/* Key Contacts & Physician */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/60 font-semibold uppercase">Emergency Contact</p>
                <p className="text-sm font-bold text-white mt-1">{primaryContact?.name} ({primaryContact?.relationship})</p>
                <p className="text-sm font-mono text-[#A8904F] mt-0.5">{primaryContact?.phone}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/60 font-semibold uppercase">Attending Physician</p>
                <p className="text-sm font-bold text-white mt-1">{user.primaryDoctor.name}</p>
                <p className="text-sm font-mono text-[#A8904F] mt-0.5">{user.primaryDoctor.phone}</p>
              </div>
            </div>

            {/* QR Code and Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center space-x-4">
                <div className="bg-[#F5F2ED] p-2 rounded-xl border border-white/20 shadow-md">
                  <QrCodeDisplay
                    value={`https://nuvita.health/emergency/verify/${user.passportId}`}
                    size={90}
                    fgColor="#2D3A2D"
                    bgColor="#F5F2ED"
                  />
                </div>
                <div className="text-xs text-white/70">
                  <p className="font-semibold text-white">Scan for Cryptographic Record</p>
                  <p className="text-[11px] mt-0.5">Works with offline mesh & emergency gateways.</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyInfo}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/15 flex items-center justify-center space-x-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied Details' : 'Copy All'}</span>
                </button>
                <a
                  href={`tel:${primaryContact?.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
