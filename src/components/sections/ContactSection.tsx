import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  Copy,
  CheckCircle2,
  Phone,
  ArrowUpRight,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../data/portfolioData';
import { ContactFormData } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { useClipboard } from '../../hooks/useClipboard';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from '../common/Icons';
import { soundFx } from '../../utils/audio';
import { cn } from '../../utils/cn';

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubIcon className="w-4 h-4" />,
  Linkedin: <LinkedinIcon className="w-4 h-4" />,
  Twitter: <TwitterIcon className="w-4 h-4" />,
  Dribbble: <DribbbleIcon className="w-4 h-4" />,
};

interface ContactSectionProps {
  onShowToast: (type: 'success' | 'error' | 'info', title: string, desc?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const { copy: copyEmail, isCopied: isEmailCopied } = useClipboard();
  const { copy: copyPhone, isCopied: isPhoneCopied } = useClipboard();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'Frontend & Creative Engineering',
    budget: '$10k - $25k',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    soundFx.playClick();
    copyEmail(PERSONAL_INFO.email);
    onShowToast('success', 'Email copied to clipboard!', PERSONAL_INFO.email);
  };

  const handleCopyPhone = () => {
    soundFx.playClick();
    copyPhone(PERSONAL_INFO.phone);
    onShowToast('success', 'Phone copied to clipboard!', PERSONAL_INFO.phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      onShowToast('error', 'Validation Error', 'Please fill in name, email, and project message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      onShowToast('error', 'Invalid Email', 'Please check your email address format.');
      return;
    }

    setErrorMessage('');
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      onShowToast(
        'success',
        'Message Dispatched Successfully!',
        "Thank you! Alex will respond within 24 hours."
      );

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#2563eb', '#7c3aed', '#10b981', '#0284c7'],
      });

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          service: 'Frontend & Creative Engineering',
          budget: '$10k - $25k',
          message: '',
        });
        setStatus('idle');
      }, 4000);
    }, 1400);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get in Touch"
          title="Let’s create something extraordinary together."
          highlightedWord="create something extraordinary"
          description="Have an ambitious product concept, need technical architecture leadership, or want to explore bespoke creative collaborations? Drop a line."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Cards & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-panel border border-slate-200 bg-white shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-display font-extrabold text-slate-900 mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-sm text-slate-600">
                  I typically respond to project requests and advisory inquiries within 24 hours.
                </p>
              </div>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase font-semibold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-blue-50 hover:text-blue-600 text-slate-600 transition-colors shadow-sm"
                >
                  {isEmailCopied ? (
                    <Check className="w-4 h-4 text-emerald-600 font-bold" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase font-semibold">
                      Phone & Signal
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  title="Copy phone number"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 transition-colors shadow-sm"
                >
                  {isPhoneCopied ? (
                    <Check className="w-4 h-4 text-emerald-600 font-bold" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Timezone */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase font-semibold">
                    Location & Base
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Availability Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase font-semibold">
                    Current Capacity
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {PERSONAL_INFO.availability}
                  </span>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-3 font-semibold">
                  Find Me Online
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {SOCIAL_LINKS.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700 hover:text-blue-600 hover:border-blue-400 transition-colors shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        {iconMap[soc.icon]}
                        <span>{soc.name}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-200 bg-white shadow-2xl relative overflow-hidden">
              <div className="mb-8">
                <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-slate-600">
                  Fill out this brief overview to schedule an exploratory discovery call.
                </p>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-emerald-900">
                    Transmission Sent!
                  </h4>
                  <p className="text-sm text-slate-700 max-w-md mx-auto">
                    Thank you for reaching out, <span className="font-bold">{formData.name}</span>. I have received your message and will review the specifications immediately.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-700 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-slate-700 block">
                        Your Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Elena Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 outline-none transition-all text-sm font-medium shadow-sm"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-slate-700 block">
                        Email Address <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 outline-none transition-all text-sm font-medium shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Type Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-slate-700 block">
                        Service Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 outline-none transition-all text-sm font-medium shadow-sm"
                      >
                        <option value="Frontend & Creative Engineering">Frontend & Creative Engineering</option>
                        <option value="UI/UX & Interface Design">UI/UX & Interface Design</option>
                        <option value="Creative Motion & 3D WebGL">Creative Motion & 3D WebGL</option>
                        <option value="Enterprise Design Systems">Enterprise Design Systems</option>
                        <option value="Performance & Code Audit">Performance & Code Audit</option>
                        <option value="Technical Advisory / MVP">Technical Advisory / MVP</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-slate-700 block">
                        Expected Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 outline-none transition-all text-sm font-medium shadow-sm"
                      >
                        <option value="< $10,000">&lt; $10,000 (Small Sprint)</option>
                        <option value="$10k - $25k">$10k - $25k (Standard MVP)</option>
                        <option value="$25k - $50k">$25k - $50k (Flagship App)</option>
                        <option value="$50k+">$50k+ (Enterprise Architecture)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold text-slate-700 block">
                      Project Goals & Timeline <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your product vision, target deadlines, technical constraints, or design goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400 outline-none transition-all text-sm font-medium resize-none shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={cn(
                      'w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 text-white',
                      status === 'sending'
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-95 hover:shadow-blue-600/30'
                    )}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Project Inquiry</span>
                      </>
                    )}
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
