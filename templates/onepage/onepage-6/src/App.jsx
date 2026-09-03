import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  Compass, 
  Target, 
  CheckCircle2, 
  ChevronRight, 
  Calendar, 
  Send, 
  X
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const portfolioItems = [
    { id: 1, category: 'branding', title: 'Vanguard Capital', desc: 'Complete brand identity & positioning for fintech leader', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', tag: 'Brand Strategy' },
    { id: 2, category: 'digital', title: 'Lumora OS', desc: 'Design system & digital identity framework', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', tag: 'UI/UX System' },
    { id: 3, category: 'editorial', title: 'Aura Monograph', desc: 'Print collateral & luxury hardcover publication', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', tag: 'Editorial Design' },
    { id: 4, category: 'branding', title: 'Zephyr Mobility', desc: 'EV startup rebrand & spatial identity', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', tag: 'Identity' },
  ];

  const filteredPortfolio = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-amber-500 selection:text-black">
      {/* Top Bar Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07090e]/80 backdrop-blur-lg border-b border-slate-800/60 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-black text-xl font-syne">
              E
            </div>
            <span className="font-syne text-xl font-bold tracking-widest text-white">ELEVATE</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a>
            <a href="#metrics" className="hover:text-amber-400 transition-colors">Metrics</a>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-gold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow-lg"
          >
            <span>Book Consultation</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-8">
            <Sparkles size={14} />
            <span>Strategic Branding & Digital Identity Studio</span>
          </div>

          <h1 className="font-syne text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Elevate Your Brand Perception <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
              & Market Equity.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed mb-10">
            We partner with visionary founders and enterprise leaders to craft modern visual identities, strategic messaging, and digital artifacts that command authority.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-gold px-8 py-4 rounded-xl text-base flex items-center gap-3"
            >
              <span>Start Strategy Brief</span>
              <ChevronRight size={18} />
            </button>

            <a 
              href="#portfolio"
              className="px-8 py-4 rounded-xl text-base font-semibold bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
            >
              Explore Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white mb-4">Core Brand Capabilities</h2>
            <p className="text-slate-400 text-sm md:text-base">Engineering brand dominance through structured strategy and creative execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glow-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Compass size={24} />
              </div>
              <h3 className="font-syne text-xl font-bold text-white mb-3">Brand Strategy & Architecture</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Market positioning, audience psychology, competitive moat definition, and narrative frameworks designed for market leadership.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Positioning Matrix</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Brand Archetype & Tone</li>
              </ul>
            </div>

            <div className="glow-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Layers size={24} />
              </div>
              <h3 className="font-syne text-xl font-bold text-white mb-3">Visual Identity Systems</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Logomarks, custom typography, color harmony tokens, and comprehensive brand guidelines built for multi-channel scale.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Scalable Design Systems</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Brand Style Guidelines</li>
              </ul>
            </div>

            <div className="glow-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="font-syne text-xl font-bold text-white mb-3">Digital Touchpoints</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Editorial websites, high-converting product landing pages, motion graphics, and interactive investor showcases.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Responsive Web Apps</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Motion & Interactive Artifacts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Case Studies */}
      <section id="portfolio" className="py-24 px-6 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="font-syne text-3xl md:text-5xl font-bold text-white mb-4">Selected Case Studies</h2>
              <p className="text-slate-400 text-sm md:text-base">Transforming brands into category leaders.</p>
            </div>

            <div className="flex items-center gap-2 mt-6 md:mt-0 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              {['all', 'branding', 'digital', 'editorial'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all ${
                    activeTab === tab 
                      ? 'bg-amber-500 text-black shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPortfolio.map(item => (
              <div key={item.id} className="glow-card rounded-2xl overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-md text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-syne text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight size={20} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-20 px-6 border-t border-slate-800/60 bg-amber-500/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-syne text-4xl md:text-6xl font-extrabold text-amber-400 mb-2">240%</div>
            <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider">Avg. Valuation Lift</p>
          </div>
          <div>
            <div className="font-syne text-4xl md:text-6xl font-extrabold text-white mb-2">98.4%</div>
            <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider">Client Retention</p>
          </div>
          <div>
            <div className="font-syne text-4xl md:text-6xl font-extrabold text-amber-400 mb-2">12+</div>
            <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider">Design Awards</p>
          </div>
          <div>
            <div className="font-syne text-4xl md:text-6xl font-extrabold text-white mb-2">150+</div>
            <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider">Brands Elevated</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-syne text-slate-300 font-bold">
            <span className="text-amber-400">ELEVATE</span> Studio &copy; {new Date().getFullYear()}
          </div>
          <p>Strategic Branding, Identity Architecture & Digital Artifacts.</p>
        </div>
      </footer>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-amber-500/30 rounded-2xl p-8 shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-amber-400" size={24} />
                  <div>
                    <h3 className="font-syne text-xl font-bold text-white">Book Strategy Session</h3>
                    <p className="text-xs text-slate-400">30-min brand diagnostic with our Creative Director.</p>
                  </div>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Alexander Wright" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="alexander@company.com" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <button type="submit" className="w-full btn-gold py-3 rounded-lg text-sm flex items-center justify-center gap-2">
                    <span>Submit Strategic Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-syne text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-slate-300">Our Strategy Director will contact you within 24 hours.</p>
                <button 
                  onClick={() => { setIsModalOpen(false); setFormSubmitted(false); }}
                  className="btn-gold px-6 py-2 rounded-lg text-xs"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
