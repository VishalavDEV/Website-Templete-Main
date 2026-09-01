"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-near-black pt-16 md:pt-20 pb-8">
      <div className="px-6 md:px-10 lg:px-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12 md:pb-16 border-b border-cream/10">
          {/* Logo */}
          <div className="md:col-span-4">
            <a href="#" className="inline-block">
              <span
                className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-cream"
                style={{ fontFamily: "var(--font-display)" }}
              >
                AXIOM
              </span>
            </a>
            <div className="mt-4 text-xs text-warm-gray/50 leading-relaxed max-w-xs">
              Independent creative agency building brands, digital experiences,
              and ideas people remember.
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <div className="text-micro text-warm-gray/40 mb-4">NAVIGATE</div>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-warm-orange transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-2 md:col-start-10">
            <div className="text-micro text-warm-gray/40 mb-4">FOLLOW</div>
            <nav className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-warm-orange transition-colors duration-300 flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <ArrowUpRight size={10} className="opacity-40" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-micro text-warm-gray/40 mb-4">GET IN TOUCH</div>
            <a
              href="mailto:hello@axiom.studio"
              className="text-sm text-cream/60 hover:text-warm-orange transition-colors duration-300"
            >
              hello@axiom.studio
            </a>
            <div className="mt-3 text-xs text-warm-gray/30">
              Remote / Global
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <span className="text-xs text-warm-gray/30">
              © 2026 Axiom Studio. All rights reserved.
            </span>
            <span className="hidden md:block text-warm-gray/10">|</span>
            <span className="text-micro text-warm-orange/50">
              BUILT WITH CURIOSITY.
            </span>
          </div>
          <a
            href="#"
            className="text-xs text-warm-gray/30 hover:text-cream/60 transition-colors duration-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
