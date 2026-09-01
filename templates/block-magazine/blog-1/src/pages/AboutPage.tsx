import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3 block">
          Editorial Manifesto
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-8">
          The Philosophy of Chronicle & Co.
        </h1>

        <div className="font-sans text-lg text-neutral-700 leading-relaxed space-y-6 mb-16">
          <p className="first-letter:float-left first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:text-amber-800">
            Chronicle & Co. was founded on a singular premise: that digital journalism should honor the reader's attention. In an internet saturated with algorithmic outrage and breathless headline optimization, we champion typographic rigor, generous whitespace, and unhurried intellectual inquiry.
          </p>
          <p>
            Whether examining the brutalist architecture of monastic retreats or investigating the cognitive impact of tactile software interfaces, our writers adhere to rigorous editorial independence and long-form depth.
          </p>
        </div>


      </div>
    </div>
  );
}
