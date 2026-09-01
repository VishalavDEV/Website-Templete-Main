import React, { useState } from 'react';
import { storageService } from '../services/storageService';
import { 
  HeartPulse, PhoneCall, MapPin, Mail, ShieldCheck, 
  Send, CheckCircle2, ArrowRight, Heart, Calendar 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenEmergency: () => void;
  onOpenPrivacyTerms: (tab: 'privacy' | 'terms') => void;
  onOpenMyAppointments: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenEmergency,
  onOpenPrivacyTerms,
  onOpenMyAppointments,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [newsletterError, setNewsletterError] = useState<string>('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    storageService.subscribeNewsletter(newsletterEmail.trim());
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Banner: Emergency & Rapid Scheduling strip */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm sm:text-base">
                Immediate Clinical Assistance & Same-Day Admissions
              </h4>
              <p className="text-xs text-slate-400">
                Board-certified triage physicians are available 24 hours a day, 365 days a year.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              id="footer-emergency-btn"
              onClick={onOpenEmergency}
              className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl shadow transition flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>(800) 555-0199</span>
            </button>
            <button
              id="footer-book-btn"
              onClick={() => onNavigate('appointment')}
              className="px-4 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl shadow transition flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  MEDICIO<span className="text-teal-400 font-black">+</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-bold text-slate-400 block">
                  Advanced Medical Center
                </span>
              </div>
            </button>

            <p className="text-slate-400 leading-relaxed text-xs pr-4">
              Medicio is a premier academic medical pavilion delivering specialized clinical care, molecular diagnostics, and compassionate patient rehabilitation across New England.
            </p>

            <div className="space-y-1 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>450 Medical Arts Pavilion, Boston, MA 02115</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>care@mediciohealth.org</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Hospital' },
                { id: 'services', label: 'Clinical Services' },
                { id: 'departments', label: 'Departments' },
                { id: 'doctors', label: 'Physician Directory' },
                { id: 'appointment', label: 'Book Appointment' },
                { id: 'gallery', label: 'Campus Gallery' },
                { id: 'testimonials', label: 'Patient Stories' },
                { id: 'faq', label: 'FAQ & Support' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-${link.id}`}
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-teal-300 transition text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Departments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">
              Clinical Specialties
            </h4>
            <ul className="space-y-2">
              {[
                'Cardiovascular & Thoracic Surgery',
                'Neurology & Spine Institute',
                'Orthopedic & Joint Center',
                'Pediatric Care & NICU',
                'Diagnostic 3.0T MRI & Imaging',
                'Dermatology & Skin Health',
                'Comprehensive Preventive Medicine',
                'Physical Therapy & Sports Rehab',
              ].map((dept, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate('departments')}
                    className="hover:text-teal-300 transition text-left cursor-pointer"
                  >
                    {dept}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Health Bulletins */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">
              Health Pulse Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe for monthly preventive health advisories, doctor research insights, and wellness tips.
            </p>

            {subscribed ? (
              <div className="bg-teal-950/80 border border-teal-800 p-3 rounded-xl flex items-center gap-2 text-teal-300">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="text-[11px] font-semibold">Subscribed! Check your inbox for updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 focus-within:ring-2 focus-within:ring-teal-500">
                  <input
                    type="email"
                    id="newsletter-email-input"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address..."
                    className="w-full bg-transparent px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    id="newsletter-submit-btn"
                    className="px-3 py-1.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-lg transition cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {newsletterError && <p className="text-[11px] text-rose-400">{newsletterError}</p>}
              </form>
            )}

            <div className="pt-2">
              <button
                id="footer-patient-portal-btn"
                onClick={onOpenMyAppointments}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-teal-300 font-bold text-xs rounded-xl border border-slate-800 transition text-center cursor-pointer"
              >
                Access Patient Portal
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Accreditation Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Medicio Healthcare Medical Center. All rights reserved. JCAHO & HIPAA Compliant.
          </div>

          <div className="flex items-center gap-4">
            <button
              id="footer-privacy-btn"
              onClick={() => onOpenPrivacyTerms('privacy')}
              className="hover:text-slate-300 underline cursor-pointer"
            >
              Privacy Policy (HIPAA)
            </button>
            <span>•</span>
            <button
              id="footer-terms-btn"
              onClick={() => onOpenPrivacyTerms('terms')}
              className="hover:text-slate-300 underline cursor-pointer"
            >
              Terms of Medical Service
            </button>
            <span>•</span>
            <button
              onClick={onOpenEmergency}
              className="hover:text-rose-400 underline text-rose-500 font-bold cursor-pointer"
            >
              Emergency Protocols
            </button>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="text-[10px] text-slate-600 text-center leading-relaxed max-w-4xl mx-auto">
          Medical Disclaimer: Information provided on this web platform is for clinical scheduling, educational guidance, and patient intake coordination. It does not replace individualized medical advice, clinical diagnosis, or immediate emergency evaluation. In case of life-threatening emergencies, call 911 or visit the nearest emergency room immediately.
        </div>
      </div>
    </footer>
  );
};
