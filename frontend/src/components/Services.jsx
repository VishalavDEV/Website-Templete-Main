import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Sparkles, HelpCircle, ChevronDown } from 'lucide-react';

const PACKAGES = [
  {
    id: 'portrait',
    name: 'Portrait & Editorial',
    tagline: 'Ideal for artists, creators & personal branding',
    price: '$350',
    duration: '2 Hours Session',
    popular: false,
    features: [
      '2 Custom outdoor or studio locations',
      '3 Outfit / styling changes',
      '35+ Color-graded high-resolution photos',
      'Private online preview gallery',
      'Full commercial & personal printing rights',
      '48-Hour expedited preview delivery'
    ]
  },
  {
    id: 'wedding',
    name: 'Weddings & Celebrations',
    tagline: 'Comprehensive documentary love story',
    price: '$1,800',
    duration: 'Full Day (8-10 Hours)',
    popular: true,
    features: [
      'Primary & secondary photographer coverage',
      'Pre-wedding sunset engagement shoot',
      '400+ Handcrafted high-resolution masters',
      'Bespoke hardcover linen photo album',
      'Drone aerial venue photography included',
      'Private client cloud archive for 5 years'
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial & Brand',
    tagline: 'Tailored for advertising, lookbooks & lifestyle',
    price: '$3,200',
    duration: 'Multi-Day Production',
    popular: false,
    features: [
      'Pre-production creative direction & moodboard',
      'Full lighting & mobile studio equipment rig',
      'Unlimited licensing for web, print & billboard',
      '100+ Curated polished marketing assets',
      'RAW footage & cinema color profile exports',
      'On-site live preview tethered monitor station'
    ]
  }
];

const FAQS = [
  {
    q: 'How far in advance should I book my session?',
    a: 'For weddings and commercial campaigns, 3–6 months in advance is recommended. For private portrait and editorial sessions, 2–4 weeks is usually sufficient.'
  },
  {
    q: 'Do you travel for destination photo shoots?',
    a: 'Yes! Travel and destination shoots across Europe, North America, and Asia are a regular part of our calendar. Custom travel quotes are provided with zero hidden fees.'
  },
  {
    q: 'When and how will I receive the final photographs?',
    a: 'A highlight sneak peek gallery is delivered within 48 hours. The complete polished gallery is delivered within 2–3 weeks via a password-protected cloud download vault.'
  }
];

export default function Services({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 bg-[#141414] text-white overflow-hidden scroll-mt-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-[#e74c3c]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#e74c3c] uppercase">
              RATES & PACKAGES
            </span>
            <span className="h-[2px] w-8 bg-[#e74c3c]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Transparent Investment
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            All packages include professional high-resolution color grading, archival cloud storage, and personal usage licenses.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-[#1c1c1c] border-2 border-[#e74c3c] shadow-2xl shadow-[#e74c3c]/15 transform lg:-translate-y-2'
                  : 'bg-[#181818] border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e74c3c] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-white" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-6 font-light">
                  {pkg.tagline}
                </p>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    {pkg.price}
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    / {pkg.duration}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mt-8 pt-6 border-t border-white/10">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                      <span className="p-0.5 rounded-full bg-[#e74c3c]/20 text-[#e74c3c] flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Button */}
              <button
                onClick={() => onOpenBooking(pkg.name)}
                className={`mt-10 w-full py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer ${
                  pkg.popular
                    ? 'bg-[#e74c3c] hover:bg-[#d63031] text-white shadow-[#e74c3c]/30 hover:scale-[1.02]'
                    : 'bg-white/10 hover:bg-white/20 text-white hover:border-white/30 border border-white/15'
                }`}
                id={`book-package-${pkg.id}`}
              >
                Select Package
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section Accordion */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Frequently Asked Questions
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">Everything you need to know about working with us.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-[#181818] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-[#e74c3c] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#e74c3c]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
