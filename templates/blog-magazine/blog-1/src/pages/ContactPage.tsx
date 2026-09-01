import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50/50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Editorial Inquiries & Submissions
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base font-sans leading-relaxed">
            Whether you are pitching a long-form architectural essay or inquiring about syndication rights, our editorial desk reads every submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 text-center shadow-sm">
            <Mail className="w-8 h-8 text-amber-700 mx-auto mb-3" />
            <h3 className="font-serif font-bold text-neutral-900 mb-1">Editorial Desk</h3>
            <p className="text-xs text-neutral-500">editor@chronicle-co.org</p>
          </div>
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 text-center shadow-sm">
            <MapPin className="w-8 h-8 text-amber-700 mx-auto mb-3" />
            <h3 className="font-serif font-bold text-neutral-900 mb-1">Copenhagen Bureau</h3>
            <p className="text-xs text-neutral-500">Bredgade 42, 1260 København K</p>
          </div>
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 text-center shadow-sm">
            <MapPin className="w-8 h-8 text-amber-700 mx-auto mb-3" />
            <h3 className="font-serif font-bold text-neutral-900 mb-1">Tokyo Bureau</h3>
            <p className="text-xs text-neutral-500">Jingumae 4-chome, Shibuya-ku</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-8 sm:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-neutral-900">Message Dispatched</h3>
              <p className="text-neutral-600 text-sm max-w-md mx-auto">
                Thank you for reaching out. Our editorial committee will review your message and respond within 3 to 5 business days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-neutral-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-amber-800 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Arthur Pendelton"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="arthur@university.edu"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                  Subject / Pitch Title
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Essay Pitch: Brutalism in Alpine Refuges"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                  Message or Abstract
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide an overview of your pitch, word count estimate, and author bio..."
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-sm focus:outline-none focus:border-amber-700"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-neutral-900 hover:bg-amber-800 text-white font-medium px-8 py-3 rounded-xl text-sm transition-colors flex items-center gap-2 shadow-lg"
                >
                  <span>Submit to Editors</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
