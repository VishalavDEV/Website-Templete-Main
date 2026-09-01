import React from 'react';
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send, 
  ArrowUp,
  ShieldCheck,
  Clock,
  GraduationCap
} from 'lucide-react';
import { UNIVERSITY_INFO } from '../data/universityData';

interface FooterProps {
  onOpenAdmissions: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAdmissions,
  onNavigateSection
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e1b2e] text-slate-400 text-xs border-t border-[#1c304d] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Newsletter Strip */}
      <div className="bg-[#132238] border-b border-[#1c304d] py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffb606] block mb-1">
              NEWSLETTER SUBSCRIPTION
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Subscribe To Our Newsletter For Latest Courses & Admissions
            </h3>
          </div>

          <div className="w-full md:w-auto flex items-center gap-2 max-w-md">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full sm:w-72 px-4 py-2.5 bg-[#0e1b2e] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ffb606]"
            />
            <button
              onClick={() => alert('Thank you for subscribing to Eikra bulletins!')}
              className="px-6 py-2.5 bg-[#ffb606] hover:bg-[#e5a405] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-md"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Eikra Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#ffb606] text-slate-950 flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 text-slate-950" />
              </div>
              <span className="font-black text-2xl tracking-wider text-white">
                EIKRA
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Eikra is an education & courses template dedicated to delivering world-class curriculum, accredited degrees, and flexible online learning.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ffb606] shrink-0 mt-0.5" />
                <span>{UNIVERSITY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffb606] shrink-0" />
                <span>{UNIVERSITY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ffb606] shrink-0" />
                <span>{UNIVERSITY_INFO.generalEmail}</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-[#ffb606] hover:text-slate-950 text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-[#ffb606] hover:text-slate-950 text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-[#ffb606] hover:text-slate-950 text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-[#ffb606] hover:text-slate-950 text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#ffb606] pl-2.5">
              Popular Courses
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('courses')} className="hover:text-[#ffb606] transition-colors">
                  Computer Science & Applied AI
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('courses')} className="hover:text-[#ffb606] transition-colors">
                  Biomedical Genetics & Pre-Med
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('courses')} className="hover:text-[#ffb606] transition-colors">
                  Global Business MBA & Fintech
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('courses')} className="hover:text-[#ffb606] transition-colors">
                  Modern UI/UX Product Design
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('courses')} className="hover:text-[#ffb606] transition-colors">
                  Cyber Security & Ethical Hacking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('courses')} className="hover:text-[#ffb606] transition-colors">
                  Environmental Policy & Climate
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#ffb606] pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('about-us')} className="hover:text-[#ffb606] transition-colors">
                  About Eikra Campus
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('teachers')} className="hover:text-[#ffb606] transition-colors">
                  Skilled Lecturers & Faculty
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('portfolio')} className="hover:text-[#ffb606] transition-colors">
                  Campus Life Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('events')} className="hover:text-[#ffb606] transition-colors">
                  Upcoming Events & Seminars
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('news')} className="hover:text-[#ffb606] transition-colors">
                  Latest Research Blog
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmissions} className="text-[#ffb606] font-black hover:underline uppercase tracking-wider">
                  APPLY NOW
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Accreditations & Back to Top */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#ffb606] pl-2.5">
              Accreditation & Trust
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2 bg-[#132238] p-3 border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#ffb606] shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-300">
                  Accredited by International Education & Global Academic Boards
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                All template imagery uses high-resolution, copyright-free photography from Unsplash licensed for open educational and commercial design use.
              </p>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#132238] hover:bg-[#ffb606] hover:text-slate-950 text-slate-200 rounded-none text-xs font-bold transition-all cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © 2026 EIKRA - Education & Courses Template. Designed with high-definition copyright-free imagery.
          </p>
          <div className="flex items-center gap-5">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Student Handbook</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
