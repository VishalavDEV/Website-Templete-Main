import React, { useState } from 'react';
import { X, Send, Mail, MapPin, CheckCircle, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: 'Web Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state for nice confirmation
    }, 500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-800 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Received</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-sm mx-auto text-sm leading-relaxed">
              Thank you, <span className="font-semibold text-gray-900 dark:text-white">{formData.name}</span>. I'll get back to you at <span className="font-semibold text-gray-900 dark:text-white">{formData.email}</span> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-white font-medium px-6 py-2.5 rounded-full text-sm shadow-xs transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block py-0.5 px-2.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-900/40 mb-2">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Let's Build Something Great
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Have a project idea, inquiry, or just want to connect? Send me a message below.
              </p>
            </div>

            {/* Quick Contact Pill */}
            <div className="bg-gray-50 dark:bg-gray-800/80 p-3 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 font-medium">Direct Email</div>
                  <div className="text-xs font-bold text-gray-900 dark:text-gray-100">{personalInfo.email}</div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Interested Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white cursor-pointer"
                >
                  <option value="Web Development">Full Stack Web Development</option>
                  <option value="UI/UX Design">UI/UX Design & Prototyping</option>
                  <option value="Frontend Development">Frontend React / Next.js Development</option>
                  <option value="Backend Development">Backend Node.js & API Engineering</option>
                  <option value="Consulting">Technical Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me a bit about your project, timeline, and goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-white font-medium py-3 rounded-full shadow-xs active:scale-98 transition-all cursor-pointer text-sm"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
