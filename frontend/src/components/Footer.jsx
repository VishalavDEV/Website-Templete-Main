import React, { useState } from 'react';
import { Camera, ArrowUp, Send, Heart } from 'lucide-react';

// Custom Crisp SVG Icons for Social Media
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterXIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.053.224-.174.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.535.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

export default function Footer({ onShowToast }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    onShowToast({ message: 'Subscribed to our creative photography journal!', type: 'success' });
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0d0d0d] text-gray-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group cursor-pointer inline-block">
              <span className="w-8 h-8 rounded-full bg-[#e74c3c] flex items-center justify-center text-white shadow-md">
                <Camera className="w-4 h-4 text-white stroke-[2.5]" />
              </span>
              <span className="text-2xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Photo<span className="text-[#e74c3c]">M4</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed font-light">
              Fine-art portrait, documentary travel, and commercial photography based in Zurich, capturing moments worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e74c3c] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e74c3c] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <TwitterXIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e74c3c] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e74c3c] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#hero" className="hover:text-[#e74c3c] transition-colors">Home & Intro</a></li>
              <li><a href="#portfolio" className="hover:text-[#e74c3c] transition-colors">Portfolio Gallery</a></li>
              <li><a href="#slider" className="hover:text-[#e74c3c] transition-colors">Cinematic Reel</a></li>
              <li><a href="#story" className="hover:text-[#e74c3c] transition-colors">Artist Story</a></li>
              <li><a href="#services" className="hover:text-[#e74c3c] transition-colors">Packages & Rates</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#portfolio" className="hover:text-[#e74c3c] transition-colors">Nature & Alpine</a></li>
              <li><a href="#portfolio" className="hover:text-[#e74c3c] transition-colors">Bagpacker & Solo</a></li>
              <li><a href="#portfolio" className="hover:text-[#e74c3c] transition-colors">Cultural Heritage</a></li>
              <li><a href="#portfolio" className="hover:text-[#e74c3c] transition-colors">Floral Bouquets</a></li>
              <li><a href="#strip" className="hover:text-[#e74c3c] transition-colors">Panoramic Strip</a></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Creative Digest
            </h4>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Get monthly photography notes, gear insights & private booking discounts.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#e74c3c]"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#e74c3c] hover:bg-[#d63031] text-white flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <span>Subscribe</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar with Back-to-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} PhotoM4 Creative Studio. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#e74c3c]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
