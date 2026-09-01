import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Building,
} from 'lucide-react';

export const ContactView: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [method, setMethod] = useState('email');
  const [department, setDepartment] = useState('General Consultation Inquiry');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do 45-minute Aura consultations work?',
      a: 'Unlike conventional 10-minute checkups, our initial patient consultations provide a dedicated 45 minutes with your board-certified specialist. We examine your medical timeline, review active biomarkers, and design an individualized prevention plan.',
    },
    {
      q: 'Do you accept major private insurance plans?',
      a: 'Yes, Aura Health works with Blue Cross Blue Shield, Aetna, UnitedHealthcare, Cigna, and Medicare Advantage for diagnostic imaging and eligible specialist visits. Out-of-network concierge options are also supported.',
    },
    {
      q: 'How fast do laboratory and 3T MRI results synchronize?',
      a: '95% of standard biomarker blood panels and digital pathology sync to your Patient Portal within 4 to 8 hours. 3T MRI imaging is interpreted by our radiologist and uploaded within 24 hours.',
    },
    {
      q: 'Can I consult with specialists virtually via telehealth?',
      a: 'Yes, all Aura physicians offer encrypted, browser-based video telehealth sessions. You will receive a secure meeting link upon booking—no external downloads or plugins required.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      showToast('Please fill out all required fields', 'error');
      return;
    }
    setIsSent(true);
    showToast('Inquiry sent! A care concierge will reply within 2 business hours.', 'success');
  };

  return (
    <section
      id="contact-page-section"
      className={`py-16 md:py-24 ${isFullPage ? 'pt-32' : 'bg-[#F9F7FB]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT CARE DESK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E3445] tracking-tight">
            Connect with our clinical concierges.
          </h2>
          <p className="text-sm sm:text-base text-[#756B7C] mt-3 leading-relaxed">
            Have questions about specialized treatments, insurance eligibility, or records transfer?
            Our patient care team is available 24/7.
          </p>
        </div>

        {/* Contact Grid: Form + Direct Desks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Form */}
          <div className="lg:col-span-7 lilac-card p-8 sm:p-10 rounded-3xl bg-white shadow-sm border border-[#3E3445]/8">
            <h3 className="font-serif text-2xl font-bold text-[#3E3445] mb-2">
              Send a Clinical Message
            </h3>
            <p className="text-xs text-[#756B7C] mb-6">
              All messages are encrypted and routed directly to licensed triage personnel.
            </p>

            {isSent ? (
              <div className="py-12 text-center space-y-3 bg-[#739B82]/10 rounded-2xl border border-[#739B82]/30 p-6">
                <CheckCircle2 className="w-10 h-10 text-[#739B82] mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#3E3445]">Message Received</h4>
                <p className="text-xs text-[#756B7C] max-w-sm mx-auto">
                  Thank you, {name}. A member of our patient concierge team has received your ticket
                  and will contact you at {email}.
                </p>
                <button
                  id="contact-send-another-btn"
                  onClick={() => {
                    setIsSent(false);
                    setMessage('');
                  }}
                  className="mt-4 px-5 py-2 bg-[#8B6FAE] text-white text-xs font-semibold rounded-full"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3E3445] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Jane Doe / John Smith"
                      className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3E3445] mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3E3445] mb-1">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3E3445] mb-1">
                      Department / Topic
                    </label>
                    <select
                      id="contact-department"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs font-semibold text-[#3E3445] focus:outline-none cursor-pointer"
                    >
                      <option>General Consultation Inquiry</option>
                      <option>Insurance & Billing Verification</option>
                      <option>Medical Records Transfer</option>
                      <option>3T Imaging Facility Question</option>
                      <option>Physician Referral</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">
                    Your Message / Detailed Question *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe how we can assist your care experience..."
                    className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-xl text-xs text-[#3E3445] focus:outline-none"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#756B7C] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#739B82]" />
                    <span>256-Bit Encrypted Submission</span>
                  </span>

                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="px-7 py-3 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-full shadow-xs transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Direct Help Desks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="lilac-card p-6 rounded-3xl bg-white space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#3E3445]">
                Direct Clinical Help Desks
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/5">
                  <span className="font-bold text-[#3E3445] block">24/7 Clinical Care Hotline</span>
                  <a
                    href="tel:18002872432"
                    className="font-mono text-sm font-bold text-[#8B6FAE] hover:underline"
                  >
                    +1 (800) 287-2432
                  </a>
                  <span className="text-[11px] text-[#756B7C] block mt-0.5">
                    Attended by on-call triage nurses
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/5">
                  <span className="font-bold text-[#3E3445] block">
                    Appointments & Scheduling Concierge
                  </span>
                  <a
                    href="tel:18002872433"
                    className="font-mono text-sm font-bold text-[#8B6FAE] hover:underline"
                  >
                    +1 (800) 287-2433
                  </a>
                  <span className="text-[11px] text-[#756B7C] block mt-0.5">
                    Mon–Sat: 7:00 AM – 8:00 PM EST
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/5">
                  <span className="font-bold text-[#3E3445] block">Records & Pathology Desk</span>
                  <a
                    href="mailto:records@auramedical.internal"
                    className="font-mono text-xs font-semibold text-[#8B6FAE] hover:underline"
                  >
                    records@auramedical.internal
                  </a>
                  <span className="text-[11px] text-[#756B7C] block mt-0.5">
                    HIPAA compliant digital exchange
                  </span>
                </div>
              </div>
            </div>

            {/* Headquarters Card */}
            <div className="lilac-card p-6 rounded-3xl bg-white space-y-3">
              <h4 className="font-serif text-base font-bold text-[#3E3445]">
                Central Medical Pavilion
              </h4>
              <div className="text-xs text-[#756B7C] space-y-1.5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#8B6FAE] mt-0.5 shrink-0" />
                  <span>450 Lilac Frost Avenue, Suite 100, Metropolitan Central</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#8B6FAE] shrink-0" />
                  <span>Open 24/7 for Emergency • Clinics: 7:30 AM – 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="max-w-3xl mx-auto pt-10">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#3E3445]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-[#756B7C] mt-1">
              Common questions regarding our consultations, insurance, and medical records.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  id={`faq-item-${idx}`}
                  className="lilac-card rounded-2xl bg-white border border-[#3E3445]/8 overflow-hidden transition-all"
                >
                  <button
                    id={`faq-toggle-${idx}`}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-sm font-bold text-[#3E3445]">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8B6FAE] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#756B7C] leading-relaxed border-t border-[#3E3445]/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
