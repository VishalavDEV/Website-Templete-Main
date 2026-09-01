import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { submitContact } from '../services/api';
import { siteSettings } from '../data/siteData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    try {
      const result = await submitContact(formData);
      if (result.success) {
        setSuccess(result.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help you find the right healthcare information."
        breadcrumbItems={[{ label: 'Contact' }]}
      />

      <section className="space-y-8 sm:space-y-10">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal animation="pop" delay={50}>
            <div className="floating-card bg-white p-6 flex items-start gap-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 mb-1">Location</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{siteSettings.organization}, {siteSettings.location}</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="pop" delay={120}>
            <div className="floating-card bg-white p-6 flex items-start gap-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 mb-1">Phone</h4>
                <a href={`tel:${siteSettings.phone}`} className="text-slate-600 text-xs hover:text-blue-600 font-bold block">{siteSettings.phone}</a>
                <span className="text-red-600 text-xs font-bold block mt-1">Emergency: {siteSettings.emergencyPhone}</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="pop" delay={190}>
            <div className="floating-card bg-white p-6 flex items-start gap-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 mb-1">Email</h4>
                <a href={`mailto:${siteSettings.email}`} className="text-slate-600 text-xs hover:text-blue-600 font-bold block">{siteSettings.email}</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="pop" delay={260}>
            <div className="floating-card bg-white p-6 flex items-start gap-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 mb-1">Working Hours</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">Mon - Sat: 8:00 AM - 8:00 PM<br/>Sun: Emergency Only</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Form Floating Window */}
          <ScrollReveal animation="fade-up" duration={700} className="lg:col-span-6 floating-window bg-white p-8 sm:p-10">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Get in Touch</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 tracking-tight">Send Us a Message</h3>
            <p className="text-slate-600 text-sm mb-6">Have inquiries about doctors, services, or billing? Drop us a line.</p>

            {success && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl flex items-center gap-3 text-sm mb-6">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>{success}</span>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 text-sm mb-6">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject *</label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of inquiry"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                <span>Send Message</span>
              </button>
            </form>
          </ScrollReveal>

          {/* Map Floating Window */}
          <ScrollReveal animation="slide-right" delay={200} className="lg:col-span-6 floating-window bg-slate-100 overflow-hidden relative min-h-[400px] flex items-center justify-center p-0">
            <div className="absolute inset-0 bg-blue-950/10 flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xl mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">{siteSettings.organization}</h4>
              <p className="text-slate-700 text-sm max-w-sm mb-6 font-medium">{siteSettings.location}</p>
              <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 shadow-md">
                Interactive Map Location Placeholder
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
