import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { CursorType } from '../../types';

interface DirectContactProps {
  setCursorType: (type: CursorType, text?: string) => void;
}

export const DirectContact: React.FC<DirectContactProps> = ({ setCursorType }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@studio.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+1 000 000 0000');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const socials = [
    { name: 'Instagram', handle: '@studio.design', href: 'https://instagram.com' },
    { name: 'LinkedIn', handle: 'Studio Global', href: 'https://linkedin.com' },
    { name: 'Behance', handle: 'behance.net/studio', href: 'https://behance.net' },
  ];

  return (
    <section className="py-24 bg-[#080808] border-t border-[#ffffff15]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#888888]">
                DIRECT COMMUNICATION
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.95]">
              PREFER TO TALK <br />
              <span className="text-[#0066FF]">DIRECTLY?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-md font-normal">
              If you prefer traditional channels, skip the project flow and reach out directly to our principal partners.
            </p>
          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-[#ffffff15] space-y-4 relative group hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#888888]">
                  EMAIL INQUIRIES
                </span>
                <Mail className="w-4 h-4 text-[#0066FF]" />
              </div>

              <div className="space-y-1">
                <a
                  href="mailto:hello@studio.com"
                  onMouseEnter={() => setCursorType('pointer')}
                  onMouseLeave={() => setCursorType('default')}
                  className="font-display text-xl sm:text-2xl font-bold text-[#FAF9F6] hover:text-[#0066FF] transition-colors block cursor-pointer"
                >
                  hello@studio.com
                </a>
                <p className="text-xs text-[#888888] font-mono">General briefs, press, partnerships</p>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#888888] hover:text-white transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied to clipboard' : 'Copy address'}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-[#ffffff15] space-y-4 relative group hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#888888]">
                  STUDIO DESK
                </span>
                <Phone className="w-4 h-4 text-[#0066FF]" />
              </div>

              <div className="space-y-1">
                <a
                  href="tel:+10000000000"
                  onMouseEnter={() => setCursorType('pointer')}
                  onMouseLeave={() => setCursorType('default')}
                  className="font-display text-xl sm:text-2xl font-bold text-[#FAF9F6] hover:text-[#0066FF] transition-colors block cursor-pointer"
                >
                  +1 000 000 0000
                </a>
                <p className="text-xs text-[#888888] font-mono">Mon–Fri &bull; 09:00–18:00 GMT</p>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#888888] hover:text-white transition-colors cursor-pointer"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied number' : 'Copy number'}</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-[#ffffff15] space-y-4 relative group hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#888888]">
                  PHYSICAL & VIRTUAL
                </span>
                <MapPin className="w-4 h-4 text-[#0066FF]" />
              </div>

              <div className="space-y-1">
                <h4 className="font-display text-xl font-bold text-[#FAF9F6]">
                  Chennai / London / Worldwide
                </h4>
                <p className="text-xs text-[#888888] font-mono">
                  Distributed collective operating across 3 primary time zones.
                </p>
              </div>
            </div>

            {/* Social Network Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-[#ffffff15] space-y-4 relative group hover:border-white/30 transition-all duration-300">
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block">
                EDITORIAL CHANNELS
              </span>

              <div className="flex flex-col space-y-2 font-mono text-xs">
                {socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setCursorType('project', 'OPEN ↗')}
                    onMouseLeave={() => setCursorType('default')}
                    className="flex items-center justify-between py-1 text-[#FAF9F6] hover:text-[#0066FF] border-b border-white/5 last:border-0 transition-colors cursor-pointer"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
