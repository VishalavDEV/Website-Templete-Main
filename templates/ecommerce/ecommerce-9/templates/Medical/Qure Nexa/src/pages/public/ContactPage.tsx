import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  ShieldCheck
} from 'lucide-react';
import { ApiService } from '../../services/api';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Input, Textarea } from '../../components/common/Input';
import { ScrollReveal } from '../../components/common/ScrollReveal';

export const ContactPage: React.FC = () => {
  const { success, error: toastError } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toastError('Required Fields', 'Please fill in your name, email, and message.');
      return;
    }

    try {
      setIsSubmitting(true);
      await ApiService.submitContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || 'General Healthcare Inquiry',
        message: formData.message
      });
      success('Inquiry Dispatched', 'Thank you! A patient coordinator will respond within 2-4 business hours.');
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send message';
      toastError('Dispatch Error', msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 shadow-md">
        <ScrollReveal direction="up">
          <div className="max-w-5xl mx-auto text-center space-y-3 relative z-10">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest bg-teal-500/20 px-3.5 py-1.5 rounded-full border border-teal-400/30">
              24/7 Patient Concierge
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Connect with Qure Nexa Center
            </h1>
            <p className="text-teal-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Have questions about clinical consultations, international patient admissions, or insurance coverage? Our care team is here to assist you.
            </p>
          </div>
        </ScrollReveal>
        <div className="absolute right-[-60px] top-[-60px] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-[30%] bottom-[-60px] w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-md space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Hospital Headquarters</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Centrally located in Seattle's Medical District with direct highway access and multi-level validated parking.
                  </p>
                </div>

                <div className="space-y-4 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Physical Campus Address:</strong>
                      <span>100 Medical Center Parkway, Suite 500, Seattle, WA 98104</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Telephone Inquiries:</strong>
                      <span>General Reception: +91 98765 43210</span>
                      <span className="block text-rose-600 font-bold mt-0.5">Emergency Hotline: +91 1800 555 091</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Email Communication:</strong>
                      <span>care@qurenexa.org</span>
                      <span className="block text-slate-500">admissions@qurenexa.org</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 shadow-xs">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Departmental Hours:</strong>
                      <span>Outpatient Consultations: Mon – Sat (08:00 AM – 08:00 PM)</span>
                      <span className="block text-teal-700 font-semibold mt-0.5">Emergency & Trauma Center: 24/7/365</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-16/9 relative bg-slate-100 flex items-center justify-center text-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                    alt="Qure Nexa Location Map"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  <div className="relative z-10 bg-white/90 backdrop-blur-xs p-3 rounded-xl shadow-md border border-slate-200 text-xs">
                    <MapPin className="w-6 h-6 text-rose-600 mx-auto mb-1 animate-bounce" />
                    <p className="font-bold text-slate-900">Qure Nexa Medical Center</p>
                    <span className="text-[11px] text-slate-500">100 Medical Center Pkwy</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-md">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Send an Online Inquiry</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in the details below and our patient care team will get back to you promptly.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-center gap-3 text-xs text-teal-800">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <div>
                      <strong className="block font-bold">Message Sent Successfully!</strong>
                      <span>Your inquiry has been logged in our care desk. We will reach out shortly.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Full Name"
                      required
                      placeholder="e.g. Johnathan Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      required
                      placeholder="e.g. jdoe@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <Input
                      label="Subject"
                      placeholder="e.g. Second opinion, insurance query..."
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <Textarea
                    label="Message / Medical Inquiry Details"
                    required
                    rows={5}
                    placeholder="Please describe how we can assist you..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      leftIcon={<Send className="w-4 h-4" />}
                    >
                      Send Medical Inquiry
                    </Button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
