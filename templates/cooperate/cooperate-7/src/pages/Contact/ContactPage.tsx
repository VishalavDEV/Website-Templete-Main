import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe, 
  ShieldCheck, 
  MessageSquare,
  Building2
} from 'lucide-react';
import { ContactForm } from '../../components/forms/ContactForm';

export const ContactPage: React.FC = () => {
  const offices = [
    {
      city: "San Francisco, USA",
      type: "Global Headquarters",
      address: "500 Howard Street, Suite 400, San Francisco, CA 94105",
      phone: "+1 (415) 890-3400",
      email: "sf@straventa.com",
      hours: "9:00 AM – 6:00 PM PST"
    },
    {
      city: "Bengaluru, India",
      type: "Engineering & AI Lab",
      address: "Embassy TechVillage, Outer Ring Road, Bengaluru, KA 560103",
      phone: "+91 (80) 4120-9900",
      email: "india@straventa.com",
      hours: "9:30 AM – 6:30 PM IST"
    },
    {
      city: "London, UK",
      type: "EMEA Operations",
      address: "100 Bishopsgate, Level 18, London EC2N 4AG",
      phone: "+44 20 7946 0912",
      email: "london@straventa.com",
      hours: "9:00 AM – 5:30 PM GMT"
    },
    {
      city: "Singapore",
      type: "APAC Regional Hub",
      address: "1 Marina Boulevard, #28-00 One Marina Boulevard, 018989",
      phone: "+65 6789 0123",
      email: "singapore@straventa.com",
      hours: "9:00 AM – 6:00 PM SGT"
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Header Banner */}
      <section className="pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Get in Touch with Our Solutions Architects
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Have a project in mind, need technical advisory, or want to explore enterprise partnerships? We're here to help.
            </p>
          </div>

        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Fast Contact Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Direct Enterprise Support</h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">General Inquiries &amp; RFP</div>
                      <a href="mailto:contact@straventa.com" className="text-slate-900 hover:text-zinc-700 font-semibold transition">
                        contact@straventa.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Enterprise Hotline</div>
                      <a href="tel:+14158903400" className="text-slate-900 hover:text-zinc-700 font-semibold transition">
                        +1 (415) 890-3400
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Response SLA</div>
                      <div className="text-slate-900 font-semibold">Under 4 business hours</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-slate-700" />
                  <span>Strict Non-Disclosure Agreements (NDAs) signed prior to discovery calls.</span>
                </div>
              </div>

              {/* Recruitment note */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm">
                <h4 className="text-base font-bold text-slate-900 mb-2">Looking for Careers?</h4>
                <p className="text-xs text-slate-600 mb-4">
                  Check out our open engineering roles or submit an open application.
                </p>
                <Link
                  to="/careers"
                  className="text-xs font-bold text-slate-900 hover:text-zinc-700 inline-flex items-center gap-1"
                >
                  <span>Explore Open Positions</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Global Offices</h2>
            <p className="text-sm text-slate-600 mt-2">Serving clients across 15+ countries with 24/7 follow-the-sun support</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center mb-2">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{office.city}</h3>
                <div className="text-xs text-slate-700 font-semibold">{office.type}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{office.address}</p>
                <div className="text-xs text-slate-800 font-mono pt-2 border-t border-slate-100">
                  {office.phone}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
