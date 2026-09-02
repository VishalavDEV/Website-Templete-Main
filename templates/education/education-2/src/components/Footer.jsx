import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Send, CheckCircle, Globe, Share2, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Glow Orbs background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-cyan flex items-center justify-center text-white shadow-lg shadow-primary-600/30">
                <BookOpen className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Edu<span className="gradient-text">Prime</span>
                </span>
                <span className="block text-[9px] uppercase tracking-widest font-bold text-slate-400">
                  Global Academic Institute
                </span>
              </div>
            </Link>

            <p className="text-xs md:text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering the world's next generation of engineers, leaders, designers, and data scientists with accredited online degrees, executive certifications, and industry masterclasses.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-primary-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors" title="Global Portal">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-primary-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors" title="Community Network">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-primary-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors" title="Discord Community">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-primary-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors" title="Research Publications">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Platform Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/courses" className="hover:text-sky-400 transition-colors">Explore Courses</Link></li>
              <li><Link to="/instructors" className="hover:text-sky-400 transition-colors">Faculty Directory</Link></li>
              <li><Link to="/events" className="hover:text-sky-400 transition-colors">Upcoming Events</Link></li>
              <li><Link to="/resources" className="hover:text-sky-400 transition-colors">Blog & Resources</Link></li>
              <li><Link to="/student-success" className="hover:text-sky-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Institutional / Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Institution</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">About EduPrime</Link></li>
              <li><Link to="/admissions" className="hover:text-sky-400 transition-colors">Admissions Process</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Campus Locations</Link></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Careers at EduPrime</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Partner Network</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Stay Informed</h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Subscribe to receive weekly course launches, research papers, and event invitations.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-xl text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-500 block">We respect your privacy. Unsubscribe anytime.</span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} EduPrime Global Academic Institute Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Preferences</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security & Accreditation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
