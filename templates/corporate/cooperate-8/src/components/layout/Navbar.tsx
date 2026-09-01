import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "../common/Button";
import { MobileMenu } from "../navigation/MobileMenu";
import { ProjectScopingModal } from "../common/ProjectScopingModal";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScopingModalOpen, setIsScopingModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Capabilities", to: "/capabilities" },
    { label: "Industries", to: "/industries" },
    { label: "Work", to: "/work" },
    { label: "Insights", to: "/insights" },
    { label: "Company", to: "/about" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E6E2D8] shadow-xs"
            : "py-5 bg-transparent border-b border-[#E6E2D8]/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-xl font-bold tracking-tight text-[#121316] group-hover:text-[#0A2E23] transition-colors">
              VERTEXA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E23] group-hover:bg-[#CCF34A] group-hover:scale-125 transition-all" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-mono-tech text-xs uppercase tracking-wider transition-colors relative py-1 ${
                    isActive
                      ? "text-[#0A2E23] font-bold"
                      : "text-[#5E636E] hover:text-[#121316]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A2E23] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsScopingModalOpen(true)}
              withDiagonalArrow
              className="hidden sm:inline-flex"
            >
              Let's Talk
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-[#121316] hover:bg-[#E8E4DA] rounded-xs border border-[#E6E2D8] transition-colors md:hidden"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenScoping={() => setIsScopingModalOpen(true)}
      />

      {/* Project Scoping Modal */}
      <ProjectScopingModal
        isOpen={isScopingModalOpen}
        onClose={() => setIsScopingModalOpen(false)}
      />
    </>
  );
};
