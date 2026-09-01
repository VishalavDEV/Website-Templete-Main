import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Inline SVGs for brand icons to bypass lucide-react export differences
const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-sky-100/40 border-t border-sky-100/50 pt-16 pb-8 z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 font-outfit">
        
        {/* Column 1: Info and Brand */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-sky-200">
              <GraduationCap size={22} />
            </div>
            <span className="font-bold text-lg text-education-navy tracking-tight">
              Motion<span className="text-sky-500 font-medium">Edu</span>
            </span>
          </Link>
          <p className="text-sm text-education-navy/70 max-w-sm leading-relaxed">
            Experience Learning in Motion. A futuristic digital campus where knowledge is active, engaging, and constantly transforming to build your future.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white text-sky-500 border border-sky-100 shadow-sm hover:scale-105 active:scale-95 transition-all">
              <TwitterIcon size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white text-sky-600 border border-sky-100 shadow-sm hover:scale-105 active:scale-95 transition-all">
              <LinkedinIcon size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white text-education-navy border border-sky-100 shadow-sm hover:scale-105 active:scale-95 transition-all">
              <GithubIcon size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Platform Links */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-education-navy tracking-wide uppercase">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses" className="text-education-navy/70 hover:text-sky-500 transition-colors">All Courses</Link></li>
            <li><Link to="/programs" className="text-education-navy/70 hover:text-sky-500 transition-colors">Programs</Link></li>
            <li><Link to="/instructors" className="text-education-navy/70 hover:text-sky-500 transition-colors">Mentors</Link></li>
            <li><Link to="/resources" className="text-education-navy/70 hover:text-sky-500 transition-colors">Resource Library</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-education-navy tracking-wide uppercase">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-education-navy/70 hover:text-sky-500 transition-colors">Help Center</a></li>
            <li><Link to="/contact" className="text-education-navy/70 hover:text-sky-500 transition-colors">Contact Us</Link></li>
            <li><a href="#" className="text-education-navy/70 hover:text-sky-500 transition-colors">FAQs</a></li>
            <li><Link to="/dashboard" className="text-education-navy/70 hover:text-sky-500 transition-colors">Student Log</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-education-navy tracking-wide uppercase">Stay Updated</h4>
          <p className="text-xs text-education-navy/70 leading-relaxed">
            Subscribe to receive insights, challenge reminders, and course updates.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-sky-100 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-300 pr-10"
            />
            <button
              type="submit"
              className="absolute right-1.5 p-1.5 rounded-lg bg-gradient-to-tr from-sky-400 to-cyan-400 text-white hover:scale-105 active:scale-95 transition-all"
            >
              {subscribed ? <CheckCircle2 size={12} /> : <ArrowRight size={12} />}
            </button>
          </form>
          {subscribed && (
            <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-green-600 font-medium">
              Subscribed successfully!
            </motion.p>
          )}
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-sky-100/40 flex flex-col sm:flex-row items-center justify-between text-xs text-education-navy/60 font-outfit gap-4">
        <p>© {new Date().getFullYear()} MotionEdu. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-sky-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-sky-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
