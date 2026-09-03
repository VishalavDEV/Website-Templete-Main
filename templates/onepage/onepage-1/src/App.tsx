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

  const projects = [
    { title: 'Aether OS — Spatial Computing Interface', category: '3D & WebGL', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', tag: 'Featured' },
    { title: 'Luminary — High-Frequency Fintech Platform', category: 'Product Engineering', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', tag: 'Case Study' },
    { title: 'Vanguard — Autonomous Robotics Dashboard', category: 'AI & Systems', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', tag: 'Design System' },
    { title: 'Helios — Clean Energy Intelligence Suite', category: 'Enterprise SaaS', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', tag: 'Product Strategy' }
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[20%] left-[15%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[130px]" />
        <div className="absolute -bottom-[20%] left-[30%] w-[700px] h-[700px] bg-violet-600/15 rounded-full blur-[160px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#090d16]/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              NEXUS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-indigo-400 transition-colors">Work</a>
            <a href="#metrics" className="hover:text-indigo-400 transition-colors">Impact</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto text-center md:text-left">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Next-Gen Creative Studio
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Architecting <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Digital Platforms</span> That Dominate Industries.
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-normal leading-relaxed">
              NEXUS combines high-end UI/UX architecture, spatial web design, and performant engineering to help tech leaders capture market dominance.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
              >
                Launch Your Vision
                <ArrowUpRight className="w-5 h-5" />
              </a>
              
              <a 
                href="#work" 
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-slate-200" />
                Explore Showcase
              </a>
            </div>

            <div className="pt-8 border-t border-slate-800/80 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-white">$4.2B+</div>
                <div className="text-xs text-slate-400">Client Valuation Impact</div>
              </div>
              <div className="h-8 w-[1px] bg-slate-800" />
              <div>
                <div className="text-2xl font-bold text-white">99.8%</div>
                <div className="text-xs text-slate-400">On-Time Delivery SLA</div>
              </div>
              <div className="h-8 w-[1px] bg-slate-800" />
              <div>
                <div className="text-2xl font-bold text-white">48+</div>
                <div className="text-xs text-slate-400">Global Design Awards</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-3 shadow-2xl shadow-indigo-500/10">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80" 
                alt="NEXUS Platform Preview" 
                className="rounded-xl w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-300">Live Active Node</span>
                  </div>
                  <span className="text-xs text-indigo-400 font-mono">v4.8 Active</span>
                </div>
                <p className="text-sm font-semibold text-white mt-1">Spatial Interface Engine Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="relative z-10 py-24 px-6 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Core Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Full-Stack Digital Innovation</h3>
            <p className="text-slate-400">We replace fragmented agencies with an end-to-end design & engineering powerhouse.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: 'Product & Brand Systems', desc: 'Crafting comprehensive design languages, tokenized component libraries, and cohesive brand architectures.' },
              { icon: Globe, title: 'WebGL & Interactive Web', desc: 'Custom 3D graphics, shaders, and high-performance smooth-scroll web experiences built to amaze.' },
              { icon: Cpu, title: 'AI & SaaS Architecture', desc: 'Scalable cloud infrastructure, responsive dashboards, and intelligent AI platform workflows.' }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                  <s.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Selected Work</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Pioneering Benchmark Products</h3>
          </div>
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm flex items-center gap-2">
            View All Case Studies <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="h-72 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-indigo-400 font-medium mb-2">
                  <span>{p.category}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">{p.tag}</span>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 bg-[#060911] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-white">NEXUS STUDIO</span>
          </div>
          <p>© {new Date().getFullYear()} NEXUS Creative Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
