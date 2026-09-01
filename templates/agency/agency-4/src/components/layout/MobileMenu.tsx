import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../../data/studio';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const location = useLocation();

  const handleLinkClick = (href: string) => {
    onClose();
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80]"
          />

          {/* Slide-out Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#1A1918] text-white z-[90] p-8 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#D96B43] flex items-center justify-center font-bold text-white text-xs">
                  A
                </div>
                <span className="font-display font-bold text-xl tracking-wider text-white">
                  AURELIA
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-8 flex flex-col space-y-4">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href || (link.href.startsWith('/#') && location.hash === link.href.replace('/', ''));
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`text-3xl font-display font-bold tracking-tight block transition-colors py-2 flex items-center justify-between ${
                        isActive ? 'text-[#D96B43]' : 'text-white hover:text-[#D96B43]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Studio Info & Contact CTA */}
            <div className="pt-8 border-t border-white/10 space-y-6">
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#D96B43]" />
                  <span>{STUDIO_INFO.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#D96B43]" />
                  <span>{STUDIO_INFO.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-[#D96B43]" />
                  <span className="text-xs">{STUDIO_INFO.address}</span>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={onClose}
                className="w-full bg-[#D96B43] hover:bg-[#C25832] text-white py-4 rounded-full font-semibold text-center block tracking-wide transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
