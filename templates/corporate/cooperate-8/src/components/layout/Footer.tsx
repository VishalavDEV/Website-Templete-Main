import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Send, ShieldCheck, Globe, Mail, Phone } from "lucide-react";
import { companyInfo, globalOffices } from "../../data/companyInfo";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 4000);
  };

  const navColumns = [
    {
      title: "Capabilities",
      links: [
        { label: "AI & Intelligent Systems", to: "/capabilities/ai-intelligent-systems" },
        { label: "Digital Products", to: "/capabilities/digital-products" },
        { label: "Cloud & Infrastructure", to: "/capabilities/cloud-infrastructure" },
        { label: "Data & Analytics", to: "/capabilities/data-analytics" },
        { label: "Cybersecurity & Zero-Trust", to: "/capabilities/cybersecurity" },
        { label: "Enterprise Transformation", to: "/capabilities/enterprise-transformation" }
      ]
    },
    {
      title: "Industries",
      links: [
        { label: "Financial Services", to: "/industries/financial-services" },
        { label: "Healthcare & Life Sciences", to: "/industries/healthcare" },
        { label: "Manufacturing & Industrial", to: "/industries/manufacturing" },
        { label: "Retail & Commerce", to: "/industries/retail" },
        { label: "Logistics & Supply Chain", to: "/industries/logistics" },
        { label: "Energy & Utilities", to: "/industries/energy" },
        { label: "Government & Public Sector", to: "/industries/government" },
        { label: "Technology & SaaS", to: "/industries/technology" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Vertexa", to: "/about" },
        { label: "Executive Leadership", to: "/about#leadership" },
        { label: "Methodology & Approach", to: "/about#approach" },
        { label: "Careers (5 Open Roles)", to: "/careers" },
        { label: "Global Presence", to: "/about#offices" },
        { label: "Press & Publications", to: "/insights" }
      ]
    },
    {
      title: "Work & Research",
      links: [
        { label: "All Case Studies", to: "/work" },
        { label: "AI Risk Intelligence", to: "/work/ai-risk-intelligence-platform" },
        { label: "Global Supply Chain", to: "/work/global-supply-chain-platform" },
        { label: "Healthcare Lakehouse", to: "/work/healthcare-intelligence-system" },
        { label: "Autonomous Energy Grid", to: "/work/real-time-autonomous-energy-grid-management" },
        { label: "Executive Whitepapers", to: "/insights" }
      ]
    }
  ];

  return (
    <footer className="bg-[#111315] text-[#FAF8F5] border-t border-[#24282F] pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Newsletter & Corporate Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#24282F]">
          <div className="lg:col-span-6 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="font-display text-2xl font-bold tracking-tight text-[#FAF8F5]">
                VERTEXA
              </span>
              <span className="w-2 h-2 rounded-full bg-[#CCF34A]" />
            </Link>
            <p className="font-serif-editorial text-xl sm:text-2xl text-[#E6E2D8] font-light max-w-lg leading-snug">
              Intelligent infrastructure for ambitious organizations operating at global scale.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {companyInfo.certifications.slice(0, 4).map((cert) => (
                <span
                  key={cert}
                  className="px-2 py-1 bg-[#181A1D] border border-[#24282F] text-[10px] font-mono-tech text-[#A1A7B4] rounded-xs"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-[#CCF34A]">
                The Vertexa Quarterly Briefing
              </div>
              <p className="text-xs text-[#A1A7B4] max-w-md">
                Rigorous, peer-reviewed engineering analyses on enterprise AI architectures, multi-cloud resilience, and system economics.
              </p>
              {isSubscribed ? (
                <div className="p-3 bg-[#181A1D] border border-[#CCF34A]/40 text-[#CCF34A] font-mono-tech text-xs rounded-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Subscription confirmed. Next quarterly dispatch arriving in your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="executive.email@enterprise.com"
                    className="flex-1 px-3.5 py-2.5 bg-[#181A1D] border border-[#24282F] focus:border-[#CCF34A] focus:outline-none text-xs text-[#FAF8F5] rounded-xs font-mono-tech"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#CCF34A] text-[#0A2E23] font-mono-tech text-xs uppercase tracking-wider font-bold rounded-xs hover:bg-[#D6FA52] transition-colors cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className="flex items-center gap-6 pt-6 text-xs font-mono-tech text-[#A1A7B4]">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#CCF34A]" />
                <span>8 Global Delivery Hubs</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#CCF34A]" />
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-[#24282F]">
          {navColumns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#FAF8F5] font-bold">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs text-[#A1A7B4] hover:text-[#CCF34A] transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Hubs Strip */}
        <div className="py-8 border-b border-[#24282F] hidden lg:block">
          <div className="font-mono-tech text-[11px] uppercase tracking-widest text-[#7C828D] mb-4">
            Global Engineering Hubs & Presence
          </div>
          <div className="grid grid-cols-8 gap-4">
            {globalOffices.map((office) => (
              <div key={office.city} className="font-mono-tech text-[11px] space-y-1">
                <div className="text-[#FAF8F5] font-bold flex items-center gap-1">
                  <span>{office.city}</span>
                  {office.isHQ && <span className="text-[9px] text-[#CCF34A]">(HQ)</span>}
                </div>
                <div className="text-[#7C828D] text-[10px]">{office.country}</div>
                <div className="text-[#A1A7B4] text-[10px]">{office.phone}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#7C828D]">
          <div>
            © {new Date().getFullYear()} VERTEXA TECHNOLOGIES INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-[#FAF8F5] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#FAF8F5] transition-colors">
              Terms of Engagement
            </Link>
            <Link to="/contact" className="hover:text-[#FAF8F5] transition-colors">
              Security Disclosures
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#CCF34A] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#CCF34A] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
