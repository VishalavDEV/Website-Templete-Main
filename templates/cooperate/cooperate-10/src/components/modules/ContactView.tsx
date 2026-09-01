import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ShieldAlert,
  CheckCircle2,
  Building,
  Globe,
  Headphones,
  HelpCircle,
  Lock
} from 'lucide-react';
import { ActiveTab } from '../../types';
import { GLOBAL_OFFICES } from '../../data/mockData';

interface ContactViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  openBookingModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ setActiveTab, openBookingModal }) => {
  const [selectedOffice, setSelectedOffice] = useState(GLOBAL_OFFICES[0]);
  const [inquiryType, setInquiryType] = useState('Private Wealth Advisory');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="w-full py-10 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Global Concierge &amp; Fiduciary Desks
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Global Contact &amp; Client Support
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Direct access to dedicated wealth desks across 8 global financial capitals. 24/7 priority assistance for private clients and institutional allocators.
          </p>
        </div>
      </section>

      {/* 1. Global Office Headquarters Selector & Map Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Global Office Directory
              </h3>
              <p className="text-xs text-slate-500">
                Select an institutional jurisdiction to view local desk directors and compliance contacts.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
              8 Financial Hubs Worldwide
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {GLOBAL_OFFICES.map((off) => {
              const isSelected = selectedOffice.city === off.city;
              return (
                <button
                  key={off.city}
                  onClick={() => setSelectedOffice(off)}
                  className={`p-3 rounded-xl text-center transition-all border ${
                    isSelected
                      ? 'bg-slate-900 text-amber-400 font-bold border-slate-900 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <span className="text-xs block">{off.city}</span>
                  <span className="text-[10px] text-slate-400 font-normal">{off.country}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Office Detail View */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <Building className="w-5 h-5 text-amber-600" />
                <span>{selectedOffice.city} Executive Office</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{selectedOffice.address}</p>
              <span className="text-[11px] font-bold text-amber-700 block">
                Jurisdiction: {selectedOffice.region}
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="font-mono font-bold text-slate-900">{selectedOffice.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="font-mono text-slate-800">{selectedOffice.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Local Trading Hours: 08:30 – 18:00 Local</span>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-2">
              <button
                onClick={openBookingModal}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold rounded-xl transition-colors text-center"
              >
                Schedule Meeting in {selectedOffice.city}
              </button>
              <span className="text-[10px] text-center text-slate-400">
                Visitor protocol: Pre-registered identification required.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Priority Inquiries & Support Ticket Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Transmit a Fiduciary Inquiry
              </h3>
              <p className="text-xs text-slate-500">
                Our senior advisory panel responds to prospective client inquiries within 2 hours during market sessions.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-display text-xl font-bold text-emerald-900">
                  Message Securely Transmitted
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Your inquiry has been routed to the <strong>{inquiryType}</strong> desk. A Senior Partner will contact you shortly at <strong>{email}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Inquiry Category</label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 font-medium"
                  >
                    <option value="Private Wealth Advisory">Private Wealth Advisory ($1M+ Portfolio)</option>
                    <option value="Institutional Asset Management">Institutional Mandates &amp; Pension Funds</option>
                    <option value="Alternative & Private Credit">Alternative &amp; Private Credit Fund Access</option>
                    <option value="Existing Client Service">Existing Client Account &amp; Custody Support</option>
                    <option value="Tax & Multi-Family Structuring">Cross-Border Tax &amp; Family Office Advisory</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Legal Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="j.vance@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Direct Contact Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Inquiry Brief / Specifics *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Outline your investment horizon, anticipated capital allocation, or specific question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Confidential Inquiry &rarr;</span>
                </button>
              </form>
            )}
          </div>

          {/* Dedicated Desks & Emergency Security Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                Direct Specialist Desks
              </span>
              <h4 className="font-display text-xl font-bold text-white">
                Institutional Contact Channels
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="font-bold text-white">Private Wealth Desk</div>
                  <div className="text-slate-400 text-[11px]">hni.desk@apexwealth.com &bull; +1 (800) 273-9001</div>
                </div>

                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="font-bold text-white">Institutional &amp; Pension Relations</div>
                  <div className="text-slate-400 text-[11px]">institutional@apexwealth.com &bull; +44 20 7946 0992</div>
                </div>

                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="font-bold text-white">Regulatory &amp; Compliance Office</div>
                  <div className="text-slate-400 text-[11px]">compliance@apexwealth.com &bull; SEC CRD #293810</div>
                </div>
              </div>
            </div>

            {/* Emergency Security / Lock */}
            <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                <ShieldAlert className="w-4 h-4 text-amber-700" />
                <span>Client Emergency Security Line</span>
              </div>
              <p className="text-[11px] text-amber-800 leading-relaxed">
                If you suspect unauthorized account access or need an immediate custodial trade halt: Call{' '}
                <strong className="text-amber-950 font-mono">+1 (800) 999-APEX (24/7)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
