import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Upload, 
  ArrowRight, 
  Phone, 
  ShieldCheck,
  Building,
  Check,
  X
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Artificial Intelligence & Agents',
    budget: '$50,000 - $100,000',
    timeline: 'Within 1 Month',
    message: '',
  });
  const [fileName, setFileName] = useState<string | null>(null);

  // Calendar scheduling modal state
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('10:00 AM PST');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div id="contact-page" className="pt-24 pb-20 bg-white">
      {/* Header */}
      <div className="bg-slate-950 text-white pt-14 pb-16 relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs border border-blue-500/30">
            Rapid Technical Triage
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white mt-4 max-w-3xl leading-tight">
            Start a Conversation With Our Principal Engineers.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            We reply within 24 hours with an initial architectural feasibility assessment and discovery agenda. Zero sales spam.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-50 border border-slate-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Project Inquiry Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. A principal solutions architect will review your technical requirements and respond to <span className="font-semibold text-slate-800">{formData.email}</span> within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-slate-950 font-display mb-1">
                  Project Specifications
                </h2>
                <p className="text-xs text-slate-600 mb-6">
                  Fill in the details below or book a direct calendar discovery slot.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-500 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-500 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-500 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Target Project Discipline</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-500 text-xs cursor-pointer"
                      >
                        <option>Artificial Intelligence &amp; Agents</option>
                        <option>Enterprise Software &amp; Distributed Systems</option>
                        <option>Web &amp; Mobile Applications</option>
                        <option>Business Workflow Automation</option>
                        <option>Cloud Infrastructure &amp; Kubernetes</option>
                        <option>Security &amp; Full Architectural Audit</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Estimated Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-500 text-xs cursor-pointer"
                      >
                        <option>$25,000 - $50,000 (Sprint MVP)</option>
                        <option>$50,000 - $100,000 (Production System)</option>
                        <option>$100,000 - $250,000 (Enterprise Solution)</option>
                        <option>$250,000+ (Transformational Multi-Pod)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Target Launch Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-500 text-xs cursor-pointer"
                      >
                        <option>Immediate / ASAP (&lt; 2 weeks)</option>
                        <option>Within 1 Month</option>
                        <option>Next Quarter (Q3)</option>
                        <option>Flexible / Exploratory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Brief Technical Overview / Problem Statement *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current system, target throughput, or what business bottleneck you need solved..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-blue-500 text-xs"
                    />
                  </div>

                  {/* File Upload UI */}
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Attach Technical Brief / RFP (Optional)</label>
                    <label className="border-2 border-dashed border-slate-200 hover:border-slate-400 bg-white rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 text-slate-400 mb-1" />
                      <span className="text-xs text-slate-600 font-medium">
                        {fileName ? fileName : 'Drag & drop or click to upload PDF/DOCX (Max 25MB)'}
                      </span>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.txt"
                      />
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Submit Inquiry &amp; Request RFC</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-slate-600 text-center mt-2 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Protected by standard bilateral NDA &amp; Zero Data Retention guarantee.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right: Direct Contacts, Calendly option, Global Offices */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Calendar Booking Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Instant Calendar Booking</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Book a 30-Min Discovery Session
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer an immediate conversation? Choose an open slot directly with our principal solutions architect.
              </p>

              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-white">Next Available Slot:</p>
                  <p className="text-emerald-400 font-mono text-[11px]">{selectedDay} &bull; {selectedTime}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setBookingConfirmed(false);
                    setCalendarOpen(true);
                  }}
                  className="px-3.5 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold text-xs cursor-pointer shadow-xs transition-colors"
                >
                  Schedule Slot
                </button>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Guaranteed 24-Hour Response SLA on all inquiries</span>
              </div>
            </div>

            {/* Direct Inboxes */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Direct Team Inboxes
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="font-medium text-slate-700">General &amp; Eng Inquiries:</span>
                  <a href="mailto:hello@axiom.dev" className="text-blue-600 font-mono hover:underline">
                    hello@axiom.dev
                  </a>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="font-medium text-slate-700">Security / Audits:</span>
                  <a href="mailto:security@axiom.dev" className="text-blue-600 font-mono hover:underline">
                    security@axiom.dev
                  </a>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                  <span className="font-medium text-slate-700">Media &amp; Press:</span>
                  <a href="mailto:press@axiom.dev" className="text-blue-600 font-mono hover:underline">
                    press@axiom.dev
                  </a>
                </div>
              </div>
            </div>

            {/* Global Offices */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Global Engineering Hubs
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">San Francisco, California</p>
                    <p className="text-slate-500">555 Mission St, Suite 2400, Financial District</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">New York, New York</p>
                    <p className="text-slate-500">One World Trade Center, 48th Floor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">London, United Kingdom</p>
                    <p className="text-slate-500">100 Bishopsgate, London EC2N 4AG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discovery Calendar Booking Modal */}
      {calendarOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Book Architectural Discovery
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCalendarOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {bookingConfirmed ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Discovery Session Reserved
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                  Your session is confirmed for <span className="font-bold text-slate-900">{selectedDay} at {selectedTime}</span>. A calendar invite and Google Meet link have been provisioned.
                </p>
                <button
                  type="button"
                  onClick={() => setCalendarOpen(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Select Day:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Tomorrow', 'Thursday', 'Friday'].map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className={`py-2 px-2.5 rounded-xl text-center font-medium border cursor-pointer transition-colors ${
                          selectedDay === day
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Select 30-Min Time Slot (PST):</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['09:30 AM PST', '10:00 AM PST', '01:30 PM PST', '03:00 PM PST'].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-2.5 rounded-xl text-center font-mono font-medium border cursor-pointer transition-colors ${
                          selectedTime === slot
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setBookingConfirmed(true)}
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Confirm Slot &bull; {selectedDay} ({selectedTime})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
