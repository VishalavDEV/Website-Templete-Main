import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Send } from 'lucide-react';
import { STUDIO_INFO } from '../../data/studio';
import { SERVICES } from '../../data/services';
import { Toast } from '../ui/Toast';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [error, setError] = useState('');
  const [toast, setToast] = useState<{ show: boolean; title: string; message: string }>({
    show: false,
    title: '',
    message: ''
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!emailRegex.test(newsletterEmail.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setToast({
      show: true,
      title: 'Subscribed Successfully!',
      message: 'Thank you for subscribing to AURELIA Journal. You will receive our monthly editorial insights.'
    });
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#1A1918] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Accent Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 font-display text-[220px] font-extrabold select-none leading-none -translate-x-12 translate-y-12">
        AURELIA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-[#D96B43] flex items-center justify-center text-white font-display font-bold text-base">
                A
              </div>
              <span className="font-display font-extrabold text-2xl tracking-wider text-white">
                AURELIA
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              An independent creative studio crafting digital experiences, identities, and products for ambitious brands worldwide.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Studio Headquarters</p>
              <p className="text-xs text-gray-300">{STUDIO_INFO.address}</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D96B43]">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#D96B43] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D96B43] transition-colors">About Studio</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D96B43] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#D96B43] transition-colors">Featured Work</Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#D96B43] transition-colors">Insights</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D96B43] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D96B43]">Capabilities</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-[#D96B43] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D96B43]">AURELIA Journal</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to receive our monthly editorial insights on brand strategy, digital design, and emerging web tech.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/15 rounded-full py-3 pl-4 pr-12 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D96B43] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 w-8 h-8 rounded-full bg-[#D96B43] hover:bg-[#C25832] text-white flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {error && <p className="text-[11px] text-red-400 font-medium pl-2">{error}</p>}
            </form>

            <div className="pt-4">
              <h5 className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-2">Connect</h5>
              <div className="flex flex-wrap gap-3">
                {STUDIO_INFO.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gray-400 hover:text-[#D96B43] flex items-center transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} AURELIA Creative Studio ApS. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>

      <Toast
        isVisible={toast.show}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </footer>
  );
};
