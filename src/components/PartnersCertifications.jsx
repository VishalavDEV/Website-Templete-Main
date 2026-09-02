import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Leaf, Sparkles, CheckCircle2, Sprout } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function PartnersCertifications() {
  const partners = [
    { name: "USDA Organic", sub: "100% Bio-Certified", icon: Leaf },
    { name: "Global G.A.P.", sub: "Standard V5.4", icon: ShieldCheck },
    { name: "Demeter Biodynamic", sub: "Soil Regenerative", icon: Sprout },
    { name: "Rainforest Alliance", sub: "Ecosystem Verified", icon: Award },
    { name: "ISO 14001", sub: "Environmental Mgt", icon: Sparkles },
    { name: "OMRI Listed", sub: "Organic Materials", icon: CheckCircle2 },
  ];

  return (
    <section className="py-16 bg-white border-y border-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-forest-700">
            Globally Recognized Agronomy & Ecological Standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-forest-50/70 border border-forest-100 hover:border-forest-300 hover:bg-forest-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-forest-800 text-wheat-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-forest-950 leading-tight">{partner.name}</div>
                  <div className="text-[10px] text-forest-600 font-medium">{partner.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
