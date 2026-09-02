import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { NewsletterForm } from '../forms/NewsletterForm';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-sm">
      
      {/* Top Banner with Newsletter */}
      <div className="border-b border-slate-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Stay Ahead in Enterprise Engineering
              </h3>
              <p className="text-sm text-slate-600 max-w-lg">
                Subscribe to our bi-weekly dispatch on AI multi-agent systems, cloud modernization blueprints, and zero-trust security.
              </p>
            </div>
            <div className="lg:col-span-6 max-w-md lg:ml-auto w-full">
              <NewsletterForm variant="inline" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
            
            {/* Col 1: Brand */}
            <div className="col-span-2 space-y-4">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-zinc-900 p-0.5 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-white rounded-sm transform rotate-45" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold tracking-tight text-slate-900">
                    Straventa
                  </span>
                </div>
              </Link>

              <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                Engineering high-impact AI models, cloud infrastructures, resilient software architectures, and real-time data ecosystems for global enterprises.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 flex items-center justify-center transition shadow-xs"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 flex items-center justify-center transition shadow-xs"
                  title="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 flex items-center justify-center transition shadow-xs"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              {/* Status Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>All Systems Operational (99.99%)</span>
                </div>
              </div>
            </div>

            {/* Col 2: Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link to="/services/software-development" className="hover:text-slate-900 transition">Software Development</Link></li>
                <li><Link to="/services/ai-machine-learning" className="hover:text-slate-900 transition">AI &amp; Machine Learning</Link></li>
                <li><Link to="/services/cloud-solutions" className="hover:text-slate-900 transition">Cloud Solutions</Link></li>
                <li><Link to="/services/data-analytics" className="hover:text-slate-900 transition">Data Analytics</Link></li>
                <li><Link to="/services/cybersecurity" className="hover:text-slate-900 transition">Cybersecurity</Link></li>
                <li><Link to="/services/ui-ux-design" className="hover:text-slate-900 transition">UI/UX Design</Link></li>
              </ul>
            </div>

            {/* Col 3: Solutions */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link to="/solutions/enterprise-ai-platform" className="hover:text-slate-900 transition">Enterprise AI Platform</Link></li>
                <li><Link to="/solutions/cloud-modernization-mesh" className="hover:text-slate-900 transition">Cloud Modernization</Link></li>
                <li><Link to="/solutions/intelligent-data-lakehouse" className="hover:text-slate-900 transition">Intelligent Lakehouse</Link></li>
                <li><Link to="/solutions/zero-trust-cybersecurity" className="hover:text-slate-900 transition">Zero-Trust DevSecOps</Link></li>
                <li><Link to="/industries" className="hover:text-slate-900 transition">Industry Hubs</Link></li>
              </ul>
            </div>

            {/* Col 4: Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link to="/about" className="hover:text-slate-900 transition">About Straventa</Link></li>
                <li><Link to="/team" className="hover:text-slate-900 transition">Leadership Team</Link></li>
                <li>
                  <Link to="/careers" className="hover:text-slate-900 transition flex items-center justify-between">
                    <span>Careers</span>
                    <span className="text-[10px] bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded font-mono font-medium">Hiring</span>
                  </Link>
                </li>
                <li><Link to="/case-studies" className="hover:text-slate-900 transition">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-slate-900 transition">Insights &amp; Blog</Link></li>
                <li><Link to="/resources" className="hover:text-slate-900 transition">Whitepapers &amp; Guides</Link></li>
              </ul>
            </div>

            {/* Col 5: Global Locations */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Global Hubs
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  <span>San Francisco, CA, USA</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  <span>Bengaluru &amp; Hyd, India</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  <span>London, United Kingdom</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  <span>Singapore</span>
                </li>
                <li className="pt-2">
                  <Link to="/contact" className="text-slate-900 hover:text-slate-700 font-semibold inline-flex items-center gap-1">
                    <span>Contact All Offices</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Straventa Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-900 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-900 transition">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-slate-900 transition">Cookie Preferences</Link>
            <Link to="/search" className="hover:text-slate-900 transition">Site Directory</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};
