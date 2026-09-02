import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, 
  HelpCircle, MessageSquare, ShieldCheck, Map
} from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import { faqsData } from '../data/faqs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen space-y-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Get In Touch"
          title="Contact EduPrime Global"
          highlight="Academic Offices"
          subtitle="Have questions about admissions, course curriculums, corporate sponsorships, or technical support? Our team is available 24/7."
          center
        />

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { icon: Mail, title: "Email Support", desc: "admissions@eduprime.edu", label: "24-Hour Response Guarantee" },
            { icon: Phone, title: "Phone Lines", desc: "+1 (800) 555-EDUPRIME", label: "Mon-Fri 08:00 AM - 08:00 PM EST" },
            { icon: MapPin, title: "Main Campus", desc: "100 Technology Plaza, Boston, MA 02110", label: "Global Academic Center" },
            { icon: Clock, title: "Office Hours", desc: "Virtual Desk Open 24/7", label: "Live Chat & Discord Support" },
          ].map((info, i) => {
            const IconComp = info.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mx-auto mb-4 flex items-center justify-center">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">{info.title}</h4>
                <p className="text-xs font-bold text-primary-600 mb-1">{info.desc}</p>
                <span className="text-[11px] text-slate-400 font-medium">{info.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Contact Form & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Col */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-primary-600">
              <MessageSquare className="w-4 h-4" />
              Direct Message Channel
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-100">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Message Delivered Successfully!</h4>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. An admissions officer has received your inquiry regarding <span className="font-semibold text-primary-600">{formData.subject}</span> and will reply to <span className="font-semibold text-slate-800">{formData.email}</span> within 4 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' }); }}
                  className="px-6 py-2.5 bg-primary-600 text-white font-bold rounded-xl text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Lee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject Matter
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-primary-500 cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Admissions & Eligibility">Admissions & Eligibility</option>
                      <option value="Financial Aid & Scholarships">Financial Aid & Scholarships</option>
                      <option value="Enterprise Corporate Partnerships">Enterprise Corporate Partnerships</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows="5"
                    required
                    placeholder="How can we assist your educational goals today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold bg-primary-600 hover:bg-primary-700 text-white text-xs shadow-md shadow-primary-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Official Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map Placeholder & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Map className="w-4 h-4" />
                Global Academic Center
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">EduPrime Boston Campus</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Visit our physical innovation hub equipped with high-concurrency cloud computing servers, lecture auditoriums, and VR labs.
              </p>

              {/* Map Canvas Mock */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="w-10 h-10 text-primary-500 mb-2 animate-bounce" />
                <span className="text-xs font-bold text-white">100 Technology Plaza, Boston, MA</span>
                <span className="text-[10px] text-slate-400 mt-1">Interactive Campus Coordinates: 42.3601° N, 71.0589° W</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Common Questions"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Everything you need to know about enrollment, tuition, certifications, and career support."
          center
        />

        <div className="space-y-4 mt-8">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
