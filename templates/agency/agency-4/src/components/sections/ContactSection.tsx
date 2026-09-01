import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';
import { STUDIO_INFO } from '../../data/studio';
import type { ContactFormData } from '../../types';

export const ContactSection: React.FC = () => {
  const location = useLocation();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'Brand Strategy & Identity',
    budget: '$25,000 — $50,000',
    message: ''
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        projectType: serviceParam,
        message: `I am interested in inquiring about ${serviceParam} services for our brand.`
      }));
    }
  }, [location]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState({ show: false, title: '', message: '' });

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your project.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API network request latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setToast({
        show: true,
        title: 'Project Proposal Received!',
        message: 'Thank you for contacting AURELIA. Our partner lead will reach out to schedule a discovery call within 24 hours.'
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Brand Strategy & Identity',
        budget: '$25,000 — $50,000',
        message: ''
      });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Initiate a Project"
          title="Let's build something extraordinary together."
          subtitle="Tell us about your brand vision, project objectives, or key timeline goals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE6DF] shadow-xl"
          >
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#F9EFEA] text-[#D96B43] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold font-display text-[#1A1918]">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-sm text-[#6B6863] max-w-md mx-auto leading-relaxed">
                  Your project details have been safely received by our Copenhagen team. We will review your requirements and respond within 24 hours.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1918] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Henrik Vestergaard"
                      className={`w-full bg-[#FAF8F5] border rounded-2xl px-4 py-3.5 text-sm text-[#1A1918] placeholder-gray-400 focus:outline-none focus:border-[#D96B43] transition-colors ${
                        errors.name ? 'border-red-400' : 'border-[#EAE6DF]'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1918] mb-2">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. henrik@company.com"
                      className={`w-full bg-[#FAF8F5] border rounded-2xl px-4 py-3.5 text-sm text-[#1A1918] placeholder-gray-400 focus:outline-none focus:border-[#D96B43] transition-colors ${
                        errors.email ? 'border-red-400' : 'border-[#EAE6DF]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1918] mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Northline Systems"
                      className="w-full bg-[#FAF8F5] border border-[#EAE6DF] rounded-2xl px-4 py-3.5 text-sm text-[#1A1918] placeholder-gray-400 focus:outline-none focus:border-[#D96B43] transition-colors"
                    />
                  </div>

                  {/* Project Type Select */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1918] mb-2">
                      Service Interest
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#EAE6DF] rounded-2xl px-4 py-3.5 text-sm text-[#1A1918] focus:outline-none focus:border-[#D96B43] transition-colors cursor-pointer"
                    >
                      <option value="Brand Strategy & Identity">Brand Strategy & Identity</option>
                      <option value="Digital Experience & Web Design">Digital Experience & Web Design</option>
                      <option value="UI/UX & Mobile App Product">UI/UX & Mobile App Product</option>
                      <option value="Frontend Development & WebGL">Frontend Development & WebGL</option>
                      <option value="Full Retainer / Creative Direction">Full Retainer / Creative Direction</option>
                    </select>
                  </div>
                </div>

                {/* Budget Select */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1918] mb-2">
                    Estimated Investment Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['$15k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'].map((range) => (
                      <button
                        type="button"
                        key={range}
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border ${
                          formData.budget === range
                            ? 'bg-[#D96B43] text-white border-[#D96B43]'
                            : 'bg-[#FAF8F5] text-[#6B6863] border-[#EAE6DF] hover:border-[#D96B43]'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1918] mb-2">
                    Project Brief & Goals *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand context, project scope, target timeline, or key objectives..."
                    className={`w-full bg-[#FAF8F5] border rounded-2xl p-4 text-sm text-[#1A1918] placeholder-gray-400 focus:outline-none focus:border-[#D96B43] transition-colors ${
                      errors.message ? 'border-red-400' : 'border-[#EAE6DF]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  disabled={isSubmitting}
                  fullWidth
                >
                  {isSubmitting ? 'Sending Proposal...' : 'Submit Project Proposal'}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8 flex flex-col justify-between"
          >
            <div className="bg-[#1A1918] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-8 border border-white/10">
              <h3 className="text-2xl font-bold font-display text-white">
                Direct Contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-[#D96B43] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Email Inquiries</p>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="text-sm font-semibold text-white hover:text-[#D96B43] transition-colors">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-[#D96B43] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Direct Telephone</p>
                    <a href={`tel:${STUDIO_INFO.phone}`} className="text-sm font-semibold text-white hover:text-[#D96B43] transition-colors">
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-[#D96B43] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Copenhagen HQ</p>
                    <p className="text-sm font-medium text-gray-300 leading-relaxed">
                      {STUDIO_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-[#D96B43] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Working Hours</p>
                    <p className="text-sm font-medium text-gray-300">
                      {STUDIO_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">Follow Studio</p>
                <div className="flex flex-wrap gap-2">
                  {STUDIO_INFO.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-white/10 text-xs text-gray-200 hover:bg-[#D96B43] hover:text-white transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      <Toast
        isVisible={toast.show}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </section>
  );
};
