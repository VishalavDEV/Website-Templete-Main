import { PROFILE_DATA } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 py-12 text-slate-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60">
          
          {/* Brand & Bio */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-sm">
              AM
            </div>
            <div>
              <span className="font-heading font-bold text-base text-slate-900 block">
                Arjun Mehta
              </span>
              <span className="text-xs text-slate-500">
                AI Engineer & Full-Stack Developer • Bengaluru, India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#ailab" className="hover:text-blue-600 transition-colors">AI Lab</a>
            <a href="#journey" className="hover:text-blue-600 transition-colors">Journey</a>
            <a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a>
            <a href="#currently" className="hover:text-blue-600 transition-colors">Currently</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Socials & Top Button */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-2xs"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors shadow-2xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              aria-label="Email"
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:bg-slate-100 transition-colors shadow-2xs"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors shadow-2xs cursor-pointer ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Arjun Mehta. All rights reserved.</p>
          <p>Designed with clean aesthetic precision.</p>
        </div>

      </div>
    </footer>
  );
}

