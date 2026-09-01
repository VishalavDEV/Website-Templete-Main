import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Phone,
  AlertCircle,
  Clock,
  MapPin,
  ShieldAlert,
  ArrowRight,
  HeartPulse,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';

export const EmergencySection: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  const { showToast, openBooking, setActivePage } = useApp();
  const [walkinName, setWalkinName] = useState('');
  const [walkinPhone, setWalkinPhone] = useState('');
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleWalkinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!walkinName || !walkinPhone) {
      showToast('Please enter your name and phone number', 'error');
      return;
    }
    setIsCheckedIn(true);
    showToast('Fast-Track triage ticket generated! Estimated wait: ~4 minutes', 'success');
  };

  return (
    <section
      id="emergency-triage-section"
      className={`py-16 md:py-24 ${isFullPage ? 'pt-32' : 'bg-[#FFFDFC]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Alert Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#F2D9DF] via-[#FFFDFC] to-[#E8DDF2] border border-[#C77C83]/30 shadow-[0_10px_40px_rgba(201,124,131,0.12)] mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C77C83]/20 text-[#964E55] text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-[#C77C83]" />
                <span>24/7 Emergency & Acute Triage Desk</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3E3445] leading-tight">
                Immediate clinical support when seconds count.
              </h2>
              <p className="text-sm text-[#756B7C] leading-relaxed">
                If you are experiencing life-threatening symptoms, dial <strong>911</strong>{' '}
                immediately or arrive at our Level-1 Trauma Emergency Suite at 450 Lilac Frost
                Avenue.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full lg:w-auto">
              <a
                id="emergency-call-911-btn"
                href="tel:911"
                onClick={() => showToast('Initiating emergency call to local 911 dispatch...', 'error')}
                className="px-8 py-4 bg-[#C77C83] hover:bg-[#964E55] text-white font-bold text-sm rounded-full shadow-[0_8px_25px_rgba(201,124,131,0.4)] transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>DIAL 911 (EMERGENCY)</span>
              </a>

              <a
                id="emergency-call-aura-hotline"
                href="tel:18002872432"
                onClick={() => showToast('Calling Aura Health 24/7 Clinical Triage Desk...', 'info')}
                className="px-6 py-4 bg-white/90 hover:bg-white text-[#3E3445] border border-[#3E3445]/15 font-semibold text-sm rounded-full transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#8B6FAE]" />
                <span>Call Hotline (800) 287-2432</span>
              </a>
            </div>
          </div>
        </div>

        {/* Triage Decision Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Emergency Department Symptoms */}
          <div className="lilac-card p-8 rounded-3xl bg-white border border-[#C77C83]/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F2D9DF] text-[#C77C83] flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3E3445]">
              Go to Emergency Department If You Have:
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#756B7C]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C77C83] mt-2 shrink-0" />
                <span>Severe chest pain, pressure, or radiating pain to the left arm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C77C83] mt-2 shrink-0" />
                <span>Sudden facial drooping, speech slurring, or unilateral limb weakness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C77C83] mt-2 shrink-0" />
                <span>Acute, severe shortness of breath or persistent blue-tinted lips</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C77C83] mt-2 shrink-0" />
                <span>Severe traumatic bleeding, sudden loss of consciousness, or head trauma</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Same-Day Urgent Care Clinic */}
          <div className="lilac-card p-8 rounded-3xl bg-white border border-[#8B6FAE]/20 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8DDF2] text-[#665080] flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#8B6FAE]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3E3445]">
              Use Same-Day Urgent Care Suite For:
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#756B7C]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B6FAE] mt-2 shrink-0" />
                <span>Moderate fevers, sudden viral illness, acute respiratory infections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B6FAE] mt-2 shrink-0" />
                <span>Sprains, non-displaced bone fractures, minor athletic injuries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B6FAE] mt-2 shrink-0" />
                <span>Moderate allergic reactions, acute skin rashes, mild asthma exacerbations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B6FAE] mt-2 shrink-0" />
                <span>Minor lacerations requiring clinical sutures and sterile closure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Real-Time Walk-in Fast-Track Pre-Registration Card */}
        <div className="lilac-card p-8 rounded-3xl bg-white border border-[#3E3445]/8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#739B82]/15 text-[#739B82] text-xs font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>Current Urgent Care Wait Time: ~4 Minutes</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#3E3445]">
                Fast-Track Walk-in Pre-Registration
              </h3>
              <p className="text-xs sm:text-sm text-[#756B7C] leading-relaxed">
                Let our triage desk know you are en route to reduce administrative check-in on
                arrival.
              </p>
            </div>

            <div className="lg:col-span-6">
              {isCheckedIn ? (
                <div className="p-6 rounded-2xl bg-[#739B82]/10 border border-[#739B82]/30 text-[#739B82] text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 mx-auto text-[#739B82]" />
                  <div className="font-serif text-lg font-bold">You're on the Arrival List!</div>
                  <p className="text-xs text-[#756B7C]">
                    Check-in pass #TRIAGE-802 is active. Present your name at Reception upon arrival.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleWalkinSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      id="walkin-name-input"
                      type="text"
                      value={walkinName}
                      onChange={(e) => setWalkinName(e.target.value)}
                      placeholder="Patient Full Name"
                      className="px-4 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                      required
                    />
                    <input
                      id="walkin-phone-input"
                      type="tel"
                      value={walkinPhone}
                      onChange={(e) => setWalkinPhone(e.target.value)}
                      placeholder="Mobile Phone"
                      className="px-4 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    id="submit-walkin-btn"
                    type="submit"
                    className="w-full py-3 bg-[#8B6FAE] hover:bg-[#665080] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Notify Triage Desk of Arrival</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
