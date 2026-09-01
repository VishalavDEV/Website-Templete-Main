import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, CheckCircle2, Sparkles } from 'lucide-react';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const [email, setEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid business email address.');
      return;
    }
    setEmailError('');
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#090909] text-[#f8f7f4] pt-24 pb-12 border-t-2 border-[#D1FF00] relative overflow-hidden">
      {/* Background Grain Lines */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Subtle Background Watermark text */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
        <span className="text-[200px] sm:text-[300px] font-black leading-none font-serif tracking-tighter">
          VANTA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Bold Typography Headline */}
        <div className="border-b border-white/10 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] font-extrabold text-[#D1FF00] block mb-3">
                SYSTEM INITIATION // PROJECT INQUIRY
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-black tracking-tighter text-white uppercase leading-[0.82]">
                BUILD YOUR <br />
                <span className="text-[#090909] bg-[#D1FF00] px-3 py-0.5 rounded-none inline-block my-1 border-2 border-[#090909]">
                  CATEGORY
                </span> ARCHITECTURE.
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-9 py-5 bg-[#D1FF00] text-[#090909] font-mono text-sm uppercase tracking-widest font-black rounded-none hover:bg-white transition-all duration-300 shadow-2xl group cursor-pointer border-2 border-[#090909] w-fit"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Links Grid & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-white/10">
          {/* Col 1: Brand & Intro Replay */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#D1FF00] text-[#090909] font-black text-xs flex items-center justify-center border border-[#090909]">
                VF
              </div>
              <span className="font-serif text-2xl font-black tracking-tighter uppercase text-white">
                VANTA FORM
              </span>
            </div>
            <p className="text-sm font-sans text-gray-400 max-w-sm leading-relaxed">
              VANTA FORM is an executive digital transformation and creative technology agency crafting high-impact platforms, 3D web systems, and brand positioning.
            </p>

            {/* Replay 3D Intro Button */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center gap-2 px-4 py-2 bg.white/5 bg-white/5 hover:bg-[#D1FF00] hover:text-[#090909] border border-white/20 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 group cursor-pointer"
                aria-label="Replay Cinematic 3D Intro"
              >
                <Play className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" />
                <span>REPLAY 3D INTRO</span>
              </button>
            )}
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4 font-mono text-xs uppercase tracking-wider">
            <div className="text-[#D1FF00] font-black tracking-widest mb-2 border-b border-white/10 pb-1">PAGES //</div>
            <ul className="space-y-2.5 text-gray-400 font-mono text-xs">
              <li><Link to="/" className="hover:text-[#D1FF00] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#D1FF00] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#D1FF00] transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-[#D1FF00] transition-colors">Work & Archive</Link></li>
              <li><Link to="/industries" className="hover:text-[#D1FF00] transition-colors">Industries</Link></li>
              <li><Link to="/insights" className="hover:text-[#D1FF00] transition-colors">Insights & Articles</Link></li>
              <li><Link to="/careers" className="hover:text-[#D1FF00] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#D1FF00] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="space-y-4 font-mono text-xs uppercase tracking-wider">
            <div className="text-[#D1FF00] font-black tracking-widest mb-2 border-b border-white/10 pb-1">CAPABILITIES //</div>
            <ul className="space-y-2.5 text-gray-400 font-mono text-xs">
              <li><Link to="/services/strategy" className="hover:text-[#D1FF00] transition-colors">Brand Strategy</Link></li>
              <li><Link to="/services/branding" className="hover:text-[#D1FF00] transition-colors">Visual Identity</Link></li>
              <li><Link to="/services/digital" className="hover:text-[#D1FF00] transition-colors">3D & Web Platforms</Link></li>
              <li><Link to="/services/ai" className="hover:text-[#D1FF00] transition-colors">AI & Automation</Link></li>
              <li><Link to="/services/product" className="hover:text-[#D1FF00] transition-colors">Product Design</Link></li>
              <li><Link to="/services/growth" className="hover:text-[#D1FF00] transition-colors">Business Consulting</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-[#D1FF00] font-black border-b border-white/10 pb-1">
              INSIGHTS NEWSLETTER //
            </div>
            <p className="text-xs text-gray-400 font-mono">
              Subscribe to receive quarterly briefs on spatial design, WebGL, and executive AI strategy.
            </p>

            {newsletterSubmitted ? (
              <div className="p-3 bg-[#D1FF00]/10 border border-[#D1FF00]/40 flex items-center gap-2 text-xs text-[#D1FF00] font-mono">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>SUBSCRIBED TO INTEL BRIEF.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="business@company.com"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/20 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D1FF00] font-mono transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#D1FF00] text-[#090909] text-xs font-mono font-black hover:bg-white transition-colors cursor-pointer"
                  >
                    JOIN
                  </button>
                </div>
                {emailError && <p className="text-[10px] text-red-400 font-mono">{emailError}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Global Locations & Legal */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-gray-500 uppercase tracking-widest">
          <div className="flex flex-wrap gap-6">
            <span>NEW YORK // 40.7128° N</span>
            <span>LONDON // 51.5074° N</span>
            <span>ZURICH // 47.3769° N</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#D1FF00] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#D1FF00] transition-colors">Terms of Service</Link>
            <span>© 2026 VANTA FORM AGENCY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
