import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'pitch',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject line.';
    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide a message of at least 20 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedTicket = `STV-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#C85A32', '#1C1917', '#E8E2D5']
        });
      } catch (err) {
        console.error(err);
      }
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      department: 'pitch',
      subject: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      <Breadcrumbs items={[{ label: 'Editorial Desk & Inquiries' }]} />

      <div className="py-6 sm:py-8 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E27453] mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Editorial Inquiries</span>
        </div>
        <h1 className="font-display font-black text-4xl sm:text-5xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight">
          Contact the Editorial Desk
        </h1>
        <p className="text-base text-[#44403C] dark:text-[#D7D1C6] mt-2 max-w-2xl leading-relaxed font-normal">
          Submit research essays, story proposals, press releases, or general inquiries to our editorial team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
        {/* Form Column */}
        <div className="lg:col-span-7">
          {isSubmitted ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] text-center shadow-md space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-2xl bg-[#C85A32]/15 text-[#C85A32] mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1C1917] dark:text-[#F7F4EE]">
                Message Received
              </h3>
              <p className="text-sm text-[#44403C] dark:text-[#D7D1C6] max-w-md mx-auto leading-relaxed font-normal">
                Thank you for contacting STORIVA. Your submission reference code is{' '}
                <strong className="text-[#C85A32] font-mono font-bold">{ticketId}</strong>. An editor will review your inquiry within 48 business hours.
              </p>
              <div className="pt-6">
                <button
                  onClick={handleReset}
                  className="px-6 py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#C85A32] dark:bg-[#C85A32] dark:hover:bg-[#B34722] text-white text-sm font-bold transition-colors cursor-pointer shadow-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] shadow-xs space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2] dark:bg-[#151311] text-sm text-[#1C1917] dark:text-[#F7F4EE] placeholder-[#78716C] dark:placeholder-[#A39C90] focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-[#E8E2D5] dark:border-[#3A342E] focus:border-[#C85A32]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2] dark:bg-[#151311] text-sm text-[#1C1917] dark:text-[#F7F4EE] placeholder-[#78716C] dark:placeholder-[#A39C90] focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-[#E8E2D5] dark:border-[#3A342E] focus:border-[#C85A32]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-department"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE] mb-2"
                  >
                    Department
                  </label>
                  <select
                    id="contact-department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-[#FAF7F2] dark:bg-[#151311] text-sm text-[#1C1917] dark:text-[#F7F4EE] focus:outline-none focus:border-[#C85A32] cursor-pointer"
                  >
                    <option value="pitch">Editorial Pitch</option>
                    <option value="press">Press & Media</option>
                    <option value="correction">Corrections & Feedback</option>
                    <option value="partnership">Syndication & Licensing</option>
                    <option value="general">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE] mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief summary of topic"
                    className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2] dark:bg-[#151311] text-sm text-[#1C1917] dark:text-[#F7F4EE] placeholder-[#78716C] dark:placeholder-[#A39C90] focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-red-500'
                        : 'border-[#E8E2D5] dark:border-[#3A342E] focus:border-[#C85A32]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 mt-1">{errors.subject}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE] mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the core hypothesis, key findings, or relevant context..."
                  className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2] dark:bg-[#151311] text-sm text-[#1C1917] dark:text-[#F7F4EE] placeholder-[#78716C] dark:placeholder-[#A39C90] focus:outline-none transition-colors ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-[#E8E2D5] dark:border-[#3A342E] focus:border-[#C85A32]'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#1C1917] hover:bg-[#C85A32] dark:bg-[#C85A32] dark:hover:bg-[#B34722] text-white font-bold text-sm transition-all flex items-center justify-center space-x-2 shadow-xs hover:shadow-md disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] shadow-xs space-y-4">
            <h3 className="font-display font-black text-lg text-[#1C1917] dark:text-[#F7F4EE] flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-[#C85A32] dark:text-[#E27453]" /> Submission Guidelines
            </h3>
            <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              We look for unique insider perspectives with empirical depth. Strong submissions include:
            </p>
            <ul className="space-y-2 text-xs text-[#44403C] dark:text-[#D7D1C6] list-disc pl-5 font-normal">
              <li>A non-consensus thesis backed by empirical evidence or technical domain experience.</li>
              <li>Clear explanation of why this technology matters today.</li>
              <li>Estimated word count (typically 1,200 to 2,500 words).</li>
              <li>Brief author bio and relevant research credentials.</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] shadow-xs space-y-4">
            <h3 className="font-display font-black text-lg text-[#1C1917] dark:text-[#F7F4EE] flex items-center">
              <Mail className="w-4 h-4 mr-2 text-[#C85A32] dark:text-[#E27453]" /> Editorial Bureaus
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#E8E2D5] dark:border-[#3A342E]">
                <span className="text-[#78716C] dark:text-[#D7D1C6]">San Francisco:</span>
                <span className="font-mono font-bold text-[#1C1917] dark:text-white">sf@storiva.example</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E8E2D5] dark:border-[#3A342E]">
                <span className="text-[#78716C] dark:text-[#D7D1C6]">Zurich:</span>
                <span className="font-mono font-bold text-[#1C1917] dark:text-white">zurich@storiva.example</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#78716C] dark:text-[#D7D1C6]">Tokyo:</span>
                <span className="font-mono font-bold text-[#1C1917] dark:text-white">tokyo@storiva.example</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
