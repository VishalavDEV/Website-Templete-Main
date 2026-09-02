import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Download,
  CheckCircle2,
  Copy,
  Check,
  Code2,
  Sparkles,
  Zap,
  MapPin,
  Trophy,
  Activity,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO, STATS, SOCIAL_LINKS } from '../../data/portfolioData';
import { MagneticButton } from '../common/MagneticButton';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useClipboard } from '../../hooks/useClipboard';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from '../common/Icons';
import { soundFx } from '../../utils/audio';
import { cn } from '../../utils/cn';

const socialIcons: Record<string, React.ReactNode> = {
  Github: <GithubIcon className="w-4 h-4" />,
  Linkedin: <LinkedinIcon className="w-4 h-4" />,
  Twitter: <TwitterIcon className="w-4 h-4" />,
  Dribbble: <DribbbleIcon className="w-4 h-4" />,
};

export const HeroSection: React.FC = () => {
  const { copy: copyEmail, isCopied: isEmailCopied } = useClipboard();
  const [activeTab, setActiveTab] = useState<'stack' | 'impact' | 'about'>('stack');

  const handleScrollTo = (id: string) => {
    soundFx.playClick();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    copyEmail(PERSONAL_INFO.email);
    soundFx.playClick();
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Headline, Credentials & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-slate-200/90 text-xs font-mono text-slate-700 shadow-sm bg-white">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-semibold text-slate-800">Available for Senior Roles & Select Projects</span>
            </div>

            {/* Name & Title */}
            <div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-blue-600 font-bold uppercase tracking-wider mb-2">
                <Terminal className="w-4 h-4" />
                <span>Alex Rivera — Senior Interface Engineer</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Crafting digital experiences at the{' '}
                <span className="gradient-text-multi inline-block">
                  intersection of design
                </span>{' '}
                & code.
              </h1>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-sans">
              Senior Frontend & Creative UI Engineer with 7+ years of expertise architecting high-performance React 19 applications, spatial design systems, and WebGL micro-interactions.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
              {STATS.map((stat) => (
                <div key={stat.label} className="p-3.5 rounded-2xl glass-card border border-slate-200 bg-white">
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 gradient-text-cyan">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs & Quick Email Copy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <MagneticButton
                size="md"
                variant="primary"
                onClick={() => handleScrollTo('work')}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Explore Selected Work
              </MagneticButton>

              <MagneticButton
                size="md"
                variant="secondary"
                onClick={() => {
                  soundFx.playClick();
                  window.print();
                }}
                icon={<Download className="w-4 h-4 text-blue-600" />}
              >
                Download CV (PDF)
              </MagneticButton>

              {/* Direct Email Pill with 1-Click Copy */}
              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card border border-slate-200 hover:border-blue-500/50 text-xs font-mono text-slate-700 hover:text-blue-600 transition-all bg-white shadow-sm"
              >
                {isEmailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-blue-600" />
                    <span className="font-medium">{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                Find Me:
              </span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.name}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-8 h-8 rounded-xl glass-card border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-500/40 transition-all hover:-translate-y-0.5 shadow-sm"
                  >
                    {socialIcons[soc.icon] || <Sparkles className="w-3.5 h-3.5" />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Executive Interactive Terminal / Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl glass-panel border border-slate-200 bg-white/95 shadow-xl p-6 sm:p-7 overflow-hidden">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <span className="text-xs font-mono text-slate-500 ml-2 font-medium">
                    alex-rivera.profile
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono border border-emerald-200 font-semibold">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>Verified Staff</span>
                </div>
              </div>

              {/* Profile Bio Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-600/30 shrink-0 shadow-md">
                  <ImageWithFallback
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    fallbackTitle={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-display font-bold text-slate-900">
                      {PERSONAL_INFO.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-600/15" />
                  </div>
                  <p className="text-xs font-mono text-blue-700 font-semibold">
                    {PERSONAL_INFO.role}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-2xl glass-card border border-slate-200 bg-slate-50 mb-5">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTab('stack');
                  }}
                  className={cn(
                    'flex-1 py-1.5 rounded-xl text-xs font-mono transition-all',
                    activeTab === 'stack'
                      ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-900 font-medium'
                  )}
                >
                  Core Stack
                </button>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTab('impact');
                  }}
                  className={cn(
                    'flex-1 py-1.5 rounded-xl text-xs font-mono transition-all',
                    activeTab === 'impact'
                      ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-900 font-medium'
                  )}
                >
                  Impact & Stats
                </button>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTab('about');
                  }}
                  className={cn(
                    'flex-1 py-1.5 rounded-xl text-xs font-mono transition-all',
                    activeTab === 'about'
                      ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-900 font-medium'
                  )}
                >
                  Trajectory
                </button>
              </div>

              {/* Tab Contents */}
              <div className="min-h-[160px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'stack' && (
                    <motion.div
                      key="stack"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="p-2.5 rounded-xl glass-card border border-slate-200 bg-white flex items-center justify-between">
                          <span className="text-slate-900 font-semibold">React 19 & Next.js</span>
                          <span className="text-blue-600 font-bold">98%</span>
                        </div>
                        <div className="p-2.5 rounded-xl glass-card border border-slate-200 bg-white flex items-center justify-between">
                          <span className="text-slate-900 font-semibold">TypeScript</span>
                          <span className="text-blue-600 font-bold">95%</span>
                        </div>
                        <div className="p-2.5 rounded-xl glass-card border border-slate-200 bg-white flex items-center justify-between">
                          <span className="text-slate-900 font-semibold">Three.js / WebGL</span>
                          <span className="text-blue-600 font-bold">88%</span>
                        </div>
                        <div className="p-2.5 rounded-xl glass-card border border-slate-200 bg-white flex items-center justify-between">
                          <span className="text-slate-900 font-semibold">Framer Motion</span>
                          <span className="text-blue-600 font-bold">96%</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-blue-900 font-mono font-medium">
                          <Zap className="w-4 h-4 text-blue-600" />
                          <span>Performance Core Vitals:</span>
                        </div>
                        <span className="font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                          99 / 100
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'impact' && (
                    <motion.div
                      key="impact"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-2.5 text-xs text-slate-700"
                    >
                      <div className="p-3 rounded-xl glass-card border border-slate-200 bg-white flex items-start gap-2.5">
                        <Trophy className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span><strong>14 International Awards</strong> including Awwwards Site of the Day and FWA of the Month.</span>
                      </div>
                      <div className="p-3 rounded-xl glass-card border border-slate-200 bg-white flex items-start gap-2.5">
                        <Zap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>Architected interfaces that helped ventures raise over <strong>$45M in funding</strong>.</span>
                      </div>
                      <div className="p-3 rounded-xl glass-card border border-slate-200 bg-white flex items-start gap-2.5">
                        <Code2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Built enterprise design systems used by <strong>45+ engineers</strong> worldwide.</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'about' && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-2.5 text-xs text-slate-700 font-sans"
                    >
                      <div className="p-3 rounded-xl glass-card border border-slate-200 bg-white space-y-1">
                        <div className="text-[10px] font-mono text-blue-600 font-bold uppercase">Current Role</div>
                        <div className="font-bold text-slate-900">Staff Design Engineer & Advisor</div>
                        <div className="text-slate-500 text-[11px]">2023 — Present · Leading bespoke spatial web engineering</div>
                      </div>
                      <div className="p-3 rounded-xl glass-card border border-slate-200 bg-white space-y-1">
                        <div className="text-[10px] font-mono text-blue-600 font-bold uppercase">Education</div>
                        <div className="font-bold text-slate-900">B.S. in Computer Science & HCI</div>
                        <div className="text-slate-500 text-[11px]">UC Berkeley · Honors Graduate</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-4 mt-2 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                  Live Portfolio v2.4
                </span>
                <a
                  href="#contact"
                  onClick={() => handleScrollTo('contact')}
                  className="text-blue-600 hover:text-blue-800 transition-colors font-bold flex items-center gap-1"
                >
                  <span>Schedule Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
