import { Sparkles, ArrowRight, Bookmark } from 'lucide-react';
import AdSlot from '../components/AdSlot';

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12 bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-2 inline-block">
            Documentation
          </span>
          <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-2">Design System & Style Guide</h1>
          <p className="text-neutral-600 text-sm font-sans">
            A comprehensive showcase of reusable UI components, typography scales, and interactive states powering the editorial magazine.
          </p>
        </div>

        {/* Typography Scale */}
        <section className="space-y-4 pt-6 border-t border-neutral-200">
          <h2 className="font-serif text-2xl font-bold text-neutral-900">Typography Scale</h2>
          <div className="space-y-3 bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
            <div>
              <span className="text-xs text-neutral-400 font-mono block mb-1">Display H1 (serif)</span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900">The Architecture of Silence</h1>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-mono block mb-1">Heading H2</span>
              <h2 className="font-serif text-3xl font-bold text-neutral-900">Reclaiming Tactile Cognition</h2>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-mono block mb-1">Heading H3</span>
              <h3 className="font-serif text-2xl font-bold text-neutral-900">Wabi-Sabi Workspaces</h3>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-mono block mb-1">Body Text (sans-serif)</span>
              <p className="text-neutral-700 text-base leading-relaxed font-sans">
                We live in an era of incessant notification, where the boundary between public engagement and private sanctuary has been algorithmically dissolved.
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-4 pt-6 border-t border-neutral-200">
          <h2 className="font-serif text-2xl font-bold text-neutral-900">Interactive Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
            <button className="bg-amber-700 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-xl text-sm transition-colors shadow-sm">
              Primary Amber Button
            </button>
            <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-6 py-3 rounded-xl text-sm transition-colors shadow-sm">
              Secondary Dark Button
            </button>
            <button className="bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-medium px-6 py-3 rounded-xl text-sm transition-colors shadow-sm inline-flex items-center gap-2">
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Badges & Tags */}
        <section className="space-y-4 pt-6 border-t border-neutral-200">
          <h2 className="font-serif text-2xl font-bold text-neutral-900">Badges & Tags</h2>
          <div className="flex flex-wrap gap-3 items-center bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Architecture
            </span>
            <span className="bg-neutral-900 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Featured
            </span>
            <span className="bg-amber-500/20 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Sponsored
            </span>
            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-neutral-200">
              #Minimalism
            </span>
          </div>
        </section>

        {/* AdSlots */}
        <section className="space-y-4 pt-6 border-t border-neutral-200">
          <h2 className="font-serif text-2xl font-bold text-neutral-900">Monetization AdSlots</h2>
          <AdSlot variant="in-content" title="Aura Handcrafted Timber Desk" sponsorName="Nordic Living Co." />
        </section>
      </div>
    </div>
  );
}
