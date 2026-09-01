"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-nye-light text-nye-dark dark:bg-nye-dark dark:text-nye-light overflow-hidden border-t border-nye-dark/10 dark:border-nye-light/10">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12">
        
        {/* Top half */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Closing statement */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a
              href="#"
              className="text-3xl font-black tracking-tighter text-nye-dark dark:text-nye-light flex items-center gap-1 group w-max"
            >
              <span>INTENT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-nye-orange group-hover:translate-x-1 transition-transform"></span>
            </a>
            <div className="text-xs font-black tracking-widest text-nye-orange uppercase">
              MADE WITH INTENT.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <div className="text-[10px] font-bold tracking-widest text-nye-dark/40 dark:text-nye-light/40 uppercase mb-1">
              Navigation
            </div>
            <a href="#work" className="text-xs font-bold uppercase tracking-wider hover:text-nye-orange transition-colors">
              Work
            </a>
            <a href="#services" className="text-xs font-bold uppercase tracking-wider hover:text-nye-orange transition-colors">
              Services
            </a>
            <a href="#about" className="text-xs font-bold uppercase tracking-wider hover:text-nye-orange transition-colors">
              About
            </a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-wider hover:text-nye-orange transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <div className="text-[10px] font-bold tracking-widest text-nye-dark/40 dark:text-nye-light/40 uppercase mb-1">
              Connect
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider hover:text-nye-orange transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider hover:text-nye-orange transition-colors"
            >
              Instagram
            </a>
            <a href="mailto:hello@intentagency.com" className="text-xs font-bold uppercase tracking-wider hover:text-nye-orange transition-colors">
              hello@intentagency.com
            </a>
            <span className="text-xs text-nye-dark/60 dark:text-nye-light/60 font-medium">
              Munich & Milan
            </span>
          </div>

        </div>

        {/* Bottom half: Copyright & Credits */}
        <div className="border-t border-nye-dark/10 dark:border-nye-light/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest text-nye-dark/50 dark:text-nye-light/50 uppercase">
          <div>
            &copy; {currentYear} INTENT. ALL RIGHTS RESERVED.
          </div>
          <div>
            NYE20-INSPIRED / PREMIUM AGENCY LANDING
          </div>
        </div>

      </div>
    </footer>
  );
}
