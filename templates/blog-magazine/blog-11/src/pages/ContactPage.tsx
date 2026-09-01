import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Editorial Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact & Press Inquiries — AGROTECH AI';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'Editorial Inquiry', message: '' });
    }, 800);
  };

  return (
    <main className="min-h-screen pt-28 pb-20 bg-theme-primary">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal direction="down">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 font-mono-tech text-xs uppercase tracking-widest font-bold">
              <Mail className="w-3.5 h-3.5" />
              <span>EDITORIAL DESK</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif-editorial font-bold text-theme-primary tracking-tight">
              Contact &amp; Press Inquiries
            </h1>

            <p className="text-sm sm:text-base text-theme-secondary font-sans">
              Have a story lead, agricultural research paper, or editorial feedback? Reach out to our team below.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form onSubmit={handleSubmit} className="bg-theme-surface p-8 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono-tech uppercase tracking-widest text-theme-muted mb-2 font-bold">
                  YOUR NAME *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dr. Jane Doe"
                  className="w-full p-3.5 rounded-xl bg-theme-primary border border-neutral-800 text-theme-primary text-sm outline-none focus:border-emerald-500 transition-colors placeholder-neutral-500 font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono-tech uppercase tracking-widest text-theme-muted mb-2 font-bold">
                  EMAIL ADDRESS *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@agrotech.org"
                  className="w-full p-3.5 rounded-xl bg-theme-primary border border-neutral-800 text-theme-primary text-sm outline-none focus:border-emerald-500 transition-colors placeholder-neutral-500 font-medium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-mono-tech uppercase tracking-widest text-theme-muted mb-2 font-bold">
                SUBJECT
              </label>
              <select
                id="contact-subject"
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-theme-primary border border-neutral-800 text-theme-primary text-sm outline-none focus:border-emerald-500 transition-colors font-medium"
              >
                <option value="Editorial Inquiry">Editorial Inquiry / Pitch</option>
                <option value="Press & Media">Press &amp; Media Request</option>
                <option value="Research Submission">Research Paper Submission</option>
                <option value="General Feedback">General Feedback</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono-tech uppercase tracking-widest text-theme-muted mb-2 font-bold">
                YOUR MESSAGE *
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your inquiry or research details..."
                className="w-full p-3.5 rounded-xl bg-theme-primary border border-neutral-800 text-theme-primary text-sm outline-none focus:border-emerald-500 transition-colors placeholder-neutral-500 font-medium"
              />
            </div>

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-rose-950 text-rose-200 text-xs font-mono-tech flex items-center gap-2 font-bold">
                <AlertCircle className="w-4 h-4 shrink-0" /> {errorMessage}
              </div>
            )}

            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-950 text-emerald-200 text-xs font-mono-tech flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                Message sent successfully! Our editorial desk will respond within 24 hours.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl bg-emerald-600 text-white font-mono-tech text-xs uppercase tracking-widest font-bold hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
            >
              <Send className="w-4 h-4" /> {status === 'loading' ? 'SENDING INQUIRY...' : 'SEND INQUIRY'}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </main>
  );
};
