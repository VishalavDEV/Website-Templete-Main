import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand & Description */}
        <div className="flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-md">
              A
            </div>
            <span className="font-extrabold text-xl tracking-tight text-primaryText">
              Aura<span className="text-primaryAccent">Digital</span>
            </span>
          </Link>
          <p className="text-secondaryText text-sm leading-relaxed max-w-xs">
            Build powerful digital products and experiences that help modern businesses grow, connect, and stand out in a digital-first world.
          </p>
          <div className="flex items-center gap-4 text-secondaryText">
            <a href="#" className="hover:text-primaryAccent transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="hover:text-primaryAccent transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="#" className="hover:text-primaryAccent transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="hover:text-primaryAccent transition-colors" aria-label="Dribbble">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8.16 9c-1.39-.33-3.64-.6-5.99-.44-.22-.52-.45-1.05-.7-1.58 2.32-.87 4.29-2.12 5.09-2.91.95 1.05 1.54 2.42 1.6 3.93zm-2.48-5.32c-.67.64-2.38 1.73-4.52 2.53-.87-1.58-1.85-3.07-2.83-4.43 1.48-.51 3.08-.63 4.54-.15.93.38 1.83.94 2.81 2.05zm-9.35-1.3c1 .9 2 2.65 2.84 4.2C7.3 9.77 4.14 10 2.56 10c.16-1.92.99-3.64 2.27-4.88.54-.42 1.08-.8 1.5-1.44zm-1.8 7.42c1.78-.02 5.34-.33 9.24-1.63.2.42.4.84.58 1.27-3.9 1.15-7.53 3.65-8.77 5.76C3.04 16.48 2.43 14.32 2.53 12.12zM12 21.5c-1.82 0-3.52-.52-5-1.4 1-.22 4.67-1.2 8.78-5.59 1.1 2.37 1.84 4.58 2.1 5.6C16.32 21.03 14.24 21.5 12 21.5zm6-2.58c-.22-.9-.94-2.94-2.02-5.18 2.15-.12 4.4.2 5.53.52-.35 1.78-1.58 3.52-3.51 4.66z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-primaryText text-sm uppercase tracking-wider mb-5">Company</h4>
          <ul className="flex flex-col gap-3 text-sm text-secondaryText">
            <li><Link to="/" className="hover:text-primaryText transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primaryText transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primaryText transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-primaryText transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primaryText transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-primaryText text-sm uppercase tracking-wider mb-5">Services</h4>
          <ul className="flex flex-col gap-3 text-sm text-secondaryText">
            <li><Link to="/services" className="hover:text-primaryText transition-colors">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-primaryText transition-colors">Mobile App Dev</Link></li>
            <li><Link to="/services" className="hover:text-primaryText transition-colors">UI/UX Design</Link></li>
            <li><Link to="/services" className="hover:text-primaryText transition-colors">Cloud Solutions</Link></li>
            <li><Link to="/services" className="hover:text-primaryText transition-colors">Digital Strategy</Link></li>
            <li><Link to="/services" className="hover:text-primaryText transition-colors">Automation</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-sm text-secondaryText">
          <h4 className="font-bold text-primaryText text-sm uppercase tracking-wider mb-1">Get in Touch</h4>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-primaryAccent shrink-0 mt-0.5" />
            <span>100 Innovation Way, Suite 400<br />Silicon Valley, CA 94025</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-primaryAccent shrink-0" />
            <a href="mailto:hello@auradigital.com" className="hover:text-primaryText transition-colors">hello@auradigital.com</a>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-primaryAccent shrink-0" />
            <a href="tel:+15551234567" className="hover:text-primaryText transition-colors">+1 (555) 123-4567</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondaryText">
        <span>© {new Date().getFullYear()} AuraDigital Inc. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primaryText transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primaryText transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
