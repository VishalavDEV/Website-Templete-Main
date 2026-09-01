import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/researchData';

export default function Footer({ onOpenCV }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Profile', href: '#profile' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Teaching', href: '#teaching' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E6E6E0] pt-16 pb-12 text-[#1E1B4B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-[#E6E6E0]">
          
          {/* LEFT BRAND */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border border-[#1E1B4B] flex items-center justify-center font-serif text-sm font-semibold">
                ME
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight">
                  Dr. Mira Ellison
                </h3>
                <span className="font-mono-tag text-[10px] text-[#6B7280] tracking-widest uppercase">
                  Behavioral Researcher
                </span>
              </div>
            </div>
            <p className="text-xs text-[#6B7280] max-w-sm font-light">
              "{profileData.tagline}"
            </p>
            <p className="font-mono-tag text-[11px] text-[#9CA3AF]">
              Amsterdam, Netherlands &bull; 11+ Years Behavioral Inquiry
            </p>
          </div>

          {/* CENTER LINKS */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-mono-tag text-[10px] text-[#9CA3AF] uppercase block mb-2">
              NAVIGATION INDEX
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-[#6B7280] hover:text-[#1E1B4B] transition-colors py-1"
                >
                  &bull; {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 border border-[#E6E6E0] px-4 py-2 text-xs font-mono-tag text-[#1E1B4B] hover:bg-[#FAFAFA] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div>
              <button
                onClick={onOpenCV}
                className="text-xs font-semibold text-[#4A6B5D] hover:underline"
              >
                View Academic CV Document &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM DISCLAIMER & COPYRIGHT BANNER */}
        <div className="pt-8 space-y-4">
          <div className="p-4 bg-[#FAFAFA] border border-[#E6E6E0] rounded-sm text-center">
            <p className="font-mono-tag text-[11px] text-[#6B7280] leading-relaxed max-w-4xl mx-auto">
              This is a fictional Resume/CV template demonstration. All names, institutions, organizations, research projects, publications, awards, events, statistics, and visuals are fictional or AI-generated. This site does not provide medical advice, clinical diagnosis, or mental health services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#9CA3AF] font-mono-tag pt-2">
            <span>&copy; {new Date().getFullYear()} Dr. Mira Ellison. Fictional Demonstration Profile.</span>
            <span>Designed for Academic & Research Portfolios</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
