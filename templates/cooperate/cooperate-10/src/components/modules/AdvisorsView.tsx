import React, { useState } from 'react';
import {
  UserCheck,
  Calendar,
  Clock,
  Award,
  Star,
  CheckCircle2,
  DollarSign,
  Shield,
  Briefcase,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  Globe
} from 'lucide-react';
import { ActiveTab, Currency, Advisor } from '../../types';
import { ADVISORS } from '../../data/mockData';
import { formatCurrency, triggerDownload } from '../../utils/formatters';

interface AdvisorsViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  bookingAdvisorId?: string | null;
}

export const AdvisorsView: React.FC<AdvisorsViewProps> = ({
  setActiveTab,
  currency,
  bookingAdvisorId,
}) => {
  const [selectedAdvisorId, setSelectedAdvisorId] = useState<string>(
    bookingAdvisorId || ADVISORS[0].id
  );
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [serviceType, setServiceType] = useState<string>('Portfolio Review & Restructuring');
  const [bookingDate, setBookingDate] = useState<string>('2026-09-02');
  const [bookingTime, setBookingTime] = useState<string>('14:00');
  const [corpusRange, setCorpusRange] = useState<string>('$1,000,000 - $5,000,000');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const selectedAdvisor =
    ADVISORS.find((a) => a.id === selectedAdvisorId) || ADVISORS[0];

  const filteredAdvisors = ADVISORS.filter((adv) => {
    if (selectedSpecialty === 'All') return true;
    return adv.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) {
      alert('Please provide your name and email to confirm the consultation.');
      return;
    }
    setIsSubmitted(true);
  };

  const downloadCalendarInvite = () => {
    const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Apex Wealth Management//Advisor Consultation//EN\nBEGIN:VEVENT\nSUMMARY:Apex Wealth Consultation with ${selectedAdvisor.name}\nDESCRIPTION:Service: ${serviceType}\\nCorpus: ${corpusRange}\\nAdvisor: ${selectedAdvisor.name} (${selectedAdvisor.title})\nDTSTART:20260902T140000Z\nDTEND:20260902T150000Z\nLOCATION:Apex Private Client Portal / Zoom Secured\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;
    triggerDownload(`Apex_Consultation_${selectedAdvisor.name.replace(/\s+/g, '_')}.ics`, icsData);
  };

  return (
    <div className="w-full py-10 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Dedicated Private Wealth Fiduciaries
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Meet Our Senior Wealth Directors
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every client is paired with a fiduciary partner possessing over 15 years of institutional asset management and cross-border tax structuring experience.
          </p>
        </div>

        {/* Specialty Filter Pills */}
        <div className="flex justify-center gap-2 flex-wrap mt-8">
          {['All', 'Ultra HNI', 'Equity', 'Fixed Income', 'Alternative', 'Retirement', 'ESG'].map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedSpecialty === spec
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {spec === 'All' ? 'All Advisory Desks' : spec}
            </button>
          ))}
        </div>
      </section>

      {/* 1. Advisors Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAdvisors.map((adv) => {
            const isChosen = selectedAdvisorId === adv.id;
            return (
              <div
                key={adv.id}
                className={`bg-white rounded-2xl border transition-all p-6 flex flex-col justify-between shadow-xs hover:shadow-lg ${
                  isChosen ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-slate-200'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 font-display text-2xl font-bold">
                      {adv.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-amber-500 gap-0.5 justify-end">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-slate-900">{adv.rating}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">{adv.yearsExperience} yrs exp</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900">{adv.name}</h3>
                    <p className="text-xs font-bold text-amber-700">{adv.title}</p>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{adv.bio}</p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs border border-slate-100">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Specialty:</span>
                      <span className="font-bold text-slate-800">{adv.specialty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">AUM Advised:</span>
                      <span className="font-mono font-bold text-slate-900">
                        {formatCurrency(adv.aumManaged, currency)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Credentials:</span>
                      <span className="font-semibold text-slate-700">{adv.certifications.join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Languages:</span>
                      <span className="text-slate-600">{adv.languages.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setSelectedAdvisorId(adv.id);
                      setIsSubmitted(false);
                      const el = document.getElementById('consultation-booking-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-colors text-center ${
                      isChosen
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    {isChosen ? 'Selected Advisor' : 'Select for Consultation'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Interactive Booking Consultation Form */}
      <section id="consultation-booking-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                Direct Appointment Scheduling
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Book a 1-on-1 Fiduciary Consultation
              </h3>
              <p className="text-xs text-slate-300">
                Confidential session with <strong>{selectedAdvisor.name}</strong> ({selectedAdvisor.title})
              </p>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              No Advisory Fee for First Audit
            </div>
          </div>

          {isSubmitted ? (
            <div className="p-8 text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-slate-900">
                Consultation Confirmed!
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your appointment with <strong>{selectedAdvisor.name}</strong> has been secured for{' '}
                <strong>{bookingDate} at {bookingTime} EST</strong>. A private video conference link and preparation brief have been sent to <strong>{clientEmail}</strong>.
              </p>

              <div className="pt-3 flex justify-center gap-3">
                <button
                  onClick={downloadCalendarInvite}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold rounded-xl flex items-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Download .ICS Calendar Event</span>
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
                >
                  Book Another Slot
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Selected Advisor</label>
                  <select
                    value={selectedAdvisorId}
                    onChange={(e) => setSelectedAdvisorId(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 font-bold text-slate-900"
                  >
                    {ADVISORS.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name} — {a.specialty}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Advisory Mandate Objective</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium"
                  >
                    <option value="Portfolio Review & Restructuring">Comprehensive Portfolio Review</option>
                    <option value="New Capital Deployment Strategy">New Capital Deployment Strategy</option>
                    <option value="Private Credit & Yield Structuring">Private Credit &amp; Yield Structuring</option>
                    <option value="Estate Planning & Multi-Family Office">Estate Planning &amp; Wealth Preservation</option>
                    <option value="Retirement Glidepath Optimization">Retirement Glidepath Optimization</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Preferred Date</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Time Slot</label>
                  <select
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <option value="10:00">10:00 AM EST (Morning)</option>
                    <option value="12:00">12:00 PM EST (Midday)</option>
                    <option value="14:00">02:00 PM EST (Afternoon)</option>
                    <option value="16:30">04:30 PM EST (Late)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Target Investment Corpus</label>
                  <select
                    value={corpusRange}
                    onChange={(e) => setCorpusRange(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <option value="$50,000 - $250,000">$50,000 - $250,000</option>
                    <option value="$250,000 - $1,000,000">$250,000 - $1,000,000</option>
                    <option value="$1,000,000 - $5,000,000">$1,000,000 - $5,000,000 (HNI)</option>
                    <option value="$5,000,000+">$5,000,000+ (Ultra HNI / Institutional)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Victoria Sterling"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="v.sterling@apexwealth.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Direct Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 392-1090"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Portfolio Notes or Specific Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Mention current asset distribution, liquidity horizon, or specific questions for the advisor..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-md transition-colors text-center"
              >
                Confirm Consultation Appointment &rarr;
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
