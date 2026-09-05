import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  Globe, 
  Zap, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Play,
  Star,
  ShieldCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - navHeight);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    { title: 'Aether OS — Spatial Computing Interface', category: '3D & WebGL', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', tag: 'Featured' },
    { title: 'Luminary — High-Frequency Fintech Platform', category: 'Product Engineering', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', tag: 'Case Study' },
    { title: 'Vanguard — Autonomous Robotics Dashboard', category: 'AI & Systems', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', tag: 'Design System' },
    { title: 'Helios — Clean Energy Intelligence Suite', category: 'Enterprise SaaS', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', tag: 'Product Strategy' }
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[20%] left-[15%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[130px]" />
        <div className="absolute -bottom-[20%] left-[30%] w-[700px] h-[700px] bg-violet-600/15 rounded-full blur-[160px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#090d16] border-b border-slate-800/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative w-full">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
              </div>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              NEXUS
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-indigo-400 transition-colors">Services</a>
            <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="hover:text-indigo-400 transition-colors">Work</a>
            <a href="#metrics" onClick={(e) => handleNavClick(e, '#metrics')} className="hover:text-indigo-400 transition-colors">Impact</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-indigo-400 transition-colors">About</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-[#090d16] border-b border-slate-800 z-50 px-4 sm:px-6 py-5 space-y-3 shadow-2xl max-h-[calc(100vh-64px)] overflow-y-auto">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="block text-slate-300 hover:text-indigo-400 py-2.5 border-b border-slate-800/60 font-medium text-sm"
            >
              Services
            </a>
            <a 
              href="#work" 
              onClick={(e) => handleNavClick(e, '#work')}
              className="block text-slate-300 hover:text-indigo-400 py-2.5 border-b border-slate-800/60 font-medium text-sm"
            >
              Work
            </a>
            <a 
              href="#metrics" 
              onClick={(e) => handleNavClick(e, '#metrics')}
              className="block text-slate-300 hover:text-indigo-400 py-2.5 border-b border-slate-800/60 font-medium text-sm"
            >
              Impact
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="block text-slate-300 hover:text-indigo-400 py-2.5 border-b border-slate-800/60 font-medium text-sm"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 mt-2"
            >
              Start Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-8 sm:pt-16 md:pt-20 pb-16 sm:pb-32 px-4 sm:px-6 max-w-7xl mx-auto text-center md:text-left">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Next-Gen Creative Studio
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Architecting <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Digital Platforms</span> That Dominate Industries.
            </h1>
            
            <p className="text-slate-400 text-sm sm:text-base md:text-xl max-w-2xl font-normal leading-relaxed mx-auto md:mx-0">
              NEXUS combines high-end UI/UX architecture, spatial web design, and performant engineering to help tech leaders capture market dominance.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Launch Your Vision
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              
              <a 
                href="#work" 
                className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-200" />
                Explore Showcase
              </a>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-8 items-center text-center sm:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">$4.2B+</div>
                <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">Client Valuation Impact</div>
              </div>
              <div className="border-x border-slate-800 px-2 sm:px-0 sm:border-x-0">
                <div className="text-xl sm:text-2xl font-bold text-white">99.8%</div>
                <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">On-Time Delivery SLA</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">48+</div>
                <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">Global Design Awards</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-2.5 sm:p-3 shadow-2xl shadow-indigo-500/10">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80" 
                alt="NEXUS Platform Preview" 
                className="rounded-xl w-full h-[280px] sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 rounded-xl backdrop-blur-md bg-slate-900/80 border border-slate-800 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-300">Live Active Node</span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-indigo-400 font-mono">v4.8 Active</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white mt-1">Spatial Interface Engine Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-slate-900/40 border-y border-slate-800/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Core Capabilities</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Full-Stack Digital Innovation</h3>
            <p className="text-slate-400 text-sm sm:text-base">We replace fragmented agencies with an end-to-end design & engineering powerhouse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Layers, title: 'Product & Brand Systems', desc: 'Crafting comprehensive design languages, tokenized component libraries, and cohesive brand architectures.' },
              { icon: Globe, title: 'WebGL & Interactive Web', desc: 'Custom 3D graphics, shaders, and high-performance smooth-scroll web experiences built to amaze.' },
              { icon: Cpu, title: 'AI & SaaS Architecture', desc: 'Scalable cloud infrastructure, responsive dashboards, and intelligent AI platform workflows.' }
            ].map((s, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all hover:-translate-y-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 sm:mb-6">
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{s.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Selected Work</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-1 sm:mt-2">Pioneering Benchmark Products</h3>
          </div>
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300 font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
            View All Case Studies <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="h-56 sm:h-72 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between text-xs text-indigo-400 font-medium mb-2">
                  <span>{p.category}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px]">{p.tag}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact / Metrics Section */}
      <section id="metrics" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-slate-900/60 border-y border-slate-800/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Quantifiable Impact</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-8 sm:mb-12">Engineered For Exponential Growth</h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">$4.2B+</div>
              <div className="text-slate-400 text-xs sm:text-sm">Combined Client Valuation Boost</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
              <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">99.8%</div>
              <div className="text-slate-400 text-xs sm:text-sm">On-Time Architecture SLA</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">48+</div>
              <div className="text-slate-400 text-xs sm:text-sm">Global Design &amp; Tech Awards</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
              <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">120+</div>
              <div className="text-slate-400 text-xs sm:text-sm">Enterprise Platforms Deployed</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">About NEXUS Studio</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
              We Craft Software That Becomes Market Benchmark.
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Founded by veteran product architects and 3D visual engineers, NEXUS builds digital systems for hyper-growth technology companies. We bridge high-concept spatial UI design with resilient, multi-cloud backend performance.
            </p>
            <div className="space-y-2.5 sm:space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 shrink-0" />
                <span>Dedicated senior engineering team for every partner</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 shrink-0" />
                <span>Zero design-to-code loss with production design tokens</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 shrink-0" />
                <span>Continuous 24/7 post-deployment optimization</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 p-4 sm:p-6">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" 
              alt="NEXUS Studio Team" 
              className="rounded-xl w-full h-[240px] sm:h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact & Start Project Section */}
      <section id="contact" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-slate-900/50 border-t border-slate-800 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <span className="px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            Initiate Project
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white">
            Ready to Launch Your Vision?
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-xl mx-auto">
            Tell us about your upcoming platform or re-architecture initiative. Our leadership team responds within 4 business hours.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your project inquiry has been received.'); }} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 text-left max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <input 
              type="email" 
              placeholder="Work Email" 
              required 
              className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <textarea 
              placeholder="Tell us about your project goals..." 
              rows={4}
              required
              className="sm:col-span-2 w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <button 
              type="submit" 
              className="sm:col-span-2 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Submit Project Brief
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 bg-[#060911] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm text-center sm:text-left">
          <div className="flex items-center gap-2 sm:gap-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
            <span className="font-bold text-white tracking-wider">NEXUS STUDIO</span>
          </div>
          <p>© {new Date().getFullYear()} NEXUS Creative Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
