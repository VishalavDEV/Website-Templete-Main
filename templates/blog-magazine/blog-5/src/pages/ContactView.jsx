import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Send, CheckCircle2, MapPin, Mail, MessageSquare, Phone, Lock, Clock, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useZMag } from '../context/ZMagContext';

export function ContactView() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Monograph Pitch', message: '' });
  const [status, setStatus] = useState('idle');
  const { showToast } = useZMag();
  const [zurichTime, setZurichTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setZurichTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill all required wire fields');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      showToast('Dispatch transmitted directly to the Zurich Editorial Desk');
    }, 700);
  };

  return (
    <div className="space-y-12 max-w-6xl mx-auto pb-24">
      {/* Top Back Navigation */}
      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6B7280] hover:text-[#0055FF] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Index</span>
        </Link>
      </div>

      {/* Header Deck */}
      <header className="rounded-3xl glass-card bg-white/95 p-8 sm:p-12 border border-white/90 shadow-[0_20px_50px_-10px_rgba(0,85,255,0.06)] space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0055FF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF4FF] text-[#0055FF] text-xs font-mono font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Editorial Wire // Zurich Bureau</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#111827] uppercase tracking-tight leading-[1.04]">
          Transmit Inquiries & Monograph Pitches
        </h1>

        <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl leading-relaxed">
          For essay proposals, peer-review submissions, print archive requests, or institutional inquiries, dispatch directly to our editors below.
        </p>
      </header>

      {/* 2-Column Form & Media Rich Desk Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-10 bg-white/95 border border-white/90 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#F3F4F6]">
            <div>
              <h2 className="font-heading font-black text-xl text-[#111827] uppercase tracking-tight">
                Editorial Dispatch Console
              </h2>
              <p className="text-xs font-mono text-[#6B7280]">
                Direct line to Managing Editors & Fellows
              </p>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#10B981] animate-ping" />
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#10B981] text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="font-heading font-black text-2xl text-[#111827]">
                Dispatch Transmitted
              </h3>
              <p className="text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Your correspondence has been routed to our managing editors. Response dispatch window is 48 hours.
              </p>
              <button
                onClick={() => {
                  setFormData({ name: '', email: '', subject: 'Monograph Pitch', message: '' });
                  setStatus('idle');
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#F3F4F6] hover:bg-[#0055FF] hover:text-white text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
              >
                Send Another Dispatch
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#111827] mb-1.5">
                  Full Name / Academic Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Prof. Julian Mercier"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:border-[#0055FF] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#111827] mb-1.5">
                  Institutional Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@institution.edu"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:border-[#0055FF] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#111827] mb-1.5">
                  Inquiry Topic / Category *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:border-[#0055FF] focus:bg-white transition-colors cursor-pointer font-sans"
                >
                  <option value="Monograph Pitch">Monograph Proposal (Bio-Spaces, Tech, Style)</option>
                  <option value="Peer Review">Peer Review Submissions</option>
                  <option value="Print Volume Subscription">Print Hardcover Volume Subscription</option>
                  <option value="Press Inquiries">Press & Academic Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#111827] mb-1.5">
                  Treatise Abstract / Message *
                </label>
                <textarea
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your inquiry, abstract, or research hypotheses..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:border-[#0055FF] focus:bg-white transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-[#0055FF] hover:bg-[#0040C7] text-white font-heading font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_10px_25px_-5px_rgba(0,85,255,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Transmit Dispatch Wire</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>

        {/* Right: Rich Desk Coordinates, Visual Atelier Photo & Information */}
        <div className="lg:col-span-5 space-y-6">
          {/* Atelier Photo Card */}
          <div className="glass-card rounded-3xl overflow-hidden bg-white/95 border border-white/90 shadow-xl group">
            <div className="aspect-[16/10] overflow-hidden bg-[#F3F4F6] relative">
              <img
                src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=800&auto=format&fit=crop"
                alt="Zurich Atelier"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[0.6875rem] font-mono font-bold text-[#0055FF] shadow-xs">
                Zurich Central Atelier
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-black text-lg text-[#111827]">
                  Central Desk Wire
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#0055FF] font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>CET: {zurichTime || '12:00:00'}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono text-[#4B5563]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                  <span>Limmatquai 44, 8001 Zürich, Switzerland</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0055FF] shrink-0" />
                  <span>desk@zmag-journal.ch</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0055FF] shrink-0" />
                  <span>+41 44 215 88 00 (Editorial Desk)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Encrypted Wire (PGP Key available upon request)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fast Track Submissions Box */}
          <div className="glass-card rounded-3xl p-6 bg-gradient-to-br from-[#EBF4FF] to-white border border-[#BFDBFE] space-y-3 shadow-md">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0055FF]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0055FF]">
                Fast Track CAD & Dataset Submissions
              </span>
            </div>
            <p className="text-xs text-[#374151] leading-relaxed">
              Submissions accompanied by primary CAD, IFC, or point-cloud photogrammetry datasets receive priority peer-review within 10 business days for the quarterly print volume.
            </p>
          </div>

          {/* Print Volume Subscription Box */}
          <div className="glass-card rounded-3xl p-6 bg-white/95 border border-white/90 space-y-3 shadow-md">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#FF5E3A]" />
              <span className="font-heading font-black text-sm uppercase text-[#111827]">
                Hardcover Print Edition
              </span>
            </div>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Subscriptions for Volume 48 (Fall 2026) are open for institutional libraries, design ateliers, and private subscribers worldwide.
            </p>
            <div className="pt-2">
              <span className="text-[0.6875rem] font-mono text-[#0055FF] font-bold block">
                Dispatched quarterly in custom archival boxes &bull; €120/year
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
