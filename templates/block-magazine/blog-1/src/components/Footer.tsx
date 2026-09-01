import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Twitter, Linkedin, Facebook, Github, CheckCircle2 } from 'lucide-react';
import { subscribeNewsletter } from '../services/api';
import { MOCK_CATEGORIES } from '../data/mockData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await subscribeNewsletter(email);
      setStatus('success');
      setMessage(res.message);
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Subscription failed.');
    }
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter Section */}
        <div className="bg-neutral-800/60 border border-neutral-700/60 rounded-2xl p-8 lg:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2 block">
              The Weekly Dispatch
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-3">
              Thoughtful essays, delivered to your inbox every Sunday.
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              No sponsored noise or clickbait algorithms. Just deep-dive architecture, design philosophy, and cultural critiques.
            </p>
          </div>
          <div className="w-full lg:w-auto flex-shrink-0">
            {status === 'success' ? (
              <div className="flex items-center gap-2.5 bg-emerald-950/80 border border-emerald-800 text-emerald-300 px-6 py-4 rounded-xl text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{message}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-amber-500 min-w-[280px]"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-amber-700 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  <span>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-rose-400 text-xs mt-2">{message}</p>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              CHRONICLE<span className="text-amber-500 font-sans font-light"> & CO.</span>
            </span>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              An independent publication exploring architecture, technology, and culture with typographic rigor and uncompromising intellectual depth.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-neutral-800 hover:bg-amber-700 text-neutral-300 hover:text-white rounded-full transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-neutral-800 hover:bg-amber-700 text-neutral-300 hover:text-white rounded-full transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-neutral-800 hover:bg-amber-700 text-neutral-300 hover:text-white rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 bg-neutral-800 hover:bg-amber-700 text-neutral-300 hover:text-white rounded-full transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Categories</h4>
            <ul className="space-y-2.5 text-sm">
              {MOCK_CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.slug}`} className="hover:text-amber-400 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Editorial</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Manifesto</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Editorial Submissions</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Advertising & Press</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Spring Boot Backend Docs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-amber-400 transition-colors">Cookie Preferences</a></li>
              <li><a href="#ethics" className="hover:text-amber-400 transition-colors">Editorial Ethics</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Chronicle & Co. Magazine. All rights reserved.</p>
          <p>Designed for Spring Boot REST API Integration</p>
        </div>
      </div>
    </footer>
  );
}
