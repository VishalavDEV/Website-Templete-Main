import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { siteSettings } from '../data/siteData';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="Page Not Found" 
        subtitle="The page you are looking for may have been moved, removed, or is temporarily unavailable."
        breadcrumbItems={[{ label: '404 Error' }]}
      />

      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-12 sm:p-20 text-center max-w-3xl mx-auto">
        <ScrollReveal animation="pop" delay={100}>
          <div className="text-8xl sm:text-9xl font-black text-blue-600 mb-4 tracking-tighter drop-shadow-xs">404</div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={200}>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Oops! Page Not Found</h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            The page you are looking for does not exist or has been relocated. Explore our departments, services, or return to home.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="pop" delay={300}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="bg-slate-50 border border-slate-200 hover:border-blue-600 hover:bg-white text-slate-800 font-bold px-8 py-3.5 rounded-xl transition-all inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>Contact Us</span>
            </Link>
          </div>
        </ScrollReveal>
      </ScrollReveal>
    </div>
  );
};
