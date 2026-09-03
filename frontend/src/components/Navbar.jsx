import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Camera,
  ShoppingBag,
  Sliders,
  Sparkles,
  Layers
} from 'lucide-react';

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

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const demoItems = [
    { title: 'Portfolio Grid', desc: 'Modern 4-column filterable masonry layout', href: '#portfolio' },
    { title: 'Story & Bio', desc: 'Visual creator narrative, stats & gear locker', href: '#story' },
    { title: 'Services & Rates', desc: 'Photo sessions & event packages with pricing', href: '#services' },
    { title: 'Full-Width Strip', desc: 'Panoramic landscape visual gallery', href: '#strip' },
  ];

  const sliderItems = [
    { title: 'Hero Carousel', desc: 'Full-screen cinematic transition slider', href: '#slider' },
    { title: 'Interactive Lightbox', desc: 'Zoomable gallery with EXIF details', href: '#portfolio' },
    { title: 'Client Reviews', desc: 'Testimonials & milestone feedback', href: '#reviews' },
    { title: 'Contact Studio', desc: 'Direct inquiry & instant consultation', href: '#contact' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/95 backdrop-blur-md shadow-2xl py-3.5 border-b border-white/5'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
            id="brand-logo"
          >
            <span className="w-8 h-8 rounded-full bg-[#e74c3c] flex items-center justify-center text-white shadow-md shadow-[#e74c3c]/30 group-hover:scale-105 transition-transform duration-200">
              <Camera className="w-4 h-4 text-white stroke-[2.5]" />
            </span>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-gray-200 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
              Photo<span className="text-[#e74c3c]">M4</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <a
              href="#hero"
              className="px-3.5 py-2 text-sm font-medium text-white hover:text-[#e74c3c] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-[#e74c3c] after:scale-x-100 after:transition-transform"
            >
              Home
            </a>

            {/* Live Demo Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('demo')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-200 hover:text-[#e74c3c] transition-colors cursor-pointer"
                id="live-demo-dropdown-btn"
              >
                <span>Live Demo</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-gray-400" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'demo' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 mt-1 w-64 rounded-xl bg-[#181818] border border-white/10 shadow-2xl p-2 z-50 backdrop-blur-xl"
                  >
                    {demoItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all text-left group/item cursor-pointer"
                      >
                        <div className="text-sm font-semibold text-white group-hover/item:text-[#e74c3c] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5 font-normal line-clamp-1">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Live Demo Slider Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('slider')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-200 hover:text-[#e74c3c] transition-colors cursor-pointer"
                id="slider-dropdown-btn"
              >
                <span>Live Demo Slider</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-gray-400" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'slider' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 mt-1 w-64 rounded-xl bg-[#181818] border border-white/10 shadow-2xl p-2 z-50 backdrop-blur-xl"
                  >
                    {sliderItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all text-left group/item cursor-pointer"
                      >
                        <div className="text-sm font-semibold text-white group-hover/item:text-[#e74c3c] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5 font-normal line-clamp-1">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#services"
              className="px-3.5 py-2 text-sm font-medium text-gray-200 hover:text-[#e74c3c] transition-colors"
            >
              Services
            </a>

            <a
              href="#contact"
              className="px-3.5 py-2 text-sm font-medium text-gray-200 hover:text-[#e74c3c] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right Section: Social Icons + Buy Now Button */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 border-r border-white/15 pr-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e74c3c] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e74c3c] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <TwitterXIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e74c3c] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e74c3c] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <PinterestIcon />
              </a>
            </div>

            {/* Buy Now CTA Button */}
            <button
              onClick={() => onOpenBooking()}
              id="nav-buy-now-btn"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#e74c3c] hover:bg-[#d63031] transition-all duration-200 shadow-lg shadow-[#e74c3c]/25 hover:shadow-[#e74c3c]/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Buy Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#e74c3c] cursor-pointer"
            >
              Buy Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#141414] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 pt-2">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#e74c3c] bg-white/5 rounded-lg"
              >
                Home
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-gray-200 hover:text-white rounded-lg hover:bg-white/5"
              >
                Live Demo Portfolio
              </a>
              <a
                href="#slider"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-gray-200 hover:text-white rounded-lg hover:bg-white/5"
              >
                Live Demo Slider
              </a>
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-gray-200 hover:text-white rounded-lg hover:bg-white/5"
              >
                My Story & Bio
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-gray-200 hover:text-white rounded-lg hover:bg-white/5"
              >
                Services & Rates
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-gray-200 hover:text-white rounded-lg hover:bg-white/5"
              >
                Contact
              </a>

              {/* Social Links on Mobile */}
              <div className="flex items-center space-x-3 pt-4 border-t border-white/10 justify-center">
                <a href="https://facebook.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#e74c3c] transition-colors">
                  <FacebookIcon />
                </a>
                <a href="https://twitter.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#e74c3c] transition-colors">
                  <TwitterXIcon />
                </a>
                <a href="https://instagram.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#e74c3c] transition-colors">
                  <InstagramIcon />
                </a>
                <a href="https://pinterest.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#e74c3c] transition-colors">
                  <PinterestIcon />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
