import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Send, ArrowUp } from 'lucide-react';
import axios from 'axios';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      setStatus('subscribing');
      await axios.post('http://localhost:8080/api/newsletter', { email });
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 4000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-16 pb-8 overflow-hidden">
      {/* 1. Animated Flight Route Across Footer Top */}
      <div className="absolute top-0 left-0 right-0 h-10 pointer-events-none z-0">
        <svg className="w-full h-full text-slate-800" fill="none">
          <path 
            id="footer-flight-path"
            d="M -20,20 Q 300,5 600,20 T 1200,20 T 1800,20" 
            stroke="rgba(99, 102, 241, 0.2)" 
            strokeWidth="2" 
            strokeDasharray="6 6" 
          />
          {/* Airplane Flying Along SVG Curve */}
          <g>
            <path 
              d="M-5,-5 L5,0 L-5,5 L-2,0 Z" 
              fill="#818cf8"
            >
              <animateMotion
                dur="18s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#footer-flight-path" />
              </animateMotion>
            </path>
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* About column */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="w-8 h-8 text-indigo-400" />
            <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
              TRAVELVERSE
            </span>
          </Link>
          <p className="text-slate-400 text-sm max-w-sm">
            Step into a cinematic travel ecosystem. Explore, plan, and book your flights, hotels, and custom travel itineraries through a living travel universe.
          </p>
          <div className="flex space-x-3 pt-2">
            <a href="#" className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 transition-colors">
              {/* Twitter/X SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 transition-colors">
              {/* Instagram SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 transition-colors">
              {/* Github SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-4">Discover</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="/destinations" className="hover:text-indigo-400 transition-colors">Destinations</Link></li>
            <li><Link to="/tours" className="hover:text-indigo-400 transition-colors">Featured Tours</Link></li>
            <li><Link to="/hotels" className="hover:text-indigo-400 transition-colors">Premium Hotels</Link></li>
            <li><Link to="/experiences" className="hover:text-indigo-400 transition-colors">Experiences</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="/planner" className="hover:text-indigo-400 transition-colors">Trip Planner</Link></li>
            <li><Link to="/transportation" className="hover:text-indigo-400 transition-colors">Transportation</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        {/* Newsletter Quick Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-4">Newsletter</h4>
          <p className="text-xs text-slate-400">Get hot deals, customized trip recommendations, and travel stories.</p>
          <form onSubmit={handleSubscribe} className="relative flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500"
              required
            />
            <button 
              type="submit" 
              className="absolute right-2 bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-lg transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          {status === 'success' && <p className="text-teal-400 text-[10px] animate-bounce">Subscribed! Check your inbox soon.</p>}
          {status === 'error' && <p className="text-rose-400 text-[10px]">Subscription failed. Try again.</p>}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} TRAVELVERSE. All Rights Reserved. Built with React & Spring Boot.</span>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <button onClick={scrollToTop} className="flex items-center space-x-1 hover:text-indigo-400 transition-colors">
            <span>Scroll Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
