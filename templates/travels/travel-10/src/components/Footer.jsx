import React, { useState } from 'react';
import { Compass, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full max-w-6xl mx-auto py-16 px-6 md:px-12 bg-white text-left">
      {/* Top Section: Newsletter and Directory */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-100">
        {/* Newsletter Signup (Span 5) */}
        <div className="col-span-1 md:col-span-5 flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-accent-gold" />
            <span className="font-serif text-lg font-bold tracking-wide text-primary-navy">
              Terra<span className="text-accent-gold">Bound</span>
            </span>
          </div>
          <p className="text-xs md:text-sm text-muted-gray font-light max-w-sm leading-relaxed">
            Subscribe to our newsletter to receive secret routes, exclusive destination deals, and monthly outdoor wisdom.
          </p>

          <form onSubmit={handleSubmit} className="flex items-center w-full max-w-sm relative pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={submitted ? "Subscribed successfully!" : "Enter your email"}
              disabled={submitted}
              className={`w-full text-xs px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                submitted 
                  ? 'bg-green-50/50 border-green-200 text-green-700 placeholder-green-600' 
                  : 'bg-gray-50/50 border-gray-200 focus:border-accent-gold focus:bg-white text-primary-navy placeholder-muted-gray/70'
              }`}
              required
            />
            
            {!submitted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="absolute right-2 top-[14px] bg-primary-navy hover:bg-accent-gold text-white p-1.5 rounded-md transition-colors duration-300 cursor-pointer"
                aria-label="Submit email"
              >
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </form>
        </div>

        {/* Directory Links (Span 7) */}
        <div className="col-span-1 md:col-span-7 grid grid-cols-3 gap-6">
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] tracking-widest text-primary-navy font-bold uppercase">
              Explore
            </span>
            <ul className="flex flex-col space-y-2">
              {['Destinations', 'Trip Planner', 'Adventures', 'Experiences'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-xs text-muted-gray hover:text-accent-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="text-[10px] tracking-widest text-primary-navy font-bold uppercase">
              Company
            </span>
            <ul className="flex flex-col space-y-2">
              {['About Us', 'Careers', 'Guides Team', 'Blog'].map((link) => (
                <li key={link}>
                  <a href={`#${link.replace(' ', '').toLowerCase()}`} className="text-xs text-muted-gray hover:text-accent-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="text-[10px] tracking-widest text-primary-navy font-bold uppercase">
              Legal
            </span>
            <ul className="flex flex-col space-y-2">
              {['Privacy Policy', 'Terms of Use', 'Travel Insurance', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.replace(' ', '').toLowerCase()}`} className="text-xs text-muted-gray hover:text-accent-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[11px] text-muted-gray font-light">
        <span>© {new Date().getFullYear()} TerraBound Inc. All rights reserved.</span>
        <span className="mt-2 md:mt-0 flex space-x-4">
          <a href="#privacy" className="hover:text-accent-gold transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-accent-gold transition-colors">Terms</a>
          <a href="#cookies" className="hover:text-accent-gold transition-colors">Cookies</a>
        </span>
      </div>
    </footer>
  );
}
