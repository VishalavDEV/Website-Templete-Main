import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight,
  Cpu,
  Cloud,
  Code2,
  BarChart3,
  ShieldCheck,
  Palette,
  Briefcase,
  Layers,
  Landmark,
  HeartPulse,
  ShoppingCart
} from 'lucide-react';
import { Button } from '../common/Button';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { 
      label: 'Services', 
      path: '/services',
      hasDropdown: true,
      items: [
        { label: 'AI & Machine Learning', path: '/services/ai-machine-learning', desc: 'Predictive models & GenAI workflows', icon: Cpu },
        { label: 'Cloud Solutions', path: '/services/cloud-solutions', desc: 'Multi-cloud modernization & DevOps', icon: Cloud },
        { label: 'Software Development', path: '/services/software-development', desc: 'Full-cycle enterprise applications', icon: Code2 },
        { label: 'Data Analytics', path: '/services/data-analytics', desc: 'Lakehouse & real-time telemetry', icon: BarChart3 },
        { label: 'Cybersecurity', path: '/services/cybersecurity', desc: 'Zero-Trust security & DevSecOps', icon: ShieldCheck },
        { label: 'UI/UX Design', path: '/services/ui-ux-design', desc: 'Modern accessible design systems', icon: Palette }
      ]
    },
    { 
      label: 'Solutions', 
      path: '/solutions',
      hasDropdown: true,
      items: [
        { label: 'Enterprise AI Platform', path: '/solutions/enterprise-ai-platform', desc: 'Private agentic automation', icon: Cpu },
        { label: 'Cloud Modernization Mesh', path: '/solutions/cloud-modernization-mesh', desc: 'Monolith-to-microservices migration', icon: Layers },
        { label: 'Intelligent Lakehouse', path: '/solutions/intelligent-data-lakehouse', desc: 'Unified analytics & streaming', icon: BarChart3 },
        { label: 'Zero-Trust DevSecOps', path: '/solutions/zero-trust-cybersecurity', desc: 'Automated posture & compliance', icon: ShieldCheck }
      ]
    },
    { 
      label: 'Industries', 
      path: '/industries',
      hasDropdown: true,
      items: [
        { label: 'Banking & Finance', path: '/industries/banking-finance', desc: 'Sub-30ms fraud & KYC engines', icon: Landmark },
        { label: 'Healthcare & Life Sciences', path: '/industries/healthcare-lifesciences', desc: 'FHIR interoperability & clinical AI', icon: HeartPulse },
        { label: 'Retail & E-Commerce', path: '/industries/retail-ecommerce', desc: 'Headless composable commerce', icon: ShoppingCart },
        { label: 'Manufacturing & Smart IoT', path: '/industries/manufacturing-iot', desc: 'Digital twins & predictive ops', icon: Layers }
      ]
    },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Insights', path: '/blog' },
    { label: 'Careers', path: '/careers' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo matching screenshot */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 p-0.5 shadow-sm group-hover:bg-zinc-800 transition flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-white rounded-xs transform rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-zinc-700 transition">
                Straventa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname.startsWith(link.path)
                        ? 'text-slate-900 font-bold bg-slate-100/80'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180 text-slate-900' : 'text-slate-400'}`} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors block ${
                      location.pathname === link.path
                        ? 'text-slate-900 font-bold bg-slate-100/80'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Flyout */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1.5 w-80 bg-white border border-slate-200 rounded-2xl p-2 shadow-xl z-50 overflow-hidden"
                      >
                        <div className="space-y-1">
                          {link.items?.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 transition group"
                              >
                                <div className="p-2 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-zinc-900 group-hover:text-white transition shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-slate-900 group-hover:text-zinc-900 transition">
                                    {item.label}
                                  </div>
                                  <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 px-2 py-1 flex items-center justify-between">
                          <Link
                            to={link.path}
                            className="text-[11px] font-semibold text-slate-900 hover:text-zinc-700 flex items-center gap-1"
                          >
                            <span>View all {link.label.toLowerCase()}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header Action Items */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-100 border border-transparent hover:border-slate-200 transition flex items-center gap-2 text-xs"
              title="Search directory (Cmd + K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline font-mono text-[11px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">⌘K</span>
            </button>

            {/* Client Portal Link */}
            <Link
              to="/login"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-2 py-2 transition"
            >
              Client Login
            </Link>

            {/* Get Started Button matching screenshot */}
            <Button
              to="/contact"
              variant="primary"
              size="sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    className="block px-3 py-2 text-base font-semibold text-slate-800 hover:text-slate-950 hover:bg-slate-50 rounded-xl"
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-6 space-y-1 my-1">
                      {link.items?.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block py-1 text-xs text-slate-500 hover:text-slate-900"
                        >
                          • {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <Link
                  to="/login"
                  className="block text-center py-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
                >
                  Client Portal Login
                </Link>
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
