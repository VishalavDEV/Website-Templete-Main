import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, ArrowRight, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { companyInfo } from "../../data/companyInfo";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenScoping: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenScoping }) => {
  const location = useLocation();

  const links = [
    { label: "Capabilities", to: "/capabilities", count: "06" },
    { label: "Industries", to: "/industries", count: "08" },
    { label: "Work & Case Studies", to: "/work", count: "06" },
    { label: "Insights & Research", to: "/insights", count: "04" },
    { label: "Company", to: "/about", count: "12yr" },
    { label: "Careers", to: "/careers", count: "05" },
    { label: "Contact & Scoping", to: "/contact", count: "24/7" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#121316] text-[#FAF8F5] flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#24282F]">
            <Link to="/" onClick={onClose} className="flex items-center gap-2">
              <span className="font-display text-xl font-bold tracking-tight text-[#FAF8F5]">
                VERTEXA
              </span>
              <span className="w-1.5 h-1.5 bg-[#CCF34A] rounded-full" />
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#A1A7B4] hover:text-[#FAF8F5] rounded-xs border border-[#24282F] hover:border-[#CCF34A] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-8 flex-1">
            <div className="space-y-1 divide-y divide-[#24282F]/50">
              {links.map((link, idx) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.25 }}
                    className="pt-3 pb-3"
                  >
                    <Link
                      to={link.to}
                      onClick={onClose}
                      className={`flex items-center justify-between group py-1 text-2xl font-serif-editorial ${
                        isActive ? "text-[#CCF34A]" : "text-[#FAF8F5] hover:text-[#CCF34A]"
                      }`}
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-200">
                        {link.label}
                      </span>
                      <div className="flex items-center gap-2 font-mono-tech text-xs text-[#7C828D] group-hover:text-[#CCF34A]">
                        <span>[{link.count}]</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Action Button */}
            <div className="mt-8 pt-6 border-t border-[#24282F]">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenScoping();
                }}
                className="w-full py-4 bg-[#CCF34A] text-[#0A2E23] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 rounded-xs shadow-md"
              >
                <span>Initiate Project Scoping</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Footer Telemetry & Contact */}
          <div className="px-6 py-6 border-t border-[#24282F] bg-[#181A1D] font-mono-tech text-xs text-[#7C828D] space-y-3">
            <div className="flex items-center justify-between">
              <span>HQ: NEW YORK // ONE WTC</span>
              <span className="text-[#CCF34A] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCF34A]" />
                GLOBAL SRE ACTIVE
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#A1A7B4]">
              <span>{companyInfo.email}</span>
              <span>{companyInfo.phone}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
