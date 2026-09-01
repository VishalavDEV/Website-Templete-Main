import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';


export default function Footer({ onOpenPathModal }) {
  const navLinks = [
    { name: 'Method', href: '#method' },
    { name: 'Programs', href: '#programs' },
    { name: 'Progress', href: '#progress' },
    { name: 'Journal', href: '#journal' },
    { name: 'Coaches', href: '#coaches' },
  ];

  return (
    <footer className="bg-[#171816] text-[#F3F0E8] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="text-3xl font-bold tracking-tighter font-heading flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#B56F4D]" />
              <span>AURELIS</span>
            </a>
            <p className="text-base font-light text-[#D8D4C8]/80 max-w-sm leading-relaxed">
              Build a stronger way of living. A personalized wellness platform combining movement, nutrition, recovery, and long-term habits.
            </p>

            <div className="space-y-2 text-xs font-mono text-[#D8D4C8]/70 pt-2">
              <div className="flex items-center gap-2 hover:text-[#B56F4D] transition-colors">
                <Mail className="w-4 h-4 text-[#B56F4D]" />
                <a href="mailto:hello@aurelis.studio">hello@aurelis.studio</a>
              </div>
              <div className="flex items-center gap-2 hover:text-[#B56F4D] transition-colors">
                <Phone className="w-4 h-4 text-[#B56F4D]" />
                <span>+00 000 000 000</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B56F4D] font-bold">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#D8D4C8]/80 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#B56F4D]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connections */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B56F4D] font-bold">
              Connect With Us
            </h4>
            <p className="text-xs text-[#D8D4C8]/70">
              Follow our daily movement & recovery insights across platforms.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#F3F0E8] hover:bg-[#B56F4D] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#F3F0E8] hover:bg-[#B56F4D] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#youtube"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#F3F0E8] hover:bg-[#B56F4D] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D8D4C8]/50 gap-4">
          <p>© {new Date().getFullYear()} AURELIS Wellness Studio. Fictional ready-made template.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
