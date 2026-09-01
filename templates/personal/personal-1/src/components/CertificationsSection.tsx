import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#050505] text-[#E5E5E5] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] mb-4 font-mono">
            <ShieldCheck size={13} />
            <span>AUTHORITATIVE ACCREDITATIONS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-2xl leading-[1.05]">
            Industry Standards & <span className="font-serif italic font-normal text-[#D4AF37]">Verifications</span>.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-xl font-light">
            Official credentials across Google Cloud Architect, Kubernetes CKA, AWS Solutions Architect, and Nielsen Norman UX Governance.
          </p>
        </div>

        {/* 4-Card Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 transition-all p-6 flex flex-col justify-between shadow-xl backdrop-blur-xl relative group overflow-hidden"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-white/10 bg-white/[0.02] relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/60 text-[#D4AF37] border border-white/10">
                    <ShieldCheck size={14} />
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#D4AF37] font-semibold mb-1">
                  {cert.issuer}
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug tracking-tight">
                  {cert.title}
                </h3>

                <div className="space-y-1 text-xs font-mono text-neutral-400 mb-4">
                  <div>Issued: <span className="text-neutral-300">{cert.issueDate}</span></div>
                  <div>Expiry: <span className="text-emerald-500 font-semibold">{cert.expiryDate}</span></div>
                  <div className="text-[10px] text-neutral-500 truncate">ID: {cert.credentialId}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-[#D4AF37] text-neutral-300 hover:text-black font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-white/10"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
