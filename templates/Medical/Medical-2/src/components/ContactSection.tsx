import React, { useState } from 'react';
import { storageService } from '../services/storageService';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  AlertCircle, ShieldAlert, Navigation, Building, Calendar 
} from 'lucide-react';

interface ContactSectionProps {
  onOpenEmergency: () => void;
  onBookAppointment: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenEmergency,
  onBookAppointment,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Inquiries',
    subject: '',
    message: '',
  });

  const [submittedMessageId, setSubmittedMessageId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please provide a valid email address.';
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact phone number.';
    if (!formData.subject.trim()) errs.subject = 'Please enter a message subject.';
    if (!formData.message.trim() || formData.message.length < 10) errs.message = 'Message must contain at least 10 characters.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const msg = storageService.saveContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmittedMessageId(msg.id);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'General Inquiries',
        subject: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-700 font-black text-[10px] tracking-widest uppercase bg-teal-100/60 border border-teal-200/60 px-3.5 py-1 rounded-full">
            Contact & Clinical Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            We Are Here to Assist Your Health Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out to our patient intake coordinators, request medical records, or visit our central campus in Boston.
          </p>
        </div>

        {/* 4 Contact Channels Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 hover:border-teal-300 transition shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Hospital Location</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              450 Medical Arts Pavilion, Longwood Medical Area, Boston, MA 02115
            </p>
            <span className="text-[11px] font-bold text-teal-700 block pt-1">Valet & Garage Parking Available</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 hover:border-teal-300 transition shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Phone & Switchboard</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Appointments: (617) 555-0144<br />
              Main Switchboard: (617) 555-0100
            </p>
            <button
              onClick={onOpenEmergency}
              className="text-[11px] font-bold text-rose-600 hover:underline block pt-1"
            >
              24/7 Trauma Hotline: (800) 555-0199 →
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 hover:border-teal-300 transition shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Direct Email</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Intake: care@mediciohealth.org<br />
              Billing: billing@mediciohealth.org
            </p>
            <span className="text-[11px] text-slate-400 block pt-1">Responses within 2 business hours</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 hover:border-teal-300 transition shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Operating Hours</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Outpatient: Mon-Sat 7:00 AM - 7:00 PM<br />
              Emergency Department: 24/7/365
            </p>
            <span className="text-[11px] font-bold text-emerald-600 block pt-1">Always Open for Acute Needs</span>
          </div>
        </div>

        {/* Main Grid: Campus Map + Interactive Form */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Campus Map & Directions visual */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-xl border border-slate-800 p-6 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                  Campus Navigation
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  Finding Your Way to Medicio Pavilion
                </h3>
              </div>

              {/* Styled Interactive Map Graphic */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 bg-slate-800 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Boston Medical District Map"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Map Pin Pulse */}
                <div className="absolute flex flex-col items-center animate-bounce">
                  <div className="bg-teal-500 text-slate-950 font-black text-[11px] px-3 py-1 rounded-full shadow-xl border border-white">
                    Medicio Medical Center
                  </div>
                  <div className="w-3 h-3 bg-teal-500 rotate-45 -mt-1.5 border-r border-b border-white" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-xl text-[11px] text-slate-300 border border-white/10 flex items-center justify-between">
                  <span>GPS: 42.3370° N, 71.1070° W</span>
                  <span className="text-teal-400 font-bold">Zone A (Main Lobby)</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <p><strong>Public Transit:</strong> Green Line 'E' to Longwood Medical Area stop (2-minute walk).</p>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <p><strong>Underground Parking:</strong> Patient rates validated at reception desk ($5 all-day).</p>
                </div>
              </div>

              <button
                id="get-directions-btn"
                onClick={() => {
                  window.open('https://maps.google.com/?q=Longwood+Medical+Area+Boston+MA', '_blank');
                }}
                className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl shadow transition text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Directions</span>
              </button>
            </div>
          </div>

          {/* Right: Contact & Clinical Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-md space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Send an Inquiry or Feedback
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Submit non-urgent questions regarding treatments, records, billing, or general clinic operations.
              </p>
            </div>

            {/* Emergency Warning */}
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between gap-3 text-xs text-rose-800">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Medical emergency? Do not use this contact form. Call <strong>911</strong> or (800) 555-0199.</span>
              </div>
              <button
                onClick={onOpenEmergency}
                className="text-rose-700 font-bold underline shrink-0 hover:text-rose-900 cursor-pointer"
              >
                Emergency Guide
              </button>
            </div>

            {submittedMessageId ? (
              <div className="bg-white rounded-2xl p-8 border border-emerald-300 shadow-md text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Message Dispatched Successfully</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you. Your inquiry has been routed to our patient services team. Your tracking reference code is:
                </p>
                <span className="inline-block font-mono font-extrabold text-sm text-teal-800 bg-teal-50 px-4 py-1.5 rounded-lg border border-teal-200">
                  {submittedMessageId}
                </span>
                <p className="text-xs text-slate-500">
                  A representative will respond to your email within 2 business hours.
                </p>
                <button
                  id="send-another-message-btn"
                  onClick={() => setSubmittedMessageId(null)}
                  className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                        errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@example.com"
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (617) 555-0123"
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Department Inquiry
                    </label>
                    <select
                      id="contact-department-select"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none font-medium"
                    >
                      <option value="General Inquiries">General Inquiries</option>
                      <option value="Cardiology & Vascular">Cardiology & Vascular</option>
                      <option value="Neurology & Spine">Neurology & Spine</option>
                      <option value="Orthopedic Surgery">Orthopedic Surgery</option>
                      <option value="Pediatric Care">Pediatric Care</option>
                      <option value="Billing & Health Insurance">Billing & Health Insurance</option>
                      <option value="Medical Records Request">Medical Records Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="contact-subject-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Question regarding MRI preparation"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.subject ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-600 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Message Details *
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, requested dates, or questions..."
                    className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] text-slate-500">
                    We respect your patient confidentiality (HIPAA compliant).
                  </span>
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Clinical Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
