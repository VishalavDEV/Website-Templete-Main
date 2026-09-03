import React from 'react';
import { TEAM_MEMBERS, AGENCY_STATS, CORE_VALUES } from '../data/team';
import { DynamicIcon } from './DynamicIcon';
import { ArrowRight, CheckCircle2, Linkedin, Github, Twitter, ShieldCheck } from 'lucide-react';

interface AboutViewProps {
  onOpenInquiry: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenInquiry }) => {
  return (
    <div id="about-page" className="pt-24 pb-20 bg-white">
      {/* Hero Section */}
      <div className="bg-slate-950 text-white pt-14 pb-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs border border-blue-500/30">
            About KRAFT
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white mt-4 max-w-4xl leading-tight">
            We Are Systems Engineers, Applied Scientists &amp; Product Builders.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Founded by former principal researchers and infrastructure architects, KRAFT bridges the gap between state-of-the-art computational AI research and enterprise production engineering.
          </p>

          {/* Agency Statistics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800">
            {AGENCY_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-3xl font-extrabold text-blue-400 font-display">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-slate-200 mt-1">{stat.label}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Story & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Our Origin
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
              Built in Response to AI Hype Without Engineering Substance.
            </h2>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              In 2021, as generative models emerged, we witnessed hundreds of generic prototypes that fell apart when exposed to real-world latency, security requirements, and data governance standards.
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              KRAFT was created to establish a higher bar: building AI systems with mathematical grounding, strict evaluation harnesses, zero data leakage, and resilient distributed backends. We do not build throwaway toys; we engineer revenue-critical digital products.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <p className="font-bold text-slate-900 font-mono">Our Mission Statement:</p>
              <p className="italic text-slate-600 leading-relaxed">
                &ldquo;To empower forward-thinking enterprises with intelligent software systems engineered for unyielding performance, demonstrable business ROI, and absolute data sovereignty.&rdquo;
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-5">
            <h3 className="text-lg font-bold font-display text-white">How We Work Differently</h3>
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Senior-Only Pods</span>
                  <span>We never hand your project off to junior interns or offshore contractor farms. Every project is led directly by principal engineers.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">100% Client IP Ownership</span>
                  <span>From sprint one, all repository commits, cloud resources, trained model checkpoints, and design assets are wholly owned by your organization.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Radical Transparency</span>
                  <span>You join our daily Slack channels, inspect Git commits directly, and attend weekly live architecture reviews. No mystery boxes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
              The Tenets That Govern Every Commit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-2xs">
                    <DynamicIcon name={val.icon} className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{val.title}</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Engineering Leads */}
        <div>
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              Leadership Pod
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mt-2 font-display">
              Meet Our Systems Architects &amp; Researchers
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Combined decades of pedigree across hyperscale infrastructure and applied artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                  <p className="text-xs font-mono text-blue-600 font-semibold mt-0.5">{member.role}</p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">{member.bio}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 2).map((exp, i) => (
                      <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {exp}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a href={member.github} target="_blank" rel="noreferrer" className="hover:text-slate-900">
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white text-center flex flex-col items-center justify-center border border-slate-800">
          <h3 className="text-2xl font-bold font-display text-white">Work Directly with Our Principal Engineers</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            We operate with low concurrent client volume to ensure relentless focus and deep technical attention on every deployment.
          </p>
          <button
            onClick={onOpenInquiry}
            className="mt-6 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            Schedule Discovery Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
